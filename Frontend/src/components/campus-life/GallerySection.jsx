"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Play, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/RevealOnScroll";

const galleryImages = [
    { type: "image", src: "/images/campus-life/iaer-campus-life-orientation-program.webp", alt: "Orientation Program" },
    { type: "image", src: "/images/campus-life/iaer-campus-life-holi-celebration.webp", alt: "Holi Celebration" },
    { type: "image", src: "/images/campus-life/iaer-campus-life-christmas-celebration.webp", alt: "Christmas Celebration" },
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
    { type: "image", src: "/images/campus/iaer-building.jpg", alt: "IAER Campus" },
    { type: "image", src: "/images/hero_images/slider-6.jpg", alt: "Vibrant Atmosphere" },
    { type: "image", src: "/images/students/arjun.jpg", alt: "Student Success" },
    { type: "image", src: "/images/about/Regulatory_compliance_review_meeting.png", alt: "Institutional Excellence" },
    { type: "image", src: "/images/academic/Organised_workspace_with_planning_essentials.png", alt: "Focused Learning" },
];

function toYouTubeId(url) {
    try {
        const u = new URL(url);
        if (u.hostname === "youtu.be") return u.pathname.replace("/", "") || null;
        if (u.searchParams.get("v")) return u.searchParams.get("v");
        const embedMatch = u.pathname.match(/\/embed\/([^/]+)/);
        if (embedMatch?.[1]) return embedMatch[1];
        return null;
    } catch {
        return null;
    }
}

const galleryVideos = [
    "https://youtu.be/nH-sSyq_2OM?si=Md-xKRWg6fk7SBni",
    "https://youtu.be/zMB9cUHQlbs?si=FlDfDg1Lz2uq2QFZ",
    "https://youtu.be/oAtNvtMJ4bM?si=LQvX3P0H1FSVC8FJ",
    "https://youtu.be/_dJfXe96VkQ?si=atnxAzajgZ2_DUGh",
    "https://youtu.be/YTR8W7MMbz8?si=PU_khpirOYs5HBNc",
    "https://youtu.be/SFxZvYq6TQ4?si=oa_L8ufU-660DqMu",
    "https://youtu.be/2CrjbQKJQb8?si=V9cSW1MvamYlPcwn",
    "https://youtu.be/URM97HfnpN4?si=X51xxz15U696Z6je",
    "https://youtu.be/90DiLlU1Ny8?si=XBcS2eCzodUtTZwi",
    "https://youtu.be/KFzByJFa69Y?si=p5_AIUdEGr9b8wyE",
    "https://youtu.be/dg0PpUBgEEY?si=HECQ45FKign-a2Jr",
    "https://youtu.be/xXNkDR_XO6s?si=yCRe1loa-SoSlGin",
]
    .map((url) => ({ url, id: toYouTubeId(url) }))
    .filter((v) => Boolean(v.id));

export default function GallerySection() {
    const [activeTab, setActiveTab] = useState("image");
    const [activeVideoId, setActiveVideoId] = useState(null);
    const [videoTitles, setVideoTitles] = useState({});

    const videosWithThumbs = useMemo(() => {
        return galleryVideos.map((v) => ({
            ...v,
            thumb: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
        }));
    }, []);

    useEffect(() => {
        if (activeTab !== "video") return;
        if (typeof window === "undefined") return;

        const cacheKey = "iaer.gallery.videoTitles.v1";
        const fromCacheRaw = window.sessionStorage.getItem(cacheKey);
        if (fromCacheRaw) {
            try {
                const parsed = JSON.parse(fromCacheRaw);
                if (parsed && typeof parsed === "object") setVideoTitles(parsed);
            } catch {
            }
        }

        const missing = videosWithThumbs.filter((v) => !videoTitles[v.id]);
        if (!missing.length) return;

        const abort = new AbortController();
        Promise.all(
            missing.map(async (v) => {
                const res = await fetch(
                    `https://www.youtube.com/oembed?url=${encodeURIComponent(v.url)}&format=json`,
                    { signal: abort.signal }
                );
                if (!res.ok) return null;
                const data = await res.json();
                const title = typeof data?.title === "string" ? data.title : null;
                return title ? { id: v.id, title } : null;
            })
        )
            .then((results) => {
                const next = { ...videoTitles };
                results.filter(Boolean).forEach((r) => {
                    next[r.id] = r.title;
                });
                setVideoTitles(next);
                window.sessionStorage.setItem(cacheKey, JSON.stringify(next));
            })
            .catch(() => {
            });

        return () => abort.abort();
    }, [activeTab, videosWithThumbs, videoTitles]);

    useEffect(() => {
        setActiveVideoId(null);
    }, [activeTab]);

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
                        videosWithThumbs.map((video, index) => {
                            const title = videoTitles[video.id] || "";
                            const isActive = activeVideoId === video.id;

                            return (
                                <RevealOnScroll key={video.id} delay={index * 80}>
                                    <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-shadow">
                                        <div className="relative w-full pt-[56.25%] bg-black">
                                            {isActive ? (
                                                <iframe
                                                    className="absolute inset-0 w-full h-full"
                                                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`}
                                                    title={title || "IAER Video"}
                                                    loading="lazy"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveVideoId(video.id)}
                                                    className="absolute inset-0 w-full h-full"
                                                    aria-label={title ? `Play: ${title}` : "Play video"}
                                                >
                                                    <img
                                                        src={video.thumb}
                                                        alt={title || "IAER video thumbnail"}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-primary/25" />

                                                    <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                                                        {title ? (
                                                            <div className="text-white font-semibold leading-snug line-clamp-2">
                                                                {title}
                                                            </div>
                                                        ) : (
                                                            <div className="h-5" />
                                                        )}
                                                    </div>

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform">
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center shadow-lg">
                                                                <Play className="w-6 h-6 text-white translate-x-[1px]" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
