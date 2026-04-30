"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { BookOpen, Zap, Briefcase } from "lucide-react";
import Image from "next/image";

export default function CareerModel() {
    const steps = [
        {
            year: "Year 1",
            title: "Foundation & Professional Readiness",
            icon: BookOpen,
            image: "/images/placement/DSC_3211.webp",
            imageAlt: "Foundation and readiness session",
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
            image: "/images/placement/KX2A3099.webp",
            imageAlt: "Skill training and career mentoring session",
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
            image: "/images/placement/placement-Internships-Live-Projects.webp",
            imageAlt: "Internships and live projects for industry immersion",
            items: [
                "Structured internships & live projects",
                "Corporate mentoring & role-based exposure",
                "Mock interviews, group discussions & assessments"
            ]
        }
    ];

    return (
        <section className="py-8 sm:py-10 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-7 sm:mb-10 md:mb-12">
                    <RevealOnScroll>
                        <h2 className="text-[20px] sm:text-2xl lg:text-4xl font-bold text-primary mb-2.5 sm:mb-3">Year-Wise Career Development Model</h2>
                        <p className="text-gray-600 text-[12px] sm:text-sm md:text-base">A structured approach to grooming future professionals.</p>
                    </RevealOnScroll>
                </div>

                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                    {steps.map((step, index) => (
                        <RevealOnScroll key={index} delay={index * 150}>
                            <div className="relative rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden group flex flex-col">
                                <div className="relative h-36 sm:h-44 md:h-48">
                                    <Image
                                        src={step.image}
                                        alt={step.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 360px, 100vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                                    <div className="absolute left-4 top-4">
                                        <div className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] sm:text-xs font-bold text-white backdrop-blur-sm">
                                            {step.year}
                                        </div>
                                    </div>
                                    <div className="absolute right-4 top-4">
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur-sm">
                                            <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-5 md:p-7 flex-1 flex flex-col">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-5 group-hover:text-accent transition-colors">
                                        {step.title}
                                    </h3>

                                    <ul className="space-y-2 sm:space-y-2.5">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-[12px] sm:text-sm md:text-base">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
