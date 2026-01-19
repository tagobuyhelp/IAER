"use client";

import {
  Target,
  ShieldCheck,
  Eye,
  Rocket,
  GraduationCap,
  Users,
  Lightbulb,
  Globe,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  Star,
  Zap,
  BookOpen,
  HeartHandshake,
  Building2,
  ArrowRight,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// SVG Illustration Component for Vision
const VisionSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="140" fill="url(#visionGradient1)" opacity="0.1" />
    
    {/* Eye shape representing vision */}
    <ellipse cx="200" cy="150" rx="80" ry="50" fill="url(#visionGradient2)" opacity="0.2" />
    
    {/* Eye outline */}
    <path
      d="M120 150 Q120 120, 150 120 Q180 120, 200 140 Q220 120, 250 120 Q280 120, 280 150 Q280 180, 250 180 Q220 180, 200 160 Q180 180, 150 180 Q120 180, 120 150 Z"
      stroke="hsl(219, 60%, 22%)"
      strokeWidth="4"
      fill="none"
    />
    
    {/* Pupil */}
    <circle cx="200" cy="150" r="25" fill="hsl(33, 93%, 54%)" />
    <circle cx="200" cy="150" r="15" fill="hsl(219, 60%, 22%)" />
    <circle cx="195" cy="145" r="5" fill="white" opacity="0.8" />
    
    {/* Light rays from eye */}
    <g stroke="hsl(33, 93%, 54%)" strokeWidth="2" opacity="0.4">
      <line x1="200" y1="100" x2="200" y2="50" />
      <line x1="200" y1="200" x2="200" y2="250" />
      <line x1="120" y1="150" x2="50" y2="150" />
      <line x1="280" y1="150" x2="350" y2="150" />
      <line x1="160" y1="120" x2="100" y2="80" />
      <line x1="240" y1="120" x2="300" y2="80" />
      <line x1="160" y1="180" x2="100" y2="220" />
      <line x1="240" y1="180" x2="300" y2="220" />
    </g>
    
    {/* Stars representing global reach */}
    <g opacity="0.6">
      <path
        d="M100 80 L102 85 L107 85 L103 88 L105 93 L100 90 L95 93 L97 88 L93 85 L98 85 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M300 80 L302 85 L307 85 L303 88 L305 93 L300 90 L295 93 L297 88 L293 85 L298 85 Z"
        fill="hsl(205, 81%, 63%)"
      />
      <path
        d="M50 150 L51 153 L54 153 L52 155 L53 158 L50 156 L47 158 L48 155 L46 153 L49 153 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M350 150 L351 153 L354 153 L352 155 L353 158 L350 156 L347 158 L348 155 L346 153 L349 153 Z"
        fill="hsl(205, 81%, 63%)"
      />
    </g>
    
    <defs>
      <linearGradient id="visionGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <radialGradient id="visionGradient2" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </radialGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Mission/Target
const MissionSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="130" fill="url(#missionGradient1)" opacity="0.1" />
    
    {/* Target circles */}
    <circle cx="200" cy="150" r="100" stroke="hsl(219, 60%, 22%)" strokeWidth="3" fill="none" opacity="0.3" />
    <circle cx="200" cy="150" r="70" stroke="hsl(33, 93%, 54%)" strokeWidth="3" fill="none" opacity="0.4" />
    <circle cx="200" cy="150" r="40" stroke="hsl(205, 81%, 63%)" strokeWidth="3" fill="none" opacity="0.5" />
    <circle cx="200" cy="150" r="20" fill="hsl(33, 93%, 54%)" />
    
    {/* Arrow pointing to target */}
    <path
      d="M50 150 L150 150"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M140 140 L150 150 L140 160"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Path/journey lines */}
    <path
      d="M50 150 Q100 100, 150 120 Q200 140, 200 150"
      stroke="hsl(205, 81%, 63%)"
      strokeWidth="2"
      strokeDasharray="5,5"
      fill="none"
      opacity="0.5"
    />
    
    {/* Check marks around target */}
    <g opacity="0.7">
      <path
        d="M200 50 L205 60 L215 50"
        stroke="hsl(33, 93%, 54%)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M200 250 L205 240 L215 250"
        stroke="hsl(33, 93%, 54%)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M350 150 L340 155 L350 160"
        stroke="hsl(205, 81%, 63%)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
    
    {/* Sparkle effects */}
    <circle cx="100" cy="80" r="3" fill="hsl(33, 93%, 54%)" opacity="0.6" />
    <circle cx="300" cy="220" r="3" fill="hsl(205, 81%, 63%)" opacity="0.6" />
    
    <defs>
      <linearGradient id="missionGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Quality/Excellence
const QualitySVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="120" fill="url(#qualityGradient1)" opacity="0.1" />
    
    {/* Shield shape */}
    <path
      d="M200 60 Q250 60, 280 90 Q280 120, 280 150 Q280 200, 200 240 Q120 200, 120 150 Q120 120, 120 90 Q150 60, 200 60 Z"
      fill="url(#qualityGradient2)"
      opacity="0.2"
      stroke="hsl(219, 60%, 22%)"
      strokeWidth="3"
    />
    
    {/* Check marks inside shield */}
    <g stroke="hsl(33, 93%, 54%)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M170 140 L190 160 L230 120" />
      <path d="M170 180 L190 200 L230 160" />
    </g>
    
    {/* Stars around shield */}
    <g opacity="0.6">
      <path
        d="M200 40 L202 45 L207 45 L203 48 L205 53 L200 50 L195 53 L197 48 L193 45 L198 45 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M120 100 L121 103 L124 103 L122 105 L123 108 L120 106 L117 108 L118 105 L116 103 L119 103 Z"
        fill="hsl(205, 81%, 63%)"
      />
      <path
        d="M280 100 L281 103 L284 103 L282 105 L283 108 L280 106 L277 108 L278 105 L276 103 L279 103 Z"
        fill="hsl(205, 81%, 63%)"
      />
      <path
        d="M200 260 L202 265 L207 265 L203 268 L205 273 L200 270 L195 273 L197 268 L193 265 L198 265 Z"
        fill="hsl(33, 93%, 54%)"
      />
    </g>
    
    {/* Decorative circles */}
    <circle cx="100" cy="150" r="15" fill="hsl(33, 93%, 54%)" opacity="0.2" />
    <circle cx="300" cy="150" r="15" fill="hsl(205, 81%, 63%)" opacity="0.2" />
    
    <defs>
      <linearGradient id="qualityGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <linearGradient id="qualityGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(205, 81%, 63%)" />
        <stop offset="50%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(219, 60%, 22%)" />
      </linearGradient>
    </defs>
  </svg>
);

