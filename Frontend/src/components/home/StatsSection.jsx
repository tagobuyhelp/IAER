"use client";

import { Users, Building2, GraduationCap, School, Briefcase } from "lucide-react";
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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-11 md:py-10 bg-white border-y border-border/40">
      <div className="container  mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className={`text-left mb-[18px] md:mb-[28px] transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="block text-[13px] md:text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-1 md:mb-2">
            An Illustrious Legacy
          </span>
          <h2 className="text-[26px] md:text-[36px] lg:text-[40px] font-extrabold text-primary leading-tight">
            We Continue to Build
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[12px] md:gap-[18px]">
          {stats.map((stat, index) => {
            // Grid logic: First 3 items span 2 cols (row of 3), Last 2 items span 3 cols (row of 2)
            const colSpanClass = index < 3 ? "md:col-span-2" : "md:col-span-3";
            const delay = index * 100; // 100ms staggered delay
            const isActive = index === 0;
            
            return (
              <div 
                key={index} 
                className={`${colSpanClass} group relative bg-white rounded-[16px] md:rounded-[18px] border border-border/60 p-[16px] md:p-[24px] transition-all duration-500 ease-out hover:-translate-y-[2px] md:hover:-translate-y-[4px] hover:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] ${stat.hoverBorder} ${stat.hoverShadow} ${isActive ? 'border-blue-500/30 ring-1 ring-blue-500/20 bg-blue-50/60 md:-translate-y-[2px]' : ''}`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${delay}ms`
                }}
                role="group"
                aria-selected={isActive ? true : undefined}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="mb-2 md:mb-4 flex items-start justify-between">
                    <span className="text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-none text-foreground tracking-tight tabular-nums">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.count}
                          duration={2.5}
                          separator=","
                          suffix={stat.suffix}
                        />
                      ) : (
                        <span>0{stat.suffix}</span>
                      )}
                    </span>
                    <stat.icon className={`w-5 h-5 text-muted-foreground/40 stroke-[1.5] transition-colors duration-300 ${stat.iconColor} ${isActive ? 'text-blue-600' : ''}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-[14px] md:text-[16px] font-semibold text-foreground/90 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-muted-foreground leading-[1.4] line-clamp-2 md:line-clamp-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className={`mt-8 md:mt-10 text-center md:text-left border-t border-border/40 pt-4 md:pt-6 transition-all duration-700 delay-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            Trusted outcomes backed by industry partnerships and accreditation.
          </p>
        </div>

      </div>
    </section>
  );
}
