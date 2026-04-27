"use client";

import { Users, Music, Trophy, Globe } from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useState, useEffect } from "react";

const heroImages = [
    "/images/campus-life/campus-life-hero-1.webp",
    "/images/campus-life/campus-life-hero-2.webp",
    "/images/campus-life/campus-life-hero-3.webp",
    "/images/campus-life/campus-life-hero-4.webp"
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image Slider */}
            {heroImages.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt="Campus Life at IAER"
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>
            ))}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <RevealOnScroll>
                        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent font-semibold text-xs sm:text-sm mb-4 sm:mb-6 border border-accent/30 backdrop-blur-sm">
                            Experience the Vibration
                        </span>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Campus Life at <span className="text-accent">IAER</span>
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll delay={400}>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                            A vibrant campus where learning meets life. Discover a dynamic blend of academic engagement, cultural expression, and lifelong friendships.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={600}>
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-white/80">
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                                <span className="text-xs sm:text-sm font-medium">Student Community</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                <Music className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                                <span className="text-xs sm:text-sm font-medium">Cultural Events</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                                <span className="text-xs sm:text-sm font-medium">Sports & Fitness</span>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
