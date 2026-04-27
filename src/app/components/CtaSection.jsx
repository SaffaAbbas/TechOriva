"use client";
import Link from "next/link";
import useInViewOnce from "./useInViewOnce";

export default function CTASection({
  title = "Get Started Today",
  description = "Tell us what you’re building. We’ll respond with a clear plan, timeline, and quote — usually within 24–48 hours.",
  buttonText = "Book a free strategy call",
  buttonHref = "/contactUs",
  sectionId = "contact-section"
}) {
  const { ref, isVisible } = useInViewOnce();
  return (
    <section
      ref={ref}
      id={sectionId}
      className={`bg-black py-12 px-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-8">
        
        <div className="max-w-2xl">
          <h2 className="text-white text-4xl md:text-4xl font-bold mb-4">
            {title}
          </h2>

          {/* Optional description */}
          {description && (
            <p className="text-white text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

 <Link
          href={buttonHref}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-lg"
        >
          {buttonText}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

      </div>
    </section>
  );
}
