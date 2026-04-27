"use client";
import React from "react";
import { GraduationCap, BookOpen, ClipboardCheck, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function EligibilitySection() {
    const sections = [
        {
            title: "Undergraduate Programs",
            icon: GraduationCap,
            color: "text-blue-600",
            bg: "bg-blue-50",
            points: [
                "10+2 or equivalent from a recognized board (CBSE/ISC/State Boards).",
                "Stream preference varies by program (Science/Commerce/Arts as applicable).",
                "Minimum 50% aggregate marks (relaxation for reserved categories as per norms).",
                "Merit-based selection with consideration for Early Bird Scholarships."
            ],
        },
        {
            title: "Postgraduate Diploma Programs",
            icon: BookOpen,
            color: "text-purple-600",
            bg: "bg-purple-50",
            points: [
                "Bachelor’s degree from a recognized university (UGC/AICTE approved).",
                "Preference for relevant background as per specialization (e.g., BBA/B.Tech for Management).",
                "Work experience is an added advantage for Executive PGDM programs.",
                "Valid score in Management Entrance Tests (CAT/MAT/XAT/JEMAT) is preferred."
            ],
        },
        {
            title: "General Requirements",
            icon: ClipboardCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            points: [
                "Valid identity and address proof (Aadhar Card/Voter ID/Passport).",
                "Original academic transcripts and passing certificates.",
                "Passport-size photographs (recent).",
                "Migration Certificate (if applicable)."
            ],
        },
    ];

    return (
        <section id="admissions-eligibility" className="py-10 sm:py-14 lg:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/admissions/College_admissions_reception_in_India.png"
                    alt="Admission Eligibility"
                    fill
                    className="object-cover opacity-10"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-7 sm:mb-10 md:mb-12">
                        <span className="text-accent font-semibold tracking-wide uppercase text-[11px] sm:text-sm mb-2 block">
                            Requirements
                        </span>
                        <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#100902] mb-4 sm:mb-6">
                            Admission Eligibility Criteria
                        </h2>
                        <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                            Ensure you meet the academic and documentation requirements for your chosen program before applying.
                        </p>
                    </div>

                    {/* Mobile: Horizontal Scroll, Desktop: Grid */}
                    <div className="flex items-stretch md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 sm:pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth scrollbar-none">
                        {sections.map((section, idx) => (
                            <div 
                                key={idx} 
                                className="min-w-[82vw] md:min-w-0 snap-center md:snap-align-none bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full"
                            >
                                <div className={cn("w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0", section.bg)}>
                                    <section.icon className={cn("w-5 h-5 sm:w-7 sm:h-7", section.color)} />
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#100902] mb-3 sm:mb-4">{section.title}</h3>
                                <ul className="space-y-2.5 sm:space-y-3 flex-grow text-[12px] sm:text-sm md:text-base">
                                    {section.points.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                                            <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", section.bg.replace('bg-', 'bg-current text-').replace('50', '500'))} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-7 sm:mt-10 md:mt-12 p-4 sm:p-6 bg-white border-l-4 border-accent shadow-sm rounded-r-xl max-w-4xl mx-auto">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#100902] mb-1">Important Note</h4>
                                <p className="text-[12px] sm:text-sm md:text-base text-gray-600">
                                    Program-specific eligibility may vary. Refer to individual program pages for detailed criteria. The institute reserves the right to update eligibility norms as per regulatory guidelines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
