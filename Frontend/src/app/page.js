"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import QuickNavStrip from "@/components/home/QuickNavStrip";
import StatsSection from "@/components/home/StatsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import RankingsSection from "@/components/home/RankingsSection";
import PlacementSection from "@/components/home/PlacementSection";
import PlacementPartners from "@/components/home/PlacementPartners";
import GlobalExperience from "@/components/home/GlobalExperience";
import EmpowermentBanner from "@/components/home/EmpowermentBanner";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ResearchInnovationSection from "@/components/home/ResearchInnovationSection";
import VirtualTourSection from "@/components/home/VirtualTourSection";
import InternationalImmersion from "@/components/home/InternationalImmersion";

const SECTION_IDS = [
  "hero",
  "quick-nav",
  "stats",
  "programs",
  "rankings",
  "empowerment",
  "why-choose",
  "testimonials",
  "research",
  "placements",
  "placement-partners",
  "global-experience",
  "international-immersion",
  "virtual-tour",
];

export default function Home() {
  const hasUserInteractedRef = useRef(false);

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
      document.querySelector(`[data-section-id="${id}"]`)
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
    <main className="min-h-screen overflow-hidden">
      <section id="hero" data-section-id="hero">
        <HeroSection />
      </section>
      <section id="quick-nav" data-section-id="quick-nav">
        <QuickNavStrip />
      </section>
      <section id="stats" data-section-id="stats">
        <StatsSection />
      </section>
      <section id="programs" data-section-id="programs">
        <ProgramsSection />
      </section>
      <section id="rankings" data-section-id="rankings">
        <RankingsSection />
      </section>
      <section id="empowerment" data-section-id="empowerment">
        <EmpowermentBanner />
      </section>
      <section id="why-choose" data-section-id="why-choose">
        <WhyChooseSection />
      </section>
      <section id="testimonials" data-section-id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="research" data-section-id="research">
        <ResearchInnovationSection />
      </section>
      <section id="placements" data-section-id="placements">
        <PlacementSection />
      </section>
      <section id="placement-partners" data-section-id="placement-partners">
        <PlacementPartners />
      </section>
      <section id="global-experience" data-section-id="global-experience">
        <GlobalExperience />
      </section>
      <section id="international-immersion" data-section-id="international-immersion">
        <InternationalImmersion />
      </section>
      <section id="virtual-tour" data-section-id="virtual-tour">
        <VirtualTourSection />
      </section>
    </main>
  );
}
