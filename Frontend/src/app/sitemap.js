import { programs } from '@/lib/programs';

export default function sitemap() {
  const baseUrl = 'https://iaer.in';

  // 1. Static Routes (Manually verified from file system)
  const staticRoutes = [
    '', // Home
    '/about',
    '/about/board-of-governors',
    '/about/statutory-committees',
    '/academics',
    '/admissions',
    '/campus-life',
    '/contact',
    '/mandatory-disclosure',
    '/placement', // Note: 'placements' folder exists but seems to be a duplicate/placeholder
    '/programs',
    '/research-and-innovation',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Program Routes
  const programEntries = programs.map((program) => ({
    url: `${baseUrl}/programs/${program.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // High priority for program pages
  }));

  return [...staticEntries, ...programEntries];
}
