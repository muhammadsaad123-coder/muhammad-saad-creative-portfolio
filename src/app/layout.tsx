import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadsaad.dev"),
  title: {
    default: "Muhammad Saad | Social Media & AI Content Creator",
    template: "%s | Muhammad Saad"
  },
  description:
    "Creative portfolio of Muhammad Saad — Social Media & AI Content Creator. Crafting engaging social media content, AI-powered promotional videos, and high-impact digital marketing visuals.",
  keywords: [
    "Muhammad Saad",
    "Social Media Executive",
    "AI Content Creator",
    "Promotional Video Editor",
    "Brand Content Executive",
    "Digital Marketing Pakistan",
    "Taxila Content Creator",
    "CapCut Video Editor",
    "Canva Designer",
    "Google Flow AI",
    "Dynamic Solutions Pakistan",
    "Creative Director Portfolio"
  ],
  authors: [{ name: "Muhammad Saad", url: "https://www.linkedin.com/in/muhammadsaad023/" }],
  creator: "Muhammad Saad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadsaad.dev",
    title: "Muhammad Saad | Social Media & AI Content Creator",
    description:
      "Creating engaging digital experiences, AI promotional videos, and strategic brand content that make brands stand out.",
    siteName: "Muhammad Saad Portfolio",
    images: [
      {
        url: "/images/thumbnails/dynamic-business-suite.svg",
        width: 1280,
        height: 720,
        alt: "Muhammad Saad - Creative Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saad | Social Media & AI Content Creator",
    description:
      "Engaging social media content, AI-powered promotional videos, and digital marketing visuals.",
    images: ["/images/thumbnails/dynamic-business-suite.svg"],
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
  icons: {
    icon: "/images/branding/ms-logo.svg",
    apple: "/images/branding/ms-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Saad",
    alternateName: "MS",
    jobTitle: "Social Media & AI Content Creator",
    description:
      "Creating engaging social media content, AI-powered promotional videos, and digital marketing visuals that help brands communicate their value.",
    email: "mailto:muhammadsaad.webdev@gmail.com",
    telephone: "+92-3225425081",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taxila",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "COMSATS University Islamabad",
    },
    sameAs: [
      "https://www.linkedin.com/in/muhammadsaad023/",
    ],
    knowsAbout: [
      "Social Media Management",
      "AI Video Creation",
      "Video Editing",
      "Canva Design",
      "CapCut Video Production",
      "Google Flow",
      "Digital Marketing",
      "SEO",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bgDark text-primaryText min-h-screen selection:bg-accent selection:text-bgDark flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
