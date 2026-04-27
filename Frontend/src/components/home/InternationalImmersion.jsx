"use client";

import { Globe } from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";


const countries = [
    {
        name: "Russia",
        image: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
        name: "Singapore",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
        name: "Thailand",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
        name: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
        name: "Malaysia",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
        name: "England",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&h=500&q=80"
    },
];

export default function InternationalImmersion() {
    return (
        <section className="py-10 sm:py-14 md:py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-[0_40px_120px_rgba(0,0,0,0.9)] px-4 py-7 sm:px-6 sm:py-10 md:px-10 md:py-12 backdrop-blur-xl">
                    <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
                    <div className="pointer-events-none absolute -left-24 bottom-[-6rem] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

                    <div className="relative flex flex-col lg:flex-row items-start gap-7 sm:gap-10 lg:gap-16">

                    {/* Left Content */}
                    <div className="flex-1 space-y-5 sm:space-y-8 lg:space-y-10 lg:sticky lg:top-24">
                        <RevealOnScroll>
                            <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 text-neutral-950 shadow-xl shadow-emerald-500/20">
                                <div className="p-1.5 bg-white/70 rounded-full border border-white/80">
                                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-700">
                                        International Immersion
                                    </span>
                                    <h2 className="text-[14px] md:text-xl font-black tracking-tight uppercase">
                                        Global Experiences With IAER
                                    </h2>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <p className="text-neutral-100/90 text-[12px] sm:text-base md:text-lg leading-relaxed text-justify font-medium">
                                IAER&apos;s International Immersion Program gives students global exposure through partnerships with top universities in Thailand, UAE, Malaysia, Russia and Singapore. Students gain international learning experience through academic exchange, global internships, industry visits, and cultural immersion. The program builds a strong understanding of global business practices and enhances employability with real-world international perspectives.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 shadow-lg shadow-black/40">
                                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300 mb-1">
                                        Countries
                                    </p>
                                    <p className="text-lg sm:text-xl md:text-2xl font-black text-white">
                                        6+
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] text-neutral-200/80 mt-1">
                                        Global destinations for immersion.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 shadow-lg shadow-black/40">
                                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-sky-300 mb-1">
                                        Experiences
                                    </p>
                                    <p className="text-lg sm:text-xl md:text-xl font-black text-white">
                                        Academic &amp; Industry
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] text-neutral-200/80 mt-1">
                                        Exchange, internships &amp; visits.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 shadow-lg shadow-black/40 col-span-2 sm:col-span-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-violet-300 mb-1">
                                        Focus
                                    </p>
                                    <p className="text-lg sm:text-xl md:text-xl font-black text-white">
                                        Global Careers
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] text-neutral-200/80 mt-1">
                                        Build international perspectives.
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Grid */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                            {countries.map((country, index) => (
                                <RevealOnScroll key={country.name} delay={index * 120}>
                                    <div
                                        className={`group relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl shadow-black/60 ring-1 ring-white/5 hover:ring-2 hover:ring-emerald-400/70 transition-all duration-700 ${
                                            index % 3 === 1 ? "sm:translate-y-4" : ""
                                        }`}
                                    >
                                        <Image
                                            src={country.image}
                                            alt={country.name}
                                            fill
                                            className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        {/* Glassmorphism Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-700" />

                                        {/* Content */}
                                        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5 text-center transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-3 sm:px-4 py-1 backdrop-blur-sm text-white font-black text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.25em] drop-shadow-md">
                                                {country.name}
                                            </span>
                                            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 mx-auto mt-3 transition-all duration-700" />
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
