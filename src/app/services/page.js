import Link from "next/link";
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import { servicesData } from "./servicesData";

export const metadata = {
  title: "Services — Devlys",
  description: "Explore Devlys services and what we deliver.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-neutral-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black">
              Services
            </h1>
            <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
              Pick a service to see full details, deliverables, and examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="group bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition p-7"
              >
                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/10">
                  {s.badgeText}
                </div>
                <h2 className="mt-4 text-xl font-bold text-black group-hover:text-blue-700 transition">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-5 text-sm font-semibold text-blue-700">
                  View details →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}

