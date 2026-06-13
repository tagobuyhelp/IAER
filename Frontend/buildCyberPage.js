const fs = require('fs');

const bbaPath = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';
const cyberPath = 'g:/Development/IAER/Frontend/src/app/best-cyber-security-college-in-kolkata/page.jsx';

let content = fs.readFileSync(bbaPath, 'utf8');

// 1. Component Name
content = content.replace(/BBALandingPage/g, 'CyberSecurityLandingPage');

// 2. Hero Text
content = content.replace(/Best BBA College in Kolkata with Placement/g, 'Best Cyber Security College in Kolkata with Placement');
content = content.replace(/Accelerate your career with a premium BBA degree/g, 'Protect the Digital World with a Career in Cyber Security at IAER Kolkata');
content = content.replace(/Looking for BBA admission in Kolkata\? Join IAER.*?strong placement support\./g, 
  'Looking for B.Sc. Cyber Security admission in Kolkata? Join IAER—one of the leading Cyber Security colleges in Kolkata offering industry-focused education in Ethical Hacking, Network Security, Digital Forensics, Cloud Security, and Cyber Defense with strong placement support.');

// 3. Hero Highlights
content = content.replace(/{ label: '6 High-Demand Specializations', icon: Layers }/g, "{ label: 'Ethical Hacking & Cyber Defense', icon: ShieldCheck }");
content = content.replace(/{ label: 'Internship from Year 1', icon: Briefcase }/g, "{ label: 'Internship from Year 1', icon: Briefcase }");
content = content.replace(/{ label: 'Industry-Aligned Curriculum', icon: BookOpen }/g, "{ label: 'Industry-Aligned Curriculum', icon: BookOpen }");
content = content.replace(/{ label: 'Global Exposure Programs', icon: Globe }/g, "{ label: 'Industry Certifications Included', icon: Award }");

// 4. Hero Stats
content = content.replace(/₹4.50\+ LPA Avg Package/g, '₹4.50+ LPA Avg Package');
content = content.replace(/350\+ Recruiters/g, '350+ Placement Offers');

// 5. Hero Images
content = content.replace(/bba_banner_1\.jpg/g, 'BCA_Banner.jpg'); // Just using BCA banner for now if we don't have a specific cyber banner
content = content.replace(/bba_banner_2\.jpg/g, 'iaer-college-in-kolkata.jpg');

// 6. Specializations (What You Will Learn)
const specStart = content.indexOf('{/* --- SPECIALIZATIONS --- */}');
const specEnd = content.indexOf('</section>', specStart);
if (specStart > -1 && specEnd > -1) {
    const cyberSpecs = `      {/* --- SPECIALIZATIONS --- */}
      <section id="specializations" className="relative border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1200px] px-4 py-6 sm:py-8">
          <div className="flex flex-col gap-1 mb-6 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary">WHAT YOU WILL LEARN</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#143674] tracking-tight">
              Cyber Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Curriculum</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Master the core pillars of digital defense and information security.</p>
            <div className="mx-auto sm:mx-0 mt-4 h-1.5 w-24 rounded-full bg-accent shadow-sm" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {[
              {
                id: '01',
                title: 'Cyber Security Fundamentals',
                desc: 'Information Security, Cyber Security Principles, Network Security, and Security Operations.',
                icon: ShieldCheck,
                color: 'from-blue-500 to-indigo-600',
                bgLight: 'bg-blue-50',
                textLight: 'text-blue-600',
              },
              {
                id: '02',
                title: 'Ethical Hacking & Penetration Testing',
                desc: 'Ethical Hacking Techniques, Vulnerability Assessment, Penetration Testing, and Security Auditing.',
                icon: Terminal,
                color: 'from-emerald-500 to-teal-600',
                bgLight: 'bg-emerald-50',
                textLight: 'text-emerald-600',
              },
              {
                id: '03',
                title: 'Digital Forensics & Incident Response',
                desc: 'Digital Forensics, Cyber Crime Investigation, Incident Management, and Threat Detection & Response.',
                icon: Search,
                color: 'from-amber-500 to-orange-600',
                bgLight: 'bg-amber-50',
                textLight: 'text-amber-600',
              },
              {
                id: '04',
                title: 'Cloud Security & Programming',
                desc: 'Cloud Security, Python Programming, Linux Administration, and Database Security.',
                icon: Cloud,
                color: 'from-purple-500 to-pink-600',
                bgLight: 'bg-purple-50',
                textLight: 'text-purple-600',
              }
            ].map((spec) => (
              <div key={spec.id} className="group relative bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                <div className={\`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br \${spec.color} shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300\`}>
                   <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#143674] mb-2 leading-tight">{spec.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{spec.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                   <span className={\`text-xs font-bold \${spec.textLight} uppercase tracking-wider\`}>Core Module</span>
                   <ArrowRight className={\`w-3.5 h-3.5 \${spec.textLight} group-hover:translate-x-1 transition-transform\`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>`;
    
    content = content.substring(0, specStart) + cyberSpecs + '\n' + content.substring(specEnd + 10);
}

