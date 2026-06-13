const fs = require('fs');
const path = 'g:/Development/IAER/Frontend/src/app/best-bca-college-in-kolkata/page.jsx';

let bca = fs.readFileSync(path, 'utf8');

// 1. Add state and imports
if (!bca.includes('ChevronDown')) {
    bca = bca.replace("Search\n} from 'lucide-react';", "Search, ChevronDown, ChevronUp\n} from 'lucide-react';");
}
if (!bca.includes('const [openFaq, setOpenFaq] = useState(0);')) {
    bca = bca.replace("const [mobileMenuOpen, setMobileMenuOpen] = useState(false);", "const [mobileMenuOpen, setMobileMenuOpen] = useState(false);\n  const [openFaq, setOpenFaq] = useState(0);");
}

// 2. Replace FAQ section
const bcaLines = bca.split('\n');
const getSectionRange = (startStr) => {
    const start = bcaLines.findIndex(l => l.includes(startStr));
    if (start === -1) return null;
    let end = start;
    let depth = 0;
    let foundTag = false;
    for (let i = start; i < bcaLines.length; i++) {
        if (bcaLines[i].includes('<section')) { depth++; foundTag = true; }
        if (bcaLines[i].includes('</section>')) depth--;
        if (foundTag && depth === 0) {
            end = i;
            break;
        }
    }
    return { start, end };
};

const faqRange = getSectionRange('{/* --- FAQ --- */}');
console.log('FAQ:', faqRange);

const faqContent = `      {/* --- FAQ --- */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="mx-auto max-w-[800px] px-4">
          <div className="text-center mb-6 sm:mb-8">
             <h2 className="text-2xl sm:text-3xl font-bold text-[#143674] mb-2">Frequently Asked Questions</h2>
             <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: 'Which is the best BCA college in Kolkata?', a: 'IAER is among the top BCA colleges offering AI, ML, Cyber Security & Data Science.' },
              { q: 'What is the scope of BCA AI ML course in Kolkata?', a: 'High demand in AI, automation, and data science industries.' },
              { q: 'Is cyber security a good career after 12th?', a: 'Yes, it is one of the fastest-growing global careers.' },
              { q: 'Which BCA specialization has the highest career scope?', a: 'AI & ML and Cyber Security & Data Science offer the highest growth and salary potential.' },
              { q: 'Does IAER provide placement support?', a: 'Yes, IAER provides structured internship support and access to a wide recruiter network.' },
              { q: 'What is the average salary after BCA in Kolkata?', a: '₹4.30 LPA average, with higher potential in specialized fields.' },
              { q: 'Are certifications included in BCA programs?', a: 'Yes, industry-relevant certifications are included.' },
              { q: 'Does IAER provide international exposure?', a: 'Yes, international immersion programs are available.' },
              { q: 'Are scholarships available for BCA students?', a: 'Yes, multiple scholarship options are available.' },
              { q: 'Does IAER help with education loans?', a: 'Yes, IAER assists with documentation and loan processing.' },
              { q: 'Can I get direct admission in BCA in Kolkata?', a: 'Yes, students can apply directly through IAER.' },
              { q: 'Which is better: BCA or B.Tech for IT careers?', a: 'BCA with AI/ML or Cyber Security specialization offers faster, skill-focused career entry.' }
            ].map((faq, i) => (
              <div 
                key={i} 
                className={\`group bg-white border \${openFaq === i ? 'border-primary shadow-md' : 'border-slate-200 hover:border-primary/30 hover:shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer\`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <h4 className={\`text-sm sm:text-base font-bold \${openFaq === i ? 'text-primary' : 'text-[#143674]'} flex items-start gap-3 transition-colors\`}>
                    <span className={\`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full \${openFaq === i ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} font-black text-xs transition-colors\`}>
                      Q
                    </span> 
                    <span className="mt-0.5 leading-snug">{faq.q}</span>
                  </h4>
                  <div className={\`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 \${openFaq === i ? 'bg-primary/10 text-primary rotate-180' : 'text-slate-400 group-hover:text-primary'}\`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div 
                  className={\`overflow-hidden transition-all duration-300 ease-in-out \${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}\`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 px-4 sm:px-5 pb-4 sm:pb-5 pl-[3.25rem] leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>`;

const part1 = bcaLines.slice(0, faqRange.start).join('\n');
const part2 = bcaLines.slice(faqRange.end + 1).join('\n');

const newContent = [part1, faqContent, part2].join('\n');

fs.writeFileSync(path, newContent, 'utf8');
console.log('Successfully replaced FAQs!');
