
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero2 from "../components/ServiceHero2";
import SuccessStories from "../components/SuccessStories";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
            <ServiceHero2
                badgeText="Web Development"
                title="Websites that look premium — and convert."
                description="We build fast, SEO-ready marketing sites and scalable web apps that feel high-end. You get a clean design system, sharp messaging, strong performance (Core Web Vitals), and conversion tracking so you know what’s working. Perfect for SaaS, agencies, and service businesses that want more qualified leads."
                buttonText="Get a website plan"
                imageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=900&fit=crop&q=80"
            />
            <WhatWeOffer
                heading="What we"
                highlightedText="deliver"
                services={[
                    {
                        title: "Strategy + UX",
                        desc: "We define the pages, funnels, and CTAs that match how your buyers decide. Then we craft a clean UX that feels high-trust, reduces friction, and makes the next step obvious (call, demo, checkout).",
                        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Design system + UI",
                        desc: "Reusable components, consistent spacing/typography, and a premium visual language so every section looks intentional — like a top-tier SaaS website, not a template.",
                        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Performance-first build",
                        desc: "Core Web Vitals targets, accessibility, and clean engineering. Fast load times, smooth interactions, and a maintainable codebase your team can extend without fear.",
                        img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "SEO + analytics setup",
                        desc: "Technical SEO basics (metadata, schema, internal linking) plus analytics and dashboards so you can see what’s driving signups, leads, calls, and revenue — not just pageviews.",
                        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Launch + iteration",
                        desc: "A clean launch checklist, QA, and a post-launch iteration plan. We keep improving conversion, SEO, and speed so the site gets better month after month.",
                        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=520&fit=crop&q=80",
                    },
                ]}
            />
            <SuccessStories />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </>
    );
}
