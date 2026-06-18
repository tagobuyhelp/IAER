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
    image: "/images/programs/advanced-certification-in-agentic-ai-overview.webp"
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
    <section className="py-10 sm:py-14 md:py-20 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-teal-100/40 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[-40px] w-80 h-80 bg-emerald-100/30 blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerRef}
          className={cn(
            "mb-8 sm:mb-12 md:mb-16 grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center",
            reduceMotion
              ? "opacity-100 translate-y-0"
              : headerInView
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                : "opacity-0 translate-y-4"
          )}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold mb-4 shadow-sm border border-teal-100">
              <Sparkles className="h-4 w-4 sm:h-4 sm:w-4 text-teal-500" />
              <span>Research, Innovation & Future-ready Infrastructure</span>
            </div>
            <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-slate-900 leading-tight">
              Pioneering Research & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Innovation at IAER</span>
            </h2>
            <p className="text-[12px] sm:text-sm md:text-base text-slate-600 max-w-xl font-medium">
              From high-impact publications and patents to industry-powered labs, IAER gives students a hands-on environment to experiment, build, and launch ideas that matter.
            </p>
          </div>

          <div className="relative rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 bg-white shadow-xl p-5 sm:p-6 lg:p-8 overflow-hidden group">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white/40 to-emerald-50/60 opacity-80" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay">
              <Image
                src="/images/programs/legacy/BMLT.jpg"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="relative flex flex-col gap-5 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-teal-600">Impact Snapshot</p>
                  <p className="text-[12px] sm:text-[13px] text-slate-500 mt-1 font-medium">Innovation, labs and industry projects under one roof.</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-xs">
                <div className="rounded-xl bg-white border border-gray-100 px-3 py-2.5 shadow-sm transition-colors group-hover:border-teal-100">
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mb-1 font-medium">Publications</p>
                  <p className="text-lg sm:text-xl font-black text-slate-900">100+</p>
                </div>
                <div className="rounded-xl bg-white border border-gray-100 px-3 py-2.5 shadow-sm transition-colors group-hover:border-teal-100">
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mb-1 font-medium">Centres of Excellence</p>
                  <p className="text-lg sm:text-xl font-black text-slate-900">10+</p>
                </div>
                <div className="rounded-xl bg-white border border-gray-100 px-3 py-2.5 shadow-sm transition-colors group-hover:border-teal-100">
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mb-1 font-medium">Specialized Labs</p>
                  <p className="text-lg sm:text-xl font-black text-slate-900">15+</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-slate-500 mt-1 font-medium">
                <span>Guided by industry mentors & faculty researchers.</span>
                <span className="inline-flex items-center gap-1.5 text-teal-600 font-bold bg-teal-50 px-2.5 py-1 rounded-full group-hover:bg-teal-100 transition-colors">
                  Explore labs
                  <Plane className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-10 sm:mb-16 md:mb-20 border-b border-gray-100 pb-8 sm:pb-12 md:pb-14",
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
              <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 rounded-[1rem] flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-teal-200 group-hover:bg-teal-50 transition-all duration-300">
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-teal-600 transition-colors group-hover:text-teal-700" aria-hidden="true" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-[12px] sm:text-sm md:text-[15px] text-slate-600 font-semibold max-w-[220px] mx-auto leading-snug">
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
          <h3 className="text-[22px] sm:text-3xl md:text-4xl font-black text-slate-900">
            State-of-the-Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Infrastructure Includes</span>
          </h3>
          <p className="text-[13px] sm:text-base md:text-[17px] text-slate-600 mt-3 max-w-2xl mx-auto font-medium">
            Immersive labs, simulation studios and digital classrooms designed to turn curiosity into real-world projects.
          </p>
        </div>

        <div
          ref={infraRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8",
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
              className="group relative overflow-hidden rounded-[1.25rem] bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-100 transition-all h-56 sm:h-72"
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-sm group-hover:bg-teal-500/80 group-hover:border-teal-400 transition-colors">
                    <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold leading-tight">{item.title}</h4>
                </div>
                <p className="text-white/80 text-[12px] sm:text-[13px] md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
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
