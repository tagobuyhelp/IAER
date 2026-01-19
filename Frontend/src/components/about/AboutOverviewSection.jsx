"use client";

import {
  Layers,
  Cpu,
  Briefcase,
  LineChart,
  Target,
  GraduationCap,
  Sparkles,
  BookOpen,
  Users,
  Lightbulb,
  Globe,
  Award,
  TrendingUp,
  Zap,
  CheckCircle2,
  Rocket,
  Star,
  Building2,
  Stethoscope,
  Plane,
  Utensils,
  Monitor,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// SVG Illustration Component for Education Excellence
const EducationExcellenceSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="140" fill="url(#educationGradient1)" opacity="0.1" />

    {/* Central graduation cap */}
    <path
      d="M150 120 L200 100 L250 120 L250 140 L200 160 L150 140 Z"
      fill="url(#educationGradient2)"
      opacity="0.9"
    />
    <rect x="190" y="140" width="20" height="30" rx="2" fill="hsl(219, 60%, 22%)" />

    {/* Books around cap */}
    <rect x="100" y="180" width="40" height="30" rx="2" fill="hsl(33, 93%, 54%)" opacity="0.8" />
    <rect x="105" y="185" width="30" height="20" fill="white" opacity="0.3" />

    <rect x="260" y="180" width="40" height="30" rx="2" fill="hsl(205, 81%, 63%)" opacity="0.8" />
    <rect x="265" y="185" width="30" height="20" fill="white" opacity="0.3" />

    {/* Lightbulb representing innovation */}
    <circle cx="200" cy="80" r="20" fill="hsl(33, 93%, 54%)" opacity="0.6" />
    <rect x="195" y="100" width="10" height="15" rx="2" fill="hsl(33, 93%, 54%)" opacity="0.6" />
    <path
      d="M200 60 L205 70 L195 70 Z"
      fill="hsl(33, 93%, 54%)"
      opacity="0.8"
    />

    {/* Stars representing achievements */}
    <g opacity="0.7">
      <path
        d="M120 100 L122 105 L127 105 L123 108 L125 113 L120 110 L115 113 L117 108 L113 105 L118 105 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M280 100 L282 105 L287 105 L283 108 L285 113 L280 110 L275 113 L277 108 L273 105 L278 105 Z"
        fill="hsl(205, 81%, 63%)"
      />
      <path
        d="M100 200 L101 203 L104 203 L102 205 L103 208 L100 206 L97 208 L98 205 L96 203 L99 203 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M300 200 L301 203 L304 203 L302 205 L303 208 L300 206 L297 208 L298 205 L296 203 L299 203 Z"
        fill="hsl(205, 81%, 63%)"
      />
    </g>

    {/* Growth arrows */}
    <path
      d="M200 220 L200 250 L195 245 L200 250 L205 245 Z"
      fill="hsl(33, 93%, 54%)"
      opacity="0.7"
    />

    <defs>
      <linearGradient id="educationGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <linearGradient id="educationGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Multi-Disciplinary
const MultiDisciplinarySVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Central hub */}
    <circle cx="200" cy="150" r="40" fill="url(#multiGradient)" opacity="0.3" stroke="hsl(219, 60%, 22%)" strokeWidth="3" />

    {/* Connecting lines to different domains */}
    <g stroke="hsl(33, 93%, 54%)" strokeWidth="3" opacity="0.5">
      <line x1="200" y1="110" x2="200" y2="50" />
      <line x1="200" y1="190" x2="200" y2="250" />
      <line x1="160" y1="150" x2="100" y2="150" />
      <line x1="240" y1="150" x2="300" y2="150" />
      <line x1="160" y1="110" x2="100" y2="80" />
      <line x1="240" y1="110" x2="300" y2="80" />
      <line x1="160" y1="190" x2="100" y2="220" />
      <line x1="240" y1="190" x2="300" y2="220" />
    </g>

    {/* Domain icons */}
    <g opacity="0.8">
      {/* Technology */}
      <rect x="85" y="65" width="30" height="30" rx="2" fill="hsl(33, 93%, 54%)" />
      <rect x="90" y="70" width="8" height="8" fill="white" />
      <rect x="102" y="70" width="8" height="8" fill="white" />
      <rect x="90" y="82" width="8" height="8" fill="white" />
      <rect x="102" y="82" width="8" height="8" fill="white" />

      {/* Healthcare */}
      <circle cx="200" cy="45" r="15" fill="hsl(205, 81%, 63%)" />
      <path d="M200 35 L200 45 L195 50 L200 45 L205 50 Z" fill="white" />

      {/* Management */}
      <rect x="285" y="65" width="30" height="30" rx="2" fill="hsl(33, 93%, 54%)" />
      <path d="M300 75 L305 80 L300 85 L295 80 Z" fill="white" />

      {/* Hospitality */}
      <rect x="285" y="205" width="30" height="30" rx="2" fill="hsl(205, 81%, 63%)" />
      <rect x="290" y="210" width="20" height="20" rx="1" fill="white" opacity="0.5" />

      {/* Aviation */}
      <path d="M200 235 L195 250 L200 245 L205 250 Z" fill="hsl(33, 93%, 54%)" />

      {/* Business */}
      <rect x="85" y="205" width="30" height="30" rx="2" fill="hsl(219, 60%, 22%)" />
      <path d="M100 220 L105 225 L100 230 L95 225 Z" fill="white" />
    </g>

    {/* Central icon */}
    <circle cx="200" cy="150" r="20" fill="hsl(33, 93%, 54%)" />
    <path
      d="M190 150 L195 155 L210 140"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    <defs>
      <radialGradient id="multiGradient" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </radialGradient>
    </defs>
  </svg>
);

