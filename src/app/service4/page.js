
import { redirect } from "next/navigation";

import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero2 from "../components/ServiceHero2";
import SuccessStories from "../components/SuccessStories";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
  redirect("/services/ai-ml-deep-learning");
  return (
    <>
      <ServiceHero2
        badgeText="AI / Machine Learning / Deep Learning"
        title="AI features that ship — safely."
        description="We help teams deploy copilots, RAG search, automation, and forecasting with the guardrails needed for production: evaluation, monitoring, and clear success metrics. You’ll get a solution that’s useful, safe, and measurable — not a demo that breaks in real life."
        buttonText="Scope an AI project"
        imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=900&fit=crop&q=80" />
      <WhatWeOffer
        services={[
          {
            title: "Use-case discovery",
            desc: "We start from ROI: where AI saves time, reduces cost, or increases conversion. Then we define scope, constraints, risk, and a safe rollout plan.",
            img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=520&fit=crop&q=80",
          },
          {
            title: "Data + knowledge integration",
            desc: "We connect your docs, tickets, CRM, and databases to AI safely (RAG), with access control, source citations, and quality checks.",
            img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=900&h=520&fit=crop&q=80",
          },
          {
            title: "Build + evaluation",
            desc: "Prompts, tools, and workflows — plus test sets and evaluation so you can trust outputs before it reaches users (and keep improving over time).",
            img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=520&fit=crop&q=80",
          },
          {
            title: "Production rollout",
            desc: "Monitoring, feedback loops, and iteration — so the system improves over time instead of slowly drifting or degrading.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop&q=80",
          },
        ]} />
      <SuccessStories />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </>
  );
}
