"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Info, BookOpen, Star, Award, Compass, GraduationCap, Phone } from "lucide-react";

export default function BottomNavBar({ _this }) {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "highlights", label: "Highlights", icon: Award },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "career", label: "Career", icon: Compass },
    { id: "testimonials", label: "Reviews", icon: Star },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset check
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

  const handleApply = () => {
    _this?.setCtaType?.("normal");
    _this?.setIsModalOpen?.(true);
  };

  return (
    <>
      {/* Mobile-only Floating Call & WhatsApp Widgets */}
      <div className="fixed bottom-[72px] right-4 z-[999] flex flex-col gap-3 md:hidden">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919093926145"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-11 h-11 rounded-full active:scale-95 transition-transform"
        >
          <span className="absolute w-10 h-10 bg-green-500 opacity-40 rounded-full animate-ping pointer-events-none" />
          <Image
            className="w-11 h-11 z-10 animate-zoom"
            width={44}
            height={44}
            src="/assets/images/WhatsAppIcon.svg"
            alt="WhatsApp icon"
            unoptimized
          />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919093926145"
          className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#00A2E7] shadow-[0_4px_15px_rgba(0,162,231,0.4)] active:scale-95 transition-transform"
        >
          <span className="absolute w-full h-full bg-sky-400 rounded-full animate-ping opacity-25 pointer-events-none" />
          <Phone className="w-5 h-5 text-white fill-white/10" />
        </a>
      </div>

      <div className="fixed bottom-0 md:bottom-6 left-0 right-0 md:left-[50%] md:translate-x-[-50%] z-[999] w-full md:max-w-[760px] bg-[#050A1F]/90 backdrop-blur-md border-t md:border border-slate-800/80 md:rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-4 py-2 flex items-center justify-between gap-4 pb-safe transition-all duration-300">
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
                  ? "bg-[#00A2E7] text-white shadow-md shadow-[#00A2E7]/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
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
        onClick={handleApply}
        className="flex items-center justify-center gap-1.5 bg-[#00A2E7] hover:bg-[#008bca] text-white rounded-full py-2.5 px-4 text-xs font-extrabold transition-all shadow-md active:scale-95 whitespace-nowrap"
      >
        <GraduationCap className="w-4.5 h-4.5 shrink-0" />
        <span>Apply Now</span>
      </button>
    </div>
    </>
  );
}
