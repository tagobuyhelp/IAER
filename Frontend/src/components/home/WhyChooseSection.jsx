"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, Users, MonitorCheck, UserCircle, Layers, Globe2, Lightbulb, TrendingUp, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "High-Impact Networking Connections",
    description: "IAER connects students with influential industry leaders, hospital administrators, IT specialists, hospitality veterans, aviation professionals, and corporate mentors. Through guest lectures, industrial visits, and expert-led workshops, students build meaningful industry relationships that expand career opportunities.",
    icon: Users,
    image: "/images/networking.jpg"
  },
  {
    id: 2,
    title: "Technology-Driven, Collaborative Learning Ecosystem",
    description: "IAER blends traditional academics with digital tools, simulation labs, smart classrooms, real-time case studies, and hands-on skill training. Students learn through collaborative projects and industry-aligned assignments that mirror real professional settings.",
    icon: MonitorCheck,
    image: "/images/tech-learning.jpg"
  },
  {
    id: 3,
    title: "360° Personal & Professional Development",
    description: "Beyond academics, IAER focuses on shaping confident professionals through leadership development, personality enhancement programs, communication training, corporate grooming sessions, and career mentoring.",
    icon: UserCircle,
    image: "/images/development.jpg"
  },
  {
    id: 4,
    title: "A Truly Multi-Disciplinary Institution",
    description: "With four specialized schools (Management, IT, Health Science, and Hospitality) IAER offers a diverse academic ecosystem where students learn across disciplines. This multidisciplinary exposure equips them with broader perspectives.",
    icon: Layers,
    image: "/images/multidisciplinary.jpg"
  },
  {
    id: 5,
    title: "Strong Global Vision & International Relevance",
    description: "IAER strengthens global readiness through international tie-ups, study tours, cultural exchange programs, and globally updated curricula. Students gain exposure to international standards in management, technology, healthcare, and hospitality.",
    icon: Globe2,
    image: "/images/global-vision.jpg"
  },
  {
    id: 6,
    title: "Innovation-Driven Teaching & Industry-Led Skill Development",
    description: "IAER integrates practical learning through labs, workshops, internships, and industry-curated modules. The institution encourages innovation, problem-solving, and entrepreneurship through applied training.",
    icon: Lightbulb,
    image: "/images/innovation.jpg"
  },
  {
    id: 7,
    title: "Career Advancement With 100% Placement Assistance",
    description: "IAER provides structured career mapping, industry internships, certification training, mock interviews, aptitude preparation, and placement assistance. Our strong recruiter network ensures students step confidently into high-potential career paths.",
    icon: TrendingUp,
    image: "/images/career-advancement.jpg"
  },
  {
    id: 8,
    title: "A Growing Alumni Network Creating Global Impact",
    description: "With over 5,000+ graduates placed across India and abroad, IAER’s alumni community represents success in hospitality chains, leading hospitals, IT companies, and corporate sectors. Students gain lifelong networking avenues.",
    icon: GraduationCap,
    image: "/images/alumni.jpg"
  }
];

export default function WhyChooseSection() {
  const [activeId, setActiveId] = useState(1);
  const activeFeature = features.find(f => f.id === activeId);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Should You Choose <br />
            <span className="text-primary">IAER?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Accordion List */}
          <div className="flex-1 space-y-2">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={cn(
                  "border-b border-border transition-all duration-300",
                  activeId === feature.id ? "pb-6" : "pb-4"
                )}
              >
                <button
                  onClick={() => setActiveId(feature.id)}
                  className="w-full flex items-center justify-between py-4 group text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className={cn(
                      "text-2xl font-bold transition-colors",
                      activeId === feature.id ? "text-primary" : "text-muted-foreground/40"
                    )}>
                      {String(feature.id).padStart(2, '0')}
                    </span>
                    <h3 className={cn(
                      "text-xl lg:text-2xl font-semibold transition-colors",
                      activeId === feature.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                    )}>
                      {feature.title}
                    </h3>
                  </div>
                  <ChevronRight className={cn(
                    "h-6 w-6 transition-transform duration-300",
                    activeId === feature.id ? "rotate-90 text-primary" : "text-muted-foreground"
                  )} />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out overflow-hidden",
                    activeId === feature.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pl-14 pr-4 lg:hidden"> {/* Mobile only content */}
                       <p className="text-muted-foreground leading-relaxed mb-4">
                        {feature.description}
                      </p>
                    </div>
                    {/* Desktop: Just expanding space for visual breathing room, content is on right */}
                    <div className="hidden lg:block pl-14">
                      <p className="text-muted-foreground/80 text-sm">
                        Select to view details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Content (Desktop) */}
          <div className="hidden lg:block flex-1 relative h-[600px] bg-muted/20 rounded-2xl overflow-hidden p-8 border border-border/50 sticky top-24">
             {activeFeature && (
               <div className="h-full flex flex-col animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <activeFeature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    {activeFeature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {activeFeature.description}
                  </p>

                  <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg mt-auto">
                    {/* Placeholder for real image */}
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                       <span className="flex items-center gap-2">
                         <activeFeature.icon className="h-6 w-6" /> Image for {activeFeature.id}
                       </span>
                    </div>
                    {/* <Image 
                      src={activeFeature.image} 
                      alt={activeFeature.title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
