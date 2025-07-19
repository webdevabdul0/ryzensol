import React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Ryzen Solutions - Get in Touch",
  description: "Contact Ryzen Solutions for UI/UX Design, AI Automation, Web Development, Branding, SEO, and more. Reach out to our team for innovative digital solutions and business growth.",
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact | Ryzen Solutions",
          "description": "Contact Ryzen Solutions for UI/UX Design, AI Automation, Web Development, Branding, SEO, and more.",
          "url": "https://ryzensol.com/about#Contact"
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryzensol.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://ryzensol.com/about#Contact" }
          ]
        }) }} />
      </Head>
      <ContactClient />
    </>
  );
}
