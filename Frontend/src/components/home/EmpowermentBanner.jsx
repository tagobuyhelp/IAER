"use client";

import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { handleDownloadBrochure } from "@/lib/download";
import Link from "next/link";

export default function EmpowermentBanner() {
  return (
    <section className="py-7 sm:py-10 md:py-12 bg-white">
      <EmpowermentBannerInner />
    </section>
  );
}

function EmpowermentBannerInner() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="container mx-auto px-4">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 text-white shadow-[0_20px_50px_-15px_rgba(20,184,166,0.5)] px-5 sm:px-8 py-8 sm:py-10 md:px-12 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 transition-all duration-700 ease-out"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/20 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-300/30 blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 mix-blend-overlay" />

        <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4 text-center lg:text-left">
          <p className="text-[11px] sm:text-xs md:text-sm font-black tracking-[0.2em] uppercase text-teal-100 bg-teal-800/20 inline-block px-3 py-1 rounded-full border border-teal-400/30">
            Ready to Start?
          </p>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
              <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] font-black leading-tight drop-shadow-sm">
                Education That Empowers
              </h2>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 drop-shadow-sm animate-pulse" />
            </div>
            <div className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
              <h3 className="text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] font-black leading-tight text-teal-50 drop-shadow-sm">
                Opportunities That Transform
              </h3>
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300 drop-shadow-sm" />
            </div>
          </div>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] text-teal-50/90 max-w-xl mx-auto lg:mx-0 font-medium">
            Take the next step towards a globally relevant, industry-aligned education experience.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-4 lg:mt-0">
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden group h-12 sm:h-14 md:h-[60px] rounded-full px-8 sm:px-10 text-[14px] sm:text-[16px] font-black tracking-wide bg-white text-teal-700 hover:bg-teal-50 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center w-full sm:w-auto hover:-translate-y-1"
          >
            <Link href="https://admission.iaer.ac.in/" target="_blank">
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal-100/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700" />
              <span className="relative inline-flex items-center">
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 sm:h-14 md:h-[60px] rounded-full border border-teal-200/40 text-white hover:bg-white/10 hover:border-white/60 bg-white/5 backdrop-blur-sm px-8 text-[14px] sm:text-[16px] font-bold flex items-center justify-center w-full sm:w-auto transition-all duration-300 hover:-translate-y-1"
            onClick={handleDownloadBrochure}
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
}
