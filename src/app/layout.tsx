import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bitnexinfotech.com"),
  title: {
    default: "Bitnex Infotech - Cutting-edge Software Solutions",
    template: "%s | Bitnex Infotech",
  },
  description:
    "Bitnex Infotech delivers cutting-edge software solutions including web development, mobile apps, cloud infrastructure, and DevOps services. Transform your business with modern technology.",
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
    url: "https://bitnexinfotech.com",
    siteName: "Bitnex Infotech",
    title: "Bitnex Infotech - Cutting-edge Software Solutions",
    description:
      "Transform your business with modern software solutions. Expert web development, mobile apps, and cloud infrastructure services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bitnex Infotech - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitnex Infotech - Cutting-edge Software Solutions",
    description:
      "Transform your business with modern software solutions. Expert web development, mobile apps, and cloud infrastructure services.",
    images: ["/og-image.jpg"],
    creator: "@bitnexinfotech",
  },
  alternates: {
    canonical: "https://bitnexinfotech.com",
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
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
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