// Animated list item component
function AnimatedListItem({ children, index, delay = 0, icon: Icon }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      ref={ref}
      className={cn(
        "flex gap-4 items-start group p-4 rounded-xl transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-accent/5 hover:to-primary/5 hover:shadow-md",
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
      style={{
        transitionDelay: `${delay + index * 80}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 transition-all duration-300",
          isHovered && "scale-110 rotate-3"
        )}
      >
        {Icon && (
          <Icon
            className={cn(
              "w-5 h-5 text-accent transition-all duration-300",
              isHovered && "text-primary"
            )}
            aria-hidden="true"
          />
        )}
        {!Icon && (
          <span
            className={cn(
              "mt-1 h-2 w-2 rounded-full bg-accent transition-all duration-300",
              isHovered && "scale-125 bg-primary"
            )}
          />
        )}
      </div>
      <span className={cn("text-sm text-gray-700 leading-relaxed group-hover:text-[#100902] transition-colors", isHovered && "font-medium")}>
        {children}
      </span>
    </li>
  );
}

// Section card component
function SectionCard({ icon: Icon, title, items, delay = 0, svg: SvgComponent, description }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50/50 p-6 lg:p-8 space-y-6 transition-all duration-500",
        "hover:shadow-xl hover:border-accent/60 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 transition-all duration-300",
            isHovered && "scale-110 rotate-3 shadow-lg"
          )}
        >
          <Icon
            className={cn(
              "w-7 h-7 text-accent transition-all duration-300",
              isHovered && "text-primary scale-110"
            )}
            aria-hidden="true"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#100902] group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      {description && (
        <p className="text-base text-gray-700 leading-relaxed">{description}</p>
      )}

      {SvgComponent && (
        <div className="relative h-40 w-full rounded-xl overflow-hidden bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 flex items-center justify-center">
          <SvgComponent className="w-full h-full" />
        </div>
      )}

      {items && items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <AnimatedListItem key={item.text} icon={item.icon} index={index} delay={delay + 200}>
              {item.text}
            </AnimatedListItem>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function VisionMissionSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const missionItems = [
    {
      text: "To provide a student-centric learning ecosystem supported by modern infrastructure, industry-experienced faculty, and an enabling academic environment that nurtures intellectual growth and professional competence.",
      icon: GraduationCap,
    },
    {
      text: "To offer industry-aligned undergraduate and skill-based programs that respond to evolving national priorities, global trends, and workforce requirements.",
      icon: TrendingUp,
    },
    {
      text: "To design and continuously upgrade curricula that integrate practical exposure, experiential learning, technology adoption, and ethical values, ensuring career readiness and lifelong learning.",
      icon: BookOpen,
    },
    {
      text: "To enhance student success through mentorship, internships, professional training, industry interaction, and personality development initiatives, creating confident and capable graduates.",
      icon: Users,
    },
    {
      text: "To implement a transparent, fair, and outcome-oriented evaluation system that upholds academic integrity and accurately measures student learning.",
      icon: Award,
    },
    {
      text: "To build strong collaborations with industries, professional bodies, academic institutions, and global partners for academic enrichment, research, internships, and placements.",
      icon: Building2,
    },
    {
      text: "To actively contribute to society through Institutional Social Responsibility (ISR) initiatives focused on education, healthcare awareness, skill development, community upliftment, and environmental sustainability.",
      icon: HeartHandshake,
    },
  ];

  const qualityItems = [
    {
      text: "IAER is committed to delivering consistent academic and administrative excellence through structured governance, ethical practices, and technology-enabled management systems.",
      icon: ShieldCheck,
    },
    {
      text: "Academic quality is ensured through regular curriculum review, faculty development, industry participation, and experiential teaching-learning methodologies aligned with global standards.",
      icon: CheckCircle2,
    },
    {
      text: "The institute emphasises the development of critical thinking, creativity, communication skills, and professional ethics, preparing students to perform effectively in diverse professional environments.",
      icon: Lightbulb,
    },
    {
      text: "IAER supports the continuous growth and welfare of faculty and staff by promoting professional development, research engagement, and a collaborative work culture.",
      icon: Zap,
    },
    {
      text: "A culture of continuous improvement, accountability, and student satisfaction drives all institutional processes and outcomes.",
      icon: Star,
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <RevealOnScroll className="text-center mb-12 lg:mb-16">
          <div
            ref={headerRef}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6 transition-all duration-500",
              headerInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <Eye className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wide uppercase text-primary">
              Our Foundation
            </span>
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-[#100902] mb-6",
              "bg-gradient-to-r from-[#100902] via-primary to-[#100902] bg-clip-text",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.2s" }}
          >
            Vision, Mission &amp; Quality Policy
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.4s" }}
          >
            Our commitment to excellence, innovation, and student success drives everything we do
            at IAER.
          </p>
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Vision & Mission Column */}
          <div className="space-y-6">
            {/* Vision Card */}
            <RevealOnScroll delay={100}>
              <div
                className={cn(
                  "rounded-2xl border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5 p-6 lg:p-8 space-y-6 transition-all duration-500",
                  "hover:shadow-xl hover:border-accent/60 hover:-translate-y-1"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <Eye className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#100902]">Vision</h2>
                </div>
                <div className="relative h-40 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 flex items-center justify-center">
                  <VisionSVG className="w-full h-full" />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  To emerge as a nationally and globally respected institution of higher learning that
                  fosters academic excellence, research-driven innovation, employability, and
                  entrepreneurship, while developing responsible professionals committed to societal
                  progress and sustainable development.
                </p>
              </div>
            </RevealOnScroll>

            {/* Mission Card */}
            <SectionCard
              icon={Target}
              title="Mission"
              items={missionItems}
              delay={200}
              svg={MissionSVG}
            />
          </div>

          {/* Quality Policy Column */}
          <div className="space-y-6">
            <SectionCard
              icon={ShieldCheck}
              title="Quality Policy"
              items={qualityItems}
              delay={300}
              svg={QualitySVG}
            />

            {/* Inspirational Quote Card */}
            <RevealOnScroll delay={400}>
              <div className="rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 lg:p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <Sparkles className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">Our Promise</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-95 mb-4">
                  &quot;We are committed to creating an environment where every student can achieve
                  their full potential, guided by excellence, innovation, and ethical values.&quot;
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-white/20">
                  <ArrowRight className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-xs opacity-90">Building Tomorrow&apos;s Leaders</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Values Card */}
            <RevealOnScroll delay={500}>
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-accent/20 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                    <Star className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#100902]">Core Values</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Excellence", icon: Award },
                    { label: "Innovation", icon: Lightbulb },
                    { label: "Integrity", icon: ShieldCheck },
                    { label: "Growth", icon: TrendingUp },
                  ].map((value, index) => {
                    const { ref, inView } = useInView({
                      threshold: 0.2,
                      triggerOnce: true,
                    });
                    return (
                      <div
                        key={value.label}
                        ref={ref}
                        className={cn(
                          "flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-200 transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-accent/5 hover:to-primary/5 hover:border-accent/40 hover:shadow-md",
                          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <value.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                        <span className="text-xs font-semibold text-gray-700">{value.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
