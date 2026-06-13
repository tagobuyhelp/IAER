const fs = require('fs');
const path = 'g:/Development/IAER/Frontend/src/app/best-bca-college-in-kolkata/page.jsx';
const bbaPath = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';

let bca = fs.readFileSync(path, 'utf8');
const bba = fs.readFileSync(bbaPath, 'utf8');

// 1. Extract BBA Success Stories Marquee
const bbaLines = bba.split('\n');
let marqueeStart = bbaLines.findIndex(l => l.includes('{/* Success Stories Marquee */}'));
let marqueeEnd = bbaLines.findIndex((l, i) => i > marqueeStart && l.includes('</div> {/* End of Enquiry section */}'));
if (marqueeEnd === -1) {
    // try to find the end of the marquee div
    for(let i = marqueeStart + 1; i < bbaLines.length; i++) {
        if (bbaLines[i].includes('</div>') && bbaLines[i+1].includes('</div>') && bbaLines[i+2].includes('</div>')) {
            marqueeEnd = i + 1; // approximation
            break;
        }
    }
}
// Actually it's easier to just copy the string since it's known:
const marqueeHtml = `              {/* Success Stories Marquee */}
              <div className="w-full mt-2 lg:-ml-4">
                <p className="text-[10px] font-bold text-blue-200/80 uppercase tracking-widest text-center md:text-left mb-3">
                  Latest Success Stories of IAER
                </p>
                <div className="relative flex overflow-hidden w-full group mask-image-linear-gradient">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#143674] to-transparent"></div>
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#143674] to-transparent"></div>
                  
                  <div className="flex w-max animate-hero-marquee space-x-3 px-1 items-center hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={i}>
                        {[
                          { name: 'Arjun M.', company: 'amazon_logo_dark.webp', pic: 'arjun.jpg' },
                          { name: 'Riya S.', company: 'Infosys_logo.png', pic: 'riya.avif' },
                          { name: 'Rohan D.', company: 'Tata_Consultancy_Services_old_logo.svg.png', pic: 'rohan.jpg' },
                        ].map((student, idx) => (
                          <div key={\`\${i}-\${idx}\`} className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-xl p-2 pr-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-white/40 min-w-max transition-transform hover:-translate-y-0.5">
                            <img src={\`/images/students/\${student.pic}\`} alt={student.name} className="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-100" onError={(e) => { e.currentTarget.src = '/images/logos/IAER_ICON.jpg'; }} />
                            <div className="flex flex-col justify-center">
                              <span className="text-xs font-bold text-slate-800 leading-none mb-1">{student.name}</span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[9px] font-medium text-slate-500 uppercase">Placed at</span>
                                <img src={\`/images/company_logos/\${student.company}\`} alt="Company" className="h-3.5 object-contain" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>`;

// 2. Replace BCA Marquee
const bcaLines = bca.split('\n');
let bcaMarqStart = bcaLines.findIndex(l => l.includes('{/* Marquee */}'));
let bcaMarqEnd = bcaLines.findIndex((l, i) => i > bcaMarqStart && l.includes('</div>') && bcaLines[i+1].includes('</div>') && bcaLines[i+2].includes('</div>'));

if (bcaMarqStart > -1 && bcaMarqEnd > -1) {
    const part1 = bcaLines.slice(0, bcaMarqStart).join('\n');
    const part2 = bcaLines.slice(bcaMarqEnd, bcaLines.length).join('\n');
    
    bca = part1 + '\n' + marqueeHtml + '\n' + part2;
}

// 3. Add mask-image CSS
if (!bca.includes('mask-image-linear-gradient')) {
    bca = bca.replace('</style>', `
        .mask-image-linear-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      </style>`);
}

fs.writeFileSync(path, bca, 'utf8');
console.log('Successfully replaced Hero Marquee!');
