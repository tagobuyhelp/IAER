"use client";

import { useState } from "react";
import { BookOpen, Lightbulb, Users, FlaskConical, Monitor, Utensils, Stethoscope, Plane, Rocket, Presentation } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "100+", label: "Research Publications", icon: BookOpen },
  { value: "Multiple", label: "Patents Filed in Technology & Business", icon: Lightbulb },
  { value: "10+", label: "Industry-collaborated Centres of Excellence", icon: Users },
  { value: "15+", label: "Specialized Labs across IT, Hospitality, Healthcare & Management", icon: FlaskConical },
];

const infrastructure = [
  {
    title: "IT Labs",
    desc: "Data Science, Cyber Security, Cloud Computing, AI",
    icon: Monitor,
    image: "/images/lab-it.jpg"
  },
  {
    title: "Hospitality LIVE Kitchen",
    desc: "Advanced Food Production Studio & Training Restaurants",
    icon: Utensils,
    image: "/images/lab-hospitality.jpg"
  },
  {
    title: "Medical Lab Tech",
    desc: "Advanced Diagnostic & Pathology Centres",
    icon: Stethoscope,
    image: "/images/lab-medical.jpg"
  },
  {
    title: "Aviation Simulation",
    desc: "Mock Aircraft Cabins for Crew Training",
    icon: Plane,
    image: "/images/lab-aviation.jpg"
  },
  {
    title: "Startup Launchpad",
    desc: "Incubation Centre & Tech Innovation Labs",
    icon: Rocket,
    image: "/images/lab-startup.jpg"
  },
  {
    title: "Digital Classrooms",
    desc: "Smart Learning Hubs & Entrepreneurship Centers",
    icon: Presentation,
    image: "/images/lab-classroom.jpg"
  }
];

export default function ResearchInnovationSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Pioneering Research & <br />
            <span className="text-primary">Innovation at IAER</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-border/50 pb-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium max-w-[200px] mx-auto">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Infrastructure Title */}
        <div className="mb-10 text-center">
           <h3 className="text-2xl font-bold text-foreground">IAER's State-of-the-Art Infrastructure Includes</h3>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructure.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-sm border hover:shadow-md transition-all h-64">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                 {/* Replace with <Image /> */}
                 <span className="text-muted-foreground/20 text-6xl font-bold opacity-20">{index + 1}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/20 backdrop-blur-md rounded-lg">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                </div>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
