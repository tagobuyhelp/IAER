"use client";

import { 
  Users, 
  Briefcase, 
  HeartHandshake, 
  Leaf, 
  Sparkles,
  GraduationCap,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  HandHeart,
  Recycle,
  Sprout,
  UsersRound,
  Zap
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// SVG Illustration Component for Community Impact
const CommunityImpactSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="140" fill="url(#gradient1)" opacity="0.1" />
    
    {/* Main community circle */}
    <circle cx="200" cy="150" r="80" fill="url(#gradient2)" opacity="0.15" />
    
    {/* Connecting lines representing community bonds */}
    <g stroke="hsl(33, 93%, 54%)" strokeWidth="2" opacity="0.3">
      <line x1="200" y1="70" x2="150" y2="120" />
      <line x1="200" y1="70" x2="250" y2="120" />
      <line x1="150" y1="120" x2="200" y2="180" />
      <line x1="250" y1="120" x2="200" y2="180" />
      <line x1="200" y1="70" x2="200" y2="180" />
    </g>
    
    {/* People icons */}
    <circle cx="200" cy="100" r="12" fill="hsl(219, 60%, 22%)" />
    <circle cx="150" cy="140" r="12" fill="hsl(33, 93%, 54%)" />
    <circle cx="250" cy="140" r="12" fill="hsl(205, 81%, 63%)" />
    <circle cx="200" cy="180" r="12" fill="hsl(219, 60%, 22%)" />
    
    {/* Heart symbol */}
    <path
      d="M200 160 C195 155, 190 150, 185 150 C180 150, 175 155, 175 160 C175 165, 200 185, 200 185 C200 185, 225 165, 225 160 C225 155, 220 150, 215 150 C210 150, 205 155, 200 160 Z"
      fill="hsl(33, 93%, 54%)"
      opacity="0.6"
    />
    
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(205, 81%, 63%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Growth and Development
const GrowthSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Growth curve */}
    <path
      d="M50 250 Q100 200, 150 180 T250 140 T350 100"
      stroke="hsl(33, 93%, 54%)"
      strokeWidth="4"
      fill="none"
      opacity="0.8"
    />
    
    {/* Data points */}
    <circle cx="150" cy="180" r="8" fill="hsl(219, 60%, 22%)" />
    <circle cx="200" cy="160" r="8" fill="hsl(33, 93%, 54%)" />
    <circle cx="250" cy="140" r="8" fill="hsl(205, 81%, 63%)" />
    <circle cx="300" cy="120" r="8" fill="hsl(219, 60%, 22%)" />
    <circle cx="350" cy="100" r="10" fill="hsl(33, 93%, 54%)" />
    
    {/* Sparkle effects */}
    <g opacity="0.6">
      <path d="M350 100 L352 95 L350 90 L348 95 Z" fill="hsl(33, 93%, 54%)" />
      <path d="M300 120 L302 115 L300 110 L298 115 Z" fill="hsl(205, 81%, 63%)" />
      <path d="M250 140 L252 135 L250 130 L248 135 Z" fill="hsl(33, 93%, 54%)" />
    </g>
    
    {/* Background gradient */}
    <rect x="0" y="0" width="400" height="300" fill="url(#growthGradient)" opacity="0.05" />
    
    <defs>
      <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="50%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </linearGradient>
    </defs>
  </svg>
);

// Animated list item component
function AnimatedListItem({ children, index, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <li
      ref={ref}
      className={cn(
        "flex gap-3 items-start group",
        inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-4"
      )}
      style={{
        transition: `all 0.5s ease-out ${delay + index * 50}ms`,
      }}
    >
      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent group-hover:scale-125 group-hover:bg-primary transition-all duration-300 flex-shrink-0" />
      <span className="group-hover:text-primary transition-colors duration-300">{children}</span>
    </li>
  );
}

