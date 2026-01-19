"use client";

import {
  Building2,
  Handshake,
  Briefcase,
  TrendingUp,
  Award,
  Users,
  Sparkles,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Star,
  Globe,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// SVG Illustration Component for Industry Partnership
const PartnershipSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="140" fill="url(#partnershipGradient1)" opacity="0.1" />
    
    {/* Two connected circles representing partnership */}
    <circle cx="150" cy="150" r="50" fill="url(#partnershipGradient2)" opacity="0.3" stroke="hsl(219, 60%, 22%)" strokeWidth="3" />
    <circle cx="250" cy="150" r="50" fill="url(#partnershipGradient3)" opacity="0.3" stroke="hsl(33, 93%, 54%)" strokeWidth="3" />
    
    {/* Connection line */}
    <line x1="200" y1="150" x2="200" y2="150" stroke="hsl(33, 93%, 54%)" strokeWidth="4" strokeLinecap="round" />
    <path d="M200 100 Q200 120, 200 150" stroke="hsl(205, 81%, 63%)" strokeWidth="3" strokeDasharray="5,5" fill="none" opacity="0.6" />
    
    {/* Building icons inside circles */}
    <rect x="130" y="130" width="40" height="40" rx="4" fill="hsl(219, 60%, 22%)" opacity="0.7" />
    <rect x="135" y="135" width="10" height="10" fill="hsl(33, 93%, 54%)" />
    <rect x="150" y="135" width="10" height="10" fill="hsl(33, 93%, 54%)" />
    <rect x="135" y="150" width="10" height="10" fill="hsl(33, 93%, 54%)" />
    <rect x="150" y="150" width="10" height="10" fill="hsl(33, 93%, 54%)" />
    
    <rect x="230" y="130" width="40" height="40" rx="4" fill="hsl(33, 93%, 54%)" opacity="0.7" />
    <rect x="235" y="135" width="10" height="10" fill="hsl(219, 60%, 22%)" />
    <rect x="250" y="135" width="10" height="10" fill="hsl(219, 60%, 22%)" />
    <rect x="235" y="150" width="10" height="10" fill="hsl(219, 60%, 22%)" />
    <rect x="250" y="150" width="10" height="10" fill="hsl(219, 60%, 22%)" />
    
    {/* Handshake symbol */}
    <path
      d="M180 140 Q200 130, 220 140"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Success indicators */}
    <g opacity="0.6">
      <path
        d="M100 100 L102 105 L107 105 L103 108 L105 113 L100 110 L95 113 L97 108 L93 105 L98 105 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M300 100 L302 105 L307 105 L303 108 L305 113 L300 110 L295 113 L297 108 L293 105 L298 105 Z"
        fill="hsl(205, 81%, 63%)"
      />
      <circle cx="100" cy="200" r="8" fill="hsl(33, 93%, 54%)" />
      <circle cx="300" cy="200" r="8" fill="hsl(205, 81%, 63%)" />
    </g>
    
    <defs>
      <linearGradient id="partnershipGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <radialGradient id="partnershipGradient2" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </radialGradient>
      <radialGradient id="partnershipGradient3" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </radialGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Career Growth
const CareerGrowthSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient */}
    <rect x="0" y="0" width="400" height="300" fill="url(#careerGradient1)" opacity="0.05" />
    
    {/* Growth curve */}
    <path
      d="M50 250 Q100 200, 150 180 T250 140 T350 100"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="5"
      fill="none"
      opacity="0.8"
    />
    
    {/* Data points with icons */}
    <g opacity="0.9">
      <circle cx="150" cy="180" r="12" fill="hsl(219, 60%, 22%)" />
      <circle cx="200" cy="160" r="12" fill="hsl(33, 93%, 54%)" />
      <circle cx="250" cy="140" r="12" fill="hsl(205, 81%, 63%)" />
      <circle cx="300" cy="120" r="15" fill="hsl(33, 93%, 54%)" />
      <circle cx="350" cy="100" r="18" fill="hsl(219, 60%, 22%)" />
    </g>
    
    {/* Building icons along the path */}
    <rect x="145" y="175" width="10" height="10" rx="1" fill="white" />
    <rect x="195" y="155" width="10" height="10" rx="1" fill="white" />
    <rect x="245" y="135" width="10" height="10" rx="1" fill="white" />
    <rect x="295" y="115" width="10" height="10" rx="1" fill="white" />
    <rect x="345" y="95" width="12" height="12" rx="1" fill="white" />
    
    {/* Success stars */}
    <g opacity="0.7">
      <path d="M350 100 L352 95 L350 90 L348 95 Z" fill="hsl(33, 93%, 54%)" />
      <path d="M300 120 L302 115 L300 110 L298 115 Z" fill="hsl(205, 81%, 63%)" />
      <path d="M250 140 L252 135 L250 130 L248 135 Z" fill="hsl(33, 93%, 54%)" />
    </g>
    
    {/* Arrow pointing up */}
    <path
      d="M350 100 L350 60 L345 70 L350 60 L355 70 Z"
      fill="hsl(33, 93%, 54%)"
      opacity="0.8"
    />
    
    <defs>
      <linearGradient id="careerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="50%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </linearGradient>
    </defs>
  </svg>
);

