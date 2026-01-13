import { Target, Compass, Star, BookOpen, Lightbulb, Users, Handshake, Heart, Award, Shield } from "lucide-react";

export const metadata = {
  title: "Vision & Mission | IAER",
  description: "IAER's vision, mission, and commitment to academic excellence.",
};

export default function VisionMissionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a0601] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            About IAER
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Vision & Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence and societal progress
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#100902] mb-6">Our Vision</h2>
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    "To emerge as a nationally and globally respected institution of higher learning that fosters academic excellence, research-driven innovation, employability, and entrepreneurship, while developing responsible professionals committed to societal progress and sustainable development."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dedicated to nurturing intellectual growth and professional competence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Compass,
                  title: "Student-Centric Ecosystem",
                  desc: "Provide a learning environment supported by modern infrastructure and industry-experienced faculty."
                },
                {
                  icon: BookOpen,
                  title: "Industry-Aligned Programs",
                  desc: "Offer skill-based programs responding to evolving national priorities and workforce requirements."
                },
                {
                  icon: Lightbulb,
                  title: "Curriculum Innovation",
                  desc: "Continuously upgrade curricula integrating practical exposure, technology adoption, and ethical values."
                },
                {
                  icon: Users,
                  title: "Student Success",
                  desc: "Enhance success through mentorship, internships, and personality development initiatives."
                },
                {
                  icon: Shield,
                  title: "Fair Evaluation",
                  desc: "Implement a transparent, fair, and outcome-oriented evaluation system upholding academic integrity."
                },
                {
                  icon: Handshake,
                  title: "Global Collaborations",
                  desc: "Build strong collaborations with industries and global partners for academic enrichment."
                },
                {
                  icon: Heart,
                  title: "Social Responsibility",
                  desc: "Contribute to society through initiatives focused on education, healthcare, and sustainability."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="w-6 h-6 text-gray-600 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#100902] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-16 lg:py-24 bg-[#100902] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
               <div className="flex-1">
                   <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality Policy</h2>
                   <p className="text-gray-300 text-lg leading-relaxed">
                     IAER is committed to delivering consistent academic and administrative excellence through structured governance, ethical practices, and technology-enabled management systems.
                   </p>
               </div>
               <div className="shrink-0 p-6 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                  <Award className="w-16 h-16 text-accent" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 "Academic quality is ensured through regular curriculum review, faculty development, and experiential teaching-learning methodologies.",
                 "Emphasis on critical thinking, creativity, communication skills, and professional ethics.",
                 "Supports continuous growth of faculty and staff by promoting professional development and research engagement.",
                 "A culture of continuous improvement, accountability, and student satisfaction drives all institutional processes."
               ].map((text, idx) => (
                 <div key={idx} className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Star className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <p className="text-gray-300">{text}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
