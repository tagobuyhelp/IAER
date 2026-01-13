import { GraduationCap, Gift, Coins, Award } from "lucide-react";

export const metadata = {
  title: "IAER Scholarships | Admissions",
  description: "Scholarship options including Early Bird and merit-based support to make education accessible.",
};

export default function ScholarshipsPage() {
  const scholarships = [
    { icon: Gift, title: "Early Bird Scholarship", desc: "Limited-time scholarship applied to the program fee for early applicants." },
    { icon: Award, title: "Merit-Based Scholarship", desc: "Awarded based on academic performance and excellence." },
    { icon: Coins, title: "Need-Based Support", desc: "Financial assistance for eligible candidates to ensure access." },
    { icon: GraduationCap, title: "Program-Specific Aid", desc: "Scholarships tailored to selected programs and specializations." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Admissions
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">IAER Scholarships</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            IAER offers scholarships that recognize academic merit and support accessibility.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-accent mb-4">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#100902] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-xl max-w-5xl mx-auto text-sm text-gray-700">
            Scholarship availability and amounts are subject to institute policy and intake cycles. Refer to program pages for specifics.
          </div>
        </div>
      </section>
    </div>
  );
}

