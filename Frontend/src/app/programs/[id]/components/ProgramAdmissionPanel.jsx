'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Phone } from 'lucide-react';

export default function ProgramAdmissionPanel({ program, cta, admissionSteps }) {
  const steps = Array.isArray(admissionSteps) ? admissionSteps : [];

  if (!cta?.heading && !cta?.subheading && !cta?.tagline && !cta?.note && !cta?.actionsText && !steps.length) {
    return null;
  }

  return (
    <div className="rounded-[2rem] border border-gray-200 bg-[#0b1220] text-white p-4 md:p-6 shadow-sm overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 w-72 h-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative grid lg:grid-cols-12 gap-4 md:gap-6 items-start">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-black text-white/70 mb-2">
            <FileText className="w-4 h-4 text-accent" />
            Admission 2026
          </div>

          <div className="text-lg sm:text-xl md:text-3xl font-black leading-tight">
            {cta?.heading || 'Apply Now'}
          </div>

          {cta?.subheading ? (
            <div className="mt-1 text-[12px] sm:text-sm text-white/80 font-semibold">{cta.subheading}</div>
          ) : null}

          {cta?.tagline ? (
            <div className="mt-2 text-[12px] sm:text-sm text-white/90 font-semibold">{cta.tagline}</div>
          ) : null}

          <div className="mt-3 flex flex-wrap gap-2">
            {cta?.note ? (
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] sm:text-xs font-semibold text-white/90">
                {cta.note}
              </span>
            ) : null}
            {program?.overview?.scholarship ? (
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-400/25 px-3 py-1 text-[11px] sm:text-xs font-semibold text-emerald-100">
                {program.overview.scholarship}
              </span>
            ) : null}
          </div>

          {cta?.actionsText ? (
            <div className="mt-2 text-[11px] sm:text-xs text-white/70 font-semibold">{cta.actionsText}</div>
          ) : null}

          <div className="mt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <Link href="https://admission.iaer.ac.in/" target="_blank" className="sm:flex-1">
              <Button className="w-full bg-accent hover:bg-accent/90 text-[#0b1220] h-11 rounded-xl font-black">
                Apply Now
              </Button>
            </Link>
            <a
              href={`tel:${program?.contact?.phone || '8001110000'}`}
              className="sm:flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-xl border border-white/15 bg-white/10 text-white font-bold hover:bg-white/15 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-[12px] sm:text-sm">Get Free Counselling</span>
            </a>
          </div>
        </div>

        {steps.length ? (
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-5">
              <div className="text-[12px] sm:text-sm font-black text-white mb-3">Admission 2026</div>
              <div className="space-y-2.5">
                {steps.slice(0, 3).map((step, idx) => (
                  <div
                    key={`${step}-${idx}`}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center font-black text-[12px] text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-black text-white/70">Step {idx + 1}</div>
                      <div className="text-[12px] sm:text-sm font-semibold text-white">{step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

