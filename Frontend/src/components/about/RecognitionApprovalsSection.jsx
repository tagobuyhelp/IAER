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
  Shield,
  Check,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

// Compact Recognition Item
function RecognitionItem({ icon: Icon, text, delay = 0, index }) {
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

// Logo Component
function LogoBox({ src, alt, index }) {
  return (
    <div 
      className="relative h-12 bg-white rounded-lg border border-gray-100 flex items-center justify-center p-2 hover:border-accent/30 hover:shadow-sm transition-all duration-300"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-1.5"
        sizes="100px"
      />
    </div>
  );
}

export default function RecognitionApprovalsSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const recognitionItems = [
    {
      text: "Affiliated to MAKAUT, West Bengal (formerly WBUT).",
      icon: GraduationCap,
    },
    {
      text: "Approved by AICTE for technical education programs.",
      icon: FileCheck,
    },
    {
      text: "Recognised by CII, NHRDN, and NSDC.",
      icon: Building2,
    },
    {
      text: "Compliant with state and national regulatory guidelines.",
      icon: ShieldCheck,
    },
    {
      text: "Industry partnerships for curriculum and placement.",
      icon: Users,
    },
  ];

  const logos = [
    { src: "/images/MAKAUT-aff.png", alt: "MAKAUT" },
    { src: "/images/AICTE-aff.png", alt: "AICTE" },
    { src: "/images/NSDC.png", alt: "NSDC" },
    { src: "/images/MSME.png", alt: "MSME" },
    { src: "/images/confederation.png", alt: "CII" },
    { src: "/images/NHRD.png", alt: "NHRD" },
  ];

  return (
    <section className="py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/about/Regulatory_compliance_review_meeting.png"
                alt="Academic Leader Engaging with Students"
                fill
                className="object-cover opacity-30"
              />
            </div>
      <div className="container mx-auto px-4 relative z-10">
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
                <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider uppercase text-primary">
                  Official Recognition
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Approvals & <span className="text-primary">Affiliations</span>
              </h2>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <BadgeCheck className="w-3.5 h-3.5 text-accent" />
              <span>Govt. Approved</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Content (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Card */}
            <RevealOnScroll delay={100}>
              <div className="rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-primary/10 p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10" />
                 
                 <div className="relative p-4 rounded-full bg-white shadow-sm border border-gray-100 flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-center sm:text-left relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Nationally Recognized</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      IAER operates under established statutory frameworks. Our programs are aligned with 
                      regulatory expectations to ensure credibility, quality education, and nationwide 
                      acceptance of your degree.
                    </p>
                 </div>
              </div>
            </RevealOnScroll>

            {/* Recognition List */}
            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                   <FileCheck className="w-5 h-5 text-accent" />
                   <h3 className="font-bold text-gray-900 text-base">Key Approvals</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {recognitionItems.map((item, index) => (
                    <RecognitionItem
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

          {/* Right Column: Logos & Trust (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Affiliations Grid */}
            <RevealOnScroll delay={300}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                   <Building2 className="w-4 h-4 text-primary" />
                   <h3 className="font-bold text-gray-900 text-sm">Affiliated With</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {logos.map((logo, index) => (
                    <LogoBox key={logo.alt} src={logo.src} alt={logo.alt} index={index} />
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {["MAKAUT", "AICTE", "NSDC", "CII"].map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-gray-50 text-[10px] font-medium text-gray-600 border border-gray-100 flex items-center gap-1">
                        <Check className="w-2.5 h-2.5 text-green-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Certified Badge */}
            <RevealOnScroll delay={400}>
               <div className="bg-primary rounded-xl p-5 text-white shadow-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full -mr-5 -mt-5 transition-transform group-hover:scale-110" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-accent" />
                      <h3 className="font-bold text-sm">Certified Excellence</h3>
                    </div>
                    <p className="text-xs leading-relaxed opacity-90">
                      Fully compliant with national educational standards and quality benchmarks.
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
