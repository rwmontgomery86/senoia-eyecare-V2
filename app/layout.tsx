import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import { site } from "@/data/site";
import {
  optometristSchema,
  webSiteSchema,
} from "@/lib/structured-data";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Senoia Eyecare — Considered Eyewear. Comprehensive Care.",
    template: "%s — Senoia Eyecare",
  },
  description:
    "A boutique optometry practice in Senoia, Georgia. Hand-picked designer frames and unhurried, comprehensive eye exams.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Health",
  keywords: [
    "optometrist",
    "eye exam",
    "Senoia",
    "Senoia Georgia",
    "Coweta County optometrist",
    "contact lens fitting",
    "pediatric eye exam",
    "designer eyewear",
    "Maui Jim",
    "boutique optometry",
  ],
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Senoia Eyecare",
    description:
      "Boutique optometry in Senoia, Georgia. Considered eyewear. Comprehensive care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senoia Eyecare",
    description:
      "Boutique optometry in Senoia, Georgia. Considered eyewear. Comprehensive care.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [optometristSchema(), webSiteSchema()];
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-paper text-ink font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
