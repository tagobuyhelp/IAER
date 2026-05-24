"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
    return (
        <section className="py-12 md:py-20 bg-[#100902] text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
             
            <div className="container mx-auto px-4 relative z-10 text-center">
                <RevealOnScroll>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
                        A Campus That Builds More Than Careers
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
                        Life at IAER is designed to create well-rounded individuals who excel academically while growing socially, culturally, and emotionally. Through vibrant campus engagement, students develop leadership skills, confidence, empathy, and adaptability.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-accent">
                            Experience Life at IAER
                        </h3>
                        <p className="text-base md:text-xl font-medium mb-6 md:mb-8">
                            Build Skills. Create Memories. Shape Your Future.
                        </p>
                        <Link 
                            href="https://admission.iaer.ac.in/"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-accent text-white rounded-xl font-bold text-sm md:text-base hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
                        >
                            Enquire Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
