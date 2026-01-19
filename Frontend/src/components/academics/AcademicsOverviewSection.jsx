"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Briefcase,
  Globe,
  Award,
  Zap,
  Layers,
  CheckCircle2,
  ClipboardCheck,
  LineChart,
  UserCheck,
  TrendingUp,
  BadgeCheck,
  PenTool,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AcademicsOverviewSection() {
  const [activeTab, setActiveTab] = useState("philosophy");

  return (
    <div id="academics-overview" className="relative py-16 bg-gray-50/50 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/academic/Classroom_discussion_with_engaged_students.png"
          alt="Classroom Discussion"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 flex flex-col gap-16">
      {/* SECTION 1: Strategic Framework (Tabs) */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              Academic Excellence
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mt-2 mb-6">
              Our Academic Framework
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              At IAER, we combine holistic development with industry relevance. Our
              academic structure is designed to ignite curiosity, build
              competence, and shape confident professionals.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "philosophy", label: "Core Philosophy", icon: Users },
              { id: "obe", label: "Outcome-Based (OBE)", icon: Target },
              { id: "focus", label: "Future Focus", icon: Globe },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                  activeTab === tab.id
                    ? "bg-[#100902] text-white border-[#100902] shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-100 border border-gray-100 min-h-[400px]">
            {/* Philosophy Content */}
            {activeTab === "philosophy" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#100902]">
                      Rooted in Values, Driven by Innovation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our philosophy is simple: Education should be transformative.
                      We move beyond rote learning to foster critical thinking,
                      ethical leadership, and practical skills.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start gap-4 p-4 bg-orange-50/50 rounded-xl">
                        <Users className="w-6 h-6 text-accent shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#100902]">Human Values</h4>
                          <p className="text-sm text-gray-600">Character building & social responsibility.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-blue-50/50 rounded-xl">
                        <Layers className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#100902]">Flexible Learning</h4>
                          <p className="text-sm text-gray-600">Learner-centric structures for exploration.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4 p-4 bg-purple-50/50 rounded-xl">
                      <Briefcase className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#100902]">Industry Exposure</h4>
                        <p className="text-sm text-gray-600">Practical learning via internships & projects.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-green-50/50 rounded-xl">
                      <Lightbulb className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#100902]">Innovation</h4>
                        <p className="text-sm text-gray-600">Encouraging creative problem-solving.</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#100902] to-gray-800 rounded-xl p-6 text-white mt-2">
                      <p className="font-medium italic">
                        "Education is not just about employability, but about empowering individuals to make a difference."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* OBE Content */}
            {activeTab === "obe" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#100902]">
                    Learning with Purpose
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                    Our Outcome-Based Education (OBE) ensures every program aligns with clear goals and industry needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Defined Outcomes", desc: "Clear academic goals.", icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Structured Curriculum", desc: "Real-world applicability.", icon: BookOpen, color: "text-green-600", bg: "bg-green-50" },
                    { title: "Smart Assessment", desc: "Measuring application.", icon: ClipboardCheck, color: "text-purple-600", bg: "bg-purple-50" },
                    { title: "Continuous Upgrade", desc: "Industry-led updates.", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-all group">
                      <div className={`w-12 h-12 mx-auto ${item.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <h4 className="font-bold text-[#100902] mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Focus Content */}
            {activeTab === "focus" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-2xl font-bold text-[#100902]">
                      Preparing You for a Dynamic Future
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Academics at IAER go beyond classroom instruction. We focus on ensuring students graduate with the adaptability required in a competitive global environment.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Strong Domain Knowledge",
                        "Interdisciplinary Learning",
                        "Career-Focused Education",
                        "Emerging Industry Trends",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="bg-[#100902] p-6 rounded-xl text-white">
                      <Globe className="w-8 h-8 text-blue-400 mb-4" />
                      <h4 className="font-bold mb-2">Global Perspective</h4>
                      <p className="text-sm text-gray-400">Broadening horizons through international exposure.</p>
                    </div>
                    <div className="bg-accent p-6 rounded-xl text-white">
                      <Zap className="w-8 h-8 text-white mb-4" />
                      <h4 className="font-bold mb-2">Emerging Tech</h4>
                      <p className="text-sm text-white/90">Curriculum aligned with evolving tech sectors.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2: Curriculum & Skills (Bento Grid) */}
      <section id="academics-curriculum" className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Title Block */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
                The Learning Path
              </span>
              <h2 className="text-3xl font-bold text-[#100902] mb-4">
                Curriculum & Skills
              </h2>
              <p className="text-gray-600 mb-6">
                A robust blend of core academics and practical certifications designed to make you industry-ready.
              </p>
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" /> Skill Certifications
                </h4>
                <p className="text-sm text-blue-800 mb-4">
                  Complementing degrees with value-added certifications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Industry-Aligned", "Practical Training", "Value Credentials"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Curriculum Components */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core Components */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-[#100902] mb-4">Core Components</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Core Subjects", desc: "Strong discipline foundation" },
                    { title: "Skill Enhancement", desc: "Employability boosting" },
                    { title: "Open Electives", desc: "Interdisciplinary exploration" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experiential Learning */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#100902] mb-4">Experiential</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Internships", desc: "Real-world exposure" },
                    { title: "Research Projects", desc: "Analytical thinking" },
                    { title: "Value Education", desc: "Ethics & integrity" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Evaluation System (Compact Horizontal) */}
      <section id="academics-evaluation" className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto bg-[#100902] rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

           <div className="flex flex-col lg:flex-row gap-10 lg:items-center relative z-10">
             <div className="lg:w-1/3">
               <span className="text-accent font-semibold uppercase text-xs tracking-wider">Assessment</span>
               <h2 className="text-3xl font-bold mt-2 mb-4">Robust Evaluation</h2>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Our system supports student growth through continuous assessment, ensuring fair, transparent, and learner-centric evaluation.
               </p>
               <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <BadgeCheck className="w-4 h-4 text-accent" />
                  <span>Transparent & Unbiased</span>
               </div>
             </div>

             <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Continuous", desc: "Regular progress checks", icon: LineChart, color: "text-green-400" },
                  { title: "Comprehensive", desc: "Knowledge & skills", icon: Layers, color: "text-blue-400" },
                  { title: "Growth Oriented", desc: "Feedback driven", icon: TrendingUp, color: "text-accent" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/5 p-5 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
                    <item.icon className={`w-6 h-6 ${item.color} mb-3`} />
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>
      </div>
    </div>
  );
}
