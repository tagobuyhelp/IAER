import { Smile, Users, Library, Utensils, Bus, Trophy } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Campus Life | IAER Admissions",
  description: "Explore student life, clubs, facilities, and experiences that support growth and success.",
};

export default function CampusLifePage() {
  const features = [
    { icon: Users, title: "Student Clubs & Activities", desc: "Engage in interest-based clubs, events, and leadership opportunities." },
    { icon: Library, title: "Learning Resources", desc: "Access digital libraries, labs, and smart classrooms for hands-on learning." },
    { icon: Utensils, title: "Hostel & Dining", desc: "Comfortable hostel options and dining facilities for a balanced campus experience." },
    { icon: Bus, title: "Industry Visits", desc: "Regular industry interactions, seminars, and field trips to enhance exposure." },
    { icon: Trophy, title: "Sports & Culture", desc: "Participate in sports, cultural fests, and community engagement programs." },
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
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Campus Life</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An enriching environment that promotes collaboration, innovation, and holistic development.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-accent mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#100902] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/placements/highlights" className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              Explore Placements
            </Link>
            <Link href="/admissions/hostel-fee" className="inline-flex items-center px-6 py-3 bg-[#100902] text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Hostel Fee
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

