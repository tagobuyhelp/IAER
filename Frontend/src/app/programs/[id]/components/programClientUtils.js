const VISUAL_FALLBACKS = [
  '/images/programs/iaer-industry-integrated-curriculum.webp',
  '/images/programs/iaer-global-alumni-network.webp',
  '/images/campus/iaer-campus.png'
];

export function getProgramVisuals(program) {
  const fromProgram = program?.visuals;
  if (Array.isArray(fromProgram) && fromProgram.length) return fromProgram;
  const img = program?.image ? [program.image, ...VISUAL_FALLBACKS] : VISUAL_FALLBACKS;
  return img.slice(0, 3);
}

export function getSectionImage(program, section) {
  const keyMap = {
    overview: 'overviewImage',
    curriculum: 'curriculumImage',
    careers: 'careersImage'
  };
  const explicitKey = keyMap[section];
  const explicitSrc = explicitKey ? program?.[explicitKey] : undefined;
  if (explicitSrc) return explicitSrc;

  const visuals = getProgramVisuals(program);
  const map = { overview: 0, curriculum: 1, careers: 2 };
  const idx = map[section] ?? 0;
  return visuals[idx] || visuals[0] || '/images/campus/iaer-campus.png';
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function getCurriculumItems(program) {
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

export function splitLearningItems(items) {
  const safe = Array.isArray(items) ? items.filter(Boolean).map(String) : [];
  const idx = safe.findIndex((v) => /data cleaning|predictive|dashboards|industry data/i.test(v));
  if (idx > 0) return { core: safe.slice(0, idx), projects: safe.slice(idx) };
  const cut = Math.min(6, safe.length);
  return { core: safe.slice(0, cut), projects: safe.slice(cut) };
}

