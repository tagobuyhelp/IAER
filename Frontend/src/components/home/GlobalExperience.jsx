"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Globe, Users, BookOpen, GraduationCap, Microscope, UserCheck, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const experienceItems = [
  {
    id: 1,
    title: "Multicultural Campus",
    description: "Experience a dynamic campus culture enriched by students from across India and growing international participation.",
    icon: Users,
    image: "/images/home/GlobalExp/Multicultural-Campus.webp",
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Global Collaborations",
    description: "IAER collaborates with prestigious international institutions to promote global learning, research exposure, and academic articulation opportunities.",
    icon: Globe,
    image: "/images/universities/University-of-Suderland.jpeg",
    color: "bg-indigo-600"
  },
  {
    id: 3,
    title: "Dual-Degree & Twinning Programs",
    description: "Students get access to global pathways, study-abroad modules, and articulation opportunities with partner universities.",
    icon: GraduationCap,
    image: "/images/home/GlobalExp/Dual-Degree-Twinning-Programs.webp",
    color: "bg-purple-600"
  },
  {
    id: 4,
    title: "Language & Intercultural Learning",
    description: "Specialized language labs support communication skills, cultural understanding, and global adaptability.",
    icon: BookOpen,
    image: "/images/home/GlobalExp/Language-Intercultural-Learning.webp",
    color: "bg-pink-600"
  },
  {
    id: 5,
    title: "International Research Projects",
    description: "IAER fosters innovation through industry-aligned and international research partnerships in healthcare, IT, management, and hospitality.",
    icon: Microscope,
    image: "/images/home/GlobalExp/International-Research-Projects.webp",
    color: "bg-teal-600"
  },
  {
    id: 6,
    title: "International Faculty Exposure",
    description: "Students learn from globally experienced faculty members, industry practitioners, and academic leaders.",
    icon: UserCheck,
    image: "/images/home/GlobalExp/International-Faculty-Exposure.webp",
    color: "bg-orange-600"
  },
  {
    id: 7,
    title: "Career Pathways Abroad",
    description: "IAER’s international network gives students access to global internships, cross-border job markets, and international placements.",
    icon: Briefcase,
    image: "/images/home/GlobalExp/Career-Pathways-Abroad.webp",
    color: "bg-green-600"
  }
];

export default function GlobalExperience() {
  const [activeId, setActiveId] = useState(1);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-teal-100/50 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[-40px] w-80 h-80 bg-emerald-100/40 blur-[80px]" />

      <div
        ref={headerRef}
        className={cn(
          "container mx-auto px-4 mb-8 sm:mb-10 md:mb-12 text-center relative z-10",
          reduceMotion
            ? "opacity-100 translate-y-0"
            : headerInView
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-4"
        )}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold mb-4 shadow-sm border border-teal-100">
          <Sparkles className="h-4 w-4 sm:h-4 sm:w-4 text-teal-500" />
          <span>Global Exposure, Culture & Opportunities</span>
        </div>
        <h2 className="text-[24px] sm:text-3xl lg:text-5xl font-black uppercase tracking-tight mb-3 sm:mb-4 text-slate-900 leading-tight">
          Immerse Yourself in a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Global Educational Experience</span>
        </h2>
        <p className="text-slate-600 text-[13px] sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
          Join a vibrant community of learners and innovators from around the world.
        </p>
      </div>

      <div
        ref={gridRef}
        className={cn(
          "container mx-auto px-4 relative z-10",
          reduceMotion
            ? "opacity-100 translate-y-0"
            : gridInView
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-4"
        )}
      >
        <div className="flex flex-col lg:flex-row h-[440px] sm:h-[520px] lg:h-[600px] gap-2 lg:gap-4 overflow-hidden rounded-[1.5rem] p-2 bg-white border border-gray-100 shadow-xl">
          {experienceItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-xl",
                activeId === item.id ? "lg:flex-[4] flex-[4] shadow-md" : "lg:flex-1 flex-1 hover:flex-[1.2]",
                "flex flex-col group"
              )}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-slate-900/40 to-slate-900/90" />

              <div
                className={cn(
                  "absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500",
                  activeId === item.id ? "opacity-100 delay-200" : "opacity-0"
                )}
              >
                <div className="bg-white/20 w-fit p-3 sm:p-4 rounded-xl mb-4 sm:mb-5 backdrop-blur-md border border-white/30 shadow-sm">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-md" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight drop-shadow-md">{item.title}</h3>
                <p className="text-white/90 text-[13px] sm:text-[15px] md:text-lg mb-5 sm:mb-8 max-w-xl font-medium leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>
                <Button
                  variant="default"
                  className="w-fit bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 hover:shadow-xl transition-all duration-300 h-10 px-5 text-sm sm:h-12 sm:px-8 sm:text-[15px] font-bold rounded-full"
                >
                  VIEW MORE <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-slate-900/20 group-hover:bg-transparent",
                  activeId === item.id ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <div className="lg:-rotate-90 whitespace-nowrap">
                  <h3 className="text-[13px] sm:text-base md:text-xl font-black text-white/90 tracking-widest uppercase drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
