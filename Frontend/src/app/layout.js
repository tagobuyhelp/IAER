import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import BackToTop from "@/components/layout/BackToTop";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  metadataBase: new URL('https://iaer.in'),
  title: {
    default: "IAER - Institute of Advanced Education & Research | Kolkata",
    template: "%s | IAER Kolkata"
  },
  description: "India’s Fastest-Growing Institute for Future-Ready Careers. IAER offers BBA, BCA, BSc, and MBA programs in Management, IT, Healthcare, and Hospitality with 100% placement assistance.",
  keywords: ["IAER", "IAER Kolkata", "Institute of Advanced Education & Research", "BBA College Kolkata", "BCA College Kolkata", "Hospital Management College", "Best Management College in Kolkata", "Top Placement College", "Cyber Security Course", "Data Science Course"],
  authors: [{ name: "IAER" }],
  creator: "IAER",
  publisher: "IAER",
  openGraph: {
    title: "IAER - Institute of Advanced Education & Research",
    description: "Join IAER for industry-driven education in Management, IT, Healthcare, and Hospitality. 100% Placement Assistance.",
    url: "https://iaer.in",
    siteName: "IAER",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IAER - Institute of Advanced Education & Research",
    description: "Empowering the future through education, research, and innovation. Join IAER today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <TopBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BottomNav />
        <BackToTop />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
