"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import useInViewOnce from "../components/useInViewOnce";

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "commerce", label: "Commerce & lifestyle" },
  { id: "public", label: "Public & education" },
  { id: "trades", label: "Trades & local growth" },
];

const PROJECTS = [
  {
    slug: "delphisonic",
    title: "Delphisonic",
    url: "https://delphisonic.com",
    host: "delphisonic.com",
    filter: "commerce",
    tags: ["Brand", "Product storytelling", "Performance"],
    summary:
      "A sharp, product-led presence built for discovery and credibility — the kind of site that turns curiosity into qualified interest.",
  },
  {
    slug: "oak-leaf",
    title: "Oak Leaf Landscape",
    url: "https://oakleaflandscape.com",
    host: "oakleaflandscape.com",
    filter: "trades",
    tags: ["Local SEO", "Lead generation", "Trust & proof"],
    summary:
      "Outdoor services with a premium, trustworthy feel — structured for homeowners who compare fast and book with confidence.",
  },
  {
    slug: "fish-variety",
    title: "Explore Fish Variety",
    url: "https://explorefishvariety.gov.mt",
    host: "explorefishvariety.gov.mt",
    filter: "public",
    tags: ["Public sector", "Science comms", "Accessible UX"],
    summary:
      "Government-grade clarity: complex topics made navigable for citizens, educators, and specialists — without dumbing it down.",
  },
  {
    slug: "metroplex",
    title: "Metroplex Pro Builders",
    url: "https://metroplexprobuilders.com",
    host: "metroplexprobuilders.com",
    filter: "trades",
    tags: ["Construction", "High-ticket sales", "Social proof"],
    summary:
      "Builders need authority fast. This direction pairs strong visuals with conversion paths that match how people choose contractors.",
  },
  {
    slug: "juste-merveilleux",
    title: "Juste Merveilleux",
    url: "https://justemerveilleux.com",
    host: "justemerveilleux.com",
    filter: "commerce",
    tags: ["E-commerce", "Luxury retail", "DTC experience"],
    summary:
      "Luxury and beauty live in the details — pacing, typography, and imagery that feel editorial while still selling with clarity.",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const heroContent = useInViewOnce({ threshold: 0.08 });
  const cardsSection = useInViewOnce({ threshold: 0.06 });
  const ctaBlock = useInViewOnce({ threshold: 0.12 });

  const visible = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  const onHeroPointer = useCallback((e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setParallax({ x: px * 18, y: py * 14 });
  }, []);

  const resetParallax = useCallback(() => setParallax({ x: 0, y: 0 }), []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("pointermove", onHeroPointer);
    el.addEventListener("pointerleave", resetParallax);
    return () => {
      el.removeEventListener("pointermove", onHeroPointer);
      el.removeEventListener("pointerleave", resetParallax);
    };
  }, [onHeroPointer, resetParallax]);

  return (
    <>
      <style>{`
        @keyframes portfolio-card-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .portfolio-card-in {
          animation: portfolio-card-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
      `}</style>

      <div className="min-h-screen bg-white text-black">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative cursor-default overflow-hidden border-b border-black/10"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-neutral-50 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translate(${parallax.x * 0.35}px, ${parallax.y * 0.35}px)` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(37,99,235,0.12),transparent_55%)] transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translate(${parallax.x * 0.55}px, ${parallax.y * 0.45}px)` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.14)_1px,transparent_0)] [background-size:22px_22px] transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translate(${-parallax.x * 0.25}px, ${-parallax.y * 0.2}px)` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-3xl"
            aria-hidden
          />

          <div
            ref={heroContent.ref}
            className={`relative mx-auto max-w-5xl px-6 pb-14 pt-10 transition-all duration-700 md:pb-16 md:pt-12 ${
              heroContent.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Portfolio
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-black md:text-4xl md:leading-tight">
              Live work across{" "}
              <span className="text-blue-600">sectors &amp; channels</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
              E-commerce, marketing sites, public-sector and science communication, home services,
              construction, and luxury retail — each with a different conversion story. Open a card
              to visit the live site.
            </p>

            <p className="mt-6 text-xs font-medium text-neutral-500 md:text-sm">
              Showing{" "}
              <span className="font-bold text-black tabular-nums">{visible.length}</span>{" "}
              {visible.length === 1 ? "project" : "projects"}
              {activeFilter !== "all" ? (
                <>
                  {" "}
                  · filter:{" "}
                  <span className="text-blue-600">
                    {FILTERS.find((f) => f.id === activeFilter)?.label}
                  </span>
                </>
              ) : null}
            </p>

            <div
              className="mt-4 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter portfolio by category"
            >
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition md:text-sm active:scale-[0.97] motion-safe:transition-transform ${
                    activeFilter === f.id
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "border-black/15 bg-white text-neutral-800 hover:border-blue-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cards */}
        <section
          ref={cardsSection.ref}
          className={`mx-auto max-w-5xl px-6 py-12 transition-all duration-700 md:py-14 ${
            cardsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {visible.map((p, i) => (
              <a
                key={`${activeFilter}-${p.slug}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${i * 55}ms` }}
                className={`portfolio-card-in group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.99] md:p-8 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {p.host}
                    </p>
                    <h2 className="mt-1 text-xl font-bold tracking-tight text-black transition group-hover:text-blue-800 md:text-2xl">
                      {p.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                      {p.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-800 transition group-hover:border-blue-600/25 group-hover:bg-blue-50 md:text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-blue-600 bg-white px-4 py-2 text-xs font-semibold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white md:text-sm">
                    Visit site
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-sm text-neutral-500">No projects in this filter.</p>
          )}

          <div
            ref={ctaBlock.ref}
            className={`mt-12 rounded-2xl border border-black/10 bg-neutral-50 p-6 transition-all duration-700 md:p-8 ${
              ctaBlock.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h3 className="text-lg font-bold text-black md:text-xl">
              What we carry across every sector
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-neutral-700 md:grid-cols-2 md:text-[15px]">
              <li className="flex gap-2 transition hover:text-black">
                <span className="font-bold text-blue-600">—</span>
                Clear information architecture so users find the next step in seconds.
              </li>
              <li className="flex gap-2 transition hover:text-black">
                <span className="font-bold text-blue-600">—</span>
                Conversion paths tuned to how people actually buy (B2C, B2B, or civic audiences).
              </li>
              <li className="flex gap-2 transition hover:text-black">
                <span className="font-bold text-blue-600">—</span>
                Performance and accessibility so the experience feels solid on every device.
              </li>
              <li className="flex gap-2 transition hover:text-black">
                <span className="font-bold text-blue-600">—</span>
                Messaging that earns trust — for government, health-adjacent, and high-ticket offers.
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contactUs"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-900 active:scale-[0.98]"
              >
                Start a similar project
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
