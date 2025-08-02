import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "./LenisProvider";
import AppWithLoader from "./components/AppWithLoader";

const GTAG_ID = "G-B2DEL0NCC1"; // TODO: Move to .env.local

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ryzen Solutions | Full-Service Digital Agency | UI/UX, AI, Web Development, SEO, Branding",
  description:
    "Ryzen Solutions is a full-service digital agency specializing in UI/UX Design, AI Automation, Web Development, WordPress, Branding, SEO, Digital Marketing, and Hosting & Maintenance. We help businesses thrive with creative, scalable, and results-driven solutions.",
  keywords: [
    "Ryzen Solutions",
    "Digital Agency",
    "UI/UX Design",
    "AI Automation",
    "Web Development",
    "WordPress",
    "Branding",
    "SEO",
    "Digital Marketing",
    "Hosting",
    "Maintenance",
    "Creative Agency",
    "Business Solutions",
    "Next.js",
    "React",
    "Figma",
    "Automation",
    "Lead Generation",
    "Web Design",
    "Web App Development",
  ],
  openGraph: {
    title: "Ryzen Solutions | Full-Service Digital Agency",
    description:
      "Ryzen Solutions delivers UI/UX Design, AI Automation, Web Development, Branding, SEO, and more. Empowering brands with innovation and digital excellence.",
    url: "https://ryzensol.com/",
    siteName: "Ryzen Solutions",
    images: [
      {
        url: "https://ryzensol.com/Portfolio/project%20(10).jpg", // ✅ updated with full URL and encoded space
        width: 1200,
        height: 630,
        alt: "Ryzen Solutions Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ryzensol",
    title: "Ryzen Solutions | Full-Service Digital Agency",
    description:
      "Ryzen Solutions delivers UI/UX Design, AI Automation, Web Development, Branding, SEO, and more. Empowering brands with innovation and digital excellence.",
    images: ["https://ryzensol.com/Portfolio/project%20(10).jpg"], // ✅ full URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://ryzensol.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark bg-background text-primaryText overflow-x-hidden"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Organization & Website Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ryzen Solutions",
              url: "https://ryzensol.com/",
              logo: "https://ryzensol.com/favicon.ico",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "Global.business@ryzensol.com",
                  contactType: "customer support",
                  areaServed: "Global",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: ["https://www.linkedin.com/company/ryzensol"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://ryzensol.com/",
              name: "Ryzen Solutions",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ryzensol.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        {/* Main App Content */}
        <LenisProvider>
          <AppWithLoader>{children}</AppWithLoader>
        </LenisProvider>
        {/* Google Tag Script - Placed at the end of body for better performance */}
        <Script
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
