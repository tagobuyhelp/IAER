const fs = require('fs');

const path = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Inject Accreditations right before {/* --- PLACEMENTS & TOP RECRUITERS --- */}
const accreditationsHTML = `
      {/* --- ACCREDITATIONS & APPROVALS BANNER --- */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 sm:py-8">
        <div className="mx-auto max-w-[1550px] px-4">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-widest">Recognized & Approved By</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <img src="/images/affiliations/MAKAUT.jpeg" alt="MAKAUT" className="h-10 sm:h-14 object-contain mix-blend-multiply" onError={(e) => e.currentTarget.style.display='none'} />
            <img src="/images/affiliations/AICTE.jpeg" alt="AICTE" className="h-10 sm:h-14 object-contain mix-blend-multiply" onError={(e) => e.currentTarget.style.display='none'} />
            <img src="/images/affiliations/NSDC.png" alt="NSDC" className="h-10 sm:h-14 object-contain mix-blend-multiply" onError={(e) => e.currentTarget.style.display='none'} />
            <img src="/images/affiliations/MSME.png" alt="MSME" className="h-10 sm:h-14 object-contain mix-blend-multiply" onError={(e) => e.currentTarget.style.display='none'} />
          </div>
        </div>
      </section>

`;

content = content.replace('{/* --- PLACEMENTS & TOP RECRUITERS --- */}', accreditationsHTML + '      {/* --- PLACEMENTS & TOP RECRUITERS --- */}');

// 2. Inject Admission Roadmap before {/* --- CAMPUS EXPERIENCE & FACILITIES --- */}
const roadmapHTML = `
      {/* --- ADMISSION ROADMAP --- */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary mb-2 block">Simple & Transparent</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#143674] tracking-tight">
              Your Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Roadmap</span>
            </h2>
            <div className="mt-4 mx-auto h-1.5 w-16 rounded-full bg-accent" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 border-t-2 border-dashed border-slate-300 z-0" />
            
            {[
              { step: '01', title: 'Submit Application', desc: 'Fill out the quick enquiry form to express your interest and share your basic details.', icon: ClipboardCheck },
              { step: '02', title: 'Free Counseling', desc: 'Our academic experts will call you to guide you through course details, eligibility, and fees.', icon: Phone },
              { step: '03', title: 'Secure Admission', desc: 'Complete the necessary documentation and secure your seat in the upcoming batch.', icon: GraduationCap }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 text-center shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-xl font-black text-primary shadow-sm border border-blue-100">
                  {item.step}
                </div>
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#143674] to-[#0b1c3a] rounded-full flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#143674] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button onClick={() => { document.getElementById('enquiry-form-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#0056D2] hover:bg-[#0043a8] text-white font-bold py-3.5 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

`;

content = content.replace('{/* --- CAMPUS EXPERIENCE & FACILITIES --- */}', roadmapHTML + '      {/* --- CAMPUS EXPERIENCE & FACILITIES --- */}');

// 3. We need to add state for FAQ: const [openFaq, setOpenFaq] = useState(0);
// Find the component declaration
const stateCode = \`
  const [openFaq, setOpenFaq] = useState(0);
\`;
if (!content.includes('const [openFaq, setOpenFaq] = useState(0);')) {
  content = content.replace(/(export default function BBALandingPage\(\) \{\s*)/, '$1' + stateCode);
}

// 4. Replace the existing FAQ section with a dynamic Accordion.
const oldFaqStart = content.indexOf('{/* --- FAQ --- */}');
const oldFaqEnd = content.indexOf('</section>', oldFaqStart) + 10;
if (oldFaqStart !== -1 && oldFaqEnd !== -1) {
  const newFaqHTML = `
      {/* --- FAQ --- */}
      <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[800px] px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#143674] mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm sm:text-base">Everything you need to know about the BBA program.</p>
            <div className="mt-4 h-1.5 w-16 bg-accent mx-auto rounded-full" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: 'Is this BBA degree approved and recognized?', a: 'Yes, IAER programs are affiliated with MAKAUT (Maulana Abul Kalam Azad University of Technology), making it a globally recognized degree.' },
              { q: 'Does IAER provide placement support?', a: 'Yes, IAER provides 100% placement assistance, including mock interviews, resume building, and connections with top recruiters like TCS, Amazon, and Infosys.' },
              { q: 'What is the eligibility criteria?', a: 'Students who have completed 10+2 from any recognized board are eligible to apply. Final year students can also apply.' },
              { q: 'Which BBA specialization has the best career scope?', a: 'Specializations like Business Analytics, Global Business, and Aviation & Hospitality Management currently offer the highest industry demand.' },
              { q: 'Are education loans and scholarships available?', a: 'Absolutely. We assist with Student Credit Cards and education loans. We also offer merit-based scholarships.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className={\`font-bold text-sm sm:text-base pr-4 \${openFaq === i ? 'text-primary' : 'text-[#143674]'}\`}>{faq.q}</span>
                  <div className={\`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 \${openFaq === i ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'}\`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div 
                  className={\`transition-all duration-500 ease-in-out overflow-hidden \${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}\`}
                >
                  <div className="p-5 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>`;

  content = content.substring(0, oldFaqStart) + newFaqHTML + content.substring(oldFaqEnd);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Injected Genuineness components successfully.');
