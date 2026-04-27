'use client';
import useInViewOnce from "./useInViewOnce";

export default function AIPrecision() {
  const { ref, isVisible } = useInViewOnce();
  return (
    <section
      ref={ref}
      className={`bg-neutral-50 py-16 md:py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT IMAGE CARD */}
        <div className="relative">

          <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl p-32 sm:p-40">
            <video
              className="absolute inset-0 w-full h-full rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/v4.mp4" type="video/mp4" />
              <source
                src="https://cdn.pixabay.com/video/2024/01/25/198110-906384648_large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/55" />

            {/* overlay points */}
            <div className="absolute top-[35%] left-[48%] bg-cyan-400 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shadow">
              ●
            </div>
            <div className="absolute top-[60%] left-[38%] bg-cyan-400 w-6 h-6 rounded-full shadow">
              ●
            </div>
          </div>

          {/* STATS — MOBILE STACK / DESKTOP OVERLAY */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:mt-0">
            
            <div className="lg:absolute lg:-bottom-10 lg:left-6 bg-white rounded-xl shadow-lg px-6 py-5 text-center w-full sm:w-56">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                90+
              </h3>
              <p className="text-neutral-600 text-sm mt-1">
                Performance score target
              </p>
            </div>

            <div className="lg:absolute lg:-bottom-10 lg:right-6 bg-white rounded-xl shadow-lg px-6 py-5 text-center w-full sm:w-44">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                2–4w
              </h3>
              <p className="text-neutral-600 text-sm mt-1">
                launch timeline
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
            Ship with confidence. <br />
            <span className="text-blue-600">Optimize what actually moves KPIs.</span>
          </h2>

          <p className="mt-6 text-neutral-600 leading-relaxed max-w-xl">
            Every project includes performance budgets, SEO foundations, analytics, and a clean handoff. You’ll always know what’s shipping, why it matters, and what we’ll improve next.
          </p>

          <p className="mt-5 font-semibold text-neutral-900">
            Want a roadmap + quote in 24–48 hours?
          </p>

          <a
            href="/contactUs"
            className="mt-8 inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white font-medium px-8 py-3 rounded-full transition"
          >
            Get the plan →
          </a>
        </div>

      </div>
    </section>
  );
}
