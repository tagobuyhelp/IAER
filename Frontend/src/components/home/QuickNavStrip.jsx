"use client";

import Link from "next/link";
import { Building2, Users, Briefcase, BookOpen, Globe, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Campus Experience",
    href: "/admissions/campus-life",
    icon: Building2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    title: "Student Life",
    href: "/admissions/campus-life",
    icon: Users,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  },
  {
    title: "Placements",
    href: "/placements",
    icon: Briefcase,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    title: "Programs",
    href: "/programs",
    icon: BookOpen,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
  {
    title: "Admissions",
    href: "/admissions/overview",
    icon: FileText,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20"
  },
  {
    title: "Global Exposure",
    href: "/academics/overview",
    icon: Globe,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20"
  }
];

export default function QuickNavStrip() {
  return (
    <section className="relative z-30 -mt-6 sm:-mt-8 mb-0 container mx-auto px-4">
      <div className="bg-[#0a0601]/80 backdrop-blur-xl border border-t-2 border-white rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group flex flex-col items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl transition-all duration-300 hover:bg-white/5 border border-transparent",
                "hover:border-white/10"
              )}
            >
              <div className={cn(
                "p-2 sm:p-3 rounded-full transition-transform duration-300 group-hover:scale-110",
                item.bg,
                item.color
              )}>
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-[12px] font-bold text-gray-300 group-hover:text-white text-center leading-tight">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
