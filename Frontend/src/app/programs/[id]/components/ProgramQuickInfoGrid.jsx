'use client';

import { motion } from 'framer-motion';
import { Clock, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function ProgramQuickInfoGrid({ overview }) {
  return (
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
        <div className="text-[12px] sm:text-sm md:text-base text-gray-900">{overview?.duration}</div>
      </div>

      <div className="group relative p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-sky-500/50 to-primary/70 opacity-60" />
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-3">
          <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        <div className="text-[11px] sm:text-xs md:text-lg font-bold text-gray-600">Mode</div>
        <div className="text-[12px] sm:text-sm md:text-base text-gray-900">{overview?.mode}</div>
      </div>

      <div className="group relative p-3 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden col-span-2 md:col-span-1">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500/60 via-emerald-400/30 to-emerald-500/60 opacity-70" />
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-3">
          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
        </div>
        <div className="text-[11px] sm:text-xs md:text-lg font-bold text-gray-600">Eligibility</div>
        <div className="text-[12px] sm:text-sm md:text-base text-gray-900">{overview?.eligibility}</div>
      </div>
    </motion.div>
  );
}

