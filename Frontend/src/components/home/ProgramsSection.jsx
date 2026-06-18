"use client";

import { useState, useRef, useEffect } from "react";
import { programs } from "@/lib/programs";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  BookOpen,
  Sparkles,
  MapPin,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { handleDownloadBrochure } from "@/lib/download";

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    "All",
    "Undergraduate Degrees",
    "Certificates & Diplomas",
    "Postgraduate Degrees",
  ];

  const groupByProgramCode = {
    BBA: "Undergraduate Degrees",
    "BBA-BA": "Undergraduate Degrees",
    "BBA-SM": "Undergraduate Degrees",
    "BBA-HM": "Undergraduate Degrees",
    "BBA-GB": "Undergraduate Degrees",
    "BBA-AO": "Undergraduate Degrees",
    "BBA-AHSM": "Undergraduate Degrees",

    BCA: "Undergraduate Degrees",
    "BCA-AIML": "Undergraduate Degrees",
    "BCA-DSCS": "Undergraduate Degrees",
    BSCDS: "Undergraduate Degrees",
    BSCCS: "Undergraduate Degrees",
    BSCHHA: "Undergraduate Degrees",
    BMLT: "Undergraduate Degrees",

    ACSD: "Certificates & Diplomas",
    ACFD: "Certificates & Diplomas",
    ACAI: "Certificates & Diplomas",
    ACAC: "Certificates & Diplomas",
    DAHM: "Certificates & Diplomas",
    DMLT: "Certificates & Diplomas",

    MBA: "Postgraduate Degrees",
    PGDM: "Postgraduate Degrees",
    "PGDM-AIADS": "Postgraduate Degrees",
    "PGDM-BA": "Postgraduate Degrees",
    "PGDM-FT": "Postgraduate Degrees",
    "PGDM-HMHA": "Postgraduate Degrees",
    MHA: "Postgraduate Degrees",
  };

  const resolveGroup = (program) => {
    if (!program) return "Undergraduate Degrees";
    const code = typeof program.code === "string" ? program.code : "";

    const mapped = groupByProgramCode[code];
    if (mapped) return mapped;

    if (code === "DMLT" || code === "DAHM" || code.startsWith("AC")) return "Certificates & Diplomas";
    if (code === "MBA" || code === "MHA" || code.startsWith("PGDM")) return "Postgraduate Degrees";
    return "Undergraduate Degrees";
  };

  const filteredPrograms = activeTab === "All" 
    ? programs 
    : programs.filter((p) => {
        return resolveGroup(p) === activeTab;
      });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [activeTab]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gray-50/50 overflow-hidden relative border-b border-gray-100">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-100/50 rounded-full blur-[120px] -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-100/40 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 md:gap-8 mb-7 sm:mb-10 md:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-500" />
              Academic Excellence
            </div>
            <h2 className="text-[26px] sm:text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Professional</span> Programs
            </h2>
            <p className="mt-2.5 sm:mt-4 text-slate-600 text-[13px] sm:text-base md:text-lg font-medium">
              Industry-aligned curricula designed to transform students into high-impact professionals across diverse sectors.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={cn(
                "w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300",
                canScrollLeft ? "bg-white text-slate-900 shadow-md hover:border-teal-500 hover:text-teal-600 hover:shadow-lg" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={cn(
                "w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300",
                canScrollRight ? "bg-white text-slate-900 shadow-md hover:border-teal-500 hover:text-teal-600 hover:shadow-lg" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-3 sm:pb-4 scrollbar-hide no-scrollbar mask-image-linear-gradient-right">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[12px] sm:text-sm font-bold whitespace-nowrap transition-all duration-300 border shadow-sm",
                activeTab === cat 
                  ? "bg-teal-600 text-white border-teal-600 shadow-teal-600/20 shadow-lg scale-105" 
                  : "bg-white text-slate-600 border-gray-200 hover:border-teal-300 hover:text-teal-600 hover:shadow-md"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Carousel/Grid */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-10 sm:pb-12 pt-2 scrollbar-hide no-scrollbar px-1 sm:px-2 snap-x snap-mandatory max-w-full overflow-y-hidden"
        >
          {filteredPrograms.map((program) => (
            <div 
              key={program.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] max-w-[380px] snap-start group"
            >
              <div className="h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,147,122,0.15)] hover:border-teal-100 transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                    <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">{program.code}</span>
                  </div>

                  {/* Program Meta Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-300" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-50">{program.overview.duration.split(" (")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-teal-300" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-50">MAKAUT Affiliated</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5 md:p-6 flex flex-col relative bg-white">
                  {/* Decorative Line */}
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-teal-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-[16px] sm:text-lg md:text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-teal-600 transition-colors">
                    {program.title.replace(` (${program.code})`, "")}
                  </h3>
                  
                  <p className="text-xs text-slate-500 font-medium mb-5 line-clamp-2">
                    {program.subtitle}
                  </p>

                  <div className="space-y-2 text-sm mb-6 bg-gray-50/50 p-4 rounded-xl border border-gray-50 group-hover:border-teal-50 transition-colors">
                    <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-600 text-xs font-medium"><span className="font-bold text-slate-900">Duration:</span> {program.overview.duration}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-xs font-medium"><span className="font-bold text-slate-900">Eligibility:</span> {program.overview.eligibility}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-xs font-medium"><span className="font-bold text-slate-900">Mode:</span> {program.overview.mode}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Course Fee</span>
                        <span className="text-lg sm:text-xl font-black text-teal-600 leading-none">{program.fees.total.split(",000")[0]},000</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleDownloadBrochure}
                          className="text-slate-500 hover:text-teal-600 hover:bg-teal-50 font-bold group px-3 py-2 h-auto text-xs hidden sm:inline-flex rounded-lg transition-colors"
                        >
                          <Download className="w-3.5 h-3.5 mr-1.5" />
                          Brochure
                        </Button>
                        <Link 
                          href={`/programs/${program.id}`}
                          className="group/btn inline-flex items-center justify-center px-4 py-2 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-sm"
                        >
                          Explore
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-2 sm:mt-4 text-center">
          <Button
            asChild
            variant="outline"
            className="border-gray-200 text-slate-600 hover:text-teal-700 hover:bg-teal-50 hover:border-teal-200 font-bold group rounded-full px-6 shadow-sm transition-all duration-300"
          >
            <Link href="/programs" className="flex items-center gap-2">
              View All 15+ Specialized Programs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-teal-500" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
