const fs = require('fs');
const path = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove TOP RECRUITERS MARQUEE SECTION
const topRecruitersStart = content.indexOf('{/* --- TOP RECRUITERS MARQUEE SECTION --- */}');
const specializationsStart = content.indexOf('{/* --- SPECIALIZATIONS --- */}');

if (topRecruitersStart > -1 && specializationsStart > -1) {
    content = content.substring(0, topRecruitersStart) + content.substring(specializationsStart);
}

// 2. Replace PLACEMENTS SECTION
const placementsStart = content.indexOf('{/* --- PLACEMENTS --- */}');
const testimonialsStart = content.indexOf('{/* --- TESTIMONIALS --- */}');

const newPlacementsSection = `      {/* --- PLACEMENTS & TOP RECRUITERS --- */}
      <section id="placements" className="relative border-b border-slate-200 bg-white overflow-hidden py-12 sm:py-20">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div data-animate-on-scroll className="relative z-10 mx-auto max-w-[1550px] px-4 flex flex-col items-center">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary mb-2 block">Future Pathways</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#143674] tracking-tight">
              Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Highlights</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-4 max-w-2xl mx-auto">
              750+ placements in the last year alone. Start Your Career with One of the Best BBA Colleges in Kolkata.
            </p>
            <div className="mt-5 mx-auto h-1.5 w-24 rounded-full bg-accent shadow-sm" />
          </div>

          <div className="grid gap-6 lg:grid-cols-12 w-full mb-12 sm:mb-16">
            {/* Left side: Stats */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#143674] via-[#0b1c3a] to-[#143674] p-8 sm:p-10 text-white shadow-2xl overflow-hidden group min-h-[200px] flex items-center">
                <div className="absolute inset-0 bg-[url('/images/about/building-image-about-hero.webp')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                <CircleDollarSign className="absolute -right-4 -bottom-4 w-48 h-48 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col justify-center w-full">
                  <div className="text-sm font-medium text-blue-200 mb-2 uppercase tracking-wider">Highest Package</div>
                  <div className="text-6xl sm:text-7xl font-extrabold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">₹15.20<span className="text-3xl sm:text-4xl text-white/80">LPA</span></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 flex-grow">
                <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-slate-200 shadow-lg flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#143674] mb-2">₹4.50+</div>
                  <div className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">LPA Average</div>
                </div>
                <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-slate-200 shadow-lg flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#143674] mb-2">350+</div>
                  <div className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Placement Offers</div>
                </div>
              </div>
            </div>

            {/* Right side: Careers & Industry */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
              <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-slate-200 shadow-lg flex-grow flex flex-col gap-6 sm:gap-8 hover:-translate-y-1 transition-all duration-300">
                
                {/* Career Opportunities */}
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#143674] mb-4 uppercase tracking-wider flex items-center gap-2"><Target className="w-5 h-5 text-primary" /> Career Opportunities</h4>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {['Business Executive', 'Marketing Manager', 'Analyst (Business / Data)', 'HR Executive', 'Event Manager', 'Operations Manager', 'Entrepreneur'].map((role) => (
                      <span key={role} className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 rounded-full px-4 py-2 text-xs sm:text-sm font-bold border border-slate-200 hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm">
                        <CheckCircle className="w-4 h-4 text-accent" /> {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-slate-100" />

                {/* Industry Collaborations */}
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#143674] mb-4 uppercase tracking-wider flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" /> Industry Collaborations</h4>
                  <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-4 justify-start items-center">
                    {[
                      { src: "/images/affiliations/confederation.png", alt: "CII" },
                      { src: "/images/affiliations/MSME.png", alt: "MSME" },
                      { src: "/images/affiliations/NHRD.png", alt: "NHRD" },
                      { src: "/images/affiliations/ERSC.jpeg", alt: "ERSC" },
                      { src: "/images/affiliations/NSDC.png", alt: "NSDC" }
                    ].map((collab, idx) => (
                      <div key={idx} className="bg-slate-50 p-2 sm:p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center h-16 sm:h-20 w-full sm:w-32 transition-all hover:scale-105 hover:bg-white hover:border-primary/30">
                        <img
                          src={collab.src}
                          alt={collab.alt}
                          className="max-h-full max-w-full object-contain mix-blend-multiply"
                          onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee Section Integrated */}
          <div className="w-full flex flex-col items-center mt-6 sm:mt-10 pt-10 border-t border-slate-200">
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#143674] mb-8 text-center">Our Students Are Now Working at These Companies</h3>
            <div className="relative flex overflow-hidden w-full mask-image-linear-gradient">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-r from-white to-transparent"></div>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-l from-white to-transparent"></div>
              
              <div className="flex flex-col gap-4 w-full">
                {/* Row 1 */}
                <div className="flex w-max animate-hero-marquee space-x-4 items-center">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={\`row1-\${i}\`}>
                      {[
                        'Infosys_logo.png', 'deloitte.svg', 'Capgemini.png', 'Accenture.png', 'Cognizant_logo.png', 'Tata_Consultancy_Services_old_logo.svg.png'
                      ].map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center bg-white rounded-xl border border-slate-200 shadow-sm w-[140px] h-[60px] sm:w-[180px] sm:h-[80px] hover:shadow-md hover:border-primary/30 transition-all">
                          <img src={\`/images/company_logos/\${logo}\`} alt="Recruiter Logo" className="max-w-[100px] max-h-[30px] sm:max-w-[120px] sm:max-h-[40px] object-contain transition-all duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* Row 2 (reverse) */}
                <div className="flex w-max animate-hero-marquee space-x-4 items-center" style={{ animationDirection: 'reverse' }}>
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={\`row2-\${i}\`}>
                      {[
                        'Tech_Mahindra.png', 'HCL_Technologies.svg', 'Amazon_logo.svg.png', 'Capgemini.png', 'deloitte.svg', 'Hindustan_Unilever_Logo.svg'
                      ].map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center bg-white rounded-xl border border-slate-200 shadow-sm w-[140px] h-[60px] sm:w-[180px] sm:h-[80px] hover:shadow-md hover:border-primary/30 transition-all">
                          <img src={\`/images/company_logos/\${logo}\`} alt="Recruiter Logo" className="max-w-[100px] max-h-[30px] sm:max-w-[120px] sm:max-h-[40px] object-contain transition-all duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => { document.getElementById('enquiry-form-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-12 sm:mt-16 bg-[#0056D2] hover:bg-[#0043a8] text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
              <span className="text-sm sm:text-base">See Where Your Future Can Take You</span> <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
`;

if (placementsStart > -1 && testimonialsStart > -1) {
    content = content.substring(0, placementsStart) + newPlacementsSection + '\n' + content.substring(testimonialsStart);
}

fs.writeFileSync(path, content);
console.log('Merged successfully.');
