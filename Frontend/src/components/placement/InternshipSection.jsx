"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { CheckCircle2, Building2 } from "lucide-react";

export default function InternshipSection() {
    return (
        <section id="internships" className="py-8 sm:py-10 md:py-16 bg-gray-900 text-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                    src="/images/ui/backgrounds/bgpattern.png"
                    alt="Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Internships */}
                <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-10 items-center mb-8 sm:mb-12 md:mb-16">
                    <RevealOnScroll>
                        <div className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/placement/placement-Internships-Live-Projects.webp"
                                alt="Internships at IAER"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-bold text-base sm:text-lg md:text-xl">Practical Industry Exposure</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <h2 className="text-[20px] sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-5">Internships & Live Projects</h2>
                        <p className="text-gray-300 mb-3 sm:mb-5 leading-relaxed text-[12px] sm:text-sm md:text-base">
                            Internships are a mandatory academic component across IAER programs. They bridge the gap between theory and practice, providing students with real-world experience before they graduate.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-6">
                            <div>
                                <h4 className="font-semibold text-accent mb-2 sm:mb-2.5 text-[12px] sm:text-sm md:text-base">Internship Outcomes</h4>
                                <ul className="space-y-2 text-[12px] sm:text-sm md:text-base">
                                    {["Practical industry exposure", "Application of classroom learning", "Stronger resumes & portfolios", "Improved placement readiness"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-accent mb-2 sm:mb-2.5 text-[12px] sm:text-sm md:text-base">Exposure Areas</h4>
                                <ul className="space-y-2 text-[12px] sm:text-sm md:text-base">
                                    {["Management & corporate services", "IT, analytics & emerging tech", "Healthcare & hospital admin", "Hospitality, tourism & aviation"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-300">
                                            <Building2 className="w-4 h-4 text-accent" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Industrial Visits */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        <RevealOnScroll>
                            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2.5 sm:mb-4">Industrial Visits & Corporate Exposure</h3>
                            <p className="text-gray-300 mb-3 sm:mb-5 text-[12px] sm:text-sm md:text-base">
                                IAER regularly organizes industrial visits and corporate interactions to connect theory with practice. These visits allow students to observe professional workflows, understand workplace environments, and build industry awareness.
                            </p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {["Real Workplace Environment", "Professional Workflows", "Industry Awareness", "Corporate Discipline"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-[11px] sm:text-sm text-gray-200 border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </RevealOnScroll>
                        
                        <RevealOnScroll delay={200}>
                            <div className="relative h-44 sm:h-52 md:h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/placement/Placement-Industrial-Visits-Corporate-Exposure.webp"
                                    alt="Industrial Visit"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
