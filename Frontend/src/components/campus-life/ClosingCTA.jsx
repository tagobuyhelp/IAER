"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
    return (
        <section className="py-20 bg-[#100902] text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
             
            <div className="container mx-auto px-4 relative z-10 text-center">
                <RevealOnScroll>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                        A Campus That Builds More Than Careers
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Life at IAER is designed to create well-rounded individuals who excel academically while growing socially, culturally, and emotionally. Through vibrant campus engagement, students develop leadership skills, confidence, empathy, and adaptability.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-accent">
                            Experience Life at IAER
                        </h3>
                        <p className="text-xl font-medium mb-8">
                            Build Skills. Create Memories. Shape Your Future.
                        </p>
                        <Link 
                            href="/admissions/apply" 
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
                        >
                            Apply Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
