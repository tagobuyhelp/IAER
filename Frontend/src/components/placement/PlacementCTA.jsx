"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlacementCTA() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <RevealOnScroll>
                    <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                        Your Career. Our Commitment.
                    </h2>
                    <p className="text-[12px] sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-12">
                        At IAER, employability is embedded into curriculum design, teaching methodology, and student development initiatives. Join us to become an industry-ready professional.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                        <Link 
                            href="https://admission.iaer.ac.in/"
                            target="_blank"
                            className="px-6 sm:px-8 h-11 sm:h-12 bg-accent text-white rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-accent-dark transition-all shadow-lg shadow-xl flex items-center gap-2"
                        >
                            Apply Now <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/contact"
                            className="px-6 sm:px-8 h-11 sm:h-12 bg-white text-primary border-2 border-gray-200 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:border-primary hover:text-primary transition-all flex items-center gap-2"
                        >
                            Talk to Admissions
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
