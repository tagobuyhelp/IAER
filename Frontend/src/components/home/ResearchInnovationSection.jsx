"use client";

import { useEffect, useState } from "react";
import { BookOpen, Lightbulb, Users, FlaskConical, Monitor, Utensils, Stethoscope, Plane, Rocket, Presentation, Sparkles } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const stats = [
  { value: "100+", label: "Research Publications", icon: BookOpen },
  { value: "Multiple", label: "Patents Filed in Technology & Business", icon: Lightbulb },
  { value: "10+", label: "Industry-collaborated Centres of Excellence", icon: Users },
  { value: "15+", label: "Specialized Labs across IT, Hospitality, Healthcare & Management", icon: FlaskConical },
];

const infrastructure = [
  {
    title: "IT Labs",
    desc: "Data Science, Cyber Security, Cloud Computing, AI",
    icon: Monitor,
    image: "/images/home/Research-Innovation/IT-Labs.webp"
  },
  {
    title: "Hospitality LIVE Kitchen",
    desc: "Advanced Food Production Studio & Training Restaurants",
    icon: Utensils,
    image: "/images/home/Research-Innovation/Hospitality-LIVE-Kitchen.webp"
  },
  {
    title: "Medical Lab Tech",
    desc: "Advanced Diagnostic & Pathology Centres",
    icon: Stethoscope,
    image: "/images/home/Research-Innovation/Medical-Lab-Tech.webp"
  },
  {
    title: "Aviation Simulation",
    desc: "Mock Aircraft Cabins for Crew Training",
    icon: Plane,
    image: "/images/home/Research-Innovation/Aviation-Simulation.webp"
  },
  {
    title: "Startup Launchpad",
    desc: "Incubation Centre & Tech Innovation Labs",
    icon: Rocket,
    image: "/images/home/Research-Innovation/Startup-Launchpad.webp"
  },
  {
    title: "Digital Classrooms",
    desc: "Smart Learning Hubs & Entrepreneurship Centers",
    icon: Presentation,
    image: "/images/home/Research-Innovation/Digital-Classrooms.webp"
  }
];

export default function ResearchInnovationSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: infraRef, inView: infraInView } = useInView({ threshold: 0.15, triggerOnce: true });

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
            "mb-16 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : headerInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Research, Innovation & Future-ready Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Pioneering Research & <br />
              <span className="text-primary">Innovation at IAER</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              From high-impact publications and patents to industry-powered labs, IAER gives students a hands-on environment to experiment, build, and launch ideas that matter.
            </p>
          </div>

          <div className="relative rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 p-6 lg:p-7 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-white/40 via-transparent to-transparent opacity-60" />
            <div className="pointer-events-none absolute -bottom-10 -right-6 w-32 h-32 opacity-70">
              <Image
                src="/images/programs/legacy/BMLT.jpg"
                alt=""
                aria-hidden="true"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary/80">Impact Snapshot</p>
                  <p className="text-sm text-muted-foreground mt-1">Innovation, labs and industry projects under one roof.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-background/70 flex items-center justify-center border border-border/60">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-2xl bg-background/70 border border-border/50 px-3 py-2.5">
                  <p className="text-[11px] text-muted-foreground mb-1">Publications</p>
                  <p className="text-lg font-bold text-foreground">100+</p>
                </div>
                <div className="rounded-2xl bg-background/70 border border-border/50 px-3 py-2.5">
                  <p className="text-[11px] text-muted-foreground mb-1">Centres of Excellence</p>
                  <p className="text-lg font-bold text-foreground">10+</p>
                </div>
                <div className="rounded-2xl bg-background/70 border border-border/50 px-3 py-2.5">
                  <p className="text-[11px] text-muted-foreground mb-1">Specialized Labs</p>
                  <p className="text-lg font-bold text-foreground">15+</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-1">
                <span>Guided by industry mentors & faculty researchers.</span>
                <span className="inline-flex items-center gap-1 text-primary font-medium">
                  Explore labs
                  <Plane className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-border/50 pb-12",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : statsInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center group"
              style={
                reduceMotion
                  ? undefined
                  : {
                      transition: "transform 400ms ease-out, opacity 400ms ease-out",
                      transitionDelay: `${i * 80}ms`,
                    }
              }
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 group-hover:bg-primary/5 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium max-w-[220px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mb-10 text-center",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : infraInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            IAER&apos;s State-of-the-Art Infrastructure Includes
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
            Immersive labs, simulation studios and digital classrooms designed to turn curiosity into real-world projects.
          </p>
        </div>

        <div
          ref={infraRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : infraInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          {infrastructure.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-border/60 hover:shadow-lg hover:border-primary/40 transition-all h-64"
              style={
                reduceMotion
                  ? undefined
                  : {
                      transition: "transform 450ms ease-out, box-shadow 450ms ease-out, border-color 450ms ease-out, opacity 450ms ease-out",
                      transitionDelay: `${index * 70}ms`,
                    }
              }
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/25 backdrop-blur-md rounded-lg border border-white/20">
                    <item.icon className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold">{item.title}</h4>
                </div>
                <p className="text-white/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
