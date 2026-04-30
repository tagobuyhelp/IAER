"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Award, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { handleDownloadBrochure } from "@/lib/download";
import { cn } from "@/lib/utils";

const students = [
  {
    name: "Riya Chakraborty",
    course: "B.Sc Cyber Security",
    package: "₹7.5 LPA",
    companyLogo: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png",
    image: "/images/students/riya.avif",
  },
  {
    name: "Arjun Saha",
    course: "B.Sc IT (Data Science)",
    package: "₹9.5 LPA",
    companyLogo: "/images/company_logos/Amazon_logo.svg.png",
    image: "/images/students/arjun.jpg",
  },
  {
    name: "Rohan Singh",
    course: "BBA",
    package: "₹6 LPA",
    companyLogo: "/images/company_logos/Hindustan_Unilever_Logo.svg",
    image: "/images/students/rohan.jpg",
  },
];

const bgImages = [
  '/images/programs/legacy/BBA.jpg',
  '/images/programs/legacy/BSCCS.jpg',
  '/images/programs/legacy/PGDMLAI.jpg', 
  '/images/programs/legacy/BMLT.jpg'
];

export default function HeroSection() {
  const [currentStudent, setCurrentStudent] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const mobileCarouselRef = useRef(null);
  const [mobileStudentIndex, setMobileStudentIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    const studentTimer = setInterval(() => {
      setCurrentStudent((prev) => (prev + 1) % students.length);
    }, 5000);
    return () => {
      clearInterval(bgTimer);
      clearInterval(studentTimer);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 1023px)");
    if (!mq.matches) return;
    const el = mobileCarouselRef.current;
    if (!el) return;
    const card = el.querySelector(`[data-mobile-student-index="${mobileStudentIndex}"]`);
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [mobileStudentIndex]);

  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] lg:h-[calc(100vh-190px)] max-h-[900px] flex items-center py-4 sm:py-6 md:py-12 lg:py-16 overflow-hidden bg-[#143674]">
      {/* Dynamic Background System */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out transform",
              currentBgIndex === index ? "opacity-40 scale-105" : "opacity-0 scale-100"
            )}
          >
            <Image
              src={img}
              alt="Campus Life"
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Overlays for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#143674] via-[#143674]/80 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#143674] via-transparent to-transparent z-[1]" />
        <div className="absolute inset-0 backdrop-blur-[2px] z-[0]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center min-w-0">
          
          {/* Left Content: Information & CTA */}
          <div className={cn(
            "lg:col-span-7 space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-1000 min-w-0",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <span className="flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wide uppercase text-gray-100">
                  Admissions Open 2026-27
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[28px] sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white lg:px-0">
                Empowering the <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-accent animate-gradient-x">
                  Next Generation
                </span>
                <br className="hidden sm:block" /> of Global Leaders
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-xl text-gray-300 max-w-xl lg:mx-0 leading-relaxed font-medium lg:px-0">
                IAER Kolkata provides industry-immersive education that bridges the gap between 
                academic knowledge and professional excellence.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center justify-start gap-2.5 sm:gap-3 pt-1 sm:pt-2 lg:px-0">
              <Button
                asChild
                size="lg"
                className="flex-1 sm:flex-none h-11 sm:h-12 md:h-14 px-4 sm:px-10 bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-[11px] sm:text-sm md:text-lg shadow-xl shadow-accent/20 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
              >
                <Link href="https://admission.iaer.ac.in/">
                  APPLY NOW <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadBrochure}
                className="flex-1 sm:flex-none h-11 sm:h-12 md:h-14 px-4 sm:px-10 border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-[11px] sm:text-sm md:text-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
              >
                BROCHURE
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="flex items-center justify-start gap-5 sm:gap-8 pt-4 sm:pt-6 border-t border-white/10 lg:mx-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 text-accent">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Top Ranked</span>
                  <span className="text-[10px] sm:text-xs text-gray-400">Educational Institute</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/5 text-accent">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">100% Placement</span>
                  <span className="text-[10px] sm:text-xs text-gray-400">Assistance Provided</span>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(
            "lg:hidden relative transition-all duration-1000 delay-300 min-w-0 w-full overflow-hidden",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            <div className="flex items-center justify-between mb-2 px-1">
              <div className="text-white font-bold text-sm">Success Stories</div>
              <div className="text-gray-400 text-[10px]">Swipe</div>
            </div>
            <div
              ref={mobileCarouselRef}
              className="flex w-full gap-3 overflow-x-auto overscroll-x-contain max-w-full no-scrollbar snap-x snap-mandatory px-1 pb-2"
            >
              {students.map((student, index) => (
                <div
                  key={student.name}
                  data-mobile-student-index={index}
                  className="snap-center shrink-0 w-[230px]"
                >
                  <div className="relative h-[200px] rounded-2xl overflow-hidden bg-white">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover"
                      sizes="230px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-green-600 text-[8px] font-bold text-white tracking-widest uppercase shadow-lg">
                      Success
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="text-white font-bold text-sm leading-tight">
                        {student.name}
                      </div>
                      <div className="text-white/80 text-[10px] font-semibold uppercase tracking-wide">
                        {student.course}
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <div className="relative h-5 w-14 bg-white/90 rounded px-2 overflow-hidden">
                          <Image
                            src={student.companyLogo}
                            alt="Company"
                            fill
                            className="object-contain p-1"
                            sizes="56px"
                          />
                        </div>
                        <div className="text-accent font-black text-sm leading-none">
                          {student.package}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {students.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMobileStudentIndex(i)}
                  aria-label={`View success story ${i + 1}`}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    mobileStudentIndex === i ? "w-6 bg-accent" : "w-2 bg-white/25"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Right Content: Infographic Placement Card */}
          <div className={cn(
            "hidden lg:flex lg:col-span-5 relative transition-all duration-1000 delay-300 mt-2 lg:mt-0 justify-center lg:justify-end",
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse pointer-events-none" />
            
            <div className="relative group w-full max-w-[320px] sm:max-w-sm lg:max-w-[450px]">
              {/* Main Card */}
              <div className="bg-white rounded-[1.25rem] md:rounded-[2rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] mx-4 lg:mx-0">
                {/* Content Container with Animation */}
                <div className="relative h-[320px] sm:h-[380px] md:h-[600px]">
                  {students.map((student, index) => (
                    <div
                      key={index}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 ease-in-out flex flex-col",
                        currentStudent === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      {/* Full-width Student Image */}
                      <div className="relative h-[72%] sm:h-[75%] md:h-[100%] w-full">
                        <Image
                          src={student.image}
                          alt={student.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 320px, 450px"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Success Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-600 text-[8px] md:text-[10px] font-bold text-white tracking-widest uppercase shadow-lg">
                          Success Story
                        </div>
                      </div>

                      {/* Info Content */}
                      <div className="flex-1 p-4 md:p-6 flex flex-col justify-between bg-white">
                        <div>
                          <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-1">
                            {student.name}
                          </h3>
                          <p className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-wider mb-3 md:mb-4">
                            {student.course}
                          </p>
                        </div>
                        
                        {/* Placed At & Package Row */}
                        <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                          <div className="flex flex-col gap-1">
                            <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-gray-400 font-bold">Placed At</span>
                            <div className="relative h-6 md:h-8 w-16 md:w-24 bg-gray-50 rounded px-2 flex items-center justify-center border border-gray-100 shadow-sm">
                              <Image
                                src={student.companyLogo}
                                alt="Company"
                                fill
                                className="object-contain p-1"
                                sizes="(max-width: 768px) 64px, 96px"
                              />
                            </div>
                          </div>
                          <div className="text-right flex flex-col gap-0.5">
                            <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-gray-400 font-bold">Package</span>
                            <span className="text-lg md:text-2xl font-black text-accent leading-none">
                              {student.package}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Controls (Bottom Bar) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                  {students.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 h-full transition-all duration-300",
                        currentStudent === i ? "bg-accent" : "bg-gray-100"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
