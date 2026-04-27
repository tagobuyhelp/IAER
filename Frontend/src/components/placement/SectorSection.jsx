"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Briefcase, Monitor, Stethoscope, Plane, Hotel } from "lucide-react";

const sectors = [
    { icon: Briefcase, title: "Management & Business", desc: "Corporate roles, HR, Finance, Marketing" },
    { icon: Monitor, title: "IT & Analytics", desc: "Software, Data Analysis, Tech Support" },
    { icon: Stethoscope, title: "Healthcare & Admin", desc: "Hospital Operations, Public Health, Admin" },
    { icon: Plane, title: "Aviation & Logistics", desc: "Airport Management, Cargo, Ground Staff" },
    { icon: Hotel, title: "Hospitality & Tourism", desc: "Hotel Management, Travel Services, Events" },
];

export default function SectorSection() {
    return (
        <section id="sectors" className="py-10 sm:py-14 md:py-20 bg-accent text-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-7 sm:gap-10 lg:gap-12 items-center">
                    <RevealOnScroll>
                        <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Sector-Wise Career Opportunities</h2>
                        <p className="text-white/90 text-[12px] sm:text-base md:text-lg mb-5 sm:mb-8 leading-relaxed">
                            IAER graduates pursue careers across diverse industries. This multi-disciplinary strength allows students to align careers with their interests and market demand.
                        </p>
                        <button className="bg-white text-accent px-5 sm:px-8 h-10 sm:h-11 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base">
                            Explore Programs
                        </button>
                    </RevealOnScroll>

                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {sectors.map((sector, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                                    <sector.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4" />
                                    <h3 className="text-base sm:text-xl font-bold mb-2">{sector.title}</h3>
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
