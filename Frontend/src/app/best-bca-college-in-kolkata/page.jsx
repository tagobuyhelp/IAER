"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  BookOpen, Briefcase, CheckCircle, Download, ExternalLink, FileText, BadgeCheck,
  Globe, Phone, Star, Trophy, Users, Mail,
  Award, TrendingUp, Lightbulb, Building2, Wifi, HeartHandshake,
  ShieldCheck, Rocket, Landmark, CreditCard,
  Banknote, ClipboardCheck, School, Hotel, Quote, CircleDollarSign, Target, Video, GraduationCap, MapPin, BarChart, Settings, MonitorPlay, ArrowRight, Menu, X, Layers, Search, ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function BCALandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
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
    '/images/programs/bca-overview.webp',
    '/images/programs/bca-in-data-science-cyber-security-overview.webp',
    '/images/programs/bca-in-ai-ml-overview.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const btnId = '10d5d69d0bd7a76f17c3173a5d763657';
    const baseUrl = 'widgets.nopaperforms.com';
    window.__IAER_ACTIVE_WIDGET_ID = btnId;
    console.log("[Meritto BCA] Hook mounted. Target widget ID:", btnId);
    
    // Ensure hidden button exists
    let btn = document.querySelector('.npfWidget-' + btnId);
    if (!btn) {
      console.log("[Meritto BCA] Creating hidden button element");
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'npfWidgetButton npfWidget-' + btnId;
      btn.style.display = 'none';
      btn.textContent = 'Enquire Now!';
      document.body.appendChild(btn);
    } else {
      console.log("[Meritto BCA] Hidden button element already exists in DOM");
    }

    const initWidget = () => {
      let NpfConstructor = null;
      try {
        if (typeof window.NpfWidgetsInit === 'function') {
          NpfConstructor = window.NpfWidgetsInit;
        } else if (typeof NpfWidgetsInit === 'function') {
          NpfConstructor = NpfWidgetsInit;
        }
      } catch (err) {}

      console.log("[Meritto BCA] initWidget run. Constructor found:", !!NpfConstructor);
      if (NpfConstructor) {
        if (!window['npfW' + btnId]) {
          console.log("[Meritto BCA] Initializing new NpfWidgetsInit for", btnId);
          window['npfW' + btnId] = new NpfConstructor({
            "widgetId": btnId,
            "baseurl": baseUrl,
            "formTitle": "Enquiry Form",
            "titleColor": "#FF0033",
            "backgroundColor": "#ddd",
            "iframeHeight": "500px",
            "buttonbgColor": "#4c79dc",
            "buttonTextColor": "#FFF"
          });
          console.log("[Meritto BCA] NpfWidgetsInit instance created:", window['npfW' + btnId]);
        } else {
          console.log("[Meritto BCA] NpfWidgetsInit instance already exists");
        }

        const trigger = document.querySelector('.npfWidget-' + btnId);
        if (trigger) {
          console.log("[Meritto BCA] Binding onclick to trigger button");
          trigger.onclick = (e) => {
            console.log("[Meritto BCA] Trigger button clicked!");
            try {
              const widget = window['npfW' + btnId];
              if (widget && typeof widget.showPopup === 'function') {
                console.log("[Meritto BCA] Calling showPopup via widget instance");
                widget.showPopup(btnId, baseUrl);
              } else {
                console.warn("[Meritto BCA] showPopup function not found on widget. Falling back to default click behavior.");
              }
            } catch (err) {
              console.error("[Meritto BCA] Error inside trigger button onclick:", err);
            }
          };
        } else {
          console.error("[Meritto BCA] Trigger button not found during onclick binding!");
        }
        return true;
      }
      return false;
    };

    if (!initWidget()) {
      console.log("[Meritto BCA] NpfWidgetsInit not ready yet, setting interval polling...");
      const interval = setInterval(() => {
        if (initWidget()) {
          console.log("[Meritto BCA] Successfully initialized widget via interval polling. Clearing interval.");
          clearInterval(interval);
        }
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        console.log("[Meritto BCA] Interval polling stopped after 10 seconds.");
      }, 10000);
    } else {
      console.log("[Meritto BCA] Successfully initialized widget immediately.");
    }

    return () => {
      console.log("[Meritto BCA] Hook unmounting. Cleaning up trigger onclick.");
      if (window.__IAER_ACTIVE_WIDGET_ID === btnId) {
        window.__IAER_ACTIVE_WIDGET_ID = null;
      }
      const trigger = document.querySelector('.npfWidget-' + btnId);
      if (trigger) {
        trigger.onclick = null;
      }
    };
  }, []);

  const onDownload = () => {
    console.log("[Meritto BCA] onDownload function invoked, redirecting to onApplyNow");
    onApplyNow();
  };

  const onApplyNow = () => {
    const btnId = '10d5d69d0bd7a76f17c3173a5d763657';
    const baseUrl = 'widgets.nopaperforms.com';
    console.log("[Meritto BCA] onApplyNow function invoked");
    try {
      const widget = window['npfW' + btnId];
      console.log("[Meritto BCA] Checked widget instance on window:", widget);
      if (widget && typeof widget.showPopup === 'function') {
        console.log("[Meritto BCA] Invoking widget.showPopup directly");
        widget.showPopup(btnId, baseUrl);
        
        setTimeout(() => {
          const el = document.getElementById("popup-" + btnId);
          console.log("[Meritto BCA] Diagnostic - popup element:", el);
          if (el) {
            console.log("[Meritto BCA] Diagnostic - display style:", el.style.display);
            console.log("[Meritto BCA] Diagnostic - computed display:", window.getComputedStyle(el).display);
            console.log("[Meritto BCA] Diagnostic - innerHTML:", el.innerHTML);
          } else {
            console.error("[Meritto BCA] Diagnostic - popup element NOT found in DOM by ID!");
          }
        }, 200);
      } else {
        const trigger = document.querySelector('.npfWidget-' + btnId);
        console.log("[Meritto BCA] Widget instance not ready, found trigger button:", trigger);
        if (trigger) {
          console.log("[Meritto BCA] Clicking trigger button");
          trigger.click();
        } else {
          console.warn("[Meritto BCA] No trigger button found in DOM. Falling back to direct popup window.");
          const url = `https://${baseUrl}/widget/${btnId}`;
          const w = 920, h = 700;
          const left = Math.max(0, (window.innerWidth - w) / 2);
          const top = Math.max(0, (window.innerHeight - h) / 2);
          const features = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${w},height=${h},top=${top},left=${left}`;
          const win = window.open(url, 'Enquiry Form', features);
          if (!win) {
            window.open(url, '_blank', 'noopener,noreferrer');
          }
        }
      }
    } catch (e) {
      console.error("[Meritto BCA] Error invoking popup", e);
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

  const specializations = [
    { 
      name: 'BCA (General)', 
      icon: Building2, 
      desc: 'Strong foundation for students looking for BCA colleges near me, BCA course fees in Kolkata, direct admission BCA Kolkata. Career Roles: Software Developer | Web Developer | IT Executive',
      highlights: ['Programming (Python, Java, C++)', 'Web & App Development', 'Software Engineering', 'Database Management'],
      image: '/images/programs/bca-overview.webp'
    },
    { 
      name: 'BCA AI & ML', 
      icon: Lightbulb, 
      desc: 'Perfect for students searching BCA AI ML course in Kolkata, AI ML course after 12th Kolkata, artificial intelligence degree Kolkata. Career Roles: AI Engineer | ML Engineer | Data Scientist',
      highlights: ['Machine Learning', 'Deep Learning', 'NLP', 'AI Tools'],
      image: '/images/programs/BCA-in-Artificial-Intelligence-&-Machine-Learnng.webp'
    },
    { 
      name: 'BCA Cyber Security & Data Science', 
      icon: ShieldCheck, 
      desc: 'Designed for high-demand domains like cyber security course Kolkata, data science course after 12th Kolkata, ethical hacking course Kolkata. Career Roles: Cyber Security Analyst | Data Analyst | SOC Analyst',
      highlights: ['Ethical Hacking', 'Network Security', 'Data Analytics', 'Python for Data Science'],
      image: '/images/programs/bca-in-data-science-cyber-security-overview.webp'
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
            <div className="cursor-default">
              <img src="/images/logos/iaer-new-logo-dark-bg-supported.png" alt="IAER Logo" className="h-10 w-auto xl:h-12" />
            </div>
            
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
      <section className="relative overflow-hidden bg-[#143674] pt-6 sm:pt-8 pb-8 sm:pb-12 border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/images/campus/bca-hero-bg.png" alt="IAER Campus Background" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#143674]/95 via-[#0b1c3a]/80 to-[#143674]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-30">
          <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/40 blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <div data-animate-on-scroll className="relative z-10 mx-auto grid max-w-[1550px] grid-cols-1 gap-4 sm:gap-6 px-4 py-4 md:grid-cols-12 md:gap-6 md:py-6 transition-all duration-700 ease-out">
            <div className="flex-1 md:col-span-7 space-y-3 sm:space-y-4">
              <div className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider mb-2">
                BCA | General | AI & ML | Cyber Security & Data Science
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-medium text-white shadow-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
                <span>Best BCA College in Kolkata with Placement</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-xl sm:text-3xl lg:text-[2.75rem] font-extrabold tracking-tighter text-white drop-shadow-lg leading-tight sm:leading-[1.1]">
                  Build a Future-Proof Tech Career with <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-white">BCA, AI & Cyber Security at IAER Kolkata</span>
                </h1>
                <p className="text-xs sm:text-base lg:text-lg font-medium text-blue-100/90 drop-shadow max-w-full sm:max-w-3xl leading-snug sm:leading-relaxed">
                  Looking for BCA admission in Kolkata? Join IAER—one of the top BCA colleges in Kolkata offering Artificial Intelligence, Machine Learning, Cyber Security & Data Science programs with strong placement support.
                </p>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-white mt-1 sm:mt-2" aria-label="Student rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-5 sm:w-5 text-accent drop-shadow-sm" fill="currentColor" />
                  ))}
                  <span className="ml-1 sm:ml-2 text-[9px] sm:text-xs text-gray-100 font-medium tracking-wide">4.9/5 Student Rating</span>
                </div>
              </div>

              <div className="flex items-center w-full sm:w-auto gap-3 mt-4">
                <Button onClick={onApplyNow} size="lg" className="flex-1 sm:flex-none h-9 sm:h-12 rounded-full bg-accent px-4 sm:px-10 text-xs sm:text-sm font-bold text-white shadow-[0_0_15px_rgba(247,148,30,0.3)] transition-all hover:-translate-y-0.5 hover:bg-accent/90 flex justify-center items-center">
                  Enquire Now <ArrowRight className="ml-1 sm:ml-2 h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </Button>
                <Button onClick={onDownload} variant="outline" size="lg" className="flex-1 sm:flex-none h-9 sm:h-12 rounded-full border border-primary text-primary bg-white/5 hover:bg-primary/10 px-4 sm:px-10 text-xs sm:text-sm font-bold transition-all flex justify-center items-center">
                  <Download className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5" /> Brochure
                </Button>
              </div>
              {/* Affiliation & Approval Logos */}
              <div className="mt-5 sm:mt-6 flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1.5 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 hover:bg-white/15 transition-all duration-200">
                  <img src="/images/affiliations/MAKAUT-aff.png" alt="MAKAUT Affiliation Logo" className="h-7 sm:h-11 w-auto object-contain bg-white/95 p-0.5 sm:p-1 rounded-lg" />
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] sm:text-[9px] uppercase tracking-widest text-slate-300 font-bold leading-none">Affiliated to</span>
                    <span className="text-[10px] sm:text-xs font-black text-white leading-tight mt-0.5">MAKAUT, WB</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 hover:bg-white/15 transition-all duration-200">
                  <img src="/images/affiliations/AICTE-aff.png" alt="AICTE Approval Logo" className="h-7 sm:h-11 w-auto object-contain bg-white/95 p-0.5 sm:p-1 rounded-lg" />
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] sm:text-[9px] uppercase tracking-widest text-slate-300 font-bold leading-none">Approved by</span>
                    <span className="text-[10px] sm:text-xs font-black text-white leading-tight mt-0.5">AICTE, Govt</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
                {[
                  { label: 'Internship from Year 1', icon: Briefcase },
                  { label: 'Industry-Aligned Curriculum', icon: BookOpen },
                  { label: '350+ Placement Offers', icon: Target },
                  { label: 'Future-Ready Specializations in AI, ML & Data Science', icon: Layers },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 border border-white/10 px-2.5 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-xs font-medium text-white/90 backdrop-blur-sm shadow-inner transition-all hover:bg-white/10 hover:-translate-y-0.5 cursor-default">
                    <b.icon className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                    {b.label}
                  </div>
                ))}
              </div>

            </div>

            <div className="flex flex-col md:col-span-5 items-center justify-center gap-2 mt-4 md:mt-0">
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

              {/* Success Stories Marquee */}
              <div className="w-full mt-2 lg:-ml-4">
                <p className="text-[10px] font-bold text-blue-200/80 uppercase tracking-widest text-center md:text-left mb-3">
                  Latest Success Stories of IAER
                </p>
                <div className="relative flex overflow-hidden w-full group mask-image-linear-gradient">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#143674] to-transparent"></div>
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#143674] to-transparent"></div>
                  
                  <div className="flex w-max animate-hero-marquee space-x-3 px-1 items-center hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={i}>
                        {[
                          { name: 'Arjun M.', company: 'amazon_logo_dark.webp', pic: 'arjun.jpg' },
                          { name: 'Riya S.', company: 'Infosys_logo.png', pic: 'riya.avif' },
                          { name: 'Rohan D.', company: 'Tata_Consultancy_Services_old_logo.svg.png', pic: 'rohan.jpg' },
                        ].map((student, idx) => (
                          <div key={`${i}-${idx}`} className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-xl p-2 pr-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-white/40 min-w-max transition-transform hover:-translate-y-0.5">
                            <img src={`/images/students/${student.pic}`} alt={student.name} className="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-100" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                            <div className="flex flex-col justify-center">
                              <span className="text-xs font-bold text-slate-800 leading-none mb-1">{student.name}</span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[9px] font-medium text-slate-500 uppercase">Placed at</span>
                                <img src={`/images/company_logos/${student.company}`} alt="Company" className="h-3.5 object-contain" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </React.Fragment>
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
              BCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Specializations</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Best BCA Specializations in Kolkata with Placement & Industry Exposure</p>
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
            {specializations.map((spec) => (
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


      {/* --- UNIFIED: WHY CHOOSE IAER --- */}
      <section id="why-iaer" className="relative border-b border-slate-200 bg-slate-50 py-10 sm:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 mx-auto max-w-[1550px] px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#143674] mb-2 block">Excellence in Education</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#143674] tracking-tight">
              Why Choose <span className="text-primary">IAER</span> for BCA?
            </h2>
            <div className="mt-4 mx-auto h-1.5 w-16 rounded-full bg-accent" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Column: About & Visuals (Spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
              <div className="relative h-[250px] sm:h-[320px] lg:h-[280px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200 group">
                <img src="/images/about/building-image-about-hero.webp" alt="IAER Overview" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143674]/90 via-[#143674]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2"><BookOpen className="w-6 h-6 text-accent" /> About BCA at IAER</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    We provide a perfect blend of theoretical knowledge and practical business learning, preparing students for real-world corporate challenges.
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Pillars</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Practical business learning' },
                    { label: 'Industry exposure' },
                    { label: 'Internship-driven curriculum' },
                    { label: 'Strong placement support' }
                  ].map((i) => (
                    <span key={i.label} className="inline-flex items-center bg-blue-50/50 border border-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold cursor-default hover:bg-blue-100 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-primary" /> {i.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Features (Spans 7 cols) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 h-full">
              {[
                { icon: Briefcase, title: 'Internship-Driven', desc: 'Hands-on experience from early semesters with top corporate partners.' },
                { icon: Building2, title: 'Industry Integration', desc: 'Real-world business exposure, case studies, & corporate connections.' },
                { icon: Globe, title: 'Global Exposure', desc: 'International immersion programs in Thailand, Malaysia, Vietnam, & UAE.' },
                { icon: Award, title: 'Skill Development', desc: 'Focused training on leadership, communication, and problem-solving.' },
                { icon: Lightbulb, title: 'Startup Ecosystem', desc: 'Mentorship & incubation support for future business entrepreneurs.' },
              ].map((item, idx) => (
                <div key={item.title} className={`bg-white border border-slate-200 p-5 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 group flex flex-col justify-center ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#143674] mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Banner: Recognized Excellence (Marquee) */}
          <div className="bg-[#143674] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <div className="flex-shrink-0 text-center sm:text-left sm:pr-6 sm:border-r sm:border-white/20">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2 mb-1"><Trophy className="w-5 h-5 text-accent" /> Awards &</h3>
                <p className="text-sm font-medium text-accent">Recognized Excellence</p>
              </div>
              
              <div className="flex-1 w-full overflow-hidden relative">
                {/* Fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#143674] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#143674] to-transparent z-10 pointer-events-none" />
                
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar">
                  {[
                    { title: 'Best Innovative IT College', source: 'Eastern India, 2019' },
                    { title: 'Best Emerging e-Business School', source: '2020' },
                    { title: 'Best Startup Education College', source: 'Eastern India, 2021' },
                    { title: 'Top 10 Best College for Data Science', source: 'India, 2024' },
                    { title: 'Best Emerging IT Award', source: '2024' },
                    { title: 'Excellence in IT Education', source: '2024' }
                  ].map((ach, i) => (
                    <div key={i} className="flex-shrink-0 snap-start bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 min-w-[200px] max-w-[220px]">
                      <h4 className="text-sm font-bold text-white mb-1 leading-snug line-clamp-2">{ach.title}</h4>
                      <p className="text-[10px] text-blue-200/70 font-medium uppercase">{ach.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Start Your Career with One of the Best BBA Colleges in Kolkata</p>
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
                   <div className="text-2xl sm:text-4xl font-extrabold text-[#143674] mb-1">₹4.30</div>
                   <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">LPA Average</div>
                 </div>
                 <div className="rounded-2xl bg-white p-3 sm:p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                   <div className="text-2xl sm:text-4xl font-extrabold text-[#143674] mb-1">354+</div>
                   <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Placement Offers</div>
                 </div>
                 <div className="rounded-2xl bg-white p-3 sm:p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                   <div className="text-2xl sm:text-4xl font-extrabold text-[#143674] mb-1">626+</div>
                   <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Internships</div>
                 </div>
              </div>
            </div>

            {/* Right side: Careers & Recruiters (Cols 6-12) */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
               <div className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-slate-200 shadow-sm flex-grow flex flex-col gap-5 sm:gap-6">
                 
                 {/* Top Recruiters */}
                 <div>
                    <h4 className="text-sm font-bold text-[#143674] mb-3 uppercase tracking-wider flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Top Recruiters</h4>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 justify-center">
                       <img src="/images/company_logos/Amazon_logo.svg.png" alt="Amazon" className="h-6 sm:h-7 object-contain" />
                       <img src="/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png" alt="TCS" className="h-6 sm:h-7 object-contain" />
                       <img src="/images/company_logos/Infosys_logo.png" alt="Infosys" className="h-6 sm:h-7 object-contain" />
                       <img src="/images/company_logos/Capgemini.png" alt="Capgemini" className="h-6 sm:h-7 object-contain" />
                       <img src="/images/company_logos/deloitte.svg" alt="Deloitte" className="h-5 sm:h-6 object-contain" />
                       <img src="/images/company_logos/Hindustan_Unilever_Logo.svg" alt="HUL" className="h-8 sm:h-10 object-contain" />
                    </div>
                 </div>

                 {/* Career Opportunities */}
                 <div>
                   <h4 className="text-sm font-bold text-[#143674] mb-3 uppercase tracking-wider flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> Career Opportunities</h4>
                   <div className="flex flex-wrap gap-2 sm:gap-2.5">
                     {['Software Developer', 'Data Analyst', 'Cyber Security Analyst', 'AI Engineer', 'Web Developer', 'Database Administrator'].map((role) => (
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

 {/* --- VIDEO TESTIMONIALS --- */}
      <section className="py-10 sm:py-16 bg-[#143674] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-[1550px] px-4 relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Hear It From Our <span className="text-accent">Students</span>
            </h2>
            <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto">Real stories from real students who transformed their careers with IAER.</p>
            <div className="mt-4 h-1.5 w-16 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="flex gap-4 sm:gap-6 md:justify-center overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar">
            {[
              '5spDhZsFmRw', 'KJijsu0t_GA', '7FDem0S7wZU', 'kUYABnLkRU8', 'VfQW9Ex4DQ0',
            ].map((id, idx) => (
              <div 
                key={idx} 
                className="group relative flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-slate-900 snap-center sm:snap-start"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1`}
                  title={`Success Story ${idx + 1}`}
                  className="absolute inset-0 w-full h-full pointer-events-auto"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                {/* Transparent overlays to block clicks on top/bottom YouTube branding */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-transparent z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* --- CAMPUS EXPERIENCE & FACILITIES --- */}
      <section id="campus-facilities" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
         <div className="mx-auto max-w-[1550px] px-4">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
               
               <div>
                  <h2 className="text-2xl font-bold text-[#143674] mb-4 flex items-center gap-2"><Video className="w-6 h-6 text-accent" /> Campus & Learning Experience</h2>
                  <p className="text-sm text-slate-600 mb-4">Watch How IAER Builds Future Business Leaders</p>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
                     <iframe
                         sandbox="allow-scripts allow-same-origin allow-presentation"
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/nH-sSyq_2OM?start=44&modestbranding=1&rel=0"
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
                  <div className="bg-gradient-to-b from-[#0a387c] to-[#042459] text-white rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(4,36,89,0.15)] h-full relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-120 transition-transform duration-500" />
                     
                     <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-900/60 border border-blue-800/40 flex items-center justify-center mb-4 sm:mb-8 shadow-inner">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                     </div>

                     <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">Eligibility Criteria</h3>
                        <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-8">
                           Simple and direct admission criteria for aspiring tech professionals.
                        </p>
                        
                        <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/5 shadow-inner">
                           <div className="text-[10px] uppercase tracking-wider text-orange-400 font-bold mb-1">Academic Requirement</div>
                           <div className="text-sm sm:text-[1.1rem] font-bold leading-snug">10+2 from any recognized board</div>
                        </div>
                     </div>

                     <div className="mt-4 sm:mt-8 text-[10px] sm:text-[11px] text-blue-200/50">
                        * Open to all streams (Science, Commerce, Arts)
                     </div>
                  </div>
               </div>

               {/* Right Column: Step Cards (9 cols) */}
               <div className="lg:col-span-9 flex flex-col justify-center">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
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
                        <div key={i} className="bg-white rounded-2xl sm:rounded-[2rem] p-4 sm:p-7 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center text-left relative group overflow-hidden gap-3.5 sm:gap-0">
                           {/* Step Cards Top Header */}
                           <div className="w-full flex sm:justify-between items-center sm:mb-6 order-last sm:order-first sm:relative absolute top-4 right-4 justify-end sm:w-auto w-auto">
                              <span className={`text-sm sm:text-xl font-extrabold ${item.colorClass} sm:block hidden`}>{item.step}</span>
                              <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${item.bgClass} ${item.colorClass} font-bold text-[10px] sm:text-xs flex items-center justify-center shadow-sm`}>
                                 {item.num}
                              </span>
                           </div>

                           {/* Card Icon Shape */}
                           <div className={`w-12 h-12 sm:w-20 sm:h-20 rounded-full ${item.bgClass} flex items-center justify-center sm:mb-6 transition-transform duration-500 group-hover:scale-110 shadow-inner flex-shrink-0`}>
                              <item.icon className={`w-6 h-6 sm:w-9 sm:h-9 ${item.iconColor}`} />
                           </div>

                           {/* Title & Description */}
                           <div className="flex-1 sm:w-full">
                              <h4 className="font-extrabold text-[#143674] text-sm sm:text-lg mb-0.5 sm:mb-2 tracking-tight group-hover:text-[#0f9f68] transition-colors">{item.title}</h4>
                              <p className="text-[11px] sm:text-xs text-slate-500 leading-snug sm:leading-relaxed max-w-full sm:max-w-[200px] sm:mx-auto sm:mb-6">{item.desc}</p>
                           </div>

                           {/* Visual Dots Indicator at the Bottom */}
                           <div className="sm:flex hidden gap-1.5 mt-auto">
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
        <div className="mx-auto max-w-[800px] px-4">
          <div className="text-center mb-6 sm:mb-8">
             <h2 className="text-2xl sm:text-3xl font-bold text-[#143674] mb-2">Frequently Asked Questions</h2>
             <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: 'Which is the best BCA college in Kolkata?', a: 'IAER is among the top BCA colleges offering AI, ML, Cyber Security & Data Science.' },
              { q: 'What is the scope of BCA AI ML course in Kolkata?', a: 'High demand in AI, automation, and data science industries.' },
              { q: 'Is cyber security a good career after 12th?', a: 'Yes, it is one of the fastest-growing global careers.' },
              { q: 'Which BCA specialization has the highest career scope?', a: 'AI & ML and Cyber Security & Data Science offer the highest growth and salary potential.' },
              { q: 'Does IAER provide placement support?', a: 'Yes, IAER provides structured internship support and access to a wide recruiter network.' },
              { q: 'What is the average salary after BCA in Kolkata?', a: '₹4.30 LPA average, with higher potential in specialized fields.' },
              { q: 'Are certifications included in BCA programs?', a: 'Yes, industry-relevant certifications are included.' },
              { q: 'Does IAER provide international exposure?', a: 'Yes, international immersion programs are available.' },
              { q: 'Are scholarships available for BCA students?', a: 'Yes, multiple scholarship options are available.' },
              { q: 'Does IAER help with education loans?', a: 'Yes, IAER assists with documentation and loan processing.' },
              { q: 'Can I get direct admission in BCA in Kolkata?', a: 'Yes, students can apply directly through IAER.' },
              { q: 'Which is better: BCA or B.Tech for IT careers?', a: 'BCA with AI/ML or Cyber Security specialization offers faster, skill-focused career entry.' }
            ].map((faq, i) => (
              <div 
                key={i} 
                className={`group bg-white border ${openFaq === i ? 'border-primary shadow-md' : 'border-slate-200 hover:border-primary/30 hover:shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <h4 className={`text-sm sm:text-base font-bold ${openFaq === i ? 'text-primary' : 'text-[#143674]'} flex items-start gap-3 transition-colors`}>
                    <span className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full ${openFaq === i ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} font-black text-xs transition-colors`}>
                      Q
                    </span> 
                    <span className="mt-0.5 leading-snug">{faq.q}</span>
                  </h4>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === i ? 'bg-primary/10 text-primary rotate-180' : 'text-slate-400 group-hover:text-primary'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 px-4 sm:px-5 pb-4 sm:pb-5 pl-[3.25rem] leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-[#143674] border-t border-white/10 pt-8 sm:pt-10 pb-6">
        <div className="mx-auto max-w-[1550px] px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Secure Your Seat in One of the Best BCA Colleges in Kolkata
          </h2>
          <p className="text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Admissions Open | Limited Seats | High-Demand Programs
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
          </div>
        </div>
      </footer>

      {/* --- FLOATING BOTTOM CTA BAR --- */}
      <div className="fixed bottom-0 md:bottom-6 left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 z-[60] w-full md:w-max bg-white/95 backdrop-blur-xl border-t md:border border-slate-200/80 md:rounded-full shadow-[0_-10px_40px_rgba(0,0,0,0.08)] p-1.5 md:p-2 flex items-center justify-between gap-2 transition-all duration-300">
        
        {/* Scrollable Navigation Links */}
        <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar flex-1 md:flex-none pl-1 pr-2 relative">
          {[
            { name: 'Overview', href: '#about', icon: BookOpen },
            { name: 'Programs', href: '#specializations', icon: Layers },
            { name: 'Why Us', href: '#why-iaer', icon: Star },
            { name: 'Placements', href: '#placements', icon: Briefcase },
            { name: 'Campus', href: '#campus-facilities', icon: Building2 }
          ].map(link => (
            <button key={link.name} onClick={() => { document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-1.5 px-3 py-2 rounded-full text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors whitespace-nowrap flex-shrink-0 group">
              <link.icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
              <span className="text-[11px] sm:text-xs font-bold">{link.name}</span>
            </button>
          ))}
        </nav>

        <div className="h-6 w-px bg-slate-200 hidden md:block flex-shrink-0" />

        {/* CTA Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pr-1">
          <Button onClick={onApplyNow} className="h-9 sm:h-10 bg-accent hover:bg-accent/90 text-white font-extrabold rounded-full px-3 sm:px-5 text-[11px] sm:text-xs shadow-lg shadow-accent/20 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 hidden sm:block" /> Enquire Now
          </Button>
          <a href="tel:+916292004641" className="h-9 sm:h-10 bg-[#143674] hover:bg-[#143674]/90 text-white font-extrabold rounded-full px-3 sm:px-5 text-[11px] sm:text-xs shadow-lg shadow-[#143674]/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap">
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
