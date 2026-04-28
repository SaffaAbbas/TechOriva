import { Nunito, Nunito_Sans } from "next/font/google";
import Header from "./components/Header";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./globals.css";
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "DEVLYS — Web, SEO, Mobile & AI",
  description:
    "DEVLYS is a modern digital agency delivering high-performing websites, SEO, mobile apps, and AI/ML solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <Header />
        <main className="pt-[84px] md:pt-[92px]">
          {children}
        </main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
