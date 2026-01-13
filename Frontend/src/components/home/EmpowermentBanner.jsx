"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function EmpowermentBanner() {
  return (
    <section className="relative w-full h-[300px] lg:h-[400px] overflow-hidden flex items-center bg-slate-900">
      {/* Background Image Placeholder - Replace with actual image path */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/campus-wide.jpg')" }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-3xl lg:text-5xl font-bold text-white italic tracking-wide leading-tight">
            Education That <span className="text-white">Empowers</span>
          </h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary italic tracking-wide leading-tight">
            Opportunities That Transform
          </h2>
        </div>

        <div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-md uppercase tracking-wider">
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
