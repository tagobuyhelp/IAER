"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  BookOpen, Briefcase, CheckCircle, Download, ExternalLink, FileText, BadgeCheck,
  Globe, Phone, Star, Trophy, Users, Mail,
  Award, TrendingUp, Lightbulb, Building2, Wifi, HeartHandshake,
  ShieldCheck, Rocket, Landmark, CreditCard,
  Banknote, ClipboardCheck, School, Hotel, Quote, CircleDollarSign, Target, Video, GraduationCap, MapPin, BarChart, Settings, MonitorPlay, ArrowRight, Menu, X, Facebook, Linkedin, Instagram, Twitter, Youtube, Layers, Search
} from 'lucide-react';
import Link from 'next/link';

export default function MHALandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const marqueeRef = useRef(null);
  const specScrollRef = useRef(null);

  const scroll = (direction) => {
    if (specScrollRef.current) {
      const { scrollLeft, clientWidth } = specScrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      specScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const [heroImgIdx, setHeroImgIdx] = useState(0);
  const heroImages = [
    '/images/about/building-image-about-hero.webp',
    '/images/programs/master-of-hospital-administration-overview.webp',
    '/images/programs/bba-in-hotel-hospitality-administration-banner.webp',
    '/images/programs/bba-in-global-business-overview.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const onDownload = () => {
    try {
      if (typeof window.openBrochurePopup === 'function') {
        window.openBrochurePopup();
      } else if (typeof window.openNpfPopup === 'function') {
        window.openNpfPopup('ee13b8b13cddfc1bfec07deacefd996b');
      } else {
        const trigger = document.querySelector('.npfWidgetButton');
        if (trigger) trigger.click();
      }
    } catch (e) {
      console.error("Popup not found", e);
    }
  };

  const onApplyNow = () => {
    try {
      if (typeof window.openNpfPopup === 'function') {
        window.openNpfPopup('ee13b8b13cddfc1bfec07deacefd996b');
      } else {
        const trigger = document.querySelector('.npfWidgetButton');
        if (trigger) trigger.click();
      }
    } catch (e) {
      console.error("Popup not found", e);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;
    const elements = document.querySelectorAll('[data-animate-on-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const whatYouWillLearn = [
    { 
      name: 'Hospital Operations & Administration', 
      icon: Building2, 
      desc: 'Learn how to manage daily hospital activities, streamline processes, and ensure smooth administrative workflows.',
      highlights: ['Facility Management', 'Resource Allocation', 'Daily Operations'],
      image: '/images/programs/master-of-hospital-administration-overview.webp'
    },
    { 
      name: 'Healthcare Systems & Policies', 
      icon: Globe, 
      desc: 'Understand the framework of modern healthcare systems and the policies that govern them locally and globally.',
      highlights: ['Health Policy', 'Regulatory Frameworks', 'Global Healthcare'],
      image: '/images/programs/bba-in-hotel-hospitality-administration-banner.webp'
    },
    { 
      name: 'Medical Ethics & Regulations', 
      icon: BookOpen, 
      desc: 'Gain knowledge of the ethical guidelines, legal responsibilities, and compliances required in medical settings.',
      highlights: ['Legal Compliance', 'Patient Rights', 'Ethical Standards'],
      image: '/images/programs/bba-in-global-business-overview.webp'
    },
    { 
      name: 'Patient Care & Service Management', 
      icon: Users, 
      desc: 'Focus on improving the patient experience, managing care delivery efficiently, and ensuring high satisfaction.',
      highlights: ['Patient Experience', 'Service Delivery', 'Care Coordination'],
      image: '/images/about/building-image-about-hero.webp'
    },
    { 
      name: 'Healthcare Quality & Safety', 
      icon: ShieldCheck, 
      desc: 'Learn to implement safety protocols and quality control measures to protect patients and healthcare staff.',
      highlights: ['Quality Control', 'Risk Management', 'Safety Protocols'],
      image: '/images/programs/master-of-hospital-administration-overview.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth font-sans pb-20 sm:pb-0">
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-hero-marquee {
          animation: hero-marquee 20s linear infinite;
        }
        .animate-hero-marquee:hover {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Top announcement bar */}
      <div className="relative w-full border-b border-white/10 bg-[#143674] text-[11px] text-white shadow-sm sm:text-sm">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -left-10 top-0 h-20 w-40 rounded-full bg-primary blur-2xl" />
        </div>
        <div className="relative mx-auto flex max-w-[1550px] items-center justify-between px-4 py-2">
          <p className="flex items-center gap-2 font-medium min-w-0">
            <CheckCircle className="h-4 w-4 animate-pulse flex-shrink-0 text-accent" />
            <span className="truncate">Admissions Open 2026 • MAKAUT Affiliated • AICTE Approved</span>
          </p>
          <a href="tel:+916292004641" className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/95 hover:bg-white/15 md:inline-flex">
            <Phone className="h-4 w-4" />
            <span>6292004641</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#143674]/95 backdrop-blur shadow-lg">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Link href="/">
              <img src="/images/logos/iaer-new-logo-dark-bg-supported.png" alt="IAER Logo" className="h-10 w-auto xl:h-12" />
            </Link>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-slate-200 lg:flex">
            {[
              { href: '#about', icon: BookOpen, label: 'Overview' },
              { href: '#specializations', icon: Layers, label: 'Specializations' },
              { href: '#why-iaer', icon: Star, label: 'Why IAER' },
              { href: '#placements', icon: Briefcase, label: 'Placements' },
              { href: '#campus-facilities', icon: Building2, label: 'Campus' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white">
                <l.icon className="h-4 w-4" />
                <span>{l.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-accent transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
            <a href="tel:+916292004641" className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/95 hover:bg-white/15">
              <Phone className="h-3.5 w-3.5" />
              <span>6292004641</span>
            </a>
            <Button onClick={onApplyNow} className="ml-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-accent/20 flex items-center">
              Enquire Now <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </nav>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-md p-2 text-slate-200 transition-colors hover:bg-white/10 lg:hidden" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`overflow-hidden border-t border-white/10 bg-[#143674] shadow-xl transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-1 px-4 py-4 text-sm text-slate-200">
            {[
              { href: '#about', icon: BookOpen, label: 'Overview' },
              { href: '#specializations', icon: Layers, label: 'Specializations' },
              { href: '#why-iaer', icon: Star, label: 'Why IAER' },
              { href: '#placements', icon: Briefcase, label: 'Placements' },
              { href: '#campus-facilities', icon: Building2, label: 'Campus & Facilities' },
            ].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 transition-colors hover:bg-white/10 hover:text-white">
                <l.icon className="h-4 w-4" />
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-[#143674] pt-4 sm:pt-5 pb-5 sm:pb-8 border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/images/campus/iaer-building.jpg" alt="IAER Campus Background" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#143674]/95 via-[#0b1c3a]/80 to-[#143674]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-30">
          <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/40 blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <div data-animate-on-scroll className="relative z-10 mx-auto grid max-w-[1550px] grid-cols-1 gap-3 sm:gap-4 px-4 py-3 sm:py-4 md:grid-cols-12 md:gap-6 md:py-6 transition-all duration-700 ease-out">
            <div className="flex-1 md:col-span-7 space-y-1.5 sm:space-y-3">
              <div className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider mb-2">
                MHA | PGDM – Hospital Management & Healthcare Administration
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-white shadow-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
                <span>Best MHA College in Kolkata with Placement</span>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold tracking-tighter text-white drop-shadow-lg leading-tight sm:leading-[1.1]">
                  Build a Career in Healthcare Management with <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-white">MHA in Kolkata</span>
                </h1>
                <p className="text-[10px] sm:text-base lg:text-lg font-medium text-blue-100/90 drop-shadow max-w-full sm:max-w-3xl leading-tight sm:leading-relaxed">
                  Looking for a Master of Hospital Management course in Kolkata? IAER offers one of the top MHA programs with strong placement support and international opportunities.
                </p>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-white mt-1 sm:mt-2" aria-label="Student rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-5 sm:w-5 text-accent drop-shadow-sm" fill="currentColor" />
                  ))}
                  <span className="ml-1 sm:ml-2 text-[9px] sm:text-xs text-gray-100 font-medium tracking-wide">4.9/5 Student Rating</span>
                </div>
              </div>

              <div className="flex items-center w-full sm:w-auto gap-2 sm:gap-3 mt-4">
                <Button onClick={onApplyNow} size="sm" className="flex-1 sm:flex-none h-8 sm:h-12 rounded-full bg-accent px-3 sm:px-8 text-[10px] sm:text-base font-bold text-white shadow-[0_0_15px_rgba(247,148,30,0.3)] transition-all hover:-translate-y-0.5 hover:bg-accent/90 flex justify-center items-center">
                  Enquire Now <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                </Button>
                <Button onClick={onDownload} variant="outline" size="sm" className="flex-1 sm:flex-none h-8 sm:h-12 rounded-full border border-primary text-primary bg-white/5 hover:bg-primary/10 px-3 sm:px-8 text-[10px] sm:text-base font-bold transition-all flex justify-center items-center">
                  <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" /> Brochure
                </Button>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-4">
                {[
                  { label: 'Hospital Internship & Practical Training', icon: Briefcase },
                  { label: 'Industry-Aligned Healthcare Curriculum', icon: BookOpen },
                  { label: 'Strong Placement Support', icon: Target },
                  { label: 'International Placement Opportunities', icon: Globe },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-1 sm:gap-2 rounded-full bg-white/5 border border-white/10 px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-xs font-medium text-white/90 backdrop-blur-sm shadow-inner transition-all hover:bg-white/10 hover:-translate-y-0.5 cursor-default">
                    <b.icon className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-accent" />
                    {b.label}
                  </div>
                ))}
              </div>

            </div>

            <div className="flex flex-col md:col-span-5 items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-0">
              <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[400px] overflow-hidden rounded-2xl shadow-xl border border-white/20 ring-4 ring-white/5">
                {heroImages.map((src, idx) => (
                  <img 
                    key={src}
                    src={src} 
                    alt={`Highlight ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${idx === heroImgIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                    onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }}
                  />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20" />
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
                  {heroImages.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setHeroImgIdx(idx)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === heroImgIdx ? 'w-6 sm:w-8 bg-accent' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Marquee */}
              <div className="w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner py-3">
                 <div className="flex w-max animate-hero-marquee space-x-6 px-4 items-center">
                   {[...Array(2)].map((_, i) => (
                     <React.Fragment key={i}>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Award className="h-3.5 w-3.5 text-accent" /> Hospital Internship
                       </span>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Briefcase className="h-3.5 w-3.5 text-primary" /> ₹4.50+ LPA Avg Package
                       </span>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Globe className="h-3.5 w-3.5 text-teal-400" /> International Placements
                       </span>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Building2 className="h-3.5 w-3.5 text-blue-400" /> ₹10.00+ LPA Highest Package
                       </span>
                     </React.Fragment>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* --- ABOUT --- */}
      <section id="about" className="relative border-b border-slate-200 bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 sm:py-8">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative h-[300px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200 group">
              <img src="/images/about/building-image-about-hero.webp" alt="IAER Overview" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#143674] text-white">
                  <BookOpen className="h-4 w-4" />
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#143674]">About MHA at IAER</h2>
              </div>
              <div className="mb-4 h-1 w-20 rounded-full bg-primary" />
              <div className="prose prose-sm max-w-none text-slate-700">
                <p className="leading-relaxed text-base">
                  IAER offers a career-focused MHA program in Kolkata, designed for students from West Bengal and North East India who want to build careers in the rapidly growing healthcare sector in India as well as abroad.
                </p>

                <div className="mt-4 text-sm font-medium text-slate-600">
                  <p className="mb-2 uppercase tracking-widest text-[10px] text-[#143674] font-bold">If you're searching for:</p>
                  <div className="flex flex-wrap gap-2">
                    {['MHA course in Kolkata', 'hospital management course in West Bengal', 'healthcare management course in North East India', 'MHA college with international opportunities'].map((tag) => (
                      <span key={tag} className="inline-flex items-center bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-700 hover:border-primary hover:text-primary transition-colors cursor-default">
                        <Search className="w-3 h-3 mr-1.5 text-slate-400" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-5 bg-gradient-to-br from-[#143674] to-[#0b1c3a] rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700" />
                  <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Target className="w-4 h-4 text-accent" /> Curriculum Focuses On:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                    {[
                      { label: 'Hospital Operations & Administration' },
                      { label: 'Healthcare Systems & Policies' },
                      { label: 'Medical Ethics & Regulations' },
                      { label: 'Patient Care & Service Management' }
                    ].map((i) => (
                      <div key={i.label} className="group/item flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-2.5 shadow-sm hover:bg-white/20 transition-all cursor-default hover:-translate-y-0.5">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <div className="text-xs sm:text-sm font-semibold text-white/90">{i.label}</div>
                      </div>
                    ))}
                  </div>
                 </div>

                 {/* International Placement Opportunities */}
                 <div className="mt-6 bg-gradient-to-r from-blue-50 to-white p-5 rounded-2xl border border-blue-100 shadow-sm">
                    <h4 className="text-sm font-bold text-[#143674] mb-3 uppercase tracking-wider flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> International Placement Opportunities</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      IAER provides pathways to international healthcare careers, a major advantage for students from West Bengal and North East India.
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {['Hospital Administration Abroad', 'Healthcare Support Services', 'Medical Tourism'].map((op) => (
                         <span key={op} className="inline-flex items-center gap-1.5 bg-blue-100/50 text-[#143674] rounded-lg px-3 py-1.5 text-[11px] sm:text-xs font-semibold border border-blue-200">
                           <Award className="w-3.5 h-3.5 text-primary" /> {op}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPECIALIZATIONS --- */}
      <section id="specializations" className="relative border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1200px] px-4 py-6 sm:py-8">
          <div className="flex flex-col gap-1 mb-6 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary">Choose Your Path</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#143674] tracking-tight">
              What You Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Learn</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Gain a strong foundation in healthcare systems and management for real hospital environments</p>
            <div className="mx-auto sm:mx-0 mt-4 h-1.5 w-24 rounded-full bg-accent shadow-sm" />
          </div>

          <div className="relative group/slider mt-4">
            {/* Left Scroll Button */}
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-[#143674] hover:bg-[#143674] hover:text-white transition-all duration-300 active:scale-95 md:opacity-0 group-hover/slider:opacity-100 focus:opacity-100 focus:outline-none pointer-events-auto md:flex hidden"
              aria-label="Scroll Left"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            {/* Right Scroll Button */}
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-[#143674] hover:bg-[#143674] hover:text-white transition-all duration-300 active:scale-95 md:opacity-0 group-hover/slider:opacity-100 focus:opacity-100 focus:outline-none pointer-events-auto md:flex hidden"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div 
              ref={specScrollRef}
              className="flex gap-5 overflow-x-auto pb-6 pt-2 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
            >
            {whatYouWillLearn.map((spec) => (
               <div key={spec.name} className="group flex flex-col flex-shrink-0 w-[290px] sm:w-[350px] snap-start rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal-400 to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20" />
                  
                  {/* Card Header Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img 
                      src={spec.image} 
                      alt={spec.name} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-flex p-2 items-center justify-center rounded-lg bg-white/95 text-[#143674] shadow-md group-hover:bg-[#143674] group-hover:text-white transition-all duration-300">
                      <spec.icon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                     <h3 className="font-bold text-[#143674] text-base sm:text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{spec.name}</h3>
                     <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{spec.desc}</p>
                     
                     {spec.highlights && (
                       <div className="flex flex-wrap gap-1.5 mb-5 flex-grow">
                         {spec.highlights.map((hl, idx) => (
                           <span key={idx} className="inline-flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-md px-2 py-1 text-[10px] sm:text-[11px] font-semibold text-slate-600 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors cursor-default">
                             <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                             {hl}
                           </span>
                         ))}
                       </div>
                     )}
                     
                     <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">Seats Filling Fast</span>
                        <Button onClick={onApplyNow} size="sm" className="h-8 px-4 text-[10px] sm:text-xs font-bold rounded-full bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-all">
                           Explore <ArrowRight className="w-3 h-3 ml-1.5" />
                        </Button>
                     </div>
                  </div>
               </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* --- WHY IAER --- */}
      <section id="why-iaer" className="relative border-b border-slate-200 bg-[#143674] overflow-hidden">
        <div className="absolute inset-0 z-0 flex opacity-10 saturate-0 mix-blend-screen">
          <img src="/images/about/building-image-about-hero.webp" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#143674]/95 to-[#0b1c3a]/95" />
        
        <div data-animate-on-scroll className="relative z-10 mx-auto max-w-[1550px] px-4 py-8 sm:py-10 text-white">
          <div className="text-center mb-6 sm:mb-8">
             <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">Program Features</h2>
             <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Building2, title: 'Hospital Internship & Training', desc: 'Hands-on training in hospitals and healthcare organizations.' },
              { icon: Target, title: 'Communication & Management Skills', desc: 'Focus on leadership, patient handling, and administrative efficiency.' },
              { icon: BookOpen, title: 'Industry-Relevant Learning', desc: 'Case studies, projects, and real-world healthcare scenarios.' },
              { icon: Globe, title: 'Healthcare Industry Exposure', desc: 'Interaction with hospital professionals and administrators.' },
            ].map((item, idx) => (
              <div key={item.title} className={`group flex flex-col items-center text-center bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 hover:border-accent/30 shadow-lg relative overflow-hidden`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-accent/20 transition-all shadow-inner">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1.5 text-white leading-tight">{item.title}</h3>
                <p className="text-[10px] sm:text-xs text-blue-200/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AWARDS / ACHIEVEMENTS --- */}
      <section className="relative bg-[#143674] py-8 sm:py-10 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#143674]/95 via-[#0b1c3a]/80 to-[#143674]/95 mix-blend-multiply z-0" />
        
        <div className="relative z-10 mx-auto max-w-[1550px] px-4">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent mb-2 block">Recognized Excellence</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
              Our Achievements
            </h2>
            <div className="mt-4 h-1.5 w-16 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
               {[
                 { title: 'Best Innovative IT College in Eastern India', source: '(IT Startup Excellence Awards, 2019)' },
                 { title: 'Best Emerging e-Business School of the Year', source: '(Virtual Education & Technology Awards, 2020)' },
                 { title: 'Best Startup Education College in Eastern India', source: '(StartUp & VC Award for Excellence, 2021)' },
                 { title: 'Top 10 Best College for Data Science in India', source: '(Knowledge Review, 2024)' },
                 { title: 'Top 10 Best College for Cyber Security in India', source: '(Knowledge Review, 2025)' },
                 { title: 'Best Emerging Information Technology Award', source: '(Edulite Excellence Award, 2024)' },
                 { title: 'Best College for Innovation in Eastern India', source: '(Edulite Excellence Award, 2025)' },
                 { title: 'Excellence in Information Technology Education', source: '(Collegedunia, 2024)' }
               ].map((ach, i) => (
                 <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-accent/10 flex flex-col justify-between backdrop-blur-sm">
                   <div className="mb-4 bg-white/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all shadow-inner">
                     <Award className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                   </div>
                   <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">{ach.title}</h4>
                   <p className="text-[10px] sm:text-[11px] text-blue-200/70 font-medium tracking-wide uppercase">{ach.source}</p>
                 </div>
               ))}
          </div>
        </div>
      </section>

      {/* --- PLACEMENTS --- */}
      <section id="placements" className="relative border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-8 sm:py-10">
          <div className="flex flex-col gap-1 mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary">Future Pathways</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#143674] tracking-tight">
              Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Highlights</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Start Your Career with One of the Best MHA Colleges in Kolkata</p>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-accent shadow-sm" />
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
            
            {/* Left side: Stats (Cols 1-5) */}
            <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#143674] via-[#0b1c3a] to-[#143674] p-6 sm:p-8 text-white shadow-xl overflow-hidden group min-h-[160px] flex items-center">
                 <div className="absolute inset-0 bg-[url('/images/about/building-image-about-hero.webp')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                 <CircleDollarSign className="absolute -right-4 -bottom-4 w-40 h-40 opacity-10" />
                 <div className="relative z-10 flex flex-col justify-center w-full">
                    <div className="text-sm font-medium text-blue-200 mb-1 uppercase tracking-wider">Highest Package</div>
                    <div className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">₹15.20<span className="text-2xl sm:text-3xl text-white/80">LPA</span></div>
                 </div>
              </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 flex-grow">
                 <div className="rounded-2xl bg-white p-3 sm:p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                   <div className="text-2xl sm:text-4xl font-extrabold text-[#143674] mb-1">₹4.50+</div>
                   <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">LPA Average</div>
                 </div>
                 <div className="rounded-2xl bg-white p-3 sm:p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                   <div className="text-2xl sm:text-4xl font-extrabold text-[#143674] mb-1">₹10.00+</div>
                   <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">LPA Highest</div>
                 </div>
                 <div className="rounded-2xl bg-white p-3 sm:p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                   <div className="text-2xl sm:text-4xl font-extrabold text-[#143674] mb-1">100%</div>
                   <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Internship Opportunities</div>
                 </div>
              </div>
            </div>

            {/* Right side: Careers & Recruiters (Cols 6-12) */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
               <div className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-slate-200 shadow-sm flex-grow flex flex-col gap-5 sm:gap-6">
                 
                 {/* Top Recruiters */}
                 <div>
                    <h4 className="text-sm font-bold text-[#143674] mb-3 uppercase tracking-wider flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Top Recruiters</h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                       {['Multi-specialty Hospitals', 'Healthcare Chains', 'Diagnostic Centers', 'Healthcare Organizations'].map((recruiter) => (
                         <span key={recruiter} className="inline-flex items-center justify-center bg-white text-slate-700 shadow-sm border border-slate-200 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold">
                           {recruiter}
                         </span>
                       ))}
                    </div>
                 </div>

                 {/* Career Opportunities */}
                 <div>
                   <h4 className="text-sm font-bold text-[#143674] mb-3 uppercase tracking-wider flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> Career Opportunities</h4>
                   <div className="flex flex-wrap gap-2 sm:gap-2.5">
                     {['Hospital Administrator', 'Healthcare Manager', 'Operations Executive', 'Medical Coordinator', 'Clinic Manager', 'Healthcare Consultant'].map((role) => (
                       <span key={role} className="inline-flex items-center gap-1.5 bg-[#143674]/5 text-[#143674] rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold border border-[#143674]/10 hover:bg-[#143674] hover:text-white transition-colors cursor-default">
                         <CheckCircle className="w-3 h-3" /> {role}
                       </span>
                     ))}
                   </div>
                  </div>

                  {/* Industry Collaborations */}
                  <div>
                    <h4 className="text-sm font-bold text-[#143674] mb-3 uppercase tracking-wider flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /> Industry Collaborations</h4>
                    <div className="grid grid-cols-3 gap-2.5 sm:flex sm:flex-wrap sm:gap-4 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-100 justify-start items-center">
                      {[
                        { src: "/images/affiliations/confederation.png", alt: "CII" },
                        { src: "/images/affiliations/MSME.png", alt: "MSME" },
                        { src: "/images/affiliations/NHRD.png", alt: "NHRD" },
                        { src: "/images/affiliations/ERSC.jpeg", alt: "ERSC" },
                        { src: "/images/affiliations/NSDC.png", alt: "NSDC" }
                      ].map((collab, idx) => (
                        <div key={idx} className="bg-white p-1.5 sm:p-2.5 rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-center h-16 sm:h-16 w-full sm:w-28 transition-all hover:scale-105">
                          <img 
                            src={collab.src} 
                            alt={collab.alt} 
                            className="max-h-full max-w-full object-contain" 
                            onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* --- TESTIMONIALS --- */}
      <section className="relative py-8 sm:py-10 bg-white border-b border-slate-200">
         <div className="mx-auto max-w-[1550px] px-4">
            <div className="text-center mb-6 sm:mb-8">
               <h2 className="text-2xl sm:text-3xl font-bold text-[#143674] mb-2">Voices of Success</h2>
               <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               {/* Student Testimonials */}
               <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-[#143674] flex items-center gap-2 mb-4"><GraduationCap className="w-5 h-5 text-primary" /> Student Testimonials</h3>
                  <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar">
                     {[
                       { name: 'Riya Das', title: 'MHA/PGDM-HMHA – 2025', company: 'Hospital Executive, Apollo Hospitals', quote: 'The program gave me exposure to both hospital operations and international healthcare standards.' },
                       { name: 'David Sangma', title: 'MHA/PGDM-HMHA – 2024', company: 'Healthcare Coordinator, Middle East Hospital, Bahrain', quote: 'The training helped me understand opportunities beyond India as well. Thank You IAER for my placement in Middle East.' }
                     ].map((t, i) => (
                       <div key={i} className="group relative flex-shrink-0 w-[290px] sm:w-[340px] snap-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                          <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors" />
                          <p className="text-sm text-slate-700 italic mb-5 relative z-10 leading-relaxed h-16 line-clamp-3">"{t.quote}"</p>
                          <div className="flex items-center gap-3 relative z-10">
                             <img src="/images/logos/IAER_ICON.jpg" alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-primary/30 transition-all" />
                             <div>
                                <div className="text-sm font-bold text-slate-900">{t.name}</div>
                                <div className="text-[11px] font-semibold tracking-wider text-slate-500">{t.title}</div>
                                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">{t.company}</div>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Industry Testimonials */}
               <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-[#143674] flex items-center gap-2 mb-4"><Briefcase className="w-5 h-5 text-primary" /> Industry Testimonials</h3>
                  <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar">
                     {[
                       { name: 'Subhasish Bhowmick', company: 'Apollo Diagnostics', quote: 'IAER students are trained with practical healthcare knowledge and are job-ready.' },
                       { name: 'Dr. Avijit Mondal', company: 'Vivacity Multi Speciality Hospital', quote: 'Their hospital management students understand real-world operations effectively.' }
                     ].map((t, i) => (
                       <div key={i} className="group relative flex-shrink-0 w-[290px] sm:w-[340px] snap-start bg-gradient-to-br from-blue-50/50 to-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                          <Quote className="absolute top-4 right-4 w-12 h-12 text-blue-100 group-hover:text-blue-200/50 transition-colors" />
                          <p className="text-sm text-slate-700 italic mb-5 relative z-10 leading-relaxed h-16 line-clamp-3">"{t.quote}"</p>
                          <div className="flex items-center gap-3 relative z-10">
                             <img src="/images/logos/IAER_ICON.jpg" alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all" />
                             <div>
                                <div className="text-sm font-bold text-slate-900">{t.name}</div>
                                <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">{t.company}</div>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- CAMPUS EXPERIENCE & FACILITIES --- */}
      <section id="campus-facilities" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
         <div className="mx-auto max-w-[1550px] px-4">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
               
               <div>
                  <h2 className="text-2xl font-bold text-[#143674] mb-4 flex items-center gap-2"><Video className="w-6 h-6 text-accent" /> Campus & Learning Experience</h2>
                  <p className="text-sm text-slate-600 mb-4">Watch How IAER Builds Future Healthcare Leaders</p>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
                     <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/qyZN30yzHjU"
                        title="Campus Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                  </div>
               </div>

               <div className="space-y-6 sm:space-y-8">
                  <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm ring-1 ring-slate-200">
                     <h2 className="text-lg font-bold text-[#143674] mb-1 flex items-center gap-2"><Hotel className="w-5 h-5 text-primary" /> Hostel & Campus Facilities</h2>
                     <p className="text-[11px] sm:text-xs text-slate-500 mb-4">Safe and comfortable hostel facilities in Kolkata for students.</p>
                     <div className="flex flex-wrap gap-2">
                        {[
                           { text: 'Separate hostels (Boys & Girls)', icon: Users },
                           { text: 'Furnished rooms', icon: Hotel },
                           { text: 'Hygienic food', icon: HeartHandshake },
                           { text: '24/7 security', icon: ShieldCheck },
                           { text: 'Wi-Fi enabled campus', icon: Wifi },
                        ].map((fac, i) => (
                           <span key={i} className="group inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-primary/50 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 hover:bg-blue-50/50 transition-colors cursor-default">
                              <fac.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                              {fac.text}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-5 sm:p-6 shadow-sm ring-1 ring-blue-100 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 relative z-10">
                        <h2 className="text-lg font-bold text-[#143674] flex items-center gap-2"><Banknote className="w-5 h-5 text-primary" /> Scholarships & Loans</h2>
                        <span className="text-[10px] font-bold text-white bg-primary px-3 py-1 rounded-full w-fit whitespace-nowrap">Study Now, Pay Later</span>
                     </div>
                     <div className="flex flex-wrap gap-2 relative z-10">
                        {[
                           'Merit-Based Scholarships',
                           'ICET Scholarships',
                            'Govt. Schemes',
                            'Student Credit Card Facility',
                           'Vidya Lakshmi Education Loan'
                        ].map((item, i) => (
                           <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-blue-100 shadow-sm rounded-lg px-3 py-2 text-[11px] sm:text-xs font-bold text-[#143674] hover:shadow-md transition-shadow">
                              <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- ELIGIBILITY & ADMISSION --- */}
      <section id="eligibility" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
         <div className="mx-auto max-w-[1550px] px-4">
            <div className="text-center mb-10 sm:mb-14">
               <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0f9f68] mb-2 block">Quick & Simple Admission</span>
               <h2 className="text-3xl sm:text-5xl font-extrabold text-[#143674] tracking-tight">
                  Eligibility & <span className="text-[#0f9f68]">Admission Process</span>
               </h2>
               <div className="mt-4 h-1.5 w-14 bg-orange-500 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
               {/* Left Column: Eligibility Criteria Card (3 cols) */}
               <div className="lg:col-span-3 flex flex-col">
                  <div className="bg-gradient-to-b from-[#0a387c] to-[#042459] text-white rounded-[2rem] p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(4,36,89,0.15)] h-full relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-120 transition-transform duration-500" />
                     
                     <div className="w-16 h-16 rounded-full bg-blue-900/60 border border-blue-800/40 flex items-center justify-center mb-8 shadow-inner">
                        <GraduationCap className="w-8 h-8 text-orange-500" />
                     </div>

                     <div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Eligibility Criteria</h3>
                        <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed mb-8">
                           Simple and direct admission criteria for aspiring healthcare professionals.
                        </p>
                        
                        <div className="bg-white/10 rounded-2xl p-5 border border-white/5 shadow-inner">
                           <div className="text-[10px] uppercase tracking-wider text-orange-400 font-bold mb-1.5">Academic Requirement</div>
                           <div className="text-base sm:text-[1.1rem] font-bold leading-snug">10+2 from any recognized board</div>
                        </div>
                     </div>

                     <div className="mt-8 text-[11px] text-blue-200/50">
                        * Open to all streams (Science, Commerce, Arts)
                     </div>
                  </div>
               </div>

               {/* Right Column: Step Cards (9 cols) */}
               <div className="lg:col-span-9 flex flex-col justify-center">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 h-full">
                     {[
                        { 
                           step: '01', 
                           num: '1', 
                           title: 'Apply Online', 
                           desc: 'Fill the quick registration form online.',
                           colorClass: 'text-blue-500',
                           bgClass: 'bg-blue-50',
                           iconColor: 'text-blue-600',
                           icon: FileText,
                           dotIdx: 0
                        },
                        { 
                           step: '02', 
                           num: '2', 
                           title: 'Get Offer Letter', 
                           desc: 'Receive your official admission offer.',
                           colorClass: 'text-emerald-500',
                           bgClass: 'bg-[#e6f7ed]',
                           iconColor: 'text-[#0f9f68]',
                           icon: Mail,
                           dotIdx: 1
                        },
                        { 
                           step: '03', 
                           num: '3', 
                           title: 'Pay Enrollment Fee', 
                           desc: 'Secure your seat by paying enrollment fees.',
                           colorClass: 'text-purple-500',
                           bgClass: 'bg-[#f3effc]',
                           iconColor: 'text-purple-600',
                           icon: CreditCard,
                           dotIdx: 2
                        },
                        { 
                           step: '04', 
                           num: '4', 
                           title: 'Confirm Admission', 
                           desc: 'Complete documentation and welcome aboard!',
                           colorClass: 'text-orange-500',
                           bgClass: 'bg-[#fff7ed]',
                           iconColor: 'text-orange-500',
                           icon: BadgeCheck,
                           dotIdx: 3
                        }
                     ].map((item, i) => (
                        <div key={i} className="bg-white rounded-[2rem] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative group overflow-hidden">
                           {/* Step Cards Top Header */}
                           <div className="w-full flex justify-between items-center mb-6">
                              <span className={`text-lg sm:text-xl font-extrabold ${item.colorClass}`}>{item.step}</span>
                              <span className={`w-6 h-6 rounded-full ${item.bgClass} ${item.colorClass} font-bold text-xs flex items-center justify-center shadow-sm`}>
                                 {item.num}
                              </span>
                           </div>

                           {/* Card Icon Shape */}
                           <div className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full ${item.bgClass} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-inner`}>
                              <item.icon className={`w-9 h-9 ${item.iconColor}`} />
                           </div>

                           {/* Title & Description */}
                           <h4 className="font-extrabold text-[#143674] text-lg mb-2 tracking-tight group-hover:text-[#0f9f68] transition-colors">{item.title}</h4>
                           <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[200px] mb-8">{item.desc}</p>

                           {/* Visual Dots Indicator at the Bottom */}
                           <div className="flex gap-1.5 mt-auto">
                              {[0, 1, 2, 3].map((dot) => (
                                 <span 
                                    key={dot} 
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                       dot === item.dotIdx ? `w-2 ${item.colorClass.replace('text-', 'bg-')}` : 'bg-slate-200'
                                    }`} 
                                 />
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="text-center mb-6 sm:mb-8">
             <h2 className="text-2xl sm:text-3xl font-bold text-[#143674] mb-2">Frequently Asked Questions</h2>
             <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'Does IAER provide placement support for MHA students?', a: 'Yes, IAER provides structured placement support including hospital internships, skill training, and connections with healthcare recruiters.' },
              { q: 'Are internships included in the MHA program?', a: 'Yes, students undergo mandatory hospital internships to gain practical experience in real healthcare environments.' },
              { q: 'Does IAER provide international placement opportunities?', a: 'Yes, IAER prepares students for international healthcare roles through skill development, exposure, and global career guidance.' },
              { q: 'Can MHA students work abroad after completing the course?', a: 'Yes, students can explore global healthcare opportunities based on their skills, experience, and international requirements.' },
              { q: 'What is the average salary after MHA?', a: 'The average salary after MHA is around ₹4.50+ LPA depending on skills, experience, and job role.' },
              { q: 'What is the highest salary offered after MHA?', a: 'The highest salary can go up to ₹10.00 LPA for top-performing students and specialized roles.' },
              { q: 'Does IAER provide hostel facilities for MHA students?', a: 'Yes, IAER offers safe and comfortable hostel facilities for both boys and girls with essential amenities.' },
              { q: 'Does IAER provide education loan assistance?', a: 'Yes, IAER assists students with education loan documentation and guidance through banks and financial schemes.' },
              { q: 'Are scholarships available for MHA students?', a: 'Yes, IAER offers merit-based scholarships and support through government schemes for eligible students.' },
              { q: 'Is MHA a good career option in India and abroad?', a: 'Yes, MHA offers strong career opportunities in hospitals, healthcare organizations, and international healthcare sectors.' }
            ].map((faq, i) => (
              <div key={i} className="group bg-white border border-slate-200 hover:border-primary/30 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-sm sm:text-base font-bold text-[#143674] mb-2 flex items-start gap-2.5">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-black text-xs group-hover:bg-primary group-hover:text-white transition-colors">Q</span> 
                  <span className="mt-0.5 leading-snug">{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-[#143674] border-t border-white/10 pt-8 sm:pt-10 pb-6">
        <div className="mx-auto max-w-[1550px] px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Start Your Career in Healthcare Management with Global Opportunities
          </h2>
          <p className="text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Admissions Open 2026 | Limited Seats Available
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button onClick={onApplyNow} size="lg" className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent/90 text-white font-bold px-6 sm:px-8 py-5 text-base shadow-lg flex justify-center items-center">
              Enquire Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={onDownload} variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-white font-bold px-6 sm:px-8 py-5 text-base shadow-lg">
              <Download className="mr-2 w-5 h-5" /> Download Brochure
            </Button>
            <a href="tel:+916292004641" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 transition-colors">
              <Phone className="w-5 h-5" /> Talk to Experts
            </a>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-blue-200/60">
            <p>&copy; {new Date().getFullYear()} IAER. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/iaerindia/" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/iaerindia/" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/school/iaer/" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://x.com/iaerindia" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/channel/UCzVuXEZ6EUykVF0qhHKcdfQ/featured" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- FLOATING BOTTOM CTA BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] sm:bottom-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:rounded-full sm:border sm:px-3 sm:py-2 flex items-center justify-between px-2 py-2 gap-1.5 sm:gap-3 transition-all duration-300 w-full sm:w-max">
         <nav className="flex items-center justify-between sm:justify-start gap-1 flex-1 sm:flex-none">
            {[
              { name: 'About', href: '#about', icon: BookOpen },
              { name: 'Programs', href: '#specializations', icon: Target },
              { name: 'Why Us', href: '#why-iaer', icon: Building2 },
              { name: 'Placements', href: '#placements', icon: Briefcase }
            ].map(link => (
               <a key={link.name} href={link.href} className="flex flex-col sm:flex-row items-center justify-center sm:px-4 sm:py-2 text-slate-500 sm:text-slate-600 hover:text-[#143674] sm:hover:bg-slate-100 rounded-full transition-colors flex-1 sm:flex-none">
                  <link.icon className="w-5 h-5 sm:hidden mb-0.5" />
                  <span className="text-[9px] sm:text-sm font-bold sm:font-semibold uppercase sm:capitalize tracking-tighter sm:tracking-normal leading-none text-center">{link.name}</span>
               </a>
            ))}
         </nav>

         <div className="h-8 w-px bg-slate-200 hidden sm:block mx-1" />

         <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <Button onClick={onApplyNow} className="bg-[#143674] hover:bg-[#143674]/90 text-white font-bold rounded-full px-2.5 py-2.5 sm:px-5 sm:py-2 text-[10px] sm:text-sm shadow-lg active:scale-95 transition-all whitespace-nowrap flex items-center justify-center">
               Enquire Now
            </Button>
            <a href="tel:+916292004641" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-2.5 py-2.5 sm:px-5 sm:py-2 text-[10px] sm:text-sm shadow-lg shadow-accent/30 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center gap-1">
               <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> Call Now
            </a>
         </div>
      </div>
    </div>
  );
}
