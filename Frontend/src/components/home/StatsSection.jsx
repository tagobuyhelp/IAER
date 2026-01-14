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
    hoverBorder: "hover:border-blue-500/30",
    hoverShadow: "hover:shadow-blue-500/10",
    iconColor: "group-hover:text-blue-600",
  },
  {
    icon: Building2,
    count: 80,
    suffix: "+",
    label: "Industry Collaborations",
    description: "Hospitals, IT, hotels, aviation & corporates.",
    hoverBorder: "hover:border-indigo-500/30",
    hoverShadow: "hover:shadow-indigo-500/10",
    iconColor: "group-hover:text-indigo-600",
  },
  {
    icon: GraduationCap,
    count: 6000,
    suffix: "+",
    label: "Alumni",
    description: "Professionals across industries.",
    hoverBorder: "hover:border-orange-500/30",
    hoverShadow: "hover:shadow-orange-500/10",
    iconColor: "group-hover:text-orange-600",
  },
  {
    icon: School,
    count: 5,
    suffix: "+",
    label: "Centers",
    description: "Skill development & practical learning hubs.",
    hoverBorder: "hover:border-emerald-500/30",
    hoverShadow: "hover:shadow-emerald-500/10",
    iconColor: "group-hover:text-emerald-600",
  },
  {
    icon: Briefcase,
    count: 300,
    suffix: "+",
    label: "Recruitment Companies",
    description: "Internships, OJT & placements.",
    hoverBorder: "hover:border-cyan-500/30",
    hoverShadow: "hover:shadow-cyan-500/10",
    iconColor: "group-hover:text-cyan-600",
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
      className="py-11 md:py-16 bg-gradient-to-br from-muted/70 via-muted/60 to-background border-y border-border/40"
    >
      <div className="container  mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-[-40px] w-64 h-64 bg-dot-grid opacity-40" />
          <div className="relative grid gap-8 lg:grid-cols-12 items-start">
            <div
              className={`lg:col-span-4 max-w-xl text-left transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2 text-[13px] md:text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                <Award className="w-4 h-4 text-accent" />
                An Illustrious Legacy
              </span>
              <h2 className="text-[26px] md:text-[36px] lg:text-[50px] font-extrabold text-primary leading-tight">
                We Continue to Build
              </h2>
              <p className="mt-3 text-[14px] md:text-[15px] text-muted-foreground">
                Trusted outcomes backed by industry partnerships and accreditation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/70 border border-border/60 text-[12px] md:text-[13px] text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Industry-linked</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/70 border border-border/60 text-[12px] md:text-[13px] text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Accredited</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/70 border border-border/60 text-[12px] md:text-[13px] text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Career-focused</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-[12px] md:gap-[18px]">
                {stats.map((stat, index) => {
                  const colSpanClass = index < 3 ? "md:col-span-2" : "md:col-span-3";
                  const delay = index * 100;
                  const isActive = index === 0;
                  const shouldAnimate = inView && !reduceMotion;

                  return (
                    <div
                      key={index}
                      className={`${colSpanClass} group relative bg-card rounded-[18px] border border-border/60 p-[16px] md:p-[22px] transition-all duration-500 ease-out hover:-translate-y-[3px] md:hover:-translate-y-[4px] hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] ${stat.hoverBorder} ${stat.hoverShadow} ${
                        isActive
                          ? "border-blue-500/30 ring-1 ring-blue-500/20 bg-blue-50/70 md:-translate-y-[2px]"
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
                      <div className="flex flex-col h-full justify-between">
                        <div className="mb-3 md:mb-4 flex items-start justify-between gap-3">
                          <div className="flex flex-col gap-2">
                            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/5 text-primary group-hover:rotate-1 transition-transform duration-200">
                              <stat.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-none text-foreground tracking-tight tabular-nums">
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
                          <h3 className="text-[14px] md:text-[16px] font-semibold text-foreground/90 mb-1">
                            {stat.label}
                          </h3>
                          <p className="text-[13px] md:text-[14px] text-muted-foreground leading-[1.4] line-clamp-2 md:line-clamp-1">
                            {stat.description}
                          </p>
                          <div className="mt-3 h-[2px] w-2/3 bg-gradient-to-r from-accent/70 to-transparent rounded-full transition-all duration-300 group-hover:w-full" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`mt-6 flex justify-center md:justify-end transition-all duration-700 ease-out ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/60 shadow-sm text-xs md:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Trusted outcomes backed by industry partnerships and accreditation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
