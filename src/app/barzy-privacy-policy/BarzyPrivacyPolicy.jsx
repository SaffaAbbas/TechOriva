"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function BarzyPrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("who-we-are");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const toastTimeoutRef = useRef(null);

  const contactEmail = "info.devlys@gmail.com";

  const sections = [
    { id: "who-we-are", num: "01", title: "Who we are" },
    { id: "information-we-collect", num: "02", title: "Information we collect" },
    { id: "camera", num: "03", title: "Camera" },
    { id: "photos-gallery", num: "04", title: "Photos from your gallery" },
    { id: "scan-history", num: "05", title: "Scan and creation history" },
    { id: "safe-link-check", num: "06", title: "Safe Link Check" },
    { id: "opening-links", num: "07", title: "Opening links and sharing" },
    { id: "permissions", num: "08", title: "Permissions" },
    { id: "third-party-services", num: "09", title: "Third-party services" },
    { id: "data-security", num: "10", title: "Data security" },
    { id: "data-retention", num: "11", title: "Data retention and deletion" },
    { id: "childrens-privacy", num: "12", title: "Children's privacy" },
    { id: "your-rights", num: "13", title: "Your rights" },
    { id: "changes-to-policy", num: "14", title: "Changes to this policy" },
    { id: "contact-us", num: "15", title: "Contact us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setShowBackToTop(winScroll > 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(contactEmail)
        .then(() => triggerToast(`${contactEmail} copied to clipboard!`))
        .catch(() => triggerToast(`Email: ${contactEmail}`));
    } else {
      triggerToast(`Email: ${contactEmail}`);
    }
  };

  return (
    <div className="min-h-screen bg-white font-urbanist text-slate-800">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-transparent">
        <div
          className="h-full bg-blue-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-14">
        {/* Header / Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">DEVLYS</Link>
            <span>/</span>
            <span>Apps</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Barzy Privacy Policy</span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition"
              title="Print or Save PDF"
            >
              <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print</span>
            </button>
            <a
              href={`mailto:${contactEmail}`}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        {/* Hero Header - Clean & Flat */}
        <header className="mb-12">
          <div className="flex items-center gap-3.5 mb-4">
            <Image
              src="/barzy-icon.png"
              alt="Barzy App Icon"
              width={48}
              height={48}
              className="w-12 h-12 object-contain flex-shrink-0"
              priority
            />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 font-heading">
                Android App Privacy Policy
              </div>
              <div className="text-sm text-slate-500">
                Barzy: QR &amp; Barcode Scanner — by <strong>DEVLYS</strong>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Privacy Policy for Barzy
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500">
            <span><strong>Last updated:</strong> October 15, 2026</span>
            <span>•</span>
            <span>Website: <a href="https://devlys.com" className="text-blue-600 hover:underline">https://devlys.com</a></span>
            <span>•</span>
            <span>Support: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a></span>
          </div>
        </header>

        {/* THE SHORT VERSION - Clean Flat Highlight */}
        <section className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 mb-12" id="short-version">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight font-heading uppercase">
              THE SHORT VERSION
            </h2>
          </div>

          <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>Barzy does not collect your personal information and has no account or sign-up.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>Everything you scan or create stays on your device.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>The camera is used only to scan codes. Images are not uploaded anywhere.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>This version has no ads, no analytics and no tracking.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>You can delete your history at any time.</span>
            </li>
          </ul>
        </section>

        {/* Content Layout: Minimal Sticky TOC + Document Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Left Navigation (Minimalist) */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="border-l border-slate-200 pl-4 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">
                Sections
              </div>

              <nav className="max-h-[calc(100vh-18rem)] overflow-y-auto space-y-1 pr-1 scrollbar-hide text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`block py-1 transition truncate ${
                      activeSection === sec.id
                        ? "text-blue-600 font-bold -ml-[17px] pl-4 border-l-2 border-blue-600"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <span className="font-mono text-slate-400 mr-1.5">{sec.num}.</span>
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
                Questions? Email{" "}
                <button
                  onClick={handleCopyEmail}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {contactEmail}
                </button>
              </div>
            </div>
          </aside>

          {/* Flat Document Body */}
          <main className="lg:col-span-8 space-y-10">

            {/* 1. Who we are */}
            <section id="who-we-are" className="pt-2 pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                1. Who we are
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Barzy: QR &amp; Barcode Scanner (&quot;Barzy&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) is a QR code and barcode scanner and generator for Android, developed by DEVLYS. This policy explains what the app does with your information. Our website is <a href="https://devlys.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2">https://devlys.com</a>.
                </p>
              </div>
            </section>

            {/* 2. Information we collect */}
            <section id="information-we-collect" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                2. Information we collect
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  We do not collect, store, transmit or sell your personal information. Barzy does not require an account, and we do not have a server that receives your scans, photos, location or any other personal data. We do not know who uses the app or what they scan.
                </p>

                {/* Flat minimal table */}
                <div className="overflow-x-auto my-3">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                        <th className="py-2 pr-4">Data Type</th>
                        <th className="py-2 px-4">Collected by Us</th>
                        <th className="py-2 pl-4">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="py-2 pr-4 font-medium text-slate-800">Personal Information</td>
                        <td className="py-2 px-4 text-slate-500">None</td>
                        <td className="py-2 pl-4">Never collected</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-slate-800">Scanned / Created Codes</td>
                        <td className="py-2 px-4 text-emerald-600 font-semibold">None</td>
                        <td className="py-2 pl-4">Your local device only</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-slate-800">Camera Real-time Stream</td>
                        <td className="py-2 px-4 text-emerald-600 font-semibold">None</td>
                        <td className="py-2 pl-4">Processed in RAM only</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-slate-800">Location &amp; Tracking</td>
                        <td className="py-2 px-4 text-slate-500">None</td>
                        <td className="py-2 pl-4">Never accessed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 3. Camera */}
            <section id="camera" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                3. Camera
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Barzy asks for the camera permission so it can scan QR codes and barcodes. The camera feed is processed on your device in real time. Camera images and the contents of scanned codes are not uploaded or shared by us. You can deny or revoke the camera permission in your Android settings; the camera scanner will then not work, but you can still create QR codes and scan from gallery images.
                </p>
              </div>
            </section>

            {/* 4. Photos from your gallery */}
            <section id="photos-gallery" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                4. Photos from your gallery
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  If you choose an image from your gallery to scan, you select it through the Android system photo picker. Barzy only receives the image you choose, does not need access to your whole photo library, and processes the image on your device only.
                </p>
              </div>
            </section>

            {/* 5. Scan and creation history */}
            <section id="scan-history" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                5. Scan and creation history
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Barzy can save a history of the codes you scanned or created, along with favorites. This history is stored locally on your device. We cannot see it. You can delete individual items or clear the whole history inside the app, and uninstalling the app removes all of its data from your device.
                </p>
              </div>
            </section>

            {/* 6. Safe Link Check */}
            <section id="safe-link-check" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                6. Safe Link Check
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  When a scanned code contains a website link, Barzy can run basic checks on your device, for example whether the link is shortened, does not use HTTPS, or looks unusual. These checks happen locally and the link is not sent to us. The checks are only a guide to help you be careful. They cannot guarantee that a link or website is safe.
                </p>
              </div>
            </section>

            {/* 7. Opening links and sharing */}
            <section id="opening-links" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                7. Opening links and sharing
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Barzy can open links, and can save or share QR code images, only when you choose to. Links open in your browser or another app on your device, and those websites and apps have their own privacy policies, which we do not control. When you share or save a QR code, you choose the destination using the standard Android share sheet.
                </p>
              </div>
            </section>

            {/* 8. Permissions */}
            <section id="permissions" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                8. Permissions
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Barzy requests only the permissions it needs:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Camera:</strong> to scan QR codes and barcodes.
                  </li>
                  <li>
                    <strong>Vibration:</strong> to give optional haptic feedback after a scan. This is a normal Android permission and does not access personal data. You can turn this feedback off in the app settings.
                  </li>
                </ul>
              </div>
            </section>

            {/* 9. Third-party services */}
            <section id="third-party-services" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                9. Third-party services
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  This version of Barzy does not include advertising, analytics, crash-reporting or other third-party tracking services. Your device&apos;s operating system and Google Play services may process certain data according to Google&apos;s own privacy policy, which is outside our control. If a future version adds services such as ads or analytics, we will update this policy and the Google Play Data safety section before release.
                </p>
              </div>
            </section>

            {/* 10. Data security */}
            <section id="data-security" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                10. Data security
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Because your data stays on your device, its security depends mainly on your device&apos;s own protections, such as your screen lock and system updates. We do not run servers that store your scans.
                </p>
              </div>
            </section>

            {/* 11. Data retention and deletion */}
            <section id="data-retention" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                11. Data retention and deletion
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  We do not retain any of your data, because we do not collect it. Data stored by the app on your device (such as history) stays there until you delete it in the app or uninstall the app.
                </p>
              </div>
            </section>

            {/* 12. Children's privacy */}
            <section id="childrens-privacy" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                12. Children&apos;s privacy
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Barzy is a general-purpose utility and is not directed to children under 13. We do not knowingly collect personal information from anyone, including children.
                </p>
              </div>
            </section>

            {/* 13. Your rights */}
            <section id="your-rights" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                13. Your rights
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Since we do not collect or store your personal information, there is nothing for us to access, correct or delete on our side. If you have any privacy question or request, contact us and we will respond.
                </p>
              </div>
            </section>

            {/* 14. Changes to this policy */}
            <section id="changes-to-policy" className="pb-8 border-b border-slate-100 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                14. Changes to this policy
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  We may update this policy from time to time, for example when the app adds new features. The &quot;Last updated&quot; date at the top shows when it was last changed. Please review it occasionally.
                </p>
              </div>
            </section>

            {/* 15. Contact us */}
            <section id="contact-us" className="pt-2 pb-12 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
                15. Contact us
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  If you have questions about this policy or about Barzy, email us at{" "}
                  <a href={`mailto:${contactEmail}`} className="text-blue-600 font-semibold underline underline-offset-2">
                    {contactEmail}
                  </a>.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white text-sm font-semibold px-7 py-3 rounded-full transition shadow-xs"
                  >
                    <span>Send Email ({contactEmail})</span>
                    <span>&rarr;</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-semibold px-6 py-3 rounded-full transition"
                  >
                    Copy Email Address
                  </button>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 w-9 h-9 rounded-full bg-white border border-slate-300 text-slate-700 shadow-sm hover:bg-slate-50 flex items-center justify-center transition z-40 text-xs"
        >
          ↑
        </button>
      )}

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 bg-slate-900 text-white px-3.5 py-2.5 rounded-lg text-xs font-semibold shadow-md flex items-center gap-2 z-50 transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <span>✓</span>
        <span>{toastMessage}</span>
      </div>

      {/* Main Website Footer */}
      <Footer />
    </div>
  );
}
