import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./_components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CSS Border Corner Shape Generator - Interactive Playground",
    template: "%s | CSS Corner Shape Generator",
  },
  description:
    "Free interactive tool to generate and visualize CSS corner-shape property. Experiment with squircle, round, scoop, bevel, notch, and custom superellipse corner styles. Get instant CSS code with live preview.",
  keywords: [
    "CSS corner-shape",
    "border corner shape",
    "CSS border radius",
    "squircle CSS",
    "corner shape generator",
    "CSS corner styles",
    "superellipse CSS",
    "round corners",
    "bevel corners",
    "notch corners",
    "scoop corners",
    "CSS playground",
    "border radius tool",
    "CSS generator",
    "corner shape visualizer",
  ],
  authors: [{ name: "Enigma", url: "https://madebyenigma.com" }],
  creator: "Enigma",
  publisher: "Enigma",
  metadataBase: new URL("https://corner-shape.madebyenigma.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corner-shape.madebyenigma.com",
    siteName: "CSS Corner Shape Generator",
    title: "CSS Border Corner Shape Generator - Interactive Playground",
    description:
      "Free interactive tool to generate and visualize CSS corner-shape property. Experiment with squircle, round, scoop, bevel, notch, and custom superellipse corner styles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CSS Corner Shape Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Border Corner Shape Generator - Interactive Playground",
    description:
      "Free interactive tool to generate and visualize CSS corner-shape property. Experiment with different corner styles and get instant CSS code.",
    images: ["/og-image.png"],
    creator: "@madebyenigma",
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
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "web development",
  classification: "CSS Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CSS Border Corner Shape Generator",
    description:
      "Free interactive tool to generate and visualize CSS corner-shape property. Experiment with squircle, round, scoop, bevel, notch, and custom superellipse corner styles.",
    url: "https://corner-shape.madebyenigma.com",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Enigma",
      url: "https://madebyenigma.com",
    },
    featureList: [
      "Interactive corner shape preview",
      "Real-time CSS code generation",
      "Multiple corner styles (squircle, round, scoop, bevel, notch, superellipse)",
      "Adjustable border radius",
      "Custom preview dimensions",
      "Live code output",
    ],
    browserRequirements: "Requires Chrome, Edge, or Chromium-based browser",
    softwareVersion: "1.0",
    datePublished: "2024-01-01",
    inLanguage: "en-US",
  };

  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="h-screen relative max-h-screen bg-zinc-50 font-sans dark:bg-black flex flex-col">
          <header className="flex z-50 w-full px-8 py-4 border-b dark:border-zinc-700 border-zinc-200 bg-white dark:bg-zinc-900 items-center justify-between">
            <div
              className="text-2xl font-bold"
              aria-label="CSS Border Corner Shape Generator"
            >
              CSS Border Corner Shape Generator
            </div>
            {/* <ThemeToggle /> */}
          </header>
          <main className="h-[calc(100vh-64px)] overflow-scroll" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
