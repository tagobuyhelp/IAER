import Image from 'next/image';

export default function ProgramSectionBlock({ id, title, subtitle, imageSrc, leftExtra, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="grid lg:grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="relative aspect-[4/3] bg-gray-50">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
            </div>
            <div className="p-3 sm:p-4 md:p-5">
              <div className="text-base sm:text-lg md:text-2xl font-black text-gray-900">{title}</div>
              <div className="mt-1 text-[11px] sm:text-sm text-gray-600">{subtitle}</div>
            </div>
          </div>
          {leftExtra ? <div className="mt-3 sm:mt-4">{leftExtra}</div> : null}
        </div>

        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  );
}
