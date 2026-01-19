"use client";

import {
  BookOpen,
  Zap,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Briefcase,
  Target,
  Lightbulb,
  Users,
  Award,
  CheckCircle2,
  TrendingUp,
  Rocket,
  Star,
  FlaskConical,
  Monitor,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";


// SVG Illustration Component for Practical Learning
const PracticalLearningSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="140" fill="url(#practicalGradient1)" opacity="0.1" />

    {/* Central hands-on learning symbol */}
    <rect x="160" y="120" width="80" height="60" rx="8" fill="url(#practicalGradient2)" opacity="0.8" />
    <rect x="170" y="130" width="20" height="15" rx="2" fill="white" opacity="0.3" />
    <rect x="195" y="130" width="20" height="15" rx="2" fill="white" opacity="0.3" />
    <rect x="220" y="130" width="20" height="15" rx="2" fill="white" opacity="0.3" />
    <rect x="170" y="150" width="20" height="15" rx="2" fill="white" opacity="0.3" />
    <rect x="195" y="150" width="20" height="15" rx="2" fill="white" opacity="0.3" />
    <rect x="220" y="150" width="20" height="15" rx="2" fill="white" opacity="0.3" />

    {/* Tools/equipment around */}
    <g opacity="0.7">
      {/* Flask */}
      <rect x="100" y="180" width="30" height="40" rx="4" fill="hsl(33, 93%, 54%)" />
      <rect x="105" y="185" width="20" height="30" fill="white" opacity="0.3" />
      <rect x="110" y="175" width="10" height="10" rx="2" fill="hsl(33, 93%, 54%)" />

      {/* Monitor */}
      <rect x="270" y="180" width="40" height="30" rx="4" fill="hsl(205, 81%, 63%)" />
      <rect x="275" y="185" width="30" height="20" fill="white" opacity="0.3" />
      <rect x="285" y="210" width="20" height="10" rx="2" fill="hsl(205, 81%, 63%)" />

      {/* Gear/Tool */}
      <circle cx="120" cy="100" r="15" fill="hsl(219, 60%, 22%)" />
      <circle cx="120" cy="100" r="8" fill="white" opacity="0.3" />
      <path d="M120 85 L120 90 L115 90 L120 90 L125 90 Z" fill="white" opacity="0.5" />

      <circle cx="280" cy="100" r="15" fill="hsl(33, 93%, 54%)" />
      <circle cx="280" cy="100" r="8" fill="white" opacity="0.3" />
      <path d="M280 85 L280 90 L275 90 L280 90 L285 90 Z" fill="white" opacity="0.5" />
    </g>

    {/* Connection lines */}
    <g stroke="hsl(33, 93%, 54%)" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
      <line x1="200" y1="120" x2="200" y2="80" />
      <line x1="200" y1="180" x2="200" y2="220" />
      <line x1="160" y1="150" x2="120" y2="150" />
      <line x1="240" y1="150" x2="280" y2="150" />
    </g>

    {/* Success indicators */}
    <g opacity="0.6">
      <path
        d="M200 80 L202 85 L207 85 L203 88 L205 93 L200 90 L195 93 L197 88 L193 85 L198 85 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M200 220 L202 225 L207 225 L203 228 L205 233 L200 230 L195 233 L197 228 L193 225 L198 225 Z"
        fill="hsl(205, 81%, 63%)"
      />
    </g>

    <defs>
      <linearGradient id="practicalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <linearGradient id="practicalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </linearGradient>
    </defs>
  </svg>
);

