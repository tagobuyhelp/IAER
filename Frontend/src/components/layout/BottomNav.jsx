"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap, BookOpen, Briefcase, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Admissions",
    href: "/admissions/overview",
    icon: GraduationCap,
  },
  {
    title: "Academics",
    href: "/academics/overview",
    icon: BookOpen,
  },
  {
    title: "Placements",
    href: "/placements/overview",
    icon: Briefcase,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0601]/95 backdrop-blur-lg border-t border-white/10 lg:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors duration-200",
                isActive ? "text-accent" : "text-gray-400 hover:text-gray-200"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "fill-current")} />
              <span className="text-[10px] font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
