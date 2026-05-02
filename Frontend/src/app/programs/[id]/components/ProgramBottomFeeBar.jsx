'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, FileText, Phone } from 'lucide-react';
import { handleDownloadBrochure } from '@/lib/download';

export default function ProgramBottomFeeBar({ fees, phone }) {
  const [feeDetailsOpen, setFeeDetailsOpen] = useState(false);
  const notes = Array.isArray(fees?.notes) ? fees.notes : [];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#143674]/95 backdrop-blur-xl text-white">
      {feeDetailsOpen && notes.length ? (
        <div className="border-b border-white/10 bg-[#143674]/95">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="font-black text-white">Fee Details</div>
              <button
                type="button"
                onClick={() => setFeeDetailsOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-white hover:bg-white/15"
              >
                Close
              </button>
            </div>
            <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {notes.map((note, idx) => (
                <div
                  key={`${note}-${idx}`}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] sm:text-xs text-white/80"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="container mx-auto px-4 py-2 safe-area-bottom">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[11px] sm:text-xs font-semibold text-white/70">Total Programme Fee</div>
              <div className="text-base sm:text-lg md:text-xl font-black text-white">{fees?.total || '—'}</div>
              {fees?.afterScholarship ? (
                <div className="mt-1 inline-flex items-center rounded-full bg-emerald-400/20 border border-emerald-300/25 px-3 py-1 text-[11px] sm:text-xs font-semibold text-emerald-100">
                  {fees.afterScholarship} with scholarship
                </div>
              ) : null}
            </div>
            {notes.length ? (
              <button
                type="button"
                onClick={() => setFeeDetailsOpen((v) => !v)}
                className="shrink-0 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] sm:text-xs font-bold text-white hover:bg-white/15"
              >
                Fee Details
              </button>
            ) : null}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Link href="https://admission.iaer.ac.in/" target="_blank" className="col-span-2 sm:col-span-1">
              <Button className="w-full bg-accent hover:bg-accent/90 text-[#0b1220] h-10 rounded-xl shadow-lg shadow-black/10 font-black text-[12px] sm:text-sm">
                <FileText className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </Link>
            <a
              href={`tel:${phone || '8001110000'}`}
              className="inline-flex items-center justify-center gap-2 h-10 rounded-xl border border-white/15 bg-white/10 text-white font-bold hover:bg-white/15 transition-colors text-[12px] sm:text-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="text-[12px] sm:text-sm">Call</span>
            </a>
            <Button
              variant="outline"
              className="h-10 rounded-xl border-white/15 bg-white/10 hover:bg-white/15 text-white font-bold text-[12px] sm:text-sm"
              onClick={handleDownloadBrochure}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
