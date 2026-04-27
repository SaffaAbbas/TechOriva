import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative w-full bg-[#eef1fb] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 text-sm font-medium mb-4">
            Web Development • SEO • Mobile • AI
          </p>

          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            A digital agency built for outcomes.
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-8">
            TECHORIVA helps teams design, build, and grow digital products. Expect clear scope, fast iterations, and a measurable result — not vague “agency work”.
          </p>

          <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-4 rounded-full transition">
            Book a free consult
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=900&h=900&fit=crop&q=80"
            alt="Digital product team"
            width={420}
            height={420}
            sizes="(max-width: 1024px) 320px, 420px"
            className="object-contain w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
