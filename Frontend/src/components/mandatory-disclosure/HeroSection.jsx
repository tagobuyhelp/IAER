"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/Mandatory/iaer-mandatory-disclosure-campus-header.png"
                    alt="IAER Campus Header"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <RevealOnScroll>
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/50 text-accent font-semibold text-sm mb-4 backdrop-blur-sm">
                        Transparency & Governance
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Mandatory Disclosure
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        Institute of Advance Education & Research (IAER)
                    </p>
                    <p className="text-gray-300 font-medium tracking-wide uppercase text-sm">
                        (As per UGC / MAKAUT / Regulatory Requirements)
                    </p>

                    <div className="mt-8 flex flex-col items-center">
                        <p className="text-sm text-gray-200/90 mb-3 font-medium">
                            Download Document
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href="/files/IMAS_Mandatoy_DIsclosure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors"
                            >
                                <FileText className="w-4 h-4 text-white/90" />
                                <span>Mandatory Disclosure PDF</span>
                                <ArrowRight className="w-4 h-4 text-white/80" />
                            </a>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
