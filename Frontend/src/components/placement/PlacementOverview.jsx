"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function PlacementOverview() {
    return (
        <section id="placement-overview" className="py-8 sm:py-10 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-10 items-center mb-8 sm:mb-10 md:mb-14">
                    <RevealOnScroll>
                        <div className="space-y-3 sm:space-y-5">
                            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-700 shadow-sm">
                                Career-first • Industry-ready
                            </div>
                            <h2 className="text-[20px] sm:text-2xl lg:text-4xl font-bold text-primary">
                                Bridging the Gap Between Education & Career
                            </h2>
                            <p className="text-gray-600 text-[12px] sm:text-sm md:text-lg leading-relaxed">
                                At the Institute of Advance Education & Research (IAER), placements are driven by a career-first academic model that integrates classroom learning with internships, live projects, skill training, and professional mentoring.
                            </p>
                            <p className="text-gray-600 text-[12px] sm:text-sm md:text-lg leading-relaxed">
                                Rather than one-time placement drives, IAER follows a continuous employability approach, ensuring students graduate with industry-relevant skills, professional confidence, and real-world exposure.
                            </p>
                        </div>
                    </RevealOnScroll>
                    
                    <RevealOnScroll delay={200}>
                        <div className="grid gap-4 sm:gap-5">
                            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                                <div className="grid grid-cols-12 gap-1.5 sm:gap-2 p-2 sm:p-3">
                                    <div className="col-span-7 relative h-[180px] sm:h-[220px] md:h-[260px] rounded-xl overflow-hidden">
                                        <Image
                                            src="/images/placement/KX2A3108.webp"
                                            alt="Student industry readiness session"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 520px, 100vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                                    </div>
                                    <div className="col-span-5 grid grid-rows-2 gap-1.5 sm:gap-2">
                                        <div className="relative rounded-xl overflow-hidden">
                                            <div className="relative h-[88px] sm:h-[108px] md:h-[124px]">
                                                <Image
                                                    src="/images/placement/DSC_3211.webp"
                                                    alt="Campus placement readiness activity"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 1024px) 320px, 100vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                            </div>
                                        </div>
                                        <div className="relative rounded-xl overflow-hidden">
                                            <div className="relative h-[88px] sm:h-[108px] md:h-[124px]">
                                                <Image
                                                    src="/images/placement/File 338.webp"
                                                    alt="Students collaborating during a professional session"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 1024px) 320px, 100vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-4 sm:left-6 top-4 sm:top-6 flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-900 shadow-sm">
                                        Internships
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-900 shadow-sm">
                                        Live Projects
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-900 shadow-sm">
                                        Mentoring
                                    </span>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 sm:p-5 md:p-7 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-3 sm:mb-5 border-b border-gray-200 pb-2.5 sm:pb-3">
                                    Placement Philosophy (2026–2030)
                                </h3>
                                <p className="text-gray-600 mb-3 sm:mb-5 text-[12px] sm:text-sm md:text-base">
                                    IAER provides structured placement assistance to eligible students across all Undergraduate, Postgraduate, and Diploma programs through its dedicated Training & Placement ecosystem.
                                </p>
                                <h4 className="font-semibold text-primary mb-2.5 sm:mb-3 text-[12px] sm:text-sm md:text-base">What Placement Assistance Means at IAER:</h4>
                                <ul className="space-y-2 sm:space-y-2.5 text-[12px] sm:text-sm md:text-base">
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
                                <p className="text-xs text-gray-400 mt-4 sm:mt-5 italic">
                                    Placement outcomes depend on student eligibility, performance, attendance, and industry demand, in line with university and regulatory guidelines.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
