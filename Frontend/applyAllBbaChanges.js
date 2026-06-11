const fs = require("fs");
const file = "g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx";
let content = fs.readFileSync(file, "utf8");

// 1. Remove NpfWidgetsInit Hook
const oldUseEffect = `  useEffect(() => {
    const btnId = 'c4af7a13a0ce4880aa5e45e7e28e4d7e';`;
const oldOnDownload = `  const onDownload = () => {
    console.log("[Meritto BBA] onDownload function invoked, redirecting to onApplyNow");
    onApplyNow();
  };`;

let hookStart = content.indexOf(oldUseEffect);
let hookEnd = content.indexOf(oldOnDownload);

if(hookStart > -1 && hookEnd > -1) {
  const newHook = `  useEffect(() => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }, []);\n\n  const onDownload = () => {
    onApplyNow();
  };\n`;
  content = content.substring(0, hookStart) + newHook + content.substring(hookEnd + oldOnDownload.length);
}

// 2. Update onApplyNow
const oldOnApply = `  const onApplyNow = () => {
    const btnId = 'c4af7a13a0ce4880aa5e45e7e28e4d7e';`;
const observerStartStr = `  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;`;

let applyStart = content.indexOf(oldOnApply);
let observerStart = content.indexOf(observerStartStr);

if(applyStart > -1 && observerStart > -1) {
  const newApply = `  const onApplyNow = () => {
    const formElement = document.getElementById("enquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };\n\n`;
  content = content.substring(0, applyStart) + newApply + content.substring(observerStart);
}

// 3. Add BottomNavBar Import
content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport BottomNavBar from './BottomNavBar';");

// 4. Replace Hero Slider with NPF Form
const heroColStartStr = `<div className="flex flex-col md:col-span-5 items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-0">`;
const heroMarqueeStr = `{/* Marquee */}`;

let colStart = content.indexOf(heroColStartStr);
let marqueeStart = content.indexOf(heroMarqueeStr);

if(colStart > -1 && marqueeStart > -1) {
  const newHeroCol = `<div id="enquiry-form-section" className="flex flex-col md:col-span-5 items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-0 w-full relative z-20">
              <div className="relative w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-2 sm:p-4 min-h-[400px] overflow-hidden">
                <div className="npf_wgts" data-height="400px" data-w="c4af7a13a0ce4880aa5e45e7e28e4d7e"></div>
              </div>\n\n              `;
  content = content.substring(0, colStart) + newHeroCol + content.substring(marqueeStart);
}

// 5. Replace Hero Marquee & Insert Top Recruiters
const heroMarqueeOldEnd = `                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

const aboutSectionStart = `      {/* --- ABOUT --- */}`;

let heroMarqueeEndIdx = content.indexOf(heroMarqueeOldEnd);
let aboutStartIdx = content.indexOf(aboutSectionStart);

if (heroMarqueeEndIdx > -1 && aboutStartIdx > -1) {
  // Replace the old marquee and everything until the end of section, then insert new stuff before About
  const replacementStr = `                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOP RECRUITERS & SUCCESS STORIES --- */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-200 overflow-hidden relative z-10">
        <div className="mx-auto max-w-[1550px] px-4">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
            
            {/* Recruiters Marquee */}
            <div className="flex-1 w-full overflow-hidden">
              <p className="text-center lg:text-left text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">Top Recruiters & Partners</p>
              <div className="relative flex overflow-hidden w-full group">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-20 bg-gradient-to-r from-white to-transparent"></div>
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-20 bg-gradient-to-l from-white to-transparent"></div>
                
                <div className="flex w-max animate-hero-marquee space-x-8 sm:space-x-12 items-center hover:[animation-play-state:paused]">
                  {[...Array(2)].map((_, idx) => (
                    <React.Fragment key={idx}>
                      {[
                        'amazon_logo_dark.webp', 
                        'Tata_Consultancy_Services_old_logo.svg.png', 
                        'Infosys_logo.png', 
                        'Capgemini.png', 
                        'Cognizant_logo.png', 
                        'Accenture.png', 
                        'Tech_Mahindra.png', 
                        'HCL_Technologies.svg',
                        'deloitte.svg',
                        'EY_logo.png'
                      ].map(logo => (
                        <img 
                          key={logo} 
                          src={\`/images/company_logos/\${logo}\`} 
                          alt="Recruiter Logo" 
                          className="h-6 sm:h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" 
                          onError={(e) => e.currentTarget.style.display='none'} 
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Success Stories Mini */}
            <div className="w-full lg:w-[350px] flex-shrink-0 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm relative group hover:shadow-md transition-all">
              <div className="absolute -top-3 -right-3">
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 group-hover:scale-110 transition-transform">
                  <Trophy className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-primary mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                <Quote className="h-3 w-3 text-accent fill-accent/20" /> Student Success
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <img src="/images/students/arjun.jpg" alt="Alumni" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-md object-cover" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                <div>
                  <p className="text-sm sm:text-base font-bold text-slate-800 leading-tight">Arjun M.</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Placed at <span className="font-semibold text-[#143674]">Amazon</span></p>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="inline-flex px-1.5 py-0.5 rounded text-[9px] font-bold bg-green-100 text-green-700">8.5 LPA</span>
                    <span className="text-[9px] text-slate-400 font-medium">Package</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

`;
  content = content.substring(0, heroMarqueeEndIdx) + replacementStr + content.substring(aboutStartIdx);
}

// 6. Replace old floating CTA with BottomNavBar
const footerStartStr = `{/* --- FLOATING BOTTOM CTA BAR --- */}`;
const footerEndStr = `        </div>
      </div>
    </div>
  );`;

let footStart = content.indexOf(footerStartStr);
let footEnd = content.indexOf(footerEndStr);

if (footStart > -1 && footEnd > -1) {
  content = content.substring(0, footStart) + `<BottomNavBar onApplyNow={onApplyNow} />\n    </div>\n  );\n`;
}

fs.writeFileSync(file, content);
console.log("All modifications applied successfully!");
