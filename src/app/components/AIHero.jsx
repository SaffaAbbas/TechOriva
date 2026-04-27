"use client";
import useInViewOnce from "./useInViewOnce";
import Image from "next/image";

export default function AIHero() {
  const { ref, isVisible } = useInViewOnce();
  return (
    <section
      ref={ref}
      className={`bg-white py-20 sm:py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/10">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Website + conversion system
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-black leading-tight tracking-tight">
            Launch a website that{" "}
            <span className="text-blue-600">turns attention into revenue.</span>
          </h2>

          <p className="mt-5 text-neutral-600 max-w-xl leading-relaxed">
            TECHORIVA blends conversion-first design, performance engineering, and SEO systems so your next launch looks premium — and generates leads you can measure.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-black text-white grid place-items-center text-[11px]">
                ✓
              </span>
              Core Web Vitals targets + clean, scalable UI components
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-black text-white grid place-items-center text-[11px]">
                ✓
              </span>
              SEO foundations (structure, schema, internal linking, on-page)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-5 w-5 rounded-full bg-black text-white grid place-items-center text-[11px]">
                ✓
              </span>
              Analytics + tracking so you can iterate with confidence
            </li>
          </ul>

          <p className="mt-4 font-semibold text-neutral-900">
            Want a clear scope, timeline, and deliverables?
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="/contactUs"
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Get a free plan →
            </a>
            <a
              href="/process"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-black ring-1 ring-black/10 hover:bg-neutral-50 transition"
            >
              See our process
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-950 shadow-[0_28px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=1050&fit=crop&q=80"
              alt="Modern SaaS website design"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/25 to-blue-600/25" />

            <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Design • Performance • SEO
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-4 py-3">
                <div className="text-white font-extrabold text-lg">90+</div>
                <div className="text-white/80 text-xs mt-0.5">Performance targets</div>
              </div>
              <div className="rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-4 py-3">
                <div className="text-white font-extrabold text-lg">2–6w</div>
                <div className="text-white/80 text-xs mt-0.5">Typical launch window</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
