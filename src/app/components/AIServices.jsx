"use client";
import useInViewOnce from "./useInViewOnce";
import Image from "next/image";

export default function AIServices() {
  const { ref, isVisible } = useInViewOnce();
  return (
    <>
      {/* MAIN SECTION */}
      <section
        ref={ref}
        className={`relative bg-neutral-50 py-10 pb-10 md:pb-40 overflow-visible transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        
        {/* dotted decorations */}
        <div className="absolute right-16 top-16 grid grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-black rounded-full" />
          ))}
        </div>

        <div className="absolute left-16 bottom-16 grid grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-black rounded-full" />
          ))}
        </div>

        {/* container */}
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-semibold text-black">Services</h2>
          <h3 className="text-3xl font-semibold text-blue-600 mt-1">built to drive measurable growth</h3>
        </div>

        {/* Cards (overlap on desktop only) */}
        <div className="relative mt-8 w-full max-w-5xl mx-auto px-6 z-20 md:absolute md:left-1/2 md:bottom-0 md:translate-x-[-50%] md:translate-y-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className={`bg-white rounded-2xl p-8 text-left transition shadow-[0_0_30px_rgba(0,0,0,0.12)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } hover:scale-105`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-black ring-2 ring-blue-600/15">
                  <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=256&h=256&fit=crop&q=80"
                    alt="Web development"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/10">
                  Web
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Web Development
              </h4>
              <p className="text-neutral-600">
                High-performance sites and web apps with clean UX, great SEO foundations, and conversion tracking from day one.
              </p>
            </div>

            <div className={`bg-white rounded-2xl p-8 text-left transition shadow-[0_0_30px_rgba(0,0,0,0.12)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } hover:scale-105`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-black ring-2 ring-blue-600/15">
                  <Image
                    src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=256&h=256&fit=crop&q=80"
                    alt="SEO"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/10">
                  SEO
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                SEO (Search Engine Optimization)
              </h4>
              <p className="text-neutral-600">
                Technical SEO, content structure, and on-page systems that grow qualified traffic (and prove ROI with analytics).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SPACER (VERY IMPORTANT) */}
    <div className="hidden md:block h-48" />

      {/* NORMAL cards BELOW */}
      <section className="bg-white pb-10 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

           <div className={`bg-white rounded-2xl p-8 text-left transition shadow-[0_0_30px_rgba(0,0,0,0.12)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } hover:scale-105`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-black ring-2 ring-blue-600/15">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=256&h=256&fit=crop&q=80"
                  alt="Mobile app development"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/10">
                Mobile
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Mobile App Development
            </h4>
            <p className="text-neutral-600">
              iOS/Android apps designed for retention — MVP to production with auth, payments, push, and analytics baked in.
            </p>
          </div>

         <div className={`bg-white rounded-2xl p-8 text-left transition shadow-[0_0_30px_rgba(0,0,0,0.12)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } hover:scale-105`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-black ring-2 ring-blue-600/15">
                <Image
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=256&h=256&fit=crop&q=80"
                  alt="AI automation"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/10">
                AI
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              AI / Machine Learning / Deep Learning
            </h4>
            <p className="text-neutral-600">
              AI that ships: copilots, automation, RAG chatbots, and forecasting — built with guardrails, evals, and clear impact.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
