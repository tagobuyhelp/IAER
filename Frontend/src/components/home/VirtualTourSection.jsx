"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function VirtualTourSection() {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] lg:h-[600px] bg-black overflow-hidden group">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: "url('/images/campus/iaer-campus.png')" }} // Needs real image
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
        <h2 className="text-[26px] sm:text-4xl lg:text-6xl font-bold text-white mb-5 sm:mb-8 tracking-tight drop-shadow-xl">
          Step Inside IAER <br />
          <span className="text-amber-500">Virtually!</span>
        </h2>

        <Button
          variant="outline"
          size="lg"
          className="h-12 sm:h-16 px-5 sm:px-8 rounded-full border-2 border-white/50 bg-black/30 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm sm:text-lg font-semibold gap-3 sm:gap-4 group-hover:scale-110"
        >
          <PlayCircle className="h-6 w-6 sm:h-8 sm:w-8" />
          START 360° TOUR
        </Button>
      </div>
    </section>
  );
}
