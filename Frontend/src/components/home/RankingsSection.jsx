"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Calendar,
  Medal,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function RankingsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-8 sm:py-11 md:py-16 border-t border-primary/40 text-primary-foreground relative overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/campus/iaer-campus.png"
          alt="IAER Campus Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto md:mx-0 text-center md:text-left mb-5 md:mb-7 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] md:text-[14px] font-semibold tracking-wide text-primary-foreground/80 uppercase">
            <Award className="w-4 h-4 text-accent" />
            Rankings &amp; Accreditations
          </span>
          <h2 className="mt-2 text-[22px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-extrabold text-primary-foreground leading-tight">
            Proudly Distinguished
          </h2>
          <p className="mt-2 text-[13px] sm:text-[14px] md:text-[15px] text-primary-foreground/80">
            National recognitions and statutory approvals that validate quality and outcomes.
          </p>
          <div className="mt-3 flex items-center justify-center md:justify-start gap-2">
            <div className="h-[2px] w-24 md:w-32 rounded-full bg-gradient-to-r from-accent via-primary to-transparent" />
            <div className="flex items-center gap-1 text-accent/70">
              <Sparkles className="w-3 h-3" />
              <Sparkles className="w-3 h-3 opacity-70" />
              <Sparkles className="w-3 h-3 opacity-50" />
            </div>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-44 h-44 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-[-40px] w-64 h-64 bg-dot-grid opacity-40" />
          <div className="hidden lg:block pointer-events-none absolute inset-y-6 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="relative bg-[#0a0601]/80 backdrop-blur-sm border border-primary/40 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch">
              <div
                className="relative rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-700 ease-out border border-primary/25 shadow-sm hover:-translate-y-[3px] hover:border-accent/40 hover:shadow-xl/10"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale-100" : "translateY(18px) scale-95",
                  transitionDelay: inView ? "80ms" : "0ms",
                }}
              >
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-primary-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <Medal className="w-5 h-5 text-accent" />
                  National &amp; Industry Recognitions
                </h3>
                <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                  {[
                    { year: "2019", label: "IT Startup Excellence Award" },
                    { year: "2020", label: "Virtual Education & Technology Award" },
                    { year: "2021", label: "Startup & VC Award" },
                  ].map((item, index) => (
                    <li
                      key={item.year}
                      className="group flex items-center gap-3 rounded-lg px-2 py-1.5 sm:py-2 -mx-2 transition-colors duration-200 hover:bg-primary/5"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(10px)",
                        transitionDelay: inView ? `${140 + index * 80}ms` : "0ms",
                      }}
                    >
                      <span className="inline-flex items-center justify-center min-w-[64px] sm:min-w-[72px] px-2.5 sm:px-3 py-1 rounded-full bg-primary/5 text-[11px] sm:text-[13px] font-semibold text-white gap-1">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {item.year}
                      </span>
                      <Medal className="w-4 h-4 text-accent/80 flex-shrink-0" />
                      <span className="text-[12px] sm:text-[14px] text-primary-foreground/80 font-medium leading-snug group-hover:text-primary-foreground">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="relative rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-700 ease-out border border-primary/25 shadow-sm flex flex-col justify-between hover:-translate-y-[3px] hover:border-accent/40 hover:shadow-xl/10"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale-100" : "translateY(18px) scale-95",
                  transitionDelay: inView ? "140ms" : "0ms",
                }}
              >
                <div className="pointer-events-none absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
                <div>
                  <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-primary-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    Affiliation &amp; Approval
                  </h3>
                  <div className="space-y-3 sm:space-y-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="group flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden p-2 sm:p-3 transition-all duration-200 group-hover:scale-[1.03] group-hover:saturate-125">
                          <img
                            src="/images/affiliations/MAKAUT-aff.png"
                            alt="MAKAUT Affiliation"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] sm:text-[15px] font-semibold text-primary-foreground">
                            MAKAUT
                          </div>
                          <div className="text-[12px] sm:text-[13px] text-primary-foreground/80">
                            Affiliation
                          </div>
                        </div>
                      </div>
                      <CheckCircle2
                        className="w-5 h-5 text-emerald-500 transition-transform duration-200 group-hover:scale-110"
                        style={{
                          opacity: inView ? 1 : 0,
                          transform: inView ? "scale(1)" : "scale(0.8)",
                          transitionDelay: inView ? "220ms" : "0ms",
                        }}
                      />
                    </div>
                    <div className="group flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-36 md:h-36 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center overflow-hidden p-2 sm:p-3 transition-all duration-200 group-hover:scale-[1.03] group-hover:saturate-125">
                          <img
                            src="/images/affiliations/AICTE-aff.png"
                            alt="AICTE Affiliation"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] sm:text-[15px] font-semibold text-primary-foreground">
                            AICTE
                          </div>
                          <div className="text-[12px] sm:text-[13px] text-primary-foreground/80">
                            Approval
                          </div>
                        </div>
                      </div>
                      <CheckCircle2
                        className="w-5 h-5 text-emerald-500 transition-transform duration-200 group-hover:scale-110"
                        style={{
                          opacity: inView ? 1 : 0,
                          transform: inView ? "scale(1)" : "scale(0.8)",
                          transitionDelay: inView ? "260ms" : "0ms",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-[11px] sm:text-[12px] md:text-[13px] text-primary-foreground/80">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 border border-primary/35">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>AICTE Approved</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 border border-primary/35">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>MAKAUT Affiliated</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 border border-primary/35">
                <Medal className="w-3.5 h-3.5 text-accent" />
                <span>Awarded 2019–2021</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 border-t border-primary/40 pt-4 md:pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-primary-foreground/80">
            Detailed certificates, approvals and statutory documents are available for review.
          </p>
          <Link
            href="/about/awards"
            className="inline-flex items-center justify-center px-3.5 py-2 text-[12px] sm:text-sm font-semibold rounded-full border border-primary/40 text-primary-foreground hover:bg-primary/25 transition-colors"
          >
            View approvals &amp; documents
          </Link>
        </div>
      </div>
    </section>
  );
}
