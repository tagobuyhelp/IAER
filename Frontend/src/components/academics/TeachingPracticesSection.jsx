"use client";

import React, { useState } from "react";
import {
  Users,
  Zap,
  Target,
  Globe,
  Monitor,
  BookOpen,
  PenTool,
  Rocket,
  Briefcase,
  Network,
  Laptop,
  GraduationCap,
  Layers,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TeachingPracticesSection() {
  const [activeTab, setActiveTab] = useState("pedagogy");

  return (
    <div id="academics-teaching-practices" className="flex flex-col gap-12 py-16 bg-white">
      {/* HEADER SECTION */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">
            Teaching Methodology
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">
            Real-World Aligned Education
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
            We focus on conceptual clarity, ethical reasoning, and professional behavior. Our goal is to bridge the gap between classroom theory and industry reality.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "pedagogy", label: "Core Pedagogy", icon: BookOpen },
              { id: "experiential", label: "Experiential Learning", icon: Rocket },
              { id: "technology", label: "Tech-Driven", icon: Monitor },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                  activeTab === tab.id
                    ? "bg-[#100902] text-white border-[#100902] shadow-lg scale-105"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-gray-300"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto min-h-[400px]">
          
          {/* PEDAGOGY TAB */}
          {activeTab === "pedagogy" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Active Learning",
                    desc: "Engage through discussions & case analysis.",
                    color: "text-yellow-600",
                    bg: "bg-yellow-50",
                  },
                  {
                    icon: Layers,
                    title: "Project-Based",
                    desc: "Live assignments across multiple domains.",
                    color: "text-red-600",
                    bg: "bg-red-50",
                  },
                  {
                    icon: Users,
                    title: "Collaborative",
                    desc: "Teamwork & peer learning environments.",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: Monitor,
                    title: "Tech-Enabled",
                    desc: "Smart classrooms & digital simulations.",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: Target,
                    title: "Personalised",
                    desc: "Mentoring tailored to individual goals.",
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                  {
                    icon: Globe,
                    title: "Cross-Cultural",
                    desc: "Inclusive environment for diverse views.",
                    color: "text-cyan-600",
                    bg: "bg-cyan-50",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
                  >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors", item.bg)}>
                      <item.icon className={cn("w-6 h-6", item.color)} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#100902] mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENTIAL TAB */}
          {activeTab === "experiential" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-[#100902] rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative shadow-2xl">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                  {/* Left Column: Intro */}
                  <div className="lg:w-1/3">
                    <span className="text-accent font-semibold uppercase text-xs tracking-wider mb-2 block">
                      Hands-On Approach
                    </span>
                    <h2 className="text-3xl font-bold mb-4">Experiential Learning</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Experience is the best teacher. From simulations to live industry projects, we ensure every concept is reinforced with practical application.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
                      <GraduationCap className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">Theory meets Practice</span>
                    </div>
                  </div>

                  {/* Right Column: Grid */}
                  <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: BookOpen, title: "Case Studies", desc: "Real scenario analysis" },
                      { icon: PenTool, title: "Labs & Sims", desc: "Hands-on practice" },
                      { icon: Briefcase, title: "Live Projects", desc: "Industry assignments" },
                      { icon: Laptop, title: "MOOCs", desc: "NPTEL, Coursera, etc." },
                      { icon: Network, title: "Internships", desc: "Professional exposure" },
                      { icon: Users, title: "Workshops", desc: "Industry interaction" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                        <item.icon className="w-5 h-5 text-accent shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm text-white">{item.title}</h4>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TECHNOLOGY TAB */}
          {activeTab === "technology" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-blue-50/50 rounded-3xl p-8 lg:p-12 border border-blue-100 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none" />
                 
                 <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
                    <div className="lg:w-1/2">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Cpu className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#100902] mb-4">Tech-Driven Ecosystem</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We integrate Information and Communication Technology (ICT) into every aspect of learning. Our campuses are future-ready, ensuring students are comfortable with the tools of tomorrow.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Blended Learning", "E-Assessments", "Virtual Labs"].map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white text-blue-700 text-xs font-semibold rounded-full border border-blue-200 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100">
                                <Monitor className="w-8 h-8 text-blue-500 mb-3" />
                                <h4 className="font-bold text-[#100902]">Smart Classrooms</h4>
                                <p className="text-xs text-gray-500 mt-1">Interactive displays & digital aids</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100">
                                <Network className="w-8 h-8 text-indigo-500 mb-3" />
                                <h4 className="font-bold text-[#100902]">LMS Integration</h4>
                                <p className="text-xs text-gray-500 mt-1">24/7 access to resources</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100">
                                <Laptop className="w-8 h-8 text-cyan-500 mb-3" />
                                <h4 className="font-bold text-[#100902]">Digital Library</h4>
                                <p className="text-xs text-gray-500 mt-1">E-books & research journals</p>
                            </div>
                             <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100">
                                <Globe className="w-8 h-8 text-teal-500 mb-3" />
                                <h4 className="font-bold text-[#100902]">Global Connect</h4>
                                <p className="text-xs text-gray-500 mt-1">Virtual guest lectures</p>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
