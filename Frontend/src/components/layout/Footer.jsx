"use client";

import Link from "next/link";
import { navigationData } from "@/lib/navigation";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pinterest = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.644 0-5.784 2.739-5.784 5.562 0 1.102.424 2.286.954 2.927.104.128.12.24.088.434-.096.402-.317 1.285-.359 1.465-.058.239-.189.288-.433.172-1.615-.749-2.619-3.097-2.619-4.989 0-4.065 2.951-7.796 8.523-7.796 4.474 0 7.954 3.188 7.954 7.452 0 4.448-2.802 8.03-6.692 8.03-1.306 0-2.533-.678-2.954-1.481 0 0-.707 2.691-.878 3.348-.317 1.216-1.169 2.72-1.748 3.647 1.53.451 3.15.696 4.827.696 6.621 0 12.017-5.367 12.017-11.987 0-6.62-5.396-11.987-12.017-11.987z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050301] text-gray-300 border-t border-white/10 relative overflow-hidden font-sans">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-10 sm:py-14 md:py-16 relative z-10">
        {/* Top Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14 md:mb-16 border-b border-white/5 pb-8 sm:pb-10 md:pb-12">
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <Link href="/" className="inline-block">
              <img src="/images/logos/iaer-new-logo-dark-bg-supported.png" alt="IAER Logo" className="h-12 sm:h-14 md:h-16 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md text-[12px] sm:text-sm">
              Empowering the future through industry-driven education, global research, and innovation. Join us to shape your career with world-class opportunities.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <SocialLink href="https://www.facebook.com/iaerindia/" icon={Facebook} color="#1877F2"  />
              <SocialLink href="https://www.pinterest.com/iaerindia/" icon={Pinterest} color="#E60023" />
              <SocialLink href="https://www.instagram.com/iaerindia/" icon={Instagram} color="#E4405F" />
              <SocialLink href="https://www.linkedin.com/school/iaer/" icon={Linkedin} color="#0A66C2" />
              <SocialLink href="https://x.com/iaerindia" icon={Twitter} color="#1DA1F2" />
              <SocialLink href="https://www.youtube.com/channel/UCzVuXEZ6EUykVF0qhHKcdfQ/featured" icon={Youtube} color="#FF0000" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-[12px] sm:text-sm">
                Subscribe to our newsletter for the latest admissions news and updates.
              </p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-black/40 border border-white/10 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-gray-600 text-sm"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white px-5 sm:px-8 h-10 sm:h-11 rounded-lg font-semibold transition-all shadow-[0_0_20px_-5px_rgba(247,148,30,0.5)] text-sm sm:text-base">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Quick Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-bold text-white border-b border-accent/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-1" />
                <span>Plot No 37, Block – Bhangar-II, Near St. Xavier’s University, Newtown Action Area - III, Kolkata, West Bengal, Pin Code - 700 160.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <a href="tel:+918001110000" className="hover:text-white transition-colors">+91 800 111 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <a href="mailto:admissions@iaer.in" className="hover:text-white transition-colors">admissions@iaer.in</a>
              </li>
            </ul>
          </div>

          {/* Dynamic Sections from Navigation */}
          {navigationData.slice(0, 3).map((section) => (
            <div key={section.title} className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-bold text-white border-b border-accent/30 pb-2 inline-block">{section.title}</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-[12px] sm:text-sm">
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
        <div className="border-t border-white/10 pt-5 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[12px] sm:text-sm text-gray-500">
          <p>&copy; {currentYear} IAER. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/mandatory-disclosure" className="hover:text-white transition-colors">Mandatory Disclosure</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, color, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1.5 sm:p-2 bg-white hover:bg-[var(--social-bg-hover)] rounded-full transition-all duration-300 group"
      style={
        color
          ? { "--social-bg": `${color}1A`, "--social-bg-hover": `${color}33` }
          : undefined
      }
      aria-label={label}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 group-hover:text-white transition-colors" />
    </a>
  );
}
