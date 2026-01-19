"use client";

import { Award, Sparkles, GraduationCap, Star, TrendingUp, Rocket, CheckCircle2, Users, Building2, Target } from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Enhanced SVG Illustration Component for Academic Excellence
const AcademicExcellenceSVG = ({ className }) => (
    <svg
        viewBox="0 0 400 300"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        {/* Background gradient circles */}
        <circle cx="200" cy="150" r="180" fill="url(#heroGradient1)" opacity="0.1" />
        <circle cx="200" cy="150" r="140" fill="url(#heroGradient2)" opacity="0.15" />

        {/* Central graduation cap */}
        <path
            d="M150 100 L200 70 L250 100 L250 130 L200 160 L150 130 Z"
            fill="url(#heroGradient3)"
            opacity="0.9"
        />
        <rect x="190" y="130" width="20" height="40" rx="2" fill="hsl(219, 60%, 22%)" />

        {/* Books stacked */}
        <rect x="100" y="200" width="50" height="35" rx="3" fill="hsl(33, 93%, 54%)" opacity="0.8" />
        <rect x="105" y="205" width="40" height="25" fill="white" opacity="0.2" />
        <rect x="250" y="200" width="50" height="35" rx="3" fill="hsl(205, 81%, 63%)" opacity="0.8" />
        <rect x="255" y="205" width="40" height="25" fill="white" opacity="0.2" />

        {/* Light rays from cap */}
        <g stroke="hsl(33, 93%, 54%)" strokeWidth="2" opacity="0.4">
            <line x1="200" y1="70" x2="200" y2="30" />
            <line x1="200" y1="160" x2="200" y2="220" />
            <line x1="150" y1="130" x2="80" y2="130" />
            <line x1="250" y1="130" x2="320" y2="130" />
            <line x1="170" y1="100" x2="120" y2="60" />
            <line x1="230" y1="100" x2="280" y2="60" />
            <line x1="170" y1="160" x2="120" y2="200" />
            <line x1="230" y1="160" x2="280" y2="200" />
        </g>

        {/* Stars representing achievements */}
        <g opacity="0.7">
            <path
                d="M100 60 L102 65 L107 65 L103 68 L105 73 L100 70 L95 73 L97 68 L93 65 L98 65 Z"
                fill="hsl(33, 93%, 54%)"
            />
            <path
                d="M300 60 L302 65 L307 65 L303 68 L305 73 L300 70 L295 73 L297 68 L293 65 L298 65 Z"
                fill="hsl(205, 81%, 63%)"
            />
            <path
                d="M80 150 L81 153 L84 153 L82 155 L83 158 L80 156 L77 158 L78 155 L76 153 L79 153 Z"
                fill="hsl(33, 93%, 54%)"
            />
            <path
                d="M320 150 L321 153 L324 153 L322 155 L323 158 L320 156 L317 158 L318 155 L316 153 L319 153 Z"
                fill="hsl(205, 81%, 63%)"
            />
            <path
                d="M100 240 L101 243 L104 243 L102 245 L103 248 L100 246 L97 248 L98 245 L96 243 L99 243 Z"
                fill="hsl(33, 93%, 54%)"
            />
            <path
                d="M300 240 L301 243 L304 243 L302 245 L303 248 L300 246 L297 248 L298 245 L296 243 L299 243 Z"
                fill="hsl(205, 81%, 63%)"
            />
        </g>

        {/* Sparkle effects */}
        <circle cx="120" cy="80" r="3" fill="hsl(33, 93%, 54%)" opacity="0.6" />
        <circle cx="280" cy="80" r="3" fill="hsl(205, 81%, 63%)" opacity="0.6" />
        <circle cx="120" cy="220" r="3" fill="hsl(33, 93%, 54%)" opacity="0.6" />
        <circle cx="280" cy="220" r="3" fill="hsl(205, 81%, 63%)" opacity="0.6" />

        <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(219, 60%, 22%)" />
                <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
            </linearGradient>
            <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
                <stop offset="100%" stopColor="hsl(205, 81%, 63%)" />
            </linearGradient>
            <linearGradient id="heroGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(33, 93%, 54%)" />
                <stop offset="50%" stopColor="hsl(205, 81%, 63%)" />
                <stop offset="100%" stopColor="hsl(33, 93%, 54%)" />
            </linearGradient>
        </defs>
    </svg>
);

