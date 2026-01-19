"use client";

import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Building2,
  GraduationCap,
  Users,
  FileCheck,
  BadgeCheck,
  Sparkles,
  Star,
  CheckCircle,
  Shield,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// SVG Illustration Component for Recognition/Shield
const RecognitionShieldSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="130" fill="url(#shieldGradient1)" opacity="0.1" />
    
    {/* Shield shape */}
    <path
      d="M200 60 Q250 60, 280 90 Q280 120, 280 150 Q280 200, 200 240 Q120 200, 120 150 Q120 120, 120 90 Q150 60, 200 60 Z"
      fill="url(#shieldGradient2)"
      opacity="0.9"
      stroke="hsl(219, 60%, 22%)"
      strokeWidth="3"
    />
    
    {/* Check mark inside shield */}
    <path
      d="M170 150 L190 170 L230 130"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Decorative stars */}
    <g opacity="0.6">
      <path
        d="M200 100 L202 105 L207 105 L203 108 L205 113 L200 110 L195 113 L197 108 L193 105 L198 105 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M150 120 L151 123 L154 123 L152 125 L153 128 L150 126 L147 128 L148 125 L146 123 L149 123 Z"
        fill="hsl(205, 81%, 63%)"
      />
      <path
        d="M250 120 L251 123 L254 123 L252 125 L253 128 L250 126 L247 128 L248 125 L246 123 L249 123 Z"
        fill="hsl(205, 81%, 63%)"
      />
    </g>
    
    {/* Sparkle effects */}
    <circle cx="120" cy="80" r="3" fill="hsl(33, 93%, 54%)" opacity="0.5" />
    <circle cx="280" cy="80" r="3" fill="hsl(205, 81%, 63%)" opacity="0.5" />
    
    <defs>
      <linearGradient id="shieldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <linearGradient id="shieldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(205, 81%, 63%)" />
        <stop offset="50%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(219, 60%, 22%)" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Certification/Seal
const CertificationSealSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer circle */}
    <circle cx="200" cy="150" r="100" fill="url(#sealGradient)" opacity="0.15" stroke="hsl(219, 60%, 22%)" strokeWidth="4" />
    
    {/* Inner circle */}
    <circle cx="200" cy="150" r="70" fill="url(#sealGradient2)" opacity="0.2" />
    
    {/* Central check mark */}
    <path
      d="M180 150 L195 165 L220 140"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Decorative elements around seal */}
    <g opacity="0.4">
      <circle cx="200" cy="50" r="8" fill="hsl(33, 93%, 54%)" />
      <circle cx="200" cy="250" r="8" fill="hsl(205, 81%, 63%)" />
      <circle cx="50" cy="150" r="8" fill="hsl(33, 93%, 54%)" />
      <circle cx="350" cy="150" r="8" fill="hsl(205, 81%, 63%)" />
    </g>
    
    {/* Text arc simulation (decorative lines) */}
    <path
      d="M120 120 Q200 100, 280 120"
      stroke="hsl(219, 60%, 22%)"
      strokeWidth="2"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M120 180 Q200 200, 280 180"
      stroke="hsl(219, 60%, 22%)"
      strokeWidth="2"
      fill="none"
      opacity="0.3"
    />
    
    <defs>
      <linearGradient id="sealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <radialGradient id="sealGradient2" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </radialGradient>
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

// Logo card component
function LogoCard({ logo, index, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-14 sm:h-16 w-full rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden transition-all duration-500",
        "hover:scale-110 hover:shadow-lg hover:border-accent/60 hover:-rotate-1",
        inView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-3"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
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
        src={logo.src}
        alt={logo.alt}
        fill
        className={cn(
          "object-contain p-2 transition-transform duration-300",
          isHovered && "scale-105"
        )}
        sizes="(min-width:1024px) 120px, 33vw"
      />
    </div>
  );
}