// Stat card component
function StatCard({ icon: Icon, label, value, delay = 0, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50/50 px-5 py-5 transition-all duration-500",
        "hover:-translate-y-2 hover:shadow-xl hover:border-accent/60 hover:bg-gradient-to-br hover:from-accent/5 hover:to-primary/5",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div
          className={cn(
            "p-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 transition-all duration-300",
            isHovered && "scale-110 rotate-3"
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
        </div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {label}
        </div>
      </div>
      <div
        className={cn(
          "text-2xl sm:text-3xl font-bold text-[#100902] transition-colors duration-300",
          isHovered && "text-primary"
        )}
      >
        {value}
      </div>
    </div>
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
        "relative h-12 sm:h-14 w-full rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden transition-all duration-500",
        "hover:scale-110 hover:shadow-lg hover:border-accent/60 hover:-rotate-1",
        inView ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-3"
      )}
      style={{
        transitionDelay: `${delay + index * 50}ms`,
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

// Company badge component
function CompanyBadge({ name, index, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/10 hover:border-accent/60 hover:text-primary hover:shadow-md hover:scale-105",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{
        transitionDelay: `${delay + index * 30}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <CheckCircle2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />}
      {name}
    </span>
  );
}

export default function IndustryEngagementSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: Briefcase,
      label: "Placement Offers Generated",
      value: "3000+",
    },
    {
      icon: Building2,
      label: "Companies Participated",
      value: "500+",
    },
    {
      icon: Award,
      label: "Highest Domestic Package",
      value: "₹15.75 LPA",
    },
    {
      icon: Target,
      label: "Career Pathways",
      value: "IT · Healthcare · Aviation · Hospitality · Business",
    },
  ];

  const logos = [
    { src: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png", alt: "TCS logo" },
    { src: "/images/company_logos/Amazon_logo.svg.png", alt: "Amazon logo" },
    { src: "/images/company_logos/FORTIS.NS_BIG-b3d2adc3.png", alt: "Fortis logo" },
    { src: "/images/company_logos/apollo.png", alt: "Apollo Hospitals logo" },
    { src: "/images/company_logos/Marriott_logo.png", alt: "Marriott Hotels logo" },
    { src: "/images/company_logos/Accenture.png", alt: "Accenture logo" },
    { src: "/images/company_logos/Infosys_logo.png", alt: "Infosys logo" },
    { src: "/images/company_logos/Cognizant_logo.png", alt: "Cognizant logo" },
    { src: "/images/company_logos/HCL_Technologies.svg", alt: "HCL logo" },
    { src: "/images/company_logos/Capgemini.png", alt: "Capgemini logo" },
    { src: "/images/company_logos/deloitte.svg", alt: "Deloitte logo" },
    { src: "/images/company_logos/EY_logo.png", alt: "EY logo" },
    { src: "/images/company_logos/medica_logo.png", alt: "Medica logo" },
    { src: "/images/company_logos/narayana-logo.png", alt: "Narayana Health logo" },
    { src: "/images/company_logos/Hyatt_Logo.png", alt: "Hyatt logo" },
    { src: "/images/company_logos/Tech_Mahindra.png", alt: "Tech Mahindra logo" },
  ];

  const companies = [
    "TCS",
    "Wipro",
    "Amazon",
    "Fortis",
    "Apollo Hospitals",
    "Marriott Hotels",
    "Accenture",
    "Infosys",
    "Cognizant",
    "IBM",
    "HCL",
    "Capgemini",
    "Deloitte",
    "EY",
    "Medica",
    "Narayana Health",
    "Hyatt",
    "Tech Mahindra",
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
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 mb-6 transition-all duration-500",
              headerInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <Handshake className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wide uppercase text-accent">
              Industry Partnerships
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
            Unmatched Industry Engagement
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.4s" }}
          >
            IAER&apos;s industry interface is built around continuous engagement with reputed
            organisations through internships, live projects, guest lectures, corporate
            interactions, and placement drives.
          </p>
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-start">
          {/* Stats Column */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  delay={200}
                  index={index}
                />
              ))}
            </div>

            {/* Partnership Illustration Card */}
            <RevealOnScroll delay={600}>
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <Handshake className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#100902]">Strong Partnerships</h3>
                </div>
                <div className="relative h-40 w-full rounded-xl overflow-hidden bg-white/50 border border-primary/10 flex items-center justify-center">
                  <PartnershipSVG className="w-full h-full" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mt-4">
                  Our strategic partnerships with leading companies ensure students have access to
                  real-world experiences, industry insights, and career opportunities.
                </p>
              </div>
            </RevealOnScroll>

            {/* Success Metrics Card */}
            <RevealOnScroll delay={700}>
              <div className="rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <TrendingUp className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold">Career Growth</h3>
                </div>
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <CareerGrowthSVG className="w-full h-full" />
                </div>
                <p className="text-sm leading-relaxed opacity-95">
                  Our students experience continuous career growth through industry-aligned programs,
                  internships, and placement opportunities with top-tier companies.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-xs opacity-90">Launching Careers</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Companies Column */}
          <div className="space-y-6">
            <RevealOnScroll delay={300}>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-accent" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                  Students placed with leading organisations
                </h3>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="rounded-2xl border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5 p-6 lg:p-8 space-y-6 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-500 hover:-translate-y-1">
                {/* Logo Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {logos.map((logo, index) => (
                    <LogoCard key={logo.alt} logo={logo} index={index} delay={500} />
                  ))}
                </div>

                {/* Company Badges */}
                <div className="flex flex-wrap gap-2">
                  {companies.map((name, index) => (
                    <CompanyBadge key={name} name={name} index={index} delay={600} />
                  ))}
                </div>

                {/* Additional Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span>
                      Connecting students with opportunities across{" "}
                      <span className="font-semibold text-[#100902]">multiple industries</span> and
                      sectors
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Engagement Activities Card */}
            <RevealOnScroll delay={500}>
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-accent/20 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                    <Zap className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#100902]">Engagement Activities</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Internships", icon: Briefcase },
                    { label: "Live Projects", icon: Target },
                    { label: "Guest Lectures", icon: Users },
                    { label: "Placement Drives", icon: Rocket },
                  ].map((activity, index) => {
                    const { ref, inView } = useInView({
                      threshold: 0.2,
                      triggerOnce: true,
                    });
                    return (
                      <div
                        key={activity.label}
                        ref={ref}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 transition-all duration-300",
                          "hover:bg-gradient-to-r hover:from-accent/5 hover:to-primary/5 hover:border-accent/40 hover:shadow-md",
                          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        )}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <activity.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                        <span className="text-sm font-semibold text-gray-700">
                          {activity.label}
                        </span>
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
