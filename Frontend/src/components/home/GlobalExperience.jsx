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
    image: "/images/iaer2.jpg",
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Global Collaborations",
    description: "IAER collaborates with prestigious international institutions to promote global learning, research exposure, and academic articulation opportunities.",
    icon: Globe,
    image: "/images/out-2.png",
    color: "bg-indigo-600"
  },
  {
    id: 3,
    title: "Dual-Degree & Twinning Programs",
    description: "Students get access to global pathways, study-abroad modules, and articulation opportunities with partner universities.",
    icon: GraduationCap,
    image: "/images/PGDMLAI.jpg",
    color: "bg-purple-600"
  },
  {
    id: 4,
    title: "Language & Intercultural Learning",
    description: "Specialized language labs support communication skills, cultural understanding, and global adaptability.",
    icon: BookOpen,
    image: "/images/BSCHHA.jpg",
    color: "bg-pink-600"
  },
  {
    id: 5,
    title: "International Research Projects",
    description: "IAER fosters innovation through industry-aligned and international research partnerships in healthcare, IT, management, and hospitality.",
    icon: Microscope,
    image: "/images/BSCDS.jpg",
    color: "bg-teal-600"
  },
  {
    id: 6,
    title: "International Faculty Exposure",
    description: "Students learn from globally experienced faculty members, industry practitioners, and academic leaders.",
    icon: UserCheck,
    image: "/images/out-1.png",
    color: "bg-orange-600"
  },
  {
    id: 7,
    title: "Career Pathways Abroad",
    description: "IAER’s international network gives students access to global internships, cross-border job markets, and international placements.",
    icon: Briefcase,
    image: "/images/nav-5-img.jpg",
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
    <section className="py-20 bg-gradient-to-br from-muted/40 via-background to-background relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[-40px] w-80 h-80 bg-dot-grid opacity-20" />
      <div className="pointer-events-none absolute -top-6 right-[10%] w-24 h-24 opacity-70 hidden md:block">
        
      </div>

      <div
        ref={headerRef}
        className={cn(
          "container mx-auto px-4 mb-12 text-center",
          reduceMotion
            ? "opacity-100 translate-y-0"
            : headerInView
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-4"
        )}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Global Exposure, Culture & Opportunities</span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-4">
          Immerse Yourself in a <br />
          <span className="text-primary">Global Educational Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join a vibrant community of learners and innovators from around the world.
        </p>
      </div>

      <div
        ref={gridRef}
        className={cn(
          "container mx-auto px-4",
          reduceMotion
            ? "opacity-100 translate-y-0"
            : gridInView
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-4"
        )}
      >
        <div className="flex flex-col lg:flex-row h-[600px] gap-2 lg:gap-4 overflow-hidden rounded-2xl">
          {experienceItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-xl",
                activeId === item.id ? "lg:flex-[4] flex-[4]" : "lg:flex-1 flex-1 hover:flex-[1.2]",
                "flex flex-col hover:shadow-lg"
              )}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

              <div
                className={cn(
                  "absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500",
                  activeId === item.id ? "opacity-100 delay-200" : "opacity-0"
                )}
              >
                <div className="bg-primary/10 w-fit p-3 rounded-lg mb-4 backdrop-blur-sm border border-white/10">
                  <item.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/90 text-sm md:text-lg mb-6 max-w-xl">
                  {item.description}
                </p>
                <Button
                  variant="default"
                  className="w-fit bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  VIEW MORE <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  activeId === item.id ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <div className="lg:-rotate-90 whitespace-nowrap">
                  <h3 className="text-base md:text-xl font-bold text-gray-300  tracking-wider uppercase">
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
