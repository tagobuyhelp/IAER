import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import BackToTop from "@/components/layout/BackToTop";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import LinkFixer from "@/components/utils/LinkFixer";

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
        <LinkFixer />

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

        {/* Meritto Enquiry Form Widget 1 - POP-UP (npfwpopup.js + NpfWidgetsInit) */}
        <Script id="npf-widget-1" strategy="lazyOnload">
          {`
            (function(){
              var s=document.createElement("script");
              s.type="text/javascript";
              s.async=true;
              s.src="https://cdn.npfs.co/js/widget/npfwpopup.js";
              s.onload=function(){
                try {
                  if (!document.querySelector('.npfWidget-ee13b8b13cddfc1bfec07deacefd996b')) {
                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'npfWidgetButton npfWidget-ee13b8b13cddfc1bfec07deacefd996b';
                    btn.style.display = 'none';
                    btn.textContent = 'Enquire Now';
                    document.body.appendChild(btn);
                  }
                } catch (e) {}
                window['npfWee13b8b13cddfc1bfec07deacefd996b'] = new NpfWidgetsInit({
                  widgetId: 'ee13b8b13cddfc1bfec07deacefd996b',
                  baseurl: 'widgets.nopaperforms.com',
                  formTitle: 'Enquiry Form',
                  titleColor: '#FF0033',
                  backgroundColor: '#ddd',
                  iframeHeight: '500px',
                  buttonbgColor: '#4c79dc',
                  buttonTextColor: '#FFF'
                });
              };
              document.body.appendChild(s);
            })();
          `}
        </Script>

        {/* Meritto Enquiry Form Widget 2 - POP-UP (emwgts.js) */}
        <Script src="https://widgets.nopaperforms.com/emwgts.js" strategy="lazyOnload" />

        <Script id="npf-helpers" strategy="lazyOnload">
          {`
            (function(){
              try {
                var mainId = 'ee13b8b13cddfc1bfec07deacefd996b';
                if (!window.__IAER_BROCHURE_WIDGET_ID) {
                  window.__IAER_BROCHURE_WIDGET_ID = mainId;
                }
                var ensureTrigger = function(id){
                  try {
                    if (document.querySelector('.npfWidget-' + id)) return;
                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'npfWidgetButton npfWidget-' + id;
                    btn.style.display = 'none';
                    btn.textContent = 'Enquire Now';
                    document.body.appendChild(btn);
                  } catch (e) {}
                };

                if (!window.openNpfPopup) {
                  window.openNpfPopup = function(id){
                    var targetId = id || mainId;
                    ensureTrigger(targetId);

                    try {
                      var trigger = document.querySelector('.npfWidget-' + targetId);
                      if (trigger) trigger.click();
                    } catch (e) {}

                    try {
                      setTimeout(function(){
                        try {
                          var has = !!document.querySelector('iframe[src*="nopaperforms.com"]');
                          if (!has) {
                            var url = 'https://widgets.nopaperforms.com/widget/' + targetId;
                            var w = 920, h = 700;
                            var left = Math.max(0, (window.innerWidth - w) / 2);
                            var top = Math.max(0, (window.innerHeight - h) / 2);
                            var features = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left;
                            var win = window.open(url, 'Enquiry Form', features);
                            if (!win) window.open(url, '_blank', 'noopener,noreferrer');
                          }
                        } catch (e) {}
                      }, 800);
                    } catch (e) {}
                  };
                }

                if (!window.openBrochurePopup) {
                  window.openBrochurePopup = function(){
                    try {
                      var id = window.__IAER_BROCHURE_WIDGET_ID || mainId;
                      if (typeof window.openNpfPopup === 'function') {
                        window.openNpfPopup(id);
                        return;
                      }
                      ensureTrigger(id);
                      var trigger = document.querySelector('.npfWidget-' + id);
                      if (trigger) trigger.click();
                    } catch (e) {}
                  };
                }

                ensureTrigger(mainId);
              } catch (e) {}
            })();
          `}
        </Script>

        <Script id="npf-chatbot-loader" strategy="afterInteractive">
          {`
            (function(){
              try {
                var s=document.createElement('script');
                s.type='text/javascript';
                s.async=true;
                s.src='https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/f66854412785432ea1d2c2257fe7861f/71289f36cb7f4d1aa57ea9599d67b976';
                document.body.appendChild(s);
              } catch (e) {}
            })();
          `}
        </Script>

        <Script id="npf-chatbot-instrumentation" strategy="afterInteractive">
          {`
            (function() {
              try {
                var placeholder = document.querySelector('.npf_chatbots');
                var loader = Array.from(document.scripts).find(function(s){
                  return s.src && s.src.indexOf('niaachtbtscpt.js') !== -1;
                });

                if (loader) {
                  loader.addEventListener('load', function(){});
                  loader.addEventListener('error', function(){});
                }

                if (placeholder) {
                  var obs = new MutationObserver(function(){});
                  obs.observe(placeholder, { childList: true, subtree: true });
                }
              } catch (e) {}
            })();
          `}
        </Script>

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
              "telephone": "+91 800 111 0000",
              "contactType": "Admissions",
              "email": "admission@iaer.ac.in"
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
