"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ResearchOverviewSection() {
    const highlights = [
        "Interdisciplinary Research Projects",
        "Industry-Academia Collaboration",
        "Student-Led Innovation Labs",
        "Grant & Funding Support"
    ];

    return (
        <section id="research-overview" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <RevealOnScroll>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/research-and-innovation/Mentoring_in_the_research_room.png"
                                    alt="Research Discussion"
                                    width={800}
                                    height={600}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-sm font-medium uppercase tracking-wider mb-1 opacity-90">Innovation Hub</p>
                                    <p className="text-xl font-bold">Turning Ideas into Reality</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
                            <p className="text-4xl font-bold text-accent mb-1">100+</p>
                            <p className="text-sm text-gray-600 font-medium">Research Papers Published annually</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <RevealOnScroll delay={200}>
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                                About Research, Innovation & <span className="text-accent">Incubation</span> at IAER
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                At IAER, we believe that research and innovation are the cornerstones of academic excellence and societal progress. Our dedicated Research and Incubation Center acts as a catalyst for creative thinking, providing students and faculty with the resources, mentorship, and environment needed to explore new frontiers.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We foster an ecosystem where theoretical knowledge meets practical application. From cutting-edge laboratories to collaborative workspaces, every aspect of our infrastructure is designed to support the journey from ideation to implementation.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {highlights.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={500}>
                            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all">
                                Learn More
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
