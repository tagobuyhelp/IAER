"use client";

import React from "react";
import { Rocket, Users, Coins, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function StartupEntrepreneurshipSection() {
    const sections = [
        {
            title: "Incubation Support",
            icon: Rocket,
            color: "text-orange-600",
            bg: "bg-orange-50",
            points: [
                "Dedicated co-working spaces with high-speed internet.",
                "Access to advanced prototyping labs and testing facilities.",
                "Legal and compliance assistance for company registration.",
                "Business model validation and market research support."
            ],
        },
        {
            title: "Mentorship Network",
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50",
            points: [
                "1-on-1 sessions with successful startup founders.",
                "Industry-specific guidance from corporate leaders.",
                "Technical mentorship for product development.",
                "Regular workshops on leadership and team building."
            ],
        },
        {
            title: "Funding Opportunities",
            icon: Coins,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            points: [
                "Access to seed funding and angel investor networks.",
                "Assistance with government grant applications.",
                "Pitch competitions with cash prizes.",
                "Investor connect programs and demo days."
            ],
        },
    ];

    return (
        <section id="startup-entrepreneurship" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/research-and-innovation/Student_founders_presenting_to_mentors.png"
                    alt="Student Founders Presenting"
                    fill
                    className="object-cover opacity-5"
                />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">
                            Entrepreneurship
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Startup & Entrepreneurship
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We empower aspiring entrepreneurs to turn their innovative ideas into successful ventures through comprehensive support and resources.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {sections.map((section, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                            >
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-transform group-hover:scale-110", section.bg)}>
                                    <section.icon className={cn("w-7 h-7", section.color)} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                                <ul className="space-y-4 flex-grow">
                                    {section.points.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                                            <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", section.bg.replace('bg-', 'bg-current text-').replace('50', '500'))} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
