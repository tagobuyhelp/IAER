"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  TrendingUp,
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Heart,
  Building,
  ShoppingCart,
  Users,
  Check,
} from "lucide-react";

const industries = [
  { name: "Fintech", icon: Building, color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Healthcare", icon: Heart, color: "bg-rose-50 text-rose-700 border-rose-200" },
  { name: "IT & Tech", icon: Code, color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { name: "E-Commerce", icon: ShoppingCart, color: "bg-amber-50 text-amber-700 border-amber-200" },
  { name: "Education", icon: GraduationCap, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
];

const rolesData = [
  {
    title: "Digital Marketing Manager",
    desc: "Oversee entire digital strategies and marketing campaigns.",
    salary: "₹6 – 12 LPA",
    growth: "+28%",
    img: "/assets/images/Digital_Marketing_Landing/images/digital-marketing-placement-success-corporate-professional.webp",
  },
  {
    title: "Performance Marketing Expert",
    desc: "Run ROI-driven ads and optimize conversion rates.",
    salary: "₹5 – 11 LPA",
    growth: "+35%",
    img: "/assets/images/Digital_Marketing_Landing/images/performance-marketing-course-social-media-ads-training.webp",
  },
  {
    title: "SEO & Content Strategist",
    desc: "Improve search rankings and drive organic traffic.",
    salary: "₹4 – 9 LPA",
    growth: "+24%",
    img: "/assets/images/Digital_Marketing_Landing/images/career-switch-success-digital-marketing-freelancer.webp",
  },
  {
    title: "Social Media Manager",
    desc: "Build brand presence across social platforms.",
    salary: "₹4 – 8 LPA",
    growth: "+22%",
    img: "/assets/images/Digital_Marketing_Landing/images/freelance-digital-marketing-success-work-from-home.webp",
  },
  {
    title: "AI Marketing Consultant",
    desc: "Implement AI tools to automate marketing processes.",
    salary: "₹6 – 15 LPA",
    growth: "+45%",
    img: "/assets/images/Digital_Marketing_Landing/images/ai-digital-marketing-course-social-media-automation-training.webp",
  },
];

const companyLogos = [
  { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", isExternal: true },
  { name: "Accenture", src: "/assets/icons/companies/AccentureIcon.svg" },
  { name: "TCS", src: "/assets/icons/companies/TCS_icon.svg" },
  { name: "Infosys", src: "/assets/icons/companies/Infosys_icon.svg" },
  { name: "Wipro", src: "/assets/icons/companies/WiproIcon.svg" },
  { name: "Cognizant", src: "/assets/icons/companies/CognizantIcon.svg" },
  { name: "Capgemini", src: "/assets/icons/companies/capgemini.svg" },
  { name: "Deloitte", src: "/assets/icons/companies/Deloitte2.svg" },
  { name: "PwC", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg", isExternal: true },
];

const successStories = [
  {
    name: "Ankita Roy",
    role: "Digital Marketer",
    company: "Placed at Deloitte",
    salary: "₹7.2 LPA",
    img: "/assets/images/Home/hero/Ankita_Biswas_HR.webp",
  },
  {
    name: "Souvik Das",
    role: "SEO Specialist",
    company: "Placed at TCS",
    salary: "₹6.5 LPA",
    img: "/assets/images/Home/hero/Sahil_Das.webp",
  },
  {
    name: "Rahul Sharma",
    role: "Performance Marketer",
    company: "Placed at Accenture",
    salary: "₹8.1 LPA",
    img: "/assets/images/Home/hero/Laiba_Noor_DM_Lead_Height.webp",
  },
];

const footerHighlights = [
  {
    title: "Industry-Relevant Curriculum",
    desc: "Learn skills that top agencies are hiring for.",
    icon: Briefcase,
  },
  {
    title: "Real-World Projects",
    desc: "Run live campaigns and build a strong portfolio.",
    icon: TrendingUp,
  },
  {
    title: "Expert Mentorship",
    desc: "Learn from industry experts and working professionals.",
    icon: Users,
  },
  {
    title: "Placement Assistance",
    desc: "100% support for resume, interviews & job referrals.",
    icon: Check,
  },
  {
    title: "AI-Powered Learning",
    desc: "Master AI tools and automation to stay ahead in your career.",
    icon: GraduationCap,
  },
];

export default function CareerScope({ _this }) {
  return (
    <section className="w-full bg-[#F8FAFF] py-8 sm:py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-8 md:gap-10">
        
        {/* Section Header & Pills */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#00A2E7] border border-sky-100 shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2E7] animate-pulse" />
              Future Prospects
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[32px] font-black text-[#232D63] leading-tight tracking-tight">
              Scope of a Professional <span className="text-[#00A2E7]">Digital Marketing Expert</span> in Kolkata
            </h2>
            <p className="text-[#64748b] text-xs sm:text-[15px] leading-relaxed max-w-3xl">
              Digital Marketing is essential in every industry, including fintech, IT, education, healthcare, and e-commerce. We are bridging the gap between growing industry demand and the shortage of highly skilled, AI-proficient marketing professionals.
            </p>
          </div>

          {/* Industry pills with icons */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold px-3 py-1.5 rounded-full border shadow-sm transition-transform hover:scale-[1.03] cursor-default ${ind.color}`}
                >
                  <IndIcon className="w-3.5 h-3.5" />
                  {ind.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Two-Column Grid: Left Copy, Right Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ─── LEFT COLUMN (6 Cols: Roles Table + Salary Banner) ─── */}
          <div className="lg:col-span-6 flex flex-col gap-5 w-full">
            
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-5 flex flex-col gap-3.5">
              <h3 className="text-sm sm:text-base font-black text-[#232D63]">
                Top In-Demand Digital Marketing Roles
              </h3>

              {/* Roles Table Header */}
              <div className="grid grid-cols-12 border-b border-slate-100 pb-2 text-[9px] sm:text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider px-2">
                <span className="col-span-8">Role &amp; Responsibility</span>
                <span className="col-span-2 text-center">Avg. Salary</span>
                <span className="col-span-2 text-right">Growth Outlook</span>
              </div>

              {/* Roles Rows */}
              <div className="flex flex-col">
                {rolesData.map((role, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center gap-2.5 py-2.5 border-b border-slate-50 last:border-0 hover:bg-sky-50/30 rounded-xl px-2 transition-colors group"
                  >
                    {/* Role photo thumbnail */}
                    <div className="col-span-3 sm:col-span-2 shrink-0">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                        <Image
                          src={role.img}
                          alt={role.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Role Title & Responsibility */}
                    <div className="col-span-5 sm:col-span-6 flex flex-col gap-0.5">
                      <span className="text-[11px] sm:text-xs font-extrabold text-[#232D63] leading-tight group-hover:text-[#00A2E7] transition-colors">
                        {role.title}
                      </span>
                      <span className="text-[9px] sm:text-[11px] text-[#64748b] leading-tight">
                        {role.desc}
                      </span>
                    </div>

                    {/* Average Salary */}
                    <div className="col-span-2 text-center text-[11px] sm:text-xs font-extrabold text-[#232D63] leading-none">
                      {role.salary}
                    </div>

                    {/* Growth Outlook Badge */}
                    <div className="col-span-2 text-right">
                      <span className="inline-flex flex-col items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg px-1.5 py-1 text-[9px] font-black leading-none shadow-sm min-w-[50px]">
                        <span className="flex items-center gap-0.5"><TrendingUp className="w-2.5 h-2.5" />{role.growth}</span>
                        <span className="text-[7px] text-emerald-500 font-bold mt-0.5 uppercase tracking-wide">Growth</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Average Salary Range Banner */}
            <div className="bg-gradient-to-r from-[#001029] to-[#232D63] text-white rounded-2xl p-4 sm:p-5 shadow-md border border-[#232D63]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                  <span className="text-lg font-black text-white">₹</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-wider text-white/50 font-bold">Average Salary Range</span>
                  <span className="text-xl sm:text-2xl font-black leading-none mt-1">₹4 – 12 LPA</span>
                  <span className="text-[9px] text-white/60 mt-0.5">as per industry standard</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                  <Users className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-black leading-none">750+</span>
                  <span className="text-[8px] text-white/60 font-bold uppercase tracking-wider mt-0.5">Students Placed</span>
                  <span className="text-[8px] text-white/50">Last Year</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 shrink-0 md:w-auto w-full">
                <button
                  onClick={() => {
                    _this?.setCtaType?.("normal");
                    _this?.setIsModalOpen?.(true);
                  }}
                  className="bg-[#00A2E7] hover:bg-[#0090ce] text-white font-bold py-2 px-3 rounded-lg text-[11px] sm:text-xs text-center transition-colors shadow-sm"
                >
                  Enrol Now →
                </button>
                <button
                  onClick={() => {
                    _this?.setCtaType?.("download");
                    _this?.setIsModalOpen?.(true);
                  }}
                  className="bg-white/10 hover:bg-white/15 text-white font-bold py-1.5 px-3 rounded-lg text-[11px] sm:text-xs text-center border border-white/20 transition-colors flex items-center justify-center gap-1"
                >
                  <Download className="w-3 h-3" /> Brochure
                </button>
              </div>
            </div>

          </div>

          {/* ─── RIGHT COLUMN (6 Cols: Insights Dashboard + Hiring + Stories) ─── */}
          <div className="lg:col-span-6 flex flex-col gap-5 w-full">
            
            {/* Block 1: Analytics Career Insights Dashboard */}
            <div className="bg-[#050D1A] text-white rounded-2xl p-4 flex flex-col gap-4.5 border border-slate-900 shadow-xl relative overflow-hidden">
              <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide border-b border-white/5 pb-2">
                Analytics Career Insights
              </h3>

              {/* Grid of charts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-b border-white/5 pb-3.5">
                
                {/* 1. Salary Growth */}
                <div className="flex flex-col gap-1.5 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <span className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Salary Growth (India)</span>
                  <span className="text-lg sm:text-xl font-black text-[#00A2E7]">+35%</span>
                  <span className="text-[8px] text-white/50 leading-tight">Increase in avg. salary in last 3 years</span>
                  {/* SVG line chart */}
                  <div className="h-9 mt-1 relative w-full">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path d="M 5 25 Q 35 15 65 10 T 95 3" fill="none" stroke="#00A2E7" strokeWidth="2.5" />
                      <circle cx="5" cy="25" r="2" fill="#00A2E7" />
                      <circle cx="35" cy="18" r="2" fill="#00A2E7" />
                      <circle cx="65" cy="10" r="2" fill="#00A2E7" />
                      <circle cx="95" cy="3" r="2" fill="#00A2E7" />
                    </svg>
                  </div>
                </div>

                {/* 2. Industry Demand */}
                <div className="flex flex-col gap-1.5 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <span className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Industry Demand</span>
                  <span className="text-lg sm:text-xl font-black text-sky-400">28.6%</span>
                  <span className="text-[8px] text-white/50 leading-tight">More job openings for data professionals</span>
                  {/* Small Bar charts */}
                  <div className="flex items-end gap-1 h-9 mt-1 w-full justify-between px-1">
                    {[
                      { yr: "21", h: "40%", val: "18.7%" },
                      { yr: "22", h: "55%", val: "21.4%" },
                      { yr: "23", h: "75%", val: "24.5%" },
                      { yr: "24", h: "100%", val: "28.6%" },
                    ].map((b, i) => (
                      <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
                        <span className="text-[6.5px] text-white/50 scale-90 mb-0.5">{b.val}</span>
                        <div
                          className="w-full rounded-t bg-gradient-to-t from-sky-600 to-sky-400"
                          style={{ height: b.h }}
                        />
                        <span className="text-[7.5px] text-white/40 mt-0.5 font-bold">{b.yr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Top Hiring Locations */}
                <div className="flex flex-col gap-1.5 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <span className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Top Hiring Locations</span>
                  <div className="flex items-center gap-2 mt-1">
                    {/* SVG Doughnut */}
                    <div className="w-9 h-9 shrink-0 relative">
                      <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                        <circle cx="18" cy="18" r="15.91" fill="none" stroke="#2563EB" strokeWidth="4" strokeDasharray="36 64" />
                        <circle cx="18" cy="18" r="15.91" fill="none" stroke="#38BDF8" strokeWidth="4" strokeDasharray="24 76" strokeDashoffset="-36" />
                        <circle cx="18" cy="18" r="15.91" fill="none" stroke="#A855F7" strokeWidth="4" strokeDasharray="18 82" strokeDashoffset="-60" />
                        <circle cx="18" cy="18" r="15.91" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="12 88" strokeDashoffset="-78" />
                        <circle cx="18" cy="18" r="15.91" fill="none" stroke="#E11D48" strokeWidth="4" strokeDasharray="10 90" strokeDashoffset="-90" />
                      </svg>
                    </div>
                    {/* Legend */}
                    <div className="flex flex-col gap-0.5 text-[7px] leading-tight text-white/70">
                      <div className="flex items-center gap-1"><span className="w-1.2 h-1.2 rounded-full bg-blue-600" /> Bangalore (36%)</div>
                      <div className="flex items-center gap-1"><span className="w-1.2 h-1.2 rounded-full bg-sky-400" /> Hyderabad (24%)</div>
                      <div className="flex items-center gap-1"><span className="w-1.2 h-1.2 rounded-full bg-purple-500" /> Kolkata (18%)</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Dashboard Ticker: Demand + Growth */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Popular Skills */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[8.5px] text-white/40 font-bold uppercase tracking-wider">Popular Skills in Demand</span>
                  <div className="grid grid-cols-6 gap-1.5">
                    {[
                      { src: "/assets/images/Data_Analytics_Landing/icons/mysql-Logo.svg", label: "SQL" },
                      { src: "/assets/images/Data_Analytics_Landing/icons/python-logo.svg", label: "Python" },
                      { src: "/assets/images/Data_Analytics_Landing/icons/icons8-power-bi-logo.svg", label: "PBI" },
                      { src: "/assets/images/Data_Analytics_Landing/icons/icons8-excel.svg", label: "Excel" },
                      { src: "/assets/images/Data_Analytics_Landing/icons/Tableau.svg", label: "Tableau" },
                      { isCustom: true, component: <span className="w-5 h-5 flex items-center justify-center font-black text-[8px] bg-purple-900/40 text-purple-400 rounded-md border border-purple-800/30">ML</span>, label: "ML" },
                    ].map((s, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-6 h-6 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center p-1">
                          {s.isCustom ? (
                            s.component
                          ) : (
                            <Image src={s.src} alt={s.label} width={15} height={15} className="object-contain" />
                          )}
                        </div>
                        <span className="text-[6.5px] text-white/40 font-medium leading-none">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Jobs Growth */}
                <div className="flex flex-col gap-1 bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                  <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">AI Jobs Growth</span>
                  <div className="flex items-baseline gap-1 leading-none">
                    <span className="text-lg font-black text-emerald-400">+52%</span>
                    <span className="text-[7.5px] text-emerald-400/80 font-bold">Growth in AI jobs</span>
                  </div>
                  {/* Small line SVG */}
                  <div className="h-5 mt-1 w-full">
                    <svg viewBox="0 0 100 20" className="w-full h-full">
                      <path d="M 5 18 Q 30 15 55 10 T 95 2" fill="none" stroke="#10B981" strokeWidth="2" />
                      <circle cx="95" cy="2" r="2.5" fill="#10B981" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Top Companies Hiring Our Students */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold text-[#232D63] uppercase tracking-wider">
                Top Companies Hiring Our Students
              </span>
              
              <div className="relative w-full overflow-hidden py-1">
                {/* Fade masks for visual premium feeling */}
                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#F8FAFF] via-[#F8FAFF]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#F8FAFF] via-[#F8FAFF]/80 to-transparent z-10 pointer-events-none" />
                
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes marquee-companies {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-marquee-companies {
                    display: flex;
                    width: max-content;
                    animation: marquee-companies 25s linear infinite;
                  }
                  .animate-marquee-companies:hover {
                    animation-play-state: paused;
                  }
                `}} />

                <div className="animate-marquee-companies gap-4">
                  {/* First set of logos */}
                  <div className="flex items-center gap-4 shrink-0">
                    {companyLogos.map((comp, idx) => (
                      <div
                        key={`comp1-${idx}`}
                        className="flex items-center justify-center p-2.5 bg-white rounded-xl border border-slate-100 shadow-sm h-11 w-28 hover:shadow-md hover:border-slate-200 transition-all cursor-default"
                      >
                        <Image
                          src={comp.src}
                          alt={comp.name}
                          width={80}
                          height={35}
                          className="object-contain max-h-6 w-auto h-auto"
                          unoptimized={comp.isExternal}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Duplicate set of logos for seamless looping */}
                  <div className="flex items-center gap-4 shrink-0" aria-hidden="true">
                    {companyLogos.map((comp, idx) => (
                      <div
                        key={`comp2-${idx}`}
                        className="flex items-center justify-center p-2.5 bg-white rounded-xl border border-slate-100 shadow-sm h-11 w-28 hover:shadow-md hover:border-slate-200 transition-all cursor-default"
                      >
                        <Image
                          src={comp.src}
                          alt={comp.name}
                          width={80}
                          height={35}
                          className="object-contain max-h-6 w-auto h-auto"
                          unoptimized={comp.isExternal}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3: Student Success Stories */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#232D63] uppercase tracking-wider">
                  Student Success Stories
                </span>
                <span className="text-[10px] font-black text-[#00A2E7] hover:underline cursor-pointer">
                  +747 More Successful Learners
                </span>
              </div>

              {/* Profiles Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {successStories.map((stud, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-white rounded-xl border border-slate-100 p-2 shadow-sm hover:shadow hover:border-slate-200 transition-all items-center text-center gap-1"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-100 shadow">
                      <Image
                        src={stud.img}
                        alt={stud.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-black text-slate-800 leading-tight">{stud.name}</span>
                      <span className="text-[8px] text-slate-500 font-bold leading-none">{stud.role}</span>
                      <span className="text-[8px] text-[#00A2E7] font-semibold mt-0.5">{stud.company}</span>
                    </div>
                    <div className="bg-sky-50 text-[#00A2E7] border border-sky-100 rounded px-1.5 py-0.5 text-[8px] font-black leading-none mt-0.5">
                      {stud.salary} Package
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Footer Features Row: 5 highlights side-by-side */}
        <div className="border-t border-slate-200/80 pt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {footerHighlights.map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div key={idx} className="flex gap-2 items-start">
                <div className="w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center text-[#00A2E7] shrink-0 border border-sky-100">
                  <FeatIcon className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-extrabold text-[#232D63] leading-snug">
                    {feat.title}
                  </span>
                  <span className="text-[9px] sm:text-[11px] text-[#64748b] leading-tight">
                    {feat.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
