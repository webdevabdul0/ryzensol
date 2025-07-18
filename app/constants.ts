export const navLinks = [
  { title: "Testimonials", href: "#Testimonials" },
  { title: "Services", href: "#Services" },
  { title: "FAQ", href: "#Faq" },
  { title: "Contact", href: "#Contact" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/ryzensolutions/", icon: "/Contact/1.png" },
  { name: "Behance", href: "https://www.behance.net/ryzensolutions", icon: "/Contact/2.png" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/ryzensolutions", icon: "/Contact/3.png" },
  { name: "Email", href: "mailto:contact@ryzensolutions.com", icon: "/Contact/4.png" },
];

export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  href: string;
  githubUrl?: string;
  category: "development" | "design";
  technologies?: string[];
}
export const items: Product[] = [
  {
    id: 1,
    name: "Yoga Posture Detection & Correction System",
    desc: "A React Native app using Mediapipe for real-time yoga posture analysis and correction.",
    image: "/Portfolio/project (1).jpg",
    href: "#",
    githubUrl: "https://github.com/webdevabdul0/YogaApp",
    category: "development",
    technologies: ["React Native", "Mediapipe", "TypeScript"],
  },
  {
    id: 2,
    name: "Pixlab Complete Redesign",
    desc: "A full redesign of Pixlab, enhancing landing pages, dashboard UI, and multiple editors.",
    image: "/Portfolio/project (2).jpg",
    href: "https://pixlab.io/",
    category: "design",
    technologies: ["Figma", "UI/UX", "Branding"],
  },
  {
    id: 3,
    name: "Qoodo Design & Development",
    desc: "Designed and built Qoodo, including landing pages, dashboard UI, and advanced editors.",
    image: "/Portfolio/project (3).jpg",
    href: "https://qoodo.io/",
    category: "development",
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
    githubUrl: "https://github.com/webdevabdul0/qoodo-Landing",
  },
  {
    id: 4,
    name: "Portfolio Website",
    desc: "The very website you are looking at, built with Next.js and Framer Motion.",
    image: "/Portfolio/project (6).jpg",
    href: "#",
    category: "development",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/webdevabdul0/abdulLP",
  },

  {
    id: 6,
    name: "Qoodo Mobile App Design",
    desc: "A full UI/UX design and interactive prototype created in Figma for the Qoodo mobile app, focusing on secure and user-friendly compliance workflows.",
    image: "/Portfolio/project (3).jpg", // TODO: Replace with a dedicated project image
    href: "https://play.google.com/store/apps/details?id=com.io.qoodo",
    category: "design",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Mobile App Design"],
  },
  {
    id: 7,
    name: "Brightmind Learning Nexus",
    desc: "A comprehensive learning platform with role-based access for students, teachers, and admins. Features include course enrollment, quizzes, AI suggestions, and assignment handling.",
    image: "/Portfolio/project (5).jpg", // TODO: Replace with a dedicated project image
    href: "https://brighthubmind.netlify.app/",
    category: "development",
    technologies: ["React", "TypeScript", "Vite", "Shadcn UI", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/webdevabdul0/brightmind-learning-nexus",
  },
  {
    id: 8,
    name: "Chroma Bubble - AI Chat",
    desc: "A conversational AI app using the OpenAI GPT-4o model. Features RAG-based chat with PDF uploads, powered by an n8n workflow and Pinecone for vector storage.",
    image: "/Portfolio/project (7).jpg", // TODO: Replace with a dedicated project image
    href: "https://chat-bubble-app.netlify.app/",
    category: "development",
    technologies: ["OpenAI API", "RAG", "Pinecone", "n8n", "TypeScript", "React"],
    githubUrl: "https://github.com/webdevabdul0/chroma-bubble-app",
  },
  {
    id: 9,
    name: "Sattva Business Website",
    desc: "A modern, professional frontend for Sattva, a company specializing in HACCP, risk assessment, and workplace safety compliance services.",
    image: "/Portfolio/project (8).jpg", // TODO: Replace with a dedicated project image
    href: "https://satvaa.netlify.app/",
    category: "development",
    technologies: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/webdevabdul0/sattvaLP",
  },
  {
    id: 10,
    name: "GoGreek Social Platform",
    desc: "A social platform with features like messaging and group chat channels, posting, notifications, bookings, and profiles. Built using Next.js, Firebase, and Stream.",
    image: "/Portfolio/project (9).jpg",
    href: "https://gogreek.netlify.app/home",
    category: "development",
    technologies: ["Next.js", "Firebase", "Stream"],
    githubUrl: "https://github.com/webdevabdul0/chat-app",
  },
];
