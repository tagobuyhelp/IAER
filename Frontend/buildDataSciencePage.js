const fs = require('fs');

const cyberPath = 'g:/Development/IAER/Frontend/src/app/best-cyber-security-college-in-kolkata/page.jsx';
const dataPath = 'g:/Development/IAER/Frontend/src/app/best-data-science-college-in-kolkata/page.jsx';

let content = fs.readFileSync(cyberPath, 'utf8');

// 1. Component Name
content = content.replace(/CyberSecurityLandingPage/g, 'DataScienceLandingPage');

// 2. Hero Text
content = content.replace(/Best Cyber Security College in Kolkata with Placement/g, 'Best Data Science College in Kolkata with Placement');
content = content.replace(/Protect the Digital World with a Career in Cyber Security at IAER Kolkata/g, 'Build a Future-Proof Career in Data Science, AI & Analytics at IAER Kolkata');
content = content.replace(/Looking for B\.Sc\. Cyber Security admission in Kolkata\? Join IAER—one of the leading Cyber Security colleges in Kolkata offering industry-focused education in Ethical Hacking, Network Security, Digital Forensics, Cloud Security, and Cyber Defense with strong placement support\./g, 
  'Looking for B.Sc. Data Science admission in Kolkata? Join IAER—one of the top Data Science colleges in Kolkata offering industry-focused education in Data Science, Artificial Intelligence, Machine Learning, Business Analytics, and Big Data Technologies with strong placement support.');

// 3. Hero Highlights
content = content.replace(/Ethical Hacking & Cyber Defense/g, "AI, Machine Learning & Data Analytics");

