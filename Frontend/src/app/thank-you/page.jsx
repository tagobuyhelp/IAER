"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Check, 
  Phone, 
  ArrowRight, 
  Home, 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  Award, 
  GraduationCap 
} from 'lucide-react';

export default function ThankYouPage() {
  const whatsappNumber = "+916292004641";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hi, I just submitted an enquiry on the IAER website and would like to connect."
  )}`;

  return (
    <div className="min-h-screen bg-[url('/images/about/who-we-are-about-bg-image.webp')] bg-cover bg-center bg-no-repeat flex flex-col justify-between font-sans relative overflow-hidden">
      {/* Overlay for readability and glassmorphism style */}
      <div className="absolute inset-0 bg-[#143674]/60 backdrop-blur-sm pointer-events-none" />
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-blue-600 to-accent z-20" />

      {/* Header */}
      <header className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200/50 bg-white/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 justify-between items-center text-center sm:text-left">
          <Link href="/">
            <img 
              src="/images/logos/iaer-new-logo-dark-bg-supported.png" 
              alt="IAER Logo" 
              className="h-8 sm:h-12 w-auto bg-[#143674] p-1.5 rounded-lg mx-auto sm:mx-0" 
            />
          </Link>
          <a 
            href="tel:+916292004641" 
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#143674] hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent animate-bounce" />
            <span>Admissions Helpline: +91 62920 04641</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-16 relative z-10">
        <div className="max-w-2xl w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-5 sm:p-10 md:p-12 text-center relative overflow-hidden">
          {/* Animated Success Badge */}
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center border border-green-100 mb-5 sm:mb-6 relative shadow-inner">
            <span className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" />
            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 stroke-[3px]" />
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#143674] tracking-tight mb-2 sm:mb-3">
            Thank You!
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 font-medium mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
            Your inquiry has been successfully submitted. An academic counselor will contact you shortly to guide you through the next steps.
          </p>

          {/* Next Steps Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-10 text-left">
            {[
              { 
                icon: Calendar, 
                title: "Counseling Session", 
                desc: "Get personalized guidance on course selections and career pathways." 
              },
              { 
                icon: GraduationCap, 
                title: "Eligibility Check", 
                desc: "Verify your academic qualifications and credit transfer options." 
              },
              { 
                icon: Award, 
                title: "Scholarships", 
                desc: "Evaluate your eligibility for merit-based financial aid." 
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-4 hover:shadow-md transition-shadow flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#143674] shrink-0 sm:mb-3">
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#143674] text-xs sm:text-sm mb-0.5 sm:mb-1">{step.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all text-xs sm:text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" /> Chat on WhatsApp
            </a>
            <Link 
              href="/programs" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#143674] hover:bg-[#1e468f] text-white font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all text-xs sm:text-sm shadow-md"
            >
              <BookOpen className="w-4 h-4" /> Explore Programs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all text-xs sm:text-sm"
            >
              <Home className="w-4 h-4" /> Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200/50 bg-white/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 space-y-2">
          <p>&copy; {new Date().getFullYear()} IAER. All rights reserved.</p>
          <p className="max-w-md mx-auto">
            Plot No 37, Block – Bhangar-II, Near St. Xavier’s University, Newtown Action Area - III, Kolkata, West Bengal, 700160.
          </p>
        </div>
      </footer>
    </div>
  );
}
