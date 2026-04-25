"use client";

import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Building2,
  GraduationCap,
  FileCheck,
  BadgeCheck,
  Shield,
  Check,
  ExternalLink,
  ChevronRight,
  Landmark,
  Globe,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

// Infographic Card for Recognition
function RecognitionInfographicCard({ icon: Icon, title, description, delay = 0, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      {/* Decorative Background Shape */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />
      
      <div className="relative z-10">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

// Circular Infographic Step
function InfographicStep({ icon: Icon, label, subLabel, index }) {
  return (
    <div 
      className="flex flex-col items-center text-center group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative mb-3">
        {/* Connection line for desktop */}
        {index < 3 && (
          <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-100 -z-10" />
        )}
        <div className="w-14 h-14 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-[10px] font-bold text-white flex items-center justify-center">
          {index + 1}
        </div>
      </div>
      <span className="text-xs font-bold text-gray-900 mb-1">{label}</span>
      <span className="text-[10px] text-gray-500 uppercase tracking-tighter">{subLabel}</span>
    </div>
  );
}

export default function RecognitionApprovalsSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const recognitionCards = [
    {
      title: "MAKAUT Affiliation",
      description: "IAER is a constituent college of MAKAUT, West Bengal, ensuring your degree is recognized nationally.",
      icon: GraduationCap,
    },
    {
      title: "AICTE Approval",
      description: "Our technical and management programs are approved by the All India Council for Technical Education.",
      icon: FileCheck,
    },
    {
      title: "Industry Partnerships",
      description: "Recognized and partnered with leading bodies like CII, NSDC, and NHRDN for skill excellence.",
      icon: Briefcase,
    },
    {
      title: "Global Standards",
      description: "Our curriculum meets international quality benchmarks for higher education and professional training.",
      icon: Globe,
    },
  ];

  const steps = [
    { icon: Landmark, label: "MAKAUT", subLabel: "Affiliation" },
    { icon: FileCheck, label: "AICTE", subLabel: "Approval" },
    { icon: Briefcase, label: "CII/NHRD", subLabel: "Partnership" },
    { icon: ShieldCheck, label: "NSDC", subLabel: "Certification" },
  ];

  const logos = [
    { src: "/images/affiliations/MAKAUT-aff.png", alt: "MAKAUT" },
    { src: "/images/affiliations/AICTE-aff.png", alt: "AICTE" },
    { src: "/images/affiliations/NSDC.png", alt: "NSDC" },
    { src: "/images/affiliations/MSME.png", alt: "MSME" },
    { src: "/images/affiliations/confederation.png", alt: "CII" },
    { src: "/images/affiliations/NHRD.png", alt: "NHRD" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll>
            <div
              ref={headerRef}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6 transition-all duration-500",
                headerInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            >
              <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Trusted Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Approved, Affiliated & <span className="text-primary">Nationally Recognized</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              IAER is fully compliant with national regulatory bodies, ensuring your education 
              meets the highest standards of quality and credibility in the industry.
            </p>
          </RevealOnScroll>
        </div>

        {/* Horizontal Infographic Flow */}
        <div className="max-w-5xl mx-auto mb-20 px-4">
          <RevealOnScroll delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
              {steps.map((step, index) => (
                <InfographicStep key={index} {...step} index={index} />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Infographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {recognitionCards.map((card, index) => (
            <RecognitionInfographicCard key={index} {...card} index={index} />
          ))}
        </div>

        {/* Logo Showcase Section */}
        <div className="bg-gray-50/50 rounded-3xl p-8 lg:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="inline-flex p-2 rounded-lg bg-accent/10 text-accent mb-4">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We take pride in our strict adherence to statutory guidelines, providing students 
                with the peace of mind that their degrees and certifications are legitimate and valuable.
              </p>
              <div className="flex flex-wrap gap-2">
                {["MAKAUT", "AICTE", "NSDC", "CII", "MSME"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white text-[10px] font-bold text-primary border border-gray-200 shadow-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {logos.map((logo, index) => (
                  <RevealOnScroll key={index} delay={index * 100}>
                    <div className="group relative h-32 sm:h-40 bg-white rounded-3xl border border-gray-100 flex items-center justify-center p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-full h-full z-10">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold tracking-wide">100% Statutory & Regulatory Compliance Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
