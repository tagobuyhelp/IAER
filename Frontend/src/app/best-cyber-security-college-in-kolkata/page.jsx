"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  BookOpen, Briefcase, CheckCircle, Download, ExternalLink,
  Globe, Phone, Star, Trophy, Users, Mail,
  Award, TrendingUp, Lightbulb, Building2, Wifi, HeartHandshake,
  ShieldCheck, Rocket, Landmark, CreditCard,
  Banknote, ClipboardCheck, School, Hotel, Quote, CircleDollarSign, Target, Video, GraduationCap, MapPin, BarChart, Settings, MonitorPlay, ArrowRight, Menu, X, Layers, Search, Terminal, Cloud, Clock
} from 'lucide-react';
import Link from 'next/link';
import Marquee from "react-fast-marquee";

export default function CyberSecurityLandingPage() {
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
    '/images/programs/bachelor-of-business-administration-bba-overview.webp',
    '/images/programs/bba-in-sports-management-banner.webp',
    '/images/programs/bba-in-hotel-hospitality-administration-banner.webp',
    '/images/programs/bba-in-business-analytics-alt-careers.webp',
    '/images/programs/bba-in-global-business-careers.webp',
    '/images/programs/bba-in-global-business-overview.webp',



  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const btnId = '955eb9372c180bfff22c3a028d3f9e05';
    const baseUrl = 'widgets.nopaperforms.com';
    window.__IAER_ACTIVE_WIDGET_ID = btnId;
    console.log("[Meritto Cyber Security] Hook mounted. Target widget ID:", btnId);

    // Ensure hidden button exists
    let btn = document.querySelector('.npfWidget-' + btnId);
    if (!btn) {
      console.log("[Meritto Cyber Security] Creating hidden button element");
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'npfWidgetButton npfWidget-' + btnId;
      btn.style.display = 'none';
      btn.textContent = 'Enquire Now!';
      document.body.appendChild(btn);
    } else {
      console.log("[Meritto BBA] Hidden button element already exists in DOM");
    }

    const initWidget = () => {
      let NpfConstructor = null;
      try {
        if (typeof window.NpfWidgetsInit === 'function') {
          NpfConstructor = window.NpfWidgetsInit;
        } else if (typeof NpfWidgetsInit === 'function') {
          NpfConstructor = NpfWidgetsInit;
        }
      } catch (err) { }

      console.log("[Meritto BBA] initWidget run. Constructor found:", !!NpfConstructor);
      if (NpfConstructor) {
        if (!window['npfW' + btnId]) {
          console.log("[Meritto BBA] Initializing new NpfWidgetsInit for", btnId);
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
          console.log("[Meritto BBA] NpfWidgetsInit instance created:", window['npfW' + btnId]);
        } else {
          console.log("[Meritto BBA] NpfWidgetsInit instance already exists");
        }

        const trigger = document.querySelector('.npfWidget-' + btnId);
        if (trigger) {
          console.log("[Meritto BBA] Binding onclick to trigger button");
          trigger.onclick = (e) => {
            console.log("[Meritto BBA] Trigger button clicked!");
            try {
              const widget = window['npfW' + btnId];
              if (widget && typeof widget.showPopup === 'function') {
                console.log("[Meritto BBA] Calling showPopup via widget instance");
                widget.showPopup(btnId, baseUrl);
              } else {
                console.warn("[Meritto BBA] showPopup function not found on widget. Falling back to default click behavior.");
              }
            } catch (err) {
              console.error("[Meritto BBA] Error inside trigger button onclick:", err);
            }
          };
        } else {
          console.error("[Meritto BBA] Trigger button not found during onclick binding!");
        }
        return true;
      }
      return false;
    };

    if (!initWidget()) {
      console.log("[Meritto BBA] NpfWidgetsInit not ready yet, setting interval polling...");
      const interval = setInterval(() => {
        if (initWidget()) {
          console.log("[Meritto BBA] Successfully initialized widget via interval polling. Clearing interval.");
          clearInterval(interval);
        }
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        console.log("[Meritto BBA] Interval polling stopped after 10 seconds.");
      }, 10000);
    } else {
      console.log("[Meritto BBA] Successfully initialized widget immediately.");
    }

    return () => {
      console.log("[Meritto BBA] Hook unmounting. Cleaning up trigger onclick.");
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
    console.log("[Meritto BBA] onDownload function invoked, redirecting to onApplyNow");
    onApplyNow();
  };

  const onApplyNow = () => {
    const btnId = '955eb9372c180bfff22c3a028d3f9e05';
    const baseUrl = 'widgets.nopaperforms.com';
    console.log("[Meritto Cyber Security] onApplyNow function invoked");
    try {
      const widget = window['npfW' + btnId];
      console.log("[Meritto Cyber Security] Checked widget instance on window:", widget);
      if (widget && typeof widget.showPopup === 'function') {
        console.log("[Meritto Cyber Security] Invoking widget.showPopup directly");
        widget.showPopup(btnId, baseUrl);

        setTimeout(() => {
          const el = document.getElementById("popup-" + btnId);
          console.log("[Meritto BBA] Diagnostic - popup element:", el);
          if (el) {
            console.log("[Meritto BBA] Diagnostic - display style:", el.style.display);
            console.log("[Meritto BBA] Diagnostic - computed display:", window.getComputedStyle(el).display);
            console.log("[Meritto BBA] Diagnostic - innerHTML:", el.innerHTML);
          } else {
            console.error("[Meritto BBA] Diagnostic - popup element NOT found in DOM by ID!");
          }
        }, 200);
      } else {
        const trigger = document.querySelector('.npfWidget-' + btnId);
        console.log("[Meritto BBA] Widget instance not ready, found trigger button:", trigger);
        if (trigger) {
          console.log("[Meritto BBA] Clicking trigger button");
          trigger.click();
        } else {
          console.warn("[Meritto BBA] No trigger button found in DOM. Falling back to direct popup window.");
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
      console.error("[Meritto BBA] Error invoking popup", e);
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
      name: 'BBA (General)',
      icon: Building2,
      desc: 'The BBA (General) program at IAER is designed for students looking for a BBA course in Kolkata after 12th with strong fundamentals in business management. As one of the top BBA colleges in Kolkata, IAER prepares students for versatile roles across industries.',
      highlights: ['Core subjects in Marketing, Finance & HR', 'Business Communication & Management Skills', 'Ideal for students exploring BBA admission Kolkata', 'Internship opportunities across industries'],
      image: '/images/programs/bachelor-of-business-administration-bba-overview.webp'
    },
    {
      name: 'BBA Global Business',
      icon: Globe,
      desc: 'BBA in Global Business is ideal for students aiming for careers in international markets and multinational companies. It is among the most sought-after international business courses after 12th in Kolkata.',
      highlights: ['International Business & Export-Import Management', 'Global Marketing & Trade Strategies', 'Perfect for BBA Global Business course Kolkata searches', 'Cross-cultural business exposure'],
      image: '/images/programs/bba-global-malaysia.png'
    },
    {
      name: 'BBA Business Analytics',
      icon: BarChart,
      desc: 'This specialization bridges business and data, making it one of the fastest-growing business analytics courses in Kolkata.',
      highlights: ['Data Analytics, Power BI & Tableau', 'Excel & Python for business insights', 'High demand for data analytics course after 12th', 'Real-world data projects'],
      image: '/images/programs/bba-in-business-analytics-overview.webp'
    },
    {
      name: 'BBA Sports Management',
      icon: Trophy,
      desc: 'A niche and high-growth program for students interested in the sports industry, offering a strong foundation in sports business and operations.',
      highlights: ['Sports Marketing & Event Management', 'Sponsorship & Sports Analytics', 'Ideal for sports management course in Kolkata', 'Exposure to sports industry ecosystem'],
      image: '/images/programs/bba-in-sports-management-overview.webp'
    },
    {
      name: 'BBA Aviation, Hospitality Services & Management',
      icon: Rocket,
      desc: 'This program prepares students for dynamic careers in aviation and hospitality sectors, one of the most popular management courses after 12th in Kolkata.',
      highlights: ['Aviation & Airport Operations', 'Hospitality & Hotel Management', 'High demand for aviation management course Kolkata', '5-Star Hotel Immersion Program'],
      image: '/images/programs/bba-ahsm-overview.webp'
    },
    {
      name: 'BBA Hospital Management',
      icon: HeartHandshake,
      desc: 'A specialized program designed for careers in healthcare administration, aligned with the growing demand for hospital management courses in Kolkata.',
      highlights: ['Hospital Operations & Administration', 'Healthcare Systems & Patient Management', 'Ideal for healthcare management degree Kolkata', 'Internship in hospitals & healthcare setups'],
      image: '/images/programs/bba-in-hotel-hospitality-administration-banner.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 scroll-smooth font-sans pb-20 sm:pb-0">
      <style dangerouslySetInnerHTML={{
        __html: `
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
        @keyframes topbar-marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-topbar-marquee {
          animation: topbar-marquee 15s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }
        .animate-topbar-marquee:hover {
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
      <div className="relative w-full border-b border-emerald-500/20 bg-slate-950 text-[11px] text-emerald-100 shadow-sm sm:text-sm">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -left-10 top-0 h-20 w-40 rounded-full bg-emerald-500 blur-2xl" />
        </div>
        <div className="relative mx-auto flex max-w-[1550px] items-center px-4 py-1.5 overflow-hidden">
          <div className="flex flex-1 overflow-hidden font-bold text-emerald-400 tracking-wide">
            <Marquee speed={30} autoFill pauseOnHover>
              <div className="mx-6 md:mx-12">✦</div>
              <div className="flex items-center uppercase tracking-widest text-[9px] sm:text-[10px]">
                Admissions Open 2026
              </div>
              <div className="mx-6 md:mx-12 text-primary">✦</div>
              <div className="flex items-center uppercase tracking-widest text-[9px] sm:text-[10px] text-emerald-100">
                MAKAUT Affiliated
              </div>
              <div className="mx-6 md:mx-12">✦</div>
              <div className="flex items-center uppercase tracking-widest text-[9px] sm:text-[10px] text-cyan-400">
                AICTE Approved
              </div>
              <div className="mx-6 md:mx-12 text-primary">✦</div>
              <div className="flex items-center uppercase tracking-widest text-[9px] sm:text-[10px] text-emerald-100">
                100% Placement Assistance
              </div>
              <div className="mx-6 md:mx-12">✦</div>
              <div className="flex items-center uppercase tracking-widest text-[9px] sm:text-[10px]">
                Eastern India's Best Cyber Security College
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-500/20 bg-slate-950/80 backdrop-blur-md shadow-[0_4px_30px_rgba(16,185,129,0.05)]">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="cursor-default">
              {/* Note: We keep the same logo but on dark bg it looks great */}
              <img src="/images/logos/iaer-new-logo-dark-bg-supported.png" alt="IAER Logo" className="h-10 w-auto xl:h-12" />
            </div>
          </div>
          <nav className="hidden items-center gap-6 lg:gap-8 text-base text-slate-300 lg:flex">
            {[
              { href: '#about', icon: BookOpen, label: 'Overview' },
              { href: '#specializations', icon: Layers, label: 'Specializations' },
              { href: '#why-iaer', icon: Star, label: 'Why IAER' },
              { href: '#placements', icon: Briefcase, label: 'Placements' },
              { href: '#campus-facilities', icon: Building2, label: 'Campus' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="group relative flex items-center gap-1.5 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-emerald-400">
                <l.icon className="h-5 w-5" />
                <span className="font-semibold">{l.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-emerald-500 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
            <a href="tel:+916292004641" className="ml-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-bold text-emerald-100 hover:bg-emerald-500/20 transition-colors">
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>6292004641</span>
            </a>
            <Button onClick={onApplyNow} className="ml-3 rounded-full bg-emerald-500 px-6 py-2.5 text-base font-bold text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)] ring-1 ring-emerald-400/50 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] flex items-center">
              Enquire Now <ArrowRight className="ml-1.5 h-5 w-5" />
            </Button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-md p-2 text-emerald-400 transition-colors hover:bg-emerald-500/10 lg:hidden" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`overflow-hidden border-t border-emerald-500/20 bg-slate-950 shadow-xl transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-1 px-4 py-4 text-sm text-slate-300">
            {[
              { href: '#about', icon: BookOpen, label: 'Overview' },
              { href: '#specializations', icon: Layers, label: 'Specializations' },
              { href: '#why-iaer', icon: Star, label: 'Why IAER' },
              { href: '#placements', icon: Briefcase, label: 'Placements' },
              { href: '#campus-facilities', icon: Building2, label: 'Campus & Facilities' },
            ].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400">
                <l.icon className="h-4 w-4" />
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-slate-950 pt-6 sm:pt-8 pb-8 sm:pb-12 border-b border-emerald-500/20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/images/cyber_security/iaer-cyber-security-hero-bg-enterprise-soc-network.png" alt="Cyber Security SOC" className="h-full w-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-50">
          <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <div data-animate-on-scroll className="relative z-10 mx-auto grid max-w-[1550px] grid-cols-1 gap-4 sm:gap-6 px-4 py-4 md:grid-cols-12 md:gap-6 md:py-6 transition-all duration-700 ease-out">
            <div className="flex-1 md:col-span-7 space-y-3 sm:space-y-4">
              <div className="font-mono text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
                B.Sc. CYBER SECURITY | ETHICAL HACKING | DIGITAL FORENSICS
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-medium text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_#34d399]" />
                <span>Best Cyber Security College in Kolkata with Placement</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold tracking-tighter text-white drop-shadow-lg leading-tight sm:leading-[1.1]">
                  Protect the Digital World with <br className="hidden sm:block" />
                  <span className="text-[2rem] sm:text-4xl lg:text-[3.5rem] font-black block mt-1.5 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-200 leading-none py-1">B.Sc. Cyber Security</span>
                </h1>
                <p className="text-xs sm:text-base lg:text-lg font-medium text-slate-300 drop-shadow max-w-full sm:max-w-3xl leading-snug sm:leading-relaxed">
                  Looking for B.Sc. Cyber Security admission in Kolkata? Join IAER—one of the leading Cyber Security colleges in Kolkata offering industry-focused education in Ethical Hacking, Network Security, Digital Forensics, Cloud Security, and Cyber Defense with strong placement support.
                </p>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-white mt-1 sm:mt-2" aria-label="Student rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-5 sm:w-5 text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" fill="currentColor" />
                  ))}
                  <span className="ml-1 sm:ml-2 text-[9px] sm:text-xs text-slate-300 font-medium tracking-wide">4.9/5 Student Rating</span>
                </div>
              </div>

              <div className="flex items-center w-full sm:w-auto gap-3 mt-4">
                <Button onClick={onApplyNow} size="lg" className="flex-1 sm:flex-none h-9 sm:h-12 rounded-full bg-emerald-500 px-4 sm:px-10 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] flex justify-center items-center">
                  Enquire Now <ArrowRight className="ml-1 sm:ml-2 h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </Button>
                <Button onClick={onDownload} variant="outline" size="lg" className="flex-1 sm:flex-none h-9 sm:h-12 rounded-full border border-emerald-500/50 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/20 px-4 sm:px-10 text-xs sm:text-sm font-bold transition-all flex justify-center items-center backdrop-blur-sm">
                  <Download className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-5 sm:w-5" /> Brochure
                </Button>
              </div>
              {/* Affiliation & Approval Logos */}
              <div className="mt-5 sm:mt-6 flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1.5 sm:gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 hover:bg-slate-900 transition-all duration-200 shadow-sm">
                  <img src="/images/affiliations/MAKAUT-aff.png" alt="MAKAUT Affiliation Logo" className="h-7 sm:h-11 w-auto object-contain bg-white/95 p-0.5 sm:p-1 rounded-lg" />
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] sm:text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-none">Affiliated to</span>
                    <span className="text-[10px] sm:text-xs font-black text-emerald-100 leading-tight mt-0.5">MAKAUT, WB</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 hover:bg-slate-900 transition-all duration-200 shadow-sm">
                  <img src="/images/affiliations/AICTE-aff.png" alt="AICTE Approval Logo" className="h-7 sm:h-11 w-auto object-contain bg-white/95 p-0.5 sm:p-1 rounded-lg" />
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] sm:text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-none">Approved by</span>
                    <span className="text-[10px] sm:text-xs font-black text-emerald-100 leading-tight mt-0.5">AICTE, Govt</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-nowrap overflow-x-auto no-scrollbar items-center gap-2 sm:mt-6 sm:gap-3 sm:flex-wrap pb-2 w-[calc(100vw-32px)] sm:w-auto -ml-4 pl-4 sm:ml-0 sm:pl-0 pr-4 sm:pr-0">
                {[
                  { label: 'Ethical Hacking & Cyber Defense', icon: ShieldCheck },
                  { label: 'Internship from Year 1', icon: Briefcase },
                  { label: 'Industry-Aligned Curriculum', icon: BookOpen },
                  { label: 'Industry Certifications Included', icon: Award },
                ].map((b) => (
                  <div key={b.label} className="flex-shrink-0 whitespace-nowrap flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-900 border border-emerald-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-xs font-medium text-emerald-100 backdrop-blur-sm shadow-inner transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:border-emerald-500/40 cursor-default">
                    <b.icon className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                    {b.label}
                  </div>
                ))}
              </div>

            </div>

            <div id="enquiry-form-section" className="flex flex-col md:col-span-5 items-center justify-center gap-4 sm:gap-5 mt-4 md:mt-0 w-full relative z-20">
              {/* Form Wrapper */}
              <div className="relative w-full max-w-[400px] mx-auto bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.15)] border border-emerald-500/30 p-2 sm:p-3 min-h-[420px] overflow-hidden ring-1 ring-inset ring-emerald-500/10">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
                <div className="npf_wgts" data-height="420px" data-w="955eb9372c180bfff22c3a028d3f9e05"></div>
              </div>

              {/* Success Stories Marquee */}
              <div className="w-full mt-2 lg:-ml-4">
                <p className="font-mono text-[10px] font-bold text-emerald-500/80 uppercase tracking-widest text-center md:text-left mb-3">
                  Latest Success Stories of IAER
                </p>
                <div className="relative flex overflow-hidden w-full group mask-image-linear-gradient">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent"></div>
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent"></div>
                  
                  <div className="flex w-max animate-hero-marquee space-x-3 px-1 items-center hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={i}>
                        {[
                          { name: 'Arjun M.', company: 'amazon_logo_dark.webp', pic: 'arjun.jpg' },
                          { name: 'Riya S.', company: 'Infosys_logo.png', pic: 'riya.avif' },
                          { name: 'Rohan D.', company: 'Tata_Consultancy_Services_old_logo.svg.png', pic: 'rohan.jpg' },
                        ].map((student, idx) => (
                          <div key={`${i}-${idx}`} className="flex items-center gap-2.5 bg-slate-900/90 backdrop-blur-sm rounded-xl p-2 pr-4 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-emerald-500/20 min-w-max transition-transform hover:-translate-y-0.5 hover:border-emerald-500/40">
                            <img src={`/images/students/${student.pic}`} alt={student.name} className="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-700" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                            <div className="flex flex-col">
                              <span className="text-[11px] font-extrabold text-emerald-100 whitespace-nowrap">{student.name}</span>
                              <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-[9px] text-slate-400 font-medium">Placed at</span>
                                <img src={`/images/company_logos/${student.company}`} alt="Company Logo" className="h-3.5 w-auto object-contain max-w-[50px] transition-all filter brightness-200 contrast-125" onError={(e) => e.currentTarget.style.display='none'} />
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

      {/* --- QUICK FACTS / OVERVIEW --- */}
      <section id="about" className="relative bg-slate-950 py-6 sm:py-10 border-b border-emerald-500/20">
        <div className="mx-auto max-w-[1550px] px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-center shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <h3 className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-slate-400">Duration</h3>
              </div>
              <p className="text-sm sm:text-base font-semibold text-emerald-100">4 Years</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">Undergraduate Degree</p>
            </div>
            
            <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-center shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <h3 className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-slate-400">Eligibility</h3>
              </div>
              <p className="text-sm sm:text-base font-semibold text-emerald-100">10+2 (Any Stream)</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">From a recognized board</p>
            </div>

            <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-center shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Banknote className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <h3 className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-slate-400">Fees & Scholarship</h3>
              </div>
              <p className="text-sm sm:text-base font-semibold text-emerald-100">₹4,12,000</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">Up to ₹50,000 Scholarship</p>
            </div>

            <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-center shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <h3 className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-slate-400">Learning Mode</h3>
              </div>
              <p className="text-sm sm:text-base font-semibold text-emerald-100">On-Campus</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">IAER Kolkata</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLACEMENTS & TOP RECRUITERS --- */}
      <section id="placements" className="relative border-b border-emerald-500/20 bg-slate-900 overflow-hidden py-8 sm:py-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div data-animate-on-scroll className="relative z-10 mx-auto max-w-[1200px] px-4 flex flex-col items-center">
          
          {/* Header & Stats in a row */}
          <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 items-center justify-between mb-8">
            <div className="text-center md:text-left flex-shrink-0">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary mb-1 block">Future Pathways</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Highlights</span>
              </h2>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 w-full md:w-auto">
              <div className="flex-1 bg-gradient-to-br from-emerald-500 to-[#0b1c3a] p-4 rounded-2xl shadow-md text-white text-center flex flex-col justify-center min-w-[120px] hover:-translate-y-1 transition-transform">
                <div className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold mb-0.5">Highest</div>
                <div className="text-2xl sm:text-3xl font-extrabold">₹15.2<span className="text-sm font-medium text-white/80">L</span></div>
              </div>
              <div className="flex-1 bg-slate-900 border border-emerald-500/20 p-4 rounded-2xl shadow-sm text-center flex flex-col justify-center min-w-[100px] hover:-translate-y-1 transition-transform">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Average</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">₹4.5+</div>
              </div>
              <div className="flex-1 bg-slate-900 border border-emerald-500/20 p-4 rounded-2xl shadow-sm text-center flex flex-col justify-center min-w-[100px] hover:-translate-y-1 transition-transform">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Offers</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">350+</div>
              </div>
            </div>
          </div>

          {/* Marquee Section Compact - Card Design */}
          <div className="w-full flex flex-col items-center mt-2 mb-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Our Students Are Working At</h3>
            <div className="relative flex overflow-hidden w-full mask-image-linear-gradient">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-r from-slate-900 to-transparent"></div>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-l from-slate-900 to-transparent"></div>
              
              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {/* Row 1 */}
                <div className="flex w-max animate-hero-marquee space-x-3 sm:space-x-4 items-center">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={`row1-${i}`}>
                      {[
                        'Infosys_logo.png', 'deloitte.svg', 'Capgemini.png', 'Accenture.png', 'Cognizant_logo.png', 'Tata_Consultancy_Services_old_logo.svg.png'
                      ].map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center bg-slate-900 rounded-xl border border-emerald-500/20 shadow-sm w-[130px] h-[55px] sm:w-[160px] sm:h-[70px] hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all group">
                          <img src={`/images/company_logos/${logo}`} alt="Recruiter Logo" className="max-w-[90px] max-h-[25px] sm:max-w-[110px] sm:max-h-[35px] object-contain transition-all duration-300 filter brightness-0 invert opacity-70 group-hover:opacity-100" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* Row 2 (reverse) */}
                <div className="flex w-max animate-hero-marquee space-x-3 sm:space-x-4 items-center" style={{ animationDirection: 'reverse' }}>
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={`row2-${i}`}>
                      {[
                        'Tech_Mahindra.png', 'HCL_Technologies.svg', 'Amazon_logo.svg.png', 'Capgemini.png', 'deloitte.svg', 'Hindustan_Unilever_Logo.svg'
                      ].map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center bg-slate-900 rounded-xl border border-emerald-500/20 shadow-sm w-[130px] h-[55px] sm:w-[160px] sm:h-[70px] hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all group">
                          <img src={`/images/company_logos/${logo}`} alt="Recruiter Logo" className="max-w-[90px] max-h-[25px] sm:max-w-[110px] sm:max-h-[35px] object-contain transition-all duration-300 filter brightness-0 invert opacity-70 group-hover:opacity-100" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Careers & Button */}
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-5">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-2xl">
              {[
                { name: 'Security Analyst', icon: ShieldCheck },
                { name: 'Ethical Hacker', icon: Terminal },
                { name: 'SOC Analyst', icon: MonitorPlay },
                { name: 'Security Consultant', icon: Briefcase },
                { name: 'Penetration Tester', icon: Target }
              ].map((role) => (
                <span key={role.name} className="inline-flex items-center gap-1.5 bg-slate-900 text-slate-400 rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-semibold border border-emerald-500/20 shadow-sm cursor-default hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all">
                  <role.icon className="w-3.5 h-3.5 text-emerald-400" /> {role.name}
                </span>
              ))}
            </div>
            
            <button onClick={() => { document.getElementById('enquiry-form-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm whitespace-nowrap">
              See Your Future <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>



            {/* --- SPECIALIZATIONS --- */}
      <section id="specializations" className="relative border-b border-emerald-500/20 bg-slate-900">
        <div data-animate-on-scroll className="mx-auto max-w-[1200px] px-4 py-6 sm:py-8">
          <div className="flex flex-col gap-1 mb-6 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary">WHAT YOU WILL LEARN</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
              Cyber Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Curriculum</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-400 mt-2">Master the core pillars of digital defense and information security.</p>
            <div className="mx-auto sm:mx-0 mt-4 h-1.5 w-24 rounded-full bg-emerald-500 shadow-sm" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {[
              {
                id: '01',
                title: 'Cyber Security Fundamentals',
                desc: 'Information Security, Cyber Security Principles, Network Security, and Security Operations.',
                icon: ShieldCheck,
                color: 'from-blue-500 to-indigo-600',
                bgLight: 'bg-blue-50',
                textLight: 'text-blue-600',
              },
              {
                id: '02',
                title: 'Ethical Hacking & Penetration Testing',
                desc: 'Ethical Hacking Techniques, Vulnerability Assessment, Penetration Testing, and Security Auditing.',
                icon: Terminal,
                color: 'from-emerald-500 to-teal-600',
                bgLight: 'bg-emerald-50',
                textLight: 'text-emerald-600',
              },
              {
                id: '03',
                title: 'Digital Forensics & Incident Response',
                desc: 'Digital Forensics, Cyber Crime Investigation, Incident Management, and Threat Detection & Response.',
                icon: Search,
                color: 'from-amber-500 to-orange-600',
                bgLight: 'bg-amber-50',
                textLight: 'text-amber-600',
              },
              {
                id: '04',
                title: 'Cloud Security & Programming',
                desc: 'Cloud Security, Python Programming, Linux Administration, and Database Security.',
                icon: Cloud,
                color: 'from-purple-500 to-pink-600',
                bgLight: 'bg-purple-50',
                textLight: 'text-purple-600',
              }
            ].map((spec) => (
              <div key={spec.id} className="group relative bg-slate-900 border border-emerald-500/20 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${spec.color} shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                   <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-emerald-400 mb-2 leading-tight">{spec.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow">{spec.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2">
                   <span className={`text-xs font-bold ${spec.textLight} uppercase tracking-wider`}>Core Module</span>
                   <ArrowRight className={`w-3.5 h-3.5 ${spec.textLight} group-hover:translate-x-1 transition-transform`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



 {/* --- VIDEO TESTIMONIALS --- */}
      <section className="py-10 sm:py-16 bg-emerald-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-[1550px] px-4 relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Hear It From Our <span className="text-cyan-400">Students</span>
            </h2>
            <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto">Real stories from real students who transformed their careers with IAER.</p>
            <div className="mt-4 h-1.5 w-16 bg-emerald-500 mx-auto rounded-full" />
          </div>
          
          <div className="flex gap-4 sm:gap-6 md:justify-center overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar">
            {[
              'a9YGpIMRb_Y', '6cQxZLkZhgU', 'CoL261COdLY', 
              'eU2Rs3pEvCw', 'g9rJ6-FZrQY',
            ].map((id, idx) => (
              <div 
                key={idx} 
                className="group relative flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-emerald-500/10 bg-slate-900 snap-center sm:snap-start"
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

      {/* --- UNIFIED: WHY CHOOSE IAER --- */}
      <section id="why-iaer" className="relative border-b border-emerald-500/20 bg-slate-950 py-10 sm:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 mx-auto max-w-[1550px] px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-2 block">Excellence in Education</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 tracking-tight">
              Why Choose <span className="text-white">IAER</span> for Cyber Security?
            </h2>
            <div className="mt-4 mx-auto h-1.5 w-16 rounded-full bg-emerald-500" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Column: About & Visuals (Spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
              <div className="relative h-[250px] sm:h-[320px] lg:h-[280px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200 group">
                <img src="/images/about/building-image-about-hero.webp" alt="IAER Overview" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/90 via-[#143674]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2"><BookOpen className="w-6 h-6 text-cyan-400" /> About B.Sc. Cyber Security at IAER</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    We provide a perfect blend of theoretical knowledge and hands-on cyber defense training, preparing students for real-world security challenges.
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="bg-slate-900 rounded-2xl p-5 shadow-sm border border-emerald-500/20">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Pillars</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Practical cyber defense learning' },
                    { label: 'Live SOC exposure' },
                    { label: 'Internship-driven curriculum' },
                    { label: 'Strong placement support' }
                  ].map((i) => (
                    <span key={i.label} className="inline-flex items-center bg-slate-950 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold cursor-default hover:border-emerald-500/50 hover:bg-slate-800 transition-all">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> {i.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Features (Spans 7 cols) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 h-full">
              {[
                { icon: Briefcase, title: 'Internship-Driven', desc: 'Hands-on experience from early semesters with top corporate partners.' },
                { icon: Building2, title: 'Industry Integration', desc: 'Real-world threat analysis, case studies, & tech connections.' },
                { icon: Globe, title: 'Global Exposure', desc: 'International immersion programs in Thailand, Malaysia, Vietnam, & UAE.' },
                { icon: Award, title: 'Skill Development', desc: 'Focused training on network security, forensics, and problem-solving.' },
                { icon: Lightbulb, title: 'Tech Incubation', desc: 'Mentorship & incubation support for future tech entrepreneurs.' },
              ].map((item, idx) => (
                <div key={item.title} className={`bg-slate-900 border border-emerald-500/20 p-5 rounded-2xl hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all duration-300 group flex flex-col justify-center ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-slate-950 border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-slate-800 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <item.icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-emerald-400 mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Banner: Recognized Excellence (Marquee) */}
          <div className="bg-emerald-500/10 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <div className="flex-shrink-0 text-center sm:text-left sm:pr-6 sm:border-r sm:border-white/20">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2 mb-1"><Trophy className="w-5 h-5 text-cyan-400" /> Awards &</h3>
                <p className="text-sm font-medium text-cyan-400">Recognized Excellence</p>
              </div>
              
              <div className="flex-1 w-full overflow-hidden relative">
                {/* Fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-emerald-500 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-emerald-500 to-transparent z-10 pointer-events-none" />
                
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar">
                  {[
                    { title: 'Best Innovative IT College', source: 'Eastern India, 2019' },
                    { title: 'Best Emerging e-Business School', source: '2020' },
                    { title: 'Best Startup Education College', source: 'Eastern India, 2021' },
                    { title: 'Top 10 Best College for Data Science', source: 'India, 2024' },
                    { title: 'Best Emerging IT Award', source: '2024' },
                    { title: 'Excellence in IT Education', source: '2024' }
                  ].map((ach, i) => (
                    <div key={i} className="flex-shrink-0 snap-start bg-slate-900/10 backdrop-blur-sm border border-emerald-500/10 rounded-xl px-4 py-3 min-w-[200px] max-w-[220px]">
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


     

      {/* --- TESTIMONIALS --- */}
      <section className="relative py-8 sm:py-10 bg-slate-900 border-b border-emerald-500/20">
        <div className="mx-auto max-w-[1550px] px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">Voices of Success</h2>
            <div className="h-1 w-16 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Student Testimonials */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-emerald-400 flex items-center gap-2 mb-4"><GraduationCap className="w-5 h-5 text-primary" /> Student Testimonials</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar">
                {[
                  { name: 'Proshanto Kar', company: 'Wipro', quote: 'The Cyber Security program gave me real tech exposure and helped me get placed.' },
                  { name: 'Sneha Gupta', company: 'TCS', quote: 'The B.Sc. Cyber Security program helped me choose the right career path with a Placement.' }
                ].map((t, i) => (
                  <div key={i} className="group relative flex-shrink-0 w-[290px] sm:w-[340px] snap-start bg-slate-900 border border-emerald-500/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors" />
                    <p className="text-sm text-slate-700 italic mb-5 relative z-10 leading-relaxed h-16 line-clamp-3">"{t.quote}"</p>
                    <div className="flex items-center gap-3 relative z-10">
                      <img src="/images/logos/IAER_ICON.jpg" alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-primary/30 transition-all" />
                      <div>
                        <div className="text-sm font-bold text-white">{t.name}</div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">{t.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Testimonials */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-emerald-400 flex items-center gap-2 mb-4"><Briefcase className="w-5 h-5 text-primary" /> Industry Testimonials</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar">
                {[
                  { name: 'Avijit Basu', company: 'NHRD', quote: 'IAER students are industry-ready and well-trained in cyber security fundamentals.' },
                  { name: 'Surajit Basak', company: 'HUL', quote: 'Their curriculum is aligned with real-world tech needs. Students have in-depth Knowledge.' }
                ].map((t, i) => (
                  <div key={i} className="group relative flex-shrink-0 w-[290px] sm:w-[340px] snap-start bg-slate-900 border border-emerald-500/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/30 transition-colors" />
                    <p className="text-sm text-slate-300 italic mb-5 relative z-10 leading-relaxed h-16 line-clamp-3">"{t.quote}"</p>
                    <div className="flex items-center gap-3 relative z-10">
                      <img src="/images/logos/IAER_ICON.jpg" alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all" />
                      <div>
                        <div className="text-sm font-bold text-white">{t.name}</div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">{t.company}</div>
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
      <section id="campus-facilities" className="py-8 sm:py-10 bg-slate-950 border-b border-emerald-500/20">
        <div className="mx-auto max-w-[1550px] px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">

            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><Video className="w-6 h-6 text-cyan-400" /> Campus & Learning Experience</h2>
              <p className="text-sm text-slate-400 mb-4">Watch How IAER Builds Future Cyber Security Experts</p>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
                <iframe
                         sandbox="allow-scripts allow-same-origin allow-presentation"
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/xXNkDR_XO6s?start=58&modestbranding=1&rel=0"
                  title="Campus Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-lg font-bold text-emerald-400 mb-1 flex items-center gap-2"><Hotel className="w-5 h-5 text-primary" /> Hostel & Campus Facilities</h2>
                <p className="text-[11px] sm:text-xs text-slate-400 mb-4">Safe and comfortable hostel facilities in Kolkata for students.</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { text: 'Separate hostels (Boys & Girls)', icon: Users },
                    { text: 'Furnished rooms', icon: Hotel },
                    { text: 'Hygienic food', icon: HeartHandshake },
                    { text: '24/7 security', icon: ShieldCheck },
                    { text: 'Wi-Fi enabled campus', icon: Wifi },
                  ].map((fac, i) => (
                    <span key={i} className="group inline-flex items-center gap-1.5 bg-slate-950 border border-emerald-500/20 hover:border-primary/50 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 hover:bg-blue-50/50 transition-colors cursor-default">
                      <fac.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                      {fac.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-[0_0_15px_rgba(16,185,129,0.1)] ring-1 ring-emerald-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 relative z-10">
                  <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2"><Banknote className="w-5 h-5 text-primary" /> Scholarships & Loans</h2>
                  <span className="text-[10px] font-bold text-white bg-primary px-3 py-1 rounded-full w-fit whitespace-nowrap">Study Now, Pay Later</span>
                </div>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {[
                    'Merit-Based Scholarships',
                    'Govt. Schemes & Student Credit Card',
                    'Education Loan Assistance'
                  ].map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-slate-950 border border-emerald-500/20 shadow-sm rounded-lg px-3 py-2 text-[11px] sm:text-xs font-bold text-emerald-400 hover:shadow-md hover:border-emerald-500/50 transition-all">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* --- FAQ --- */}
      <section className="py-10 sm:py-16 bg-slate-950 border-b border-emerald-500/20">
        <div className="mx-auto max-w-[800px] px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm sm:text-base">Everything you need to know about the Cyber Security program.</p>
            <div className="mt-4 h-1.5 w-16 bg-emerald-500 mx-auto rounded-full" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: 'Which is the best Cyber Security college in Kolkata?', a: 'IAER is among the leading Cyber Security colleges offering Ethical Hacking, Digital Forensics, and Cyber Defense training.' },
              { q: 'Is Cyber Security a good career after 12th?', a: 'Yes, Cyber Security is one of the fastest-growing and highest-paying technology careers globally.' },
              { q: 'What skills will I learn in B.Sc. Cyber Security?', a: 'Students learn Ethical Hacking, Network Security, Digital Forensics, Python, Cloud Security, and Cyber Defense techniques.' },
              { q: 'Does IAER provide internship opportunities?', a: 'Yes, students receive internship opportunities from early semesters to gain practical industry experience.' },
              { q: 'What is the average salary after B.Sc. Cyber Security?', a: 'The average package is ₹4.50+ LPA, with higher opportunities based on skills and certifications.' },
              { q: 'What are the career opportunities after B.Sc. Cyber Security?', a: 'Students can pursue careers as Cyber Security Analysts, Ethical Hackers, SOC Analysts, Security Consultants, and Digital Forensics Specialists.' },
              { q: 'Does IAER provide placement support?', a: 'Yes, IAER provides structured placement assistance and access to leading recruiters.' },
              { q: 'Are scholarships available for Cyber Security students?', a: 'Yes, multiple scholarship opportunities are available based on eligibility.' },
              { q: 'Does IAER help with education loans?', a: 'Yes, IAER assists students with education loan documentation and processing.' }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900 border border-emerald-500/20 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-950 transition-colors"
                >
                  <span className={`font-bold text-sm sm:text-base pr-4 ${openFaq === i ? 'text-primary' : 'text-emerald-400'}`}>{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-sm sm:text-base text-slate-400 leading-relaxed border-t border-slate-50 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- FOOTER CTA --- */}
      <footer className="bg-emerald-500/10 border-t border-emerald-500/10 pt-8 sm:pt-10 pb-6">
        <div className="mx-auto max-w-[1550px] px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Secure Your Seat in One of the Best Cyber Security Colleges in Kolkata
          </h2>
          <p className="text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Admissions Open | Limited Seats | High-Demand Programs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button onClick={onApplyNow} size="lg" className="w-full sm:w-auto rounded-full bg-emerald-500 hover:bg-emerald-500/90 text-white font-bold px-6 sm:px-8 py-5 text-base shadow-lg flex justify-center items-center">
              Enquire Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={onDownload} variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-slate-900 font-bold px-6 sm:px-8 py-5 text-base shadow-lg">
              <Download className="mr-2 w-5 h-5" /> Download Brochure
            </Button>
            <a href="tel:+916292004641" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-slate-900/10 hover:bg-slate-900/20 text-white font-bold px-8 py-4 transition-colors">
              <Phone className="w-5 h-5" /> Talk to Experts
            </a>
          </div>

          <div className="border-t border-emerald-500/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-blue-200/60">
            <p>&copy; {new Date().getFullYear()} IAER. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* --- FLOATING BOTTOM CTA BAR --- */}
      <div className="fixed bottom-0 md:bottom-6 left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 z-[60] w-full md:w-max bg-slate-900/95 backdrop-blur-xl border-t md:border border-emerald-500/20/80 md:rounded-full shadow-[0_-10px_40px_rgba(0,0,0,0.08)] p-1.5 md:p-2 flex items-center justify-between gap-2 transition-all duration-300">
        
        {/* Scrollable Navigation Links */}
        <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar flex-1 md:flex-none pl-1 pr-2 relative">
          {[
            { name: 'Overview', href: '#about', icon: BookOpen },
            { name: 'Programs', href: '#specializations', icon: Layers },
            { name: 'Why Us', href: '#why-iaer', icon: Star },
            { name: 'Placements', href: '#placements', icon: Briefcase },
            { name: 'Campus', href: '#campus-facilities', icon: Building2 }
          ].map(link => (
            <button key={link.name} onClick={() => { document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-1.5 px-3 py-2 rounded-full text-slate-400 hover:text-primary hover:bg-slate-100 transition-colors whitespace-nowrap flex-shrink-0 group">
              <link.icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
              <span className="text-[11px] sm:text-xs font-bold">{link.name}</span>
            </button>
          ))}
        </nav>

        <div className="h-6 w-px bg-slate-200 hidden md:block flex-shrink-0" />

        {/* CTA Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pr-1">
          <Button onClick={onApplyNow} className="h-9 sm:h-10 bg-emerald-500 hover:bg-emerald-500/90 text-white font-extrabold rounded-full px-3 sm:px-5 text-[11px] sm:text-xs shadow-lg shadow-accent/20 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 hidden sm:block" /> Enquire Now
          </Button>
          <a href="tel:+916292004641" className="h-9 sm:h-10 bg-emerald-500/10 hover:bg-emerald-500/10/90 text-white font-extrabold rounded-full px-3 sm:px-5 text-[11px] sm:text-xs shadow-lg shadow-[#143674]/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap">
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
