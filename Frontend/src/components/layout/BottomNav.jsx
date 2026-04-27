"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import EnquiryPopupButton from "../integrations/EnquiryPopupButton";
import { 
  Home, 
  Link as LinkIcon, 
  BarChart2, 
  Trophy, 
  Zap, 
  HelpCircle, 
  Quote, 
  Microscope, 
  Briefcase, 
  Handshake, 
  Globe, 
  Video,
  Info,
  Layers,
  Layout,
  BookOpen,
  Target,
  ClipboardCheck,
  Award,
  FileText,
  MessageCircle,
  Users,
  HeartHandshake,
  Calendar,
  CalendarOff,
  PenTool,
  Banknote,
  GraduationCap,
  Building2,
  Rocket,
  PieChart,
  Image as ImageIcon
} from "lucide-react";

const sectionConfig = {
  "/": [
    { id: "hero", label: "Home", icon: Home },
    { id: "quick-nav", label: "Quick Links", icon: LinkIcon },
    { id: "stats", label: "Key Stats", icon: BarChart2 },
    { id: "programs", label: "Programs", icon: BookOpen },
    { id: "rankings", label: "Rankings", icon: Trophy },
    { id: "empowerment", label: "Empowerment", icon: Zap },
    { id: "why-choose", label: "Why Us", icon: HelpCircle },
    { id: "testimonials", label: "Stories", icon: Quote },
    { id: "research", label: "Research", icon: Microscope },
    { id: "placements", label: "Placements", icon: Briefcase },
    { id: "placement-partners", label: "Partners", icon: Handshake },
    { id: "global-experience", label: "Global", icon: Globe },
    { id: "international-immersion", label: "Immersion", icon: Globe },
    { id: "virtual-tour", label: "Virtual Tour", icon: Video },
  ],
  "/about": [
    { id: "about-overview", label: "Overview", icon: Info },
    { id: "about-practical", label: "Practical", icon: Zap },
    { id: "about-industry", label: "Industry", icon: Handshake },
    { id: "about-identity", label: "Identity", icon: Users },
    { id: "about-vision", label: "Vision", icon: Target },
    { id: "about-recognition", label: "Approvals", icon: ClipboardCheck },
    { id: "about-awards", label: "Awards", icon: Trophy },
    { id: "about-isr", label: "ISR", icon: HeartHandshake },
  ],
  "/academics": [
    { id: "academics-overview", label: "Overview", icon: Info },
    { id: "academics-teaching-practices", label: "Teaching", icon: PenTool },
    { id: "academics-evaluation", label: "Evaluation", icon: ClipboardCheck },
    { id: "academics-calendar", label: "Calendar", icon: Calendar },
    { id: "academics-holidays", label: "Holidays", icon: CalendarOff },
  ],
  "/admissions/overview": [
    { id: "admissions-overview", label: "Overview", icon: Info },
    { id: "admissions-disciplines", label: "Disciplines", icon: Layers },
    { id: "admissions-startup-research", label: "Startup & Research", icon: Microscope },
  ],
  "/academics/overview": [
    { id: "academics-overview", label: "Overview", icon: Layout },
    { id: "academics-philosophy", label: "Philosophy", icon: BookOpen },
    { id: "academics-focus", label: "Focus", icon: Target },
    { id: "academics-curriculum", label: "Curriculum", icon: Layers },
    { id: "academics-evaluation", label: "Evaluation", icon: ClipboardCheck },
    { id: "academics-skills", label: "Skills", icon: Award },
  ],
  "/admissions": [
    { id: "admissions-overview", label: "Overview", icon: Info },
    { id: "admissions-eligibility", label: "Eligibility", icon: ClipboardCheck },
    { id: "admissions-apply", label: "Apply", icon: FileText },
    { id: "admissions-fee", label: "Fees", icon: Banknote },
    { id: "admissions-scholarships", label: "Scholarships", icon: GraduationCap },
    { id: "admissions-loan", label: "Loans", icon: Handshake },
    { id: "admissions-campus", label: "Campus", icon: Building2 },
  ],
  "/research-and-innovation": [
    { id: "research-overview", label: "Overview", icon: Info },
    { id: "innovation-research", label: "Research", icon: Microscope },
    { id: "startup-entrepreneurship", label: "Startups", icon: Rocket },
  ],
  "/placement": [
    { id: "placement-overview", label: "Overview", icon: Info },
    { id: "placement-cell", label: "TPC & CSD", icon: Users },
    { id: "career-model", label: "Roadmap", icon: Target },
    { id: "internships", label: "Internships", icon: Briefcase },
    { id: "recruiters", label: "Recruiters", icon: Handshake },
    { id: "sectors", label: "Sectors", icon: PieChart },
  ],
  "/campus-life": [
    { id: "campus-overview", label: "Overview", icon: Info },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "events", label: "Events", icon: Calendar },
    { id: "clubs", label: "Clubs", icon: Users },
  ],
};

