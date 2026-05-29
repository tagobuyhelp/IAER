'use client';

import { useMemo, useState, useEffect } from 'react';
import { Award, BookOpen, Briefcase, HelpCircle } from 'lucide-react';
import InfiniteCall from '@/components/InfiniteCall';
import OurHiringPartnersSection from '@/components/placement/OurHiringPartnersSection';
import ProgramHero from './components/ProgramHero';
import ProgramSectionNav from './components/ProgramSectionNav';
import ProgramQuickInfoGrid from './components/ProgramQuickInfoGrid';
import ProgramVisualStrip from './components/ProgramVisualStrip';
import ProgramOverviewSection from './components/ProgramOverviewSection';
import ProgramCurriculumSection from './components/ProgramCurriculumSection';
import ProgramCareersSection from './components/ProgramCareersSection';
import ProgramAdmissionPanel from './components/ProgramAdmissionPanel';
import ProgramFAQSection from './components/ProgramFAQSection';
import ProgramBottomFeeBar from './components/ProgramBottomFeeBar';
import { getCurriculumItems, getProgramVisuals, getSectionImage, splitLearningItems } from './components/programClientUtils';

export default function ProgramClient({ program }) {
  const [activeSection, setActiveSection] = useState("overview");
  const curriculumItems = getCurriculumItems(program);
  const contentBlocks = program?.contentBlocks || {};
  const specializations = Array.isArray(program?.curriculum?.specializations)
    ? program.curriculum.specializations
    : [];
  const careerOutcomes = program?.careerOutcomes;
  const careerRoles = Array.isArray(careerOutcomes?.roles) ? careerOutcomes.roles : [];
  const careerSectors = Array.isArray(careerOutcomes?.sectors) ? careerOutcomes.sectors : [];
  const { core: coreLearningItems, projects: projectLearningItems } = useMemo(
    () => splitLearningItems(curriculumItems),
    [curriculumItems]
  );
  const searchQueries = Array.isArray(contentBlocks?.searchQueries) ? contentBlocks.searchQueries : [];
  const idealFor = Array.isArray(contentBlocks?.idealFor) ? contentBlocks.idealFor : [];
  const trainingItems = Array.isArray(contentBlocks?.training) && contentBlocks.training.length
    ? contentBlocks.training
    : coreLearningItems;
  const projectsItems = Array.isArray(contentBlocks?.projects) && contentBlocks.projects.length
    ? contentBlocks.projects
    : projectLearningItems;
  const internshipRoles = Array.isArray(contentBlocks?.internshipRoles) ? contentBlocks.internshipRoles : [];
  const placementSupport = Array.isArray(contentBlocks?.placementSupport) ? contentBlocks.placementSupport : [];
  const careerGroups = contentBlocks?.careerGroups || {};
  const futureScopeSectors = Array.isArray(contentBlocks?.futureScopeSectors) ? contentBlocks.futureScopeSectors : [];
  const cta = contentBlocks?.cta || {};
  const sectionTitles = contentBlocks?.sectionTitles || {};
  const admissionSteps = Array.isArray(program?.admission) ? program.admission : [];

  useEffect(() => {
    if (!program.widgetId) return;

    const btnId = program.widgetId;
    const baseUrl = 'widgets.nopaperforms.com';
    console.log("[Meritto ProgramClient] Setting up program-specific widget. ID:", btnId);

    // Save previous globals to restore them on unmount
    const prevActiveWidgetId = window.__IAER_ACTIVE_WIDGET_ID;
    const prevBrochureWidgetId = window.__IAER_BROCHURE_WIDGET_ID;

    // Set new active widget globals
    window.__IAER_ACTIVE_WIDGET_ID = btnId;
    window.__IAER_BROCHURE_WIDGET_ID = btnId;

    // Ensure hidden button exists
    let btn = document.querySelector('.npfWidget-' + btnId);
    if (!btn) {
      console.log("[Meritto ProgramClient] Creating hidden button element");
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'npfWidgetButton npfWidget-' + btnId;
      btn.style.display = 'none';
      btn.textContent = 'Enquire Now!';
      document.body.appendChild(btn);
    } else {
      console.log("[Meritto ProgramClient] Hidden button already exists");
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

      console.log("[Meritto ProgramClient] initWidget run. Constructor found:", !!NpfConstructor);
      if (NpfConstructor) {
        if (!window['npfW' + btnId]) {
          console.log("[Meritto ProgramClient] Initializing new NpfWidgetsInit for", btnId);
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
          console.log("[Meritto ProgramClient] NpfWidgetsInit instance created:", window['npfW' + btnId]);
        }

        const trigger = document.querySelector('.npfWidget-' + btnId);
        if (trigger) {
          trigger.onclick = (e) => {
            console.log("[Meritto ProgramClient] Trigger button clicked!");
            try {
              const widget = window['npfW' + btnId];
              if (widget && typeof widget.showPopup === 'function') {
                widget.showPopup(btnId, baseUrl);
              }
            } catch (err) {
              console.error("[Meritto ProgramClient] Error in click:", err);
            }
          };
        }
        return true;
      }
      return false;
    };

    if (!initWidget()) {
      const interval = setInterval(() => {
        if (initWidget()) {
          clearInterval(interval);
        }
      }, 100);
      setTimeout(() => clearInterval(interval), 10000);
    }

    return () => {
      console.log("[Meritto ProgramClient] Restoring widget globals and cleanup");
      window.__IAER_ACTIVE_WIDGET_ID = prevActiveWidgetId;
      window.__IAER_BROCHURE_WIDGET_ID = prevBrochureWidgetId;
      const trigger = document.querySelector('.npfWidget-' + btnId);
      if (trigger) {
        trigger.onclick = null;
      }
    };
  }, [program.widgetId]);

  useEffect(() => {
    const ids = ["overview", "curriculum", "careers", "faqs"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (!visible) return;
        const id = visible.target.getAttribute("id");
        if (id) setActiveSection(id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-white selection:bg-accent selection:text-white pb-24 sm:pb-28">
      <InfiniteCall />

      <ProgramHero program={program} fadeIn={fadeIn} />

      <ProgramSectionNav
        activeSection={activeSection}
        hasFaqs={Boolean(program?.faqs?.length)}
        items={[
          { id: 'overview', label: 'Overview', Icon: Award },
          { id: 'curriculum', label: 'Curriculum', Icon: BookOpen },
          { id: 'careers', label: 'Careers', Icon: Briefcase },
          { id: 'faqs', label: 'FAQs', Icon: HelpCircle }
        ]}
      />

      <section className="relative py-8 sm:py-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="w-full">
            <ProgramQuickInfoGrid overview={program?.overview} />

            <div className="mb-6">
              <ProgramVisualStrip programTitle={program.title} images={getProgramVisuals(program)} />
            </div>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <ProgramOverviewSection
                program={program}
                imageSrc={getSectionImage(program, 'overview')}
                searchQueries={searchQueries}
                idealFor={idealFor}
                trainingItems={trainingItems}
                projectsItems={projectsItems}
                internshipRoles={internshipRoles}
                placementSupport={placementSupport}
                careerGroups={careerGroups}
                sectionTitles={sectionTitles}
              />

              <ProgramCurriculumSection
                curriculumItems={curriculumItems}
                specializations={specializations}
                imageSrc={getSectionImage(program, 'curriculum')}
              />

              <ProgramCareersSection
                careerOutcomes={careerOutcomes}
                careerRoles={careerRoles}
                careerSectors={careerSectors}
                careerGroups={careerGroups}
                futureScopeSectors={futureScopeSectors}
                sectionTitles={sectionTitles}
                imageSrc={getSectionImage(program, 'careers')}
              />

              <ProgramAdmissionPanel program={program} cta={cta} admissionSteps={admissionSteps} />
            </div>
          </div>
        </div>
      </section>

      <ProgramFAQSection faqs={program?.faqs} title={sectionTitles?.faqs} />
      <OurHiringPartnersSection compact />

      <ProgramBottomFeeBar fees={program?.fees} phone={program?.contact?.phone || '8001110000'} />
    </div>
  );
}

