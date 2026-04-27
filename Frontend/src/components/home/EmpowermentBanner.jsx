"use client";

import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { handleDownloadBrochure } from "@/lib/download";
import Link from "next/link";

export default function EmpowermentBanner() {
  return (
    <section className="py-7 sm:py-10 md:py-12">
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
    <div className="container  mx-auto px-4">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary via-primary/95 to-accent/90 text-white shadow-[0_18px_45px_-20px_rgba(15,23,42,0.8)] px-4 sm:px-6 py-6 sm:py-8 md:px-10 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-8 transition-all duration-700 ease-out"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <div className="pointer-events-none absolute -top-16 -right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 w-64 h-64 bg-dot-grid opacity-30 mix-blend-soft-light" />

        <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3 text-center lg:text-left">
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-white/70">
            Ready to Start?
          </p>
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2">
              <h2 className="text-[20px] sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold leading-tight">
                Education That Empowers
              </h2>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 drop-shadow-sm" />
            </div>
            <div className="inline-flex items-center gap-2">
              <h3 className="text-[20px] sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold leading-tight text-orange-100">
                Opportunities That Transform
              </h3>
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200 drop-shadow-sm" />
            </div>
          </div>
          <p className="text-[12px] sm:text-sm md:text-[15px] text-white/80 max-w-xl mx-auto lg:mx-0">
            Take the next step towards a globally relevant, industry-aligned education experience.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden group h-11 sm:h-12 md:h-[52px] rounded-[14px] px-6 sm:px-7 md:px-9 text-[13px] sm:text-[15px] md:text-base font-semibold tracking-wide bg-white text-primary hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
          >
            <Link href="https://admission.iaer.ac.in/" target="_blank">
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700" />
              <span className="relative inline-flex items-center">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 md:h-[50px] rounded-[14px] border-white/40 text-white hover:bg-white/10 hover:text-white/90 bg-transparent px-6 text-[13px] sm:text-sm md:text-[15px] font-semibold flex items-center justify-center w-full sm:w-auto"
            onClick={handleDownloadBrochure}
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
}
