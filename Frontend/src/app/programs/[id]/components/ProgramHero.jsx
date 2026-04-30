'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ProgramHero({ program, fadeIn }) {
  return (
    <section className="relative h-[34vh] min-h-[180px] sm:h-[40vh] sm:min-h-[200px] lg:h-[52vh] lg:min-h-[420px] flex items-end pb-0 lg:pb-10 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={program.image || '/images/campus/iaer-campus.png'}
          alt={program.title}
          fill
          className="opacity-100 object-[50%_20%] lg:object-[50%_10%]"
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

        <motion.div {...fadeIn} className="max-w-4xl">
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
  );
}

