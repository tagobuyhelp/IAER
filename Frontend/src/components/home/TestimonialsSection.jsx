"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Sparkles, MonitorCheck, Plane, HeartPulse, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const stories = [
  {
    name: "Shardul J.",
    course: "BCA",
    highlight: "Top IT Recruiter",
    quote:
      "IAER gave me industry-ready IT skills. The faculty, labs, and placement support helped me land a dream tech role.",
    image: "/images/students/arjun.jpg",
    color: "bg-primary/20 border-primary/40",
    category: "IT",
  },
  {
    name: "Anand B.",
    course: "BBA-AHSM",
    highlight: "International Aviation & Hospitality",
    quote:
      "My hospitality journey transformed at IAER. The Airport visits, Cabin Crew exposure with global training set me up for success.",
    image: "/images/students/rohan.jpg",
    color: "bg-accent/20 border-accent/40",
    category: "Hospitality & Aviation",
  },
  {
    name: "Arshdeep S.",
    course: "BMLT",
    highlight: "Healthcare Placement",
    quote:
      "From clinical labs to real hospital rotations, IAER shaped my confidence and competence in healthcare practice.",
    image: "/images/students/Sharma-Arshdeep.jpg",
    color: "bg-emerald-900/40 border-emerald-400/60",
    category: "Healthcare",
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
    }, 3500);
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
    <section className="py-24 text-primary-foreground relative overflow-hidden bg-[#0a0601]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/iaer-student-success-stories-header.png"
          alt="IAER Student Success Stories Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0601] via-transparent to-green-950/30" />
        {/* Success Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-green-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                Student Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground">
                Students Speak
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 mt-2 max-w-xl">
                Real outcomes from real students across disciplines at IAER.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm transition-all ${
                    activeCategory === key
                      ? "bg-primary-foreground text-primary border-primary-foreground"
                      : "bg-primary/20 text-primary-foreground/80 border-primary/40 hover:bg-primary/30"
                  }`}
                  aria-pressed={activeCategory === key}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      activeCategory === key
                        ? "text-primary"
                        : "text-primary-foreground/80"
                    }`}
                  />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-10 right-[-40px] w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-y-6 left-0 w-40 bg-dot-grid opacity-25" />

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute -top-12 right-0 flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => scrollBy("prev")}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 bg-primary/40 hover:bg-primary/60 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-primary-foreground" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => scrollBy("next")}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 bg-primary/40 hover:bg-primary/60 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-primary-foreground" />
              </button>
            </div>

            <div
              ref={scrollerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
            >
              {filteredStories.map((story, index) => (
                <div
                  key={`${story.name}-${index}`}
                  data-card
                  className={`relative rounded-[2rem] border ${story.color} bg-primary/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl snap-start w-[85%] sm:w-[70%] md:w-[360px] shrink-0 group`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView && !reduceMotion ? "translateY(0)" : "translateY(8px)",
                    transitionDelay: `${index * 80}ms`,
                    transitionDuration: "600ms",
                  }}
                >
                  {/* Full-width Image Section */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 320px, 360px"
                    />
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Success Icon Overlay */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30">
                      <Quote className="h-5 w-5 text-green-400 opacity-90" />
                    </div>

                    {/* Student Identity on Image */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="font-black text-xl text-white leading-tight">
                        {story.name}
                      </h3>
                      <p className="text-sm font-bold text-green-400 uppercase tracking-wider">
                        {story.course}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600 text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        {story.highlight}
                      </span>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-primary-foreground/90 italic leading-relaxed text-sm md:text-base font-medium">
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
