"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Video,
  BookOpen,
  FolderOpen,
  Award,
  Users,
  HelpCircle,
  ClipboardList,
  Briefcase,
  Handshake,
  TrendingUp,
} from "lucide-react";

const highlightItems = [
  {
    label: "Live Classes",
    img: "/assets/images/Digital_Marketing_Landing/images/best-digital-marketing-training-kolkata-hero-bg.webp",
    icon: Video,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    label: "Free Study Material",
    img: "/assets/images/Digital_Marketing_Landing/images/best-digital-marketing-training-kolkata-hero-bg-2.webp",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    label: "End-to-End Projects",
    img: "/assets/images/Digital_Marketing_Landing/images/best-digital-marketing-training-kolkata-hero-bg-3.webp",
    icon: FolderOpen,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    label: "Internship Certificate",
    img: "/assets/images/Digital_Marketing_Landing/images/ai-digital-marketing-course-social-media-automation-training.webp",
    icon: Award,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "Mentor Support",
    img: "/assets/images/Digital_Marketing_Landing/images/performance-marketing-course-social-media-ads-training.webp",
    icon: Users,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-700",
  },
  {
    label: "Doubt Sessions",
    img: "/assets/images/Digital_Marketing_Landing/images/career-switch-success-digital-marketing-freelancer.webp",
    icon: HelpCircle,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    label: "Mock Tests",
    img: "/assets/images/Digital_Marketing_Landing/images/digital-marketing-placement-success-corporate-professional.webp",
    icon: ClipboardList,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    label: "Portfolio Building",
    img: "/assets/images/Digital_Marketing_Landing/images/freelance-digital-marketing-success-work-from-home.webp",
    icon: Briefcase,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    label: "Placement Support",
    img: "/assets/images/Digital_Marketing_Landing/images/best-digital-marketing-training-kolkata-hero-bg-3.webp",
    icon: Handshake,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    label: "Personality Dev.",
    img: "/assets/images/Digital_Marketing_Landing/images/performance-marketing-course-social-media-ads-training.webp",
    icon: TrendingUp,
    bgColor: "bg-lime-100",
    iconColor: "text-lime-700",
  },
];

export default function CourseHighlights({ _this }) {
  return (
    <section className="relative w-full bg-[#F8FAFF] py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Subtle Grid + Dot Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#cbd5e1 1.5px, transparent 1.5px),
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 24px 24px, 24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
        }}
      />
      
      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-8 sm:gap-12 relative z-10">
        
        {/* Section header & CTA */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-col gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-sky-100/60 text-[#00A2E7] border border-sky-200/50 shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2E7] animate-pulse" />
              Why Choose This Program
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[32px] font-black text-[#232D63] leading-tight tracking-tight">
              Not Just Theory — <span className="text-[#00A2E7]">Real Projects</span> Exposure Happens Here
            </h2>
            <p className="text-[#64748b] text-xs sm:text-[15px] leading-relaxed max-w-3xl">
              At EME Academy, learn directly from industry experts, work on enterprise-level projects, and build a strong portfolio that makes you job-ready from day one. From mastering digital marketing tools to solving real business challenges, every step of the training is designed to help you grow with confidence and industry-ready expertise.
            </p>
          </div>
          <button
            onClick={() => {
              _this?.setCtaType?.("normal");
              _this?.setIsModalOpen?.(true);
            }}
            className="self-start bg-[#232D63] hover:bg-[#1a2252] text-white font-bold px-5 sm:px-7 py-2.5 rounded-lg transition-colors text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center gap-1.5"
          >
            Enrol Now →
          </button>
        </div>

        {/* 10-Card Grid layout based on Reference Image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {highlightItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#00A2E7]/30 transition-all flex flex-col items-center justify-center text-center p-5 sm:p-6 gap-3 group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${item.bgColor} group-hover:-translate-y-1 transition-transform duration-300`}>
                  <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <span className="text-[12px] sm:text-sm font-bold text-[#232D63] leading-tight group-hover:text-[#00A2E7] transition-colors">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
