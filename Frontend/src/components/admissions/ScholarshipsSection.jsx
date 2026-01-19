"use client";
import React from "react";
import { GraduationCap, Gift, Coins, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScholarshipsSection() {
    const scholarships = [
        { 
            icon: Gift, 
            title: "Early Bird Scholarship", 
            desc: "Limited-time financial benefit applied directly to the program fee for early applicants.",
            color: "text-pink-600",
            bg: "bg-pink-50"
        },
        { 
            icon: Award, 
            title: "Merit-Based", 
            desc: "Scholarships awarded to students with exceptional academic performance in qualifying exams.",
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        { 
            icon: Coins, 
            title: "Need-Based Support", 
            desc: "Financial assistance programs for eligible candidates to ensure education for all.",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        { 
            icon: GraduationCap, 
            title: "Specialized Aid", 
            desc: "Targeted scholarships for specific programs like Women in Tech and Sports Quota.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
    ];

    return (
        <section id="admissions-scholarships" className="py-16 lg:py-24 bg-white relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                            <Sparkles className="w-4 h-4" />
                            Financial Aid
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">
                            IAER Scholarships
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We believe financial constraints should not hinder talent. IAER offers various scholarship programs to recognize merit and support deserving students.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {scholarships.map((s, i) => (
                            <div key={i} className="group bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6", s.bg)}>
                                    <s.icon className={cn("w-7 h-7", s.color)} />
                                </div>
                                <h3 className="text-xl font-bold text-[#100902] mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-[#100902] rounded-2xl text-white text-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.05]"></div>
                         <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-3">Check Your Eligibility</h4>
                            <p className="text-gray-400 max-w-2xl mx-auto text-sm mb-6">
                                Scholarship availability and amounts are subject to institute policy and intake cycles. Contact our admissions office for the latest details.
                            </p>
                            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all">
                                Contact Admissions
                            </a>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
