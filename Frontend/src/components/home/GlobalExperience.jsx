"use client";

import { useState } from "react";
import { ArrowRight, Globe, Users, BookOpen, GraduationCap, Microscope, UserCheck, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const experienceItems = [
  {
    id: 1,
    title: "Multicultural Campus",
    description: "Experience a dynamic campus culture enriched by students from across India and growing international participation.",
    icon: Users,
    image: "/images/campus-life.jpg", // Placeholder
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Global Collaborations",
    description: "IAER collaborates with prestigious international institutions to promote global learning, research exposure, and academic articulation opportunities.",
    icon: Globe,
    image: "/images/collaboration.jpg", // Placeholder
    color: "bg-indigo-600"
  },
  {
    id: 3,
    title: "Dual-Degree & Twinning Programs",
    description: "Students get access to global pathways, study-abroad modules, and articulation opportunities with partner universities.",
    icon: GraduationCap,
    image: "/images/dual-degree.jpg", // Placeholder
    color: "bg-purple-600"
  },
  {
    id: 4,
    title: "Language & Intercultural Learning",
    description: "Specialized language labs support communication skills, cultural understanding, and global adaptability.",
    icon: BookOpen,
    image: "/images/language-lab.jpg", // Placeholder
    color: "bg-pink-600"
  },
  {
    id: 5,
    title: "International Research Projects",
    description: "IAER fosters innovation through industry-aligned and international research partnerships in healthcare, IT, management, and hospitality.",
    icon: Microscope,
    image: "/images/research.jpg", // Placeholder
    color: "bg-teal-600"
  },
  {
    id: 6,
    title: "International Faculty Exposure",
    description: "Students learn from globally experienced faculty members, industry practitioners, and academic leaders.",
    icon: UserCheck,
    image: "/images/faculty.jpg", // Placeholder
    color: "bg-orange-600"
  },
  {
    id: 7,
    title: "Career Pathways Abroad",
    description: "IAER’s international network gives students access to global internships, cross-border job markets, and international placements.",
    icon: Briefcase,
    image: "/images/career.jpg", // Placeholder
    color: "bg-green-600"
  }
];

export default function GlobalExperience() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-4">
          Immerse Yourself in a <br />
          <span className="text-primary">Global Educational Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join a vibrant community of learners and innovators from around the world.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row h-[600px] gap-2 lg:gap-4 overflow-hidden rounded-2xl">
          {experienceItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-xl",
                activeId === item.id ? "lg:flex-[4] flex-[4]" : "lg:flex-1 flex-1 hover:flex-[1.2]",
                "flex flex-col"
              )}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
            >
              {/* Background Image/Color Overlay */}
              <div className={cn("absolute inset-0 opacity-20", item.color)} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              
              {/* Active Content */}
              <div className={cn(
                "absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-500",
                activeId === item.id ? "opacity-100 delay-200" : "opacity-0"
              )}>
                <div className="bg-primary/10 w-fit p-3 rounded-lg mb-4 backdrop-blur-sm">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/90 text-lg mb-6 max-w-xl">
                  {item.description}
                </p>
                <Button variant="default" className="w-fit">
                  VIEW MORE <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Inactive Vertical Label (Desktop) */}
              <div className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                activeId === item.id ? "opacity-0 pointer-events-none" : "opacity-100"
              )}>
                <div className="lg:-rotate-90 whitespace-nowrap">
                   <h3 className="text-xl font-bold text-foreground/80 lg:text-foreground/60 tracking-wider uppercase">
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
