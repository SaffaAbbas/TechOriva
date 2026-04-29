import Image from "next/image";
import Link from "next/link";

export default function ServiceHero2({
  badgeText = "Full-Service Machine Learning Product Development",
  title = "Turning Vision into Reality",
  description = `DEVLYS helps teams design, build, and grow digital products — fast, measurable, and without agency chaos.`,
  buttonText = "Book a free consult",
  buttonHref,
  imageSrc = "/openai.jfif",
  bgColor = "bg-[#eef1fb]",
  onButtonClick,
}) {
  return (
    <section className={`relative w-full ${bgColor} overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 text-sm font-medium mb-4">
            {badgeText}
          </p>

          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-8">
            {description}
          </p>

          {buttonHref ? (
            <Link
              href={buttonHref}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-4 rounded-full transition"
            >
              {buttonText}
              <span className="text-lg">→</span>
            </Link>
          ) : (
            <button
              type="button"
              onClick={onButtonClick}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-4 rounded-full transition"
            >
              {buttonText}
              <span className="text-lg">→</span>
            </button>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src={imageSrc}
            alt={title}
            width={360}
            height={360}
            sizes="(max-width: 1024px) 280px, 360px"
            className="object-cover rounded-2xl shadow-[0_22px_60px_rgba(0,0,0,0.14)] ring-1 ring-black/5 w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}
