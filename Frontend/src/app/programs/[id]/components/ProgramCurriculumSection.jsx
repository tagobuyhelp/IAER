import { BookOpen } from 'lucide-react';
import ProgramSectionBlock from './ProgramSectionBlock';

export default function ProgramCurriculumSection({ curriculumItems, specializations, imageSrc }) {
  return (
    <ProgramSectionBlock
      id="curriculum"
      title="Curriculum"
      subtitle="Structure, subjects and specializations"
      imageSrc={imageSrc}
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
                  <div
                    key={idx}
                    className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-white border border-gray-200 hover:border-accent/30 transition-colors shadow-sm"
                  >
                    <div className="font-mono text-[12px] sm:text-sm md:text-base text-accent font-bold whitespace-nowrap">
                      {hasValue ? label : `Unit ${idx + 1}`}
                    </div>
                    <div className="text-[12px] sm:text-sm md:text-base text-gray-700">{hasValue ? value : String(item)}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-[12px] sm:text-sm text-gray-600">Curriculum details will be updated soon.</div>
          )}
        </div>

        {specializations.length ? (
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 md:mb-6 text-gray-900">Specializations</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {specializations.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-[11px] sm:text-xs md:text-sm font-semibold"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </ProgramSectionBlock>
  );
}

