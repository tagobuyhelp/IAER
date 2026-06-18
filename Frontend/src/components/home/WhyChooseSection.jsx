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
    image: "/images/home/why-choose/High-Impact-Networking-Connections.JPG"
  },
  {
    id: 2,
    title: "Technology-Driven, Collaborative Learning Ecosystem",
    description: "IAER blends traditional academics with digital tools, simulation labs, smart classrooms, real-time case studies, and hands-on skill training. Students learn through collaborative projects and industry-aligned assignments that mirror real professional settings.",
    icon: MonitorCheck,
    image: "/images/home/why-choose/Technology-Driven-Collaborative-Learning-Ecosystem.JPG"
  },
  {
    id: 3,
    title: "360° Personal & Professional Development",
    description: "Beyond academics, IAER focuses on shaping confident professionals through leadership development, personality enhancement programs, communication training, corporate grooming sessions, and career mentoring.",
    icon: UserCircle,
    image: "/images/home/why-choose/360-Personal-Professional-Development.JPG"
  },
  {
    id: 4,
    title: "A Truly Multi-Disciplinary Institution",
    description: "With four specialized schools (Management, IT, Health Science, and Hospitality) IAER offers a diverse academic ecosystem where students learn across disciplines. This multidisciplinary exposure equips them with broader perspectives.",
    icon: Layers,
    image: "/images/home/why-choose/A-Truly-Multi-Disciplinary-Institution.JPG"
  },
  {
    id: 5,
    title: "Strong Global Vision & International Relevance",
    description: "IAER strengthens global readiness through international tie-ups, study tours, cultural exchange programs, and globally updated curricula. Students gain exposure to international standards in management, technology, healthcare, and hospitality.",
    icon: Globe2,
    image: "/images/home/why-choose/Strong-Global-Vision-International-Relevance.jpeg"
  },
  {
    id: 6,
    title: "Innovation-Driven Teaching & Industry-Led Skill Development",
    description: "IAER integrates practical learning through labs, workshops, internships, and industry-curated modules. The institution encourages innovation, problem-solving, and entrepreneurship through applied training.",
    icon: Lightbulb,
    image: "/images/home/why-choose/Innovation-Driven-Teaching-Industry-Led-Skill-Development.JPG"
  },
  {
    id: 7,
    title: "Career Advancement With 100% Placement Assistance",
    description: "IAER provides structured career mapping, industry internships, certification training, mock interviews, aptitude preparation, and placement assistance. Our strong recruiter network ensures students step confidently into high-potential career paths.",
    icon: TrendingUp,
    image: "/images/home/why-choose/Career-Advancement-With-100-Placement-Assistance.JPG"
  },
  {
    id: 8,
    title: "A Growing Alumni Network Creating Global Impact",
    description: "With over 5,000+ graduates placed across India and abroad, IAER’s alumni community represents success in hospitality chains, leading hospitals, IT companies, and corporate sectors. Students gain lifelong networking avenues.",
    icon: GraduationCap,
    image: "/images/home/why-choose/A-Growing-Alumni-Network-Creating-Global-Impact.png"
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
    }, 4000);
    return () => clearInterval(interval);
  }, [inView, reduceMotion, isPaused]);

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "mb-6 sm:mb-10 md:mb-12 max-w-3xl transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-[10px] sm:text-sm font-bold tracking-[0.18em] uppercase text-teal-600 mb-2">
            Why Choose IAER
          </p>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 text-slate-900 leading-tight">
            A Career-First <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Learning Experience</span>
          </h2>
          <p className="text-[12px] sm:text-sm md:text-base text-slate-600 max-w-2xl font-medium">
            From industry-linked curricula to global exposure and lifelong networks, IAER is built to move students from classrooms into high-impact careers.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-56 h-56 rounded-full bg-teal-100/50 blur-[80px]" />
          <div className="pointer-events-none absolute bottom-[-40px] left-[-40px] w-64 h-64 bg-emerald-100/40 blur-[80px]" />

          <div
            className="relative flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="lg:w-5/12 relative z-10">
              <div className="hidden lg:block absolute top-0 bottom-0 left-[20px] w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              <div className="space-y-3">
                {features.map((feature, index) => {
                  const isActive = activeId === feature.id;
                  const shouldAnimate = inView && !reduceMotion;

                  return (
                    <div
                      key={feature.id}
                      className={cn(
                        "transition-all duration-300 relative",
                        isActive ? "pb-2" : "pb-0"
                      )}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: shouldAnimate ? `${index * 60}ms` : "0ms",
                      }}
                    >
                      <button
                        onClick={() => setActiveId(feature.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-3 sm:py-4 rounded-[1.25rem] border text-left group focus:outline-none transition-all duration-300",
                          isActive 
                            ? "border-teal-200 bg-white shadow-md shadow-teal-100/50 scale-[1.02] z-10 relative ring-1 ring-teal-100" 
                            : "border-gray-100 bg-white/50 hover:bg-white hover:border-teal-100 hover:shadow-sm"
                        )}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="relative flex items-center">
                            <span
                              className={cn(
                                "inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-[12px] sm:text-sm font-bold transition-colors border shadow-sm",
                                isActive 
                                  ? "bg-teal-50 text-teal-600 border-teal-100" 
                                  : "bg-white text-slate-400 border-gray-100 group-hover:text-teal-500"
                              )}
                            >
                              {String(feature.id).padStart(2, "0")}
                            </span>
                          </div>
                          <div>
                            <h3
                              className={cn(
                                "text-[13px] sm:text-base md:text-[17px] font-bold transition-colors leading-tight",
                                isActive
                                  ? "text-slate-900"
                                  : "text-slate-600 group-hover:text-teal-700"
                              )}
                            >
                              {feature.title}
                            </h3>
                            {feature.id === 1 && (
                              <p className={cn(
                                "hidden md:block text-[11px] mt-1 transition-colors",
                                isActive ? "text-teal-600/70" : "text-slate-400"
                              )}>
                                Select to view details
                              </p>
                            )}
                          </div>
                        </div>
                        <div className={cn(
                          "flex items-center justify-center w-6 h-6 rounded-full transition-colors shrink-0",
                          isActive ? "bg-teal-50 text-teal-600" : "bg-transparent text-gray-300 group-hover:text-teal-400"
                        )}>
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform duration-300",
                              isActive ? "rotate-90" : ""
                            )}
                          />
                        </div>
                      </button>

                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-in-out overflow-hidden relative z-0",
                          activeId === feature.id
                            ? "grid-rows-[1fr] opacity-100 mt-2"
                            : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-3 pr-1 pb-2 lg:hidden">
                            <p className="text-[13px] text-slate-600 font-medium leading-relaxed mb-4">
                              {feature.description}
                            </p>
                            <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden shadow-md border border-gray-100">
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

            <div className="hidden lg:block lg:w-7/12 relative z-10">
              <div className="relative h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-xl">
                {activeFeature && (
                  <div
                    key={activeFeature.id}
                    className={cn(
                      "relative h-full flex flex-col p-8 lg:p-10 transition-all duration-500",
                      inView && "opacity-100"
                    )}
                    style={{
                      transform: inView && !reduceMotion ? "translateY(0) scale(1)" : "translateY(12px) scale(0.98)",
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-tr-[2rem] opacity-50 pointer-events-none" />
                    
                    <div className="bg-teal-50 border border-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <activeFeature.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-black mb-4 text-slate-900 leading-tight">
                      {activeFeature.title}
                    </h3>
                    
                    <p className="text-[15px] lg:text-[17px] text-slate-600 font-medium leading-relaxed mb-8 flex-grow max-w-xl">
                      {activeFeature.description}
                    </p>
                    
                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-lg mt-auto group border border-gray-100/50">
                      <Image
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 h-[580px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
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
