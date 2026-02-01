import { notFound } from 'next/navigation';
import { programs } from '@/lib/programs';
import ProgramClient from './ProgramClient';

export function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }));
}

export default async function ProgramDetails({ params }) {
  const { id } = await params;
  const program = programs.find((p) => p.id === id);

  if (!program) {
    notFound();
  }

  return <ProgramClient program={program} />;
}