// Badge component for organization names
function OrganizationBadge({ name, index, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50 px-4 py-2 text-xs font-semibold text-gray-700 transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/10 hover:border-accent/60 hover:text-primary hover:shadow-md hover:scale-105",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{
        transitionDelay: `${delay + index * 50}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <CheckCircle className="w-3.5 h-3.5 text-accent" aria-hidden="true" />}
      {name}
    </span>
  );
}

export default function RecognitionApprovalsSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const recognitionItems = [
    {
      text: "Affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal, offering university-recognised undergraduate programs.",
      icon: GraduationCap,
    },
    {
      text: "Approved by the All India Council for Technical Education (AICTE) for delivering professional and technical education programs with prescribed quality benchmarks.",
      icon: FileCheck,
    },
    {
      text: "Recognised by leading industry bodies such as CII, NHRDN, and NSDC through collaborations, advisory inputs, and participation in skill development initiatives.",
      icon: Building2,
    },
    {
      text: "Operates in compliance with applicable norms and guidelines of statutory and regulatory bodies at the state and national levels.",
      icon: ShieldCheck,
    },
    {
      text: "Associated with academic institutions, sector skill councils, and industry partners to enrich curriculum, training, and placement opportunities.",
      icon: Users,
    },
  ];

  const logos = [
    { src: "/images/MAKAUT-aff.png", alt: "MAKAUT affiliation logo" },
    { src: "/images/AICTE-aff.png", alt: "AICTE approval logo" },
    { src: "/images/NSDC.png", alt: "NSDC collaboration logo" },
    { src: "/images/MSME.png", alt: "MSME initiatives logo" },
    { src: "/images/confederation.png", alt: "Industry confederation association logo" },
    { src: "/images/NHRD.png", alt: "NHRD network logo" },
  ];

  const organizations = [
    "MAKAUT, West Bengal",
    "AICTE",
    "NSDC",
    "MSME Initiatives",
    "CII",
    "NHRDN",
    "Industry Associations",
    "Skill Councils",
  ];

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] items-start">
          {/* Main Content */}
          <RevealOnScroll className="space-y-6">
            {/* Header */}
            <div>
              <div
                ref={headerRef}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4 transition-all duration-500",
                  headerInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
              >
                <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wide uppercase text-primary">
                  Official Recognition
                </span>
              </div>
              <h2
                className={cn(
                  "text-3xl sm:text-4xl font-bold text-[#100902] mb-4",
                  "bg-gradient-to-r from-[#100902] via-primary to-[#100902] bg-clip-text",
                  headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transition: "all 0.6s ease-out 0.2s" }}
              >
                Recognition &amp; Approvals
              </h2>
              <p
                className={cn(
                  "text-base text-gray-700 leading-relaxed",
                  headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transition: "all 0.6s ease-out 0.4s" }}
              >
                IAER operates as a recognised and compliant institution under established
                statutory frameworks. Its programs, processes, and governance are aligned with the
                expectations of regulators, universities, and industry bodies to ensure credibility
                and nationwide acceptance.
              </p>
            </div>

            {/* Recognition List */}
            <ul className="space-y-2">
              {recognitionItems.map((item, index) => (
                <AnimatedListItem
                  key={item.text}
                  icon={item.icon}
                  index={index}
                  delay={200}
                >
                  {item.text}
                </AnimatedListItem>
              ))}
            </ul>
          </RevealOnScroll>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Recognition Card */}
            <RevealOnScroll delay={300}>
              <div className="rounded-2xl border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5 p-6 lg:p-8 space-y-6 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                    <BadgeCheck className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#100902]">
                    Recognised &amp; Approved by
                  </h3>
                </div>

                {/* SVG Illustration */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 flex items-center justify-center">
                  <RecognitionShieldSVG className="w-full h-full" />
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {logos.map((logo, index) => (
                    <LogoCard key={logo.alt} logo={logo} index={index} delay={400} />
                  ))}
                </div>

                {/* Organization Badges */}
                <div className="flex flex-wrap gap-2">
                  {organizations.map((name, index) => (
                    <OrganizationBadge
                      key={name}
                      name={name}
                      index={index}
                      delay={500}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Certification Card */}
            <RevealOnScroll delay={400}>
              <div className="rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <Award className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold">Certified Excellence</h3>
                </div>
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <CertificationSealSVG className="w-full h-full" />
                </div>
                <p className="text-sm leading-relaxed opacity-95">
                  IAER maintains full compliance with regulatory standards, ensuring quality
                  education and nationwide recognition of our programs.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-xs opacity-90">Regulatory Compliant</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Trust Badge */}
            <RevealOnScroll delay={500}>
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-accent/20 p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                    <CheckCircle2 className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#100902] mb-2">Trusted & Verified</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our affiliations and approvals ensure that your degree and qualifications are
                      recognized nationwide, opening doors to opportunities across India.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
