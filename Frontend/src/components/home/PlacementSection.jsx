"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building2, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
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
    <section className="py-20 bg-gradient-to-br from-muted/40 via-background to-background relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[-40px] w-80 h-80 bg-dot-grid opacity-20" />

      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={cn(
            "flex flex-col lg:flex-row gap-12 mb-16 items-stretch",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : headerInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Career Outcomes & Global Placements</span>
            </div>
            <span className="text-primary font-bold tracking-wider text-xs md:text-sm uppercase mb-2 block">
              Placements Overview
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              The Future’s Leading <br />
              <span className="text-accent">Companies Hire IAER Talent</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-md">
              From top domestic recruiters to global brands, IAER students step into roles that match their ambition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-lg transition-all duration-300"
              >
                APPLY NOW <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 hover:shadow-md transition-all duration-300"
              >
                VIEW PLACEMENTS <ArrowRight className="ml-2 h-4 w-4" />
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
                  className="bg-card p-6 rounded-xl shadow-sm border border-border/70 hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          transitionDelay: `${i * 80}ms`,
                        }
                  }
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-foreground">{stat.value}</div>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
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
            "grid grid-cols-2 md:grid-cols-4 gap-6",
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
              className="text-center p-6 bg-white rounded-xl shadow-sm border border-border/70 border-t-4 border-accent/80 hover:-translate-y-1 hover:shadow-lg hover:border-accent transition-all duration-300"
              style={
                reduceMotion
                  ? undefined
                  : {
                      transitionDelay: `${i * 80}ms`,
                    }
              }
            >
              <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">{stat.amount}</div>
              <div className="text-xs md:text-sm text-muted-foreground mb-2">Package Offered by</div>
              <div className="text-3xl font-extrabold text-primary mb-1">{stat.count}</div>
              <div className="text-xs md:text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
