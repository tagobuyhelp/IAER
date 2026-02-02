"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlacementCTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <RevealOnScroll>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Your Career. Our Commitment.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        At IAER, employability is embedded into curriculum design, teaching methodology, and student development initiatives. Join us to become an industry-ready professional.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            href="https://admission.iaer.ac.in/"
                            target="_blank"
                            className="px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent-dark transition-all shadow-lg shadow-xl flex items-center gap-2"
                        >
                            Apply Now <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary border-2 border-gray-200 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all flex items-center gap-2"
                        >
                            Talk to Admissions
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
