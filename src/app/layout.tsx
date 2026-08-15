import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bitnexinfotech.com";
const LOGO_SQUARE = "/images/logo-square.png";
const SITE_DESCRIPTION =
  "Bitnex Infotech delivers cutting-edge software solutions including web development, mobile apps, cloud infrastructure, and DevOps services.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bitnex Infotech - Cutting-edge Software Solutions",
    template: "%s | Bitnex Infotech",
  },
  icons: {
    icon: [{ url: LOGO_SQUARE, sizes: "1024x1024", type: "image/png" }],
    shortcut: LOGO_SQUARE,
  },
  manifest: "/site.webmanifest",
  description: SITE_DESCRIPTION,
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "DevOps",
    "AWS",
    "cloud solutions",
    "digital transformation",
  ],
  authors: [{ name: "Bitnex Infotech Team" }],
  creator: "Bitnex Infotech",
  publisher: "Bitnex Infotech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bitnex Infotech",
    title: "Bitnex Infotech - Cutting-edge Software Solutions",
    description:
      "Transform your business with modern software solutions. Expert web development, mobile apps, and cloud infrastructure services.",
    images: [
      {
        url: LOGO_SQUARE,
        width: 1024,
        height: 1024,
        alt: "Bitnex Infotech - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitnex Infotech - Cutting-edge Software Solutions",
    description:
      "Transform your business with modern software solutions. Expert web development, mobile apps, and cloud infrastructure services.",
    images: [LOGO_SQUARE],
    creator: "@bitnexinfotech",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bitnex Infotech",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={LOGO_SQUARE} type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Bitnex Infotech",
                  url: SITE_URL,
                  logo: `${SITE_URL}${LOGO_SQUARE}`,
                  description: SITE_DESCRIPTION,
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Bitnex Infotech",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XFTFK11D8R"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFTFK11D8R');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
