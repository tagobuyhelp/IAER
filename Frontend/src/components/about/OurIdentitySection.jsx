"use client";

import {
  Sprout,
  Leaf,
  TreePine,
  Circle,
  Sparkles,
  CheckCircle2,
  Shield,
  Award,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Compact Identity Card
function IdentityElement({ icon: Icon, title, description, delay = 0, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300",
        "hover:shadow-lg hover:border-accent/30 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-accent/5 text-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <h3 className="text-[13px] sm:text-sm font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OurIdentitySection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const identityElements = [
    {
      icon: Sprout,
      title: "Our Emblem",
      description: "Designed as a flourishing tree symbolizing growth, nurturing minds, and strengthening roots.",
    },
    {
      icon: TreePine,
      title: "Tree of Knowledge",
      description: "Signifies deep academic foundations, research-driven thinking, and ethical values.",
    },
    {
      icon: Leaf,
      title: "The Leaves",
      description: "Represents diverse learners coming together as a unified ecosystem of knowledge.",
    },
    {
      icon: Circle,
      title: "The Circular Crest",
      description: "Reflects unity, inclusivity, and our commitment to global educational standards.",
    },
  ];

  const guidelines = [
    "Do not alter shape, colour, or proportion.",
    "Always use with full institute name.",
    "Use official Gold and Brown palette.",
    "Do not crop, rotate, or distort.",
    "Keep clear space around the emblem.",
    "Avoid placing text/images over it.",
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/about/Academic_leader_engaging_with_students.png"
                alt="Students Approaching Modern Campus Entrance"
                fill
                className="object-cover opacity-30"
              />
            </div>
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll className="mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div
                ref={headerRef}
                className={cn(
                  "inline-flex items-center gap-2 mb-2 transition-all duration-500",
                  headerInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
              >
                <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-primary">
                  Who We Are
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Our <span className="text-primary">Identity</span>
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Shield className="w-3.5 h-3.5 text-accent" />
              <span>Brand Guidelines</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Core Identity (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Card */}
            <RevealOnScroll delay={100}>
              <div className="rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-primary/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-full bg-white p-3 sm:p-4 shadow-sm border border-gray-100">
                  <Image
                    src="/images/logos/IAER_ICON.jpg"
                    alt="IAER Emblem"
                    fill
                    className="object-contain p-2"
                    sizes="128px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Symbol of Growth & Excellence</h3>
                  <p className="text-[12px] sm:text-sm text-gray-600 leading-relaxed text-justify">
                    The IAER emblem is more than just a logo; it's a representation of our philosophy.
                    Rooted in tradition yet branching out to the future, it embodies our commitment to
                    holistic education where academic excellence, ethics, and innovation grow together.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Elements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {identityElements.map((item, index) => (
                <IdentityElement
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                  delay={200}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Guidelines & Values (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Guidelines */}
            <RevealOnScroll delay={300}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-gray-900 text-sm">Usage Guidelines</h3>
                </div>
                <ul className="space-y-2">
                  {guidelines.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* Values Compact */}
            <RevealOnScroll delay={400}>
              <div className="bg-primary rounded-xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full -mr-5 -mt-5 transition-transform group-hover:scale-110" />

                <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Core Values
                </h3>

                <div className="flex flex-wrap gap-2">
                  {["Growth", "Knowledge", "Integrity", "Innovation", "Unity"].map((val) => (
                    <span key={val} className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] sm:text-xs font-medium backdrop-blur-sm border border-white/10">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