function getSectionsForPath(pathname) {
  if (!pathname) return null;
  if (sectionConfig[pathname]) return sectionConfig[pathname];
  return null;
}

export default function BottomNav() {
  const pathname = usePathname();
  const sections = getSectionsForPath(pathname);
  const [activeSection, setActiveSection] = useState(
    sections && sections.length ? sections[0].id : null
  );

  useEffect(() => {
    if (!sections || !sections.length) {
      setActiveSection(null);
      return;
    }
    setActiveSection(sections[0].id);
  }, [pathname]);

  useEffect(() => {
    if (!sections || !sections.length) return;
    if (typeof window === "undefined") return;

    const targets = sections
      .map((s) =>
        document.querySelector(
          `[data-section-id="${s.id}"], #${CSS.escape(s.id)}`
        )
      )
      .filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            const el = entry.target;
            const dataId = el.getAttribute("data-section-id");
            const id = dataId || el.id;
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: [0.4, 0.6] }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sections, pathname]);

  if (!sections || !sections.length) {
    return null;
  }

  const handleClick = (id) => {
    if (typeof window === "undefined") return;
    const target =
      document.querySelector(`[data-section-id="${id}"]`) ||
      document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappNumber = "+919007030123";

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hi, I am interested in IAER programs."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      <div className="bg-white/95 border-t border-gray-200 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-3 py-1.5 flex items-center gap-2 overflow-hidden">
          <div className="flex items-center text-[10px] sm:text-xs text-gray-600 min-w-0 flex-1">
            <span className="font-semibold text-[#100902] mr-1 truncate">
              Admissions Open 2026
            </span>
            <span className="hidden sm:inline truncate">
              Apply now or inquire about IAER programs.
            </span>
          </div>
          <EnquiryPopupButton
            className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white text-[#100902] border border-gray-300 hover:border-accent hover:text-accent transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1" />
            Inquire Now
          </EnquiryPopupButton>
          <Link
            href="https://admission.iaer.ac.in/"
            target="_blank"
            className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-accent hover:bg-accent/90 transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 mr-1" />
            Apply Now
          </Link>
        </div>
      </div>
      <div className="bg-accent/95 backdrop-blur-lg border-t border-gray-200">
        <div className="flex items-center lg:justify-center gap-2.5 md:gap-4 overflow-x-auto px-3 md:px-4 h-14 md:h-16 no-scrollbar">
          {sections.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center min-w-[56px] md:min-w-[64px] h-full gap-1 transition-colors duration-200 text-xs shrink-0",
                  isActive ? "text-white" : "text-gray-100/90 hover:text-white"
                )}
              >
                {item.icon && (
                  <item.icon
                    className={cn("w-4 h-4 md:w-5 md:h-5 text-gray-700", isActive && "fill-current")}
                  />
                )}
                <span className="text-[9px] md:text-[10px] text-gray-700 font-medium truncate max-w-[68px] md:max-w-[80px]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
