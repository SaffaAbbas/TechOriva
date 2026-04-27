'use client';

import { Facebook, Instagram, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";
import useInViewOnce from "./useInViewOnce";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { ref, isVisible } = useInViewOnce();

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter email");

    console.log("Subscribed Email:", email);
    setSuccess(true);
    setEmail('');
  };

  return (
    <footer
      ref={ref}
      className={`bg-white border-t border-black/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-6 items-start">

        {/* Logo */}
        <div className="lg:pr-10">
          <div className="flex items-center gap-2">
            <BrandMark className="h-11 w-11" />
            <span className="text-2xl font-extrabold tracking-tight text-black">
              TECH<span className="text-blue-600">ORIVA</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-neutral-600 max-w-xs">
            Web Development, SEO, Mobile Apps, and AI/ML solutions — built for speed, clarity, and measurable growth.
          </p>
        </div>

        {/* Contact */}
        <div className="lg:pl-8">
          <h3 className="font-bold mb-3 border-b-4 border-blue-600 inline-block pb-1 text-black">
            Contact
          </h3>

          <ul className="mt-4 space-y-4 text-sm text-neutral-600">
            <li className="flex gap-3">
              <PhoneIcon className="w-4 h-4 text-blue-600" />
              +1 (555) 013-2026
            </li>
            <li className="flex gap-3">
              <MailIcon className="w-4 h-4 text-blue-600" />
              tech@oriva.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="lg:pl-8">
          <h3 className="font-bold mb-3 border-b-4 border-blue-600 inline-block pb-1 text-black">
            Social
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-3 border-b-4 border-blue-600 inline-block pb-1 text-black">
            Insights
          </h3>

          <p className="mt-4 text-sm text-neutral-600">
            Get practical tips on SEO, conversion, and product delivery — no spam, just value.
          </p>

          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address*"
              className="w-full rounded-full px-5 py-3 bg-neutral-100 focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-black text-white rounded-full py-3 font-medium hover:bg-neutral-900 transition"
            >
              Subscribe
            </button>

            {success && (
              <p className="text-green-600 text-sm">
               Thanks for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-black/10 py-4 text-center text-sm font-normal text-neutral-500">
        © 2026 TECHORIVA. All rights reserved.
      </div>
    </footer>
  );
}
