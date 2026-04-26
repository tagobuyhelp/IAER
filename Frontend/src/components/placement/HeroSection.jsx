"use client";

import { Briefcase, TrendingUp, Handshake } from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useState, useEffect } from "react";

const heroImages = [
    "/images/placement/placement-hero-banner-1.webp",
    "/images/placement/placement-hero-banner-2.webp",
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
        <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
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
                        alt="Placements at IAER"
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
                </div>
            ))}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    <RevealOnScroll>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-sm">
                            Career First Academic Model
                        </span>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            PLACEMENTS AT <span className="text-accent">IAER</span>
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll delay={400}>
                        <p className="text-xl lg:text-2xl text-gray-200 mb-8 font-light">
                            Career Readiness • Industry Exposure • Placement Assistance
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={600}>
                        <div className="flex flex-wrap gap-4 text-white/80">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                <Briefcase className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">100% Assistance</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                <TrendingUp className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">Skill Training</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                <Handshake className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">Industry Mentors</span>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
