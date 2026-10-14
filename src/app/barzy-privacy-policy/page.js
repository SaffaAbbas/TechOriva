import BarzyPrivacyPolicy from "./BarzyPrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | Barzy: QR & Barcode Scanner — DEVLYS",
  description:
    "Official Privacy Policy for Barzy: QR & Barcode Scanner by DEVLYS. Everything stays on your device. Zero data collection, no ads, no trackers.",
  alternates: {
    canonical: "https://devlys.com/barzy-privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Barzy: QR & Barcode Scanner",
    description:
      "Privacy Policy for Barzy for Android. Zero personal data collection, 100% on-device processing, no ads or tracking.",
    url: "https://devlys.com/barzy-privacy-policy",
    siteName: "DEVLYS",
    type: "website",
  },
};

export default function BarzyPrivacyPolicyPage() {
  return <BarzyPrivacyPolicy />;
}
