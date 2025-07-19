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

const ContactEmailBox = ({ email }: { email: string }) => (
  <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m16 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6" /></svg>
    <span>{email}</span>
  </div>
);

const ContactInputBox = ({ type, placeholder, name, value, onChange }: { type: string; placeholder: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:outline-none"
    required
  />
);

const ContactSelectBox = ({ name, value, onChange, options }: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[]; }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:outline-none"
    required
  >
    {options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
);

const ContactTextArea = ({ row, placeholder, name, value, onChange }: { row: number; placeholder: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }) => (
  <textarea
    rows={row}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-primary focus:outline-none resize-none"
    required
  />
);

const ContactClient = () => {
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
              <ContactEmailBox email="global.business@ryzensol.com" />
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
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// You may need to import or define ContactEmailBox, ContactInputBox, ContactSelectBox, ContactTextArea here if not already global
export default ContactClient; 