import { Urbanist, Hanken_Grotesk } from "next/font/google";
import Header from "./components/Header";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "DEVLYS — Web, SEO, Mobile & AI",
  description:
    "DEVLYS is a modern digital agency delivering high-performing websites, SEO, mobile apps, and AI/ML solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${hankenGrotesk.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="pt-[84px] md:pt-[92px]">
          {children}
        </main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