// Auto-scrolling learning methods component
function AutoScrollingLearningMethods() {
  const [isPaused, setIsPaused] = useState(false);
  const methods = [
    { icon: FlaskConical, text: "Lab Sessions" },
    { icon: Monitor, text: "Simulations" },
    { icon: Briefcase, text: "Internships" },
    { icon: Target, text: "Live Projects" },
    { icon: Users, text: "Fieldwork" },
    { icon: Handshake, text: "Industry Visits" },
    { icon: Lightbulb, text: "Workshops" },
    { icon: Rocket, text: "Case Studies" },
  ];

  return (
    <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
        <span className="text-xs font-semibold text-white uppercase tracking-wide">Learning Methods</span>
      </div>
      <div
        className={cn("flex gap-4", !isPaused && "animate-scroll")}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={isPaused ? { animationPlayState: "paused" } : {}}
      >
        {/* First set */}
        {methods.map((method, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm whitespace-nowrap hover:shadow-md hover:border-accent/40 hover:bg-white/15 transition-all duration-300"
          >
            <method.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="text-xs font-medium text-white">{method.text}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {methods.map((method, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm whitespace-nowrap hover:shadow-md hover:border-accent/40 hover:bg-white/15 transition-all duration-300"
          >
            <method.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="text-xs font-medium text-white">{method.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Feature card component
function FeatureCard({ icon: Icon, title, description, delay = 0, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-6 text-left transition-all duration-500",
        "hover:-translate-y-2 hover:border-accent/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(247,148,30,0.2)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent/20 mb-4 transition-all duration-300",
          isHovered && "scale-110 rotate-3 shadow-lg shadow-accent/30"
        )}
      >
        <Icon
          className={cn(
            "h-6 w-6 text-accent transition-all duration-300",
            isHovered && "text-white scale-110"
          )}
          aria-hidden="true"
        />
      </div>
      <h3
        className={cn(
          "text-base font-bold text-white mb-2 transition-colors duration-300",
          isHovered && "text-accent"
        )}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

export default function PracticalEducationSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [imageHovered, setImageHovered] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Industry-Aligned Learning",
      description:
        "Curricula, projects, and assessments designed with direct inputs from industry and sector experts.",
    },
    {
      icon: Zap,
      title: "Experiential & Hands-On",
      description:
        "Emphasis on labs, simulations, internships, fieldwork, and live projects that build real-world confidence.",
    },
    {
      icon: ShieldCheck,
      title: "Holistic Student Development",
      description:
        "Focus on technical skills, soft skills, values, and leadership needed to succeed and grow sustainably.",
    },
  ];

  return (
    <section className="relative py-14 lg:py-20 bg-[#100902] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/about/Hands-on_electronics_training_in_India.png"
                alt="Hands-on Electronics Training in India"
                fill
                className="object-cover opacity-30"
              />
            </div>
      
      
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.08]" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      </div>
      
      {/* Additional pattern overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <RevealOnScroll className="max-w-4xl mx-auto text-center">
          <div
            ref={headerRef}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 backdrop-blur-sm mb-6 transition-all duration-500",
              headerInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <Award className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wide uppercase text-white">
              Best Educational Institution for Skill-Based Learning
            </span>
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6",
              "bg-gradient-to-r from-white via-accent/90 to-white bg-clip-text text-transparent",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.2s" }}
          >
            Practical, Industry-Ready Education
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg text-gray-200 leading-relaxed mb-3",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.4s" }}
          >
            IAER is celebrated for its practical, industry-ready approach to education. With
            government recognitions, modern infrastructure, and strong placement support, the
            institution has positioned itself as a reliable choice for students seeking professional
            growth, technical expertise, and holistic development.
          </p>
          <p
            className={cn(
              "text-sm sm:text-base text-gray-300 leading-relaxed",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.6s" }}
          >
            Programs are shaped around real industry requirements, ensuring graduates are prepared
            to excel in workplaces across IT, healthcare, aviation, hospitality, business
            management, and entrepreneurship.
          </p>
        </RevealOnScroll>

        {/* Auto-scrolling Learning Methods */}
        <RevealOnScroll delay={100}>
          <div className="mt-10 max-w-5xl mx-auto">
            <AutoScrollingLearningMethods />
          </div>
        </RevealOnScroll>

        {/* Features Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={200}
              index={index}
            />
          ))}
        </div>

        

        {/* Additional Info Card */}
        <RevealOnScroll delay={500}>
          <div className="mt-10 max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-primary/20 backdrop-blur-sm border-2 border-accent/30 p-6 lg:p-8 text-white shadow-xl hover:shadow-2xl hover:border-accent/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20">
                <Rocket className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">Real-World Preparedness</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-200 mb-4">
              Our practical education approach ensures students are not just academically qualified
              but also industry-ready, equipped with hands-on experience and real-world problem-solving
              skills that employers value.
            </p>
            <div className="flex items-center gap-2 pt-4 border-t border-white/20">
              <Star className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-xs text-gray-300">Building Tomorrow&apos;s Professionals</span>
            </div>
          </div>
        </RevealOnScroll>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent" />
      </div>
    </section>
  );
}
