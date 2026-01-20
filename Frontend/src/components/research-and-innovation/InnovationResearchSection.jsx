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
                  },
                  {
                    icon: Leaf,
                    title: "Sustainable Tech",
                    desc: "Green energy solutions and eco-friendly materials.",
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                  {
                    icon: Cpu,
                    title: "IoT & Embedded",
                    desc: "Smart devices and connected infrastructure.",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: FlaskConical,
                    title: "Biotechnology",
                    desc: "Advanced research in genetics and healthcare.",
                    color: "text-red-600",
                    bg: "bg-red-50",
                  },
                  {
                    icon: Globe,
                    title: "Data Science",
                    desc: "Big data analytics and predictive modeling.",
                    color: "text-cyan-600",
                    bg: "bg-cyan-50",
                  },
                  {
                    icon: Lightbulb,
                    title: "Entrepreneurship",
                    desc: "Business model innovation and market research.",
                    color: "text-yellow-600",
                    bg: "bg-yellow-50",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", item.bg)}>
                      <item.icon className={cn("w-6 h-6", item.color)} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
                      tags: ["Arduino", "Raspberry Pi", "LoRaWAN"]
                    },
                    {
                      icon: Printer,
                      title: "Makerspace & 3D Printing",
                      desc: "A creative space for rapid prototyping using 3D printers, laser cutters, and CNC machines.",
                      tags: ["Prototyping", "CAD Design", "Fabrication"]
                    },
                    {
                      icon: Cpu,
                      title: "Advanced Computing Lab",
                      desc: "High-performance computing clusters for simulation, modeling, and AI training.",
                      tags: ["HPC", "GPU Clusters", "Simulation"]
                    },
                    {
                      icon: Bot,
                      title: "Robotics & Automation",
                      desc: "Industrial arms, drones, and mobile robots for research in automation and control.",
                      tags: ["ROS", "Automation", "Drones"]
                    }
                  ].map((lab, idx) => (
                    <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                          <lab.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
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
                     value: "50+",
                     label: "Patents Filed",
                     icon: FileText,
                     desc: "Innovative solutions protected by intellectual property rights."
                   },
                   {
                     value: "₹2Cr+",
                     label: "Research Grants",
                     icon: Trophy,
                     desc: "Funding received from government and industry bodies."
                   },
                   {
                     value: "100+",
                     label: "Publications",
                     icon: Globe,
                     desc: "Research papers published in reputed international journals."
                   }
                 ].map((stat, idx) => (
                   <div key={idx} className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                     <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                       <stat.icon className="w-8 h-8" />
                     </div>
                     <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                     <div className="text-lg font-semibold text-gray-800 mb-3">{stat.label}</div>
                     <p className="text-sm text-gray-500">{stat.desc}</p>
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
