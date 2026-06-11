"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Download,
  BarChart2,
  Cpu,
  Cloud,
  Briefcase,
  User,
  Award,
  FolderPlus,
  Users,
  Check,
  Sparkles,
  ShoppingCart,
  TrendingUp,
  Video,
} from "lucide-react";

const toolIcons = [
  { src: "/assets/images/Digital_Marketing_Landing/icons/facebook-ads-logo.png", name: "Facebook Ads" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/canva-logo.png", name: "Canva" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/hootsuite-ads.png", name: "Hootsuite" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/ahers-logo.png", name: "Ahrefs" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/buzzsumo-logo.png", name: "BuzzSumo" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/LinkedIn-logo.png", name: "LinkedIn" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/Reddit-Logo.png", name: "Reddit" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/Google_Ads_logo.png", name: "Google Ads" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/piktochart-logo.png", name: "Piktochart" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/instagram.png", name: "Instagram" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/OpenAI_Logo.png", name: "OpenAI" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/semrush-logo.png", name: "SEMrush" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/spinrewriter-logo.png", name: "SpinRewriter" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/Meta-Logo.png", name: "Meta" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/Moz_logo.png", name: "MOZ" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/majesticseo-logo.png", name: "Majestic SEO" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/WordPress-logo.png", name: "WordPress" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/google-trends-logo.png", name: "Google Trends" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/Google-Analytics-Logo.png", name: "Google Analytics" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/yoast-logo.png", name: "Yoast" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/ChatGpt-logo.png", name: "ChatGPT" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/mailchimp-logo.png", name: "Mailchimp" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/jetpack-logo.png", name: "Jetpack" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/WPForms-Logo.png", name: "WPForms" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/filmora-logo.png", name: "Filmora" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/grammarly-logo.png", name: "Grammarly" },
  { src: "/assets/images/Digital_Marketing_Landing/icons/Quora-Logo.png", name: "Quora" },
];

const topics = [
  {
    num: "01",
    category: "AI-Driven Digital Marketing Fundamentals",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "ChatGPT",
    icon: Sparkles,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    skills: [
      "Understand how AI is transforming digital marketing.",
      "Get introduced to key AI tools and their applications.",
    ],
  },
  {
    num: "02",
    category: "Building a Web Presence",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "WordPress",
    icon: Cloud,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    color: "bg-purple-50 text-purple-700 border-purple-100",
    skills: [
      "Learn to build landing pages, blogs, and microsites.",
      "Use WordPress and custom design templates.",
    ],
  },
  {
    num: "03",
    category: "E-commerce Fundamentals",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "WooCommerce",
    icon: ShoppingCart,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    skills: [
      "Set up online stores using WooCommerce and Shopify.",
      "Learn product listings, payment gateways, and funnel analytics.",
    ],
  },
  {
    num: "04",
    category: "Search Engine Optimization (SEO)",
    badge: "2 Topics",
    duration: "3 Weeks",
    projects: "2 Projects",
    tools: "Ahrefs",
    icon: BarChart2,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    color: "bg-rose-50 text-rose-700 border-rose-100",
    skills: [
      "Learn technical SEO, on-page/off-page strategies, and local SEO.",
      "Use tools like Google Search Console and Ahrefs.",
    ],
  },
  {
    num: "05",
    category: "Sales Funnel & Conversion Strategy",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "Funnels",
    icon: TrendingUp,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    skills: [
      "Understand customer journeys and build high-converting funnels.",
      "Use lead magnets, email sequences, and exit-intent popups.",
    ],
  },
  {
    num: "06",
    category: "Advanced Copywriting & Content Marketing",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "Canva",
    icon: Briefcase,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    skills: [
      "Master persuasive writing for blogs, ads, and landing pages.",
      "Build a content calendar and learn content repurposing.",
    ],
  },
  {
    num: "07",
    category: "WhatsApp & Email Marketing Automation",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "Mailchimp",
    icon: Cloud,
    iconColor: "text-sky-600",
    bgColor: "bg-sky-50",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    skills: [
      "Automate campaigns using tools like Mailchimp and WhatsApp API.",
      "Build subscriber lists and segment audiences effectively.",
    ],
  },
  {
    num: "08",
    category: "Video Sales Letters (VSLs)",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "Video",
    icon: Video,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-50",
    color: "bg-pink-50 text-pink-700 border-pink-100",
    skills: [
      "Script and produce engaging marketing videos.",
      "Understand voiceovers, visuals, and call-to-action placement.",
    ],
  },
  {
    num: "09",
    category: "Online Reputation Management (ORM)",
    badge: "2 Topics",
    duration: "1 Week",
    projects: "—",
    tools: "ORM",
    icon: Users,
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
    color: "bg-teal-50 text-teal-700 border-teal-100",
    skills: [
      "Manage reviews, ratings, and brand mentions.",
      "Learn crisis handling and review responses.",
    ],
  },
  {
    num: "10",
    category: "AI Tools for Marketing",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "ChatGPT",
    icon: Cpu,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
    color: "bg-cyan-50 text-cyan-700 border-cyan-100",
    skills: [
      "Use ChatGPT for ad copy, content generation, and customer support.",
      "Leverage AI for campaign optimization and audience insights.",
    ],
  },
  {
    num: "11",
    category: "Google My Business & Local Marketing",
    badge: "2 Topics",
    duration: "1 Week",
    projects: "1 Project",
    tools: "Google",
    icon: BarChart2,
    iconColor: "text-lime-600",
    bgColor: "bg-lime-50",
    color: "bg-lime-50 text-lime-700 border-lime-100",
    skills: [
      "Optimize listings, post updates, and collect reviews.",
      "Rank locally for location-specific queries.",
    ],
  },
  {
    num: "12",
    category: "WordPress for Marketers",
    badge: "2 Topics",
    duration: "2 Weeks",
    projects: "1 Project",
    tools: "WordPress",
    icon: User,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
    color: "bg-orange-50 text-orange-700 border-orange-100",
    skills: [
      "Design, edit, and maintain SEO-friendly websites.",
      "Use plugins for speed, security, and form integrations.",
    ],
  },
];

const highlights = [
  { label: "Real-world Ad Campaigns", color: "bg-blue-50 text-blue-600 border-blue-100", icon: FolderPlus },
  { label: "3-Month Internship", color: "bg-purple-50 text-purple-600 border-purple-100", icon: Award },
  { label: "Personal Mentors' Guidance", color: "bg-emerald-50 text-emerald-600 border-emerald-100", icon: Users },
  { label: "Interview Preparation", color: "bg-amber-50 text-amber-700 border-amber-100", icon: Briefcase },
  { label: "AI Marketing Strategies", color: "bg-rose-50 text-rose-600 border-rose-100", icon: Sparkles },
];

export default function SkillsCurriculum({ _this }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-16 border-t border-slate-100 overflow-hidden">
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
      <div className="max-w-[1380px] mx-auto px-[20px] lg:px-24 flex flex-col gap-6 sm:gap-8 md:gap-10 relative z-10">

        {/* Header Title & Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#00A2E7] border border-sky-100 shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A2E7] animate-pulse" />
              Full Curriculum
            </span>
            <h2 className="text-xl sm:text-2xl md:text-[32px] font-black text-[#232D63] leading-tight tracking-tight">
              What Skills You’ll Master in Our <span className="text-[#00A2E7]">Advanced Digital Marketing Course with AI</span>
            </h2>
            <p className="text-[#64748b] text-xs sm:text-[15px] leading-relaxed">
              A structured, industry-aligned curriculum that takes you from zero to job-ready across 12 learning tracks.
            </p>
          </div>
          <button
            onClick={() => {
              _this?.setCtaType?.("download");
              _this?.setIsModalOpen?.(true);
            }}
            className="flex items-center gap-2 border-2 border-[#232D63] text-[#232D63] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#232D63] hover:text-white transition-colors text-xs sm:text-sm self-start md:self-auto"
          >
            <Download className="w-3.5 h-3.5" /> Download Full Syllabus
          </button>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ─── LEFT COLUMN (5 Cols: Dashboard Card + Master Tools + Badges) ─── */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Overlay Dashboard Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] w-full">
              <Image
                src="/assets/images/Digital_Marketing_AI/digital-marketing-learning-journey.png"
                alt="Data Scientist Working"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-[#232D63]/20" />

              {/* Float Overlay 1: AI Assistant (Top Left) */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-lg max-w-[210px]">
                <div className="w-8 h-8 rounded-full bg-[#232D63]/5 flex items-center justify-center border border-slate-100 shrink-0">
                  <Cpu className="w-4 h-4 text-[#232D63]" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[10px] font-black text-[#232D63] leading-none">AI Assistant</span>
                  <span className="text-[8px] text-[#64748b] truncate leading-tight">Analyze customer churn prediction for Q4 data</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#00A2E7] flex items-center justify-center shrink-0 shadow-sm ml-auto">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-white rotate-45">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>

              {/* Float Overlay 2: Power BI Dashboard (Top Right) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl p-2.5 flex flex-col gap-1.5 shadow-lg min-w-[130px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-amber-50 rounded flex items-center justify-center">
                    <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-800 leading-none">Power BI Dashboard</span>
                    <span className="text-[7px] text-[#64748b] leading-none mt-0.5">Real-time Business Insights</span>
                  </div>
                </div>
                {/* Visual miniature chart */}
                <div className="flex items-end gap-1 h-5 justify-between px-1">
                  {[20, 40, 30, 60, 45, 80, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-t bg-sky-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              
            </div>

            {/* Key Industry Tools Grid */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col gap-3 shadow-sm">
              <h3 className="text-xs sm:text-sm font-black text-[#232D63] uppercase tracking-wider">
                Key Industry Tools You'll Master
              </h3>
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                {toolIcons.map((tool, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 group cursor-default"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-slate-200 transition-all p-2">
                      <Image
                        src={tool.src}
                        alt={tool.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold leading-none">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* highlights badges */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((feat, i) => {
                const FeatIcon = feat.icon;
                return (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold px-3 py-2 rounded-xl border shadow-sm ${feat.color}`}
                  >
                    <FeatIcon className="w-3.5 h-3.5" />
                    {feat.label}
                  </span>
                );
              })}
            </div>

          </div>

          {/* ─── RIGHT COLUMN (7 Cols: Your Learning Journey Timeline Accordion) ─── */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full">
            
            {/* Journey Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#232D63]">
                <Cpu className="w-3.5 h-3.5 text-[#00A2E7]" />
                Your Learning Journey
              </span>
              <span className="text-[11px] sm:text-xs font-black text-[#00A2E7]">
                12 Learning Tracks
              </span>
            </div>

            {/* Timeline Accordions */}
            <div className="relative flex flex-col gap-3.5 pl-7 sm:pl-9">
              
              {/* Vertical dotted timeline line */}
              <div className="absolute left-3.5 sm:left-4.5 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-sky-100 pointer-events-none" />

              {topics.map((topic, i) => {
                const TopicIcon = topic.icon;
                const isOpen = openIdx === i;

                return (
                  <div key={i} className="relative w-full">
                    
                    {/* Timeline bullet circle absolute */}
                    <div
                      className={`absolute -left-7 sm:-left-9 top-3.5 w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center font-black text-[9px] sm:text-[11px] border-2 shadow-sm transition-colors z-10 ${
                        isOpen
                           ? "bg-[#00A2E7] border-[#00A2E7] text-white"
                           : "bg-white border-sky-100 text-[#00A2E7]"
                      }`}
                    >
                      {topic.num}
                    </div>

                    {/* Accordion Card */}
                    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : i)}
                        className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between p-3.5 gap-3.5"
                      >
                        {/* Title and Icon */}
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${topic.bgColor}`}>
                            <TopicIcon className={`w-4 h-4 ${topic.iconColor}`} />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-xs sm:text-[15px] text-[#232D63] leading-tight">
                                {topic.category}
                              </span>
                              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full border leading-none ${topic.color}`}>
                                {topic.badge}
                              </span>
                            </div>
                            <span className="text-[9px] text-slate-500 leading-none mt-0.5 font-semibold">
                              Tools: {topic.tools}
                            </span>
                          </div>
                        </div>

                        {/* Track Specs (Chevron only) */}
                        <div className="flex items-center gap-4 sm:gap-5 self-start sm:self-auto pl-11.5 sm:pl-0">
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-350 shrink-0 ${
                              isOpen ? "rotate-180 text-[#00A2E7]" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {/* Expandable Topic list */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <ul className="px-4.5 pb-4 pt-1.5 bg-[#F8FAFF] flex flex-col gap-2 border-t border-slate-50">
                              {topic.skills.map((skill, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-[#475569] leading-relaxed">
                                  <span className="mt-1.5 shrink-0 w-1.2 h-1.2 rounded-full bg-[#00A2E7]" />
                                  <span>{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Timeline Bottom CTA Banner */}
            <div className="bg-sky-50 rounded-2xl border border-sky-100 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#00A2E7]/10 flex items-center justify-center border border-[#00A2E7]/20 shrink-0">
                  <Check className="w-4 h-4 text-[#00A2E7]" strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-black text-[#232D63]">From Learning to Earning – We've Got You Covered!</span>
                  <span className="text-[9px] sm:text-[11px] text-slate-500 font-semibold leading-tight">Industry-relevant curriculum, real projects and complete career support.</span>
                </div>
              </div>
              <button
                onClick={() => {
                  _this?.setCtaType?.("download");
                  _this?.setIsModalOpen?.(true);
                }}
                className="bg-[#232D63] hover:bg-[#1a2252] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shrink-0 transition-colors shadow-sm self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" /> Download Syllabus
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
