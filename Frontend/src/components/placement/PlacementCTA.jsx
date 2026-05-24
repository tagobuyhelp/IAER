"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PlacementCTA() {
    return (
        <section className="relative overflow-hidden py-10 sm:py-12 md:py-16 bg-[#0b1220] text-white">
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/placement/DSC_3194.webp"
                    alt=""
                    fill
                    className="object-cover opacity-30"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/75 to-[#0b1220]/55" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 shadow-2xl">
                        <h2 className="text-[20px] sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5">
                            Your Career. Our Commitment.
                        </h2>
                        <p className="text-[12px] sm:text-sm md:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto mb-5 sm:mb-8 md:mb-10">
                            At IAER, employability is embedded into curriculum design, teaching methodology, and student development initiatives. Join us to become an industry-ready professional.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                            <Link
                                href="https://admission.iaer.ac.in/"
                                target="_blank"
                                className="px-6 sm:px-8 h-10 sm:h-11 bg-accent text-white rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-accent-dark transition-all shadow-lg shadow-xl flex items-center gap-2"
                            >
                                Enquire Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 sm:px-8 h-10 sm:h-11 bg-white/10 text-white border border-white/15 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white/15 transition-all flex items-center gap-2"
                            >
                                Talk to Admissions
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
