"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Quote } from "lucide-react";

export default function CampusOverview() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <RevealOnScroll>
                        <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-accent/20 mx-auto mb-4 sm:mb-6 rotate-180" />
                    </RevealOnScroll>
                    
                    <RevealOnScroll delay={200}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-5 sm:mb-8">
                            A Vibrant Campus Where Learning Meets Life
                        </h2>
                    </RevealOnScroll>

                    <RevealOnScroll delay={400}>
                        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                            <p>
                                Campus life at the Institute of Advance Education & Research (IAER) extends far beyond classrooms and laboratories. It is a dynamic blend of academic engagement, cultural expression, sportsmanship, creativity, and social responsibility.
                            </p>
                            <p>
                                IAER provides students with an inclusive and energetic environment where personal growth, leadership, teamwork, and lifelong friendships are nurtured. From cultural celebrations and student-led clubs to sports events, community outreach, and experiential learning activities, campus life at IAER plays a vital role in shaping confident, socially aware, and industry-ready individuals.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
