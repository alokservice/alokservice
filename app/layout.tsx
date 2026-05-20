import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FloatingContactBtn } from "@/components/shared/floating-contact-btn";
import { LocalBusinessScript, OrganizationScript, WebsiteScript } from "@/components/shared/schema-scripts";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – Premium Home & Healthcare Services in Dhaka`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "home services dhaka",
    "healthcare services bangladesh",
    "cleaning service dhaka",
    "nursing service",
    "baby care service",
    "patient care dhaka",
    "home care bangladesh",
    "facility management",
    "pest control dhaka",
    "alok service",
  ].join(", "),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – Premium Home & Healthcare Services`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Premium Home & Healthcare Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Premium Home & Healthcare Services`,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@alokservice",
  },
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
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1e3a5f" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <LocalBusinessScript />
        <OrganizationScript />
        <WebsiteScript />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactBtn />
      </body>
    </html>
  );
}
