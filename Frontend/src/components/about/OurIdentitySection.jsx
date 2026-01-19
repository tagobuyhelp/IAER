"use client";

import {
  Globe,
  Sprout,
  Leaf,
  TreePine,
  BookOpen,
  GraduationCap,
  Sparkles,
  Circle,
  Users,
  Lightbulb,
  CheckCircle2,
  Shield,
  Award,
  Target,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// SVG Illustration Component for Tree of Knowledge
const TreeOfKnowledgeSVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background gradient circle */}
    <circle cx="200" cy="150" r="140" fill="url(#treeGradient1)" opacity="0.1" />
    
    {/* Tree trunk */}
    <rect x="185" y="180" width="30" height="60" rx="4" fill="hsl(219, 60%, 22%)" />
    
    {/* Tree roots */}
    <path
      d="M200 240 Q180 250, 170 245 Q160 250, 200 240 Q240 250, 230 245 Q220 250, 200 240"
      fill="hsl(219, 60%, 22%)"
      opacity="0.8"
    />
    
    {/* Main tree branches/canopy */}
    <ellipse cx="200" cy="140" rx="70" ry="60" fill="url(#treeGradient2)" opacity="0.9" />
    <ellipse cx="180" cy="120" rx="40" ry="35" fill="url(#treeGradient3)" opacity="0.8" />
    <ellipse cx="220" cy="120" rx="40" ry="35" fill="url(#treeGradient3)" opacity="0.8" />
    
    {/* Leaves as individual elements */}
    <g opacity="0.9">
      <circle cx="160" cy="110" r="12" fill="hsl(33, 93%, 54%)" />
      <circle cx="240" cy="110" r="12" fill="hsl(33, 93%, 54%)" />
      <circle cx="200" cy="100" r="15" fill="hsl(205, 81%, 63%)" />
      <circle cx="175" cy="130" r="10" fill="hsl(33, 93%, 54%)" />
      <circle cx="225" cy="130" r="10" fill="hsl(205, 81%, 63%)" />
      <circle cx="190" cy="150" r="12" fill="hsl(33, 93%, 54%)" />
      <circle cx="210" cy="150" r="12" fill="hsl(205, 81%, 63%)" />
    </g>
    
    {/* Circular crest around tree */}
    <circle cx="200" cy="150" r="110" stroke="hsl(219, 60%, 22%)" strokeWidth="3" fill="none" opacity="0.3" />
    <circle cx="200" cy="150" r="100" stroke="hsl(33, 93%, 54%)" strokeWidth="2" fill="none" opacity="0.4" />
    
    {/* Sparkle effects representing knowledge */}
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
        d="M120 220 L121 223 L124 223 L122 225 L123 228 L120 226 L117 228 L118 225 L116 223 L119 223 Z"
        fill="hsl(33, 93%, 54%)"
      />
      <path
        d="M280 220 L281 223 L284 223 L282 225 L283 228 L280 226 L277 228 L278 225 L276 223 L279 223 Z"
        fill="hsl(205, 81%, 63%)"
      />
    </g>
    
    <defs>
      <linearGradient id="treeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </linearGradient>
      <linearGradient id="treeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </linearGradient>
      <radialGradient id="treeGradient3" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(205, 81%, 63%)" />
        <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
      </radialGradient>
    </defs>
  </svg>
);

