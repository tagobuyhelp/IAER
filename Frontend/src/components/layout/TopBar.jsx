"use client";

import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

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

export default function TopBar() {
  return (
    <div className="bg-[#0a0601] text-gray-400 py-2 border-b border-white/5 text-xs font-medium relative z-[51]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a href="tel:+919007030123" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 90070 30123</span>
          </a>
          <a href="mailto:admissions@iaer.in" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>admissions@iaer.in</span>
          </a>
        </div>

        {/* Socials & Quick Links */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
            <Link href="https://www.facebook.com/iaerindia/" target="_blank" className="hover:text-[#1877F2] transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://www.pinterest.com/iaerindia/" target="_blank" className="hover:text-white transition-colors">
              <Pinterest className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://www.instagram.com/iaerindia/" target="_blank" className="hover:text-[#E4405F] transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://www.linkedin.com/school/iaer/" target="_blank" className="hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://x.com/iaerindia" target="_blank" className="hover:text-[#1DA1F2] transition-colors">
              <Twitter className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCzVuXEZ6EUykVF0qhHKcdfQ/featured" target="_blank" className="hover:text-[#FF0000] transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/student-login" className="hover:text-white transition-colors">
              Student Login
            </Link>
            <Link href="/alumni" className="hover:text-white transition-colors">
              Alumni
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
