"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Play, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealOnScroll from "@/components/RevealOnScroll";

const galleryImages = [
    { type: "image", src: "/images/campus-life/campus-life-hero-1.webp", alt: "Campus Life" },
    { type: "image", src: "/images/campus-life/campus-life-hero-2.webp", alt: "Campus Life" },
    { type: "image", src: "/images/campus-life/campus-life-orientation-program-1.webp", alt: "Orientation Program" },
    { type: "image", src: "/images/campus-life/campus-life-orientation-program-2.webp", alt: "Orientation Program" },
    { type: "image", src: "/images/campus-life/iaer-campus-life-holi-celebration.webp", alt: "Holi Celebration" },
    { type: "image", src: "/images/campus-life/campus-life-christmas-event-1.webp", alt: "Christmas Celebration" },
    { type: "image", src: "/images/campus-life/campus-life-christmas-event-2.webp", alt: "Christmas Celebration" },
    { type: "image", src: "/images/campus-life/campus-life-academic-engagement-1.webp", alt: "Academic Engagement" },
    { type: "image", src: "/images/campus-life/campus-life-academic-engagement-2.webp", alt: "Academic Engagement" },
    { type: "image", src: "/images/campus-life/campus-life-campus-entrance-1.webp", alt: "Campus Entrance" },
    { type: "image", src: "/images/campus-life/campus-life-campus-entrance-2.webp", alt: "Campus Entrance" },
    { type: "image", src: "/images/campus-life/campus-life-classroom-discussion-1.webp", alt: "Classroom Discussion" },
    { type: "image", src: "/images/campus-life/campus-life-classroom-discussion-2.webp", alt: "Classroom Discussion" },
    { type: "image", src: "/images/campus-life/campus-life-student-collaboration-1.webp", alt: "Student Collaboration" },
    { type: "image", src: "/images/campus-life/campus-life-student-collaboration-2.webp", alt: "Student Collaboration" },
    { type: "image", src: "/images/campus-life/campus-life-research-lab-1.webp", alt: "Research Lab" },
    { type: "image", src: "/images/campus-life/campus-life-research-lab-2.webp", alt: "Research Lab" },
    { type: "image", src: "/images/campus-life/campus-life-technical-training-1.webp", alt: "Hands-on Training" },
    { type: "image", src: "/images/campus-life/campus-life-technical-training-2.webp", alt: "Hands-on Training" },
    { type: "image", src: "/images/campus-life/campus-life-faculty-mentorship-1.webp", alt: "Faculty Mentorship" },
    { type: "image", src: "/images/campus-life/campus-life-faculty-mentorship-2.webp", alt: "Faculty Mentorship" },
    { type: "image", src: "/images/campus-life/campus-life-student-life-1.webp", alt: "Student Life" },
    { type: "image", src: "/images/campus-life/campus-life-student-life-2.webp", alt: "Student Life" },
    { type: "image", src: "/images/campus-life/campus-life-iaer-campus-1.webp", alt: "IAER Campus" },
    { type: "image", src: "/images/campus-life/campus-life-iaer-campus-2.webp", alt: "IAER Campus" },
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
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <RevealOnScroll>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">Life at IAER Gallery</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 text-sm sm:text-base">
                            A visual journey through life at IAER—capturing academic moments, cultural celebrations, student activities, and campus events.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200}>
                        <div className="inline-flex p-1 bg-white rounded-full border border-gray-200 shadow-sm">
                            <button
                                onClick={() => setActiveTab("image")}
                                className={cn(
                                    "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2",
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
                                    "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2",
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {activeTab === "image" ? (
                        galleryImages.map((item, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="group relative h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white font-semibold text-base md:text-lg">{item.alt}</p>
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

                                                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-left">
                                                        {title ? (
                                                            <div className="text-white font-semibold leading-snug line-clamp-2 text-sm md:text-base">
                                                                {title}
                                                            </div>
                                                        ) : (
                                                            <div className="h-5" />
                                                        )}
                                                    </div>

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform">
                                                            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center shadow-lg">
                                                                <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white translate-x-[1px]" />
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
