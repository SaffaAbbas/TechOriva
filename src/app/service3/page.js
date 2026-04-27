
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero2 from "../components/ServiceHero2";
import SuccessStory3 from "../components/SuccessStory3";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
            <ServiceHero2
                badgeText="Mobile App Development"
                title="Mobile apps users keep — and recommend."
                description="We design and build iOS/Android apps that feel premium: fast onboarding, clear flows, and the engineering foundations needed for scale. You’ll get analytics from day one so you can improve activation, retention, and revenue with confidence."
                buttonText="Plan my app"
                imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=900&fit=crop&q=80" />
            <WhatWeOffer
                services={[
                    {
                        title: "Product strategy",
                        desc: "We align features to user value, define an MVP that ships, and plan iteration so you don’t overbuild. Every screen has a purpose tied to a metric.",
                        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "UX + UI design",
                        desc: "Clickable prototypes, a small design system, and UI polish that feels “top app store” from the first version — clean, modern, and consistent.",
                        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Build + integration",
                        desc: "Auth, payments, push notifications, analytics, and APIs — engineered for speed and reliability with a maintainable codebase.",
                        img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Launch + store readiness",
                        desc: "App store assets, QA, release management, and monitoring so launch day is calm and controlled — and you’re ready to iterate immediately after.",
                        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=520&fit=crop&q=80",
                    },
                    {
                        title: "Iteration + growth",
                        desc: "We use analytics + user feedback to ship the next improvements that move retention and revenue — not random feature requests.",
                        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop&q=80",
                    },
                ]} />
            <SuccessStory3 />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </>
    );
}
