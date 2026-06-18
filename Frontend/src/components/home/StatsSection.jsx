"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Building2,
  GraduationCap,
  School,
  Briefcase,
  Award,
  CheckCircle2,
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Users,
    count: 120,
    suffix: "+",
    label: "Faculty",
    description: "Scholars, trainers & domain specialists.",
    hoverBorder: "hover:border-teal-300",
    hoverShadow: "hover:shadow-[0_8px_30px_rgb(20,184,166,0.12)]",
    iconColor: "group-hover:text-teal-600",
  },
  {
    icon: Building2,
    count: 80,
    suffix: "+",
    label: "Industry Collaborations",
    description: "Hospitals, IT, hotels, aviation & corporates.",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-[0_8px_30px_rgb(16,185,129,0.12)]",
    iconColor: "group-hover:text-emerald-600",
  },
  {
    icon: GraduationCap,
    count: 6000,
    suffix: "+",
    label: "Alumni",
    description: "Professionals across industries.",
    hoverBorder: "hover:border-cyan-300",
    hoverShadow: "hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)]",
    iconColor: "group-hover:text-cyan-600",
  },
  {
    icon: School,
    count: 5,
    suffix: "+",
    label: "Centers",
    description: "Skill development & practical learning hubs.",
    hoverBorder: "hover:border-teal-300",
    hoverShadow: "hover:shadow-[0_8px_30px_rgb(20,184,166,0.12)]",
    iconColor: "group-hover:text-teal-600",
  },
  {
    icon: Briefcase,
    count: 300,
    suffix: "+",
    label: "Recruitment Companies",
    description: "Internships, OJT & placements.",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-[0_8px_30px_rgb(16,185,129,0.12)]",
    iconColor: "group-hover:text-emerald-600",
  },
];

export default function StatsSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(mq.matches);
    }
  }, []);

  return (
    <section
      ref={ref}
      className="py-8 sm:py-11 md:py-16 bg-gray-50 border-b border-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative">
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-64 h-64 rounded-full bg-teal-100/50 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-16 left-[-40px] w-64 h-64 bg-emerald-100/50 blur-[80px]" />
          
          <div className="relative grid gap-8 lg:grid-cols-12 items-start">
            <div
              className={`lg:col-span-4 max-w-xl text-left transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] md:text-sm font-bold tracking-wider text-teal-600 uppercase mb-2">
                <Award className="w-4 h-4 text-teal-600" />
                An Illustrious Legacy
              </span>
              <h2 className="text-[24px] sm:text-[26px] md:text-[36px] lg:text-[50px] font-extrabold text-slate-900 leading-tight">
                We Continue <br className="hidden md:block"/> to Build
              </h2>
              <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] md:text-[15px] text-slate-600 font-medium">
                Trusted outcomes backed by industry partnerships and accreditation.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-teal-100 text-[11px] sm:text-[12px] md:text-[13px] text-teal-800 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  <span>Industry-linked</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-teal-100 text-[11px] sm:text-[12px] md:text-[13px] text-teal-800 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  <span>Accredited</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-teal-100 text-[11px] sm:text-[12px] md:text-[13px] text-teal-800 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                  <span>Career-focused</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-6 md:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
                {stats.map((stat, index) => {
                  const colSpanClass = index < 3 ? "md:col-span-2 col-span-2" : "md:col-span-3 col-span-3";
                  const delay = index * 100;
                  const isActive = index === 0;
                  const shouldAnimate = inView && !reduceMotion;

                  return (
                    <div
                      key={index}
                      className={`${colSpanClass} group relative bg-white rounded-[16px] sm:rounded-[18px] border border-gray-100 p-4 sm:p-5 md:p-6 transition-all duration-500 ease-out hover:-translate-y-[4px] shadow-sm ${stat.hoverBorder} ${stat.hoverShadow} ${
                        isActive
                          ? "border-teal-200 ring-1 ring-teal-100 bg-teal-50/30 md:-translate-y-[2px] shadow-md"
                          : ""
                      }`}
                      style={{
                         opacity: inView ? 1 : 0,
                         transform: inView ? "translateY(0)" : "translateY(20px)",
                         transitionDelay: `${delay}ms`,
                      }}
                      role="group"
                      aria-selected={isActive ? true : undefined}
                    >
                      <div className="flex flex-col h-full justify-between relative z-10">
                        <div className="mb-3 sm:mb-4 md:mb-5 flex items-start justify-between gap-3">
                          <div className="flex flex-col gap-2.5">
                            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 text-teal-600 group-hover:rotate-3 group-hover:scale-110 transition-transform duration-300">
                              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <span className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[44px] font-black leading-none text-slate-900 tracking-tight tabular-nums mt-1">
                              {shouldAnimate ? (
                                <CountUp
                                  start={0}
                                  end={stat.count}
                                  duration={2.5}
                                  separator=","
                                  suffix={stat.suffix}
                                />
                              ) : (
                                `${stat.count.toLocaleString()}${stat.suffix}`
                              )}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-[13px] sm:text-[14px] md:text-[16px] font-bold text-slate-800 mb-1">
                            {stat.label}
                          </h3>
                          <p className="text-[11px] sm:text-[12px] md:text-[13px] text-slate-500 leading-[1.5] line-clamp-2 md:line-clamp-1 font-medium">
                            {stat.description}
                          </p>
                          <div className="mt-4 h-[2px] w-1/3 bg-gradient-to-r from-teal-100 to-transparent rounded-full transition-all duration-300 group-hover:w-full group-hover:from-teal-400" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
