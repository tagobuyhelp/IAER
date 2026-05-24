'use client';

import { Children, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { programs } from '@/lib/programs';
import { Button } from '@/components/ui/button';
import { handleDownloadBrochure } from '@/lib/download';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  BookOpen, 
  Briefcase, 
  Award, 
  ArrowRight,
  Plane,
  Stethoscope,
  Cpu,
  LineChart
} from 'lucide-react';
import InfiniteCall from '@/components/InfiniteCall';
import OurHiringPartnersSection from '@/components/placement/OurHiringPartnersSection';

// Helper to get program details
const getProgramByCode = (code) => {
  return programs.find(p => p.code === code) || programs.find(p => p.id.includes(code.toLowerCase()));
};

function getProgramMeta(program) {
  const duration = program?.overview?.duration || program?.duration || "";
  const mode = program?.overview?.mode || program?.mode || "";
  const subtitle = program?.subtitle || program?.description || "";
  return { duration, mode, subtitle };
}

function getDurationLabel(duration) {
  if (!duration) return "";
  const match = String(duration).match(/^\s*(\d+\s*(?:Years?|Months?|Weeks?))/i);
  return match ? match[1] : String(duration);
}

function HorizontalCardScroller({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
    skipSnaps: false,
    slidesToScroll: 1,
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateStates = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollLeft(emblaApi.canScrollPrev());
    setCanScrollRight(emblaApi.canScrollNext());
    setActiveIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateStates();
    emblaApi.on("select", updateStates);
    emblaApi.on("reInit", updateStates);
    return () => {
      emblaApi.off("select", updateStates);
      emblaApi.off("reInit", updateStates);
    };
  }, [emblaApi, updateStates]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div
        ref={emblaRef}
        className="overflow-hidden px-4 sm:px-12 py-2"
      >
        <div className="flex items-stretch -ml-4 md:-ml-6">
          {Children.toArray(children).map((child, idx) => (
            <div
              key={idx}
              className="pl-4 md:pl-6 flex-[0_0_auto] min-w-0 self-stretch flex"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent transition-opacity hidden sm:block ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent transition-opacity hidden sm:block ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      />

      {canScrollLeft ? (
        <button
          type="button"
          aria-label="Scroll left"
          onClick={scrollPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors backdrop-blur-md z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      ) : null}

      {canScrollRight ? (
        <button
          type="button"
          aria-label="Scroll right"
          onClick={scrollNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors backdrop-blur-md z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      ) : null}

      <div className="mt-2 hidden sm:flex items-center justify-center gap-1.5">
        {Array.from({ length: snapCount }).map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ program, index }) {
  const { duration, mode, subtitle } = getProgramMeta(program);
  const durationLabel = getDurationLabel(duration);

  return (
    <motion.div
      data-carousel-card
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: Math.min(index, 10) * 0.04, duration: 0.45 }}
      className="group relative flex flex-col flex-none w-[280px] sm:w-[320px] md:w-[360px] h-full snap-start [scroll-snap-stop:always] rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden hover:border-accent/30 hover:bg-zinc-900/70 transition-colors"
    >
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <Image
          src={program.image || '/images/campus/iaer-campus.png'}
          alt={program.title}
          fill
          className=" opacity-90 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
            {program.code}
          </span>
          {durationLabel ? (
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-gray-100 text-[11px] font-semibold border border-white/10 backdrop-blur-md">
              {durationLabel}
            </span>
          ) : null}
        </div>
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <Link href={`/programs/${program.id}`} className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug hover:text-accent transition-colors">
              {program.title}
            </h3>
          </Link>
        </div>

        {subtitle ? (
          <p className="mt-2 text-[12px] sm:text-sm text-gray-400 leading-relaxed">
            {subtitle}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {duration ? (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-gray-200">
              <Clock className="w-4 h-4 text-accent" />
              {duration}
            </span>
          ) : null}
          {mode ? (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-gray-200">
              <MapPin className="w-4 h-4 text-accent" />
              {mode}
            </span>
          ) : null}
        </div>

        <div className="mt-auto pt-5 flex gap-2">
          <Button asChild className="flex-1 bg-accent hover:bg-accent/90 text-white rounded-xl">
            <Link href={`/programs/${program.id}`}>
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 border-white/15 text-black hover:bg-white/10 rounded-xl">
            <Link href="https://admission.iaer.ac.in/" target="_blank" rel="noreferrer">
              Enquire Now
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// Flattened list of programs for the showcase if needed, or structured by category
const programCategories = [
  {
    id: 'ug',
    title: "Undergraduate Programmes",
    description: "Explore programmes available after 10+2 across IAER schools.",
    groups: [
      {
        name: "School of Information Technology",
        icon: <Cpu className="w-5 h-5" />,
        programs: ["BCA", "BCA-DSCS", "BCA-AIML", "BSCDS", "BSCCS", "ACAI", "ACSD", "ACFD"]
      },
      {
        name: "School of Management",
        icon: <Briefcase className="w-5 h-5" />,
        programs: ["BBA", "BBA-BA", "BBA-GB", "BBA-SM"]
      },
      {
        name: "School of Health Science",
        icon: <Stethoscope className="w-5 h-5" />,
        programs: ["BBA-HM", "BMLT", "DMLT"]
      },
      {
        name: "Institute of Aviation & Hospitality Management (IAHM)",
        icon: <Plane className="w-5 h-5" />,
        programs: ["BBA-AHSM", "BBA-AO", "BSCHHA", "DAHM", "ACAC"]
      }
    ]
  },
  {
    id: 'pg',
    title: "Post Graduate Programmes",
    description: "Programmes available after graduation.",
    groups: [
      {
        name: "Post Graduate Programmes",
        icon: <Award className="w-5 h-5" />,
        programs: ["PGDM", "MBA", "MHA"]
      },
      {
        name: "Specialised PGDM",
        icon: <LineChart className="w-5 h-5" />,
        programs: ["PGDM-AIADS", "PGDM-BA", "PGDM-FT", "PGDM-HMHA"]
      }
    ]
  }
];

// Hero Background Images
const heroImages = [
  '/images/programs/legacy/BBA.jpg',
  '/images/programs/legacy/BSCCS.jpg',
  '/images/programs/legacy/PGDMLAI.jpg',
  '/images/programs/legacy/BMLT.jpg'
];

export default function Programs() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Auto-change hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const categorizedIds = new Set();
  const resolvedCategories = programCategories.map((category) => ({
    ...category,
    groups: category.groups.map((group) => ({
      ...group,
      resolvedPrograms: group.programs
        .map((code) => getProgramByCode(code))
        .filter(Boolean)
        .filter((program) => {
          if (categorizedIds.has(program.id)) return false;
          categorizedIds.add(program.id);
          return true;
        }),
    })),
  }));

  const uncategorizedPrograms = programs.filter((program) => !categorizedIds.has(program.id));

  function scrollToPrograms() {
    document.getElementById("programs-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
      <InfiniteCall />
      
      {/* Hero Section with Parallax & Zoom Effect */}
      <section id="programs-hero" className="relative h-[38vh] min-h-[260px] sm:h-[45vh] sm:min-h-[320px] md:h-[65vh] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentHeroImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={heroImages[currentHeroImage]} 
              alt="IAER Campus Life" 
              fill 
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 mix-blend-overlay" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[11px] sm:text-sm font-medium backdrop-blur-md mb-5 sm:mb-8 hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            Admissions Open 2025
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[26px] sm:text-4xl md:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight"
          >
            Shape Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-accent animate-gradient bg-[length:200%_auto]">
              Future Today
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[12px] sm:text-base md:text-2xl text-gray-300 mb-5 sm:mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Discover industry-aligned programs designed to launch your career in Management, Technology, and Healthcare.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-5 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToPrograms}
              className="bg-accent hover:bg-accent/90 text-white px-5 py-3 sm:px-6 sm:py-4 md:px-10 md:py-7 text-sm sm:text-base md:text-lg rounded-full shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,107,0,0.6)] transition-all duration-300"
            >
              Explore Programs
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadBrochure}
              className=" border-white/20 text-black hover:bg-white/10 px-5 py-3 sm:px-6 sm:py-4 md:px-10 md:py-7 text-sm sm:text-base md:text-lg rounded-full backdrop-blur-sm"
            >
              Download Brochure
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-7 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* Programs - Card Grid */}
      <section className="relative py-10 sm:py-12 md:py-24 bg-black" id="programs-list">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-16">
            <h2 className="text-[20px] sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              All Programs
            </h2>
            <p className="text-gray-400 text-[12px] sm:text-base md:text-lg leading-relaxed">
              Browse every program at a glance. Open a card to view full curriculum, fees, eligibility, and career outcomes.
            </p>
          </div>

          <div className="space-y-10 md:space-y-14">
            {resolvedCategories.map((category) => (
              <div key={category.id} className="space-y-6 md:space-y-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-gray-400 text-[12px] sm:text-sm md:text-base">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-8 md:space-y-10">
                  {category.groups.map((group) => {
                    if (!group.resolvedPrograms.length) return null;

                    return (
                      <div key={group.name} className="space-y-4">
                        <div className="flex items-center gap-3 text-accent">
                          <span className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                            {group.icon}
                          </span>
                          <h4 className="font-semibold tracking-wide text-xs sm:text-sm uppercase">
                            {group.name}
                          </h4>
                        </div>

                        <HorizontalCardScroller>
                          {group.resolvedPrograms.map((program, idx) => (
                            <ProgramCard
                              key={program.id}
                              program={program}
                              index={idx}
                            />
                          ))}
                        </HorizontalCardScroller>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {uncategorizedPrograms.length ? (
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                    More Programs
                  </h3>
                  <p className="mt-1 text-gray-400 text-[12px] sm:text-sm md:text-base">
                    Additional programs available at IAER.
                  </p>
                </div>
                <HorizontalCardScroller>
                  {uncategorizedPrograms.map((program, idx) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      index={idx}
                    />
                  ))}
                </HorizontalCardScroller>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div id="programs-partners">
        <OurHiringPartnersSection />
      </div>

      {/* Why Choose IAER - Feature Section */}
      <section id="programs-why" className="py-10 sm:py-12 md:py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-7 sm:mb-8 md:mb-16">
            <h2 className="text-[20px] sm:text-2xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">Why Choose IAER?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base">
              We go beyond textbooks to provide practical, hands-on learning that prepares you for the real world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Industry Integrated Curriculum",
                desc: "Our courses are designed in collaboration with industry leaders to ensure relevance.",
                image: "/images/programs/Industry-Integrated-Curriculum.webp"
              },
              {
                title: "State-of-the-Art Campus",
                desc: "Modern labs, smart classrooms, and a vibrant campus life await you.",
                image: "/images/programs/State-of-the-Art-Campus.webp"
              },
              {
                title: "Global Alumni Network",
                desc: "Join a network of successful professionals working in top companies globally.",
                image: "/images/programs/Global-Alumni-Network.webp"
              },
              {
                title: "State-of-the-Art Infrastructure",
                desc: "Fully equipped labs designed for practical, hands-on learning.",
                image: "/images/programs/State-of-the-Art-Campus.webp"
              },
              {
                title: "Fully Digital Classrooms & Online Library",
                desc: "Smart classrooms and easy access to learning resources anytime.",
                image: "/images/programs/Fully-Digital-Classroom-Online-Library.webp"
              },
              {
                title: "Robust Industry Interface",
                desc: "Industry mentorship, internships, and real-world projects for career readiness.",
                image: "/images/programs/Robust-Industry-Interface.webp"
              },
              {
                title: "Study Tours in India & Abroad",
                desc: "Learning beyond the campus through exposure visits and immersive study tours.",
                image: "/images/programs/Study-Tour-in-India-Abroad.webp"
              },
              
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative overflow-hidden rounded-2xl h-52 sm:h-64 md:h-96"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 sm:p-4 md:p-8 flex flex-col justify-end">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-[11px] sm:text-xs md:text-base">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
