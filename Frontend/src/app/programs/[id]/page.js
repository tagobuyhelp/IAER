import { notFound } from 'next/navigation';
import { programs } from '@/lib/programs';
import ProgramClient from './ProgramClient';

export function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  const title = program?.seo?.title || `${program.title} | IAER`;
  const description =
    program?.seo?.description ||
    program.subtitle ||
    `Enroll in ${program.title} at IAER. ${program.overview?.duration} course with ${program.overview?.mode} mode.`;

  return {
    title,
    description,
    alternates: program?.seo?.url ? { canonical: program.seo.url } : undefined,
    openGraph: {
      title,
      description,
      images: program.image ? [{ url: program.image }] : [],
    },
  };
}

export default async function ProgramDetails({ params }) {
  const { id } = await params;
  const program = programs.find((p) => p.id === id);

  if (!program) {
    notFound();
  }

  return <ProgramClient program={program} />;
}
