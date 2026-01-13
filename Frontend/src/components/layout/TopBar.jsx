"use client";

import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

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
            <Link href="https://facebook.com" target="_blank" className="hover:text-[#1877F2] transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-[#E4405F] transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-[#1DA1F2] transition-colors">
              <Twitter className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-[#FF0000] transition-colors">
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
          </div>
        </div>
      </div>
    </div>
  );
}
