import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bitnex Infotech | Get a Software Development Quote",
  description:
    "Contact Bitnex Infotech to discuss web development, mobile apps, cloud solutions, and custom software for your business.",
  keywords:
    "contact software company, software development quote, web development consultation, Bitnex Infotech",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
