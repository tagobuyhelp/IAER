"use client";

import { Phone, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import EnquiryPopupButton from "../integrations/EnquiryPopupButton";

export default function RightFloatingCTA() {
  const pathname = usePathname();
  
  if (pathname === "/thank-you") return null;

  // Pages where floating elements should not appear
  const isLandingPage = pathname?.startsWith("/lp") || 
                        pathname === "/best-bba-college-in-kolkata" || 
                        pathname === "/best-bca-college-in-kolkata" || 
                        pathname === "/best-aviation-and-hospitality-college-in-kolkata" || 
                        pathname === "/best-mba-college-in-kolkata" || 
                        pathname === "/best-mha-college-in-kolkata" || 
                        pathname === "/best-bba-business-analytics-college-in-kolkata" || 
                        pathname === "/best-bmlt-and-hospital-management-college-in-kolkata" ||
                        pathname === "/best-cyber-security-college-in-kolkata" ||
                        pathname === "/best-data-science-college-in-kolkata";

  // Dynamic campaign number: use 6292004641 for landing pages, 8001110000 for standard website
  const phoneNumber = isLandingPage ? "6292004641" : "8001110000";
  const formattedPhone = isLandingPage ? "62920 04641" : "800 111 0000";

  // Map page path to specific widget ID
  let specificWidgetId = null;
  if (pathname) {
    const path = pathname.replace(/\/$/, "").toLowerCase();
    if (path === "/best-bca-college-in-kolkata") {
      specificWidgetId = "10d5d69d0bd7a76f17c3173a5d763657";
    } else if (path === "/best-mba-college-in-kolkata" || path === "/best-mha-college-in-kolkata") {
      specificWidgetId = "3958b53341cc9f2a1efd7126074cee70";
    } else if (path === "/best-bmlt-and-hospital-management-college-in-kolkata") {
      specificWidgetId = "5f74e92b4f492e8e612fc2ca21f5bdd0";
    } else if (path === "/best-cyber-security-college-in-kolkata" || path === "/best-data-science-college-in-kolkata") {
      specificWidgetId = "387bb313db2bcf961b9ec24aba3d71af";
    } else if (path === "/best-bba-college-in-kolkata") {
      specificWidgetId = "c4af7a13a0ce4880aa5e45e7e28e4d7e";
    } else if (path === "/best-bba-business-analytics-college-in-kolkata") {
      specificWidgetId = "7d4ff460d6ea7bd38733efe8071180ad";
    } else if (path === "/best-aviation-and-hospitality-college-in-kolkata") {
      specificWidgetId = "801d4b4527d02ba387fb1b8e59abc192";
    }
  }

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col bg-[#143674]/95 backdrop-blur-md text-white rounded-l-2xl border-l border-y border-white/20 shadow-[0_15px_50px_rgba(0,0,0,0.4)] w-[42px] sm:w-[48px] overflow-hidden select-none translate-x-1.5 hover:translate-x-0 transition-transform duration-300 ease-out">
      
      {/* Phone Number Tab */}
      <a 
        href={`tel:${phoneNumber}`} 
        className="group flex flex-col items-center justify-center gap-2 py-5 hover:bg-white/5 transition-all duration-300 text-accent hover:text-white cursor-pointer w-full"
        aria-label={`Call ${formattedPhone}`}
      >
        <div className="relative">
          <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
        </div>
        
      </a>

      {/* Enquire Now Tab */}
      <EnquiryPopupButton 
        widgetId={specificWidgetId}
        className="group flex flex-col items-center justify-center gap-2 py-6 bg-gradient-to-b from-[#f7941e] to-[#d97706] hover:from-[#ffaa33] hover:to-[#f59e0b] text-white font-extrabold transition-all duration-300 border-t border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] w-full"
      >
        <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        <span 
          style={{ writingMode: "vertical-rl" }}
          className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase rotate-180 mt-1 whitespace-nowrap"
        >
          Enquire Now
        </span>
      </EnquiryPopupButton>

    </div>
  );
}
