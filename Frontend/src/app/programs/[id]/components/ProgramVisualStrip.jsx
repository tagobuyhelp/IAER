import Image from 'next/image';

export default function ProgramVisualStrip({ programTitle, images }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="grid grid-cols-3 gap-[1px] bg-gray-200">
        {images.map((src, idx) => (
          <div key={`${src}-${idx}`} className="relative aspect-[4/3] bg-gray-50">
            <Image
              src={src}
              alt={`${programTitle} visual ${idx + 1}`}
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

