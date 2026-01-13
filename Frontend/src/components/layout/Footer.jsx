"use client";

import Link from "next/link";
import { navigationData } from "@/lib/navigation";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050301] text-gray-300 border-t border-white/10 relative overflow-hidden font-sans">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-12">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
               <img src="/images/logos/iaer-logo-white.png" alt="IAER Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering the future through industry-driven education, global research, and innovation. Join us to shape your career with world-class opportunities.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <SocialLink href="#" icon={Facebook} color="#1877F2" />
              <SocialLink href="#" icon={Twitter} color="#1DA1F2" />
              <SocialLink href="#" icon={Instagram} color="#E4405F" />
              <SocialLink href="#" icon={Linkedin} color="#0A66C2" />
              <SocialLink href="#" icon={Youtube} color="#FF0000" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest admissions news and updates.</p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-black/40 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-gray-600"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_-5px_rgba(247,148,30,0.5)]">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-accent/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Salt Lake, Sector V, Kolkata,<br/>West Bengal, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919007030123" className="hover:text-white transition-colors">+91 90070 30123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:admissions@iaer.in" className="hover:text-white transition-colors">admissions@iaer.in</a>
              </li>
            </ul>
          </div>

          {/* Dynamic Sections from Navigation */}
          {navigationData.slice(0, 3).map((section) => (
            <div key={section.title} className="space-y-6">
               <h4 className="text-lg font-bold text-white border-b border-accent/30 pb-2 inline-block">{section.title}</h4>
               <ul className="space-y-3">
                 {section.items?.slice(0, 6).map((item) => (
                   <li key={item.title}>
                     <Link 
                       href={item.href}
                       className="group flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                     >
                       <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent transition-colors"></span>
                       {item.title}
                     </Link>
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} IAER. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, color }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 group"
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
    </a>
  );
}
