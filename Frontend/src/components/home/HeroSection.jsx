"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { handleDownloadBrochure } from "@/lib/download";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const students = [
  {
    name: "Riya Chakraborty",
    course: "",
    package: "₹7.5 LPA",
    companyLogo: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png",
    image: "/images/students/riya.avif",
  },
  {
    name: "Arjun Saha",
    course: "",
    package: "₹9.5 LPA",
    companyLogo: "/images/company_logos/Amazon_logo.svg.png",
    image: "/images/students/arjun.jpg",
  },
  {
    name: "Rohan Singh",
    course: "",
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
    <section className="relative min-h-[560px] sm:min-h-[580px] lg:h-[calc(100vh-360px)] max-h-[720px] lg:max-h-[540px] flex flex-col justify-center pt-[140px] sm:pt-[150px] lg:pt-[120px] pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-[#143674] border-b border-white/10">
      {/* Dynamic Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out transform",
              currentBgIndex === index ? "opacity-30 scale-105" : "opacity-0 scale-100"
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
        {/* Overlays for premium blue mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#143674] via-[#143674]/95 to-[#143674]/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#143674] via-transparent to-transparent z-[1]" />
        
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[100px] z-[2]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center min-w-0 w-full">
          
          {/* Left Content: Information & CTA */}
          <div className={cn(
            "lg:col-span-8 space-y-4 sm:space-y-5 transition-all duration-1000 min-w-0",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="space-y-3 sm:space-y-4 text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 px-3 py-1.5 shadow-sm">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-green-400">
                  Admissions Open 2026-27
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] sm:text-5xl lg:text-[52px] xl:text-[56px] font-extrabold leading-[1.2] tracking-tight text-white lg:px-0 drop-shadow-lg max-w-5xl">
                Empowering the{" "}
                <span className="text-orange-400 animate-gradient-x inline-block">
                  Next Generation
                </span>{" "}
                <br className="hidden lg:block xl:hidden" />
                of Global Leaders
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-xl lg:mx-0 leading-relaxed font-medium lg:px-0 drop-shadow">
                IAER Kolkata provides industry-immersive education that bridges the gap between 
                academic knowledge and professional excellence.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center justify-start gap-3 sm:gap-4 pt-2 lg:px-0">
              <Button
                asChild
                size="lg"
                className="flex-1 sm:flex-none h-11 sm:h-12 md:h-12 px-6 sm:px-10 bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Link href="https://admission.iaer.ac.in/">
                  ENQUIRE NOW <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadBrochure}
                className="flex-1 sm:flex-none h-11 sm:h-12 md:h-12 px-6 sm:px-10 border border-blue-300/30 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                BROCHURE
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="flex items-center justify-start gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-white/10 lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-blue-500/20 text-accent">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Top Ranked</span>
                  <span className="text-[10px] sm:text-xs text-blue-200">Educational Institute</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg bg-blue-500/20 text-accent">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">100% Placement</span>
                  <span className="text-[10px] sm:text-xs text-blue-200">Assistance Provided</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Success Stories Carousel */}
          <div className={cn(
            "lg:hidden relative transition-all duration-1000 delay-300 min-w-0 w-full overflow-hidden",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="text-white font-bold text-sm">Success Stories</div>
              <div className="text-blue-200/70 text-[10px]">Swipe</div>
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
                  <div className="relative h-[200px] rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg backdrop-blur-sm">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover"
                      sizes="230px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#143674]/90 via-[#143674]/50 to-transparent" />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-accent text-[8px] font-bold text-white tracking-widest uppercase shadow-lg">
                      Success
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="text-white font-bold text-sm leading-tight">
                        {student.name}
                      </div>
                      <div className="text-blue-200 text-[10px] font-semibold uppercase tracking-wide">
                        {student.course}
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <div className="relative h-5 w-14 bg-white rounded px-1.5 overflow-hidden border border-white/30 shadow-sm">
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
                    mobileStudentIndex === i ? "w-6 bg-accent" : "w-2 bg-white/30"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Right Content: Desktop Infographic Placement Card */}
          <div className={cn(
            "hidden lg:flex lg:col-span-4 relative transition-all duration-1000 delay-300 mt-2 lg:mt-0 justify-center lg:justify-end",
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 rounded-full blur-[80px] animate-pulse pointer-events-none" />
            
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.25rem] md:rounded-[1.5rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] mx-4 lg:mx-0">
                {/* Content Container with Animation */}
                <div className="relative h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px]">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-[#143674] via-[#143674]/60 to-transparent" />
                        
                        {/* Success Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-[8px] md:text-[10px] font-bold text-white tracking-widest uppercase shadow-lg">
                          Success Story
                        </div>
                      </div>

                      {/* Info Content */}
                      <div className="flex-1 p-4 md:p-6 flex flex-col justify-between bg-gradient-to-b from-[#143674] to-[#0f2a5a] relative z-10 rounded-t-2xl -mt-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1">
                            {student.name}
                          </h3>
                          <p className="text-[10px] md:text-sm text-blue-200 font-bold uppercase tracking-wider mb-3 md:mb-4">
                            {student.course}
                          </p>
                        </div>
                        
                        {/* Placed At & Package Row */}
                        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                          <div className="flex flex-col gap-1">
                            <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-blue-200/70 font-bold">Placed At</span>
                            <div className="relative h-6 md:h-8 w-16 md:w-24 bg-white rounded px-2 flex items-center justify-center border border-white/20 shadow-sm">
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
                            <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-blue-200/70 font-bold">Package</span>
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
                <div className="absolute bottom-0 left-0 right-0 h-1 flex z-20">
                  {students.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 h-full transition-all duration-300",
                        currentStudent === i ? "bg-accent" : "bg-white/20"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Marquee Scrolling Element Under Hero */}
      <div className="w-full mt-8 lg:mt-12 bg-white backdrop-blur-md border-t border-white/10 py-3 relative z-20 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-shrink-0 text-[10px] sm:text-xs font-bold text-black uppercase tracking-widest whitespace-nowrap hidden md:block">
            Our Students Work At
          </div>
          <div className="flex-1 overflow-hidden mask-image-linear-gradient">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 sm:w-16 bg-gradient-to-r from-[#143674] to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 sm:w-16 bg-gradient-to-l from-[#143674] to-transparent"></div>
            
            <Marquee speed={40} autoFill pauseOnHover className="flex items-center">
              {[
                'Amazon_logo.svg.png', 'Infosys_logo.png', 'Tata_Consultancy_Services_old_logo.svg.png', 
                'Cognizant_logo.png', 'Tech_Mahindra.png', 'Capgemini.png', 'deloitte.svg', 'Accenture.png'
              ].map((logo, idx) => (
                <div key={idx} className="mx-4 sm:mx-8">
                  <img 
                    src={`/images/company_logos/${logo}`} 
                    alt="Company Logo" 
                    className="h-5 sm:h-7 object-contain  hover:opacity-100 transition-opacity duration-300" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

