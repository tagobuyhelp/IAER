"use client";

import Link from "next/link";
import { Building2, Users, Briefcase, BookOpen, Globe, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Campus Experience",
    href: "/admissions/campus-life",
    icon: Building2,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100"
  },
  {
    title: "Student Life",
    href: "/admissions/campus-life",
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    title: "Placements",
    href: "/placements",
    icon: Briefcase,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100"
  },
  {
    title: "Programs",
    href: "/programs",
    icon: BookOpen,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100"
  },
  {
    title: "Admissions",
    href: "/admissions/overview",
    icon: FileText,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    title: "Global Exposure",
    href: "/academics/overview",
    icon: Globe,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100"
  }
];

export default function QuickNavStrip() {
  return (
    <section className="relative z-30 -mt-6 sm:-mt-8 mb-0 container mx-auto px-4">
      <div className="bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-3 sm:p-4 md:p-6 overflow-hidden relative">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent blur-sm" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-sm" />
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4 relative z-10">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group flex flex-col items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 border border-transparent",
                "hover:border-teal-100 hover:shadow-sm"
              )}
            >
              <div className={cn(
                "p-2 sm:p-3 rounded-full transition-transform duration-300 group-hover:scale-110 shadow-sm",
                item.bg,
                item.color
              )}>
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-[12px] font-bold text-slate-600 group-hover:text-teal-700 text-center leading-tight">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
