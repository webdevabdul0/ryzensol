import type { Metadata } from "next";
import Head from "next/head";
import FAQClient from "./FAQClient";

const QuestionsAnswers = [
  {
    id: 1,
    question: "Who are you and what do you do?",
    answer:
      "We are Ryzen Solutions, a full-service digital agency specializing in UI/UX Design, AI Automation, Web Development, WordPress, Branding, SEO, Digital Marketing, and Hosting & Maintenance. Our team builds scalable web apps, intuitive designs, and AI-driven digital products for businesses of all sizes.",
  },
  {
    id: 2,
    question: "What technologies do you specialize in?",
    answer:
      "Our team works with frontend technologies like React.js, Next.js, and TailwindCSS, backend technologies like Node.js, Express.js, and Firebase, AI tools, and UI/UX design tools like Figma and Adobe XD. We also offer expertise in WordPress, SEO, and digital marketing platforms.",
  },
  {
    id: 3,
    question: "What types of projects have you worked on?",
    answer:
      "We’ve delivered AI-powered applications, dashboards, SaaS products, business websites, and branding solutions. Our projects focus on AI integration, seamless UX, and high-performance web development for a variety of industries.",
  },
  {
    id: 4,
    question: "Do you take on freelance or contract work?",
    answer:
      "We work with businesses and organizations on both project-based and ongoing contracts. If you have an exciting project or need a reliable digital partner, our team is ready to help!",
  },
  {
    id: 5,
    question: "Do you develop both frontend and backend?",
    answer:
      "Yes! Ryzen Solutions specializes in full-stack web development, ensuring smooth integration between frontend and backend, and incorporating AI-driven features to enhance functionality.",
  },
  {
    id: 6,
    question: "How can I contact you?",
    answer:
      "You can reach us via email at contact@ryzensolutions.com or connect with us through our website’s contact form.",
  },
];

export const metadata: Metadata = {
  title: "FAQ | Ryzen Solutions - Frequently Asked Questions",
  description: "Find answers to common questions about Ryzen Solutions, our digital agency services, technologies, project types, and how to contact us for your next project.",
};

export default function FAQPage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            ...QuestionsAnswers.map(q => ({
              "@type": "Question",
              "name": q.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
              }
            }))
          ],
          "url": "https://ryzensol.com/about#Faq"
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryzensol.com/" },
            { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://ryzensol.com/about#Faq" }
          ]
        }) }} />
      </Head>
      <FAQClient />
    </>
  );
}
