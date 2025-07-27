# Bitnex Infotech - Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Email Configuration (Required for contact forms)
GMAIL_USER=bitnexinfotech@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password

# Google reCAPTCHA (Required for spam protection)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

### 2. Email Setup
1. Enable 2-Factor Authentication on bitnexinfotech@gmail.com
2. Go to Google Account settings → Security → App passwords
3. Generate a new app password for "Mail"
4. Use this 16-character password in `GMAIL_APP_PASSWORD`

### 3. reCAPTCHA Setup
1. Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Create a new site with reCAPTCHA v2 "I'm not a robot"
3. Add your domain(s)
4. Copy Site Key to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
5. Copy Secret Key to `RECAPTCHA_SECRET_KEY`

### 4. Install Dependencies
```bash
npm install
```

### 5. Development
```bash
npm run dev
```

### 6. Production Build
```bash
npm run build
npm start
```

## 🌐 Deployment Platforms

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Other Platforms
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📧 Contact Form Testing

Once deployed, test both contact forms:
1. Homepage "Get Free Quote" form
2. Contact page form

Both should send emails to bitnexinfotech@gmail.com

## 🔧 Troubleshooting

### Common Issues:
1. **Email not sending**: Check Gmail app password and 2FA setup
2. **reCAPTCHA not working**: Verify site key and domain settings
3. **Build errors**: Check TypeScript errors with `npm run type-check`

### Environment Variables:
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Keep secret keys (like GMAIL_APP_PASSWORD) server-side only

## 📱 Features Included

✅ **Complete website** with all pages
✅ **Responsive design** for all devices  
✅ **SEO optimized** with proper metadata
✅ **Contact forms** with email integration
✅ **Spam protection** with reCAPTCHA
✅ **Technology icons** and modern UI
✅ **Staffing solutions** service included
✅ **Professional branding** for Bitnex Infotech

---

© 2024 Bitnex Infotech. All rights reserved.
