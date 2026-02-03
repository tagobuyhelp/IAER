import { DM_Sans } from "next/font/google";
import Script from "next/script";
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
  applicationName: "IAER Kolkata",
  openGraph: {
    title: "IAER - Institute of Advanced Education & Research",
    description: "Join IAER for industry-driven education in Management, IT, Healthcare, and Hospitality. 100% Placement Assistance.",
    url: "https://iaer.in",
    siteName: "IAER",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logos/IAER_ICON.jpg", // Assumed path based on public/images/logos
        width: 800,
        height: 600,
        alt: "IAER Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IAER - Institute of Advanced Education & Research",
    description: "Empowering the future through education, research, and innovation. Join IAER today.",
    images: ["/images/logos/IAER_ICON.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logos/IAER_ICON.jpg", // Fallback if favicon.ico is missing or different
  },
  // Additional metadata from example
  other: {
    "theme-color": "#143674",
    "msapplication-TileColor": "#143674",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${dmSans.variable} font-sans antialiased flex flex-col min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QCT7VPL" 
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* NPF Chatbot Placeholder */}
        <div className="npf_chatbots" data-w="71289f36cb7f4d1aa57ea9599d67b976" style={{ display: "none" }}></div>

        <TopBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BottomNav />
        <BackToTop />
        <FloatingContactButtons />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5QCT7VPL');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SBFHMV6C4D" strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBFHMV6C4D');
          `}
        </Script>

        {/* NPF Widget Script */}
        <Script src="https://in8cdn.npfs.co/js/widget/npfwpopup.js" strategy="lazyOnload" />

        {/* NPF Chatbot Loader Script */}
        <Script 
          src="https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/f66854412785432ea1d2c2257fe7861f/71289f36cb7f4d1aa57ea9599d67b976" 
          strategy="lazyOnload" 
        />

        {/* Structured Data (JSON-LD) */}
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Institute of Advanced Education & Research (IAER)",
            "alternateName": "IAER Kolkata",
            "url": "https://iaer.in",
            "logo": "https://iaer.in/images/logos/IAER_ICON.jpg",
            "description": "India’s Fastest-Growing Institute for Future-Ready Careers. IAER offers BBA, BCA, BSc, and MBA programs.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No 37, Block – Bhangar-II, Near St. Xavier’s University, Newtown Action Area - III",
              "addressLocality": "Kolkata",
              "addressRegion": "West Bengal",
              "postalCode": "700160",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8001110000", // Replace with actual IAER phone if known, using placeholder or omitting
              "contactType": "Admissions",
              "email": "admission@iaer.in" // Replace with actual IAER email if known
            },
            "sameAs": [
              "https://www.facebook.com/iaer",
              "https://www.instagram.com/iaer",
              "https://www.linkedin.com/school/iaer"
            ],
            "offers": {
              "@type": "Offer",
              "description": "AICTE-Approved Programmes with 100% Placement Assistance"
            },
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "AICTE Approved"
            }
          })}
        </Script>
      </body>
    </html>
  );
}
