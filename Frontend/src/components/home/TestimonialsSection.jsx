"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Sparkles, MonitorCheck, Plane, HeartPulse, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const stories = [
  {
    name: "Prayag Sarkar",
    course: "BCA",
    highlight: "IT Career Launch",
    quote:
      "IAER helped me build strong fundamentals and project skills that translated directly into interviews and internships.",
    image: "/images/students/Prayag-Sarkar.jpg",
    category: "IT",
  },
  {
    name: "Joyce Prerona Bose",
    course: "BBA-HM",
    highlight: "International Aviation & Hospitality",
    quote:
      "The practical exposure, industry visits, and soft-skill training at IAER made me confident and job-ready.",
    image: "/images/students/Joyce-Prerona-Bose.JPG",
    category: "Hospitality & Aviation",
  },
  {
    name: "Wasim Akram",
    course: "BMLT",
    highlight: "Healthcare Placement",
    quote:
      "From lab sessions to hands-on training, IAER helped me develop real clinical confidence and discipline.",
    image: "/images/students/Wasim-Akram.jpg",
    category: "Healthcare",
  },
  {
    name: "Surajit Basak",
    course: "BCA",
    highlight: "Hands-on Learning",
    quote:
      "The assignments and real projects pushed me to learn beyond the syllabus and build a portfolio I could show employers.",
    image: "/images/students/Surajit-Basak.jpg",
    category: "IT",
  },
  {
    name: "Amanjit Singh",
    course: "BBA-HM",
    highlight: "Industry Exposure",
    quote:
      "IAER’s training and industry engagement helped me understand how hospitality works in real settings, not just in classrooms.",
    image: "/images/students/Amanjit-Singn.jpg",
    category: "Hospitality & Aviation",
  },
];

export default function TestimonialsSection() {
  const categories = [
    { key: "All", label: "All", Icon: Sparkles },
    { key: "IT", label: "IT", Icon: MonitorCheck },
    { key: "Hospitality & Aviation", label: "Hospitality & Aviation", Icon: Plane },
    { key: "Healthcare", label: "Healthcare", Icon: HeartPulse },
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredStories =
    activeCategory === "All"
      ? stories
      : stories.filter((s) => s.category === activeCategory);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(mq.matches);
    }
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion || isPaused || !scrollerRef.current) return;
    const container = scrollerRef.current;
    const interval = setInterval(() => {
      const cardWidth = container.querySelector("[data-card]")?.clientWidth || 320;
      const nextIndex = (activeIndex + 1) % filteredStories.length;
      setActiveIndex(nextIndex);
      container.scrollTo({
        left: nextIndex * (cardWidth + 24),
        behavior: "smooth",
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [inView, reduceMotion, isPaused, activeIndex, filteredStories.length]);

  const scrollBy = (direction) => {
    const container = scrollerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector("[data-card]")?.clientWidth || 320;
    const delta = direction === "next" ? cardWidth + 24 : -(cardWidth + 24);
    container.scrollBy({ left: delta, behavior: reduceMotion ? "auto" : "smooth" });
    const newIndex = direction === "next"
      ? Math.min(activeIndex + 1, filteredStories.length - 1)
      : Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setActiveIndex(0);
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  }, [activeCategory]);

  return (
    <section className="py-12 sm:py-16 md:py-24 text-slate-900 relative overflow-hidden bg-gray-50 border-y border-gray-100">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/iaer-student-success-stories-header.png"
          alt="IAER Student Success Stories Background"
          fill
          className="object-cover opacity-[0.03] mix-blend-multiply"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-teal-50/50" />
        {/* Success Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`mb-6 sm:mb-10 md:mb-12 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-teal-600 font-bold tracking-wider text-[10px] sm:text-sm uppercase mb-2 block">
                Student Success Stories
              </span>
              <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Students Speak
              </h2>
              <p className="text-[12px] sm:text-sm md:text-base text-slate-600 mt-2 max-w-xl font-medium">
                Real outcomes from real students across disciplines at IAER.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-[12px] sm:text-sm font-bold transition-all shadow-sm ${
                    activeCategory === key
                      ? "bg-teal-600 text-white border-teal-600 shadow-teal-600/20 shadow-md"
                      : "bg-white text-slate-600 border-gray-200 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700"
                  }`}
                  aria-pressed={activeCategory === key}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      activeCategory === key
                        ? "text-white"
                        : "text-slate-400 group-hover:text-teal-500"
                    }`}
                  />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-56 h-56 rounded-full bg-teal-50/50 blur-[60px]" />

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute -top-10 sm:-top-12 right-0 flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => scrollBy("prev")}
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 text-slate-600 transition-all shadow-sm"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => scrollBy("next")}
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 text-slate-600 transition-all shadow-sm"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div
              ref={scrollerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 no-scrollbar px-1 sm:px-2"
            >
              {filteredStories.map((story, index) => (
                <div
                  key={`${story.name}-${index}`}
                  data-card
                  className={`relative rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] hover:border-teal-100 snap-start w-[85%] sm:w-[70%] md:w-[380px] shrink-0 group flex flex-col`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView && !reduceMotion ? "translateY(0)" : "translateY(8px)",
                    transitionDelay: `${index * 80}ms`,
                    transitionDuration: "600ms",
                  }}
                >
                  {/* Full-width Image Section */}
                  <div className="relative h-56 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                    />
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                    
                    {/* Success Icon Overlay */}
                    <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                      <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-white drop-shadow-sm" />
                    </div>

                    {/* Student Identity on Image */}
                    <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6">
                      <h3 className="font-black text-lg sm:text-2xl text-white leading-tight mb-0.5">
                        {story.name}
                      </h3>
                      <p className="text-[11px] sm:text-[13px] font-bold text-teal-300 uppercase tracking-wider">
                        {story.course}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col relative bg-white">
                    <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-teal-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[9px] sm:text-[11px] font-black text-teal-700 uppercase tracking-widest shadow-sm border border-teal-100">
                        <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                        {story.highlight}
                      </span>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-medium italic flex-grow">
                      "{story.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
