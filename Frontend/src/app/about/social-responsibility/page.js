import { HeartHandshake, Users, BookOpen, Globe, Monitor, MessageSquare, Briefcase, Heart, Coins, ShieldCheck, GraduationCap, Sparkles, Leaf, Recycle, Sun, Droplets, Trash2, PenTool, Lightbulb, UserPlus, Target } from "lucide-react";

export const metadata = {
  title: "Institutional Social Responsibility | IAER",
  description: "IAER's commitment to social upliftment, community empowerment, and environmental sustainability.",
};

export default function SocialResponsibilityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a0601] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Beyond Academics
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Institutional Social Responsibility
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Committed to human development, social upliftment, and community empowerment.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#100902] mb-6">A Core Pillar of IAER</h2>
            <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
              Institutional Social Responsibility (ISR) is a core pillar of the IAER. As an institution committed to human development, IAER believes its responsibility extends beyond classrooms and degrees. Along with imparting academic and professional knowledge, IAER actively contributes to social upliftment, environmental sustainability, and community empowerment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through structured initiatives and community-driven programs, IAER works as a catalyst for positive social change. This aligns education with employability, awareness, and inclusive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility Section */}
      <section className="py-16 lg:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                  <Leaf className="w-4 h-4" />
                  Sustainability
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">Environmental Responsibility</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  IAER is committed to environmental protection and sustainable practices. The institute promotes eco-conscious behavior through awareness drives and campus initiatives that encourage responsible resource usage.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Leaf, title: "Tree Plantation", desc: "Drives within and around campus." },
                { icon: Trash2, title: "Waste Management", desc: "Awareness on cleanliness and disposal." },
                { icon: Recycle, title: "Eco-Friendly Practices", desc: "Promoting sustainability among students." },
                { icon: Sun, title: "Energy Conservation", desc: "Reduced plastic and energy usage." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#100902] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cleanliness & Civic Responsibility Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                  <Sparkles className="w-4 h-4" />
                  Civic Duty
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">Cleanliness & Civic Responsibility Drives</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Aligned with national cleanliness missions, IAER regularly conducts cleanliness and sanitation drives in nearby localities and campus areas. Students and faculty actively participate to promote hygiene, public health, and civic discipline.
                </p>
                <ul className="space-y-3">
                  {[
                    "Clean campus and neighborhood initiatives",
                    "Public awareness on sanitation and hygiene",
                    "Encouraging community participation in cleanliness efforts"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 bg-blue-50 rounded-3xl min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.05]"></div>
                <Sparkles className="w-32 h-32 text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Outreach Section */}
      <section className="py-16 lg:py-24 bg-[#100902] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-accent/20">
                <BookOpen className="w-4 h-4" />
                Educational Support
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Educational Outreach & Support</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Believing that education is a powerful tool for social transformation, IAER undertakes educational support initiatives for underprivileged students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: PenTool, title: "Material Distribution", desc: "Stationery and learning materials for students." },
                { icon: Lightbulb, title: "Career Awareness", desc: "Guidance sessions for school students." },
                { icon: Heart, title: "Motivational Talks", desc: "Inspiring guidance programs." },
                { icon: GraduationCap, title: "Higher Ed Exposure", desc: "Pathways to skill-based learning." }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-center group">
                  <div className="w-14 h-14 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Youth & Student Development Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <UserPlus className="w-4 h-4" />
              Student Leadership
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">Youth & Student Development Programs</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              IAER encourages students to actively participate in ISR initiatives as part of their holistic development. Through volunteering, leadership roles, and community interaction, students develop empathy, teamwork, and real-world problem-solving skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Socially Responsible Professionals",
                "Inclusive Growth",
                "Nation Building",
                "Empathetic Leaders"
              ].map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium border border-gray-200">
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                  <Briefcase className="w-4 h-4" />
                  Skill Development
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">Skill Development & Employability Initiatives</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  IAER regularly undertakes skill-oriented training programs aimed at enhancing employability among students and youth from surrounding communities. These initiatives focus on bridging skill gaps and preparing learners for industry, service sectors, and entrepreneurship.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Monitor, title: "Basic Computer Literacy", desc: "Digital skills for the modern world." },
                { icon: MessageSquare, title: "Business Communication", desc: "Effective professional interaction skills." },
                { icon: Globe, title: "Hospitality & Service Operations", desc: "Training for the service industry." },
                { icon: Heart, title: "Healthcare Support Skills", desc: "Basics of patient care and support." },
                { icon: Coins, title: "Financial & Digital Awareness", desc: "Understanding finance and digital transactions." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#100902] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-16 lg:py-24 bg-[#100902] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-accent/20">
                <Users className="w-4 h-4" />
                Community Outreach
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Community Engagement & Awareness Programs</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Strengthening the institute’s connection with society while instilling social responsibility among students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Coins,
                  title: "Financial Literacy & Digital Payments",
                  desc: "Educating communities on safe digital transactions and financial planning."
                },
                {
                  icon: ShieldCheck,
                  title: "Health, Hygiene & Preventive Care",
                  desc: "Promoting wellness and disease prevention through awareness camps."
                },
                {
                  icon: GraduationCap,
                  title: "Career Guidance",
                  desc: "Mentoring school and college students for better career choices."
                },
                {
                  icon: Sparkles,
                  title: "Women Empowerment",
                  desc: "Skill awareness sessions to foster independence and growth."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
