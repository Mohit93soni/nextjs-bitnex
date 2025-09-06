import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const LOGO_BASE = "https://cdn.builder.io/api/v1/image/assets%2F00bbbe83bd864c758548dbeefa6488bb%2F0da2c468c5924159b241ac023fdc0adf";
const LOGO_16 = `${LOGO_BASE}?format=png&width=16`;
const LOGO_32 = `${LOGO_BASE}?format=png&width=32`;
const LOGO_48 = `${LOGO_BASE}?format=png&width=48`;
const LOGO_180 = `${LOGO_BASE}?format=png&width=180`;
const LOGO_512 = `${LOGO_BASE}?format=png&width=512`;
const OG_IMAGE = `${LOGO_BASE}?format=png&width=1200`;

export const metadata: Metadata = {
  metadataBase: new URL("https://bitnexinfotech.com"),
  title: {
    default: "Bitnex Infotech - Cutting-edge Software Solutions",
    template: "%s | Bitnex Infotech",
  },
  icons: {
    icon: [
      { url: LOGO_16, sizes: "16x16", type: "image/png" },
      { url: LOGO_32, sizes: "32x32", type: "image/png" },
      { url: LOGO_48, sizes: "48x48", type: "image/png" },
      { url: LOGO_512, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: LOGO_180, sizes: "180x180", type: "image/png" }],
    shortcut: LOGO_32,
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
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
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
