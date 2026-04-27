'use client';

import Link from "next/link";
import useInViewOnce from "./useInViewOnce";

export default function GenAIHeroSection() {
  const { ref, isVisible } = useInViewOnce();
  return (
      // <section className="relative h-[520px] w-full flex items-center overflow-hidden">
      <section
        ref={ref}
        className={`relative h-[380px] md:h-[520px] w-full flex items-center overflow-hidden transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >

      <img
        src="/tech2.jpg"
        alt="Technology background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-blue-900/35" />
          {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex justify-end pr-32"> */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-center md:justify-end md:pr-32">

        {/* Card */}
              {/* <div className="bg-white/95 rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-[480px]"> */}
              <div className="bg-white/95 rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-full md:max-w-[480px] ring-1 ring-black/5">

          
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-3">
            Make AI practical —{" "}
            <span className="text-blue-800">without the hype.</span>
          </h1>

         <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
            We help teams ship real AI features: internal copilots, RAG search, customer support automation, and forecasting — with guardrails, evaluation, and a clear business metric.
          </p>

          <Link href="/contactUs">
  <button className="bg-blue-800 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow mx-auto md:mx-0">
    Talk to an AI engineer
    <span className="text-lg">→</span>
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}
