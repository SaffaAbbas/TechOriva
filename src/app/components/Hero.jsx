'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[65vh] sm:h-[65vh] md:h-[75vh] w-full overflow-hidden"
    >
      {/* BACKGROUND VIDEO */}
      {videoOk ? (
        <video
              className="absolute inset-0 w-full h-full rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/heroVideo.mp4" type="video/mp4" />
            </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-blue-950" />
      )}

      {/* Subtle glow */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 h-full">
        <div className="max-w-5xl mx-auto h-full flex items-center px-6">
          <div className="max-w-4xl">
          <h2
            className={`text-white/90 text-sm sm:text-base md:text-lg font-medium tracking-wide mb-3 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            DEVLYS — modern digital delivery for teams that want results.
          </h2>

          <h1
            className={`text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Build products people find, love, and buy.
          </h1>

          <p
            className={`text-white/85 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            We design and develop conversion-ready <strong>websites</strong>, ship <strong>SEO</strong> that compounds, build <strong>mobile apps</strong> users keep, and deploy <strong>AI</strong> that saves time and increases margin.
          </p>

            <Link
              href="/contactUs"
              className={`inline-block bg-blue-600 text-white px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Get a free growth plan &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
