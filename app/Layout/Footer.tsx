"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../app/constants";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
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
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ryzen Solutions Logo"
            width={170} // adjust as needed
            height={40} // adjust as needed
            className="object-contain"
          />
        </Link>
      </div>
      {/* Navigation */}
      <nav className="flex flex-wrap gap-6">
        {navLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="hover:text-primary transition"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {/* Social Icons */}
      <div className="flex gap-4">
        {/* Use white SVG icons for social links, like in the header */}

        <ul className="flex flex-row gap-4 mr-2">
          <li>
            <a
              href="https://www.instagram.com/ryzensol?igsh=MTFqOWlsZWRodDk4Nw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://web.facebook.com/profile.php?id=61578438821724"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6 text-white hover:text-blue-600 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/RyzenSolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-6 h-6 text-white hover:text-gray-300 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/ryzensol/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6 text-white hover:text-blue-500 transition" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Emails Section */}
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
      {emails.map((email, idx) => (
        <div
          key={email}
          className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
        >
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12l-4-4-4 4m8 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m16 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6"
            />
          </svg>
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