// Stat card component
function StatCard({ icon: Icon, label, value, description, delay = 0, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50/50 px-5 py-5 transition-all duration-500",
        "hover:-translate-y-2 hover:shadow-xl hover:border-accent/60 hover:bg-gradient-to-br hover:from-accent/5 hover:to-primary/5",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 transition-all duration-300",
            isHovered && "scale-110 rotate-3 shadow-lg"
          )}
        >
          <Icon
            className={cn(
              "h-6 w-6 text-accent transition-all duration-300",
              isHovered && "text-primary scale-110"
            )}
            aria-hidden="true"
          />
        </div>
        <div className="flex-1">
          <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
            {label}
          </div>
          <div
            className={cn(
              "text-2xl font-bold text-[#100902] transition-colors duration-300",
              isHovered && "text-primary"
            )}
          >
            {value}
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Auto-scrolling program domains component
function AutoScrollingDomains() {
  const [isPaused, setIsPaused] = useState(false);
  const domains = [
    { icon: Building2, text: "Business Management" },
    { icon: Cpu, text: "Computer Applications" },
    { icon: TrendingUp, text: "Data Science" },
    { icon: Zap, text: "Artificial Intelligence" },
    { icon: Stethoscope, text: "Hospital Management" },
    { icon: Utensils, text: "Hospitality & Hotel Admin" },
    { icon: Plane, text: "Aviation" },
    { icon: Monitor, text: "Cyber Security" },
    { icon: BookOpen, text: "Business Analytics" },
    { icon: Globe, text: "Global Business" },
  ];

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 p-4 w-full">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
        <span className="text-xs font-semibold text-[#100902] uppercase tracking-wide">Our Programs</span>
      </div>
      <div
        className={cn("flex gap-4", !isPaused && "animate-scroll")}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={isPaused ? { animationPlayState: "paused" } : {}}
      >
        {/* First set */}
        {domains.map((domain, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm whitespace-nowrap hover:shadow-md hover:border-accent/40 transition-all duration-300"
          >
            <domain.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="text-xs font-medium text-gray-700">{domain.text}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {domains.map((domain, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm whitespace-nowrap hover:shadow-md hover:border-accent/40 transition-all duration-300"
          >
            <domain.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="text-xs font-medium text-gray-700">{domain.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        "flex gap-3 items-start group p-2 rounded-lg transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-accent/5 hover:to-primary/5 hover:shadow-sm",
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
      style={{
        transitionDelay: `${delay + index * 50}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex-shrink-0 p-1.5 rounded-md bg-gradient-to-br from-accent/20 to-accent/10 transition-all duration-300",
          isHovered && "scale-110"
        )}
      >
        {Icon && (
          <Icon
            className={cn(
              "w-4 h-4 text-accent transition-all duration-300",
              isHovered && "text-primary"
            )}
            aria-hidden="true"
          />
        )}
        {!Icon && (
          <span
            className={cn(
              "mt-1 h-1.5 w-1.5 rounded-full bg-accent transition-all duration-300",
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

export default function AboutOverviewSection() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const stats = [
    {
      icon: Layers,
      label: "Legacy",
      value: "10+ Years",
      description: "Proven track record in higher education and skill-based training.",
    },
    {
      icon: Cpu,
      label: "Programs & Domains",
      value: "12+ Areas",
      description: "From management and technology to healthcare, hospitality, and aviation.",
    },
    {
      icon: Briefcase,
      label: "Placement Offers",
      value: "3000+ Offers",
      description: "Generated across diverse industries and functional roles.",
    },
    {
      icon: LineChart,
      label: "Highest Package",
      value: "₹15.75 LPA",
      description: "Reflecting strong industry engagement and student performance.",
    },
  ];

  const highlights = [
    {
      text: "Embodies contemporary higher education, bridging academic excellence with industry expectations.",
      icon: GraduationCap,
    },
    {
      text: "Promotes flexible, hands-on learning through projects, field training, and workshops.",
      icon: BookOpen,
    },
    {
      text: "Integrates modern research and real-world case studies to build strong analytical competence.",
      icon: Lightbulb,
    },
    {
      text: "Led by highly qualified academicians and industry veterans who mentor students.",
      icon: Users,
    },
    {
      text: "Offers international workshops and global academic collaborations.",
      icon: Globe,
    },
    {
      text: "Nurtures an inclusive campus with events, clubs, and community-building activities.",
      icon: Award,
    },
    {
      text: "Every program revolves around student success, from mentorship to placement.",
      icon: Target,
    },
    {
      text: "Smart classrooms and labs integrate technology into every step of learning.",
      icon: Zap,
    },
    {
      text: "Ensures transparency, professional standards, and ethical practices.",
      icon: CheckCircle2,
    },
  ];

  const cards = [
    { id: 'overview', title: 'Our Story' },
    { id: 'stats', title: 'Key Figures' },
    { id: 'highlights', title: 'Why IAER' },
    { id: 'excellence', title: 'Excellence' },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const newIndex = Math.round(scrollLeft / clientWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      scrollToCard(Math.min(activeIndex + 1, cards.length - 1));
    } else if (e.key === 'ArrowLeft') {
      scrollToCard(Math.max(activeIndex - 1, 0));
    }
  };

  return (
    <section
      className="h-screen lg:h-[600px] w-full bg-gradient-to-br from-white via-gray-50/80 to-white overflow-hidden flex flex-col lg:flex-row relative group"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="About IAER Overview Section"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/about/Students_approaching_modern_campus_entrance.png"
          alt="Students Approaching Modern Campus Entrance"
          fill
          className="object-cover opacity-30"
        />
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Left Side: Scrollable Cards */}
      <div className="flex-1 h-full relative order-2 lg:order-1 overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >

          {/* Card 1: Overview & Intro */}
          <div className="min-w-full h-full snap-center p-4 lg:p-8 flex items-start justify-center overflow-y-auto">
            <div className="max-w-2xl w-full space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary/80 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Who We Are</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#100902]">
                  Bridging Academic Excellence with <span className="text-primary">Real-World Success</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  IAER (Institute of Advance Education & Research) has grown into a respected
                  multi-disciplinary institution known for its commitment to skill development, industry
                  integration, and practical learning.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Since its inception, IAER has focused on delivering education that aligns with
                  real-world demands, ensuring that students graduate not only with academic
                  knowledge but also with hands-on competence.
                </p>
                <div className="pt-4">
                  <AutoScrollingDomains />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Stats & Impact */}
          <div className="min-w-full h-full snap-center p-4 lg:p-8 flex items-start justify-center overflow-y-auto">
            <div className="max-w-3xl w-full">
              <div className="mb-8">
                <span className="text-sm font-bold uppercase tracking-wider text-accent mb-2 block">Our Impact</span>
                <h3 className="text-3xl font-bold text-[#100902]">Numbers That Speak</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <StatCard
                    key={stat.label}
                    icon={stat.icon}
                    label={stat.label}
                    value={stat.value}
                    description={stat.description}
                    delay={100}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Highlights */}
          <div className="min-w-full h-full snap-center p-4 lg:p-8 flex items-start justify-center overflow-y-auto">
            <div className="max-w-3xl w-full">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-accent mb-2 block">Key Features</span>
                  <h3 className="text-3xl font-bold text-[#100902]">Why Choose IAER?</h3>
                </div>
                <EducationExcellenceSVG className="w-32 h-32 hidden sm:block opacity-80" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <AnimatedListItem key={index} index={index} icon={item.icon}>
                    {item.text}
                  </AnimatedListItem>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Multi-Disciplinary */}
          <div className="min-w-full h-full snap-center p-4 lg:p-8 flex items-start justify-center overflow-y-auto">
            <div className="max-w-2xl w-full text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-8">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-[#100902] mb-4">Multi-Disciplinary Excellence</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                IAER offers diverse programs across multiple domains, creating a rich learning
                ecosystem where students can explore interdisciplinary opportunities.
              </p>
              <div className="relative w-full max-w-lg mx-auto aspect-[4/3]">
                <MultiDisciplinarySVG className="w-full h-full drop-shadow-lg" />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicators (Mobile/Overlay) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 lg:hidden">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === idx ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Static Header & Nav (Desktop) */}
      <div className="w-full lg:w-[35%] xl:w-[30%] h-auto lg:h-full bg-white border-l border-gray-100 flex flex-col justify-center p-6 lg:p-10 relative z-20 shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] order-1 lg:order-2 shrink-0">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Welcome to IAER</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#100902] leading-tight">
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Our Institute
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            Discover our journey of excellence, innovation, and student success.
            Swipe through to explore our legacy, impact, and vision.
          </p>

          {/* Navigation Controls (Desktop) */}
          <div className="hidden lg:flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
                disabled={!canScrollLeft}
                className="p-3 rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(activeIndex + 1, cards.length - 1))}
                disabled={!canScrollRight}
                className="p-3 rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-2">
              {cards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => scrollToCard(idx)}
                  className={cn(
                    "flex items-center gap-3 w-full text-left p-2 rounded-lg transition-all",
                    activeIndex === idx ? "bg-gray-50" : "hover:bg-gray-50/50"
                  )}
                >
                  <span className={cn(
                    "text-sm font-medium transition-colors",
                    activeIndex === idx ? "text-primary" : "text-gray-400"
                  )}>
                    0{idx + 1}
                  </span>
                  <span className={cn(
                    "text-sm font-semibold transition-colors",
                    activeIndex === idx ? "text-[#100902]" : "text-gray-500"
                  )}>
                    {card.title}
                  </span>
                  {activeIndex === idx && (
                    <ArrowRight className="w-4 h-4 text-primary ml-auto animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
