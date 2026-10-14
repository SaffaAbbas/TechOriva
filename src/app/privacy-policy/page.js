import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy — DEVLYS",
  description:
    "Privacy Policy for DEVLYS (devlys.com). Learn how we handle inquiries, client confidentiality, project data, and website security.",
  alternates: {
    canonical: "https://devlys.com/privacy-policy",
  },
};

export default function DevlysPrivacyPolicyPage() {
  const contactEmail = "info.devlys@gmail.com";

  return (
    <div className="min-h-screen bg-white font-urbanist text-slate-800">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 md:py-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium pb-6 mb-8 border-b border-slate-100">
          <Link href="/" className="hover:text-blue-600 transition">DEVLYS</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-heading">
            DEVLYS Agency
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mt-1 mb-4">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span><strong>Effective Date:</strong> October 15, 2026</span>
            <span>•</span>
            <span>Website: <a href="https://devlys.com" className="text-blue-600 hover:underline">devlys.com</a></span>
            <span>•</span>
            <span>Email: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a></span>
          </div>
        </header>

        {/* Lead Summary Banner */}
        <div className="bg-slate-50/80 rounded-2xl p-6 mb-12 text-sm sm:text-base text-slate-700 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-900">
            Welcome to DEVLYS (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
          </p>
          <p>
            DEVLYS is a digital engineering agency delivering modern websites, SEO, mobile applications, and AI/ML solutions. This Privacy Policy outlines how we collect, use, protect, and handle information across our official website (<a href="https://devlys.com" className="text-blue-600 underline">https://devlys.com</a>) and during our client engagements.
          </p>
        </div>

        {/* Document Sections - Flat & Clean */}
        <div className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">

          {/* 1. Information We Collect */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              1. Information We Collect
            </h2>
            <div className="space-y-3">
              <p>
                We collect information only when you voluntarily provide it to us or when you interact with our website:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>
                  <strong>Contact &amp; Inquiry Data:</strong> When you submit a project request, consultation form, or email us, we collect your name, email address, phone number, company name, and project specifications.
                </li>
                <li>
                  <strong>Technical Browsing Data:</strong> Standard server logs such as IP address, browser type, operating system, and pages visited, collected automatically to maintain website stability and security.
                </li>
                <li>
                  <strong>Client Engagement Data:</strong> Files, assets, and design specifications shared during active development under formal agreements.
                </li>
              </ul>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              2. How We Use Your Information
            </h2>
            <div className="space-y-3">
              <p>
                We use the collected information solely for legitimate business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>To respond to your inquiries, schedule discovery calls, and provide project estimates.</li>
                <li>To deliver, maintain, and optimize client web, mobile, and AI solutions.</li>
                <li>To maintain the operational integrity, uptime, and cybersecurity of our website.</li>
                <li>We do <strong>not</strong> sell, rent, or trade your personal or business data to third-party marketers.</li>
              </ul>
            </div>
          </section>

          {/* 3. Client Confidentiality & NDAs */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              3. Client Confidentiality &amp; Proprietary Rights
            </h2>
            <div className="space-y-3">
              <p>
                As an engineering agency, DEVLYS respects client intellectual property:
              </p>
              <p>
                All client source code, business logic, proprietary datasets, and roadmap materials shared with us are treated with strict confidentiality. When requested, we execute Non-Disclosure Agreements (NDAs) prior to project kick-off to ensure your intellectual assets remain protected.
              </p>
            </div>
          </section>

          {/* 4. Standalone Apps Policy */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              4. Mobile &amp; Software Applications
            </h2>
            <div className="space-y-3">
              <p>
                DEVLYS develops independent mobile applications published on platforms such as Google Play and Apple App Store (e.g. <strong>Barzy: QR &amp; Barcode Scanner</strong>).
              </p>
              <p>
                Each software application has its own dedicated privacy policy governing on-device permissions (camera, storage, haptics) and data practices. For app-specific policies, please visit the relevant application page (for example, <Link href="/barzy-privacy-policy" className="text-blue-600 underline font-semibold">Barzy Privacy Policy</Link>).
              </p>
            </div>
          </section>

          {/* 5. Cookies & Tracking Technologies */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              5. Cookies &amp; Analytics
            </h2>
            <div className="space-y-3">
              <p>
                Our website may use standard session cookies and privacy-preserving analytics to understand traffic patterns and optimize page load performance. You can disable cookies at any time through your browser settings without affecting core website functionality.
              </p>
            </div>
          </section>

          {/* 6. Third-Party Service Providers */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              6. Third-Party Infrastructure
            </h2>
            <div className="space-y-3">
              <p>
                We may engage trusted infrastructure vendors (such as hosting platforms, email transport services, and security gateways) to operate our agency website. These providers process information strictly on our behalf and are bound by strict security and confidentiality obligations.
              </p>
            </div>
          </section>

          {/* 7. Data Security */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              7. Data Security
            </h2>
            <div className="space-y-3">
              <p>
                We implement industry-standard administrative, technical, and physical safeguards (including SSL/TLS encryption for all website communications) to protect against unauthorized access, loss, or alteration of personal information.
              </p>
            </div>
          </section>

          {/* 8. Your Rights */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              8. Your Rights
            </h2>
            <div className="space-y-3">
              <p>
                Depending on your location, you may have rights under applicable privacy regulations (such as GDPR or CCPA) to access, correct, export, or request the deletion of personal information you have submitted to us. To exercise any of these rights, please contact us at <a href={`mailto:${contactEmail}`} className="text-blue-600 underline">{contactEmail}</a>.
              </p>
            </div>
          </section>

          {/* 9. Changes to this Policy */}
          <section className="pb-8 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              9. Changes to this Policy
            </h2>
            <div className="space-y-3">
              <p>
                We may update this Privacy Policy from time to time to reflect technological updates or evolving legal requirements. The updated date at the top of this page indicates the most recent revision.
              </p>
            </div>
          </section>

          {/* 10. Contact Us */}
          <section className="pb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              10. Contact Us
            </h2>
            <div className="space-y-3">
              <p>
                If you have any questions, feedback, or requests regarding this Privacy Policy or DEVLYS services, please reach out to our team:
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white text-sm font-semibold px-7 py-3 rounded-full transition shadow-xs"
                >
                  <span>Contact: {contactEmail}</span>
                  <span>&rarr;</span>
                </a>
                <Link
                  href="/contactUs"
                  className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-semibold px-6 py-3 rounded-full transition"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Main Website Footer */}
      <Footer />
    </div>
  );
}