// SVG Illustration Component for Growth and Unity
const GrowthUnitySVG = ({ className }) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Central circle representing unity */}
    <circle cx="200" cy="150" r="60" fill="url(#unityGradient)" opacity="0.2" stroke="hsl(219, 60%, 22%)" strokeWidth="3" />
    
    {/* Expanding circles representing growth */}
    <circle cx="200" cy="150" r="80" stroke="hsl(33, 93%, 54%)" strokeWidth="2" fill="none" opacity="0.3" />
    <circle cx="200" cy="150" r="100" stroke="hsl(205, 81%, 63%)" strokeWidth="2" fill="none" opacity="0.2" />
    
    {/* Leaves/branches growing outward */}
    <g opacity="0.7">
      <path
        d="M200 90 Q180 100, 170 120 Q160 140, 200 150 Q240 140, 230 120 Q220 100, 200 90 Z"
        fill="hsl(33, 93%, 54%)"
        opacity="0.4"
      />
      <path
        d="M200 210 Q180 200, 170 180 Q160 160, 200 150 Q240 160, 230 180 Q220 200, 200 210 Z"
        fill="hsl(205, 81%, 63%)"
        opacity="0.4"
      />
      <path
        d="M110 150 Q130 140, 150 130 Q170 140, 200 150 Q230 140, 250 130 Q270 140, 290 150 Q270 160, 250 170 Q230 160, 200 150 Q170 160, 150 170 Q130 160, 110 150 Z"
        fill="hsl(33, 93%, 54%)"
        opacity="0.3"
      />
    </g>
    
    {/* Central icon representing knowledge */}
    <circle cx="200" cy="150" r="25" fill="hsl(33, 93%, 54%)" />
    <path
      d="M190 150 L195 155 L210 140"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Decorative elements */}
    <circle cx="120" cy="100" r="8" fill="hsl(33, 93%, 54%)" opacity="0.5" />
    <circle cx="280" cy="100" r="8" fill="hsl(205, 81%, 63%)" opacity="0.5" />
    <circle cx="120" cy="200" r="8" fill="hsl(205, 81%, 63%)" opacity="0.5" />
    <circle cx="280" cy="200" r="8" fill="hsl(33, 93%, 54%)" opacity="0.5" />
    
    <defs>
      <radialGradient id="unityGradient" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
        <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
      </radialGradient>
    </defs>
  </svg>
);

// Animated content card component
function ContentCard({ icon: Icon, title, description, delay = 0, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50/50 p-5 space-y-3 transition-all duration-500",
        "hover:shadow-lg hover:border-accent/60 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "p-2.5 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 transition-all duration-300",
            isHovered && "scale-110 rotate-3"
          )}
        >
          <Icon
            className={cn(
              "w-5 h-5 text-accent transition-all duration-300",
              isHovered && "text-primary"
            )}
            aria-hidden="true"
          />
        </div>
        <h3 className="text-base font-bold text-[#100902] group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
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
        "flex gap-3 items-start group p-3 rounded-lg transition-all duration-300",
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

