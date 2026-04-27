"use client";

import { Award, Sparkles, GraduationCap, Star, TrendingUp, Rocket, CheckCircle2, Users, Building2, Target } from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Hero Image Slider Component
function HeroImageSlider() {
    const [current, setCurrent] = useState(0);
    const heroImages = [
        "/images/students/arjun.jpg",
        "/images/students/riya.avif",
        "/images/hero_images/slider-6.jpg",
        "/images/campus/iaer-building.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
            {heroImages.map((src, index) => (
                <div
                    key={src}
                    className={cn(
                        "absolute inset-0 transition-all duration-1000 ease-in-out transform",
                        index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    )}
                >
                    <Image
                        src={src}
                        alt="Life at IAER"
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100902]/50 via-transparent to-transparent" />
                </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300 backdrop-blur-sm",
                            idx === current ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white"
                        )}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

// Auto-scrolling stats component
function AutoScrollingStats() {
    const [isPaused, setIsPaused] = useState(false);
    const stats = [
        { icon: Users, text: "Seamless Process" },
        { icon: Star, text: "Merit Scholarships" },
        { icon: CheckCircle2, text: "Online Application" },
        { icon: Building2, text: "World-Class Campus" },
        { icon: Target, text: "Career Support" },
        { icon: Rocket, text: "Global Exposure" },
    ];

    return (
        <div className="relative overflow-hidden">
            <div
                className={cn("flex gap-3 sm:gap-6", !isPaused && "animate-scroll")}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={isPaused ? { animationPlayState: "paused" } : {}}
            >
                {/* First set */}
                {stats.map((stat, index) => (
                    <div
                        key={`first-${index}`}
                        className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 whitespace-nowrap"
                    >
                        <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" aria-hidden="true" />
                        <span className="text-[11px] sm:text-xs font-medium text-gray-300">{stat.text}</span>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {stats.map((stat, index) => (
                    <div
                        key={`second-${index}`}
                        className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 whitespace-nowrap"
                    >
                        <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" aria-hidden="true" />
                        <span className="text-[11px] sm:text-xs font-medium text-gray-300">{stat.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Floating stats component
function FloatingStats() {
    const stats = [
        { value: "100%", label: "Placement Support", icon: TrendingUp },
        { value: "50+", label: "Courses", icon: GraduationCap },
        { value: "24/7", label: "Admission Help", icon: Users },
    ];

    return (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
            {stats.map((stat, index) => {
                const { ref, inView } = useInView({
                    threshold: 0.3,
                    triggerOnce: true,
                });
                return (
                    <div
                        key={stat.label}
                        ref={ref}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700",
                            "hover:bg-white/10 hover:border-accent/40 hover:scale-105 hover:shadow-lg",
                            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        )}
                        style={{ transitionDelay: `${0.8 + index * 0.2}s` }}
                    >
                        <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10">
                            <stat.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                        </div>
                        <div>
                            <div className="text-lg font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function AdmissionsHeroSection() {
    const { ref: badgeRef, inView: badgeInView } = useInView({ threshold: 0.3, triggerOnce: true });
    const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: descRef, inView: descInView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const bgImages = [
        "/images/admissions/Assisting_with_online_applications_in_office.png",
        "/images/admissions/College_admissions_reception_in_India.png",
        "/images/admissions/Meeting_with_the_admissions_counselor.png",
        "/images/admissions/Students_collaborating_in_bright_campus_space.png"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12 lg:pt-24 lg:pb-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {bgImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            currentBgIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={img}
                            alt="Admissions Background"
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-[#100902]/90" />
                    </div>
                ))}
                
                <div className="absolute inset-0 " />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <div
                            ref={badgeRef}
                            className={cn(
                                "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 transition-all duration-700 transform",
                                badgeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                        >
                            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-xs font-medium text-accent tracking-wide uppercase">
                                Admissions Open 2026
                            </span>
                        </div>

                        <h1
                            ref={titleRef}
                            className={cn(
                                "text-[28px] sm:text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 transition-all duration-700 delay-100 transform",
                                titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                        >
                            Shape Your Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-500">
                                At IAER
                            </span>
                        </h1>

                        <p
                            ref={descRef}
                            className={cn(
                                "text-[12px] sm:text-base lg:text-lg text-gray-400 mb-5 sm:mb-6 leading-relaxed max-w-xl transition-all duration-700 delay-200 transform",
                                descInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                        >
                            Join a community of innovators and leaders. Our industry-aligned programs are designed to launch your career on a global trajectory.
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <Link
                                href="https://admission.iaer.ac.in/"
                                target="_blank"
                                className="px-5 sm:px-8 h-11 sm:h-12 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-1 text-sm sm:text-base inline-flex items-center"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="#admissions-overview"
                                className="px-5 sm:px-8 h-11 sm:h-12 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all hover:-translate-y-1 text-sm sm:text-base inline-flex items-center"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Stats Carousel */}
                        <div className="border-t border-white/10 pt-4 sm:pt-6">
                            <p className="text-[11px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider mb-2 sm:mb-3">
                                Why Choose IAER
                            </p>
                            <AutoScrollingStats />
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:block h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />
                        <HeroImageSlider />
                        <FloatingStats />
                    </div>
                </div>
            </div>
        </section>
    );
}