// Section card component with enhanced animations
function ISRSectionCard({ icon: Icon, title, description, items, delay = 0, index }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-5 lg:p-6 transition-all duration-500",
        "hover:shadow-lg hover:border-accent/40 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4 mb-3">
        <div
          className={cn(
            "p-3 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 transition-all duration-300",
            isHovered && "scale-110 rotate-3"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6 text-accent transition-all duration-300",
              isHovered && "text-primary"
            )}
            aria-hidden="true"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#100902] text-base lg:text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
      {items && items.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {items.map((item, idx) => (
            <AnimatedListItem key={item} index={idx} delay={delay + index * 100}>
              {item}
            </AnimatedListItem>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ISRSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sections = [
    {
      icon: Briefcase,
      title: "Skill Development & Employability Initiatives",
      description:
        "IAER regularly undertakes skill-oriented training programs aimed at enhancing employability among students and youth from surrounding communities. These initiatives focus on bridging skill gaps and preparing learners for industry, service sectors, and entrepreneurship.",
      items: [
        "Basic computer literacy",
        "Business communication skills",
        "Hospitality and service operations",
        "Healthcare support skills",
        "Financial and digital awareness",
      ],
      additionalText:
        "These programs help participants gain practical exposure and confidence to enter the workforce or pursue further education.",
    },
    {
      icon: HeartHandshake,
      title: "Community Engagement & Awareness Programs",
      description:
        "IAER actively organises outreach sessions in collaboration with academic departments and student bodies to promote awareness on social, financial, and health-related issues.",
      items: [
        "Financial literacy and digital payments awareness",
        "Health, hygiene, and preventive care education",
        "Career guidance for school and college students",
        "Women empowerment and skill awareness sessions",
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "IAER is committed to environmental protection and sustainable practices, promoting eco-conscious behaviour through awareness drives and campus initiatives that encourage responsible resource usage.",
      items: [
        "Tree plantation drives within and around the campus",
        "Awareness programs on waste management and cleanliness",
        "Promotion of eco-friendly practices among students and staff",
        "Encouraging reduced plastic usage and energy conservation",
      ],
    },
    {
      icon: Sparkles,
      title: "Cleanliness & Civic Responsibility Drives",
      description:
        "Aligned with national cleanliness missions, IAER conducts cleanliness and sanitation drives in nearby localities and campus areas, with active participation from students and faculty.",
      items: [
        "Clean campus and neighbourhood initiatives",
        "Public awareness on sanitation and hygiene",
        "Encouraging community participation in cleanliness efforts",
      ],
    },
    {
      icon: BookOpen,
      title: "Educational Outreach & Support",
      description:
        "Believing that education is a powerful tool for social transformation, IAER undertakes educational support initiatives for underprivileged students.",
      items: [
        "Distribution of stationery and learning materials",
        "Career awareness sessions for school students",
        "Motivational talks and guidance programs",
        "Exposure to higher education and skill-based learning paths",
      ],
    },
    {
      icon: UsersRound,
      title: "Youth & Student Development Programs",
      description:
        "IAER encourages students to actively participate in ISR initiatives as part of their holistic development. Through volunteering, leadership roles, and community interaction, students develop empathy, teamwork, and real-world problem-solving skills, growing into socially responsible professionals aligned with IAER's vision of inclusive growth and nation-building.",
    },
  ];

  const impactAreas = [
    {
      icon: TrendingUp,
      label: "Skill and Employability",
      detail: "Enhancing job readiness for local youth and learners.",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: Users,
      label: "Community Engagement",
      detail: "Working with schools, NGOs, and neighbourhood organisations.",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: HandHeart,
      label: "Health and Wellbeing",
      detail: "Spreading awareness on physical and mental health.",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: Sprout,
      label: "Environment and Sustainability",
      detail: "Promoting responsible resource use and green practices.",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <RevealOnScroll className="text-center mb-12 lg:mb-16">
          <div
            ref={headerRef}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6",
              headerInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
            style={{ transition: "all 0.6s ease-out" }}
          >
            <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-semibold text-accent">Social Responsibility</span>
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-[#100902] mb-6",
              "bg-gradient-to-r from-[#100902] via-primary to-[#100902] bg-clip-text",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.2s" }}
          >
            Institutional Social Responsibility (ISR)
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.4s" }}
          >
            IAER views social responsibility as an integral part of its academic mission. The
            institute encourages students and faculty to engage with communities, contribute to
            local development, and build a culture of empathy, sustainability, and nation-building.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] items-start">
          {/* Main Content */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <ISRSectionCard
                key={section.title}
                icon={section.icon}
                title={section.title}
                description={section.description}
                items={section.items}
                delay={200}
                index={index}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Key Impact Areas Card */}
            <RevealOnScroll delay={300}>
              <div className="rounded-2xl border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5 p-6 lg:p-8 space-y-6 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/70 shadow-md">
                    <Target className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#100902]">Key Impact Areas</h3>
                </div>

                {/* SVG Illustration */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 flex items-center justify-center">
                  <CommunityImpactSVG className="w-full h-full" />
                </div>

                {/* Impact Areas Grid */}
                <div className="grid gap-4">
                  {impactAreas.map((area, idx) => {
                    const { ref, inView } = useInView({
                      threshold: 0.2,
                      triggerOnce: true,
                    });
                    return (
                      <div
                        key={area.label}
                        ref={ref}
                        className={cn(
                          "rounded-xl border border-gray-200 bg-white p-4 transition-all duration-500",
                          "hover:shadow-md hover:border-accent/40 hover:-translate-y-0.5",
                          `hover:bg-gradient-to-br ${area.color}`,
                          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        )}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={cn(
                              "p-2 rounded-lg bg-gradient-to-br",
                              area.color,
                              "transition-transform duration-300 group-hover:scale-110"
                            )}
                          >
                            <area.icon
                              className={cn("w-5 h-5", area.iconColor)}
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-[#100902] mb-1">
                              {area.label}
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">{area.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Growth Illustration */}
                <div className="relative h-24 w-full rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 flex items-center justify-center mt-4">
                  <GrowthSVG className="w-full h-full" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Motivational Quote Card */}
            <RevealOnScroll delay={400}>
              <div className="rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <Lightbulb className="w-8 h-8 mb-4 text-accent" aria-hidden="true" />
                <p className="text-sm font-medium leading-relaxed italic">
                  &quot;Education is not just about learning; it&apos;s about transforming lives and
                  building communities.&quot;
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs opacity-90">— IAER Vision</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
