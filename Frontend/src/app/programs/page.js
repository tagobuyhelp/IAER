'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { programs } from '@/lib/programs';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Briefcase, 
  Award, 
  Globe, 
  ArrowRight,
  Stethoscope,
  Cpu,
  LineChart,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import InfiniteCall from '@/components/InfiniteCall';

// Helper to get program details
const getProgramByCode = (code) => {
  return programs.find(p => p.code === code) || programs.find(p => p.id.includes(code.toLowerCase()));
};

// Flattened list of programs for the showcase if needed, or structured by category
const programCategories = [
  {
    id: 'ug',
    title: "Undergraduate Programs",
    description: "Bachelor's Degrees for High School Graduates",
    groups: [
      {
        name: "Management & Business",
        icon: <Briefcase className="w-5 h-5" />,
        programs: ["BBA", "BBA-GB", "BBA-AO", "BBA-HM"]
      },
      {
        name: "Technology & Data",
        icon: <Cpu className="w-5 h-5" />,
        programs: ["BCA", "BSCDS", "BSCCS"]
      },
      {
        name: "Healthcare & Hospitality",
        icon: <Stethoscope className="w-5 h-5" />,
        programs: ["BMLT", "BSCHHA"]
      }
    ]
  },
  {
    id: 'pg',
    title: "Postgraduate Programs",
    description: "Master's Degrees for Graduates",
    groups: [
      {
        name: "Management Degrees",
        icon: <Award className="w-5 h-5" />,
        programs: ["MBA", "PGDM"]
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
  '/images/BBA.jpg',
  '/images/BSCCS.jpg',
  '/images/PGDMLAI.jpg',
  '/images/BMLT.jpg'
];

export default function Programs() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('ug');
  const [activeProgram, setActiveProgram] = useState(null);

  // Auto-change hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Set initial active program
  useEffect(() => {
    const firstUgProgram = getProgramByCode("BBA");
    if (firstUgProgram) setActiveProgram(firstUgProgram);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white overflow-x-hidden">
      <InfiniteCall />
      
      {/* Hero Section with Parallax & Zoom Effect */}
      <section className="relative h-[45vh] md:h-[65vh] min-h-[400px] flex items-center justify-center overflow-hidden">
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
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
            className="text-3xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight leading-tight"
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
            className="text-base md:text-2xl text-gray-300 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Discover industry-aligned programs designed to launch your career in Management, Technology, and Healthcare.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4 md:px-10 md:py-7 text-base md:text-lg rounded-full shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,107,0,0.6)] transition-all duration-300">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-black hover:bg-white/10 px-6 py-4 md:px-10 md:py-7 text-base md:text-lg rounded-full backdrop-blur-sm">
              Download Brochure
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* Main Content - Split View */}
      <section className="relative py-12 md:py-24 bg-black" id="programs-list">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-4">
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-10 md:mb-20">
            <div className="relative inline-flex p-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              {programCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "relative px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 z-10",
                    activeCategory === cat.id ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent rounded-full shadow-lg shadow-accent/25"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 space-y-8 sticky top-24">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {programCategories.find(c => c.id === activeCategory)?.groups.map((group, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-3 text-accent mb-4">
                        <span className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                          {group.icon}
                        </span>
                        <h3 className="font-semibold tracking-wide text-sm uppercase">{group.name}</h3>
                      </div>
                      <div className="space-y-1 ml-3 border-l border-white/10 pl-4">
                        {group.programs.map((code) => {
                          const program = getProgramByCode(code);
                          if (!program) return null;
                          const isActive = activeProgram?.code === code || activeProgram?.id.includes(code.toLowerCase());
                          
                          return (
                            <button
                              key={code}
                              onClick={() => {
                                setActiveProgram(program);
                                document.getElementById('program-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }}
                              className={cn(
                                "block w-full text-left py-2 px-4 rounded-r-lg text-sm transition-all duration-200 border-l-2 -ml-[17px]",
                                isActive 
                                  ? "text-white border-accent bg-white/5 font-medium" 
                                  : "text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-700"
                              )}
                            >
                              {program.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Program Detail View */}
            <div className="lg:col-span-9" id="program-detail">
              <AnimatePresence mode='wait'>
                {activeProgram ? (
                  <motion.div
                    key={activeProgram.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm"
                  >
                    {/* Program Header Image */}
                    <div className="relative h-48 md:h-80 w-full overflow-hidden group">
                      <Image
                        src={activeProgram.image || '/images/iaer-campus.png'} // Fallback image
                        alt={activeProgram.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex flex-wrap gap-2 md:gap-3 mb-2 md:mb-4"
                        >
                          <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-accent text-white text-[10px] md:text-xs font-bold tracking-wider uppercase">
                            {activeProgram.duration}
                          </span>
                          <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/10 text-white text-[10px] md:text-xs font-medium backdrop-blur-md border border-white/10">
                            Full Time
                          </span>
                        </motion.div>
                        <motion.h2 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2"
                        >
                          {activeProgram.title}
                        </motion.h2>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-gray-400 text-sm md:text-lg"
                        >
                          {activeProgram.description}
                        </motion.p>
                      </div>
                    </div>

                    <div className="p-4 md:p-12 space-y-6 md:space-y-12">
                      {/* Overview */}
                      <div>
                        <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-6 flex items-center gap-3">
                          <BookOpen className="text-accent w-5 h-5 md:w-6 md:h-6" /> Program Overview
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
                          {activeProgram.longDescription || activeProgram.description}
                        </p>
                      </div>

                      {/* Key Highlights Grid */}
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="p-4 md:p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-accent/30 transition-colors group">
                          <Globe className="w-6 h-6 md:w-8 md:h-8 text-accent mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                          <h4 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Global Exposure</h4>
                          <p className="text-gray-400 text-xs md:text-sm">International internships and study tours designed to give you a global perspective.</p>
                        </div>
                        <div className="p-4 md:p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-accent/30 transition-colors group">
                          <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-accent mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                          <h4 className="text-base md:text-xl font-semibold mb-1 md:mb-2">100% Placement Support</h4>
                          <p className="text-gray-400 text-xs md:text-sm">Dedicated placement cell working with 500+ top recruiters worldwide.</p>
                        </div>
                      </div>

                      {/* Career Paths */}
                      {activeProgram.careers && (
                        <div>
                          <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-6 flex items-center gap-3">
                            <GraduationCap className="text-accent w-5 h-5 md:w-6 md:h-6" /> Career Opportunities
                          </h3>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {activeProgram.careers.map((career, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 border border-white/10 text-xs md:text-base text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                              >
                                {career}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA Section */}
                      <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 md:gap-4">
                        <Link href={`/programs/${activeProgram.id}`} className="flex-1">
                          <Button className="w-full bg-white text-black hover:bg-gray-200 py-4 md:py-6 text-base md:text-lg rounded-xl">
                            View Full Details <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                          </Button>
                        </Link>
                        <Link href="https://admission.iaer.ac.in/" target="_blank" className="flex-1">
                          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white py-4 md:py-6 text-base md:text-lg rounded-xl">
                            Apply Now
                          </Button>
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-96 text-gray-500">
                    Select a program to view details
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IAER - Feature Section */}
      <section className="py-12 md:py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">Why Choose IAER?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              We go beyond textbooks to provide practical, hands-on learning that prepares you for the real world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Industry Integrated Curriculum",
                desc: "Our courses are designed in collaboration with industry leaders to ensure relevance.",
                image: "/images/programs/iaer-industry-integrated-curriculum.png"
              },
              {
                title: "State-of-the-Art Campus",
                desc: "Modern labs, smart classrooms, and a vibrant campus life await you.",
                image: "/images/iaer-campus.png"
              },
              {
                title: "Global Alumni Network",
                desc: "Join a network of successful professionals working in top companies globally.",
                image: "/images/programs/iaer-global-alumni-network.png"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative overflow-hidden rounded-2xl h-64 md:h-96"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 md:p-8 flex flex-col justify-end">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-xs md:text-base">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
