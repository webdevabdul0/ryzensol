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
  title: "Ryzen Solutions",
  description: "Ryzen Solutions – Full-Service Digital Agency: UI/UX Design, AI Automation, Web Development, WordPress, Branding, SEO, Digital Marketing, Hosting & Maintenance.",
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
      <head></head>
      <body className={`${manrope.variable} antialiased`}>
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
