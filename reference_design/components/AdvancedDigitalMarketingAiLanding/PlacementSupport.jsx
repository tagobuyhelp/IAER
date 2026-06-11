"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FileText,
  Target,
  MessageSquare,
  UserCheck,
  Handshake,
  FolderGit,
  Check,
  Users,
  BarChart,
  Building2,
  Award,
  FileCheck2,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Rocket,
  Calendar,
} from "lucide-react";

const stats = [
  {
    value: "100%",
    label: "Placement Assistance",
    icon: Users,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    value: "750+",
    label: "Students Placed",
    icon: BarChart,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    value: "300+",
    label: "Hiring Partners",
    icon: Building2,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    value: "10+ Years",
    label: "Of Placement Excellence",
    icon: Award,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const supports = [
  {
    title: "Resume & LinkedIn",
    icon: FileText,
    borderColor: "border-t-[#3b82f6]", // Blue
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
    checkColor: "text-blue-500",
    lineColor: "bg-blue-500",
    points: [
      "ATS-friendly resume creation for digital marketing roles",
      "LinkedIn profile optimization with project showcasing",
      "Build a professional online presence for recruiters",
    ],
  },
  {
    title: "Aptitude Training",
    icon: Target,
    borderColor: "border-t-[#10b981]", // Emerald
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
    checkColor: "text-emerald-500",
    lineColor: "bg-emerald-500",
    points: [
      "Daily aptitude, logic & analytical reasoning practice",
      "Topic-wise mock tests with performance tracking",
      "Improve speed, accuracy & problem-solving skills",
    ],
  },
  {
    title: "Interview Mastery",
    icon: MessageSquare,
    borderColor: "border-t-[#f43f5e]", // Rose
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50 border-rose-100",
    checkColor: "text-rose-500",
    lineColor: "bg-rose-500",
    points: [
      "HR and technical interview preparation sessions",
      "Real-world business case discussion practice",
      "Personalized feedback for confidence improvement",
    ],
  },
  {
    title: "Expert Mentorship",
    icon: UserCheck,
    borderColor: "border-t-[#8b5cf6]", // Purple
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 border-purple-100",
    checkColor: "text-purple-500",
    lineColor: "bg-purple-500",
    points: [
      "1-on-1 guidance from industry professionals",
      "Career counseling for Digital Marketing with AI roles",
      "Doubt-clearing support throughout the course",
    ],
  },
  {
    title: "Hiring Network",
    icon: Handshake,
    borderColor: "border-t-[#f59e0b]", // Amber
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-100",
    checkColor: "text-amber-500",
    lineColor: "bg-amber-500",
    points: [
      "Placement assistance with hiring partner support",
      "Internship opportunities with industry exposure",
      "Direct interview referrals for eligible candidates",
    ],
  },
  {
    title: "Portfolio Building",
    icon: FolderGit,
    borderColor: "border-t-[#6366f1]", // Indigo
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 border-indigo-100",
    checkColor: "text-indigo-500",
    lineColor: "bg-indigo-500",
    points: [
      "Build a strong portfolio with real-world projects",
      "Enterprise-level case studies & capstone projects",
      "GitHub and LinkedIn project showcase guidance",
    ],
  },
];

export default function PlacementSupport({ _this }) {
  return (
    <section className="w-full bg-[#f8faff] py-8 sm:py-12 md:py-16 border-t border-slate-100 overflow-hidden relative">
      {/* Background gradients for a premium feel */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-8 md:gap-10 relative z-10">
        
        {/* Top Section: Text & Image Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          
          {/* Left Text & Stats */}
          <div className="flex flex-col gap-5 lg:w-[55%]">
            <div className="flex flex-col gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-[#232D63] border border-slate-200 shadow-sm w-fit">
                <Briefcase className="w-3.5 h-3.5 text-[#00A2E7]" />
                Career Transition
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[32px] font-black text-[#232D63] leading-[1.15] tracking-tight">
                Endless Placement Support <br className="hidden sm:block" />
                <span className="text-[#00A2E7]">To Strengthen Your Growth</span>
              </h2>
              <p className="text-[#475569] text-xs sm:text-[15px] leading-relaxed max-w-2xl mt-0.5">
                We don't just train you — we prepare you for the industry with dedicated career services that ensure you have everything to land your dream job.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 pt-3">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                      <StatIcon className={`w-4 h-4 ${stat.iconColor}`} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-black text-base text-[#1e293b] leading-none">{stat.value}</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#64748b] leading-tight">
                        {stat.label.split(' ').map((word, i, arr) => (
                          <React.Fragment key={i}>
                            {word}{i < arr.length - 1 && <br className="hidden sm:block" />}
                            {i < arr.length - 1 && <span className="sm:hidden"> </span>}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image & Floating Overlays */}
          <div className="lg:w-[45%] w-full relative max-w-lg mx-auto lg:mx-0 mt-6 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/50 aspect-[4/3] bg-white">
              <Image 
                src="/assets/images/Digital_Marketing_AI/placement-success-journey.png" 
                alt="Students studying"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Overlay 1: Resume Shortlisted (Top Left) */}
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-3 sm:-left-10 top-5 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5 z-10"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div className="flex flex-col min-w-0 pr-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Resume Shortlisted</span>
                <span className="text-[8px] sm:text-[9px] font-semibold text-emerald-600">ATS Score 92%</span>
              </div>
            </motion.div>

            {/* Floating Overlay 2: Interview Scheduled (Bottom Left) */}
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-1 sm:-left-6 bottom-10 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5 z-10"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="flex flex-col min-w-0 pr-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Interview Scheduled</span>
                <span className="text-[8px] sm:text-[9px] text-slate-500">Digital Marketer Role</span>
              </div>
            </motion.div>

            {/* Floating Overlay 3: Placed Successfully (Top Right) */}
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -right-3 sm:-right-6 top-[-16px] sm:top-[-8px] bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5 z-10"
            >
              <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                <Users className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div className="flex flex-col min-w-0 pr-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">Placed Successfully</span>
                <span className="text-[8px] sm:text-[9px] font-semibold text-emerald-600">Dream Job Achieved!</span>
              </div>
            </motion.div>

            {/* Floating Overlay 4: Career Growth Unlocked (Middle Right) */}
            <motion.div 
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -right-1 sm:-right-4 top-[40%] bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col items-center gap-0.5 z-10"
            >
              <span className="text-[8px] font-bold text-slate-800 leading-tight whitespace-nowrap">Career Growth<br/>Unlocked</span>
              <div className="w-14 h-7 mt-0.5">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path d="M 5 35 L 25 25 L 45 30 L 75 10 L 95 5" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                  <circle cx="95" cy="5" r="3" fill="#3b82f6" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Section: Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-2">
          {supports.map((support, i) => {
            const IconComponent = support.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`flex flex-col bg-white rounded-2xl border-t-4 border-l border-r border-b border-slate-100 hover:border-b-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${support.borderColor}`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3.5 px-4 pt-5 pb-1.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${support.iconBg}`}>
                    <IconComponent className={`w-4.5 h-4.5 ${support.iconColor}`} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-[#1e293b] text-sm sm:text-[15px] leading-tight">
                      {support.title}
                    </h3>
                    {/* Colored line under title */}
                    <div className={`w-7 h-[1.5px] rounded-full mt-1 ${support.lineColor}`}></div>
                  </div>
                </div>

                {/* Points list */}
                <ul className="flex flex-col gap-2 px-4 pb-5 pt-2">
                  {support.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#475569] leading-relaxed">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${support.checkColor}`} strokeWidth={3} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section: CTA Banner */}
        <div className="bg-[#f1f5f9] rounded-2xl border border-slate-200 p-4 sm:p-5 lg:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm relative overflow-hidden">
          {/* Subtle background glow for the CTA */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3.5 sm:gap-4.5 z-10">
            {/* Rocket Icon Container */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 relative">
              <div className="absolute inset-0 bg-blue-50 rounded-full opacity-50" />
              <Rocket className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 text-blue-600 relative z-10 -rotate-12" />
            </div>
            
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm sm:text-base font-black text-[#1e293b]">Ready to Launch Your Digital Marketing Career?</h3>
              <p className="text-slate-600 text-xs">Join EME Academy — where skills meet opportunity.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 shrink-0 z-10">
            <button
              onClick={() => {
                _this?.setCtaType?.("normal");
                _this?.setIsModalOpen?.(true);
              }}
              className="bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm"
            >
              Enrol Now →
            </button>
            <button
              onClick={() => {
                _this?.setCtaType?.("normal");
                _this?.setIsModalOpen?.(true);
              }}
              className="bg-white border-2 border-[#0052cc] text-[#0052cc] font-bold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" /> Free Counselling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
