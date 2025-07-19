"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../app/constants";

const emails = [
  "Global.business@ryzensol.com",
  "support@ryzensol.com",
  "contact@ryzensol.com",
];

const Footer = () => (
  <footer className=" bg-black text-gray-200 py-20 px-4 ">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo or Site Name */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10 rounded" />
        <span className="font-bold text-xl tracking-wide">Ryzensol</span>
      </div>
      {/* Navigation */}
      <nav className="flex flex-wrap gap-6">
        {navLinks.map((item) => (
          <Link key={item.title} href={item.href} className="hover:text-primary transition">
            {item.title}
          </Link>
        ))}
      </nav>
      {/* Social Icons */}
      <div className="flex gap-4">
        {/* Use white SVG icons for social links, like in the header */}
        <a href="https://www.linkedin.com/company/ryzensolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
        </a>
        <a href="mailto:global.business@ryzensolutions.com" aria-label="Email">
          <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
        </a>
      </div>
    </div>
    {/* Emails Section */}
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
      {emails.map((email, idx) => (
        <div key={email} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m16 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6" /></svg>
          <span>{email}</span>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Ryzensol. All rights reserved.
    </div>
  </footer>
);

export default Footer;
