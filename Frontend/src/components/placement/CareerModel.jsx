"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { BookOpen, Zap, Briefcase } from "lucide-react";

export default function CareerModel() {
    const steps = [
        {
            year: "Year 1",
            title: "Foundation & Professional Readiness",
            icon: BookOpen,
            items: [
                "Communication skills & workplace etiquette",
                "Personality development & confidence building",
                "Teamwork, adaptability & leadership basics"
            ]
        },
        {
            year: "Year 2",
            title: "Skill & Industry Orientation",
            icon: Zap,
            items: [
                "Domain-specific skill training",
                "Value-added certifications (program-linked)",
                "Aptitude, reasoning & problem-solving skills"
            ]
        },
        {
            year: "Final Phase",
            title: "Industry Immersion",
            icon: Briefcase,
            items: [
                "Structured internships & live projects",
                "Corporate mentoring & role-based exposure",
                "Mock interviews, group discussions & assessments"
            ]
        }
    ];

    return (
        <section className="py-10 sm:py-14 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <RevealOnScroll>
                        <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">Year-Wise Career Development Model</h2>
                        <p className="text-gray-600 text-[12px] sm:text-sm md:text-base">A structured approach to grooming future professionals.</p>
                    </RevealOnScroll>
                </div>

                <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
                    {steps.map((step, index) => (
                        <RevealOnScroll key={index} delay={index * 150}>
                            <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full group">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-sm font-bold shadow-md">
                                    {step.year}
                                </div>
                                
                                <div className="flex justify-center mb-4 sm:mb-6 mt-4">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center mb-4 sm:mb-6 group-hover:text-accent transition-colors">
                                    {step.title}
                                </h3>

                                <ul className="space-y-2.5 sm:space-y-3">
                                    {step.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-[12px] sm:text-sm md:text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
