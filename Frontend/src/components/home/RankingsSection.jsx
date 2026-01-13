import { Award, CheckCircle2 } from "lucide-react";

export default function RankingsSection() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proudly Distinguished <span className="text-accent">by Our Prestigious</span> <br />
            Rankings and Accreditations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Awards List */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-primary w-6 h-6" />
                National & Industry Recognitions
              </h3>
              <ul className="space-y-4">
                {[
                  "IT Startup Excellence Award (2019)",
                  "Virtual Education & Technology Award (2020)",
                  "Startup & VC Award (2021)"
                ].map((award, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Affiliations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary text-secondary-foreground p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">MAKAUT</div>
              <p className="text-muted-foreground font-medium">Affiliation</p>
            </div>
            <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">AICTE</div>
              <p className="text-primary-foreground/80 font-medium">Approval</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
