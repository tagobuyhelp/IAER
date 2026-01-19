"use client";

import {
  Award,
  Trophy,
  Star,
  Sparkles,
  Rocket,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  Zap,
  Target,
  Crown,
  Medal,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// SVG Illustration Component for Achievement/Trophy
const TrophySVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="120" fill="url(#trophyGradient1)" opacity="0.1" />
    
    {/* Trophy base */}
    <rect x="160" y="200" width="80" height="20" rx="4" fill="url(#trophyGradient2)" />
    
    {/* Trophy cup */}
    <path
      d="M140 200 L140 120 Q140 100, 160 100 L240 100 Q260 100, 260 120 L260 200"
      fill="url(#trophyGradient2)"
      opacity="0.9"
    />
    
    {/* Trophy handles */}
    <path
      d="M140 140 Q120 140, 120 160 Q120 180, 140 180"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M260 140 Q280 140, 280 160 Q280 180, 260 180"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
    />
    
    {/* Star on trophy */}
    <path
      d="M200 130 L205 145 L220 145 L208 155 L213 170 L200 160 L187 170 L192 155 L180 145 L195 145 Z"
      fill="hsl(33, 93%, 54%)"
      opacity="0.9"
    />
    
    {/* Sparkle effects */}
    <g opacity="0.6">
      <circle cx="120" cy="80" r="4" fill="hsl(33, 93%, 54%)" />
      <circle cx="280" cy="80" r="4" fill="hsl(205, 81%, 63%)" />
      <circle cx="200" cy="60" r="3" fill="hsl(33, 93%, 54%)" />
      <path d="M120 80 L122 75 L120 70 L118 75 Z" fill="hsl(33, 93%, 54%)" />
      <path d="M280 80 L282 75 L280 70 L278 75 Z" fill="hsl(205, 81%, 63%)" />
    </g>
    
    <defs>
      <linearGradient id="trophyGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <linearGradient id="trophyGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Excellence/Star
const ExcellenceSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Central star */}
    <path
      d="M200 100 L210 140 L250 140 L220 165 L230 205 L200 180 L170 205 L180 165 L150 140 L190 140 Z"
      fill="url(#starGradient)"
      opacity="0.9"
    />
    
    {/* Smaller stars around */}
    <path
      d="M100 80 L103 90 L113 90 L105 97 L108 107 L100 100 L92 107 L95 97 L87 90 L97 90 Z"
      fill="hsl(33, 93%, 54%)"
      opacity="0.7"
    />
    <path
      d="M300 80 L303 90 L313 90 L305 97 L308 107 L300 100 L292 107 L295 97 L287 90 L297 90 Z"
      fill="hsl(205, 81%, 63%)"
      opacity="0.7"
    />
    <path
      d="M200 220 L203 230 L213 230 L205 237 L208 247 L200 240 L192 247 L195 237 L187 230 L197 230 Z"
      fill="hsl(33, 93%, 54%)"
      opacity="0.6"
    />
    
    {/* Sparkle trails */}
    <g opacity="0.5">
      <circle cx="120" cy="60" r="2" fill="hsl(33, 93%, 54%)" />
      <circle cx="280" cy="60" r="2" fill="hsl(205, 81%, 63%)" />
      <circle cx="150" cy="200" r="2" fill="hsl(33, 93%, 54%)" />
      <circle cx="250" cy="200" r="2" fill="hsl(205, 81%, 63%)" />
    </g>
    
    {/* Background glow */}
    <circle cx="200" cy="150" r="100" fill="url(#starGlow)" opacity="0.1" />
    
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="50%" stopColor="hsl(205, 81%, 63%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <radialGradient id="starGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </radialGradient>
    </defs>
  </svg>
);

// Animated Award Card Component
function AwardCard({ award, index, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  // Map award titles to appropriate icons
  const getIcon = (title) => {
    if (title.includes("Startup") || title.includes("VC")) return Rocket;
    if (title.includes("Virtual") || title.includes("Technology")) return Zap;
    if (title.includes("Knowledge") || title.includes("Review")) return GraduationCap;
    return Trophy;
  };

  const Icon = getIcon(award.title);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50/50 p-6 flex flex-col h-full transition-all duration-500",
        "hover:-translate-y-2 hover:shadow-xl hover:border-accent/60 hover:bg-gradient-to-br hover:from-accent/5 hover:to-primary/5",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 transition-all duration-300",
            isHovered && "scale-110 rotate-6 shadow-lg"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6 text-accent transition-all duration-300",
              isHovered && "text-primary scale-110"
            )}
            aria-hidden="true"
          />
        </div>
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-300",
            isHovered
              ? "bg-primary text-white shadow-md"
              : "bg-gray-100 text-gray-600"
          )}
        >
          {award.year}
        </span>
      </div>
      <h3
        className={cn(
          "text-base font-bold text-[#100902] mb-2 transition-colors duration-300",
          isHovered && "text-primary"
        )}
      >
        {award.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{award.description}</p>
      
      {/* Decorative element */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-accent" aria-hidden="true" />
          <span className="text-xs text-gray-500 font-medium">Excellence Recognised</span>
        </div>
      </div>
    </div>
  );
}

