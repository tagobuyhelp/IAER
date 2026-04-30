"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Users, Briefcase, Target, FileText, MessageSquare, Award } from "lucide-react";
import Image from "next/image";

export default function PlacementCells() {
    return (
        <section id="placement-cell" className="py-8 sm:py-10 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {/* TPC Section */}
                    <RevealOnScroll>
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden h-full flex flex-col">
                            <div className="relative h-36 sm:h-44 md:h-72">
                                <Image
                                    src="/images/placement/File 338.webp"
                                    alt="Placement planning and industry interaction"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 520px, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
                                <div className="absolute left-4 sm:left-5 bottom-4 sm:bottom-5">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] sm:text-xs font-semibold text-white backdrop-blur-sm">
                                        <Users className="w-4 h-4 text-accent" />
                                        Training & Placement Cell (TPC)
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:p-5 lg:p-8 flex-1 flex flex-col">
                                <p className="text-gray-600 mb-4 sm:mb-6 text-[12px] sm:text-sm md:text-base">
                                    The Training & Placement Cell (TPC) functions as the primary interface between students, faculty, and recruiters. Placement preparation begins early in the program and continues until graduation.
                                </p>

                                <h3 className="font-bold text-gray-900 mb-2.5 sm:mb-3 text-[12px] sm:text-sm md:text-base">Core Responsibilities</h3>
                                <div className="grid gap-3 sm:gap-4 text-[12px] sm:text-sm md:text-base">
                                    {[
                                        { icon: Target, text: "Career planning & employability mapping" },
                                        { icon: Briefcase, text: "Internship coordination & live projects" },
                                        { icon: MessageSquare, text: "Corporate interaction & campus recruitment" },
                                        { icon: Award, text: "Soft skills, aptitude & domain training" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-100">
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                            <span className="text-gray-700 font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* CSD Section */}
                    <RevealOnScroll delay={200}>
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden h-full flex flex-col">
                            <div className="relative h-36 sm:h-44 md:h-72">
                                <Image
                                    src="/images/placement/mock_interviews.png"
                                    alt="Mock interview and career readiness"
                                    fill
                                    className=""
                                    sizes="(min-width: 768px) 520px, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
                                <div className="absolute left-4 sm:left-5 bottom-4 sm:bottom-5">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] sm:text-xs font-semibold text-white backdrop-blur-sm">
                                        <Target className="w-4 h-4 text-white" />
                                        Career Services Department (CSD)
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:p-5 lg:p-8 flex-1 flex flex-col">
                                <p className="text-gray-600 mb-4 sm:mb-6 text-[12px] sm:text-sm md:text-base">
                                    The Career Services Department (CSD) focuses on long-term career readiness, not short-term placements. We focus on holistic professional development.
                                </p>

                                <h3 className="font-bold text-gray-900 mb-2.5 sm:mb-3 text-[12px] sm:text-sm md:text-base">Key Focus Areas</h3>
                                <div className="grid gap-3 sm:gap-4 text-[12px] sm:text-sm md:text-base">
                                    {[
                                        { icon: Users, text: "One-to-one career counselling" },
                                        { icon: FileText, text: "Resume & professional profile development" },
                                        { icon: MessageSquare, text: "Interview readiness & mock assessments" },
                                        { icon: Award, text: "Industry-aligned skill programs" },
                                        { icon: Target, text: "Recruiter coordination & readiness tracking" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-100">
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                            <span className="text-gray-700 font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
