"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Handshake, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const companies = [
  { name: "TCS", logo: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png" },
  { name: "Amazon", logo: "/images/company_logos/Amazon_logo.svg.png" },
  { name: "Infosys", logo: "/images/company_logos/Infosys_logo.png" },
  { name: "Cognizant", logo: "/images/company_logos/Cognizant_logo.png" },
  { name: "HCL", logo: "/images/company_logos/HCL_Technologies.svg" },
  { name: "Tech Mahindra", logo: "/images/company_logos/Tech_Mahindra.png" },
  { name: "Capgemini", logo: "/images/company_logos/Capgemini.png" },
  { name: "Accenture", logo: "/images/company_logos/Accenture.png" },
  { name: "Deloitte", logo: "/images/company_logos/deloitte.svg" },
  { name: "EY", logo: "/images/company_logos/EY_logo.png" },
  { name: "Apollo Hospitals", logo: "/images/company_logos/apollo.webp" },
  { name: "Fortis", logo: "/images/company_logos/FORTIS.NS_BIG-b3d2adc3.png" },
  { name: "Medica", logo: "/images/company_logos/medica_logo.png" },
  { name: "Narayana Health", logo: "/images/company_logos/narayana-logo.png" },
  { name: "Hyatt", logo: "/images/company_logos/Hyatt_Logo.png" },
  { name: "Marriott", logo: "/images/company_logos/Marriott_logo.png" },
  { name: "Radisson", logo: "/images/company_logos/1280px-Radisson_logo.png" },
  { name: "IndiGo", logo: "/images/company_logos/indigo_flight-removebg-preview.png" },
  { name: "SpiceJet", logo: "/images/company_logos/spicejet-removebg-preview.png" },
  { name: "GMR", logo: "/images/company_logos/gmr-removebg-preview.png" },
  { name: "Adani", logo: "/images/company_logos/Adani_logo.png" },
  { name: "Accord", logo: "/images/company_logos/Accord_Metropolitan_802dfddd.avif" },
];

function LogoCard({ name, logo, tone = "light" }) {
  return (
    <div
      className={cn(
        "mx-3 md:mx-4 w-[130px] h-[64px] md:w-[160px] md:h-[78px] flex items-center justify-center overflow-hidden transition-all duration-300",
        
      )}
    >
      <div className="relative w-full h-full p-4">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          sizes="170px"
        />
      </div>
    </div>
  );
}

export default function OurHiringPartnersSection({ compact = false, className }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  const [rowA, rowB] = useMemo(() => {
    const a = [];
    const b = [];
    companies.forEach((c, idx) => (idx % 2 === 0 ? a.push(c) : b.push(c)));
    return [a, b];
  }, []);

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-100 overflow-hidden",
        compact ? "py-6 sm:py-8 md:py-10" : "py-10 sm:py-12 md:py-16",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn("text-center", compact ? "mb-5 sm:mb-6 md:mb-7" : "mb-7 sm:mb-10 md:mb-12")}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Trusted Network
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 flex items-center justify-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100">
              <Handshake className="w-5 h-5 text-emerald-700" />
            </span>
            Our Hiring Partner&apos;s
          </h2>
          <p className="text-[12px] sm:text-sm md:text-base text-gray-600 mt-2.5 sm:mt-3 max-w-3xl mx-auto">
            Recruiters across IT, Consulting, Healthcare, Hospitality, Aviation, and Corporate sectors.
          </p>
        </div>
      </div>

      <div className="relative">

        <div className={cn(compact ? "space-y-3 sm:space-y-4 md:space-y-5" : "space-y-4 sm:space-y-6 md:space-y-8")}>
          <Marquee
            speed={reduceMotion ? 0 : 35}
            autoFill
            pauseOnHover
            gradient
            gradientColor={[255, 255, 255]}
            className="py-1"
          >
            {rowA.map((c) => (
              <LogoCard key={c.name} name={c.name} logo={c.logo} />
            ))}
          </Marquee>

          <Marquee
            speed={reduceMotion ? 0 : 35}
            autoFill
            pauseOnHover
            gradient
            gradientColor={[255, 255, 255]}
            direction="right"
            className="py-1"
          >
            {rowB.map((c) => (
              <LogoCard key={c.name} name={c.name} logo={c.logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
