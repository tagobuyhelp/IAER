import { Trophy, Award, Star, Medal, Crown } from "lucide-react";

export const metadata = {
  title: "Awards & Rankings | IAER",
  description: "Celebrating IAER's excellence, innovation, and impact in education.",
};

export default function AwardsPage() {
  const awards = [
    {
      year: "2023",
      title: "Finest Hotel Management Institute in India",
      organization: "Knowledge Review",
      description: "Recognized for excellence in hospitality education and training standards.",
      icon: Crown,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      year: "2023",
      title: "India’s Best Aviation Institute in Eastern India",
      organization: "Knowledge Review",
      description: "Acknowledged for superior aviation training infrastructure and placement records.",
      icon: Medal,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      year: "2023",
      title: "India’s Finest College for Data Science",
      organization: "Dataworld Best Institute",
      description: "Honored for cutting-edge data science curriculum and industry relevance.",
      icon: Star,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      year: "2021",
      title: "Best Startup Education College in Eastern India",
      organization: "Startup & VC Award for Excellence",
      description: "This recognition underscores IAER’s strong focus on entrepreneurship education, incubation support, and startup readiness.",
      icon: Trophy,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      year: "2020",
      title: "Best Emerging e-Business School of the Year",
      organization: "Virtual Education & Technology Awards",
      description: "IAER was acknowledged for its adaptive academic model and effective integration of technology in management education.",
      icon: Award,
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      year: "2019",
      title: "Best Innovative IT College in Eastern India",
      organization: "IT Startup Excellence Awards",
      description: "This award recognizes IAER’s early leadership in delivering forward-looking IT and technology programs.",
      icon: Star,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a0601] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Achievements
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Awards & Rankings
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating Excellence, Innovation & Impact
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Over the years, the Institute of Advance Education & Research (IAER) has earned recognition for its commitment to innovation-driven education, industry relevance, and skill-focused academic delivery. These accolades reflect IAER’s continuous efforts to align learning with emerging industry needs and entrepreneurial growth.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Timeline/Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#100902] mb-12 text-center">Awards Earned by IAER</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 ${award.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <award.icon className={`w-7 h-7 ${award.color}`} />
                    </div>
                    <span className="bg-[#100902] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {award.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#100902] mb-2 min-h-[56px]">
                    {award.title}
                  </h3>
                  
                  <div className="text-accent text-sm font-semibold mb-4 uppercase tracking-wider">
                    {award.organization}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#100902] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Trophy className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Striving for Excellence</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            These recognitions fuel our passion to continue setting benchmarks in higher education and student success.
          </p>
        </div>
      </section>
    </div>
  );
}
