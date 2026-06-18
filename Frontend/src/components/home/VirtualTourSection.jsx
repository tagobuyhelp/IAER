"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function VirtualTourSection() {
  return (
    <section className="relative w-full h-[560px] sm:h-[420px] lg:h-[600px] bg-slate-900 overflow-hidden group">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
        style={{ backgroundImage: "url('/images/about/building-image-about-hero.webp')" }} // Needs real image
      >
        <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/60 transition-colors duration-700" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
        <h2 className="text-[26px] sm:text-4xl lg:text-6xl font-black text-white mb-5 sm:mb-8 tracking-tight drop-shadow-xl leading-tight">
          Step Inside IAER <br />
          <span className="text-teal-400">Virtually!</span>
        </h2>

        <Button
          variant="outline"
          size="lg"
          className="h-12 sm:h-16 px-6 sm:px-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-teal-600 hover:border-teal-500 transition-all duration-500 text-sm sm:text-lg font-bold gap-3 sm:gap-4 group-hover:scale-105 shadow-xl hover:shadow-teal-600/30"
        >
          <PlayCircle className="h-6 w-6 sm:h-8 sm:w-8" />
          START 360° TOUR
        </Button>
      </div>
    </section>
  );
}
