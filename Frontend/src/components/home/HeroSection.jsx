"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { handleDownloadBrochure } from "@/lib/download";

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
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const bgImages = [
    '/images/BBA.jpg',
    '/images/BSCCS.jpg',
    '/images/PGDMLAI.jpg',
    '/images/BMLT.jpg'
  ];

  const nextStudent = () => {
    setCurrentStudent((prev) => (prev + 1) % students.length);
  };

  const prevStudent = () => {
    setCurrentStudent((prev) => (prev - 1 + students.length) % students.length);
  };

  // Auto-slide effect for background
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide effect for students
  useEffect(() => {
    const timer = setInterval(nextStudent, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white min-h-[400px] lg:min-h-[450px] flex items-center py-12 lg:py-20 overflow-hidden">
      {/* Auto-changing Background Images */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBgIndex === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={img}
              alt="Hero Background"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0601]/95 via-[#0a0601]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0601] via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 max-w-2xl">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs md:text-sm font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Admissions Open 2026
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-sm">
              India’s Fastest-Growing Institute for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Future-Ready Careers</span>
            </h1>

            <p className="text-gray-200 text-sm lg:text-lg leading-relaxed max-w-xl border-l-4 border-accent/50 pl-4 md:pl-6">
              IAER blends industry-driven education, global exposure, and hands-on skill training to create professionals who lead with innovation, integrity, and impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base md:text-lg font-bold rounded-full shadow-[0_0_30px_-5px_rgba(247,148,30,0.4)] hover:shadow-[0_0_40px_-5px_rgba(247,148,30,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="https://admission.iaer.ac.in/">
                APPLY TODAY <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-base md:text-lg font-semibold rounded-full hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              onClick={handleDownloadBrochure}
            >
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Right Content - Placement Highlight Card */}
        <div className="relative w-full max-w-md mx-auto lg:ml-auto">
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="relative p-6 md:p-8 bg-[#0a0601]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:border-accent/30 transition-all duration-500 group">
            <div className="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ring-4 ring-[#0a0601]/50">
              PLACEMENT HIGHLIGHT
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                {/* Student Image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={students[currentStudent].image}
                    alt={students[currentStudent].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white truncate group-hover:text-accent transition-colors">
                    {students[currentStudent].name}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-2 truncate">
                    {students[currentStudent].course}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent/10 border border-accent/20 text-accent font-bold text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {students[currentStudent].package} Package
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                    Placed at
                  </span>
                  <div className="relative h-8 w-24 bg-white/90 rounded px-2 flex items-center justify-center shadow-sm">
                    <Image
                      src={students[currentStudent].companyLogo}
                      alt="Company Logo"
                      fill
                      className="object-contain p-1.5"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevStudent}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 border border-white/10 transition-colors text-white hover:text-accent"
                    aria-label="Previous student"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextStudent}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-accent hover:bg-accent/90 shadow-lg transition-colors text-white"
                    aria-label="Next student"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