export default function OurIdentitySection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [emblemHovered, setEmblemHovered] = useState(false);

  const identityCards = [
    {
      icon: Sprout,
      title: "Our Emblem",
      description:
        "The IAER emblem represents growth, knowledge, and purpose. Designed as a flourishing tree, it symbolizes the institute's commitment to nurturing minds, strengthening roots of learning, and enabling students to branch out into successful global careers.",
    },
    {
      icon: TreePine,
      title: "The Tree of Knowledge",
      description:
        "The tree signifies learning, growth, and continuity. Its deep roots represent strong academic foundations, research-driven thinking, and ethical values. The expanding branches symbolize multidisciplinary education, innovation, and limitless career pathways.",
    },
    {
      icon: Leaf,
      title: "The Leaves",
      description:
        "Each leaf represents individual learners who are diverse in aspirations, backgrounds, and talents, all coming together as a unified ecosystem of knowledge. The leaves reflect sustainability, renewal, and continuous development.",
    },
    {
      icon: Circle,
      title: "The Circular Crest",
      description:
        "The circular form around the emblem signifies unity, inclusivity, and global outlook. It reflects IAER's commitment to international standards, collaborative learning, and preparing students to succeed in a globally connected world.",
    },
  ];

  const emblemGuidelines = [
    {
      text: "The official IAER emblem must not be altered in shape, colour, or proportion.",
      icon: Shield,
    },
    {
      text: "The emblem should always be used with the full institute name: Institute of Advance Education & Research (IAER).",
      icon: BookOpen,
    },
    {
      text: "Approved colours include the official Gold and Brown palette.",
      icon: Award,
    },
    {
      text: "Do not crop, rotate, stretch, or distort the emblem.",
      icon: Target,
    },
    {
      text: "Do not place text, graphics, or images inside or over the emblem.",
      icon: CheckCircle2,
    },
    {
      text: "Maintain adequate clear space around the emblem for visibility and impact.",
      icon: Sparkles,
    },
    {
      text: "Do not reproduce the emblem at extremely small sizes that affect legibility.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
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
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wide uppercase text-primary">
              Who We Are
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
            Our Identity
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto",
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transition: "all 0.6s ease-out 0.4s" }}
          >
            Our emblem and identity reflect our commitment to growth, knowledge, and holistic
            education.
          </p>
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-start">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Emblem Display */}
            <RevealOnScroll delay={100}>
              <div className="flex justify-center sm:justify-start">
                <div
                  className={cn(
                    "relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 border-primary/20 flex items-center justify-center overflow-hidden transition-all duration-500",
                    "hover:scale-110 hover:shadow-xl hover:border-accent/60",
                    emblemHovered && "ring-4 ring-accent/20"
                  )}
                  onMouseEnter={() => setEmblemHovered(true)}
                  onMouseLeave={() => setEmblemHovered(false)}
                >
                  <Image
                    src="/images/logos/IAER_ICON.jpg"
                    alt="IAER emblem representing growth, knowledge, and holistic education"
                    fill
                    className={cn(
                      "object-contain p-3 transition-transform duration-500",
                      emblemHovered && "scale-105"
                    )}
                    sizes="128px"
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Identity Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {identityCards.map((card, index) => (
                <ContentCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  delay={200}
                  index={index}
                />
              ))}
            </div>

            {/* Additional Description */}
            <RevealOnScroll delay={600}>
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#100902] mb-2">
                      Holistic Education
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      The emblem reflects IAER&apos;s belief in holistic education, where academic
                      excellence, ethics, and innovation grow together, creating well-rounded
                      professionals ready to make a positive impact in the world.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Guidelines Card */}
            <RevealOnScroll delay={300}>
              <div className="rounded-2xl border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5 p-6 lg:p-8 space-y-6 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                    <Globe className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#100902]">
                    How to Use the IAER Emblem
                  </h3>
                </div>

                {/* SVG Illustration */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 flex items-center justify-center">
                  <GrowthUnitySVG className="w-full h-full" />
                </div>

                {/* Guidelines List */}
                <ul className="space-y-2">
                  {emblemGuidelines.map((item, index) => (
                    <AnimatedListItem
                      key={item.text}
                      icon={item.icon}
                      index={index}
                      delay={400}
                    >
                      {item.text}
                    </AnimatedListItem>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* Tree Illustration Card */}
            <RevealOnScroll delay={400}>
              <div className="rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <TreePine className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold">Symbol of Growth</h3>
                </div>
                <div className="relative h-40 w-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                  <TreeOfKnowledgeSVG className="w-full h-full" />
                </div>
                <p className="text-sm leading-relaxed opacity-95">
                  Our tree emblem represents the continuous growth of knowledge, the strength of
                  our foundations, and the limitless potential of our students.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-xs opacity-90">Rooted in Excellence</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Values Card */}
            <RevealOnScroll delay={500}>
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-accent/20 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                    <Users className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#100902]">Our Values</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Growth", icon: Sprout, color: "from-accent/10 to-accent/5" },
                    { label: "Knowledge", icon: BookOpen, color: "from-primary/10 to-primary/5" },
                    { label: "Unity", icon: Circle, color: "from-accent/10 to-accent/5" },
                    { label: "Innovation", icon: Lightbulb, color: "from-primary/10 to-primary/5" },
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
                          "flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r border border-gray-200 transition-all duration-300",
                          `hover:bg-gradient-to-r ${value.color} hover:border-accent/40 hover:shadow-md`,
                          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        )}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <value.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                        <span className="text-sm font-semibold text-gray-700">{value.label}</span>
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
