import { Brain, Users, Zap, Target, Globe, Monitor, BookOpen, PenTool, Rocket, Video, Briefcase, Network, Laptop, Book, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Teaching Practices | IAER",
  description: "Explore IAER's innovative teaching methodologies, experiential learning models, and technology-driven education.",
};

export default function TeachingPracticesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Methodology
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Optimal Knowledge Acquisition
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learning goes beyond memorisation. We help students observe, question, analyse, apply, and innovate through conceptual clarity and practical understanding.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#100902] mb-6">Education Aligned with the Real World</h2>
            <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
              Education at IAER focuses on conceptual clarity, practical understanding, ethical reasoning, skill acquisition, and professional behaviour aligned with real-world environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "Think Critically", "Interpret Data", "Evaluate Outcomes", "Collaborate", "Adapt to Industry"
              ].map((item, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium text-sm border border-gray-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Teaching Practices */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-accent font-semibold tracking-wide uppercase text-sm">Our Approach</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mt-2">Core Teaching Practices</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Active Learning", 
                subtitle: "Engage, Participate, Perform",
                desc: "Students actively participate through discussions, presentations, case analyses, and classroom problem-solving." 
              },
              { 
                icon: Rocket, 
                title: "Project-Based Learning", 
                subtitle: "Learn by Doing",
                desc: "Real-world projects and live assignments translate theory into action across management, technology, and healthcare." 
              },
              { 
                icon: Users, 
                title: "Collaborative Learning", 
                subtitle: "Learning Together",
                desc: "Teamwork, peer learning, and group research prepare students for professional environments demanding cooperation." 
              },
              { 
                icon: Monitor, 
                title: "Technology-Enabled", 
                subtitle: "Powered by Innovation",
                desc: "Digital tools, learning platforms, simulations, and smart classrooms enhance engagement and flexibility." 
              },
              { 
                icon: Target, 
                title: "Personalised Learning", 
                subtitle: "Your Goals, Your Pace",
                desc: "Mentoring and skill-focused pathways allow students to progress according to their interests and aspirations." 
              },
              { 
                icon: Globe, 
                title: "Cross-Cultural Sensitivity", 
                subtitle: "Diverse World",
                desc: "Engagement with peers from varied backgrounds encourages inclusivity and cultural intelligence." 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#100902]">{item.title}</h3>
                <span className="text-sm font-semibold text-accent mb-3 block">{item.subtitle}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiential Learning */}
      <section className="py-16 lg:py-24 bg-[#100902] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">Hands-On</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">Experiential Learning</h2>
              <p className="text-gray-400 text-lg mb-8">
                IAER strongly believes that experience is the best teacher. Our experiential learning model ensures students gain hands-on exposure alongside academic instruction.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-xl mb-2 text-white">Bridging Theory & Practice</h4>
                <p className="text-sm text-gray-400">
                  From simulations to live industry projects, we ensure every concept is reinforced with practical application.
                </p>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, title: "Theory-Based Learning", desc: "Case studies, group discussions, debates, role plays, and scenario analysis." },
                { icon: PenTool, title: "Laboratory & Practical", desc: "Simulations, reflective journals, problem-based exercises, and hands-on practice." },
                { icon: Briefcase, title: "Projects & Field Work", desc: "Live industry projects, field studies, research assignments, and applied problem solving." },
                { icon: Laptop, title: "MOOCs & Online Certifications", desc: "Integration of NPTEL, SWAYAM, Coursera, and LinkedIn Learning." },
                { icon: Network, title: "Internships & Exposure", desc: "Social internships, industrial training, and sector-specific internships." },
                { icon: Users, title: "Collaborative Exposure", desc: "Professional bodies, conferences, industry interactions, and workshops." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="shrink-0 mt-1">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology-Driven Learning */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Future Ready</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mt-2">Technology-Driven Learning</h2>
              <p className="text-gray-600 mt-4">
                IAER integrates Information and Communication Technology (ICT) to create a future-ready learning ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Blended Learning", desc: "Combining classroom instruction with digital resources." },
                { title: "Online Resources", desc: "Access to e-books, journals, and research databases." },
                { title: "Digital Platforms", desc: "Centralized systems for assignments and interaction." },
                { title: "E-Assessments", desc: "Enabling timely evaluation and instant feedback." },
                { title: "Virtual Labs", desc: "Industry-relevant simulations for applied learning." },
                { title: "Self-Paced Modules", desc: "E-learning to support continuous skill enhancement." }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Monitor className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#100902] text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
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