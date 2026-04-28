"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandMark from "./BrandMark";

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const services = [
    { name: "Web Development", href: "/service1" },
    { name: "SEO (Search Engine Optimization)", href: "/service2" },
    { name: "Mobile App Development", href: "/service3" },
    { name: "AI / ML / Deep Learning", href: "/service4" },
  ];

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-black/10 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <BrandMark className="h-10 w-10 md:h-11 md:w-11" />
          <span className="text-[20px] md:text-[24px] font-extrabold tracking-tight text-black">
            DEV<span className="text-blue-600">LYS</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-blue-600 transition ${
              pathname === "/" ? "text-blue-600" : "text-neutral-700"
            }`}
          >
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`text-sm font-medium hover:text-blue-600 transition ${
                pathname.startsWith("/services")
                  ? "text-blue-600"
                  : "text-neutral-700"
              }`}
            >
              Services
            </button>

            {/* DROPDOWN MENU */}
            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-3 text-sm hover:bg-gray-50 transition ${
                      pathname === service.href
                        ? "text-blue-600 font-medium bg-blue-50"
                        : "text-neutral-700"
                    }`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/process"
            className={`text-sm font-medium hover:text-blue-600 transition ${
              pathname === "/process" ? "text-blue-600" : "text-neutral-700"
            }`}
          >
            Process
          </Link>

          <Link
            href="/caseStudies"
            className={`text-sm font-medium hover:text-blue-600 transition ${
              pathname === "/caseStudies" ? "text-blue-600" : "text-neutral-700"
            }`}
          >
            Case Studies
          </Link>

          <Link
            href="/contactUs"
            className={`text-sm font-medium hover:text-blue-600 transition ${
              pathname === "/contactUs" ? "text-blue-600" : "text-neutral-700"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA BUTTON (Desktop) */}
        <Link
          href="/#calendar-section"
          className="hidden md:block bg-black hover:bg-neutral-900 text-white text-sm font-semibold px-8 py-3 rounded-full transition"
        >
          Get a Free Strategy Call
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-neutral-700 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-1">
            <Link
              href="/"
              className={`block py-3 text-sm font-medium hover:text-blue-600 transition ${
                pathname === "/" ? "text-blue-600" : "text-neutral-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full text-left py-3 text-sm font-medium hover:text-blue-600 transition flex items-center justify-between ${
                  pathname.startsWith("/services")
                    ? "text-blue-600"
                    : "text-neutral-700"
                }`}
              >
                Services
                <span className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}>
                  v
                </span>
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block py-2 text-sm hover:text-blue-600 transition ${
                        pathname === service.href
                          ? "text-blue-600 font-medium"
                          : "text-neutral-600"
                      }`}
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/process"
              className={`block py-3 text-sm font-medium hover:text-blue-600 transition ${
                pathname === "/process" ? "text-blue-600" : "text-neutral-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </Link>

            <Link
              href="/caseStudies"
              className={`block py-3 text-sm font-medium hover:text-blue-600 transition ${
                pathname === "/caseStudies" ? "text-blue-600" : "text-neutral-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>

            <Link
              href="/contactUs"
              className={`block py-3 text-sm font-medium hover:text-blue-600 transition ${
                pathname === "/contactUs" ? "text-blue-600" : "text-neutral-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* MOBILE CTA BUTTON */}
            <Link
              href="/#calendar-section"
              className="block mt-4 bg-black hover:bg-neutral-900 text-white text-sm font-semibold px-8 py-3 rounded-full transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Strategy Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}