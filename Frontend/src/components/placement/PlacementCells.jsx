"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Users, Briefcase, Target, FileText, MessageSquare, Award } from "lucide-react";

export default function PlacementCells() {
    return (
        <section id="placement-cell" className="py-10 sm:py-14 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
                    {/* TPC Section */}
                    <RevealOnScroll>
                        <div className="bg-white p-4 sm:p-6 lg:p-10 rounded-2xl shadow-md border-t-4 border-accent h-full">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="p-2.5 sm:p-3 bg-accent/10 rounded-xl">
                                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Training & Placement Cell (TPC)</h2>
                                    <p className="text-[10px] sm:text-sm text-gray-500 font-medium uppercase tracking-wider">Bridging Academics and Industry</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 mb-5 sm:mb-8 text-[12px] sm:text-sm md:text-base">
                                The Training & Placement Cell (TPC) functions as the primary interface between students, faculty, and recruiters. Placement preparation begins early in the program and continues until graduation.
                            </p>

                            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-[12px] sm:text-sm md:text-base">Core Responsibilities</h3>
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
                    </RevealOnScroll>

                    {/* CSD Section */}
                    <RevealOnScroll delay={200}>
                        <div className="bg-white p-4 sm:p-6 lg:p-10 rounded-2xl shadow-md border-t-4 border-primary h-full">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl">
                                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Career Services Department (CSD)</h2>
                                    <p className="text-[10px] sm:text-sm text-gray-500 font-medium uppercase tracking-wider">Building Careers, Not Just Job Offers</p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-5 sm:mb-8 text-[12px] sm:text-sm md:text-base">
                                The Career Services Department (CSD) focuses on long-term career readiness, not short-term placements. We focus on holistic professional development.
                            </p>

                            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-[12px] sm:text-sm md:text-base">Key Focus Areas</h3>
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
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
