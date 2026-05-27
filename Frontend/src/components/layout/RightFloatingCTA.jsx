"use client";

import { Phone, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import EnquiryPopupButton from "../integrations/EnquiryPopupButton";

export default function RightFloatingCTA() {
  const pathname = usePathname();
  
  // Pages where floating elements should not appear
  const isLandingPage = pathname?.startsWith("/lp") || 
                        pathname === "/best-bba-college-in-kolkata" || 
                        pathname === "/best-bca-college-in-kolkata" || 
                        pathname === "/best-aviation-and-hospitality-college-in-kolkata" || 
                        pathname === "/best-mba-college-in-kolkata" || 
                        pathname === "/best-mha-college-in-kolkata" || 
                        pathname === "/best-bba-business-analytics-college-in-kolkata" || 
                        pathname === "/best-bmlt-and-hospital-management-college-in-kolkata";

  // Dynamic campaign number: use 6292004641 for landing pages, 8001110000 for standard website
  const phoneNumber = isLandingPage ? "6292004641" : "8001110000";
  const formattedPhone = isLandingPage ? "62920 04641" : "800 111 0000";

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
        <span 
          style={{ writingMode: "vertical-rl" }}
          className="text-[10px] sm:text-[11px] font-black tracking-[0.15em] whitespace-nowrap rotate-180 mt-1"
        >
          {formattedPhone}
        </span>
      </a>

      {/* Enquire Now Tab */}
      <EnquiryPopupButton 
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
