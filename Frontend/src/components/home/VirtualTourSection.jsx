"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function VirtualTourSection() {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] bg-black overflow-hidden group">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: "url('/images/iaer-campus.png')" }} // Needs real image
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-xl">
          Step Inside IAER <br />
          <span className="text-amber-500">Virtually!</span>
        </h2>

        <Button
          variant="outline"
          size="xl"
          className="h-20 px-8 rounded-full border-2 border-white/50 bg-black/30 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-xl font-semibold gap-4 group-hover:scale-110"
        >
          <PlayCircle className="h-10 w-10" />
          START 360° TOUR
        </Button>
      </div>
    </section>
  );
}
