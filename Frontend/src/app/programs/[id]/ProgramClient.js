'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Briefcase, 
  BookOpen, 
  Award,
  Download,
  Phone,
  FileText,
  Plus,
  Minus,
  HelpCircle
} from 'lucide-react';
import InfiniteCall from '@/components/InfiniteCall';
import OurHiringPartnersSection from '@/components/placement/OurHiringPartnersSection';

const VISUAL_FALLBACKS = [
  '/images/programs/iaer-industry-integrated-curriculum.webp',
  '/images/programs/iaer-global-alumni-network.webp',
  '/images/campus/iaer-campus.png',
];

function getProgramVisuals(program) {
  const fromProgram = program?.visuals;
  if (Array.isArray(fromProgram) && fromProgram.length) return fromProgram;
  const img = program?.image ? [program.image, ...VISUAL_FALLBACKS] : VISUAL_FALLBACKS;
  return img.slice(0, 3);
}

function VisualStrip({ programTitle, images }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="grid grid-cols-3 gap-[1px] bg-gray-200">
        {images.map((src, idx) => (
          <div key={`${src}-${idx}`} className="relative aspect-[4/3] bg-gray-50">
            <Image
              src={src}
              alt={`${programTitle} visual ${idx + 1}`}
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

function getSectionImage(program, section) {
  const keyMap = {
    overview: "overviewImage",
    curriculum: "curriculumImage",
    careers: "careersImage",
  };
  const explicitKey = keyMap[section];
  const explicitSrc = explicitKey ? program?.[explicitKey] : undefined;
  if (explicitSrc) return explicitSrc;

  const visuals = getProgramVisuals(program);
  const map = { overview: 0, curriculum: 1, careers: 2 };
  const idx = map[section] ?? 0;
  return visuals[idx] || visuals[0] || '/images/campus/iaer-campus.png';
}

function SectionBlock({ id, title, subtitle, imageSrc, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="grid lg:grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-start">
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="relative aspect-[4/3] bg-gray-50">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
            </div>
            <div className="p-3 sm:p-4 md:p-5">
              <div className="text-base sm:text-lg md:text-2xl font-black text-gray-900">{title}</div>
              <div className="mt-1 text-[11px] sm:text-sm text-gray-600">{subtitle}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  );
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getCurriculumItems(program) {
  const structure = program?.curriculum?.structure;
  if (Array.isArray(structure) && structure.length) return structure;

  const coreModules = program?.curriculum?.coreModules;
  const electives = program?.curriculum?.electives;

  const items = [];
  if (Array.isArray(coreModules) && coreModules.length) {
    items.push(...coreModules.map((m) => `Core: ${m}`));
  }
  if (Array.isArray(electives) && electives.length) {
    items.push(...electives.map((m) => `Elective: ${m}`));
  }
  return items;
}

function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || !faqs.length) return null;

  return (
    <section id="faqs" className="py-8 sm:py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[20px] sm:text-2xl md:text-4xl font-black mb-6 sm:mb-8 md:mb-10 text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all hover:border-accent/30"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left group"
                  >
                    <span className="text-[13px] sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 ml-3 sm:ml-4 p-1.5 rounded-full transition-colors ${isOpen ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-5 md:p-6 pt-0 text-[12px] sm:text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProgramClient({ program }) {
  const [activeSection, setActiveSection] = useState("overview");
  const curriculumItems = getCurriculumItems(program);
  const specializations = Array.isArray(program?.curriculum?.specializations)
    ? program.curriculum.specializations
    : [];
  const careerOutcomes = program?.careerOutcomes;
  const careerRoles = Array.isArray(careerOutcomes?.roles) ? careerOutcomes.roles : [];
  const careerSectors = Array.isArray(careerOutcomes?.sectors) ? careerOutcomes.sectors : [];

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
    <div className="min-h-screen bg-gray-100 text-white selection:bg-accent selection:text-white pb-40 lg:pb-24">
      <InfiniteCall />
      
      {/* Hero Section */}
      <section className="relative h-[34vh] min-h-[180px] sm:h-[40vh] sm:min-h-[200px] lg:h-[52vh] lg:min-h-[420px] flex items-end pb-0 lg:pb-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={program.image || '/images/campus/iaer-campus.png'}
            alt={program.title}
            fill
            className=" opacity-65 object-[50%_20%] lg:object-[50%_10%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <Link 
              href="/programs" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] sm:text-sm">Back to Programs</span>
            </Link>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-[11px] sm:text-xs md:text-sm backdrop-blur-md">
                {program.code}
              </span>
              <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-medium text-[11px] sm:text-xs md:text-sm backdrop-blur-md">
                Full Time
              </span>
            </div>
            
            <h1 className="text-[22px] sm:text-3xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              {program.title}
            </h1>
            
            <p className="text-[12px] sm:text-base md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {program.subtitle || program.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="fixed left-1/2 -translate-x-1/2 bottom-[84px] lg:bottom-5 z-40 px-4 w-full max-w-md">
        <div className="rounded-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg px-2 py-1.5 flex items-center justify-between gap-2">
          {[
            { id: "overview", label: "Overview", Icon: Award },
            { id: "curriculum", label: "Curriculum", Icon: BookOpen },
            { id: "careers", label: "Careers", Icon: Briefcase },
            ...(program.faqs && program.faqs.length ? [{ id: "faqs", label: "FAQs", Icon: HelpCircle }] : [])
          ].map(({ id, label, Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-black transition-all ${
                  isActive
                    ? "bg-accent text-black shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "true" : "false"}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-black" : "text-accent"}`} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="relative py-8 sm:py-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03] mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 md:gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="rounded-[2rem] bg-white border border-gray-200 shadow-sm p-3 md:p-5">
            
            {/* Quick Info Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6"
            >
              <div className="group relative p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-orange-400 to-accent opacity-70" />
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div className="text-[11px] sm:text-xs md:text-lg font-bold text-gray-600">Duration</div>
                <div className="text-[12px] sm:text-sm md:text-base text-gray-900">{program.overview.duration}</div>
              </div>
              <div className="group relative p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-sky-500/50 to-primary/70 opacity-60" />
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-[11px] sm:text-xs md:text-lg font-bold text-gray-600">Mode</div>
                <div className="text-[12px] sm:text-sm md:text-base text-gray-900">{program.overview.mode}</div>
              </div>
              <div className="group relative p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden col-span-2 md:col-span-1">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500/60 via-emerald-400/30 to-emerald-500/60 opacity-70" />
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                </div>
                <div className="text-[11px] sm:text-xs md:text-lg font-bold text-gray-600">Eligibility</div>
                <div className="text-[12px] sm:text-sm md:text-base text-gray-900">{program.overview.eligibility}</div>
              </div>
            </motion.div>

            <div className="mb-6">
              <VisualStrip programTitle={program.title} images={getProgramVisuals(program)} />
            </div>

            <div className="space-y-7 sm:space-y-8 md:space-y-10">
              <SectionBlock
                id="overview"
                title="Overview"
                subtitle="Program snapshot and key highlights"
                imageSrc={getSectionImage(program, "overview")}
              >
                <div className="space-y-4 md:space-y-5">
                  <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900">Program Overview</h3>
                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-base md:text-lg">
                      {program.longDescription || program.description}
                    </p>
                  </div>

                  {program.whyStudy && (
                    <div className="p-4 md:p-6 rounded-3xl bg-white border border-gray-200 shadow-sm">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 md:mb-6 text-gray-900 flex items-center gap-2">
                        <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" /> Why this program?
                      </h3>
                      <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                        {program.whyStudy.map((reason, idx) => (
                          <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-700 text-[12px] sm:text-sm md:text-base">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {program.highlights && (
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2.5 sm:mb-3 md:mb-5 text-gray-900">Key Highlights</h3>
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start p-3 md:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-accent mr-3 shrink-0" />
                            <span className="text-[12px] sm:text-sm md:text-base text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </SectionBlock>

              <SectionBlock
                id="curriculum"
                title="Curriculum"
                subtitle="Structure, subjects and specializations"
                imageSrc={getSectionImage(program, "curriculum")}
              >
                <div className="space-y-4 md:space-y-5">
                  <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 md:mb-6 text-gray-900 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" /> Course Structure
                    </h3>
                    {curriculumItems.length ? (
                      <div className="space-y-3 md:space-y-4">
                        {curriculumItems.map((item, idx) => {
                          const [label, ...rest] = String(item).split(':');
                          const value = rest.join(':').trim();
                          const hasValue = Boolean(value);

                          return (
                            <div key={idx} className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-white border border-gray-200 hover:border-accent/30 transition-colors shadow-sm">
                              <div className="font-mono text-[12px] sm:text-sm md:text-base text-accent font-bold whitespace-nowrap">
                                {hasValue ? label : `Unit ${idx + 1}`}
                              </div>
                              <div className="text-[12px] sm:text-sm md:text-base text-gray-700">
                                {hasValue ? value : String(item)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-[12px] sm:text-sm text-gray-600">
                        Curriculum details will be updated soon.
                      </div>
                    )}
                  </div>

                  {specializations.length ? (
                    <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 md:mb-6 text-gray-900">Specializations</h3>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {specializations.map((spec, idx) => (
                          <span key={idx} className="px-3 py-1 md:py-1.5 md:px-4 md:py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-[11px] sm:text-xs md:text-sm font-semibold">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </SectionBlock>

              <SectionBlock
                id="careers"
                title="Careers"
                subtitle="Outcomes, roles and target sectors"
                imageSrc={getSectionImage(program, "careers")}
              >
                <div className="space-y-4 md:space-y-5">
                  <div className="p-4 md:p-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 border border-gray-200 shadow-sm">
                    <h3 className="text-base sm:text-lg md:text-xl font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900">Career Outcomes</h3>
                    <p className="text-[12px] sm:text-sm md:text-base text-gray-700 text-justify leading-relaxed">
                      {careerOutcomes?.description || "Career outcomes will be updated soon."}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {careerRoles.length ? (
                      <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
                        <h4 className="text-sm sm:text-base md:text-lg font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900 border-b border-gray-200 pb-2">Job Roles</h4>
                        <ul className="space-y-2 md:space-y-3">
                          {careerRoles.map((role, idx) => (
                            <li key={idx} className="flex items-center text-[12px] sm:text-sm md:text-base text-gray-700">
                              <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {careerSectors.length ? (
                      <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
                        <h4 className="text-sm sm:text-base md:text-lg font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900 border-b border-gray-200 pb-2">Target Sectors</h4>
                        <ul className="space-y-2 md:space-y-3">
                          {careerSectors.map((sector, idx) => (
                            <li key={idx} className="flex items-center text-[12px] sm:text-sm md:text-base text-gray-700">
                              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                              {sector}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </SectionBlock>
            </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            {/* Fee Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="p-4 sm:p-5 md:p-6 rounded-3xl bg-white border border-gray-200 shadow-sm sticky top-24 text-gray-900 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-orange-400 to-primary opacity-70" />
              <div className="mb-5 md:mb-6">
                <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm mb-2 font-semibold">Total Course Fee</p>
                <div className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 mb-2">{program.fees.total}</div>
                {program.fees.afterScholarship && (
                  <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-700 text-[11px] sm:text-xs md:text-sm font-semibold">
                    {program.fees.afterScholarship} with scholarship
                  </div>
                )}
              </div>

              <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                <Link href="https://admission.iaer.ac.in/" target="_blank" className="block">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white py-3 md:py-5 text-sm sm:text-base md:text-lg rounded-xl shadow-lg shadow-accent/20">
                    Apply Now
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50 text-gray-900 py-3 md:py-5 rounded-xl text-[12px] sm:text-sm md:text-base">
                  <Download className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" /> Download Brochure
                </Button>
                <div className="flex items-center justify-center gap-2 text-gray-600 text-[11px] sm:text-xs md:text-sm pt-1.5 md:pt-3">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" /> 
                  <span>Need help? Call +91 90070 30123</span>
                </div>
              </div>

              {program.fees.notes && (
                <div className="pt-4 md:pt-6 border-t border-gray-200 space-y-1.5 md:space-y-2">
                  {program.fees.notes.map((note, idx) => (
                    <p key={idx} className="text-[10px] sm:text-[11px] md:text-xs text-gray-500">* {note}</p>
                  ))}
                </div>
              )}
            </motion.div>

          </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={program.faqs} />
      <OurHiringPartnersSection />

      {/* Mobile Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-[#0a0601]/95 backdrop-blur-lg border-t border-white/10 lg:hidden safe-area-bottom">
        <div className="flex gap-3">
          <a 
            href={`tel:${program.contact?.phone || '+919007030123'}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium active:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-[12px] sm:text-sm">Call</span>
          </a>
          <Link 
            href="https://admission.iaer.ac.in/"
            target="_blank" 
            className="flex-[2] flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-accent text-[#0a0601] font-bold hover:bg-accent/90 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span className="text-[12px] sm:text-sm">Apply Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

