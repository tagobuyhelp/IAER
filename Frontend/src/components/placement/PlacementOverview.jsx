"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { CheckCircle2 } from "lucide-react";

export default function PlacementOverview() {
    return (
        <section id="placement-overview" className="py-10 sm:py-14 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-7 sm:gap-10 lg:gap-12 items-center mb-10 sm:mb-14 md:mb-20">
                    <RevealOnScroll>
                        <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
                            Bridging the Gap Between Education & Career
                        </h2>
                        <p className="text-gray-600 text-[12px] sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                            At the Institute of Advance Education & Research (IAER), placements are driven by a career-first academic model that integrates classroom learning with internships, live projects, skill training, and professional mentoring.
                        </p>
                        <p className="text-gray-600 text-[12px] sm:text-base md:text-lg leading-relaxed">
                            Rather than one-time placement drives, IAER follows a continuous employability approach, ensuring students graduate with industry-relevant skills, professional confidence, and real-world exposure.
                        </p>
                    </RevealOnScroll>
                    
                    <RevealOnScroll delay={200}>
                        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 border-b border-gray-200 pb-3 sm:pb-4">
                                Placement Philosophy (2026–2030)
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 text-[12px] sm:text-sm md:text-base">
                                IAER provides structured placement assistance to eligible students across all Undergraduate, Postgraduate, and Diploma programs through its dedicated Training & Placement ecosystem.
                            </p>
                            <h4 className="font-semibold text-primary mb-3 sm:mb-4 text-[12px] sm:text-sm md:text-base">What Placement Assistance Means at IAER:</h4>
                            <ul className="space-y-2.5 sm:space-y-3 text-[12px] sm:text-sm md:text-base">
                                {[
                                    "Career guidance and mentoring from early semesters",
                                    "Internship and live project facilitation",
                                    "Skill development aligned to industry needs",
                                    "Resume building, interview preparation & aptitude training",
                                    "Campus recruitment coordination with hiring partners"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-400 mt-6 italic">
                                Placement outcomes depend on student eligibility, performance, attendance, and industry demand, in line with university and regulatory guidelines.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
