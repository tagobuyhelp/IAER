"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

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
                </RevealOnScroll>
            </div>
        </section>
    );
}