// Animated Award Badge Component
function AwardBadge({ award, index, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-16 sm:h-20 w-40 sm:w-48 rounded-xl bg-white border-2 border-gray-200 shadow-md overflow-hidden transition-all duration-500",
        "hover:scale-110 hover:shadow-xl hover:border-accent/60 hover:-rotate-1",
        inView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-3"
      )}
      style={{
        transitionDelay: `${delay + index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
      <Image
        src={award.src}
        alt={award.alt}
        fill
        className={cn(
          "object-contain p-3 transition-transform duration-300",
          isHovered && "scale-105"
        )}
        sizes="(min-width:1024px) 192px, 40vw"
      />
    </div>
  );
}

export default function AwardsSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const awardBadges = [
    { src: "/images/award-1.png", alt: "IAER award and recognition graphic 1" },
    { src: "/images/award-2.png", alt: "IAER award and recognition graphic 2" },
    { src: "/images/award-3.png", alt: "IAER award and recognition graphic 3" },
  ];

  const awards = [
    {
      year: "2019",
      title: "IT Startup Excellence Awards",
      description:
        "Honoured for integrating technology, innovation, and startup culture into higher education.",
    },
    {
      year: "2020",
      title: "Virtual Education and Technology Awards",
      description:
        "Recognised for pioneering use of virtual platforms and blended learning methodologies.",
    },
    {
      year: "2021",
      title: "Startup and VC Award for Excellence",
      description:
        "Acknowledged for promoting entrepreneurial thinking, incubation support, and industry linkages.",
    },
    {
      year: "2023",
      title: "Knowledge Review and Dataworld Recognition",
      description:
        "Featured among emerging institutions focused on skill-based, employability-driven education.",
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <RevealOnScroll className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div
            ref={headerRef}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 mb-6 transition-all duration-500",
              headerInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <Trophy className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wide uppercase text-accent">
              Awards &amp; Rankings
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
            Recognised for Excellence and Innovation
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg text-gray-700 leading-relaxed",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.4s" }}
          >
            IAER has been acknowledged by various platforms for its efforts in skill-based
            learning, technology-enabled education, and industry-focused outcomes. These
            recognitions reflect the institute&apos;s consistent work towards employability,
            entrepreneurship, and student success.
          </p>
        </RevealOnScroll>

        {/* Award Badges Section */}
        <RevealOnScroll delay={100}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {awardBadges.map((award, index) => (
              <AwardBadge key={award.src} award={award} index={index} delay={200} />
            ))}
          </div>
        </RevealOnScroll>

        {/* Awards Grid Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <AwardCard key={award.year} award={award} index={index} delay={300} />
          ))}
        </div>

        {/* Bottom Decorative Section */}
        <RevealOnScroll delay={600}>
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            {/* Left: SVG Illustration */}
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-primary/10 overflow-hidden flex items-center justify-center p-8">
              <TrophySVG className="w-full h-full" />
            </div>

            {/* Right: Stats/Info Card */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 text-white shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <Crown className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">Excellence Across Years</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-95 mb-6">
                  Our consistent recognition reflects our commitment to innovation, student success,
                  and industry-aligned education.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">4+</div>
                    <div className="text-xs opacity-90">Major Awards</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">5+</div>
                    <div className="text-xs opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-accent/20 p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                    <Medal className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#100902] mb-2">Continuous Recognition</h4>
                    <p className="text-sm text-gray-600">
                      From startup excellence to educational innovation, IAER&apos;s achievements
                      span multiple domains, showcasing our holistic approach to higher education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Excellence Illustration */}
        <RevealOnScroll delay={700}>
          <div className="mt-12 relative h-48 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-accent/10 overflow-hidden flex items-center justify-center">
            <ExcellenceSVG className="w-full h-full max-w-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-lg font-bold text-[#100902] mb-2">
                  Building Tomorrow&apos;s Leaders Today
                </p>
                <p className="text-sm text-gray-600">
                  Recognised for excellence in education, innovation, and student empowerment
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
