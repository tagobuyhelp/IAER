import { ShieldCheck, ClipboardCheck, GraduationCap, BookOpen } from "lucide-react";

export const metadata = {
  title: "Admission Criteria (Eligibility) | IAER",
  description: "Eligibility guidelines for undergraduate and postgraduate diploma programs at IAER.",
};

export default function EligibilityPage() {
  const sections = [
    {
      title: "Undergraduate Programs",
      icon: GraduationCap,
      points: [
        "10+2 or equivalent from a recognized board",
        "Stream preference varies by program (Science/Commerce/Arts as applicable)",
        "Merit-based selection with consideration for Early Bird Scholarships",
      ],
    },
    {
      title: "Postgraduate Diploma Programs",
      icon: BookOpen,
      points: [
        "Bachelor’s degree from a recognized university",
        "Preference for relevant background as per specialization",
        "Work experience considered for Working Executives (PGDMEX)",
      ],
    },
    {
      title: "General Requirements",
      icon: ClipboardCheck,
      points: [
        "Valid identity and address proof",
        "Academic transcripts and certificates",
        "Passport-size photograph and other documents as specified",
      ],
    },
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
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Admission Criteria (Eligibility)</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Check eligibility guidelines for your chosen program and prepare your documents accordingly.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-accent">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#100902]">{s.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-xl max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-5 h-5 text-[#100902]" />
              <h4 className="text-lg font-bold text-[#100902]">Note</h4>
            </div>
            <p className="text-sm text-gray-700">
              Program-specific eligibility may vary. Refer to individual program pages for detailed criteria and latest updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

