"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const students = [
  {
    name: "Riya Chakraborty",
    course: "B.Sc Cyber Security",
    package: "₹7.5 LPA",
    companyLogo: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png",
    image: "/images/students/riya.avif", // Placeholder
  },
  {
    name: "Arjun Saha",
    course: "B.Sc IT (Data Science)",
    package: "₹9.5 LPA",
    companyLogo: "/images/company_logos/Amazon_logo.svg.png",
    image: "/images/students/arjun.jpg", // Placeholder
  },
  {
    name: "Rohan Singh",
    course: "BBA",
    package: "₹6 LPA",
    companyLogo: "/images/company_logos/Hindustan_Unilever_Logo.svg",
    image: "/images/students/rohan.jpg", // Placeholder
  },
];

export default function HeroSection() {
  const [currentStudent, setCurrentStudent] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { src: "/images/hero_images/slide4.jpg", alt: "Campus Experience" },
    { src: "/images/hero_images/slider-6.jpg", alt: "Student Life" },
  ];

  const nextStudent = () => {
    setCurrentStudent((prev) => (prev + 1) % students.length);
  };

  const prevStudent = () => {
    setCurrentStudent((prev) => (prev - 1 + students.length) % students.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextStudent, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#0a0601] text-white min-h-[560px] flex items-center py-5 lg:py-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="flex-1 space-y-8 w-full">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Admissions Open 2026
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
              India’s Fastest-Growing Institute for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Future-Ready Careers</span>
            </h1>

            <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-2xl border-l-4 border-accent/50 pl-6">
              IAER blends industry-driven education, global exposure, and hands-on skill training to create professionals who lead with innovation, integrity, and impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-base font-bold rounded-full shadow-[0_0_30px_-5px_rgba(247,148,30,0.4)] hover:shadow-[0_0_40px_-5px_rgba(247,148,30,0.6)] hover:-translate-y-1 transition-all duration-300">
              APPLY TODAY <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-black px-10 py-7 text-base font-semibold rounded-full hover:-translate-y-1 transition-all duration-300">
              Download Brochure
            </Button>
          </div>

          {/* Student Success Slider */}
          <div className="mt-8 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 max-w-xl shadow-2xl relative group hover:border-accent/30 transition-colors duration-300">
            <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              PLACEMENT HIGHLIGHT
            </div>
            <div className="flex items-center gap-6">
              {/* Student Image */}
              <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-accent/50">
                <Image
                  src={students[currentStudent].image}
                  alt={students[currentStudent].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-white">{students[currentStudent].name}</h3>
                  <span className="text-accent font-bold text-base">{students[currentStudent].package}</span>
                </div>
                <p className="text-accent font-medium text-sm mb-3">{students[currentStudent].course}</p>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">Placed at:</span>
                  <div className="relative h-8 w-24 bg-white rounded px-2 flex items-center justify-center">
                    <Image
                      src={students[currentStudent].companyLogo}
                      alt="Company Logo"
                      fill
                      className="object-co p-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={prevStudent}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 transition-colors text-white hover:text-accent"
                  aria-label="Previous student"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStudent}
                  className="p-3 rounded-full bg-accent hover:bg-accent/90 shadow-lg transition-colors text-white"
                  aria-label="Next student"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Auto Image Slider */}
        <div className="hidden lg:block w-full lg:w-1/2 relative h-[500px]">
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out ${currentSlide === index
                    ? "opacity-100 scale-100 translate-x-0"
                    : "opacity-0 scale-105 -translate-x-3"
                  }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-black/20" />
                </div>
              </div>
            ))}
          </div>

          {/* Decorative gradient shape */}
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 blur-2xl rounded-full pointer-events-none" />

          {/* Slider dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${currentSlide === i ? "w-6 bg-accent" : "w-2 bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
