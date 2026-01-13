"use client";

const companies = [
  "TCS", "Wipro", "Amazon", "Fortis", "Apollo Hospitals", "Marriott Hotels", 
  "Accenture", "Infosys", "Cognizant", "HCL", "Capgemini", "Deloitte", "EY", 
  "Medica", "Narayana Health", "Hyatt", "Tech Mahindra", "Radison Hotels", 
  "Indigo", "Spicejet", "GMR", "Adani Group", "Accord Hotels"
];

export default function PlacementPartners() {
  return (
    <section className="py-16 bg-white border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
          Our Students are Working With
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-12 whitespace-nowrap py-4">
          {companies.map((company, index) => (
            <span 
              key={`c1-${index}`} 
              className="text-xl lg:text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((company, index) => (
            <span 
              key={`c2-${index}`} 
              className="text-xl lg:text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 flex gap-12 whitespace-nowrap py-4 ml-12">
           {/* Second marquee layer if needed for perfect sync, but usually one container with 2x items works if animation handles it. 
               Let's simplify: Tailwind 'animate-marquee' needs to be defined in config. 
               If not defined, I will add inline styles.
           */}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
