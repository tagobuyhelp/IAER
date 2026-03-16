"use client";

import React, { useState } from "react";
import {
  Microscope,
  Cpu,
  Leaf,
  FlaskConical,
  Bot,
  Wifi,
  Printer,
  Award,
  FileText,
  Trophy,
  Lightbulb,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

export default function InnovationResearchSection() {
  const [activeTab, setActiveTab] = useState("focus");

  return (
    <div id="innovation-research" className="flex flex-col gap-12 py-16 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/research-and-innovation/Students_working_on_robotic_prototype.png"
          alt="Innovation Lab Background"
          fill
          className="object-cover opacity-5"
        />
      </div>
      {/* HEADER SECTION */}
      <section className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">
            Cutting-Edge
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">
            Innovation & Research
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
            Driving technological advancements and addressing global challenges through interdisciplinary research and state-of-the-art innovation labs.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "focus", label: "Research Focus", icon: Microscope },
              { id: "labs", label: "Innovation Labs", icon: FlaskConical },
              { id: "achievements", label: "Achievements", icon: Award },
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

          {/* RESEARCH FOCUS TAB */}
          {activeTab === "focus" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Bot,
                    title: "AI & Robotics",
                    desc: "Developing intelligent systems and autonomous robots.",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                    image: "/images/research-and-innovation/Students_working_on_robotic_prototype.png",
                  },
                  {
                    icon: Leaf,
                    title: "Sustainable Tech",
                    desc: "Green energy solutions and eco-friendly materials.",
                    color: "text-green-600",
                    bg: "bg-green-50",
                    image: "/images/research-and-innovation/Collaborative_brainstorming_in_a_study_hub.png",
                  },
                  {
                    icon: Cpu,
                    title: "IoT & Embedded",
                    desc: "Smart devices and connected infrastructure.",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                    image: "/images/research-and-innovation/Research_revie_in_a_collaborative_workspace.png",
                  },
                  {
                    icon: FlaskConical,
                    title: "Biotechnology",
                    desc: "Advanced research in genetics and healthcare.",
                    color: "text-red-600",
                    bg: "bg-red-50",
                    image: "/images/research-and-innovation/Students_working_in_advanced_research_lab.png",
                  },
                  {
                    icon: Globe,
                    title: "Data Science",
                    desc: "Big data analytics and predictive modeling.",
                    color: "text-cyan-600",
                    bg: "bg-cyan-50",
                    image: "/images/research-and-innovation/Collaborative_discussion_in_a_research_lab.png",
                  },
                  {
                    icon: Lightbulb,
                    title: "Entrepreneurship",
                    desc: "Business model innovation and market research.",
                    color: "text-yellow-600",
                    bg: "bg-yellow-50",
                    image: "/images/research-and-innovation/Student_founders_presenting_to_mentors.png",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="group rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
                    <div className="relative h-56 md:h-60">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                      <div className="absolute left-4 bottom-4">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-md shadow-sm", item.bg)}>
                          <item.icon className={cn("w-6 h-6", item.color)} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INNOVATION LABS TAB */}
          {activeTab === "labs" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Wifi,
                    title: "IoT & Smart Systems Lab",
                    desc: "Equipped with sensors, microcontrollers, and communication modules for building smart city solutions.",
                    tags: ["Arduino", "Raspberry Pi", "LoRaWAN"],
                    image: "/images/research-and-innovation/Research_revie_in_a_collaborative_workspace.png",
                  },
                  {
                    icon: Printer,
                    title: "Makerspace & 3D Printing",
                    desc: "A creative space for rapid prototyping using 3D printers, laser cutters, and CNC machines.",
                    tags: ["Prototyping", "CAD Design", "Fabrication"],
                    image: "/images/research-and-innovation/Students_working_on_robotic_prototype.png",
                  },
                  {
                    icon: Cpu,
                    title: "Advanced Computing Lab",
                    desc: "High-performance computing clusters for simulation, modeling, and AI training.",
                    tags: ["HPC", "GPU Clusters", "Simulation"],
                    image: "/images/research-and-innovation/Collaborative_discussion_in_a_research_lab.png",
                  },
                  {
                    icon: Bot,
                    title: "Robotics & Automation",
                    desc: "Industrial arms, drones, and mobile robots for research in automation and control.",
                    tags: ["ROS", "Automation", "Drones"],
                    image: "/images/research-and-innovation/Students_working_in_advanced_research_lab.png",
                  }
                ].map((lab, idx) => (
                  <div key={idx} className="rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all overflow-hidden">
                    <div className="relative h-60 md:h-80">
                      <Image
                        src={lab.image}
                        alt={lab.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                      <div className="absolute left-4 bottom-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                          <lab.icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{lab.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{lab.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {lab.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACHIEVEMENTS TAB */}
          {activeTab === "achievements" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    value: "8+",
                    label: "Patents Filed",
                    icon: FileText,
                    desc: "Innovation-driven ideas protected through intellectual property filings.",
                    image: "/images/research-and-innovation/Research_revie_in_a_collaborative_workspace.png",
                  },
                  {
                    value: "₹51 Lakhs",
                    label: "Research Grant",
                    icon: Trophy,
                    desc: "Research grant received from an industry body to support impactful projects.",
                    image: "/images/research-and-innovation/Mentoring_in_the_research_room.png",
                  },
                  {
                    value: "30+",
                    label: "Publications",
                    icon: Globe,
                    desc: "Research papers published in reputed journals and conference proceedings.",
                    image: "/images/research-and-innovation/Students_working_in_advanced_research_lab.png",
                  }
                ].map((stat, idx) => (
                  <div key={idx} className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all overflow-hidden">
                    <div className="relative h-56 md:h-60">
                      <Image
                        src={stat.image}
                        alt={stat.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute left-4 bottom-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                          <stat.icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-lg font-semibold text-gray-800 mb-3">{stat.label}</div>
                      <p className="text-sm text-gray-500">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
