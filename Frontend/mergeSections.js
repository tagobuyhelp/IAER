const fs = require('fs');

const path = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';
let lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);

const startIdx = lines.findIndex(l => l.includes('{/* --- WHY IAER --- */}'));
const endIdx = lines.findIndex(l => l.includes('{/* --- VIDEO TESTIMONIALS --- */}'));

if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
  console.error("Could not find exact section bounds.", {startIdx, endIdx});
  process.exit(1);
}

const unifiedComponent = `
      {/* --- UNIFIED: WHY CHOOSE IAER --- */}
      <section id="why-iaer" className="relative border-b border-slate-200 bg-slate-50 py-10 sm:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 mx-auto max-w-[1550px] px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#143674] mb-2 block">Excellence in Education</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#143674] tracking-tight">
              Why Choose <span className="text-primary">IAER</span> for BBA?
            </h2>
            <div className="mt-4 mx-auto h-1.5 w-16 rounded-full bg-accent" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Column: About & Visuals (Spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200 group">
                <img src="/images/about/building-image-about-hero.webp" alt="IAER Overview" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143674]/90 via-[#143674]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2"><BookOpen className="w-6 h-6 text-accent" /> About BBA at IAER</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    We provide a perfect blend of theoretical knowledge and practical business learning, preparing students for real-world corporate challenges.
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Pillars</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Practical business learning' },
                    { label: 'Industry exposure' },
                    { label: 'Internship-driven curriculum' },
                    { label: 'Strong placement support' }
                  ].map((i) => (
                    <span key={i.label} className="inline-flex items-center bg-blue-50/50 border border-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold cursor-default hover:bg-blue-100 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-primary" /> {i.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Features (Spans 7 cols) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { icon: Briefcase, title: 'Internship-Driven', desc: 'Hands-on experience from early semesters with top corporate partners.' },
                { icon: Building2, title: 'Industry Integration', desc: 'Real-world business exposure, case studies, & corporate connections.' },
                { icon: Globe, title: 'Global Exposure', desc: 'International immersion programs in Thailand, Malaysia, Vietnam, & UAE.' },
                { icon: Award, title: 'Skill Development', desc: 'Focused training on leadership, communication, and problem-solving.' },
                { icon: Lightbulb, title: 'Startup Ecosystem', desc: 'Mentorship & incubation support for future business entrepreneurs.' },
              ].map((item, idx) => (
                <div key={item.title} className={\`bg-white border border-slate-200 p-5 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 group \${idx === 4 ? 'sm:col-span-2' : ''}\`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#143674] mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Banner: Recognized Excellence (Marquee) */}
          <div className="bg-[#143674] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <div className="flex-shrink-0 text-center sm:text-left sm:pr-6 sm:border-r sm:border-white/20">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2 mb-1"><Trophy className="w-5 h-5 text-accent" /> Awards &</h3>
                <p className="text-sm font-medium text-accent">Recognized Excellence</p>
              </div>
              
              <div className="flex-1 w-full overflow-hidden relative">
                {/* Fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#143674] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#143674] to-transparent z-10 pointer-events-none" />
                
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar">
                  {[
                    { title: 'Best Innovative IT College', source: 'Eastern India, 2019' },
                    { title: 'Best Emerging e-Business School', source: '2020' },
                    { title: 'Best Startup Education College', source: 'Eastern India, 2021' },
                    { title: 'Top 10 Best College for Data Science', source: 'India, 2024' },
                    { title: 'Best Emerging IT Award', source: '2024' },
                    { title: 'Excellence in IT Education', source: '2024' }
                  ].map((ach, i) => (
                    <div key={i} className="flex-shrink-0 snap-start bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 min-w-[200px] max-w-[220px]">
                      <h4 className="text-sm font-bold text-white mb-1 leading-snug line-clamp-2">{ach.title}</h4>
                      <p className="text-[10px] text-blue-200/70 font-medium uppercase">{ach.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

`;

// Splice the array to remove the old sections and insert the new unified component
lines.splice(startIdx, endIdx - startIdx, unifiedComponent);

// Write back to the file
fs.writeFileSync(path, lines.join('\\n'), 'utf8');

console.log("Successfully replaced the 3 sections with the Unified component.");
