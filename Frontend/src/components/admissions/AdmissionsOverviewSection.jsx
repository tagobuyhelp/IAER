"use client";
import { Briefcase, Stethoscope, Globe, Cpu, GraduationCap, ShieldCheck, Plane, Hotel, Brain, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function AdmissionsOverviewSection() {
    return (
        <section id="admissions-overview" className="py-10 sm:py-14 lg:py-24 bg-white relative">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <Image 
                    src="/images/ui/backgrounds/bgpattern.png" 
                    alt="Background Pattern" 
                    fill 
                    className="object-cover"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <span className="text-accent font-semibold tracking-wide uppercase text-[11px] sm:text-sm mb-2 block">
                            Admissions Overview
                        </span>
                        <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#100902] mb-4 sm:mb-6">
                            Your Pathway to Excellence
                        </h2>
                        <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                            IAER’s programs are industry-aligned, skill-focused, and career-oriented while remaining financially accessible for students. We offer a diverse range of disciplines tailored to modern industry needs.
                        </p>
                    </div>

                    {/* Disciplines Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
                        {[
                            { icon: Briefcase, title: "Management", desc: "BBA & MBA programs focused on leadership.", image: "/images/programs/legacy/BBA.jpg" },
                            { icon: Stethoscope, title: "Healthcare", desc: "Advanced medical lab & hospital management.", image: "/images/programs/legacy/BMLT.jpg" },
                            { icon: Hotel, title: "Hospitality", desc: "Professional hotel & service industry training.", image: "/images/programs/B.Sc-in-Hospitality-&-Hotel-Administration.webp" },
                            { icon: Plane, title: "Aviation", desc: "Aviation & airport operations for global careers.", image: "/images/programs/Bachelor-of-Aviation-Hospitality-Services-Management.webp" },
                            { icon: Cpu, title: "Information Technology", desc: "BCA & modern computing programs.", image: "/images/programs/Bachelor-of-Computer-Application.webp" },
                            { icon: GraduationCap, title: "Data Science", desc: "Analytics, AI, and Big Data mastery.", image: "/images/programs/legacy/BSCDS.jpg" },
                            { icon: ShieldCheck, title: "Cyber Security", desc: "Network defense and ethical hacking.", image: "/images/programs/legacy/BSCCS.jpg" },
                            { icon: Brain, title: "Artificial Intelligence & Machine Learning", desc: "Build intelligent systems with modern AI/ML tools.", image: "/images/programs/BCA-in-Artificial-Intelligence-&-Machine-Learnng.webp" },
                            { icon: BarChart3, title: "Business Analytics", desc: "Data-driven decision making for business impact.", image: "/images/programs/Bachelor-of-Business-Analytics.webp" },
                        ].map((item, i) => (
                            <div key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                            <item.icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-[13px] sm:text-lg md:text-xl font-bold text-[#100902] mb-1.5 sm:mb-2">{item.title}</h3>
                                    <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Research & Innovation Highlights */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
                        <div className="bg-[#100902] text-white rounded-3xl p-4 sm:p-6 lg:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 relative z-10">Startup & Entrepreneurship</h3>
                            <p className="text-gray-400 mb-5 sm:mb-8 relative z-10 text-[12px] sm:text-sm md:text-base">
                                IAER encourages innovation, problem-solving, and industry-oriented entrepreneurship. Students are mentored to convert ideas into viable ventures.
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                                {[
                                    { label: "Student Startups", value: "15+" },
                                    { label: "Research Papers", value: "30+" },
                                    { label: "Innovation Labs", value: "2+" },
                                    { label: "Collaborations", value: "10+" },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white/10 rounded-xl p-3 sm:p-4 border border-white/5 backdrop-blur-sm">
                                        <div className="text-lg sm:text-2xl font-bold text-accent">{s.value}</div>
                                        <div className="text-[11px] sm:text-xs text-gray-300 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-3xl p-4 sm:p-6 lg:p-10 border border-orange-100">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#100902] mb-3 sm:mb-4">Research & Innovation</h3>
                            <p className="text-gray-600 mb-5 sm:mb-8 text-[12px] sm:text-sm md:text-base">
                                IAER promotes applied, interdisciplinary research integrated with teaching and industry engagement, fostering a culture of inquiry.
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { label: "Innovation Funding", value: "₹50L+" },
                                    { label: "Research Projects", value: "65+" },
                                    { label: "Research Centres", value: "2+" },
                                    { label: "Workshops & FDPs", value: "25+" },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white rounded-xl p-3 sm:p-4 border border-orange-100 shadow-sm">
                                        <div className="text-lg sm:text-2xl font-bold text-orange-600">{s.value}</div>
                                        <div className="text-[11px] sm:text-xs text-gray-600 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
