'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export default function ProgramFAQSection({ faqs, title }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || !faqs.length) return null;

  return (
    <section id="faqs" className="py-6 sm:py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[18px] sm:text-xl md:text-3xl font-black mb-4 sm:mb-5 md:mb-6 text-gray-900 text-center">
            {title || 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-2 sm:space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all hover:border-accent/30"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 md:p-4 text-left group"
                  >
                    <span className="text-[12px] sm:text-sm md:text-base font-bold text-gray-900 group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 ml-3 sm:ml-4 p-1.5 rounded-full transition-colors ${
                        isOpen ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 sm:px-4 md:px-4 pb-3 sm:pb-4 text-[12px] sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50">
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
