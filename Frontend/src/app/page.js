"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import QuickNavStrip from "@/components/home/QuickNavStrip";
import StatsSection from "@/components/home/StatsSection";
import RankingsSection from "@/components/home/RankingsSection";
import PlacementSection from "@/components/home/PlacementSection";
import PlacementPartners from "@/components/home/PlacementPartners";
import GlobalExperience from "@/components/home/GlobalExperience";
import EmpowermentBanner from "@/components/home/EmpowermentBanner";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ResearchInnovationSection from "@/components/home/ResearchInnovationSection";
import VirtualTourSection from "@/components/home/VirtualTourSection";

const SECTION_IDS = [
  "hero",
  "quick-nav",
  "stats",
  "rankings",
  "empowerment",
  "why-choose",
  "testimonials",
  "research",
  "placements",
  "placement-partners",
  "global-experience",
  "virtual-tour",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const hasUserInteractedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = Array.from(
      document.querySelectorAll("[data-section-id]")
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        threshold: [0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const cancelTour = () => {
      hasUserInteractedRef.current = true;
    };

    window.addEventListener("wheel", cancelTour, { once: true });
    window.addEventListener("touchstart", cancelTour, { once: true });
    window.addEventListener("keydown", cancelTour, { once: true });

    const sections = SECTION_IDS.map((id) =>
      document.querySelector(`[data-section-id=\"${id}\"]`)
    ).filter(Boolean);

    if (!sections.length) return;

    let index = 0;
    const interval = setInterval(() => {
      if (hasUserInteractedRef.current) {
        clearInterval(interval);
        return;
      }
      index += 1;
      if (index >= sections.length) {
        clearInterval(interval);
        return;
      }
      const el = sections[index];
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 7000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("wheel", cancelTour);
      window.removeEventListener("touchstart", cancelTour);
      window.removeEventListener("keydown", cancelTour);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <section
        id="hero"
        data-section-id="hero"
        aria-current={activeSection === "hero" ? "true" : undefined}
      >
        <HeroSection />
      </section>
      <section
        id="quick-nav"
        data-section-id="quick-nav"
        aria-current={activeSection === "quick-nav" ? "true" : undefined}
      >
        <QuickNavStrip />
      </section>
      <section
        id="stats"
        data-section-id="stats"
        aria-current={activeSection === "stats" ? "true" : undefined}
      >
        <StatsSection />
      </section>
      <section
        id="rankings"
        data-section-id="rankings"
        aria-current={activeSection === "rankings" ? "true" : undefined}
      >
        <RankingsSection />
      </section>
      <section
        id="empowerment"
        data-section-id="empowerment"
        aria-current={activeSection === "empowerment" ? "true" : undefined}
      >
        <EmpowermentBanner />
      </section>
      <section
        id="why-choose"
        data-section-id="why-choose"
        aria-current={activeSection === "why-choose" ? "true" : undefined}
      >
        <WhyChooseSection />
      </section>
      <section
        id="testimonials"
        data-section-id="testimonials"
        aria-current={activeSection === "testimonials" ? "true" : undefined}
      >
        <TestimonialsSection />
      </section>
      <section
        id="research"
        data-section-id="research"
        aria-current={activeSection === "research" ? "true" : undefined}
      >
        <ResearchInnovationSection />
      </section>
      <section
        id="placements"
        data-section-id="placements"
        aria-current={activeSection === "placements" ? "true" : undefined}
      >
        <PlacementSection />
      </section>
      <section
        id="placement-partners"
        data-section-id="placement-partners"
        aria-current={
          activeSection === "placement-partners" ? "true" : undefined
        }
      >
        <PlacementPartners />
      </section>
      <section
        id="global-experience"
        data-section-id="global-experience"
        aria-current={
          activeSection === "global-experience" ? "true" : undefined
        }
      >
        <GlobalExperience />
      </section>
      <section
        id="virtual-tour"
        data-section-id="virtual-tour"
        aria-current={activeSection === "virtual-tour" ? "true" : undefined}
      >
        <VirtualTourSection />
      </section>
    </main>
  );
}
