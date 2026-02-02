"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { Building2, MapPin, Award, BookOpen, GraduationCap } from "lucide-react";

export default function InstitutionalDetails() {
    const details = [
        { icon: Building2, label: "Name of the Institution", value: "Institute of Advance Education & Research (IAER)" },
        { icon: Award, label: "Affiliating University", value: "Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal" },
        { icon: ShieldCheck, label: "Recognition", value: "UGC Recognised" },
        { icon: MapPin, label: "Location", value: "Plot No 37, Block – Bhangar-II, Near St. Xavier’s University, Newtown Action Area - III, Kolkata, West Bengal, Pin Code - 700 160." },
        { icon: GraduationCap, label: "Mode of Study", value: "Full-Time, On-Campus Programs" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <RevealOnScroll>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-white/20">
                                <Image
                                    src="/images/Mandatory/iaer-institutional-details-administration.png"
                                    alt="Institutional Details"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </RevealOnScroll>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <RevealOnScroll delay={200}>
                            <h2 className="text-3xl font-bold text-primary mb-8">Institutional Details</h2>
                            <div className="space-y-6">
                                {details.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                                            <item.icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{item.label}</h4>
                                            <p className="text-lg font-bold text-gray-900">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { ShieldCheck } from "lucide-react";
