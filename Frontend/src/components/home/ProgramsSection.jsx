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
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Extract unique categories (using 'code' as a proxy or manual grouping)
  const categories = ["All", "Management", "Technology", "Healthcare", "Hospitality"];
  
  const getCategory = (code) => {
    if (code.includes("BBA") || code.includes("MBA")) return "Management";
    if (code.includes("B.Sc") || code.includes("CS") || code.includes("IT")) return "Technology";
    if (code.includes("BMLT") || code.includes("Hospital")) return "Healthcare";
    if (code.includes("Aviation") || code.includes("Hotel")) return "Hospitality";
    return "Management";
  };

  const filteredPrograms = activeTab === "All" 
    ? programs 
    : programs.filter(p => getCategory(p.code) === activeTab);

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
  }, [filteredPrograms]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[120px] -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Academic Excellence
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Explore Our <span className="text-primary">Professional</span> Programs
            </h2>
            <p className="mt-4 text-gray-600 text-lg font-medium">
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
                canScrollLeft ? "bg-white text-gray-900 shadow-md hover:border-primary hover:text-primary" : "bg-gray-100 text-gray-400 cursor-not-allowed"
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
                canScrollRight ? "bg-white text-gray-900 shadow-md hover:border-primary hover:text-primary" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border",
                activeTab === cat 
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white text-gray-600 border-gray-100 hover:border-primary/30 hover:text-primary"
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
          className="flex gap-6 overflow-x-auto pb-12 pt-4 scrollbar-hide no-scrollbar -mx-4 px-4 snap-x snap-mandatory"
        >
          {filteredPrograms.map((program) => (
            <div 
              key={program.id}
              className="min-w-[300px] md:min-w-[380px] max-w-[380px] snap-start group"
            >
              <div className="h-full bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 300px, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{program.code}</span>
                  </div>

                  {/* Program Meta Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{program.overview.duration.split(" (")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">MAKAUT Affiliated</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors">
                    {program.title.replace(` (${program.code})`, "")}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
                    {program.careerOutcomes.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {program.curriculum.specializations?.slice(0, 2).map(spec => (
                        <span key={spec} className="px-3 py-1 rounded-md bg-gray-50 text-[10px] font-bold text-gray-600 border border-gray-100 uppercase tracking-tighter">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Starting From</span>
                        <span className="text-lg font-black text-primary leading-none">{program.fees.total.split(",000")[0]},000</span>
                      </div>
                      
                      <Link 
                        href={`/programs/${program.id}`}
                        className="flex items-center gap-2 text-xs font-black text-primary hover:text-accent transition-colors group/btn uppercase tracking-widest"
                      >
                        Details
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-4 text-center">
          <Button
            asChild
            variant="ghost"
            className="text-gray-500 hover:text-primary font-bold group"
          >
            <Link href="/programs" className="flex items-center gap-2">
              View All 15+ Specialized Programs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