// 4. Specializations (What You Will Learn)
const specStart = content.indexOf('{/* --- SPECIALIZATIONS --- */}');
const specEnd = content.indexOf('</section>', specStart);
if (specStart > -1 && specEnd > -1) {
    const dataSpecs = `      {/* --- SPECIALIZATIONS --- */}
      <section id="specializations" className="relative border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1200px] px-4 py-6 sm:py-8">
          <div className="flex flex-col gap-1 mb-6 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary">WHAT YOU WILL LEARN</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#143674] tracking-tight">
              Data Science <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Curriculum</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Master the core pillars of analytics, AI, and business intelligence.</p>
            <div className="mx-auto sm:mx-0 mt-4 h-1.5 w-24 rounded-full bg-accent shadow-sm" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {[
              {
                id: '01',
                title: 'Programming & Technology',
                desc: 'Python Programming, R Programming, SQL & Database Management, Data Structures, and Cloud Computing.',
                icon: Terminal,
                color: 'from-blue-500 to-indigo-600',
                bgLight: 'bg-blue-50',
                textLight: 'text-blue-600',
              },
              {
                id: '02',
                title: 'Data Science Core',
                desc: 'Machine Learning, Artificial Intelligence, Data Mining, Predictive Analytics, and Big Data Technologies.',
                icon: Database,
                color: 'from-emerald-500 to-teal-600',
                bgLight: 'bg-emerald-50',
                textLight: 'text-emerald-600',
              },
              {
                id: '03',
                title: 'Visualization & BI',
                desc: 'Power BI, Tableau, Dashboard Development, and Advanced Data Visualization techniques.',
                icon: PieChart,
                color: 'from-amber-500 to-orange-600',
                bgLight: 'bg-amber-50',
                textLight: 'text-amber-600',
              },
              {
                id: '04',
                title: 'Mathematics & Statistics',
                desc: 'Probability & Statistics, Statistical Modeling, Quantitative Techniques, and Data Interpretation.',
                icon: Calculator,
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
    
    content = content.substring(0, specStart) + dataSpecs + '\n' + content.substring(specEnd + 10);
}

// 5. Why IAER (Unified Section)
content = content.replace(/Why Choose IAER for Cyber Security\?/g, 'Why Choose IAER for Data Science?');
content = content.replace(/About B\.Sc\. Cyber Security at IAER/g, 'About B.Sc. Data Science at IAER');
content = content.replace(/We provide a perfect blend of theoretical knowledge and practical business learning, preparing students for real-world corporate challenges\./g, 
    'We provide a perfect blend of theoretical knowledge and practical analytics learning, preparing students for real-world data challenges.');
// We can replace the points
content = content.replace(/Top 10 Best College for Cyber Security in India/g, 'Top 10 Best College for Data Science in India');

// 6. Placement Highlights
content = content.replace(/Launch Your Career with One of the Best Cyber Security Colleges in Kolkata/g, 'Launch Your Career with One of the Best Data Science Colleges in Kolkata');

// 7. Student Testimonials
content = content.replace(/'IAER\\'s Cyber Security program gave me hands-on exposure to ethical hacking tools and security testing\.',\n\s*author: 'Sayan Dutta',\n\s*role: 'Cyber Security Analyst',\n\s*company: 'Tech Mahindra'/g, 
  "'IAER helped me gain practical experience through projects and internships, which helped me secure my first analytics role.',\n                  author: 'Sayan Chatterjee',\n                  role: 'Data Analyst',\n                  company: 'Tech Mahindra'");

content = content.replace(/'The practical labs and internship opportunities helped me understand real-world cyber security challenges\.',\n\s*author: 'Priyanka Sen',\n\s*role: 'Information Security Analyst',\n\s*company: 'Wipro'/g, 
  "'The Data Science curriculum is highly practical and industry-focused. The Power BI and Python training gave me a strong advantage.',\n                  author: 'Ananya Ghosh',\n                  role: 'Business Analyst',\n                  company: 'PwC'");

content = content.replace(/'The cyber security projects and industry sessions prepared me for a career in information security\.',\n\s*author: 'Arjun Roy',\n\s*role: 'Security Consultant',\n\s*company: 'TCS'/g, 
  "'The internship support and faculty mentorship helped me build confidence in analytics and machine learning.',\n                  author: 'Arindam Roy',\n                  role: 'Machine Learning Associate',\n                  company: 'Cognizant'");

// 8. Industry Testimonials
content = content.replace(/'IAER students demonstrate strong technical and analytical skills required in modern cyber security environments\.',\n\s*author: 'Akaash Goswami',\n\s*role: 'Director',\n\s*company: 'CybersTech Solutions'/g, 
  "'IAER students possess strong analytical and problem-solving skills that are highly relevant for today\\'s data-driven organizations.',\n                  author: 'Geeta Shenoy',\n                  role: 'Director of Analytics',\n                  company: 'Griffon Aeronautics'");

content = content.replace(/'The curriculum covers practical cyber security concepts that align with current industry needs\.',\n\s*author: 'Tarun Sengupta',\n\s*role: 'Senior Consultant',\n\s*company: 'Wipro'/g, 
  "'The curriculum reflects the latest trends in Data Science, Artificial Intelligence, and Business Analytics.',\n                  author: 'Sonia Guha',\n                  role: 'Senior Data Scientist',\n                  company: 'PWC'");

// 9. FAQs
const faqStart = content.indexOf('{/* --- FAQ --- */}');
const faqEnd = content.indexOf('</section>', faqStart);
if (faqStart > -1 && faqEnd > -1) {
    const dataFaqs = `      {/* --- FAQ --- */}
      <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[800px] px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#143674] mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm sm:text-base">Everything you need to know about the Data Science program.</p>
            <div className="mt-4 h-1.5 w-16 bg-accent mx-auto rounded-full" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: 'Which is the best Data Science college in Kolkata?', a: 'IAER is among the leading Data Science colleges offering AI, Machine Learning, Analytics, and Business Intelligence training.' },
              { q: 'Is Data Science a good career after 12th?', a: 'Yes, Data Science is one of the fastest-growing and highest-paying career domains globally.' },
              { q: 'What skills will I learn in B.Sc. Data Science?', a: 'Students learn Python, SQL, Power BI, Tableau, Machine Learning, AI, and Data Analytics.' },
              { q: 'Does IAER provide internship opportunities?', a: 'Yes, students receive internship opportunities from early semesters to gain practical industry experience.' },
              { q: 'What is the average salary after B.Sc. Data Science?', a: 'The average package is ₹4.50+ LPA, with higher opportunities based on specialization and skills.' },
              { q: 'What are the career opportunities after B.Sc. Data Science?', a: 'Students can pursue careers as Data Analysts, Business Analysts, Data Scientists, AI Associates, and BI Analysts.' },
              { q: 'Does IAER provide placement support?', a: 'Yes, IAER provides structured placement assistance and recruiter access.' },
              { q: 'Are scholarships available for Data Science students?', a: 'Yes, multiple scholarship opportunities are available based on eligibility.' },
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
    
    content = content.substring(0, faqStart) + dataFaqs + '\n' + content.substring(faqEnd + 10);
}

// 10. Footer CTA
content = content.replace(/Secure Your Seat in One of the Best Cyber Security Colleges in Kolkata/g, 'Secure Your Seat in One of the Best Data Science Colleges in Kolkata');

// 11. Imports Update
if (!content.includes('Database,')) {
    content = content.replace("Terminal, Cloud\n}", "Terminal, Cloud, Database, PieChart, Calculator\n}");
}

// Ensure the directory exists
const dirPath = 'g:/Development/IAER/Frontend/src/app/best-data-science-college-in-kolkata';
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath, { recursive: true });
}

// Finally, save
fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully created Data Science Landing Page!');
