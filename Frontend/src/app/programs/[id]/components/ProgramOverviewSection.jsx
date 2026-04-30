import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Briefcase, CheckCircle2, Clock, Phone } from 'lucide-react';
import ProgramSectionBlock from './ProgramSectionBlock';

export default function ProgramOverviewSection({
  program,
  imageSrc,
  searchQueries,
  idealFor,
  trainingItems,
  projectsItems,
  internshipRoles,
  placementSupport,
  careerGroups,
  sectionTitles
}) {
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
  const comparisonInstitutions = Array.isArray(program?.contentBlocks?.comparison?.comparedInstitutions)
    ? program.contentBlocks.comparison.comparedInstitutions
    : [];
  const comparisonReasons = Array.isArray(program?.contentBlocks?.comparison?.reasons)
    ? program.contentBlocks.comparison.reasons
    : [];
  const overviewNotes = Array.isArray(program?.contentBlocks?.notes) ? program.contentBlocks.notes : [];

  return (
    <ProgramSectionBlock
      id="overview"
      title="Overview"
      subtitle="Program snapshot and key highlights"
      imageSrc={imageSrc}
      leftExtra={
        <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="text-[12px] sm:text-sm font-black text-gray-900">At a glance</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2">
              <div className="text-[10px] sm:text-[11px] font-black text-gray-600">Total fee</div>
              <div className="mt-0.5 text-[12px] sm:text-sm font-black text-gray-900">{program?.fees?.total || '—'}</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-emerald-50 px-3 py-2">
              <div className="text-[10px] sm:text-[11px] font-black text-emerald-800">Scholarship</div>
              <div className="mt-0.5 text-[12px] sm:text-sm font-black text-emerald-900">
                {program?.overview?.scholarship || 'Available'}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2">
              <div className="text-[10px] sm:text-[11px] font-black text-gray-600">Duration</div>
              <div className="mt-0.5 text-[12px] sm:text-sm font-black text-gray-900">{program?.overview?.duration || '—'}</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2">
              <div className="text-[10px] sm:text-[11px] font-black text-gray-600">Mode</div>
              <div className="mt-0.5 text-[12px] sm:text-sm font-black text-gray-900">{program?.overview?.mode || '—'}</div>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <Link href="https://admission.iaer.ac.in/" target="_blank" className="block">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white h-10 rounded-xl font-black">
                Apply Now
              </Button>
            </Link>
            <a
              href={`tel:${program.contact?.phone || '8001110000'}`}
              className="inline-flex items-center justify-center gap-2 h-10 rounded-xl border border-gray-200 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-[12px] sm:text-sm">Get Free Counselling</span>
            </a>
          </div>
        </div>
      }
    >
      <div className="space-y-3 md:space-y-4">
        <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-3">
            {program?.overview?.duration ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-200 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-700">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {program.overview.duration}
              </span>
            ) : null}
            {program?.overview?.scholarship ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-emerald-700">
                <Award className="w-3.5 h-3.5" />
                {program.overview.scholarship}
              </span>
            ) : null}
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2.5 sm:mb-3 md:mb-4 text-gray-900">
            Build a Future-Ready Career
          </h3>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-base md:text-lg">{program.description}</p>
        </div>

        {(searchQueries.length || idealFor.length) ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg md:text-xl font-black mb-3 text-gray-900">Program Fit</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {searchQueries.length ? (
                <div>
                  <div className="text-[11px] sm:text-xs font-black text-gray-600 mb-2">Students searching for</div>
                  <div className="flex flex-wrap gap-2">
                    {searchQueries.map((q, idx) => (
                      <span
                        key={`${q}-${idx}`}
                        className="inline-flex items-center rounded-full bg-gray-50 border border-gray-200 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-700"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {idealFor.length ? (
                <div>
                  <div className="text-[11px] sm:text-xs font-black text-gray-600 mb-2">This programme is ideal for</div>
                  <div className="flex flex-wrap gap-2">
                    {idealFor.map((q, idx) => (
                      <span
                        key={`${q}-${idx}`}
                        className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-accent"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {(trainingItems.length || projectsItems.length) ? (
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {trainingItems.length ? (
              <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-black mb-2.5 sm:mb-3 text-gray-900">
                  {sectionTitles?.training || 'Industry-Oriented Training'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trainingItems.slice(0, 12).map((item, idx) => (
                    <span
                      key={`${item}-${idx}`}
                      className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {projectsItems.length ? (
              <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-black mb-2.5 sm:mb-3 text-gray-900">
                  {sectionTitles?.projects || 'Hands-On Projects'}
                </h3>
                <ul className="space-y-2.5">
                  {projectsItems.slice(0, 10).map((item, idx) => (
                    <li
                      key={`${item}-${idx}`}
                      className="flex items-start gap-2 text-gray-700 text-[12px] sm:text-sm md:text-base"
                    >
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {(program?.internships?.areas?.length || program?.internships?.note) ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" /> {sectionTitles?.internships || 'Internship Opportunities'}
            </h3>
            {Array.isArray(program?.internships?.areas) && program.internships.areas.length ? (
              <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                {program.internships.areas.map((area, idx) => (
                  <div
                    key={`${area}-${idx}`}
                    className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-[12px] sm:text-sm md:text-base text-gray-700 font-semibold"
                  >
                    {area}
                  </div>
                ))}
              </div>
            ) : null}
            {program?.internships?.note ? (
              <div className="mt-3 text-[12px] sm:text-sm text-gray-600 leading-relaxed">{program.internships.note}</div>
            ) : null}
            {internshipRoles.length ? (
              <div className="mt-3">
                <div className="text-[11px] sm:text-xs font-black text-gray-600 mb-2">Internship Roles Include</div>
                <div className="flex flex-wrap gap-2">
                  {internshipRoles.map((role, idx) => (
                    <span
                      key={`${role}-${idx}`}
                      className="inline-flex items-center rounded-full bg-gray-50 border border-gray-200 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-700"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {(placementSupport.length || groups.length) ? (
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-4 md:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">
              {sectionTitles?.placement || 'Placement Assistance & Career Opportunities'}
            </h3>
            {placementSupport.length ? (
              <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                {placementSupport.map((item, idx) => (
                  <div
                    key={`${item}-${idx}`}
                    className="rounded-2xl border border-gray-200 bg-white px-3 py-2.5 text-[12px] sm:text-sm md:text-base text-gray-800 font-semibold shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
            {groups.length ? (
              <div className="mt-4 grid md:grid-cols-2 gap-3 md:gap-4">
                {groups.slice(0, 2).map((group, groupIdx) => (
                  <div key={`${group.title}-${groupIdx}`} className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-[11px] sm:text-xs font-black text-gray-600 mb-2">{group.title}</div>
                    <ul className="space-y-2">
                      {group.items.slice(0, 6).map((role, idx) => (
                        <li key={`${role}-${idx}`} className="flex items-center text-[12px] sm:text-sm md:text-base text-gray-700">
                          <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2 md:mr-3" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        {program.whyStudy ? (
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
        ) : null}

        {program.highlights ? (
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2.5 sm:mb-3 md:mb-5 text-gray-900">
              {sectionTitles?.highlights || 'Programme Highlights'}
            </h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {program.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start p-3 md:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-accent mr-3 shrink-0" />
                  <span className="text-[12px] sm:text-sm md:text-base text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {(comparisonInstitutions.length || comparisonReasons.length) ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg md:text-xl font-black mb-3 text-gray-900">Compare Before You Choose</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {comparisonInstitutions.length ? (
                <div>
                  <div className="text-[11px] sm:text-xs font-black text-gray-600 mb-2">Students often compare</div>
                  <div className="flex flex-wrap gap-2">
                    {comparisonInstitutions.map((name, idx) => (
                      <span
                        key={`${name}-${idx}`}
                        className="inline-flex items-center rounded-full bg-gray-50 border border-gray-200 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-700"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {comparisonReasons.length ? (
                <div>
                  <div className="text-[11px] sm:text-xs font-black text-gray-600 mb-2">IAER stands out for</div>
                  <ul className="space-y-2">
                    {comparisonReasons.map((item, idx) => (
                      <li
                        key={`${item}-${idx}`}
                        className="flex items-start gap-2 text-gray-700 text-[12px] sm:text-sm md:text-base"
                      >
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {overviewNotes.length ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg md:text-xl font-black mb-2.5 text-gray-900">Notes</h3>
            <ul className="space-y-2">
              {overviewNotes.map((note, idx) => (
                <li
                  key={`${note}-${idx}`}
                  className="flex items-start gap-2 text-gray-700 text-[12px] sm:text-sm md:text-base"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {(program?.contentBlocks?.cta?.heading || program?.contentBlocks?.cta?.subheading) ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <Link href="https://admission.iaer.ac.in/" target="_blank" className="sm:flex-1">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white h-11 rounded-xl font-black">
                  Apply Now
                </Button>
              </Link>
              <a
                href={`tel:${program.contact?.phone || '8001110000'}`}
                className="sm:flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-xl border border-gray-200 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-[12px] sm:text-sm">Get Free Counselling</span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </ProgramSectionBlock>
  );
}