// 7. Why IAER (Unified Section)
content = content.replace(/Why Choose IAER for BBA\?/g, 'Why Choose IAER for Cyber Security?');
content = content.replace(/About BBA at IAER/g, 'About B.Sc. Cyber Security at IAER');
content = content.replace(/The BBA program at IAER is designed to build future business leaders.*?It combines theoretical knowledge with practical case studies, internships, and global exposure\./g, 
    'The B.Sc. in Cyber Security at IAER prepares students with the technical knowledge and practical skills required to secure systems, protect digital assets, investigate cyber incidents, and defend organizations from cyber threats.');
// We can replace the points
content = content.replace(/Case Study Based Learning/g, 'Internship-Driven Curriculum');
content = content.replace(/Practical approach using real-world business scenarios\./g, 'Students gain practical exposure through internships, live projects, and cyber security workshops.');

content = content.replace(/100% Placement Assistance/g, 'Industry Integration');
content = content.replace(/Dedicated support for internships and final placements\./g, 'Curriculum designed in alignment with current cyber security industry requirements.');

content = content.replace(/Global Immersion Programs/g, 'Cyber Security Labs');
content = content.replace(/Opportunities for international study tours and projects\./g, 'Hands-on learning through simulations, security tools, and real-world case studies.');

content = content.replace(/Industry Expert Faculty/g, 'Skill-Based Training');
content = content.replace(/Learn directly from experienced corporate professionals\./g, 'Technical skills combined with communication, leadership, and problem-solving abilities.');

// 8. Awards section adjustments
// Just append the cyber security specific ones
content = content.replace(/Top 10 Best College for Data Science in India/g, 'Top 10 Best College for Cyber Security in India');

// 9. Placement Highlights
content = content.replace(/Secure Your Future with Top Business Roles/g, 'Launch Your Career with One of the Best Cyber Security Colleges in Kolkata');
content = content.replace(/600\+ Placement Offers/g, '350+ Placement Offers');

// 10. Student Testimonials
content = content.replace(/'BBA program gave me the business acumen.*?marketing strategies\.',\n\s*author: 'Ananya S\.',\n\s*role: 'Marketing Associate',\n\s*company: 'TCS'/g, 
  "'IAER\\'s Cyber Security program gave me hands-on exposure to ethical hacking tools and security testing.',\n                  author: 'Sayan Dutta',\n                  role: 'Cyber Security Analyst',\n                  company: 'Tech Mahindra'");

content = content.replace(/'The practical case studies and internship.*?valuable\.',\n\s*author: 'Rahul Verma',\n\s*role: 'Financial Analyst',\n\s*company: 'HDFC Bank'/g, 
  "'The practical labs and internship opportunities helped me understand real-world cyber security challenges.',\n                  author: 'Priyanka Sen',\n                  role: 'Information Security Analyst',\n                  company: 'Wipro'");

