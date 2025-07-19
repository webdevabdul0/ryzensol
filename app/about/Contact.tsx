"use client";

import React from "react";
import { useRef } from "react";

import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const SERVICE_OPTIONS = [
  "UI/UX Design",
  "AI Integrations",
  "Web Development",
  "WordPress Website",
  "Graphic Design",
  "Digital Marketing",
  "SEO Services",
  "Hosting",
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    service: SERVICE_OPTIONS[0],
    details: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/.netlify/functions/sendContactEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          service: SERVICE_OPTIONS[0],
          details: "",
        });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative  w-full flex flex-col justify-center items-center bg-black  text-white overflow-hidden">
      <div className="absolute inset-0 z-10 opacity-40">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(0, 0, 0)"
          gradientBackgroundEnd="rgb(0, 0, 0)"
          firstColor="255, 105, 180" // Hot pink
          secondColor="0, 255, 255" // Cyan
          thirdColor="0, 191, 255" // Deep sky blue
          fourthColor="138, 43, 226" // Blue violet
          fifthColor="255, 215, 0" // Gold
          pointerColor="255, 20, 147" // Deep pink
          blendingValue="screen" // Softer blend on black background
          size="100%"
          interactive={true}
        />
      </div>

      <div className="-mx-4 flex flex-wrap lg:justify-between  z-30 px-8 2xl:px-20 py-20 lg:py-[120px]">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mb-12 lg:mb-0">
            <span className="mb-4 block text-base font-semibold text-primary">
              Contact Us
            </span>
            <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              GET IN TOUCH WITH US
            </h2>
            <p className="mb-9   text-white/80 sm:text-xl lg:text-xl xl:text-2xl">
              Welcome to Ryzen Solutions – our team delivers cutting-edge UI/UX
              Design, AI Automation, Web Development, WordPress, Branding, SEO,
              Digital Marketing, and Hosting & Maintenance. We help businesses
              thrive in the digital era with creative, scalable, and
              results-driven solutions.
            </p>
            <div className="mb-8 flex flex-col gap-4 w-full max-w-lg">
              <ContactEmailBox email="Global.business@ryzensol.com" />
              <ContactEmailBox email="support@ryzensol.com" />
              <ContactEmailBox email="contact@ryzensol.com" />
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="relative rounded-lg bg-white bg-opacity-5 backdrop-blur-2xl p-8 shadow-lg dark:bg-dark-2 sm:p-12">
            <form onSubmit={handleSubmit}>
              <ContactInputBox
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <ContactInputBox
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <ContactSelectBox
                name="service"
                value={form.service}
                onChange={handleChange}
                options={SERVICE_OPTIONS}
              />
              <ContactTextArea
                row={6}
                placeholder="Your Message"
                name="details"
                value={form.details}
                onChange={handleChange}
              />
              {error && <div className="text-red-400 mb-4">{error}</div>}
              {success && (
                <div className="text-green-400 mb-4">
                  Thank you! Your message has been sent.
                </div>
              )}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-full border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {/* Decorative SVGs, hidden on mobile */}
            <div className="hidden sm:block">
              <span className="absolute -right-12 -top-12 -z-[50]">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                    fill="#3056D3"
                  />
                </svg>
              </span>
              <span className="absolute -right-10 top-[90px] z-[-20]">
                <svg
                  width={34}
                  height={134}
                  viewBox="0 0 34 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="31.9993"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 31.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 31.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 31.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 31.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 31.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 31.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 31.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 31.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 31.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 31.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 17.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 17.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 17.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 17.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 17.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 17.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 17.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 17.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 17.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 17.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 2.66536 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 2.66536 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 2.66536 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 2.66536 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 2.66536 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 2.66536 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 2.66536 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 2.66536 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 2.66536 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 2.66536 1.66665)"
                    fill="#13C296"
                  />
                </svg>
              </span>
              <span className="absolute -bottom-7 -left-7 z-[-1]">
                <svg
                  width={107}
                  height={134}
                  viewBox="0 0 107 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="104.999"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 104.999 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 104.999 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 104.999 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 104.999 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 104.999 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 104.999 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 104.999 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 104.999 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 104.999 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 104.999 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 90.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 90.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 90.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 90.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 90.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 90.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 90.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 90.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 90.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 90.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 75.6654 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 31.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 75.6654 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 31.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 75.6654 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 31.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 75.6654 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 31.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 75.6654 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 31.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 75.6654 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 31.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 75.6654 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 31.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 75.6654 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 31.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 75.6654 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 31.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 75.6654 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 31.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 60.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 17.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 60.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 17.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 60.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 17.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 60.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 17.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 60.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 17.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 60.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 17.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 60.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 17.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 60.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 17.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 60.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 17.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 60.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 17.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 46.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={132}
                    r="1.66667"
                    transform="rotate(180 2.66536 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 46.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 2.66536 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 46.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 2.66536 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 46.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={88}
                    r="1.66667"
                    transform="rotate(180 2.66536 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 46.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 2.66536 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 46.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={45}
                    r="1.66667"
                    transform="rotate(180 2.66536 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 46.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={16}
                    r="1.66667"
                    transform="rotate(180 2.66536 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 46.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy={59}
                    r="1.66667"
                    transform="rotate(180 2.66536 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 46.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 2.66536 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 46.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 2.66536 1.66665)"
                    fill="#13C296"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactEmailBox = ({ email }: { email: string }) => (
  <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-6">
    <svg
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
      className="text-primary"
    >
      <path
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5v-8.383l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"
        fill="currentColor"
      />
    </svg>
    <span className=" text-white text-lg lg:text-xl ">{email}</span>
  </div>
);

const ContactTextArea = ({
  row,
  placeholder,
  name,
  value,
  onChange,
}: {
  row: number;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  let label = name === "details" ? "Message" : name;
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-base font-medium text-white"
      >
        {label}
      </label>
      <textarea
        id={name}
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded-2xl bg-white/5 border-white/20 backdrop-blur-3xl border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

const ContactInputBox = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  let label = name === "name" ? "Name" : name === "email" ? "Email" : name;
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-base font-medium text-white"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-2xl border bg-white/5 border-white/20 backdrop-blur-3xl border-stroke px-4 py-3 text-base text-body-color outline-none focus:border-primary "
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

const ContactSelectBox = ({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) => (
  <div className="mb-6 relative">
    <label
      htmlFor={name}
      className="block mb-2 text-base font-medium text-white"
    >
      Service
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full relative rounded-2xl border border-white/40 bg-black/20 text-white placeholder-white/80 backdrop-blur-3xl border-stroke px-4 py-3 pr-10 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors duration-200 appearance-none shadow-lg "
      required
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-black text-white">
          {opt}
        </option>
      ))}
    </select>
    {/* Custom arrow */}
    <span
      className="pointer-events-none absolute right-4 top-2/3  flex items-center text-white"
      style={{ top: "50%" }}
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M7 10l5 5 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </div>
);
