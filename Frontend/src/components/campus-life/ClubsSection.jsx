"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import {
    Activity,
    BookOpen,
    Briefcase,
    Camera,
    Gavel,
    Lightbulb,
    Mic,
    Palette,
    Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const clubs = [
    {
        title: "Cultural & Creative Club",
        icon: Palette,
        color: "text-purple-600",
        bg: "bg-purple-50",
        desc: "Arts, music, dance, and creativity. Student-led showcases, cultural events, and campus celebrations.",
    },
    {
        title: "Literary & Public Speaking Club",
        icon: Mic,
        color: "text-red-600",
        bg: "bg-red-50",
        desc: "Debates, elocution, writing, and communication skills through workshops, events, and competitions.",
    },
    {
        title: "Science, Tech & Innovation Club",
        icon: Lightbulb,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        desc: "Innovation challenges, projects, coding sessions, and tech talks aligned with industry trends.",
    },
    {
        title: "Entrepreneurship, Finance & Business Club",
        icon: Briefcase,
        color: "text-orange-600",
        bg: "bg-orange-50",
        desc: "Case studies, startup ideation, market simulations, and industry interactions for business mindset.",
    },
    {
        title: "Sports, Fitness & Wellness Club",
        icon: Activity,
        color: "text-green-600",
        bg: "bg-green-50",
        desc: "Fitness, sports events, and wellness activities that build discipline, teamwork, and resilience.",
    },
    {
        title: "Social Responsibility & Outreach Cell",
        icon: Users,
        color: "text-rose-600",
        bg: "bg-rose-50",
        desc: "Community outreach, awareness drives, volunteering, and social impact initiatives led by students.",
    },
    {
        title: "Photography, Digital Media & Content Creation Club",
        icon: Camera,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        desc: "Photography, videography, design, and content creation to document and elevate campus life.",
    },
    {
        title: "Academics Support & Research Council",
        icon: BookOpen,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        desc: "Peer learning, mentoring, research culture, and academic initiatives to support student success.",
    },
    {
        title: "Event Governance Committee",
        icon: Gavel,
        color: "text-slate-700",
        bg: "bg-slate-100",
        desc: "Planning, coordination, and governance of events to ensure smooth execution and professionalism.",
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
