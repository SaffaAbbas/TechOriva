import { notFound } from "next/navigation";
import CTASection from "../../components/CtaSection";
import Footer from "../../components/Footer";
import ServiceHero2 from "../../components/ServiceHero2";
import WhatWeOffer from "../../components/WhatWeOffer";
import WhyChooseUs from "../../components/WhyChooseUs";
import { getServiceById } from "../servicesData";

export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const Success = service.SuccessComponent;

  return (
    <>
      <ServiceHero2
        badgeText={service.badgeText}
        title={service.title}
        description={service.description}
        buttonText={service.buttonText}
        buttonHref={service.buttonHref}
        imageSrc={service.imageSrc}
      />

      <WhatWeOffer {...service.whatWeOffer} />
      {Success ? <Success /> : null}
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return { title: "Service not found — Devlys" };
  return {
    title: `${service.navLabel} — Devlys`,
    description: service.description,
  };
}

