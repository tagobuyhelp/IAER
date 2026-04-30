"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Briefcase, Monitor, Stethoscope, Plane, Hotel } from "lucide-react";
import Image from "next/image";

const sectors = [
    { icon: Briefcase, title: "Management & Business", desc: "Corporate roles, HR, Finance, Marketing" },
    { icon: Monitor, title: "IT & Analytics", desc: "Software, Data Analysis, Tech Support" },
    { icon: Stethoscope, title: "Healthcare & Admin", desc: "Hospital Operations, Public Health, Admin" },
    { icon: Plane, title: "Aviation & Logistics", desc: "Airport Management, Cargo, Ground Staff" },
    { icon: Hotel, title: "Hospitality & Tourism", desc: "Hotel Management, Travel Services, Events" },
];

export default function SectorSection() {
    return (
        <section id="sectors" className="relative overflow-hidden py-8 sm:py-10 md:py-16 bg-[#143674] text-white">
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/placement/placement-mega-menu-photo.webp"
                    alt=""
                    fill
                    className="object-cover opacity-12"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#143674] via-[#143674]/85 to-[#143674]/70" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-10 items-center">
                    <RevealOnScroll>
                        <h2 className="text-[20px] sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-5">Sector-Wise Career Opportunities</h2>
                        <p className="text-white/90 text-[12px] sm:text-sm md:text-lg mb-4 sm:mb-6 leading-relaxed">
                            IAER graduates pursue careers across diverse industries. This multi-disciplinary strength allows students to align careers with their interests and market demand.
                        </p>
                        <button className="bg-white text-accent px-5 sm:px-8 h-10 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base">
                            Explore Programs
                        </button>
                    </RevealOnScroll>

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                        {sectors.map((sector, index) => (
                            <RevealOnScroll key={index} delay={index * 100} className={index === sectors.length - 1 ? "col-span-2 sm:col-span-1" : undefined}>
                                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                                    <sector.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2.5 sm:mb-4" />
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{sector.title}</h3>
                                    <p className="text-[11px] sm:text-sm text-white/80">{sector.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
