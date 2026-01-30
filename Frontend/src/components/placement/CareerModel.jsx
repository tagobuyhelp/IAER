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
        <section id="career-model" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Year-Wise Career Development Model</h2>
                        <p className="text-gray-600">A structured approach to grooming future professionals.</p>
                    </RevealOnScroll>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <RevealOnScroll key={index} delay={index * 150}>
                            <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full group">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                    {step.year}
                                </div>
                                
                                <div className="flex justify-center mb-6 mt-4">
                                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <step.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 text-center mb-6 group-hover:text-accent transition-colors">
                                    {step.title}
                                </h3>

                                <ul className="space-y-3">
                                    {step.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
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
