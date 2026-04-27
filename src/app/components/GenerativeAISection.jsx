"use client";
import useInViewOnce from "./useInViewOnce";
import Link from "next/link";

export default function GenerativeAISection() {
  const { ref, isVisible } = useInViewOnce();
  return (
    <section
      ref={ref}
      className={`bg-white py-20 px-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-[0_18px_45px_rgba(37,99,235,0.22)] ring-1 ring-black/5">
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2l1.6 5.1L19 9l-5.4 1.9L12 16l-1.6-5.1L5 9l5.4-1.9L12 2z" />
              <path d="M19 12l.9 2.9L23 16l-3.1 1.1L19 20l-.9-2.9L15 16l3.1-1.1L19 12z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
       <h2 className="text-4xl md:text-4xl font-semibold mb-4 text-black">
  From idea to launch —
  <br />
  <span className="text-blue-600">without the agency chaos.</span>
</h2>


        {/* Description */}
        <p className="text-neutral-600 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
          You get a clear scope, fast iterations, and a measurable outcome. We handle strategy, design, development, SEO, and AI — so you can focus on growth.
        </p>

        {/* Sub-heading */}
        <p className="text-black font-semibold text-lg mb-8">
          Want a roadmap + quote in 24–48 hours?
        </p>

        {/* CTA Button */}
        <Link
          href="/contactUs"
          className="bg-blue-600 text-white px-14 py-2 rounded-full font-semibold text-lg hover:bg-blue-500 transition-colors inline-flex items-center gap-2 shadow-lg mb-16"
        >
          Get the plan
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-semibold text-blue-600 mb-2">SEO</div>
            <div className="text-neutral-600 text-base">Technical + on-page + content</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-blue-600 mb-2">Dev</div>
            <div className="text-neutral-600 text-base">Web & mobile, fast + scalable</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-blue-600 mb-2">AI</div>
            <div className="text-neutral-600 text-base">Automation & smart features</div>
          </div>
        </div>
      </div>
    </section>
  );
}