content = content.replace(/'Global exposure and industry expert faculty.*?stand out\.',\n\s*author: 'Sneha R\.',\n\s*role: 'HR Executive',\n\s*company: 'Infosys'/g, 
  "'The cyber security projects and industry sessions prepared me for a career in information security.',\n                  author: 'Arjun Roy',\n                  role: 'Security Consultant',\n                  company: 'TCS'");

// 11. Industry Testimonials
content = content.replace(/'IAER BBA graduates possess strong analytical.*?job-ready\.',\n\s*author: 'Priya Sharma',\n\s*role: 'HR Manager',\n\s*company: 'Amazon'/g, 
  "'IAER students demonstrate strong technical and analytical skills required in modern cyber security environments.',\n                  author: 'Akaash Goswami',\n                  role: 'Director',\n                  company: 'CybersTech Solutions'");

content = content.replace(/'Their students understand real-world business.*?effectively\.',\n\s*author: 'Vikram Singh',\n\s*role: 'Operations Head',\n\s*company: 'Reliance Retail'/g, 
  "'The curriculum covers practical cyber security concepts that align with current industry needs.',\n                  author: 'Tarun Sengupta',\n                  role: 'Senior Consultant',\n                  company: 'Wipro'");

// 12. Campus video
content = content.replace(/nH-sSyq_2OM/g, 'xXNkDR_XO6s');

// 13. FAQs
const faqStart = content.indexOf('{/* --- FAQ --- */}');
const faqEnd = content.indexOf('</section>', faqStart);
if (faqStart > -1 && faqEnd > -1) {
    const cyberFaqs = `      {/* --- FAQ --- */}
      <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[800px] px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#143674] mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm sm:text-base">Everything you need to know about the Cyber Security program.</p>
            <div className="mt-4 h-1.5 w-16 bg-accent mx-auto rounded-full" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: 'Which is the best Cyber Security college in Kolkata?', a: 'IAER is among the leading Cyber Security colleges offering Ethical Hacking, Digital Forensics, and Cyber Defense training.' },
              { q: 'Is Cyber Security a good career after 12th?', a: 'Yes, Cyber Security is one of the fastest-growing and highest-paying technology careers globally.' },
              { q: 'What skills will I learn in B.Sc. Cyber Security?', a: 'Students learn Ethical Hacking, Network Security, Digital Forensics, Python, Cloud Security, and Cyber Defense techniques.' },
              { q: 'Does IAER provide internship opportunities?', a: 'Yes, students receive internship opportunities from early semesters to gain practical industry experience.' },
              { q: 'What is the average salary after B.Sc. Cyber Security?', a: 'The average package is ₹4.50+ LPA, with higher opportunities based on skills and certifications.' },
              { q: 'What are the career opportunities after B.Sc. Cyber Security?', a: 'Students can pursue careers as Cyber Security Analysts, Ethical Hackers, SOC Analysts, Security Consultants, and Digital Forensics Specialists.' },
              { q: 'Does IAER provide placement support?', a: 'Yes, IAER provides structured placement assistance and access to leading recruiters.' },
              { q: 'Are scholarships available for Cyber Security students?', a: 'Yes, multiple scholarship opportunities are available based on eligibility.' },
              { q: 'Does IAER help with education loans?', a: 'Yes, IAER assists students with education loan documentation and processing.' }
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
    
    content = content.substring(0, faqStart) + cyberFaqs + '\n' + content.substring(faqEnd + 10);
}

// 14. Footer CTA
content = content.replace(/Secure Your Seat in One of the Best BBA Colleges in Kolkata/g, 'Secure Your Seat in One of the Best Cyber Security Colleges in Kolkata');

// 15. Imports Update
if (!content.includes('Terminal,')) {
    content = content.replace("Layers, Search\n}", "Layers, Search, Terminal, Cloud\n}");
}

// Finally, save
fs.writeFileSync(cyberPath, content, 'utf8');
console.log('Successfully created Cyber Security Landing Page!');
