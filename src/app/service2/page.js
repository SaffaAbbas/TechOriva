
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero2 from "../components/ServiceHero2";
import SuccessStory2 from "../components/SuccessStory2";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
            <ServiceHero2
                badgeText="SEO (Search Engine Optimization)"
                title="SEO that compounds — built on systems."
                description="We fix the technical foundation, build content structures that match search intent, and ship an on-page playbook your team can repeat. The goal isn’t vanity traffic — it’s qualified demand, better leads, and predictable inbound growth you can measure."
                buttonText="Get an SEO roadmap"
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=900&fit=crop&q=80"
            />
            <WhatWeOffer
                services={[
                    {
                        title: "Technical SEO audit",
                        desc: "Indexing, crawl, Core Web Vitals, site architecture, and templates — we fix the issues that silently cap rankings and slow growth.",
                        img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Content strategy + information architecture",
                        desc: "We map your services to high-intent keywords and build a content structure that’s easy to navigate for humans and search engines (so Google understands what you do).",
                        img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "On-page + conversion improvements",
                        desc: "Better titles, headings, internal linking, schema, and CTA placement — so the traffic you earn actually turns into leads and pipeline.",
                        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Editorial system",
                        desc: "Brief templates, publishing guidelines, and a repeatable cadence so your team can scale content without guesswork (and without losing quality).",
                        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Reporting that ties to revenue",
                        desc: "Rankings matter, but we focus on pipeline. You’ll get reporting on the pages and keywords that create real opportunities, plus next actions every month.",
                        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=520&fit=crop&q=80",
                    },
                ]} />
            <SuccessStory2 />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </>
    );
}
