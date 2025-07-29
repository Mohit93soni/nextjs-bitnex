import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Validation schema
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  recaptchaToken: z.string().min(1, "reCAPTCHA is required"),
});

// reCAPTCHA verification function
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// Create transporter (using Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "your-email@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "your-app-password",
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = ContactFormSchema.parse(body);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(
      validatedData.recaptchaToken
    );
    if (!isRecaptchaValid) {
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission from Bitnex Infotech Website

Name: ${validatedData.name}
Email: ${validatedData.email}
Company: ${validatedData.company || "Not provided"}
Service Interested In: ${validatedData.service || "Not specified"}
Project Budget: ${validatedData.budget || "Not specified"}

Message:
${validatedData.message}

---
This email was sent from the Bitnex Infotech website contact form.
`;

    // Email options
    const mailOptions = {
      from: `"Bitnex Infotech Website" <${
        process.env.GMAIL_USER || "noreply@bitnexinfotech.com"
      }>`,
      to: "bitnexinfotech@gmail.com",
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${
              validatedData.email
            }">${validatedData.email}</a></p>
            <p><strong>Company:</strong> ${
              validatedData.company || "Not provided"
            }</p>
            <p><strong>Service Interested In:</strong> ${
              validatedData.service || "Not specified"
            }</p>
            <p><strong>Project Budget:</strong> ${
              validatedData.budget || "Not specified"
            }</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            This email was sent from the Bitnex Infotech website contact form.
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
