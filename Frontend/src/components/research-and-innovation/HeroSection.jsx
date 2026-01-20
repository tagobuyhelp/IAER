"use client";

import { Lightbulb, Rocket, Globe, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sliderImages = [
    "/images/research-and-innovation/Collaborative_brainstorming_in_a_study_hub.png",
    "/images/research-and-innovation/Collaborative_discussion_in_a_research_lab.png",
    "/images/research-and-innovation/Students_working_in_advanced_research_lab.png",
    "/images/research-and-innovation/Students_working_on_robotic_prototype.png"
];

const HeroSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % sliderImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { icon: Lightbulb, label: "Patents Filed", value: "50+" },
        { icon: Rocket, label: "Startups Incubated", value: "25+" },
        { icon: Globe, label: "Global Partners", value: "15+" },
    ];

    return (
        <section className="relative py-12 lg:py-28 overflow-hidden bg-[#100902]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('/images/research-and-innovation/Collaborative_brainstorming_in_a_study_hub.png')] opacity-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div ref={ref} className="max-w-3xl">
                        <RevealOnScroll>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4 lg:mb-6 border border-accent/20">
                                <Sparkles className="w-4 h-4" />
                                <span>Innovating for the Future</span>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4 lg:mb-6">
                                Research & <span className="text-accent">Innovation</span> at IAER
                            </h1>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-xl">
                                Fostering a dynamic ecosystem of discovery, entrepreneurship, and technological advancement. We empower minds to solve global challenges through cutting-edge research and incubation.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={600}>
                            <div className="flex flex-wrap gap-3 lg:gap-4 mb-8 lg:mb-12">
                                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-accent text-white rounded-xl font-bold shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm lg:text-base">
                                    Explore Projects <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5" />
                                </button>
                                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-transparent text-white border-2 border-white/10 rounded-xl font-bold hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 text-sm lg:text-base">
                                    Incubation Center
                                </button>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={800}>
                            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-white/10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-center gap-2 mb-1 lg:mb-2 text-gray-400 group-hover:text-accent transition-colors">
                                            <stat.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                                            <span className="text-xs lg:text-sm font-medium">{stat.label}</span>
                                        </div>
                                        <div className="text-xl lg:text-3xl font-bold text-white group-hover:scale-105 origin-left transition-transform">
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Image Slider */}
                    <div className={cn(
                        "relative h-[280px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-1000 delay-300",
                        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    )}>
                        {sliderImages.map((src, index) => (
                            <div
                                key={src}
                                className={cn(
                                    "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                                    index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                                )}
                            >
                                <Image
                                    src={src}
                                    alt={`Research and Innovation ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#100902]/80 via-transparent to-transparent" />
                            </div>
                        ))}
                        
                        {/* Slider Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {sliderImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        index === currentImage ? "w-8 bg-accent" : "bg-white/50 hover:bg-white"
                                    )}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
