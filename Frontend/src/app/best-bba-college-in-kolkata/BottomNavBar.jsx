"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BookOpen, Star, Briefcase, Layers, GraduationCap, Phone } from "lucide-react";

export default function BottomNavBar({ onApplyNow }) {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "Overview", icon: BookOpen },
    { id: "specializations", label: "Specializations", icon: Layers },
    { id: "why-iaer", label: "Why IAER", icon: Star },
    { id: "placements", label: "Placements", icon: Briefcase },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; 
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Mobile-only Floating Call & WhatsApp Widgets */}
      <div className="fixed bottom-[72px] right-4 z-[999] flex flex-col gap-3 md:hidden">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916292004641"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-11 h-11 rounded-full active:scale-95 transition-transform"
        >
          <span className="absolute w-10 h-10 bg-green-500 opacity-40 rounded-full animate-ping pointer-events-none" />
          <Image
            className="w-11 h-11 z-10 animate-zoom"
            width={44}
            height={44}
            src="/images/icons/WhatsAppIcon.svg"
            alt="WhatsApp icon"
            unoptimized
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </a>

        {/* Call Button */}
        <a
          href="tel:+916292004641"
          className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#143674] shadow-[0_4px_15px_rgba(20,54,116,0.4)] active:scale-95 transition-transform"
        >
          <span className="absolute w-full h-full bg-blue-400 rounded-full animate-ping opacity-25 pointer-events-none" />
          <Phone className="w-5 h-5 text-white fill-white/10" />
        </a>
      </div>

      <div className="fixed bottom-0 md:bottom-6 left-0 right-0 md:left-[50%] md:translate-x-[-50%] z-[999] w-full md:max-w-[760px] bg-[#143674]/95 backdrop-blur-md border-t md:border border-white/10 md:rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-4 py-2 flex items-center justify-between gap-4 pb-safe transition-all duration-300">
        {/* Scrollable container for sections */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar flex-1 pr-2">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-white shadow-md shadow-accent/25"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sticky CTA Button */}
        <button
          onClick={onApplyNow}
          className="flex items-center justify-center gap-1.5 bg-accent hover:bg-accent/90 text-white rounded-full py-2.5 px-4 text-xs font-extrabold transition-all shadow-md active:scale-95 whitespace-nowrap"
        >
          <GraduationCap className="w-4.5 h-4.5 shrink-0" />
          <span>Apply Now</span>
        </button>
      </div>
    </>
  );
}
