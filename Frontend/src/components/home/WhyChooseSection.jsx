"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Users, MonitorCheck, UserCircle, Layers, Globe2, Lightbulb, TrendingUp, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const features = [
  {
    id: 1,
    title: "High-Impact Networking Connections",
    description: "IAER connects students with influential industry leaders, hospital administrators, IT specialists, hospitality veterans, aviation professionals, and corporate mentors. Through guest lectures, industrial visits, and expert-led workshops, students build meaningful industry relationships that expand career opportunities.",
    icon: Users,
    image: "/images/placement/Professional_discussion_in_modern_workspace.png"
  },
  {
    id: 2,
    title: "Technology-Driven, Collaborative Learning Ecosystem",
    description: "IAER blends traditional academics with digital tools, simulation labs, smart classrooms, real-time case studies, and hands-on skill training. Students learn through collaborative projects and industry-aligned assignments that mirror real professional settings.",
    icon: MonitorCheck,
    image: "/images/academic/Organised_workspace_with_planning_essentials.png"
  },
  {
    id: 3,
    title: "360° Personal & Professional Development",
    description: "Beyond academics, IAER focuses on shaping confident professionals through leadership development, personality enhancement programs, communication training, corporate grooming sessions, and career mentoring.",
    icon: UserCircle,
    image: "/images/about/Academic_leader_engaging_with_students.png"
  },
  {
    id: 4,
    title: "A Truly Multi-Disciplinary Institution",
    description: "With four specialized schools (Management, IT, Health Science, and Hospitality) IAER offers a diverse academic ecosystem where students learn across disciplines. This multidisciplinary exposure equips them with broader perspectives.",
    icon: Layers,
    image: "/images/research-and-innovation/Collaborative_discussion_in_a_research_lab.png"
  },
  {
    id: 5,
    title: "Strong Global Vision & International Relevance",
    description: "IAER strengthens global readiness through international tie-ups, study tours, cultural exchange programs, and globally updated curricula. Students gain exposure to international standards in management, technology, healthcare, and hospitality.",
    icon: Globe2,
    image: "/images/home/iaer-global-exposure-professional-learning.png"
  },
  {
    id: 6,
    title: "Innovation-Driven Teaching & Industry-Led Skill Development",
    description: "IAER integrates practical learning through labs, workshops, internships, and industry-curated modules. The institution encourages innovation, problem-solving, and entrepreneurship through applied training.",
    icon: Lightbulb,
    image: "/images/research-and-innovation/Students_working_in_advanced_research_lab.png"
  },
  {
    id: 7,
    title: "Career Advancement With 100% Placement Assistance",
    description: "IAER provides structured career mapping, industry internships, certification training, mock interviews, aptitude preparation, and placement assistance. Our strong recruiter network ensures students step confidently into high-potential career paths.",
    icon: TrendingUp,
    image: "/images/placement/mock_interviews.png"
  },
  {
    id: 8,
    title: "A Growing Alumni Network Creating Global Impact",
    description: "With over 5,000+ graduates placed across India and abroad, IAER’s alumni community represents success in hospitality chains, leading hospitals, IT companies, and corporate sectors. Students gain lifelong networking avenues.",
    icon: GraduationCap,
    image: "/images/programs/iaer-global-alumni-network.png"
  }
];

export default function WhyChooseSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(mq.matches);
    }
  }, []);

  const [activeId, setActiveId] = useState(1);
  const activeFeature = features.find(f => f.id === activeId);

  useEffect(() => {
    if (!inView || reduceMotion || isPaused) return;
    const interval = setInterval(() => {
      setActiveId(prev => (prev % features.length) + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [inView, reduceMotion, isPaused]);

  return (
    <section className="py-20 bg-background">
      <div className="container  mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "mb-12 max-w-3xl transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary/80 mb-2">
            Why Choose IAER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">
            A Career-First Learning Experience
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            From industry-linked curricula to global exposure and lifelong networks, IAER is built to move students from classrooms into high-impact careers.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-6 left-0 w-40 bg-dot-grid opacity-30" />
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-56 h-56 rounded-full bg-primary/5 blur-3xl" />

          <div
            className="relative flex flex-col lg:flex-row gap-10 lg:gap-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="lg:w-5/12 relative">
              <div className="hidden lg:block absolute top-0 bottom-0 left-[20px] w-px bg-gradient-to-b from-transparent via-border/80 to-transparent" />
              <div className="space-y-2">
                {features.map((feature, index) => {
                  const isActive = activeId === feature.id;
                  const shouldAnimate = inView && !reduceMotion;

                  return (
                    <div
                      key={feature.id}
                      className={cn(
                        "transition-all duration-300",
                        isActive ? "pb-4" : "pb-2"
                      )}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: shouldAnimate ? `${index * 80}ms` : "0ms",
                      }}
                    >
                      <button
                        onClick={() => setActiveId(feature.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-4 rounded-2xl border border-border/70 bg-background/80 hover:bg-muted/60 text-left group focus:outline-none transition-all duration-300",
                          isActive && "border-primary/40 bg-primary/5 shadow-sm"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative flex items-center">
                            <span
                              className={cn(
                                "inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold transition-colors border border-border/70 bg-background",
                                isActive && "bg-primary text-primary-foreground border-primary/60"
                              )}
                            >
                              {String(feature.id).padStart(2, "0")}
                            </span>
                          </div>
                          <div>
                            <h3
                              className={cn(
                                "text-base md:text-lg font-semibold transition-colors",
                                isActive
                                  ? "text-foreground"
                                  : "text-muted-foreground group-hover:text-foreground"
                              )}
                            >
                              {feature.title}
                            </h3>
                            {feature.id === 1 && (
                              <p className="hidden md:block text-xs text-muted-foreground/80 mt-1">
                                Select to view details
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 transition-transform duration-300",
                            isActive ? "rotate-90 text-primary" : "text-muted-foreground"
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-in-out overflow-hidden",
                          activeId === feature.id
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-3 pr-1 pt-2 lg:hidden">
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                              {feature.description}
                            </p>
                            <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-sm">
                              <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:block lg:w-7/12 relative">
              <div className="relative h-full bg-muted/40 rounded-3xl overflow-hidden border border-border/60 shadow-sm">
                <div className="pointer-events-none absolute -top-10 right-[-40px] w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-[-40px] left-[-40px] w-64 h-64 bg-dot-grid opacity-30" />
                {activeFeature && (
                  <div
                    key={activeFeature.id}
                    className={cn(
                      "relative h-full flex flex-col px-8 py-8 transition-all duration-300",
                      inView && "opacity-100"
                    )}
                    style={{
                      transform:
                        inView && !reduceMotion ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
                    }}
                  >
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                      <activeFeature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {activeFeature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 flex-grow max-w-xl">
                      {activeFeature.description}
                    </p>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg mt-auto group">
                      <Image
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 h-[580px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
