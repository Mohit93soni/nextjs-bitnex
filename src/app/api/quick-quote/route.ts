import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const QuickQuoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
  recaptchaToken: z.string().min(1, "reCAPTCHA is required"),
});

// reCAPTCHA verification function
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LcGPCAqAAAAADgZXxGRAEKLELGhPcfQTowIYPcq';
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Create transporter (using Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'your-email@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
  }
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = QuickQuoteSchema.parse(body);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json({
        success: false,
        message: "reCAPTCHA verification failed. Please try again."
      }, { status: 400 });
    }

    // Prepare email content
    const emailContent = `
New Quick Quote Request from Bitnex Infotech Website

Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}

---
This email was sent from the Bitnex Infotech website quick quote form.
`;

    // Email options
    const mailOptions = {
      from: `"Bitnex Infotech Website" <${process.env.GMAIL_USER || 'noreply@bitnexinfotech.com'}>`,
      to: 'bitnexinfotech@gmail.com',
      subject: `Quick Quote Request from ${validatedData.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            Quick Quote Request
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Project Details</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            This email was sent from the Bitnex Infotech website quick quote form.
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your quote request! We'll send you a custom proposal within 24 hours." 
    });

  } catch (error) {
    console.error('Quick quote error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Invalid form data",
        errors: error.errors
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: "Sorry, there was an error sending your request. Please try again later."
    }, { status: 500 });
  }
}
