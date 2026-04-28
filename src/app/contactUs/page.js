import CaseHero from "../components/CaseHero";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import TechSlider from "../components/TechSlider";



export default function Process() {
    return (
        <>
            <CaseHero
                badge="Contact"
                heading="Tell us what you’re building."
                description={null}
            />
            <ContactSection />
            <TechSlider showHeading={false} bgColor="bg-neutral-50" heightClass="py-6" />
            <CTASection
                title="Want proof before you commit?"
                description="Explore real work across SaaS websites, SEO systems, mobile apps, and AI copilots — and see how DEVLYS ships outcomes."
                buttonText="View case studies"
                buttonHref="/caseStudies"
            />
            <Footer />
        </>
    );
}
