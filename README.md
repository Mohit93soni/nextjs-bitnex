# Bitnex Infotech - Next.js Website

A modern, SEO-optimized website for Bitnex Infotech software company built with **Next.js 14**, featuring comprehensive company pages, contact forms, Google reCAPTCHA protection, and performance optimizations.

## 🚀 **Features**

### **SEO & Performance**
- ✅ **Next.js 14** with App Router for optimal performance
- ✅ **Server-side rendering (SSR)** for better SEO
- ✅ **Structured metadata** with Open Graph and Twitter Cards
- ✅ **Semantic HTML** and accessibility features
- ✅ **Optimized images** and fonts
- ✅ **Fast page loads** with code splitting

### **Pages & Functionality**
- ✅ **Homepage** with hero section, services, projects, testimonials
- ✅ **Services** page with detailed offerings including:
  - Web Development, Mobile Apps, Cloud Solutions
  - Backend Development, Security & Compliance
  - Performance Optimization, **Staffing Solutions**
  - Technology icons and "Let's talk for best price"
- ✅ **About Us** with team profiles and company story
- ✅ **Careers** page with job listings and benefits
- ✅ **Blog** with articles and search functionality
- ✅ **Contact** page with interactive forms
- ✅ **Legal pages** (Privacy Policy, Terms, Cookies)

### **Contact Forms & Security**
- ✅ **Email integration** with Nodemailer
- ✅ **Google reCAPTCHA v2** spam protection
- ✅ **Form validation** with Zod schemas
- ✅ **Professional email templates**
- ✅ **Real-time form feedback**
- ✅ **Server-side verification**

### **Design & UI**
- ��� **Modern Bitnex Infotech branding** with gradient themes
- ✅ **Technology icons** for React, Next.js, AWS, Docker, etc.
- ✅ **Responsive design** for all devices
- ✅ **Tailwind CSS** for styling
- ✅ **Radix UI** components
- ✅ **Smooth animations** and hover effects
- ✅ **Professional color scheme** and typography

## 🛠️ **Tech Stack**

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Email**: Nodemailer
- **Validation**: Zod
- **Security**: Google reCAPTCHA v2
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 **Installation**

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file:
   ```env
   # Email Configuration
   GMAIL_USER=bitnexinfotech@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   
   # reCAPTCHA Configuration
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
   RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📧 **Email Setup**

To enable contact form functionality:

1. **Enable 2-Factor Authentication** on bitnexinfotech@gmail.com
2. **Generate App Password**:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Create password for "Mail"
3. **Add credentials** to `.env.local` file

## 🔐 **reCAPTCHA Setup**

To enable spam protection:

1. **Go to Google reCAPTCHA Console**: https://www.google.com/recaptcha/admin/create
2. **Create New Site**:
   - Choose "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - Add your domain(s)
3. **Get Your Keys** and add to `.env.local`

## 🔧 **Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
```

## 📁 **Project Structure**

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Homepage
│   ├─��� contact/         # Contact page
│   ├── globals.css      # Global styles
│   └── api/             # API routes
│       ├── contact/     # Contact form API
│       └── quick-quote/ # Quick quote API
├── components/          # React components
│   ├── ui/              # UI component library
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── Layout.tsx       # Page layout wrapper
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── types/               # TypeScript types
```

## ✨ **Key Features Converted**

### **From React Router to Next.js:**
- ✅ Converted all `Link` components from React Router to Next.js
- ✅ Updated routing from client-side to file-based routing
- ✅ Converted `useHistory` and navigation patterns

### **From Express API to Next.js API:**
- ✅ Converted `/api/contact` endpoint
- ✅ Converted `/api/quick-quote` endpoint
- ✅ Maintained all email functionality
- ✅ Kept reCAPTCHA verification

### **Enhanced SEO:**
- ✅ Added comprehensive metadata
- ✅ Structured data and Open Graph tags
- ✅ Server-side rendering for better crawling
- ✅ Optimized performance and Core Web Vitals

## 🎨 **Customization**

### **Branding**
- Update colors in `src/app/globals.css`
- Modify gradients and theme variables
- Replace logo and brand assets

### **Content**
- Edit page content in `src/app/` files
- Update company information in components
- Modify services, team, and project data

### **Email Templates**
- Customize email designs in API routes
- Update recipient email addresses
- Modify notification messages

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms**
- **Netlify**: Compatible with build settings
- **Railway**: Node.js hosting with database options
- **DigitalOcean**: App Platform deployment

## 📊 **SEO Features**

- ✅ **Meta tags** for all pages
- ✅ **Open Graph** and Twitter Cards
- ✅ **Structured data** markup
- ✅ **XML sitemap** generation
- ✅ **Robots.txt** configuration
- ✅ **Canonical URLs**
- ✅ **Image optimization**

## 🔐 **Security Features**

- ✅ **Google reCAPTCHA v2** prevents spam and bots
- ✅ **Environment variables** for sensitive data
- ✅ **Form validation** on client and server
- ✅ **CSRF protection** with Next.js
- ✅ **Secure headers** configuration
- ✅ **Input sanitization**

## 📞 **Support**

For technical support or questions:
- **Email**: tech@bitnexinfotech.com
- **Documentation**: Refer to Next.js docs
- **Issues**: Check console for error messages

## ✅ **Migration Complete**

Your React application has been successfully converted to **Next.js 14** with:

- 🚀 **Better Performance** with SSR and optimizations
- 🔍 **Enhanced SEO** with structured metadata
- 🛡️ **Security** with reCAPTCHA protection
- 📱 **Responsive Design** maintained
- ✉️ **Email Functionality** working
- 🎨 **Modern UI** with all features intact

## 📄 **License**

© 2024 Bitnex Infotech. All rights reserved.

This is a proprietary software solution developed for Bitnex Infotech.
