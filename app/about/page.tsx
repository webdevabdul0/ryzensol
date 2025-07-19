import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Hero from "./Hero";
import FAQ from "./FAQ";
import About from "./About";
import Contact from "./Contact";
import type { Metadata } from "next";
import Head from "next/head";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Ryzen Solutions - Digital Agency",
  description: "Learn about Ryzen Solutions, our mission, team, and expertise in UI/UX Design, AI Automation, Web Development, Branding, SEO, and more. Discover how we empower brands with innovation and digital excellence.",
  alternates: {
    canonical: "https://ryzensol.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Us | Ryzen Solutions",
          "description": "Learn about Ryzen Solutions, our mission, team, and expertise in UI/UX Design, AI Automation, Web Development, Branding, SEO, and more.",
          "url": "https://ryzensol.com/about"
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryzensol.com/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ryzensol.com/about" }
          ]
        }) }} />
      </Head>
      <AboutClient />
    </>
  );
} 