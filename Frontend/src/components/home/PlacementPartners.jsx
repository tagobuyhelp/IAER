"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const companies = [
  {
    name: "TCS",
    logo: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png",
  },
  {
    name: "Wipro",
    logo: null,
  },
  {
    name: "Amazon",
    logo: "/images/company_logos/Amazon_logo.svg.png",
  },
  {
    name: "Fortis",
    logo: "/images/company_logos/FORTIS.NS_BIG-b3d2adc3.png",
  },
  {
    name: "Apollo Hospitals",
    logo: "/images/company_logos/apollo.png",
  },
  {
    name: "Marriott Hotels",
    logo: "/images/company_logos/Marriott_logo.png",
  },
  {
    name: "Accenture",
    logo: "/images/company_logos/Accenture.png",
  },
  {
    name: "Infosys",
    logo: "/images/company_logos/Infosys_logo.png",
  },
  {
    name: "Cognizant",
    logo: "/images/company_logos/Cognizant_logo.png",
  },
  {
    name: "HCL",
    logo: "/images/company_logos/HCL_Technologies.svg",
  },
  {
    name: "Capgemini",
    logo: "/images/company_logos/Capgemini.png",
  },
  {
    name: "Deloitte",
    logo: "/images/company_logos/deloitte.svg",
  },
  {
    name: "EY",
    logo: "/images/company_logos/EY_logo.png",
  },
  {
    name: "Medica",
    logo: "/images/company_logos/medica_logo.png",
  },
  {
    name: "Narayana Health",
    logo: "/images/company_logos/narayana-logo.png",
  },
  {
    name: "Hyatt",
    logo: "/images/company_logos/Hyatt_Logo.png",
  },
  {
    name: "Tech Mahindra",
    logo: "/images/company_logos/Tech_Mahindra.png",
  },
  {
    name: "Radisson Hotels",
    logo: "/images/company_logos/1280px-Radisson_logo.png",
  },
  {
    name: "Indigo",
    logo: "/images/company_logos/indigo_flight-removebg-preview.png",
  },
  {
    name: "Spicejet",
    logo: "/images/company_logos/spicejet-removebg-preview.png",
  },
  {
    name: "GMR",
    logo: "/images/company_logos/gmr-removebg-preview.png",
  },
  {
    name: "Adani Group",
    logo: "/images/company_logos/Adani_logo.png",
  },
  {
    name: "Accord Hotels",
    logo: "/images/company_logos/Accord_Metropolitan_802dfddd.avif",
  },
];

export default function PlacementPartners() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-32 bg-dot-grid opacity-[0.05]" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-teal-50/50 blur-[60px]" />

      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 mb-5 sm:mb-8 text-center",
          reduceMotion
            ? "opacity-100 translate-y-0"
            : inView
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-4"
        )}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold mb-4 border border-teal-100 shadow-sm text-teal-700">
          <Sparkles className="h-4 w-4 sm:h-4 sm:w-4 text-teal-500" />
          <span>Trusted by Leading Recruiters</span>
        </div>
        <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
          Our Students are <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Working With</span>
        </h2>
        <p className="text-[13px] sm:text-sm md:text-base text-slate-500 mt-3 max-w-xl mx-auto font-medium">
          A growing network of recruiters across IT, healthcare, hospitality, aviation, and consulting.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden py-4 sm:py-6 group">
        {/* Gradients to fade out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-10 sm:gap-14 md:gap-20 whitespace-nowrap animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {companies.map((company, index) => (
            <div
              key={`c1-${index}`}
              className="flex items-center justify-center min-w-[100px] sm:min-w-[140px]"
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={80}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-300 hover:text-teal-600 transition-colors cursor-default">
                  {company.name}
                </span>
              )}
            </div>
          ))}
          {companies.map((company, index) => (
            <div
              key={`c2-${index}`}
              className="flex items-center justify-center min-w-[100px] sm:min-w-[140px]"
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={80}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-300 hover:text-teal-600 transition-colors cursor-default">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {!reduceMotion && (
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      )}
    </section>
  );
}
