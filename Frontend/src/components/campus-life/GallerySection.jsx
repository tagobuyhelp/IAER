"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Image as ImageIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/RevealOnScroll";

const galleryImages = [
    { type: "image", src: "/images/about/Academic_leader_engaging_with_students.png", alt: "Academic Engagement" },
    { type: "image", src: "/images/about/Students_approaching_modern_campus_entrance.png", alt: "Campus Entrance" },
    { type: "image", src: "/images/academic/Classroom_discussion_with_engaged_students.png", alt: "Classroom Discussion" },
    { type: "image", src: "/images/admissions/Students_collaborating_in_bright_campus_space.png", alt: "Student Collaboration" },
    { type: "image", src: "/images/research-and-innovation/Collaborative_discussion_in_a_research_lab.png", alt: "Research Lab" },
    { type: "image", src: "/images/research-and-innovation/Student_founders_presenting_to_mentors.png", alt: "Student Presentation" },
    { type: "image", src: "/images/about/Hands-on_electronics_training_in_India.png", alt: "Technical Training" },
    { type: "image", src: "/images/academic/Professor_and_student_discussing_results.png", alt: "Faculty Mentorship" },
    { type: "image", src: "/images/admissions/College_admissions_reception_in_India.png", alt: "Warm Welcome" },
    { type: "image", src: "/images/research-and-innovation/Students_working_on_robotic_prototype.png", alt: "Innovation & Robotics" },
    { type: "image", src: "/images/students/riya.avif", alt: "Student Life" },
    { type: "image", src: "/images/iaer-building.jpg", alt: "IAER Campus" },
    { type: "image", src: "/images/hero_images/slider-6.jpg", alt: "Vibrant Atmosphere" },
    { type: "image", src: "/images/students/arjun.jpg", alt: "Student Success" },
    { type: "image", src: "/images/about/Regulatory_compliance_review_meeting.png", alt: "Institutional Excellence" },
    { type: "image", src: "/images/academic/Organised_workspace_with_planning_essentials.png", alt: "Focused Learning" },
];

export default function GallerySection() {
    const [activeTab, setActiveTab] = useState("image");

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <RevealOnScroll>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Life at IAER Gallery</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            A visual journey through life at IAER—capturing academic moments, cultural celebrations, student activities, and campus events.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <div className="inline-flex p-1 bg-white rounded-full border border-gray-200 shadow-sm">
                            <button
                                onClick={() => setActiveTab("image")}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                                    activeTab === "image"
                                        ? "bg-accent text-white shadow-md"
                                        : "text-gray-600 hover:text-accent"
                                )}
                            >
                                <ImageIcon className="w-4 h-4" /> Image Gallery
                            </button>
                            <button
                                onClick={() => setActiveTab("video")}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                                    activeTab === "video"
                                        ? "bg-accent text-white shadow-md"
                                        : "text-gray-600 hover:text-accent"
                                )}
                            >
                                <Play className="w-4 h-4" /> Video Gallery
                            </button>
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeTab === "image" ? (
                        galleryImages.map((item, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="group relative h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white font-semibold text-lg">{item.alt}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                            <Play className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 font-medium">Video Gallery Coming Soon</p>
                            <p className="text-sm text-gray-400 mt-2">Explore curated videos showcasing our vibrant campus events.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
