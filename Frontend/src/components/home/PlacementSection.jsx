"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building2, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const placementStats = [
  { value: "3000+", label: "Placement Offers Generated", icon: Users },
  { value: "500+", label: "Companies Participated", icon: Building2 },
  { value: "₹15.75 LPA", label: "Highest Domestic Package", icon: TrendingUp },
  { value: "₹55.65 LPA", label: "Highest International Package", icon: Globe },
];

const packageStats = [
  { amount: "₹15 LPA", count: "30+", label: "Companies" },
  { amount: "₹10 LPA", count: "58+", label: "Companies" },
  { amount: "₹7 LPA", count: "82+", label: "Companies" },
  { amount: "₹5 LPA", count: "100+", label: "Companies" },
];

export default function PlacementSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: packagesRef, inView: packagesInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-teal-100/50 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[-40px] w-80 h-80 bg-emerald-100/40 blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerRef}
          className={cn(
            "flex flex-col lg:flex-row gap-8 sm:gap-12 mb-8 sm:mb-12 md:mb-16 items-stretch",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : headerInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold mb-4 shadow-sm border border-teal-100">
              <Sparkles className="h-4 w-4 sm:h-4 sm:w-4 text-teal-500" />
              <span>Career Outcomes & Global Placements</span>
            </div>
            <span className="text-teal-600 font-black tracking-wider text-[11px] sm:text-[13px] md:text-[14px] uppercase mb-3 block">
              Placements Overview
            </span>
            <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-slate-900 leading-tight">
              The Future’s Leading <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Companies Hire IAER Talent</span>
            </h2>
            <p className="text-[12px] sm:text-sm md:text-base text-slate-600 font-medium mb-6 sm:mb-8 max-w-md">
              From top domestic recruiters to global brands, IAER students step into roles that match their ambition.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 hover:shadow-xl transition-all duration-300 h-11 px-6 text-sm sm:h-12 sm:px-8 sm:text-[15px] font-bold rounded-full hover:-translate-y-1"
              >
                <Link href="https://admission.iaer.ac.in/" target="_blank">
                  ENQUIRE NOW <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 shadow-sm transition-all duration-300 h-11 px-6 text-sm sm:h-12 sm:px-8 sm:text-[15px] font-bold rounded-full bg-white hover:-translate-y-1"
              >
                VIEW PLACEMENTS <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div
              ref={statsRef}
              className={cn(
                "grid grid-cols-2 gap-4 relative",
                reduceMotion
                  ? "opacity-100 translate-y-0"
                  : statsInView
                    ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                    : "opacity-0 translate-y-4"
              )}
            >
              {placementStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white p-5 sm:p-6 rounded-[1.25rem] shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 group"
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          transitionDelay: `${i * 80}ms`,
                        }
                  }
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" aria-hidden="true" />
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 group-hover:text-teal-700 transition-colors">{stat.value}</div>
                  </div>
                  <div className="text-[12px] sm:text-[13px] md:text-sm text-slate-500 font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={packagesRef}
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : packagesInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          {packageStats.map((stat, i) => (
            <div
              key={stat.amount}
              className="text-center p-5 sm:p-6 bg-white rounded-[1.25rem] shadow-sm border border-gray-100 border-t-4 border-t-emerald-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-t-teal-500 transition-all duration-300 group"
              style={
                reduceMotion
                  ? undefined
                  : {
                      transitionDelay: `${i * 80}ms`,
                    }
              }
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{stat.amount}</div>
              <div className="text-[11px] sm:text-xs md:text-sm text-slate-500 mb-3 font-medium">Package Offered by</div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-500 mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.count}</div>
              <div className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
