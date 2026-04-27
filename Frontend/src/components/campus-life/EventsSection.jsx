"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { Calendar, Gift, Heart, Trophy, Bus, TreePine, Music } from "lucide-react";

const events = [
    { icon: Gift, title: "Christmas Gift Distribution", desc: "Spreading joy and sharing with the community." },
    { icon: Heart, title: "Orphanage Visits", desc: "Compassionate outreach and social responsibility." },
    { icon: TreePine, title: "Sanitation & Cleanliness Drives", desc: "Commitment to a cleaner and greener environment." },
    { icon: Trophy, title: "Annual Sports Meet", desc: "Celebrating athleticism, teamwork, and fair play." },
    { icon: Bus, title: "Educational & Recreational Trips", desc: "Learning beyond the classroom walls." },
    { icon: TreePine, title: "Tree Plantation Drives", desc: "Contributing to a sustainable future." },
    { icon: Music, title: "Cultural Programs & Annual Fest", desc: "Showcasing talent, diversity, and creativity." },
];

export default function EventsSection() {
    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/campus-life/campus-life-iaer-campus-1.webp"
                    alt="Background"
                    fill
                    className="object-cover opacity-5"
                />
            </div>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <RevealOnScroll>
                        <span className="text-accent font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 block">
                            Beyond the Classroom
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                            Celebrating Learning & Togetherness
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
                            IAER regularly organizes events that encourage student participation, teamwork, creativity, and social engagement. These events create memorable experiences while reinforcing values of responsibility, inclusivity, and leadership.
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {events.map((event, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className="bg-gray-50 hover:bg-white p-5 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-accent/20 group h-full">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <event.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-accent transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {event.desc}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
