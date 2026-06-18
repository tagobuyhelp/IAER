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
      className="py-8 sm:py-11 md:py-16 border-y border-gray-100 relative overflow-hidden bg-white"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/campus/iaer-campus.png"
          alt="IAER Campus Background"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/95 to-white/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto md:mx-0 text-center md:text-left mb-5 md:mb-7 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] md:text-[14px] font-bold tracking-wide text-teal-700 uppercase bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 shadow-sm">
            <Award className="w-4 h-4 text-teal-500" />
            Rankings &amp; Accreditations
          </span>
          <h2 className="mt-4 text-[22px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-extrabold text-slate-900 leading-tight">
            Proudly Distinguished
          </h2>
          <p className="mt-2 text-[13px] sm:text-[14px] md:text-[15px] text-slate-600 font-medium">
            National recognitions and statutory approvals that validate quality and outcomes.
          </p>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
            <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-transparent" />
            <div className="flex items-center gap-1 text-teal-400">
              <Sparkles className="w-3 h-3" />
              <Sparkles className="w-3 h-3 opacity-70" />
              <Sparkles className="w-3 h-3 opacity-50" />
            </div>
          </div>
        </div>

        <div className="relative mt-6">
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-44 h-44 rounded-full bg-teal-100/50 blur-[60px]" />
          <div className="hidden lg:block pointer-events-none absolute inset-y-6 left-1/2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          
          <div className="relative bg-white/60 backdrop-blur-xl border border-gray-100 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch">
              <div
                className="relative rounded-[1.25rem] bg-white p-5 sm:p-6 md:p-8 transition-all duration-700 ease-out border border-gray-100 shadow-sm hover:-translate-y-[4px] hover:border-teal-100 hover:shadow-xl group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale-100" : "translateY(18px) scale-95",
                  transitionDelay: inView ? "80ms" : "0ms",
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-50 to-transparent rounded-tr-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <h3 className="text-[15px] sm:text-[17px] md:text-[19px] font-black text-slate-900 mb-4 sm:mb-5 flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-teal-50 text-teal-600">
                    <Medal className="w-5 h-5" />
                  </div>
                  National &amp; Industry Recognitions
                </h3>
                
                <ul className="space-y-3 sm:space-y-4 relative z-10">
                  {[
                    { year: "2019", label: "IT Startup Excellence Award" },
                    { year: "2020", label: "Virtual Education & Technology Award" },
                    { year: "2021", label: "Startup & VC Award" },
                  ].map((item, index) => (
                    <li
                      key={item.year}
                      className="group/li flex items-center gap-3 rounded-xl px-3 py-2 -mx-3 transition-colors duration-200 hover:bg-gray-50 border border-transparent hover:border-gray-100"
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(10px)",
                        transitionDelay: inView ? `${140 + index * 80}ms` : "0ms",
                      }}
                    >
                      <span className="inline-flex items-center justify-center min-w-[64px] sm:min-w-[76px] px-2.5 sm:px-3 py-1.5 rounded-full bg-teal-50 text-[11px] sm:text-[13px] font-bold text-teal-700 gap-1.5 shadow-sm group-hover/li:bg-teal-500 group-hover/li:text-white transition-colors">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {item.year}
                      </span>
                      <Medal className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-[13px] sm:text-[15px] text-slate-600 font-semibold leading-snug group-hover/li:text-teal-700 transition-colors">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="relative rounded-[1.25rem] bg-white p-5 sm:p-6 md:p-8 transition-all duration-700 ease-out border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-[4px] hover:border-teal-100 hover:shadow-xl group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale-100" : "translateY(18px) scale-95",
                  transitionDelay: inView ? "140ms" : "0ms",
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-50 to-transparent rounded-tr-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-[15px] sm:text-[17px] md:text-[19px] font-black text-slate-900 mb-4 sm:mb-5 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    Affiliation &amp; Approval
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-2">
                    <div className="group/aff flex items-center justify-between gap-4 p-3 rounded-xl border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-2 sm:p-3 transition-all duration-300 shadow-sm group-hover/aff:shadow-md group-hover/aff:scale-105">
                          <img
                            src="/images/affiliations/MAKAUT-aff.png"
                            alt="MAKAUT Affiliation"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-[14px] sm:text-[16px] font-black text-slate-900">
                            MAKAUT
                          </div>
                          <div className="text-[12px] sm:text-[13px] text-slate-500 font-medium">
                            Affiliation
                          </div>
                        </div>
                      </div>
                      <CheckCircle2
                        className="w-6 h-6 text-emerald-500 transition-transform duration-300 group-hover/aff:scale-110 drop-shadow-sm"
                        style={{
                          opacity: inView ? 1 : 0,
                          transform: inView ? "scale(1)" : "scale(0.8)",
                          transitionDelay: inView ? "220ms" : "0ms",
                        }}
                      />
                    </div>
                    <div className="group/aff flex items-center justify-between gap-4 p-3 rounded-xl border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-2 sm:p-3 transition-all duration-300 shadow-sm group-hover/aff:shadow-md group-hover/aff:scale-105">
                          <img
                            src="/images/affiliations/AICTE-aff.png"
                            alt="AICTE Affiliation"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-[14px] sm:text-[16px] font-black text-slate-900">
                            AICTE
                          </div>
                          <div className="text-[12px] sm:text-[13px] text-slate-500 font-medium">
                            Approval
                          </div>
                        </div>
                      </div>
                      <CheckCircle2
                        className="w-6 h-6 text-emerald-500 transition-transform duration-300 group-hover/aff:scale-110 drop-shadow-sm"
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

            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-[12px] md:text-[13px] text-slate-600 font-semibold">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>AICTE Approved</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>MAKAUT Affiliated</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
                <Medal className="w-4 h-4 text-teal-500" />
                <span>Awarded 2019–2021</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-4 md:pt-5 flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-center">
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-slate-600 font-medium">
            Detailed certificates, approvals and statutory documents are available for review.
          </p>
          <Link
            href="/about/awards"
            className="inline-flex items-center justify-center px-5 py-2.5 text-[13px] sm:text-sm font-bold rounded-full bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            View approvals &amp; documents
          </Link>
        </div>
      </div>
    </section>
  );
}
