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
        name: "United Kingdom",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&h=500&q=80"
    },
];

export default function InternationalImmersion() {
    return (
        <section className="py-10 sm:py-14 md:py-24 bg-white overflow-hidden relative">
            <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-teal-100/40 blur-[80px]" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 bg-gray-50 shadow-xl px-4 py-7 sm:px-6 sm:py-10 md:px-10 md:py-12 backdrop-blur-xl">
                    <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-teal-100/60 blur-[60px]" />
                    <div className="pointer-events-none absolute -left-24 bottom-[-6rem] h-80 w-80 rounded-full bg-emerald-100/40 blur-[60px]" />

                    <div className="relative flex flex-col lg:flex-row items-start gap-7 sm:gap-10 lg:gap-16">

                    {/* Left Content */}
                    <div className="flex-1 space-y-5 sm:space-y-8 lg:space-y-10 lg:sticky lg:top-24">
                        <RevealOnScroll>
                            <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-teal-50 shadow-sm border border-teal-100">
                                <div className="p-1.5 bg-white rounded-full border border-teal-100 shadow-sm">
                                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-teal-600">
                                        International Immersion
                                    </span>
                                    <h2 className="text-[13px] md:text-[18px] font-black tracking-tight uppercase text-slate-900 leading-tight">
                                        Global Experiences With IAER
                                    </h2>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <p className="text-slate-600 text-[13px] sm:text-[15px] md:text-lg leading-relaxed text-justify font-medium">
                                IAER&apos;s International Immersion Program gives students global exposure through partnerships with top universities in Thailand, UAE, Malaysia, Russia and Singapore. Students gain international learning experience through academic exchange, global internships, industry visits, and cultural immersion. The program builds a strong understanding of global business practices and enhances employability with real-world international perspectives.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-md">
                                <div className="rounded-[1.25rem] border border-gray-100 bg-white px-3 sm:px-4 py-3 sm:py-4 shadow-sm hover:shadow-md transition-shadow">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-600 mb-1">
                                        Countries
                                    </p>
                                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
                                        6+
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1">
                                        Global destinations for immersion.
                                    </p>
                                </div>
                                <div className="rounded-[1.25rem] border border-gray-100 bg-white px-3 sm:px-4 py-3 sm:py-4 shadow-sm hover:shadow-md transition-shadow">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-1">
                                        Experiences
                                    </p>
                                    <p className="text-xl sm:text-2xl md:text-2xl font-black text-slate-900 leading-tight">
                                        Academic
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1">
                                        Exchange, internships &amp; visits.
                                    </p>
                                </div>
                                <div className="rounded-[1.25rem] border border-gray-100 bg-white px-3 sm:px-4 py-3 sm:py-4 shadow-sm hover:shadow-md transition-shadow col-span-2 sm:col-span-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-600 mb-1">
                                        Focus
                                    </p>
                                    <p className="text-xl sm:text-2xl md:text-2xl font-black text-slate-900 leading-tight">
                                        Careers
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1">
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
                                        className={`group relative aspect-[4/5] rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-100 hover:ring-2 hover:ring-teal-200 transition-all duration-700 ${
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
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                                        {/* Content */}
                                        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-flex items-center justify-center rounded-full bg-white/20 px-3 sm:px-4 py-1 backdrop-blur-md border border-white/30 text-white font-black text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.2em] shadow-sm">
                                                {country.name}
                                            </span>
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