// Auto-scrolling achievements component
function AutoScrollingAchievements() {
    const [isPaused, setIsPaused] = useState(false);
    const achievements = [
        { icon: Award, text: "Best Student-Centric Institution" },
        { icon: Star, text: "AICTE Approved Programs" },
        { icon: CheckCircle2, text: "MAKAUT Affiliated" },
        { icon: Users, text: "500+ Industry Partners" },
        { icon: Building2, text: "12+ Program Domains" },
        { icon: Target, text: "3000+ Placements" },
    ];

    return (
        <div className="relative overflow-hidden">
            <div
                className={cn("flex gap-6", !isPaused && "animate-scroll")}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={isPaused ? { animationPlayState: "paused" } : {}}
            >
                {/* First set */}
                {achievements.map((achievement, index) => (
                    <div
                        key={`first-${index}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 whitespace-nowrap"
                    >
                        <achievement.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                        <span className="text-xs font-medium text-gray-300">{achievement.text}</span>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {achievements.map((achievement, index) => (
                    <div
                        key={`second-${index}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 whitespace-nowrap"
                    >
                        <achievement.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                        <span className="text-xs font-medium text-gray-300">{achievement.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Floating stats component
function FloatingStats() {
    const stats = [
        { value: "10+", label: "Years", icon: GraduationCap },
        { value: "3000+", label: "Placements", icon: TrendingUp },
        { value: "12+", label: "Programs", icon: Rocket },
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

export default function HeroSection() {
    const { ref: badgeRef, inView: badgeInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const [imageHovered, setImageHovered] = useState(false);
    const [svgAnimated, setSvgAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setSvgAnimated(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative bg-[#100902] text-white min-h-[520px] md:min-h-[560px] flex items-center py-6 lg:py-8 overflow-hidden">
            {/* Enhanced background gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3b1a05]/60 via-[#100902] to-accent/25 opacity-90" />
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.05]" />

            {/* Animated gradient blurs */}
            <div className="pointer-events-none absolute -top-24 -right-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="pointer-events-none absolute top-1/2 right-1/4 h-48 w-48 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />





            {/* Mobile/Tablet Building Image */}
            <div
                className={cn(
                    "md:hidden absolute right-4 bottom-6 w-48 h-32 rounded-xl overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-500",
                    imageHovered && "scale-105 shadow-2xl border-accent/40"
                )}
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
            >
                <Image
                    src="/images/iaer-building.jpg"
                    alt="IAER campus building"
                    fill
                    className={cn(
                        "object-cover transition-transform duration-500",
                        imageHovered && "scale-110"
                    )}
                    sizes="192px"
                />
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 transition-opacity duration-500",
                        imageHovered ? "opacity-100" : "opacity-0"
                    )}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                {/* Left Content - Text */}
                <div className="w-full lg:w-1/2 space-y-6">
                    {/* Auto-scrolling achievements */}
                    <div className="mb-6">
                        <AutoScrollingAchievements />
                    </div>

                    {/* Badge */}
                    <div
                        ref={badgeRef}
                        className={cn(
                            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-accent/10 border border-white/20 backdrop-blur-sm transition-all duration-700",
                            badgeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                    >
                        <Award className="w-4 h-4 text-accent" aria-hidden="true" />
                        <span className="text-xs font-bold tracking-wide uppercase text-white">
                            Best Student-Centric Institution in Eastern India
                        </span>
                        <Star className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h1
                        ref={titleRef}
                        className={cn(
                            "mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-700",
                            "bg-gradient-to-r from-white via-accent/90 to-white bg-clip-text text-transparent",
                            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        Recognised for Excellence &amp; Skill-Based Education
                    </h1>

                    {/* Description */}
                    <div
                        ref={descRef}
                        className={cn(
                            "mt-6 space-y-3 transition-all duration-700",
                            descInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                        style={{ transitionDelay: "0.4s" }}
                    >
                        <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
                            Institute of Advance Education &amp; Research (IAER) is a distinguished
                            higher-education institution committed to empowering ambitious learners through
                            industry-aligned programs, practical training, and a global outlook.
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                            Established over a decade ago, IAER is affiliated with MAKAUT and approved by AICTE,
                            offering nationally recognised degrees and career-ready skill development.
                        </p>
                    </div>

                    {/* Quick Stats - shown on mobile/tablet */}
                    <div
                        className={cn(
                            "mt-8 flex flex-wrap gap-4  transition-all duration-700",
                            descInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                        style={{ transitionDelay: "0.6s" }}
                    >
                        {[
                            { icon: GraduationCap, label: "10+ Years", text: "Of Excellence" },
                            { icon: TrendingUp, label: "3000+", text: "Placements" },
                            { icon: Rocket, label: "12+", text: "Programs" },
                        ].map((stat, index) => {
                            const { ref, inView } = useInView({
                                threshold: 0.3,
                                triggerOnce: true,
                            });
                            return (
                                <div
                                    key={stat.label}
                                    ref={ref}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500",
                                        "hover:bg-white/10 hover:border-accent/40 hover:scale-105",
                                        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                                    )}
                                    style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                                >
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10">
                                        <stat.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white">{stat.label}</div>
                                        <div className="text-xs text-gray-400">{stat.text}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* Right Content - Image */}
                <div className="hidden lg:block w-full lg:w-1/2 ">
                    {/* This is the sized, RELATIVE box */}
                    <div
                        className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-white/10 transition-transform duration-500 translate-y-0"
                        onMouseEnter={() => setImageHovered(true)}
                        onMouseLeave={() => setImageHovered(false)}
                    >
                        <Image
                            src="/images/iaer-building.jpg"
                            alt="IAER campus building"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            priority
                            className="absolute inset-0 w-full h-full object-cover "
                        />

                        {/* Overlay gradient on hover */}
                        <div
                            className={cn(
                                "absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 transition-opacity duration-500",
                                imageHovered ? "opacity-100" : "opacity-0"
                            )}
                        />

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/30 to-transparent" />
                    </div>
                </div>

            </div>


            {/* Decorative bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent" />
        </section>
    );
}
