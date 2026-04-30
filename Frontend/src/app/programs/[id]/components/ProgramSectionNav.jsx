'use client';

import { scrollToSection } from './programClientUtils';

export default function ProgramSectionNav({ activeSection, hasFaqs, items }) {
  const navItems = items.filter((i) => (i.id === 'faqs' ? hasFaqs : true));

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-[92px] lg:bottom-[92px] z-40 px-4 w-full max-w-2xl">
      <div className="rounded-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg px-2 py-1.5 flex items-center justify-between gap-2">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-black transition-all ${
                isActive ? 'bg-accent text-black shadow-sm' : 'text-gray-700 hover:bg-gray-50'
              }`}
              aria-current={isActive ? 'true' : 'false'}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-black' : 'text-accent'}`} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

