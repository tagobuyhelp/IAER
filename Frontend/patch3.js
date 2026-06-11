const fs = require('fs');
const file = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldMarqueeStart = `              {/* Marquee */}`;
const oldMarqueeEnd = `                    </React.Fragment>
                  ))}
                </div>
              </div>`;

let startIdx = content.indexOf(oldMarqueeStart);
let endIdx = content.indexOf(oldMarqueeEnd, startIdx);

if (startIdx > -1 && endIdx > -1) {
  const replacement = `              {/* Success Stories Marquee */}
              <div className="w-full mt-2">
                <p className="text-[10px] font-bold text-blue-200/80 uppercase tracking-widest text-center mb-3">
                  Latest Success Stories of IAER
                </p>
                <div className="relative flex overflow-hidden w-full group">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#143674] to-transparent"></div>
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#143674] to-transparent"></div>
                  
                  <div className="flex w-max animate-hero-marquee space-x-3 items-center hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={i}>
                        {[
                          { name: 'Arjun M.', company: 'amazon_logo_dark.webp', pic: 'arjun.jpg' },
                          { name: 'Riya S.', company: 'Infosys_logo.png', pic: 'riya.avif' },
                          { name: 'Rohan D.', company: 'Tata_Consultancy_Services_old_logo.svg.png', pic: 'rohan.jpg' },
                        ].map((student, idx) => (
                          <div key={\`\${i}-\${idx}\`} className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-xl p-2 pr-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-white/40 min-w-max transition-transform hover:-translate-y-0.5">
                            <img src={\`/images/students/\${student.pic}\`} alt={student.name} className="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-100" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                            <div className="flex flex-col">
                              <span className="text-[11px] font-extrabold text-[#143674] whitespace-nowrap">{student.name}</span>
                              <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-[9px] text-slate-500 font-medium">Placed at</span>
                                <img src={\`/images/company_logos/\${student.company}\`} alt="Company Logo" className="h-3.5 w-auto object-contain max-w-[50px] grayscale hover:grayscale-0 transition-all" onError={(e) => e.currentTarget.style.display='none'} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>`;
  
  content = content.substring(0, startIdx) + replacement + content.substring(endIdx + oldMarqueeEnd.length);
  fs.writeFileSync(file, content);
  console.log("Marquee replaced successfully.");
} else {
  console.log("Could not find old marquee target strings.");
}
