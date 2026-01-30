"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Palette, HeartHandshake, BookOpen, Utensils, Activity, Cpu, Lightbulb, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const clubs = [
    {
        title: "Cultural Club",
        icon: Palette,
        color: "text-purple-600",
        bg: "bg-purple-50",
        desc: "Celebrating diversity through art, music, and dance. Organizes fests, talent hunts, and festival celebrations.",
    },
    {
        title: "CSR Society",
        icon: HeartHandshake,
        color: "text-red-600",
        bg: "bg-red-50",
        desc: "Instilling social responsibility through community service, awareness campaigns, and outreach programs.",
    },
    {
        title: "Literary Society",
        icon: BookOpen,
        color: "text-blue-600",
        bg: "bg-blue-50",
        desc: "Fostering intellectual curiosity through debates, creative writing, reading sessions, and communication workshops.",
    },
    {
        title: "Food Fest Club",
        icon: Utensils,
        color: "text-orange-600",
        bg: "bg-orange-50",
        desc: "Celebrating culinary creativity and hospitality. Students plan and execute food festivals and themed events.",
    },
    {
        title: "Sports Club",
        icon: Activity,
        color: "text-green-600",
        bg: "bg-green-50",
        desc: "Promoting fitness and teamwork through indoor and outdoor sports competitions and annual meets.",
    },
    {
        title: "Technical Society",
        icon: Cpu,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        desc: "Enhancing technical skills through coding events, workshops, and innovation challenges aligned with industry trends.",
    },
    {
        title: "Creative Club",
        icon: Lightbulb,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        desc: "Nurturing imagination across art, design, and crafting. Encouraging students to explore new ideas.",
    },
    {
        title: "Photography Club",
        icon: Camera,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        desc: "Exploring visual storytelling and camera techniques. Documenting campus life and student activities.",
    },
];

export default function ClubsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                            Clubs & Societies
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Student clubs and societies are the heartbeat of campus life at IAER. They provide platforms for students to explore interests, develop talents, and engage in collaborative learning outside academic boundaries.
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clubs.map((club, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0", club.bg)}>
                                    <club.icon className={cn("w-7 h-7", club.color)} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{club.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    {club.desc}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
