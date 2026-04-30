import { Briefcase, MapPin } from 'lucide-react';
import ProgramSectionBlock from './ProgramSectionBlock';

export default function ProgramCareersSection({
  careerOutcomes,
  careerRoles,
  careerSectors,
  careerGroups,
  futureScopeSectors,
  sectionTitles,
  imageSrc
}) {
  const scopeSectors = futureScopeSectors.length ? futureScopeSectors : careerSectors;
  const groups = (() => {
    if (!careerGroups || typeof careerGroups !== 'object') return [];
    if (Array.isArray(careerGroups.groups)) {
      return careerGroups.groups
        .filter((g) => g && Array.isArray(g.items) && g.items.length)
        .map((g) => ({ title: g.title || 'Careers', items: g.items }));
    }

    const humanize = (key) =>
      String(key)
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/^./, (c) => c.toUpperCase());

    return Object.entries(careerGroups)
      .filter(([, v]) => Array.isArray(v) && v.length)
      .map(([k, v]) => ({ title: humanize(k), items: v }));
  })();

  return (
    <ProgramSectionBlock
      id="careers"
      title="Careers"
      subtitle="Outcomes, roles and target sectors"
      imageSrc={imageSrc}
    >
      <div className="space-y-4 md:space-y-5">
        <div className="p-4 md:p-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 border border-gray-200 shadow-sm">
          <h3 className="text-base sm:text-lg md:text-xl font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900">Career Outcomes</h3>
          <p className="text-[12px] sm:text-sm md:text-base text-gray-700 text-justify leading-relaxed">
            {careerOutcomes?.description || 'Career outcomes will be updated soon.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {groups.length ? (
            groups.slice(0, 4).map((group, groupIdx) => (
              <div key={`${group.title}-${groupIdx}`} className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
                <h4 className="text-sm sm:text-base md:text-lg font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900 border-b border-gray-200 pb-2">
                  {group.title}
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {group.items.map((role, idx) => (
                    <li key={`${role}-${idx}`} className="flex items-center text-[12px] sm:text-sm md:text-base text-gray-700">
                      <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : careerRoles.length ? (
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
              <h4 className="text-sm sm:text-base md:text-lg font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900 border-b border-gray-200 pb-2">
                Job Roles
              </h4>
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

          {groups.length ? null : scopeSectors.length ? (
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
              <h4 className="text-sm sm:text-base md:text-lg font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900 border-b border-gray-200 pb-2">
                {sectionTitles?.futureScope || 'Future Scope'}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {scopeSectors.map((sector, idx) => (
                  <li key={`${sector}-${idx}`} className="flex items-center text-[12px] sm:text-sm md:text-base text-gray-700">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                    {sector}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {groups.length && scopeSectors.length ? (
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
              <h4 className="text-sm sm:text-base md:text-lg font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900 border-b border-gray-200 pb-2">
                {sectionTitles?.futureScope || 'Future Scope'}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {scopeSectors.map((sector, idx) => (
                  <li key={`${sector}-${idx}`} className="flex items-center text-[12px] sm:text-sm md:text-base text-gray-700">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                    {sector}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </ProgramSectionBlock>
  );
}
