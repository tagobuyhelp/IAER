"use client";

import {
  Target,
  ShieldCheck,
  Eye,
  TrendingUp,
  Award,
  CheckCircle2,
  Sparkles,
  Zap,
  BookOpen,
  HeartHandshake,
  Building2,
  Lightbulb,
  GraduationCap,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

// Compact Mission/Quality Item
function PolicyItem({ icon: Icon, text, delay = 0, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-3 items-start p-3 rounded-lg border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all duration-300 group",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}
      style={{ transitionDelay: `${delay + index * 50}ms` }}
    >
      <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-md bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
        {text}
      </p>
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
      text: "Student-centric learning ecosystem with modern infrastructure.",
      icon: GraduationCap,
    },
    {
      text: "Industry-aligned undergraduate and skill-based programs.",
      icon: TrendingUp,
    },
    {
      text: "Curricula integrating practical exposure and ethical values.",
      icon: BookOpen,
    },
    {
      text: "Mentorship, internships, and personality development.",
      icon: Users,
    },
    {
      text: "Transparent, fair, and outcome-oriented evaluation system.",
      icon: Award,
    },
    {
      text: "Strong collaborations with industries and global partners.",
      icon: Building2,
    },
    {
      text: "Institutional Social Responsibility (ISR) initiatives.",
      icon: HeartHandshake,
    },
  ];

  const qualityItems = [
    {
      text: "Consistent academic and administrative excellence.",
      icon: ShieldCheck,
    },
    {
      text: "Regular curriculum review and faculty development.",
      icon: CheckCircle2,
    },
    {
      text: "Development of critical thinking and professional ethics.",
      icon: Lightbulb,
    },
    {
      text: "Continuous growth and welfare of faculty and staff.",
      icon: Zap,
    },
    {
      text: "Culture of continuous improvement and accountability.",
      icon: Star,
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <RevealOnScroll className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div
                ref={headerRef}
                className={cn(
                  "inline-flex items-center gap-2 mb-2 transition-all duration-500",
                  headerInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
              >
                <Eye className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider uppercase text-primary">
                  Our Foundation
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Vision, Mission & <span className="text-primary">Quality Policy</span>
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Excellence in Education</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Vision & Mission (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Vision Hero Card */}
            <RevealOnScroll delay={100}>
              <div className="rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-primary/10 p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10" />

                <div className="relative p-4 rounded-full bg-white shadow-sm border border-gray-100 flex-shrink-0">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center sm:text-left relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To emerge as a nationally and globally respected institution of higher learning that
                    fosters academic excellence, research-driven innovation, employability, and
                    entrepreneurship, while developing responsible professionals committed to societal
                    progress and sustainable development.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Mission Grid */}
            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-gray-900 text-base">Our Mission</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {missionItems.map((item, index) => (
                    <PolicyItem
                      key={index}
                      icon={item.icon}
                      text={item.text}
                      index={index}
                      delay={200}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Quality & Values (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Quality Policy */}
            <RevealOnScroll delay={300}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-gray-900 text-base">Quality Policy</h3>
                </div>
                <div className="space-y-1">
                  {qualityItems.map((item, index) => (
                    <PolicyItem
                      key={index}
                      icon={item.icon}
                      text={item.text}
                      index={index}
                      delay={300}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Quote Compact */}
            <RevealOnScroll delay={400}>
              <div className="bg-primary rounded-xl p-5 text-white shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <h3 className="font-bold text-sm">Our Promise</h3>
                  </div>
                  <p className="text-xs leading-relaxed opacity-90 italic">
                    "We are committed to creating an environment where every student can achieve
                    their full potential, guided by excellence, innovation, and ethical values."
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
