const buildProgramSectionImages = (id, overrides = {}) => ({
  overviewImage: `/images/programs/${id}-overview.webp`,
  curriculumImage: `/images/programs/${id}-curriculum.webp`,
  careersImage: `/images/programs/${id}-careers.webp`,
  ...overrides,
});

export const programs = [
  {
    id: "bba-college-kolkata",
    code: "BBA",
    title: "Bachelor of Business Administration (BBA)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/Bachelor-of-Business-Administration.webp",
    ...buildProgramSectionImages("bachelor-of-business-administration-bba"),
    description: "The BBA course at IAER Kolkata is a career-oriented undergraduate programme designed for students who want to build successful careers in business management, corporate sectors, entrepreneurship, and leadership roles.",
    longDescription: "The BBA course at IAER Kolkata is a career-oriented undergraduate programme designed for students who want to build successful careers in business management, corporate sectors, entrepreneurship, and leadership roles. IAER is recognized as one of the best BBA colleges in Kolkata, offering a strong foundation in business management, marketing, finance, and human resource management.",
    seo: {
      title: "Best BBA College in Kolkata | BBA Admission 2026 IAER",
      description: "Apply for BBA at IAER Kolkata. Top BBA college with internship & 100% placement assistance. Admission open 2026. Limited seats.",
      url: "/programs/bba-college-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in leading companies across industries. Graduates can explore a wide range of roles, including some of the best BBA jobs in Kolkata.",
      roles: [
        "Business Development Executive",
        "Marketing Executive",
        "HR Executive",
        "Operations Executive",
        "Finance Executive",
        "Management Trainee",
        "Sales Executive",
        "Customer Relationship Executive"
      ],
      sectors: [
        "Corporate Companies",
        "Banking & Financial Sector",
        "Retail & E-commerce",
        "Consulting Firms",
        "Startups & Entrepreneurship"
      ]
    },
    whyStudy: [
      "Industry-aligned BBA curriculum",
      "Strong foundation in business and management",
      "Practical learning through case studies and projects",
      "Internship opportunities in corporate sectors",
      "Personality development and communication training",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM"
    ],
    highlights: [
      "Industry-aligned BBA curriculum",
      "Strong foundation in business and management",
      "Practical learning through case studies and projects",
      "Internship opportunities in corporate sectors",
      "Personality development and communication training",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM"
    ],
    curriculum: {
      structure: [
        "Core: Principles of Management",
        "Core: Marketing Management",
        "Core: Financial Management",
        "Core: Human Resource Management",
        "Core: Business Communication",
        "Core: Entrepreneurship & Business Strategy",
        "Practical: Business Case Studies",
        "Practical: Communication & Presentation Skills",
        "Practical: Leadership & Team Management",
        "Practical: Problem-Solving & Decision Making"
      ]
    },
    internships: {
      description: "IAER provides structured internship opportunities to ensure students gain real-world corporate exposure before graduation.",
      areas: [
        "Corporate Companies",
        "Marketing & Sales Organizations",
        "Financial Institutions",
        "Startups & Business Firms",
        "Consulting Companies"
      ],
      note: "Roles include Business Development Intern, Marketing Intern, HR Intern, Finance Intern, and Operations Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Interactive classrooms & case-based learning",
      "Industry mentoring & guest lectures",
      "Leadership workshops & personality development",
      "Strong alumni and corporate network"
    ],
    faqs: [
      {
        question: "What is BBA?",
        answer: "BBA (Bachelor of Business Administration) is a professional undergraduate degree focused on business management, leadership, and corporate skills."
      },
      {
        question: "Which is the best BBA college in Kolkata?",
        answer: "IAER is considered one of the best BBA colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is BBA a good career option?",
        answer: "Yes, BBA provides strong career opportunities in corporate jobs, management roles, and entrepreneurship."
      },
      {
        question: "What are the best jobs after BBA?",
        answer: "Popular roles include marketing executive, business development executive, HR executive, and management trainee."
      },
      {
        question: "Can I do BBA after 12th?",
        answer: "Yes, students from any stream can apply for BBA programmes."
      }
    ]
  },
  {
    id: "agentic-ai-course-kolkata",
    code: "ACAI",
    title: "Advanced Certification in Agentic AI",
    subtitle: "6 Months Certification Programme I Cutting-Edge",
    image: "/images/programs/advanced-certification-in-agentic-ai-banner.webp",
    ...buildProgramSectionImages("advanced-certification-in-agentic-ai"),
    description: "The Advanced Certification in Agentic AI at IAER Kolkata is a cutting-edge programme designed for students who want to build careers in Artificial Intelligence, Generative AI, automation, and intelligent systems.",
    longDescription: "The Advanced Certification in Agentic AI at IAER Kolkata is a cutting-edge programme designed for students who want to build careers in Artificial Intelligence, Generative AI, automation, and intelligent systems. IAER is emerging as one of the best AI institutes in Kolkata, offering practical training in Agentic AI, machine learning, and AI-driven applications. Students searching for AI course in Kolkata after 12th, Generative AI course with placement, or best artificial intelligence course in Kolkata will find this programme highly aligned with future industry demand.",
    seo: {
      title: "Best AI Course in Kolkata | Agentic AI & Generative AI Certification IAER",
      description: "Join Advanced Agentic AI Certification at IAER Kolkata. Learn AI, Generative AI & automation with placement assistance. Apply now.",
      url: "/programs/agentic-ai-course-kolkata"
    },
    overview: {
      duration: "6 Months Certification Programme",
      eligibility: "10+2 Pass or Graduate (any stream)",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 15,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in top tech companies and AI-driven organizations. Graduates can explore some of the best AI jobs in Kolkata and India.",
      roles: [
        "AI Developer",
        "Machine Learning Engineer",
        "Generative AI Specialist",
        "AI Automation Engineer",
        "Python Developer",
        "Data Analyst",
        "Software Developer"
      ],
      sectors: [
        "Artificial Intelligence & Machine Learning",
        "Data Science & Analytics",
        "Automation & Business Intelligence",
        "Startups & Tech Innovation"
      ]
    },
    whyStudy: [
      "Industry-aligned Agentic AI curriculum",
      "Training in Generative AI and LLM-based systems",
      "Practical learning through real-world AI projects",
      "Exposure to modern AI tools and platforms",
      "Short duration with high career impact",
      "Career-oriented training with placement support"
    ],
    highlights: [
      "Industry-aligned Agentic AI curriculum",
      "Training in Generative AI and LLM-based systems",
      "Practical learning through real-world AI projects",
      "Exposure to modern AI tools and platforms",
      "Short duration with high career impact",
      "Career-oriented training with placement support"
    ],
    curriculum: {
      structure: [
        "Core: Fundamentals of Artificial Intelligence",
        "Core: Generative AI & Large Language Models (LLMs)",
        "Core: Agentic AI Systems & Autonomous Agents",
        "Core: Prompt Engineering & AI Workflows",
        "Core: Machine Learning Basics",
        "Core: AI Tools & Automation Platforms"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world exposure in AI-driven environments.",
      areas: [
        "IT & Software Companies",
        "AI & Data Science Firms",
        "Startups & Tech Companies",
        "Automation & Digital Solution Providers"
      ],
      note: "Roles include AI Developer Intern, Machine Learning Intern, Generative AI Intern, Data Analyst Intern, and Automation & AI Tools Intern."
    },
    fees: {
      total: "₹60,000",
      afterScholarship: "₹45,000",
      notes: [
        "Scholarship : Avail ₹ 15,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available"
      ]
    },
    admission: [
      "Apply Now",
      "Book Your Seat",
      "Get Free Counselling"
    ],
    studentExperience: [
      "Building AI-powered Applications",
      "Creating AI Agents & Automation Workflows",
      "Working with Real Datasets",
      "Developing Chatbots & Intelligent Systems"
    ],
    faqs: [
      {
        question: "What is Agentic AI?",
        answer: "Agentic AI refers to AI systems that can independently make decisions, perform tasks, and automate processes."
      },
      {
        question: "Which is the best AI course in Kolkata?",
        answer: "IAER is among the best AI institutes in Kolkata, offering advanced training in Agentic AI and Generative AI."
      },
      {
        question: "Is AI a good career option?",
        answer: "Yes, AI is one of the highest-paying and fastest-growing career fields globally."
      },
      {
        question: "What are the best jobs after AI course?",
        answer: "Popular roles include AI developer, machine learning engineer, and data analyst."
      },
      {
        question: "Can I learn AI after 12th?",
        answer: "Yes, students from any stream can enroll in this certification programme."
      }
    ]
  },
  {
    id: "full-stack-development-course-kolkata",
    code: "ACFD",
    title: "Advanced Certification in Full Stack Development",
    subtitle: "6 Months Certification Programme I Job-Oriented",
    image: "/images/programs/advanced-certification-in-full-stack-development-banner.webp",
    ...buildProgramSectionImages("advanced-certification-in-full-stack-development"),
    description: "The Advanced Certification in Full Stack Development at IAER Kolkata is a career-focused programme designed for students who want to build careers in web development, software engineering, and IT industry roles.",
    longDescription: "The Advanced Certification in Full Stack Development at IAER Kolkata is a career-focused programme designed for students who want to build careers in web development, software engineering, and IT industry roles. IAER is emerging as one of the best full stack development institutes in Kolkata, offering practical training in frontend and backend development technologies. Students searching for full stack developer course in Kolkata, web development course after 12th, or coding course with placement in Kolkata will find this programme highly aligned with industry demand.",
    seo: {
      title: "Best Full Stack Development Course in Kolkata | Web Development Course IAER",
      description: "Join Advanced Full Stack Development Certification at IAER Kolkata. Learn frontend & backend development with placement assistance. Apply now.",
      url: "/programs/full-stack-development-course-kolkata"
    },
    overview: {
      duration: "6 Months Certification Programme",
      eligibility: "10+2 Pass (Any Stream) or Graduate. Basic computer knowledge preferred. Interest in coding and web development.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 25,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in leading IT companies. Graduates can explore some of the best full stack developer jobs in Kolkata.",
      roles: [
        "Full Stack Developer",
        "Web Developer",
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Application Developer",
        "Technical Support Engineer",
        "QA Tester"
      ],
      sectors: [
        "IT & Software Companies",
        "Startups & Tech Firms",
        "E-commerce Platforms",
        "Freelancing & Remote Jobs"
      ]
    },
    whyStudy: [
      "Industry-aligned full stack development curriculum",
      "Strong foundation in frontend and backend technologies",
      "Practical training through real-world projects",
      "Exposure to modern development tools",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    highlights: [
      "Industry-aligned full stack development curriculum",
      "Strong foundation in frontend and backend technologies",
      "Practical training through real-world projects",
      "Exposure to modern development tools",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    curriculum: {
      structure: [
        "Frontend: HTML, CSS, JavaScript",
        "Frontend: Responsive Web Design",
        "Frontend: UI/UX Basics",
        "Backend: Node.js / Python / Java",
        "Backend: Server-side Programming",
        "Backend: API Development",
        "Database: SQL / MongoDB",
        "Tools: Git & Version Control",
        "Tools: Deployment & Hosting"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world exposure in IT & Web Development Industry.",
      areas: [
        "IT & Software Companies",
        "Web Development Agencies",
        "Startups & Tech Firms",
        "Digital Product Companies"
      ],
      note: "Roles include Full Stack Developer Intern, Web Developer Intern, Frontend / Backend Developer Intern, and Software Developer Intern."
    },
    fees: {
      total: "₹60,000",
      afterScholarship: "₹35,000",
      notes: [
        "Scholarship : Avail ₹ 25,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available"
      ]
    },
    admission: [
      "Apply Now",
      "Book Your Seat",
      "Get Free Counselling"
    ],
    studentExperience: [
      "Building Full Stack Web Applications",
      "Creating Dynamic Websites",
      "Developing APIs & Backend Systems",
      "Deploying Live Projects"
    ],
    faqs: [
      {
        question: "What is Full Stack Development?",
        answer: "Full stack development involves working on both frontend and backend of web applications."
      },
      {
        question: "Which is the best full stack development course in Kolkata?",
        answer: "IAER is among the best full stack development institutes in Kolkata, offering practical training and placement support."
      },
      {
        question: "Is full stack development a good career option?",
        answer: "Yes, it offers high salary opportunities and strong demand in the IT industry."
      },
      {
        question: "What are the best jobs after full stack course?",
        answer: "Popular roles include full stack developer, web developer, and software engineer."
      },
      {
        question: "Can I learn full stack development after 12th?",
        answer: "Yes, students from any stream can enroll in this course."
      }
    ]
  },
  {
    id: "bba-sports-management-kolkata",
    code: "BBA-SM",
    title: "BBA in Sports Management (BBA-SM)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bba-in-sports-management-banner.webp",
    ...buildProgramSectionImages("bba-in-sports-management"),
    description: "The BBA in Sports Management at IAER Kolkata is a career-oriented undergraduate programme designed for students who are passionate about sports and want to build careers in the sports industry, event management, sports marketing, and sports business management.",
    longDescription: "The BBA in Sports Management at IAER Kolkata is a career-oriented undergraduate programme designed for students who are passionate about sports and want to build careers in the sports industry, event management, sports marketing, and sports business management. IAER is emerging as one of the best sports management colleges in Kolkata, offering a strong blend of business management education and sports industry training. Students will find this programme aligned with modern industry requirements.",
    seo: {
      title: "Best Sports Management College in Kolkata | BBA Sports Management IAER",
      description: "Apply for BBA Sports Management at IAER Kolkata. Top sports management course with internship & 100% placement assistance. Admission open 2026.",
      url: "/programs/bba-sports-management-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in sports organizations, event companies, and corporate sectors. Graduates can explore exciting roles, including some of the best sports management jobs in Kolkata.",
      roles: [
        "Sports Manager",
        "Team Manager",
        "Sports Event Coordinator",
        "Sports Marketing Executive",
        "Event Manager",
        "Sports Promotion Executive",
        "Media & Broadcasting Coordinator",
        "Sponsorship Manager",
        "Business Development Executive (Sports Industry)"
      ],
      sectors: [
        "Sports Leagues & Teams",
        "Event Management Companies",
        "Sports Marketing Agencies",
        "Fitness & Training Industry",
        "Media & Broadcasting"
      ]
    },
    whyStudy: [
      "Industry-aligned sports management curriculum",
      "Strong foundation in business + sports management",
      "Practical exposure through sports events and projects",
      "Internship opportunities in sports organizations",
      "Personality development and communication training",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in Sports Management"
    ],
    highlights: [
      "Industry-aligned sports management curriculum",
      "Strong foundation in business + sports management",
      "Practical exposure through sports events and projects",
      "Internship opportunities in sports organizations",
      "Personality development and communication training",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in Sports Management"
    ],
    curriculum: {
      structure: [
        "Core: Sports Management & Administration",
        "Core: Sports Marketing & Branding",
        "Core: Event & Tournament Management",
        "Core: Sponsorship & Sports Business",
        "Core: Sports Analytics & Performance Management",
        "Core: Media & Broadcasting in Sports",
        "Practical: Organizing Sports Events & Tournaments",
        "Practical: Managing Teams & Athletes",
        "Practical: Sponsorship & Branding Activities",
        "Practical: Sports Promotion & Media Coordination"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world experience in the sports ecosystem.",
      areas: [
        "Sports Academies & Clubs",
        "Event Management Companies",
        "Sports Marketing Agencies",
        "Fitness & Training Organizations",
        "Media & Broadcasting Firms"
      ],
      note: "Roles include Sports Event Management Intern, Sports Marketing Intern, Team Management Intern, Sponsorship & Branding Intern, and Operations Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply online",
      "Upload required documents",
      "Application verification & confirmation",
      "Fee payment & enrollment"
    ],
    studentExperience: [
      "Sports-focused professional learning environment",
      "Exposure to sports events and team management",
      "Career mentoring and placement preparation",
      "Modern campus infrastructure and industry interaction"
    ],
    faqs: [
      {
        question: "What is BBA in Sports Management?",
        answer: "It is a professional undergraduate programme that combines business management with sports industry knowledge and event management skills."
      },
      {
        question: "Which is the best sports management college in Kolkata?",
        answer: "IAER is among the best sports management colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is sports management a good career option?",
        answer: "Yes, it offers exciting career opportunities in sports events, marketing, team management, and media."
      },
      {
        question: "What are the best sports management jobs in Kolkata?",
        answer: "Top roles include sports manager, event coordinator, sports marketing executive, and team manager."
      },
      {
        question: "Can I do sports management after 12th?",
        answer: "Yes, students from any stream can apply for BBA Sports Management programmes."
      }
    ]
  },
  {
    id: "bba-business-analytics-kolkata",
    code: "BBA-BA",
    title: "BBA in Business Analytics (BBA-BA)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bba-in-business-analytics-banner.webp",
    ...buildProgramSectionImages("bba-in-business-analytics"),
    description: "The BBA in Business Analytics at IAER Kolkata is a future-focused undergraduate programme designed for students who want to build careers in data analytics, business intelligence, and decision-making roles.",
    longDescription: "The BBA in Business Analytics at IAER Kolkata is a future-focused undergraduate programme designed for students who want to build careers in data analytics, business intelligence, and decision-making roles. IAER is recognized as one of the best business analytics colleges in Kolkata, offering a strong blend of management education and data analytics training. The programme focuses on equipping students with both business knowledge and analytical skills required in today’s digital economy.",
    seo: {
      title: "Best Business Analytics College in Kolkata | BBA Analytics IAER",
      description: "Apply for BBA Business Analytics at IAER Kolkata. Learn data analytics, business intelligence & get 100% placement assistance. Admission open 2026.",
      url: "/programs/bba-business-analytics-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure opportunities in leading companies across industries. Graduates can explore some of the best business analytics jobs in Kolkata, including roles in IT, consulting, finance, and digital business.",
      roles: [
        "Business Analyst",
        "Data Analyst",
        "MIS Executive",
        "Reporting Analyst",
        "Marketing Analyst",
        "Financial Analyst",
        "Operations Analyst",
        "Digital Marketing Analyst",
        "CRM Analyst",
        "E-commerce Analyst"
      ],
      sectors: [
        "IT & Technology Companies",
        "E-commerce & Startups",
        "Banking & Financial Institutions",
        "Consulting & Research Firms",
        "Digital Marketing Agencies"
      ]
    },
    whyStudy: [
      "Industry-aligned business analytics curriculum",
      "Strong foundation in business + data analytics",
      "Practical training using real datasets",
      "Internship opportunities in analytics and corporate sectors",
      "Exposure to modern analytics tools",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in Business Analytics or Data Science"
    ],
    highlights: [
      "Industry-aligned business analytics curriculum",
      "Strong foundation in business + data analytics",
      "Practical training using real datasets",
      "Internship opportunities in analytics and corporate sectors",
      "Exposure to modern analytics tools",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in Business Analytics or Data Science"
    ],
    curriculum: {
      structure: [
        "Core: Data Analysis & Visualization",
        "Core: Business Intelligence & Reporting",
        "Core: Excel, SQL & Data Tools",
        "Core: Marketing Analytics",
        "Core: Financial Analytics",
        "Core: Data-Driven Decision Making",
        "Practical: Dashboard Creation & Data Visualization",
        "Practical: Predictive Analytics Basics",
        "Practical: Business Problem Solving Using Data",
        "Practical: Digital Strategy & Analytics"
      ]
    },
    internships: {
      description: "IAER provides structured internship opportunities to ensure students gain real-world experience before graduation.",
      areas: [
        "Corporate Companies",
        "IT & Analytics Firms",
        "Digital Marketing Agencies",
        "Financial & Consulting Firms",
        "Startups & Business Organizations"
      ],
      note: "Roles include Business Analytics Intern, Data Analyst Intern, Marketing Analytics Intern, Financial Data Intern, and MIS & Reporting Intern."
    },
    fees: {
      total: "₹5,04,000",
      afterScholarship: "₹4,54,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply online",
      "Upload academic documents",
      "Application verification",
      "Fee payment & enrollment confirmation"
    ],
    studentExperience: [
      "Data-driven learning environment",
      "Hands-on analytics workshops",
      "Industry case studies & projects",
      "Career mentoring & placement preparation"
    ],
    faqs: [
      {
        question: "What is BBA in Business Analytics?",
        answer: "It is a professional undergraduate programme that combines business management with data analytics, tools, and decision-making techniques."
      },
      {
        question: "Which is the best business analytics college in Kolkata?",
        answer: "IAER is among the best business analytics colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is Business Analytics a good career option?",
        answer: "Yes, it offers excellent career opportunities in data analytics, consulting, finance, and digital business."
      },
      {
        question: "What are the best business analytics jobs in Kolkata?",
        answer: "Top roles include business analyst, data analyst, marketing analyst, and MIS executive."
      },
      {
        question: "Can I do business analytics after 12th?",
        answer: "Yes, students from any stream can apply for BBA Business Analytics programmes."
      }
    ]
  },
  {
    id: "bba-global-business-kolkata",
    code: "BBA-GB",
    title: "BBA in Global Business (BBA-GB)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bba-in-global-business-banner.webp",
    ...buildProgramSectionImages("bba-in-global-business"),
    description: "The BBA in Global Business at IAER Kolkata is designed for students who aspire to build careers in international business, global trade, multinational companies, and cross-border management roles.",
    longDescription: "The BBA in Global Business at IAER Kolkata is designed for students who aspire to build careers in international business, global trade, multinational companies, and cross-border management roles. IAER is emerging as one of the best global business colleges in Kolkata, offering a curriculum that blends business management with international exposure and global industry practices. Through strong focus on global learning, international immersion programmes and academic collaborations, students are prepared for high-growth roles in global business sectors.",
    seo: {
      title: "Best Global Business College in Kolkata | BBA Global Business IAER",
      description: "Join BBA Global Business at IAER Kolkata with international immersion & foreign university collaborations. Admission open 2026. Apply now.",
      url: "/programs/bba-global-business-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER provides dedicated placement assistance to all students, helping them secure roles in leading national and multinational companies. Graduates are prepared for high-paying global business jobs in India and abroad.",
      roles: [
        "International Business Executive",
        "Export-Import Manager",
        "Global Marketing Executive",
        "Business Development Executive",
        "Supply Chain & Logistics Executive",
        "Management Trainee (MNCs)"
      ],
      sectors: [
        "Multinational Corporations",
        "International Trade Companies",
        "Consulting Firms",
        "E-commerce & Global Businesses",
        "Logistics & Supply Chain Industry"
      ]
    },
    whyStudy: [
      "Global business-focused curriculum",
      "International immersion programmes",
      "Collaboration with foreign universities",
      "Strong foundation in business management",
      "Internship opportunities in global companies",
      "Personality development & communication training",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in International Business"
    ],
    highlights: [
      "International Immersion Programmes",
      "Global Classroom Exposure",
      "Cross-Cultural Learning",
      "Industry Visits & Workshops",
      "Networking with International Faculty",
      "Partnership with University of Sunderland, UK",
      "Partnership with University of South Wales, UK",
      "Partnership with Lincoln University College, Malaysia",
      "Partnership with SEGi University, Malaysia",
      "Partnership with FPT University, Vietnam",
      "Partnership with INTI International University, Malaysia",
      "Partnership with MDIS, Singapore"
    ],
    curriculum: {
      structure: [
        "Core: International Business Management",
        "Core: Global Marketing & Trade",
        "Core: Export-Import Management",
        "Core: Cross-Cultural Communication",
        "Core: International Finance",
        "Core: Business Strategy & Leadership",
        "Exposure: International Immersion Programmes",
        "Exposure: Global Classroom & Industry Visits"
      ]
    },
    internships: {
      description: "IAER ensures students gain real-world experience through internships in both domestic and international business environments.",
      areas: [
        "Multinational Companies (MNCs)",
        "Export-Import Firms",
        "Logistics & Supply Chain Companies",
        "International Trade Organizations",
        "Corporate & Consulting Firms"
      ],
      note: "Roles include International Business Intern, Export-Import Executive Intern, Global Marketing Intern, Business Development Intern, and Operations & Supply Chain Intern."
    },
    fees: {
      total: "₹5,04,000",
      afterScholarship: "₹4,54,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply online",
      "Upload academic documents",
      "Application verification",
      "Fee payment & enrollment confirmation"
    ],
    studentExperience: [
      "Global business-focused classrooms",
      "International case-based learning",
      "Leadership & communication skill development",
      "Corporate and global alumni interaction"
    ],
    faqs: [
      {
        question: "What is BBA in Global Business?",
        answer: "It is a professional undergraduate programme focused on international business, global trade, and cross-border management."
      },
      {
        question: "Which is the best global business college in Kolkata?",
        answer: "IAER is among the best global business colleges in Kolkata, offering international exposure and industry-oriented training."
      },
      {
        question: "Does this course offer international exposure?",
        answer: "Yes, IAER provides international immersion programmes through collaborations with global universities."
      },
      {
        question: "What are the career opportunities after BBA Global Business?",
        answer: "Students can work in multinational companies, export-import firms, global marketing, and international business roles."
      },
      {
        question: "Can I study abroad during this course?",
        answer: "Yes, students can participate in international immersion programmes and global exposure initiatives."
      }
    ]
  },
  {
    id: "bba-in-aviation-operations",
    code: "BBA-AO",
    title: "BBA in Aviation Operations (BBA-AO)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bba-in-aviation-operations-banner.webp",
    ...buildProgramSectionImages("bba-in-aviation-operations", {
      careersImage: "/images/programs/bba-in-aviation-operations-overview.webp",
    }),
    overview: {
      duration: "4 Years (8 Semesters)",
      eligibility: "10+2 pass (any stream). Candidates appearing for Class 12 may apply",
      mode: "On-Campus (Kolkata)",
      scholarship: "ICET Scholarship up to ₹50,000 (as applicable)"
    },
    careerOutcomes: {
      description: "The BBA in Aviation Operations program at IAER prepares students for managerial and operational roles across the aviation, airline, and airport ecosystem. The curriculum blends core business management with specialized aviation operations training to ensure graduates are industry-ready. IAER provides structured internships and placement assistance through its Career Services Department.",
      roles: [
        "Airport Operations Executive / Officer",
        "Airline Operations Coordinator",
        "Ground Handling Supervisor",
        "Flight Dispatch & Operations Analyst",
        "Aviation Safety & Compliance Officer",
        "Airport Customer Experience Manager",
        "Cargo & Logistics Operations Executive",
        "Airline Scheduling & Network Analyst",
        "Aviation Administration Executive",
        "Aviation Consultant"
      ],
      sectors: [
        "Domestic & International Airlines",
        "Airport Operators & Authorities",
        "Ground Handling & Airport Services Companies",
        "Cargo & Logistics Operators",
        "Aviation Consulting Firms",
        "Charter & Corporate Aviation",
        "Aviation Regulatory & Support Services"
      ]
    },
    whyStudy: [
      "MAKAUT-approved curriculum with aviation-specific specialization",
      "Strong foundation in business management + aviation operations",
      "Exposure to airport, airline & ground handling processes",
      "Industry-oriented training aligned with aviation standards",
      "Faculty with aviation and management expertise",
      "Internship and placement support for aviation careers"
    ],
    highlights: [
      "Integrated learning of aviation management and operations",
      "Training in airport, airline & ground handling operations",
      "Focus on aviation safety, security & regulatory compliance",
      "Industry interaction through expert lectures and field exposure",
      "Internship-driven learning for real-world aviation environments",
      "Development of leadership, communication & customer service skills"
    ],
    curriculum: {
      structure: [
        "Year 1: Business fundamentals, communication skills, aviation overview",
        "Year 2: Airport management, airline operations, aviation regulations",
        "Year 3: Aviation safety & security, logistics, internships",
        "Year 4: Advanced aviation management, strategy, capstone project"
      ],
      coreSubjects: [
        "Airport Planning & Operations",
        "Airline Operations Management",
        "Aviation Safety & Security",
        "Air Traffic & Ground Operations",
        "Aviation Law & Regulatory Framework",
        "Cargo & Logistics Management"
      ]
    },
    internships: {
      description: "Students gain hands-on experience through internships in:",
      areas: [
        "Airports & airline operations departments",
        "Ground handling service providers",
        "Aviation logistics & cargo companies",
        "Airport customer service & operations teams"
      ],
      note: "These internships ensure practical exposure and operational readiness."
    },
    fees: {
      total: "₹4,99,000",
      afterScholarship: "₹4,49,000",
      notes: [
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Online application",
      "Academic document upload & verification",
      "Provisional admission confirmation",
      "Fee payment & enrollment"
    ],
    studentExperience: [
      "Aviation-focused classrooms and case studies",
      "Industry expert sessions and operational insights",
      "Personality development & professional grooming",
      "Career mentoring and placement preparation"
    ]
  },
  {
    id: "bba-aviation-hospitality-management-kolkata",
    code: "BBA-AHSM",
    title: "BBA – Aviation, Hospitality Services & Management (BBA-AHSM)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/BBA–Aviation-Hospitality-Services-Management.webp",
    ...buildProgramSectionImages("bba-ahsm"),
    description: "The BBA in Aviation, Hospitality Services & Management at IAER Kolkata is a career-oriented programme designed for students who aspire to work in aviation, airlines, airports, hospitality, and tourism industries.",
    longDescription: "The BBA in Aviation, Hospitality Services & Management at IAER Kolkata is a career-oriented programme designed for students who aspire to work in aviation, airlines, airports, hospitality, and tourism industries. IAER is widely recognized as one of the best aviation management colleges in Kolkata, offering a practical and industry-aligned curriculum. By combining business management education with aviation operations and hospitality training, the programme ensures students are prepared for real-world industry roles.",
    seo: {
      title: "Best Aviation Management College in Kolkata | BBA Aviation IAER",
      description: "Apply for BBA Aviation & Hospitality at IAER Kolkata. Top aviation college with internship, placement & scholarship. Admission open 2026.",
      url: "/programs/bba-aviation-hospitality-management-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply for admission.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "Graduates of this programme can explore a wide range of career opportunities across aviation, hospitality, and service industries. Many students aim for some of the best aviation jobs in Kolkata, while others explore opportunities across India and globally.",
      roles: [
        "Airport Operations Executive",
        "Airline Customer Service Executive",
        "Ground Staff / Passenger Handling Executive",
        "Cabin Crew",
        "Hotel Operations Executive",
        "Front Office / Guest Relations Executive",
        "Travel Consultant",
        "Tourism Executive",
        "Event & Hospitality Coordinator",
        "Service Operations Supervisor",
        "Management Trainee"
      ],
      sectors: [
        "Domestic and international airlines",
        "Airport management companies",
        "Hotel and resort chains",
        "Cruise and luxury service industries",
        "Travel and tourism sector"
      ]
    },
    whyStudy: [
      "Industry-aligned aviation and hospitality curriculum",
      "Strong foundation in business and service management",
      "Internship opportunities with airlines, airports, and hotels",
      "Personality development and professional grooming",
      "Industry interaction and expert sessions",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in Aviation, Hospitality, or Tourism"
    ],
    highlights: [
      "Airport Operations & Management",
      "Airline Ground Handling & Passenger Services",
      "Aviation Safety & Service Standards",
      "Customer Experience Management",
      "Hospitality & Tourism Operations",
      "Grooming & Professional Etiquette",
      "Communication & Soft Skills",
      "Airline Service Fundamentals",
      "Customer Handling & Guest Experience"
    ],
    curriculum: {
      structure: [
        "Core: Airport Operations & Management",
        "Core: Airline Ground Handling & Passenger Services",
        "Core: Aviation Safety & Service Standards",
        "Core: Customer Experience Management",
        "Core: Hospitality & Tourism Operations",
        "Training: Grooming & Professional Etiquette",
        "Training: Communication & Soft Skills",
        "Training: Airline Service Fundamentals",
        "Training: Customer Handling & Guest Experience"
      ]
    },
    internships: {
      description: "Students gain real-world exposure through internships with leading organizations in aviation and hospitality sectors.",
      areas: [
        "Airlines and aviation service providers",
        "Airports and ground handling companies",
        "Hotels and hospitality chains",
        "Travel and tourism organizations",
        "Event and service industry firms"
      ],
      note: "Roles include Airport Operations Intern, Airline Ground Staff Intern, Cabin Services Intern, Hotel Operations Intern, Guest Relations Intern, Travel & Tourism Intern, and Event & Hospitality Intern."
    },
    fees: {
      total: "₹5,04,000",
      afterScholarship: "₹4,54,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment-based payment options available",
        "EMI facilities available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply online",
      "Upload required documents",
      "Application verification & confirmation",
      "Fee payment & enrollment"
    ],
    studentExperience: [
      "Service-oriented professional learning environment",
      "Exposure to aviation and hospitality operations",
      "Career mentoring and placement preparation",
      "Modern campus infrastructure and industry interaction"
    ],
    faqs: [
      {
        question: "What is BBA in Aviation & Hospitality Management?",
        answer: "It is a professional undergraduate programme that combines business management with aviation operations, hospitality services, and customer experience training."
      },
      {
        question: "Which is the best aviation management college in Kolkata?",
        answer: "IAER is considered one of the best aviation management colleges in Kolkata, offering industry-oriented training, internships, and placement support."
      },
      {
        question: "Is BBA Aviation a good career option?",
        answer: "Yes, it provides strong career opportunities in airlines, airports, hospitality, tourism, and global service industries."
      },
      {
        question: "Does the programme include Internship in Airports?",
        answer: "Yes, Students get apply opportunity to pursue their internships in Selected Airports and Airlines."
      },
      {
        question: "What are the best aviation jobs in Kolkata?",
        answer: "Popular roles include airport operations executive, airline customer service executive, ground staff, and cabin crew."
      },
      {
        question: "Can I join aviation after 12th?",
        answer: "Yes, students from any stream can apply for aviation and hospitality management programmes."
      }
    ]
  },
  {
    id: "bba-hospital-management-kolkata",
    code: "BBA-HM",
    title: "BBA in Hospital Management (BBA-HM)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/Bachelor-of-Hospital-Management.webp",
    ...buildProgramSectionImages("bba-in-hospital-management"),
    description: "The BBA in Hospital Management at IAER Kolkata is a career-oriented undergraduate programme designed for students who want to build careers in the healthcare and hospital administration sector.",
    longDescription: "The BBA in Hospital Management at IAER Kolkata is a career-oriented undergraduate programme designed for students who want to build careers in the healthcare and hospital administration sector. IAER is recognized as one of the best hospital management colleges in Kolkata, offering a strong combination of business management and healthcare administration training. Through industry-focused training and practical learning, students are prepared for high-demand roles in healthcare institutions.",
    seo: {
      title: "Best Hospital Management College in Kolkata | BBA Hospital Management IAER",
      description: "Apply for BBA Hospital Management at IAER Kolkata. Top healthcare management course with internship & 100% placement assistance. Admission open 2026.",
      url: "/programs/bba-hospital-management-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in hospitals, healthcare organizations, and corporate healthcare sectors. Graduates can explore a wide range of roles, including some of the best hospital management jobs in Kolkata.",
      roles: [
        "Hospital Administrator",
        "Healthcare Manager",
        "Patient Care Executive",
        "Hospital Operations Executive",
        "Front Office Manager",
        "Medical Records Officer",
        "Healthcare Coordinator",
        "Clinic Manager",
        "Diagnostic Center Executive",
        "Healthcare Consultant"
      ],
      sectors: [
        "Hospitals & Healthcare Chains",
        "Clinics & Diagnostic Centers",
        "Healthcare Startups",
        "NGO & Public Health Organizations"
      ]
    },
    whyStudy: [
      "Industry-aligned hospital management curriculum",
      "Strong foundation in business + healthcare management",
      "Practical exposure in hospitals and healthcare organizations",
      "Internship opportunities in hospitals and clinics",
      "Personality development and communication training",
      "Career-oriented training with placement support",
      "Pathway to MBA / MHA (Master of Hospital Administration)"
    ],
    highlights: [
      "Industry-aligned hospital management curriculum",
      "Strong foundation in business + healthcare management",
      "Practical exposure in hospitals and healthcare organizations",
      "Internship opportunities in hospitals and clinics",
      "Personality development and communication training",
      "Career-oriented training with placement support",
      "Pathway to MBA / MHA (Master of Hospital Administration)"
    ],
    curriculum: {
      structure: [
        "Core: Hospital Administration & Operations",
        "Core: Healthcare Management Systems",
        "Core: Medical Ethics & Patient Care Management",
        "Core: Hospital HR & Staffing",
        "Core: Healthcare Marketing & Finance",
        "Core: Quality Management in Healthcare",
        "Practical: Hospital Workflow & Operations",
        "Practical: Patient Relationship Management",
        "Practical: Medical Records & Administration",
        "Practical: Healthcare Service Quality"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain hands-on experience in real healthcare environments.",
      areas: [
        "Hospitals & Multi-Speciality Clinics",
        "Nursing Homes & Healthcare Centers",
        "Diagnostic Labs & Healthcare Facilities",
        "Healthcare NGOs & Organizations"
      ],
      note: "Roles include Hospital Administration Intern, Patient Care Coordinator Intern, Front Office & Hospital Operations Intern, Medical Records Executive Intern, and Healthcare Support Executive Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply online",
      "Upload academic documents",
      "Application verification",
      "Fee payment & enrollment confirmation"
    ],
    studentExperience: [
      "Healthcare-focused learning environment",
      "Hospital exposure and case-based learning",
      "Continuous assessment and skill development",
      "Career mentoring and placement preparation"
    ],
    faqs: [
      {
        question: "What is BBA in Hospital Management?",
        answer: "It is a professional undergraduate programme that combines business management with healthcare administration and hospital operations."
      },
      {
        question: "Which is the best hospital management college in Kolkata?",
        answer: "IAER is among the best hospital management colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is hospital management a good career option?",
        answer: "Yes, it offers strong career opportunities in hospitals, healthcare organizations, and administration roles."
      },
      {
        question: "What are the best hospital management jobs in Kolkata?",
        answer: "Top roles include hospital administrator, patient care executive, healthcare manager, and operations executive."
      },
      {
        question: "Can I do hospital management after 12th?",
        answer: "Yes, students from any stream can apply for BBA Hospital Management programmes."
      }
    ]
  },
  {
    id: "bca-college-kolkata",
    code: "BCA",
    title: "Bachelor of Computer Application (BCA)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bca-banner.webp",
    ...buildProgramSectionImages("bca"),
    description: "The BCA course at IAER Kolkata is a career-oriented undergraduate programme designed for students who want to build careers in the IT industry, software development, data analytics, and digital technology sectors.",
    longDescription: "The BCA course at IAER Kolkata is a career-oriented undergraduate programme designed for students who want to build careers in the IT industry, software development, data analytics, and digital technology sectors. IAER is recognized as one of the best BCA colleges in Kolkata, offering a strong foundation in programming, software development, and computer applications.",
    seo: {
      title: "Best BCA College in Kolkata | BCA Admission 2026 IAER",
      description: "Apply for BCA at IAER Kolkata. Top IT course with programming, internship & 100% placement assistance. Admission open 2026.",
      url: "/programs/bca-college-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in leading IT companies and tech-driven organizations. Graduates can explore a wide range of roles, including some of the best BCA jobs in Kolkata.",
      roles: [
        "Software Developer",
        "Web Developer",
        "Application Developer",
        "Technical Support Engineer",
        "Data Analyst",
        "MIS Executive",
        "Digital Marketing Executive",
        "SEO Analyst"
      ],
      sectors: [
        "IT & Software Companies",
        "Startups & Tech Firms",
        "Banking & Financial Technology (FinTech)",
        "E-commerce Companies",
        "Digital Service Industry"
      ]
    },
    whyStudy: [
      "Industry-aligned BCA curriculum",
      "Strong foundation in programming and software development",
      "Practical learning through projects and coding labs",
      "Internship opportunities in IT companies",
      "Exposure to modern technologies",
      "Career-oriented training with placement support",
      "Pathway to MCA / MBA / Data Science programs"
    ],
    highlights: [
      "Industry-aligned BCA curriculum",
      "Strong foundation in programming and software development",
      "Practical learning through projects and coding labs",
      "Internship opportunities in IT companies",
      "Exposure to modern technologies",
      "Career-oriented training with placement support",
      "Pathway to MCA / MBA / Data Science programs"
    ],
    curriculum: {
      structure: [
        "Core: Programming Languages (C, C++, Java, Python)",
        "Core: Web Development (HTML, CSS, JavaScript)",
        "Core: Database Management (SQL)",
        "Core: Software Development & Testing",
        "Core: Operating Systems & Computer Networks",
        "Core: Basics of Data Science & Analytics",
        "Practical: Software Development Projects",
        "Practical: Website & Application Development",
        "Practical: Database Design & Management",
        "Practical: Debugging & Testing"
      ]
    },
    internships: {
      description: "IAER provides structured internship opportunities to ensure students gain real-world exposure in the IT sector.",
      areas: [
        "IT Companies & Software Firms",
        "Web Development Agencies",
        "Startups & Tech Companies",
        "Digital & IT Service Providers"
      ],
      note: "Roles include Software Developer Intern, Web Developer Intern, Data Analyst Intern, Technical Support Intern, and QA & Testing Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment-based payment options available",
        "EMI facilities available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Technology-driven learning environment",
      "Access to modern computer laboratories",
      "Real-world project exposure",
      "Career mentoring and placement support"
    ],
    faqs: [
      {
        question: "What is BCA?",
        answer: "BCA (Bachelor of Computer Applications) is a professional undergraduate degree focused on computer applications, programming, and IT skills."
      },
      {
        question: "Which is the best BCA college in Kolkata?",
        answer: "IAER is among the best BCA colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is BCA a good career option?",
        answer: "Yes, it offers excellent career opportunities in software development, IT services, and data analytics."
      },
      {
        question: "What are the best jobs after BCA?",
        answer: "Popular roles include software developer, web developer, data analyst, and IT support engineer."
      },
      {
        question: "Can I do BCA after 12th?",
        answer: "Yes, students from any stream can apply for BCA programmes."
      }
    ]
  },
  {
    id: "bca-ai-ml-kolkata",
    code: "BCA-AIML",
    title: "BCA in Artificial Intelligence & Machine Learning (BCA-AIML)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bca-in-ai-ml-banner.webp",
    ...buildProgramSectionImages("bca-in-ai-ml"),
    description: "The BCA in Artificial Intelligence & Machine Learning at IAER Kolkata is a future-focused undergraduate programme designed for students who want to build careers in AI, machine learning, data science, and emerging technologies.",
    longDescription: "The BCA in Artificial Intelligence & Machine Learning at IAER Kolkata is a future-focused undergraduate programme designed for students who want to build careers in AI, machine learning, data science, and emerging technologies. IAER is emerging as one of the best AI & ML colleges in Kolkata, offering a strong foundation in programming, artificial intelligence, and data-driven technologies.",
    seo: {
      title: "Best AI & ML College in Kolkata | BCA AI ML Admission 2026 IAER",
      description: "Apply for BCA AI & ML at IAER Kolkata. Learn artificial intelligence, machine learning & data science with internship & 100% placement assistance.",
      url: "/programs/bca-ai-ml-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in top technology companies and data-driven organizations. Graduates can explore high-demand roles, including some of the best AI jobs in Kolkata.",
      roles: [
        "Machine Learning Engineer",
        "AI Developer",
        "Data Scientist",
        "Data Analyst",
        "Python Developer",
        "Software Developer",
        "Application Developer",
        "Business Intelligence Analyst"
      ],
      sectors: [
        "IT & Software Companies",
        "Data Science & Analytics Firms",
        "Startups & Tech Companies",
        "Banking & FinTech",
        "E-commerce & Digital Platforms"
      ]
    },
    whyStudy: [
      "Industry-aligned AI & ML curriculum",
      "Strong foundation in programming + data science",
      "Practical learning through projects and case studies",
      "Internship opportunities in AI and tech companies",
      "Exposure to modern tools and technologies",
      "Career-oriented training with placement support",
      "Pathway to MCA / MBA / Data Science & AI specializations"
    ],
    highlights: [
      "Industry-aligned AI & ML curriculum",
      "Strong foundation in programming + data science",
      "Practical learning through projects and case studies",
      "Internship opportunities in AI and tech companies",
      "Exposure to modern tools and technologies",
      "Career-oriented training with placement support",
      "Pathway to MCA / MBA / Data Science & AI specializations"
    ],
    curriculum: {
      structure: [
        "Core: Programming (Python, Java, C++)",
        "Core: Machine Learning Algorithms",
        "Core: Artificial Intelligence Fundamentals",
        "Core: Data Science & Analytics",
        "Core: Deep Learning Basics",
        "Core: Natural Language Processing (NLP)",
        "Core: Computer Vision",
        "Practical: Building Machine Learning Models",
        "Practical: Data Analysis & Visualization",
        "Practical: AI-based Application Development",
        "Practical: Working with Real Datasets"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world exposure in AI-driven environments.",
      areas: [
        "IT & Software Companies",
        "AI & Data Science Firms",
        "Startups & Tech Companies",
        "Analytics & Research Organizations"
      ],
      note: "Roles include Machine Learning Intern, Data Analyst Intern, AI Developer Intern, Python Developer Intern, and Data Science Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "AI-driven technology learning environment",
      "Access to modern AI & ML laboratories",
      "Real-world project exposure with datasets",
      "Career mentoring and placement support"
    ],
    faqs: [
      {
        question: "What is BCA in AI & ML?",
        answer: "It is a professional undergraduate programme focused on artificial intelligence, machine learning, and data science technologies."
      },
      {
        question: "Which is the best AI college in Kolkata?",
        answer: "IAER is among the best AI & ML colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is AI & Machine Learning a good career option?",
        answer: "Yes, it offers high-paying and future-ready career opportunities in technology and data-driven industries."
      },
      {
        question: "What are the best AI jobs in Kolkata?",
        answer: "Top roles include machine learning engineer, data scientist, AI developer, and data analyst."
      },
      {
        question: "Can I do AI after 12th?",
        answer: "Yes, students from any stream can apply for BCA AI & ML programmes."
      }
    ]
  },
  {
    id: "bca-data-science-cyber-security-kolkata",
    code: "BCA-DSCS",
    title: "BCA in Data Science & Cyber Security (BCA – DSCS)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bca-in-data-science-cyber-security-banner.webp",
    ...buildProgramSectionImages("bca-in-data-science-cyber-security"),
    description: "The BCA in Data Science & Cyber Security at IAER Kolkata is a future-focused undergraduate programme designed for students who want to build careers in data science, cyber security, ethical hacking, and IT security domains.",
    longDescription: "The BCA in Data Science & Cyber Security at IAER Kolkata is a future-focused undergraduate programme designed for students who want to build careers in data science, cyber security, ethical hacking, and IT security domains. IAER is emerging as one of the best data science and cyber security colleges in Kolkata, offering a strong foundation in programming, analytics, and cyber security technologies.",
    seo: {
      title: "Best Data Science & Cyber Security College in Kolkata | BCA DSCS IAER",
      description: "Apply for BCA Data Science & Cyber Security at IAER Kolkata. Learn analytics, ethical hacking & IT security with internship & 100% placement assistance.",
      url: "/programs/bca-data-science-cyber-security-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in top IT companies, analytics firms, and cyber security organizations. Graduates can explore high-growth roles, including some of the best data science and cyber security jobs in Kolkata.",
      roles: [
        "Data Analyst",
        "Data Scientist",
        "Business Intelligence Analyst",
        "Cyber Security Analyst",
        "Ethical Hacker",
        "Network Security Engineer",
        "SOC Analyst",
        "Python Developer",
        "Software Developer",
        "IT Security Executive"
      ],
      sectors: [
        "IT & Software Companies",
        "Cyber Security Firms",
        "Banking & FinTech",
        "E-commerce Platforms",
        "Government & Defense Sectors"
      ]
    },
    whyStudy: [
      "Dual specialization in data science and cyber security",
      "Industry-aligned curriculum with latest technologies",
      "Strong foundation in programming and analytics",
      "Practical learning through projects and labs",
      "Internship opportunities in IT and security domains",
      "Career-oriented training with placement support",
      "Pathway to MCA / MBA / Data Science / Cyber Security specializations"
    ],
    highlights: [
      "Dual specialization in data science and cyber security",
      "Industry-aligned curriculum with latest technologies",
      "Strong foundation in programming and analytics",
      "Practical learning through projects and labs",
      "Internship opportunities in IT and security domains",
      "Career-oriented training with placement support",
      "Pathway to MCA / MBA / Data Science / Cyber Security specializations"
    ],
    curriculum: {
      structure: [
        "Data Science: Data Analysis & Visualization",
        "Data Science: Python for Data Science",
        "Data Science: Machine Learning Basics",
        "Data Science: Data Mining & Statistics",
        "Data Science: Business Intelligence",
        "Cyber Security: Network Security",
        "Cyber Security: Ethical Hacking",
        "Cyber Security: Cyber Laws & Digital Forensics",
        "Cyber Security: Information Security Management",
        "Cyber Security: Cloud & Application Security",
        "Practical: Working with real datasets and analytics tools",
        "Practical: Building data-driven models",
        "Practical: Cyber security simulations and testing",
        "Practical: Ethical hacking fundamentals"
      ]
    },
    internships: {
      description: "IAER provides structured internship opportunities to ensure students gain real-world exposure in high-demand tech domains.",
      areas: [
        "IT & Software Companies",
        "Cyber Security Firms",
        "Data Analytics Companies",
        "Startups & Tech Organizations",
        "Digital Security & Consulting Firms"
      ],
      note: "Roles include Data Analyst Intern, Cyber Security Intern, Ethical Hacking Intern, SOC (Security Operations Centre) Intern, and IT Support & Security Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Dual domain technology learning environment",
      "Access to modern analytics and security laboratories",
      "Hands-on training with real-world security simulations",
      "Career mentoring and placement support"
    ],
    faqs: [
      {
        question: "What is BCA in Data Science & Cyber Security?",
        answer: "It is a professional undergraduate programme combining data analytics, machine learning basics, and cyber security technologies."
      },
      {
        question: "Which is the best data science and cyber security college in Kolkata?",
        answer: "IAER is among the best data science and cyber security colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is data science and cyber security a good career option?",
        answer: "Yes, both fields offer high-paying and future-proof career opportunities."
      },
      {
        question: "What are the best jobs in data science and cyber security?",
        answer: "Top roles include data analyst, data scientist, cyber security analyst, ethical hacker, and SOC analyst."
      },
      {
        question: "Can I do cyber security after 12th?",
        answer: "Yes, students from any stream can apply for BCA Data Science & Cyber Security programmes."
      }
    ]
  },
  {
    id: "bsc-data-science-kolkata",
    code: "BSCDS",
    title: "B.Sc. in Data Science (BSCDS)",
    subtitle: "4 Years Undergraduate Degree Programme | MAKAUT Affiliated | AICTE Approved",
    image: "/images/programs/bsc-in-data-science-banner.webp",
    ...buildProgramSectionImages("bsc-in-data-science"),
    description: "A career-focused undergraduate programme designed to build strong foundations in statistics, programming, and data-driven decision-making for roles in analytics and AI.",
    longDescription: "The B.Sc. in Data Science at IAER Kolkata is a career-focused undergraduate programme designed for students who want to build careers in data analytics, artificial intelligence, machine learning, and business intelligence. The programme combines core mathematics, programming, and analytics with real-world applications and hands-on projects to ensure graduates are job-ready.",
    seo: {
      title: "Best Data Science College in Kolkata | BSc Data Science Admission IAER",
      description: "Apply for B.Sc. Data Science at IAER Kolkata. Learn AI, analytics & machine learning with internship & 100% placement assistance.",
      url: "/programs/bsc-data-science-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Scholarship: ₹50,000 valid till 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to help students secure roles in leading companies, supported by resume building, interview preparation, mock interviews, technical training, live project experience, and career guidance.",
      roles: [
        "Data Analyst",
        "Business Intelligence Analyst",
        "Data Scientist",
        "Python Developer",
        "Machine Learning Engineer",
        "Data Engineer"
      ],
      sectors: [
        "IT & Software Companies",
        "Banking, Finance & FinTech",
        "E-commerce & Digital Platforms",
        "Healthcare & Analytics Firms"
      ]
    },
    whyStudy: [
      "Industry-aligned data science curriculum",
      "Strong foundation in programming and statistics",
      "Practical learning through projects and case studies",
      "Internship opportunities in analytics and IT companies",
      "Exposure to modern tools and technologies",
      "Career-oriented training with placement support",
      "Pathway to higher studies (M.Sc. Data Science / AI / Analytics)"
    ],
    highlights: [
      "Python for Data Science",
      "Data Analysis & Visualization",
      "Machine Learning Basics",
      "Statistics & Probability",
      "Big Data Fundamentals",
      "Business Intelligence Tools",
      "Hands-on projects with real-world datasets"
    ],
    curriculum: {
      structure: [
        "Year 1: Mathematics, statistics, programming fundamentals, data basics",
        "Year 2: Data analysis, visualization, database fundamentals, Python for Data Science",
        "Year 3: Machine learning basics, big data fundamentals, business intelligence tools, internships",
        "Year 4: Advanced analytics projects, dashboards, capstone project"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world exposure.",
      areas: [
        "IT & Software Companies",
        "Data Analytics Firms",
        "Startups & Tech Companies",
        "Business Intelligence Organizations"
      ],
      note: "Internship roles can include Data Analyst Intern, Data Science Intern, Business Intelligence Intern, and Python Developer Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Installment & EMI options available",
        "Scholarship: ₹50,000 valid till 31st May 2026.",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Online application",
      "Document upload & verification",
      "Provisional admission confirmation",
      "Fee payment & enrollment"
    ],
    studentExperience: [
      "Modern data science laboratories",
      "Access to industry datasets & tools",
      "Mentorship from data professionals",
      "Career guidance & placement training"
    ]
  },
  {
    id: "bsc-cyber-security-kolkata",
    code: "BSCCS",
    title: "B.Sc in Cyber Security (BSCCS)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/B.Sc-in-Cyber-Security.webp",
    ...buildProgramSectionImages("bsc-in-cyber-security"),
    description: "The B.Sc. in Cyber Security at IAER Kolkata is a career-focused undergraduate programme designed for students who want to build careers in cyber security, ethical hacking, network security, and information security.",
    longDescription: "The B.Sc. in Cyber Security at IAER Kolkata is a career-focused undergraduate programme designed for students who want to build careers in cyber security, ethical hacking, network security, and information security. IAER is emerging as one of the best cyber security colleges in Kolkata, offering a strong foundation in IT security, ethical hacking, and digital protection technologies. The programme focuses on protecting systems, networks, and data from cyber threats through hands-on learning and practical training.",
    seo: {
      title: "Best Cyber Security College in Kolkata | BSc Cyber Security IAER",
      description: "Apply for B.Sc. Cyber Security at IAER Kolkata. Learn ethical hacking, network security & IT protection with placement assistance. Admission open 2026.",
      url: "/programs/bsc-cyber-security-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream ) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in top IT and security companies. Graduates can explore some of the best cyber security jobs in Kolkata and beyond.",
      roles: [
        "Cyber Security Analyst",
        "Ethical Hacker",
        "Network Security Engineer",
        "SOC Analyst",
        "System Administrator",
        "IT Security Executive",
        "Security Consultant"
      ],
      sectors: [
        "IT & Software Companies",
        "Cyber Security Firms",
        "Banking & Financial Sector",
        "Government & Defense Organizations"
      ]
    },
    whyStudy: [
      "Industry-aligned cyber security curriculum",
      "Strong foundation in ethical hacking and network security",
      "Practical training through labs and simulations",
      "Internship opportunities in IT and security companies",
      "Exposure to modern cyber security tools",
      "Career-oriented training with placement support",
      "Pathway to higher studies (M.Sc. Cyber Security / IT Security)"
    ],
    highlights: [
      "Industry-aligned cyber security curriculum",
      "Strong foundation in ethical hacking and network security",
      "Practical training through labs and simulations",
      "Internship opportunities in IT and security companies",
      "Exposure to modern cyber security tools",
      "Career-oriented training with placement support",
      "Pathway to higher studies (M.Sc. Cyber Security / IT Security)"
    ],
    curriculum: {
      structure: [
        "Core: Ethical Hacking & Penetration Testing",
        "Core: Network Security",
        "Core: Cyber Laws & Digital Forensics",
        "Core: Information Security Management",
        "Core: Cryptography Basics",
        "Core: Cloud & Application Security",
        "Practical: Identifying Security Vulnerabilities",
        "Practical: Ethical Hacking Techniques",
        "Practical: Network Monitoring & Protection",
        "Practical: Security Testing & Risk Assessment"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world exposure in IT security domains.",
      areas: [
        "IT & Software Companies",
        "Cyber Security Firms",
        "Network & Security Organizations",
        "Startups & Tech Companies"
      ],
      note: "Roles include Cyber Security Intern, Ethical Hacking Intern, Network Security Intern, and SOC (Security Operations Center) Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply online",
      "Upload academic documents",
      "Application verification",
      "Fee payment & enrollment confirmation"
    ],
    studentExperience: [
      "Dedicated cyber security labs",
      "Live attack-defense simulations",
      "Industry expert sessions & workshops",
      "Career mentoring and placement training"
    ],
    faqs: [
      {
        question: "What is B.Sc. in Cyber Security?",
        answer: "It is an undergraduate degree focused on protecting digital systems, networks, and data from cyber threats."
      },
      {
        question: "Which is the best cyber security college in Kolkata?",
        answer: "IAER is among the best cyber security colleges in Kolkata, offering practical training and placement support."
      },
      {
        question: "Is cyber security a good career option?",
        answer: "Yes, it offers high salary opportunities and strong demand globally."
      },
      {
        question: "What are the best jobs after cyber security degree?",
        answer: "Popular roles include cyber security analyst, ethical hacker, and network security engineer."
      },
      {
        question: "Can I do cyber security after 12th?",
        answer: "Yes, students from any stream can apply."
      }
    ]
  },
  {
    id: "bmlt-medical-lab-technology-kolkata",
    code: "BMLT",
    title: "BMLT – Bachelor of Medical Laboratory Technology",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bsc-in-medical-laboratory-technology-bmlt-banner.webp",
    ...buildProgramSectionImages("bsc-in-medical-laboratory-technology-bmlt"),
    description: "The BMLT / B.Sc. in Medical Laboratory Technology at IAER Kolkata is a career-focused undergraduate programme designed for students who want to work in the healthcare, diagnostic, and laboratory science sector.",
    longDescription: "The BMLT / B.Sc. in Medical Laboratory Technology at IAER Kolkata is a career-focused undergraduate programme designed for students who want to work in the healthcare, diagnostic, and laboratory science sector. IAER is recognized as one of the best medical laboratory technology colleges in Kolkata, offering a strong foundation in clinical diagnostics, pathology, and laboratory techniques.",
    seo: {
      title: "Best BMLT College in Kolkata | Medical Lab Technology Course IAER",
      description: "Apply for BMLT / B.Sc. Medical Lab Technology at IAER Kolkata. Top paramedical course with internship & 100% placement assistance. Admission open 2026.",
      url: "/programs/bmlt-medical-lab-technology-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (Science Stream with Biology preferred) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in hospitals, diagnostic labs, and healthcare organizations. Graduates can explore a wide range of roles, including some of the best medical lab jobs in Kolkata.",
      roles: [
        "Medical Laboratory Technician",
        "Lab Technologist",
        "Pathology Lab Technician",
        "Blood Bank Technician",
        "Clinical Lab Executive",
        "Diagnostic Lab Assistant",
        "Healthcare Technician",
        "Research Lab Assistant",
        "Quality Control Technician"
      ],
      sectors: [
        "Hospitals & Healthcare Chains",
        "Diagnostic & Pathology Labs",
        "Research Laboratories",
        "Public Health Organizations"
      ]
    },
    whyStudy: [
      "Industry-aligned BMLT curriculum",
      "Strong foundation in medical diagnostics and laboratory science",
      "Practical lab training and clinical exposure",
      "Internship opportunities in hospitals and diagnostic labs",
      "Exposure to modern diagnostic technologies",
      "Career-oriented training with placement support",
      "Pathway to higher studies (M.Sc. MLT / Healthcare specialization)"
    ],
    highlights: [
      "Industry-aligned BMLT curriculum",
      "Strong foundation in medical diagnostics and laboratory science",
      "Practical lab training and clinical exposure",
      "Internship opportunities in hospitals and diagnostic labs",
      "Exposure to modern diagnostic technologies",
      "Career-oriented training with placement support",
      "Pathway to higher studies (M.Sc. MLT / Healthcare specialization)"
    ],
    curriculum: {
      structure: [
        "Clinical Biochemistry",
        "Microbiology & Immunology",
        "Hematology",
        "Pathology & Histopathology",
        "Blood Banking & Transfusion Science",
        "Diagnostic Techniques & Laboratory Equipment",
        "Practical: Handling Diagnostic Equipment",
        "Practical: Sample Collection & Testing",
        "Practical: Blood Analysis & Clinical Testing",
        "Practical: Laboratory Safety & Protocols"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world clinical experience.",
      areas: [
        "Hospitals & Multi-Speciality Clinics",
        "Diagnostic Laboratories",
        "Pathology Labs",
        "Healthcare Centers"
      ],
      note: "Roles include Lab Technician Intern, Pathology Lab Intern, Blood Bank Assistant Intern, Diagnostic Lab Intern, and Clinical Lab Assistant."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Fully equipped medical laboratories",
      "Hospital training exposure",
      "Continuous practical assessments",
      "Career mentoring and placement preparation"
    ],
    faqs: [
      {
        question: "What is BMLT?",
        answer: "BMLT (Bachelor in Medical Laboratory Technology) is a professional undergraduate programme focused on laboratory diagnostics and clinical testing."
      },
      {
        question: "Which is the best BMLT college in Kolkata?",
        answer: "IAER is among the best medical laboratory technology colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is medical lab technology a good career option?",
        answer: "Yes, it offers stable and high-demand career opportunities in hospitals and diagnostic centers."
      },
      {
        question: "What are the best jobs after BMLT?",
        answer: "Popular roles include lab technician, pathology technician, blood bank technician, and clinical lab technologist."
      },
      {
        question: "Can I do BMLT after 12th?",
        answer: "Yes, students from the science stream (preferably with Biology) can apply."
      }
    ]
  },
  {
    id: "bsc-hospitality-hotel-management-kolkata",
    code: "BSCHHA",
    title: "B.Sc. in Hospitality & Hotel Administration (Hotel Management)",
    subtitle: "Undergraduate Degree I MAKAUT Affiliated I AICTE Approved",
    image: "/images/programs/bba-in-hotel-hospitality-administration-banner.webp",
    ...buildProgramSectionImages("bba-in-hotel-hospitality-administration"),
    description: "The B.Sc. in Hospitality & Hotel Administration at IAER Kolkata is a career-focused programme designed for students who want to build careers in the hospitality, hotel, tourism, and service industries.",
    longDescription: "The B.Sc. in Hospitality & Hotel Administration at IAER Kolkata is a career-focused programme designed for students who want to build careers in the hospitality, hotel, tourism, and service industries. IAER is recognized as one of the best hotel management colleges in Kolkata, offering a strong blend of practical training, industry exposure, and business management education.",
    seo: {
      title: "Best Hotel Management College in Kolkata | IHM IIHM GNIHM Alternative IAER",
      description: "Looking for IHM, IIHM or GNIHM alternative? Apply for B.Sc. Hospitality at IAER Kolkata with internship & 100% placement assistance.",
      url: "/programs/bsc-hospitality-hotel-management-kolkata"
    },
    overview: {
      duration: "4 Years Undergraduate Degree Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026."
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in leading hospitality brands and service organizations. Graduates can explore exciting roles, including some of the best hotel management jobs in Kolkata.",
      roles: [
        "Hotel Manager",
        "Front Office Executive",
        "Guest Relations Executive",
        "Food & Beverage Executive",
        "Restaurant Manager",
        "Housekeeping Manager",
        "Event Coordinator",
        "Cruise Line Staff",
        "International Hotel Chains",
        "Tourism & Travel Industry"
      ],
      sectors: [
        "Hotels & Resorts",
        "Airlines & Cruise Industry",
        "Tourism & Travel Companies",
        "Event & Luxury Service Industry"
      ]
    },
    whyStudy: [
      "Industry-aligned hospitality and hotel management curriculum",
      "Strong foundation in service and business management",
      "Practical training in hotel operations and service delivery",
      "Internship opportunities in hotels and hospitality brands",
      "Personality development and grooming training",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in Hospitality or Tourism"
    ],
    highlights: [
      "Industry-aligned hospitality and hotel management curriculum",
      "Strong foundation in service and business management",
      "Practical training in hotel operations and service delivery",
      "Internship opportunities in hotels and hospitality brands",
      "Personality development and grooming training",
      "Career-oriented training with placement support",
      "Pathway to MBA / PGDM in Hospitality or Tourism"
    ],
    curriculum: {
      structure: [
        "Front Office Operations",
        "Food & Beverage Service",
        "Housekeeping Management",
        "Hotel Operations & Administration",
        "Hospitality Marketing & Sales",
        "Event & Tourism Management",
        "Practical: Hotel Operations & Guest Services",
        "Practical: Restaurant & Food Service Management",
        "Practical: Event Planning & Coordination",
        "Practical: Customer Experience Management"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world experience in the hospitality sector.",
      areas: [
        "Hotels & Resorts",
        "Restaurant Chains",
        "Event Management Companies",
        "Travel & Tourism Organizations",
        "Cruise & Hospitality Services"
      ],
      note: "Roles include Hotel Operations Intern, Front Office Intern, Food & Beverage Service Intern, Housekeeping Intern, and Event Management Intern."
    },
    fees: {
      total: "₹4,12,000",
      afterScholarship: "₹3,62,000",
      notes: [
        "Scholarship : Avail ₹ 50,000 Scholarship , Last Date to apply 31st May 2026.",
        "Installment & EMI options available",
        "University examination fees (₹1,200 per semester) are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Fully equipped training kitchens & mock hotel setups",
      "Grooming, communication & personality development sessions",
      "Hands-on learning through practical training and simulations",
      "Industry-aligned projects and certifications"
    ],
    faqs: [
      {
        question: "Which is the best hotel management college in Kolkata?",
        answer: "IAER is among the best hotel management colleges in Kolkata, offering industry-oriented training, internships, and placement support."
      },
      {
        question: "How is IAER different from IHM, IIHM, or GNIHM?",
        answer: "IAER focuses on practical training, industry exposure, and affordability, making it a strong alternative to institutions like Institute of Hotel Management, International Institute of Hotel Management, and Guru Nanak Institute of Hotel Management."
      },
      {
        question: "Is hotel management a good career option?",
        answer: "Yes, it offers exciting career opportunities in hotels, tourism, airlines, and global hospitality sectors."
      },
      {
        question: "What are the best jobs after hotel management?",
        answer: "Popular roles include hotel manager, front office executive, food & beverage executive, and event manager."
      }
    ]
  },
  {
    id: "post-graduate-diploma-in-management-pgdm",
    code: "PGDM",
    title: "Post Graduate Diploma in Management (PGDM)",
    subtitle: "Postgraduate Program | Industry-Oriented | Career-Focused",
    image: "/images/programs/Post-Graduate-Diploma-in-Management.webp",
    ...buildProgramSectionImages("post-graduate-diploma-in-management-pgdm"),
    overview: {
      duration: "2 Years (4 Semesters)",
      eligibility: "Graduation in any discipline from a recognised university",
      mode: "On-Campus (Kolkata)",
      scholarship: "Merit-based & need-based assistance (as applicable)"
    },
    careerOutcomes: {
      description: "The PGDM program at IAER is designed to develop industry-ready managers and future business leaders. With a strong emphasis on practical learning, leadership development, and decision-making, the program prepares students for mid-level to senior management roles across industries. IAER provides structured corporate exposure and placement assistance through its Career Services Department.",
      roles: [
        "Marketing Manager",
        "Business Operations Manager",
        "Management Consultant",
        "Financial Analyst / Advisor",
        "HR Manager",
        "Strategy Analyst",
        "Business Development Manager",
        "Investment & Banking Executive",
        "Operations & Supply Chain Manager",
        "Entrepreneur / Business Owner"
      ],
      sectors: [
        "Corporate & Multinational Companies",
        "Consulting & Advisory Firms",
        "Banking, Finance & FinTech",
        "FMCG, Retail & E-commerce",
        "Manufacturing & Services",
        "Healthcare, Hospitality & IT",
        "Startups & Growth-stage Enterprises"
      ]
    },
    whyStudy: [
      "Industry-integrated PGDM curriculum focused on real-world management",
      "Strong emphasis on decision-making, leadership & strategy execution",
      "Case-based learning inspired by real corporate challenges",
      "Faculty with rich academic and corporate experience",
      "Corporate lectures, live projects & industry mentorship",
      "Dedicated placement preparation and career mentoring"
    ],
    highlights: [
      "Leadership development through role plays, simulations & management games",
      "Case study methodology for analytical and strategic thinking",
      "Group discussions and debates to enhance communication skills",
      "Live industry projects and corporate internships",
      "Outbound training for personality and team-building skills",
      "Exposure to CXO talks, corporate meets & CEO lecture series"
    ],
    curriculum: {
      coreAreas: [
        "Marketing Management",
        "Financial Management & Accounting",
        "Human Resource Management",
        "Operations & Supply Chain Management",
        "Business Strategy & Analytics",
        "Managerial Economics",
        "Organizational Behaviour",
        "Business Law & Ethics"
      ],
      pedagogy: [
        "Case studies",
        "Role plays & simulations",
        "Group discussions",
        "Management games",
        "Live projects & internships"
      ]
    },
    internships: {
      description: "Students undergo mandatory corporate internships and participate in:",
      areas: [
        "Live consulting projects",
        "Corporate case competitions",
        "Industry visits and workshops",
        "CXO interaction sessions"
      ],
      note: "These experiences ensure practical exposure and corporate readiness."
    },
    fees: {
      total: "₹5,45,000",
      notes: [
        "Year-wise Payment Option Available",
        "EMI & financial assistance options available",
        "University or examination-related charges, if applicable, are payable separately."
      ]
    },
    admission: [
      "Online application submission",
      "Academic document verification",
      "Personal interaction (if applicable)",
      "Admission confirmation & fee payment"
    ],
    studentExperience: [
      "Interactive classrooms and corporate-style learning",
      "Leadership labs and skill-building workshops",
      "Continuous assessment and mentoring",
      "Strong alumni and recruiter network"
    ]
  },
  {
    id: "mba-college-kolkata",
    code: "MBA",
    title: "MBA (Master of Business Administration)",
    subtitle: "Postgraduate Degree | MAKAUT-Affiliated | UGC-Recognised",
    image: "/images/programs/MBA-Global.webp",
    ...buildProgramSectionImages("master-of-business-administration-mba"),
    description: "The MBA programme at IAER Kolkata is designed for students who want to build successful careers in business management, corporate leadership, and high-growth industries.",
    longDescription: "The MBA programme at IAER Kolkata is designed for students who want to build successful careers in business management, corporate leadership, and high-growth industries. IAER is emerging as one of the best MBA colleges in Kolkata, offering a perfect combination of industry-oriented curriculum, practical training, and placement support.",
    seo: {
      title: "Best MBA College in Kolkata | MBA Admission 2026 | Low Fees & Placement IAER",
      description: "Apply for MBA in Kolkata at IAER. Top MBA college with low fees, specialization, internship & 100% placement assistance. Admission open 2026.",
      url: "/programs/mba-college-kolkata"
    },
    overview: {
      duration: "2 Years Full-Time Postgraduate Programme",
      eligibility: "Graduates from any recognized university (any stream) are eligible to apply. Final-year students can also apply for MBA admission in Kolkata 2026.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Affordable MBA Programme in Kolkata with Scholarship & EMI Options"
    },
    careerOutcomes: {
      description: "Graduates can explore some of the best MBA jobs in Kolkata, including corporate careers, management roles, and high-growth opportunities. IAER offers 100% placement assistance through its Career Services Department.",
      roles: [
        "Business Analyst",
        "Marketing Manager",
        "Financial Analyst",
        "HR Manager",
        "Management Trainee",
        "Operations Manager",
        "Sales Manager",
        "Business Development Manager",
        "Entrepreneur / Startup Founder"
      ],
      sectors: [
        "Corporate Companies",
        "Banking & Financial Sector",
        "Consulting Firms",
        "E-commerce & Startups",
        "Healthcare & Analytics Industries"
      ]
    },
    whyStudy: [
      "Industry-aligned MBA curriculum",
      "Specialization-based career training",
      "Practical learning with real-world projects",
      "Internship opportunities in corporate sectors",
      "Personality development & leadership training",
      "Strong industry interaction and expert sessions"
    ],
    highlights: [
      "Industry-oriented specializations: Marketing, Finance, HR, Business Analytics, Hospital Management, AI & Data Science",
      "Hands-on experience through live projects and industry assignments",
      "Case studies and business simulations for practical learning",
      "Leadership and team management training",
      "Communication and presentation skills development",
      "Affordable fee structure with strong placement assistance"
    ],
    curriculum: {
      specializations: [
        "MBA in Marketing",
        "MBA in Finance",
        "MBA in Human Resource (HR)",
        "MBA in Business Analytics",
        "MBA in Hospital Management",
        "MBA in AI & Data Science"
      ],
      teachingMethodology: [
        "Case studies",
        "Live projects & industry assignments",
        "Business simulations",
        "Leadership workshops",
        "Corporate guest lectures"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain practical exposure before placement.",
      areas: [
        "Corporate Companies",
        "Marketing & Sales Organizations",
        "Financial Institutions",
        "Consulting Firms",
        "Startups & Enterprises"
      ],
      note: "Roles include Business Analyst Intern, Marketing Intern, Financial Analyst Intern, HR Intern, and Operations Intern."
    },
    fees: {
      total: "₹5,95,000",
      afterScholarship: "₹5,45,000",
      notes: [
        "Total Programme Fee: ₹5,95,000. ₹5,45,000",
        "Scholarship & EMI Options Available",
        "Designed for students looking for a low cost MBA college in Kolkata with placement."
      ]
    },
    admission: [
      "Online application submission",
      "Academic document verification",
      "MBA admission without entrance exam based on eligibility",
      "Personal interaction & selection process",
      "Admission confirmation & fee payment"
    ],
    studentExperience: [
      "Corporate-style learning environment",
      "Leadership labs and professional skill workshops",
      "Continuous assessment and mentoring",
      "Industry networking and placement drives",
      "Strong alumni and recruiter network"
    ],
    faqs: [
      {
        question: "What is MBA?",
        answer: "MBA (Master of Business Administration) is a postgraduate degree focused on business management, leadership, and corporate skills."
      },
      {
        question: "Which is the best MBA college in Kolkata?",
        answer: "IAER is among the best MBA colleges in Kolkata, offering strong placement support and industry-oriented training."
      },
      {
        question: "Can I do MBA without entrance exam in Kolkata?",
        answer: "Yes, IAER offers MBA admission without entrance exam in Kolkata based on eligibility and selection process."
      },
      {
        question: "What are the best MBA jobs in Kolkata?",
        answer: "Top roles include business analyst, marketing manager, HR manager, and operations manager."
      },
      {
        question: "What is the MBA course fees in Kolkata?",
        answer: "MBA fees vary across colleges, but IAER offers an affordable MBA course in Kolkata with scholarship options."
      }
    ]
  },
  {
    id: "pgdm-in-ai-and-data-science",
    code: "PGDM-AIADS",
    title: "PGDM in AI & Data Science (PGDM–AIADS)",
    subtitle: "Postgraduate Diploma | Industry-Integrated | Future-Tech Focused",
    image: "/images/programs/PGDM-in-AI-Data-Science.webp",
    ...buildProgramSectionImages("pgdm-in-ai-and-data-science"),
    overview: {
      duration: "2 Years (4 Semesters)",
      eligibility: "Graduation in any discipline from a recognised university",
      mode: "On-Campus (Kolkata)",
      scholarship: "Merit-based & need-based assistance (as applicable)",
      internship: "Mandatory Industry Internship"
    },
    careerOutcomes: {
      description: "The PGDM in AI & Data Science at IAER is designed to create professionals who can translate data and artificial intelligence into business value. The program blends management fundamentals with advanced AI, analytics, and data-driven decision-making. IAER provides structured training and 100% placement assistance through its Career Services Department.",
      roles: [
        "Data Scientist",
        "AI Business Analyst",
        "Machine Learning Consultant",
        "Analytics Manager",
        "Data Strategy Consultant",
        "AI Product Manager",
        "Business Intelligence Lead",
        "Risk & Predictive Analytics Specialist"
      ],
      sectors: [
        "AI & Analytics Firms",
        "IT & Software Companies",
        "Banking, Finance & FinTech",
        "Healthcare & Life Sciences",
        "E-commerce & Digital Platforms",
        "Consulting & Research Organizations",
        "Startups & Product-Based Companies"
      ]
    },
    whyStudy: [
      "Industry-aligned curriculum combining AI, analytics, and management",
      "Strong focus on business applications of AI and data science",
      "Hands-on learning with real datasets and live projects",
      "Training in Python, SQL, Machine Learning & BI tools",
      "Faculty with experience in AI, analytics, and industry consulting",
      "Dedicated career mentoring and placement preparation"
    ],
    highlights: [
      "End-to-end exposure to AI, Machine Learning & Data Analytics",
      "Business-focused approach to predictive modelling & decision science",
      "Advanced training in data visualization and storytelling",
      "Industry case studies and analytics simulations",
      "Corporate lectures, workshops, and hackathon-style learning",
      "Internship-driven skill application"
    ],
    curriculum: {
      coreAreas: [
        "Business Statistics & Analytics",
        "Python & SQL for Data Science",
        "Machine Learning Algorithms",
        "Artificial Intelligence for Business",
        "Big Data & Cloud Analytics",
        "Data Visualization (Power BI / Tableau)",
        "Predictive & Prescriptive Analytics",
        "AI Ethics, Governance & Compliance"
      ],
      pedagogy: [
        "Case studies",
        "Live analytics projects",
        "Simulations & labs",
        "Industry workshops",
        "Internship & capstone project"
      ]
    },
    internships: {
      description: "Students complete mandatory internships in:",
      areas: [
        "AI & analytics consulting firms",
        "Corporate analytics & BI teams",
        "FinTech, healthcare & e-commerce analytics units",
        "Startup data science teams"
      ],
      note: "These internships ensure practical experience and job readiness."
    },
    fees: {
      total: "₹5,45,000",
      notes: [
        "Installment & EMI options available",
        "Scholarship support as per eligibility",
        "Any university or examination-related charges are payable separately."
      ]
    },
    admission: [
      "Online application",
      "Academic document verification",
      "Personal interaction (if applicable)",
      "Admission confirmation & fee payment"
    ],
    studentExperience: [
      "Dedicated analytics labs",
      "Industry datasets and tools access",
      "Mentorship by analytics professionals",
      "Career grooming and placement readiness programs"
    ]
  },
  {
    id: "pgdm-ba",
    code: "PGDM-BA",
    title: "PGDM in Business Analytics (PGDM–BA)",
    subtitle: "Postgraduate Diploma | Data-Driven Management | Industry-Focused",
    image: "/images/programs/PGDM-in-Business-Analytics.webp",
    ...buildProgramSectionImages("pgdm-ba"),
    overview: {
      duration: "2 Years (4 Semesters)",
      eligibility: "Graduation in any discipline from a recognised university",
      mode: "On-Campus (Kolkata)",
      scholarship: "Merit-based & need-based assistance (as applicable)",
      internship: "Mandatory Industry Internship"
    },
    careerOutcomes: {
      description: "The PGDM in Business Analytics program at IAER is designed to create professionals who can convert business data into strategic insights. The course focuses on analytics-driven decision-making across marketing, finance, operations, and strategy domains. IAER provides structured training and 100% placement assistance through its Career Services Department.",
      roles: [
        "Business Analyst",
        "Analytics Consultant",
        "Strategy Analyst",
        "Business Intelligence Manager",
        "Market Research Analyst",
        "Operations Analytics Manager",
        "Data-Driven Product Manager",
        "Risk & Decision Analyst"
      ],
      sectors: [
        "Consulting & Advisory Firms",
        "IT & Analytics Companies",
        "Banking, Finance & Insurance",
        "FMCG, Retail & E-commerce",
        "Manufacturing & Operations",
        "Healthcare & Services",
        "Startups & Product Companies"
      ]
    },
    whyStudy: [
      "Industry-aligned curriculum focused on managerial analytics",
      "Strong emphasis on data-driven business decision-making",
      "Training in BI tools, statistical analysis & predictive modelling",
      "Hands-on learning through live business datasets",
      "Faculty with analytics consulting and corporate experience",
      "Career mentoring and placement readiness programs"
    ],
    highlights: [
      "End-to-end training in Business Intelligence & Analytics",
      "Exposure to Power BI, Tableau, Excel & SQL",
      "Predictive and prescriptive analytics for business strategy",
      "Case-based learning using real corporate scenarios",
      "Consulting-style projects and analytics simulations",
      "Internship-driven learning for real-world application"
    ],
    curriculum: {
      coreAreas: [
        "Business Statistics & Decision Science",
        "Data Visualization & Storytelling",
        "SQL & Database Management",
        "Predictive Analytics & Modelling",
        "Marketing, Finance & Operations Analytics",
        "Strategy & Consulting Analytics",
        "Risk Analysis & Forecasting"
      ],
      pedagogy: [
        "Case studies",
        "Live analytics projects",
        "BI tool labs",
        "Industry workshops",
        "Internship & capstone project"
      ]
    },
    internships: {
      description: "Students complete mandatory internships in:",
      areas: [
        "Analytics & consulting firms",
        "Corporate strategy & BI teams",
        "Market research & intelligence units",
        "Finance & operations analytics teams"
      ],
      note: "These internships ensure hands-on exposure and employability."
    },
    fees: {
      total: "₹5,45,000",
      notes: [
        "Installment & EMI options available",
        "Scholarship support as per eligibility"
      ]
    },
    admission: [
      "Online application",
      "Academic document verification",
      "Personal interaction (if applicable)",
      "Admission confirmation & enrollment"
    ],
    studentExperience: [
      "Analytics-focused classrooms and labs",
      "Industry datasets and BI tools access",
      "Mentorship by analytics professionals",
      "Career grooming and placement preparation"
    ]
  },
  {
    id: "pgdm-in-fintech",
    code: "PGDM-FT",
    title: "PGDM in FinTech (PGDM–FT)",
    subtitle: "Postgraduate Diploma | Digital Finance | Industry-Integrated",
    image: "/images/programs/PGDM-in-Fintech.webp",
    ...buildProgramSectionImages("pgdm-in-fintech"),
    overview: {
      duration: "2 Years (4 Semesters)",
      eligibility: "Graduation in any discipline from a recognised university",
      mode: "On-Campus (Kolkata)",
      scholarship: "Merit-based & need-based assistance (as applicable)",
      internship: "Mandatory Industry Internship"
    },
    careerOutcomes: {
      description: "The PGDM in FinTech program at IAER is designed to prepare professionals for the rapidly evolving digital finance, banking, and financial technology ecosystem. The program combines core management education with deep exposure to financial technologies, analytics, and regulatory frameworks. IAER provides structured training and 100% placement assistance through its Career Services Department.",
      roles: [
        "FinTech Consultant",
        "Digital Banking Manager",
        "Financial Data Analyst",
        "Risk & Compliance Analyst",
        "Payments & Digital Wallet Product Executive",
        "Blockchain & Crypto Operations Analyst",
        "Financial Product Manager",
        "Regulatory Technology (RegTech) Specialist"
      ],
      sectors: [
        "FinTech & Digital Payments Companies",
        "Banks & NBFCs",
        "Financial Services & Insurance Firms",
        "Blockchain & Web3 Startups",
        "Consulting & Advisory Firms",
        "E-commerce & Digital Platforms",
        "Financial Technology Product Companies"
      ]
    },
    whyStudy: [
      "Industry-aligned curriculum focused on digital finance and innovation",
      "Strong foundation in banking, finance & financial analytics",
      "Exposure to FinTech platforms, payment systems & digital lending",
      "Training in blockchain, AI in finance & risk management",
      "Faculty with experience in finance, banking & FinTech consulting",
      "Dedicated career mentoring and placement preparation"
    ],
    highlights: [
      "End-to-end understanding of FinTech ecosystems & digital finance",
      "Hands-on exposure to digital payments, wallets & banking platforms",
      "Practical insights into blockchain, cryptocurrencies & smart contracts",
      "Training in financial analytics & risk assessment tools",
      "Regulatory compliance, cyber security & data protection in finance",
      "Internship-driven learning for real-world exposure"
    ],
    curriculum: {
      coreAreas: [
        "Financial Management & Banking Systems",
        "FinTech Ecosystems & Digital Payments",
        "Blockchain Technology & Applications",
        "Financial Analytics & Risk Management",
        "AI & Automation in Finance",
        "Cyber Security & Compliance in Financial Systems",
        "RegTech & Financial Regulations"
      ],
      pedagogy: [
        "Case studies",
        "Live FinTech projects",
        "Simulations & tool-based labs",
        "Industry workshops",
        "Internship & capstone project"
      ]
    },
    internships: {
      description: "Students complete mandatory internships in:",
      areas: [
        "FinTech startups and digital banks",
        "Payment gateways & wallet companies",
        "Financial analytics & risk teams",
        "Consulting & advisory firms"
      ],
      note: "These internships ensure practical skills and industry readiness."
    },
    fees: {
      total: "₹5,45,000",
      notes: [
        "Installment & EMI options available",
        "Scholarship support as per eligibility"
      ]
    },
    admission: [
      "Online application",
      "Academic document verification",
      "Personal interaction (if applicable)",
      "Admission confirmation & enrollment"
    ],
    studentExperience: [
      "FinTech-focused learning environment",
      "Exposure to live financial platforms & tools",
      "Industry expert sessions and mentoring",
      "Career grooming and placement support"
    ]
  },
  {
    id: "pgdm-in-hospital-management-health-administration",
    code: "PGDM-HMHA",
    title: "PGDM in Hospital Management & Health Administration (PGDM–HMHA)",
    subtitle: "Postgraduate Diploma | Healthcare Leadership | Industry-Integrated",
    image: "/images/programs/PGDM-in-Hospital-Management-Health.webp",
    ...buildProgramSectionImages("pgdm-in-hospital-management-health-administration", {
      overviewImage: "/images/programs/PGDM-in-Hospital-Management-Health.webp",
      curriculumImage: "/images/programs/PGDM-in-Hospital-Management-Health.webp",
      careersImage: "/images/programs/PGDM-in-Hospital-Management-Health.webp",
    }),
    overview: {
      duration: "2 Years (4 Semesters)",
      eligibility: "Graduation in any discipline from a recognised university",
      mode: "On-Campus (Kolkata)",
      scholarship: "Merit-based & need-based assistance (as applicable)",
      internship: "Mandatory Hospital / Healthcare Internship"
    },
    careerOutcomes: {
      description: "The PGDM in Hospital Management & Health Administration at IAER prepares professionals to manage the business, operations, and quality systems of modern healthcare organizations. The program blends management principles with healthcare-specific knowledge to develop leaders for hospitals, health systems, and allied services. IAER provides structured internships and 100% placement assistance through its Career Services Department.",
      roles: [
        "Hospital Administrator / Manager",
        "Healthcare Operations Manager",
        "Clinical Services Manager",
        "Patient Experience & Services Head",
        "Quality & Accreditation Manager (NABH)",
        "Health Information Systems Manager",
        "Medical Practice Manager",
        "Healthcare Consultant",
        "Insurance & TPA Operations Manager",
        "Public Health Program Manager"
      ],
      sectors: [
        "Multi-specialty & Super-specialty Hospitals",
        "Hospital Chains & Corporate Healthcare Groups",
        "Diagnostic & Day-care Centres",
        "Health Insurance Companies & TPAs",
        "Public Health & Government Healthcare Agencies",
        "Healthcare Consulting Firms",
        "Medical Tourism & Healthcare Startups"
      ]
    },
    whyStudy: [
      "Industry-aligned curriculum focused on hospital & healthcare management",
      "Strong emphasis on operations, quality, compliance & patient safety",
      "Exposure to hospital workflows, clinical coordination & health systems",
      "Faculty with healthcare administration and industry experience",
      "Practical learning through hospital internships and live projects",
      "Dedicated career mentoring and placement preparation"
    ],
    highlights: [
      "Comprehensive understanding of hospital operations & administration",
      "Training in healthcare finance, HR & supply chain management",
      "Focus on quality management, NABH standards & patient safety",
      "Exposure to health information systems & digital health",
      "Industry expert sessions, hospital visits & case studies",
      "Internship-driven learning for real-world healthcare leadership"
    ],
    curriculum: {
      coreAreas: [
        "Hospital Operations & Administration",
        "Healthcare Finance & Cost Management",
        "Healthcare Human Resource Management",
        "Quality Management & NABH Accreditation",
        "Health Information Systems & Digital Health",
        "Medical Ethics, Laws & Regulatory Framework",
        "Public Health & Healthcare Planning",
        "Healthcare Marketing & Patient Experience"
      ],
      pedagogy: [
        "Case studies",
        "Hospital-based projects",
        "Simulations & role plays",
        "Industry workshops",
        "Internship & capstone project"
      ]
    },
    internships: {
      description: "Students complete mandatory internships in:",
      areas: [
        "Corporate and multi-specialty hospitals",
        "Hospital administration & operations departments",
        "Healthcare consulting & insurance firms",
        "Public health organizations"
      ],
      note: "These internships ensure hands-on exposure, operational clarity, and employability."
    },
    fees: {
      total: "₹5,45,000",
      notes: [
        "Installment & EMI options available",
        "Scholarship support as per eligibility",
        "Any university or examination-related charges are payable separately, as applicable."
      ]
    },
    admission: [
      "Online application",
      "Academic document verification",
      "Personal interaction (if applicable)",
      "Admission confirmation & enrollment"
    ],
    studentExperience: [
      "Healthcare-focused classrooms and case-based learning",
      "Hospital exposure and operational training",
      "Continuous assessment and mentoring",
      "Strong hospital and healthcare recruiter network"
    ]
  },
  {
    id: "mha-hospital-management-kolkata",
    code: "MHA",
    title: "Master of Hospital Administration (MHA)",
    subtitle: "Postgraduate Degree Programme | MAKAUT Affiliated",
    image: "/images/programs/master-of-hospital-administration-banner.webp",
    ...buildProgramSectionImages("master-of-hospital-administration"),
    description: "The Master of Hospital Administration (MHA) at IAER Kolkata is a specialized postgraduate programme designed for students and professionals who want to build leadership careers in the healthcare and hospital management sector.",
    longDescription: "The Master of Hospital Administration (MHA) at IAER Kolkata is a specialized postgraduate programme designed for students and professionals who want to build leadership careers in the healthcare and hospital management sector. IAER is emerging as one of the best MHA colleges in Kolkata, offering advanced training in hospital administration, healthcare systems, and medical operations management.",
    seo: {
      title: "Best MHA College in Kolkata | Master of Hospital Administration IAER",
      description: "Apply for MHA at IAER Kolkata. Top hospital management PG course with internship & 100% placement assistance. Admission open 2026.",
      url: "/programs/mha-hospital-management-kolkata"
    },
    overview: {
      duration: "2 Years Postgraduate Degree Programme",
      eligibility: "Graduates from any recognized university (preferably in healthcare, life sciences, management, or allied fields) are eligible to apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Scholarship Opportunities Available"
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure managerial and administrative roles in leading healthcare organizations. Graduates can explore high-growth roles, including some of the best hospital management jobs in Kolkata.",
      roles: [
        "Hospital Administrator",
        "Healthcare Manager",
        "Operations Manager (Hospital)",
        "Medical Superintendent (with experience)",
        "Patient Care Manager",
        "Healthcare Consultant",
        "Quality & Compliance Executive",
        "Healthcare Policy & Administration",
        "Hospital Planning & Development"
      ],
      sectors: [
        "Hospitals & Healthcare Chains",
        "Corporate Healthcare Organizations",
        "NGO & Public Health Sector",
        "Health Insurance & Consulting Firms"
      ]
    },
    whyStudy: [
      "Industry-aligned MHA curriculum",
      "Strong focus on hospital administration and healthcare systems",
      "Practical exposure through hospital training and projects",
      "Internship opportunities in hospitals and healthcare institutions",
      "Leadership and management skill development",
      "Career-oriented training with placement support"
    ],
    highlights: [
      "Industry-aligned MHA curriculum",
      "Strong focus on hospital administration and healthcare systems",
      "Practical exposure through hospital training and projects",
      "Internship opportunities in hospitals and healthcare institutions",
      "Leadership and management skill development",
      "Career-oriented training with placement support"
    ],
    curriculum: {
      structure: [
        "Hospital Planning & Administration",
        "Healthcare Systems & Policy",
        "Hospital Operations Management",
        "Healthcare Finance & Budgeting",
        "Medical Ethics & Legal Aspects",
        "Quality Management & Accreditation (NABH)",
        "Health Information Systems",
        "Practical: Hospital Workflow & Operations",
        "Practical: Patient Care & Service Management",
        "Practical: Healthcare Administration Systems",
        "Practical: Quality & Safety Standards in Hospitals"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain hands-on experience in healthcare environments.",
      areas: [
        "Multi-Speciality Hospitals",
        "Healthcare Chains",
        "Clinics & Diagnostic Centers",
        "Healthcare Consulting Firms"
      ],
      note: "Roles include Hospital Administration Intern, Operations Management Intern, Patient Care Coordinator Intern, and Healthcare Executive Intern."
    },
    fees: {
      total: "₹2,90,000",
      afterScholarship: "₹2,40,000",
      notes: [
        "Total Programme Fee: ₹ 2,90,000. ₹ 2,40,000.",
        "Installment & EMI options available",
        "University examination fees are payable separately as per MAKAUT norms."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Healthcare-focused classrooms and case-based learning",
      "Hospital exposure and operational training",
      "Hands-on learning through case studies and hospital visits",
      "Mentorship by healthcare administration professionals"
    ],
    faqs: [
      {
        question: "What is MHA (Master of Hospital Administration)?",
        answer: "It is a postgraduate degree focused on hospital management, healthcare systems, and administration."
      },
      {
        question: "Which is the best MHA college in Kolkata?",
        answer: "IAER is among the best MHA colleges in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is MHA a good career option?",
        answer: "Yes, it offers excellent career growth in hospital administration and healthcare management roles."
      },
      {
        question: "What are the best jobs after MHA?",
        answer: "Top roles include hospital administrator, healthcare manager, operations manager, and consultant."
      },
      {
        question: "Who can apply for MHA?",
        answer: "Graduates from any stream (preferably healthcare or management) can apply."
      }
    ]
  },
  {
    id: "dmlt-course-kolkata",
    code: "DMLT",
    title: "Diploma in Medical Laboratory Technology (DMLT)",
    subtitle: "2 Years Diploma Programme I Industry-Aligned",
    image: "/images/programs/diploma-in-medical-laboratory-technology-banner.webp",
    ...buildProgramSectionImages("diploma-in-medical-laboratory-technology"),
    description: "The Diploma in Medical Laboratory Technology (DMLT) at IAER Kolkata is a job-oriented programme designed for students who want to build careers in the healthcare, diagnostic, and laboratory sector.",
    longDescription: "The Diploma in Medical Laboratory Technology (DMLT) at IAER Kolkata is a job-oriented programme designed for students who want to build careers in the healthcare, diagnostic, and laboratory sector. IAER is recognized as one of the best DMLT colleges in Kolkata, offering a strong foundation in clinical diagnostics, pathology, and laboratory techniques.",
    seo: {
      title: "Best DMLT College in Kolkata | Medical Lab Technician Course IAER",
      description: "Apply for DMLT in Kolkata at IAER. Top paramedical course with internship & 100% placement assistance. Admission open 2026.",
      url: "/programs/dmlt-course-kolkata"
    },
    overview: {
      duration: "2 Years Diploma Programme",
      eligibility: "Students who have completed 10+2 (Science preferred – Biology) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Affordable Fees with Scholarship Opportunities"
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure jobs in healthcare organizations. Graduates can explore some of the best DMLT jobs in Kolkata.",
      roles: [
        "Medical Lab Technician",
        "Lab Assistant",
        "Pathology Technician",
        "Blood Collection Technician",
        "Diagnostic Lab Executive",
        "Clinical Lab Assistant"
      ],
      sectors: [
        "Hospitals & Healthcare Chains",
        "Diagnostic & Pathology Labs",
        "Clinics & Nursing Homes",
        "Research Labs"
      ]
    },
    whyStudy: [
      "Industry-aligned DMLT curriculum",
      "Strong foundation in medical diagnostics",
      "Practical lab training and clinical exposure",
      "Internship opportunities in hospitals and labs",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    highlights: [
      "Industry-aligned DMLT curriculum",
      "Strong foundation in medical diagnostics",
      "Practical lab training and clinical exposure",
      "Internship opportunities in hospitals and labs",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    curriculum: {
      structure: [
        "Clinical Biochemistry",
        "Microbiology",
        "Hematology",
        "Pathology",
        "Blood Collection & Testing",
        "Laboratory Equipment Handling",
        "Practical: Sample Collection & Testing",
        "Practical: Blood Analysis & Diagnostic Procedures",
        "Practical: Lab Safety & Hygiene Protocols",
        "Practical: Handling Modern Diagnostic Equipment"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world healthcare experience.",
      areas: [
        "Hospitals & Clinics",
        "Diagnostic Laboratories",
        "Pathology Labs",
        "Healthcare Centers"
      ],
      note: "Roles include Lab Technician Intern, Pathology Lab Assistant, Blood Collection Technician, and Diagnostic Lab Intern."
    },
    fees: {
      total: "₹1,20,000",
      afterScholarship: "₹99,000",
      notes: [
        "Total Programme Fee: ₹ 1,20,000. ₹ 99,000",
        "Affordable Fees with Scholarship Opportunities",
        "Installment & EMI options available"
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Hands-on laboratory training",
      "Hospital visits and clinical exposure",
      "Real-world diagnostic procedures",
      "Career guidance and placement preparation"
    ],
    faqs: [
      {
        question: "What is DMLT?",
        answer: "DMLT (Diploma in Medical Laboratory Technology) is a paramedical course focused on diagnostic testing and laboratory techniques."
      },
      {
        question: "Which is the best DMLT college in Kolkata?",
        answer: "IAER is among the best DMLT colleges in Kolkata, offering practical training and placement support."
      },
      {
        question: "Is DMLT a good career option?",
        answer: "Yes, it offers quick job opportunities in hospitals and diagnostic labs."
      },
      {
        question: "What are the best jobs after DMLT?",
        answer: "Popular roles include lab technician, pathology assistant, and diagnostic lab technician."
      },
      {
        question: "Can I do DMLT after 12th?",
        answer: "Yes, students from the science stream (preferably Biology) can apply."
      }
    ]
  },
  {
    id: "software-development-course-kolkata",
    code: "ACSD",
    title: "Advanced Certification in Software Development",
    subtitle: "6 Months Certification Programme I Job-Oriented",
    image: "/images/programs/advanced-certification-in-software-development-banner.webp",
    ...buildProgramSectionImages("advanced-certification-in-software-development"),
    description: "The Advanced Certification in Software Development at IAER Kolkata is a career-focused programme designed for students who want to build careers in the IT industry, software development, web development, and tech-driven roles.",
    longDescription: "The Advanced Certification in Software Development at IAER Kolkata is a career-focused programme designed for students who want to build careers in the IT industry, software development, web development, and tech-driven roles. IAER is emerging as one of the best software development institutes in Kolkata, offering practical training in programming, web technologies, and application development.",
    seo: {
      title: "Best Software Development Course in Kolkata | Coding Course IAER",
      description: "Join Advanced Software Development Certification at IAER Kolkata. Learn coding, web development & get placement assistance. Apply now.",
      url: "/programs/software-development-course-kolkata"
    },
    overview: {
      duration: "6 Months Certification Programme",
      eligibility: "10+2 Pass (Any Stream) or Graduate",
      mode: "On-Campus (Kolkata)",
      scholarship: "Affordable Fees with Flexible Payment Options"
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in leading IT companies. Graduates can explore some of the best software development jobs in Kolkata.",
      roles: [
        "Software Developer",
        "Web Developer",
        "Application Developer",
        "Frontend / Backend Developer",
        "Technical Support Engineer",
        "QA Tester",
        "IT Executive"
      ],
      sectors: [
        "IT & Software Companies",
        "Startups & Tech Firms",
        "E-commerce & Digital Platforms",
        "Freelancing & Remote Work"
      ]
    },
    whyStudy: [
      "Industry-aligned software development curriculum",
      "Strong foundation in programming and web technologies",
      "Practical training through projects and coding labs",
      "Exposure to real-world development tools",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    highlights: [
      "Industry-aligned software development curriculum",
      "Strong foundation in programming and web technologies",
      "Practical training through projects and coding labs",
      "Exposure to real-world development tools",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    curriculum: {
      structure: [
        "Programming Languages (Python, Java, C++)",
        "Web Development (HTML, CSS, JavaScript)",
        "Frontend & Backend Development",
        "Database Management (SQL)",
        "Software Development Life Cycle (SDLC)",
        "Basics of App Development",
        "Practical: Building Websites & Applications",
        "Practical: Developing Software Projects",
        "Practical: Debugging & Testing Code",
        "Practical: Working on Live Development Scenarios"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world exposure in the tech industry.",
      areas: [
        "IT Companies & Software Firms",
        "Web Development Agencies",
        "Startups & Tech Companies",
        "Digital & IT Service Providers"
      ],
      note: "Roles include Software Developer Intern, Web Developer Intern, Frontend / Backend Developer Intern, QA & Testing Intern, and IT Support Intern."
    },
    fees: {
      total: "₹60,000",
      afterScholarship: "₹35,000",
      notes: [
        "Total Programme Fee: ₹60,000. ₹ 35,000",
        "Affordable Fees with Flexible Payment Options",
        "Ideal for students looking for a low cost coding course in Kolkata with placement."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Hands-on learning through real-world projects",
      "Coding practice in modern labs",
      "Project-based training and debugging sessions",
      "Career guidance and placement preparation"
    ],
    faqs: [
      {
        question: "What is software development certification?",
        answer: "It is a professional course focused on programming, coding, and building software applications."
      },
      {
        question: "Which is the best coding institute in Kolkata?",
        answer: "IAER is among the best software development institutes in Kolkata, offering practical training and placement support."
      },
      {
        question: "Is software development a good career option?",
        answer: "Yes, it offers high salary opportunities and strong career growth in the IT industry."
      },
      {
        question: "What are the best jobs after software development course?",
        answer: "Popular roles include software developer, web developer, and application developer."
      },
      {
        question: "Can I learn coding after 12th?",
        answer: "Yes, students from any stream can enroll in this course."
      }
    ]
  },
  {
    id: "cabin-crew-training-kolkata",
    code: "ACAC",
    title: "Advanced Certification in Airline Cabin Crew",
    subtitle: "6 Months Certification Programme I Airline-Integrated",
    image: "/images/programs/advanced-certification-in-aviation-cabin-crew-banner.JPG",
    ...buildProgramSectionImages("advanced-certification-in-aviation-cabin-crew", {
      overviewImage: "/images/programs/advanced-certification-in-aviation-cabin-crew-overview.JPG",
      curriculumImage: "/images/programs/advanced-certification-in-aviation-cabin-crew-curriculum.JPG",
      careersImage: "/images/programs/advanced-certification-in-aviation-cabin-crew-careers.webp",
    }),
    description: "The Advanced Certification in Airline Cabin Crew at IAER Kolkata is a specialized programme designed for students who want to build careers as air hostesses, flight stewards, and airline cabin crew professionals.",
    longDescription: "The Advanced Certification in Airline Cabin Crew at IAER Kolkata is a specialized programme designed for students who want to build careers as air hostesses, flight stewards, and airline cabin crew professionals. IAER is emerging as one of the best cabin crew training institutes in Kolkata, offering industry-oriented training in aviation service, in-flight operations, and passenger handling.",
    seo: {
      title: "Best Cabin Crew Training Institute in Kolkata | Air Hostess Course IAER",
      description: "Join Advanced Cabin Crew Certification at IAER Kolkata. Top air hostess training with grooming, placement & airline career support. Apply now.",
      url: "/programs/cabin-crew-training-kolkata"
    },
    overview: {
      duration: "6 Months Certification Programme",
      eligibility: "10+2 Pass (Any Stream) from a recognized board, Good communication skills and personality, Passion for aviation and customer service",
      mode: "On-Campus (Kolkata)",
      scholarship: "Affordable Fees with Flexible Payment Options"
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in airlines and aviation service companies. Graduates can explore some of the best cabin crew jobs in Kolkata and India.",
      roles: [
        "Cabin Crew (Air Hostess / Flight Steward)",
        "Airline Customer Service Executive",
        "Ground Staff",
        "Airport Customer Service Executive",
        "Passenger Handling Executive",
        "Hospitality & Luxury Service Roles"
      ],
      sectors: [
        "Domestic & International Airlines",
        "Airport Services & Ground Handling",
        "Hospitality & Luxury Service Industry"
      ]
    },
    whyStudy: [
      "Industry-aligned cabin crew training curriculum",
      "Focus on airline service and safety procedures",
      "Practical training through simulations",
      "Personality development and grooming sessions",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    highlights: [
      "Industry-aligned cabin crew training curriculum",
      "Focus on airline service and safety procedures",
      "Practical training through simulations",
      "Personality development and grooming sessions",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    curriculum: {
      structure: [
        "In-Flight Service & Cabin Operations",
        "Passenger Handling & Safety Procedures",
        "Emergency & Safety Training",
        "Grooming & Personality Development",
        "Communication & Soft Skills",
        "Aviation Etiquette & Customer Experience",
        "Professional Grooming & Styling",
        "Communication & Accent Training",
        "Confidence Building & Interview Skills",
        "Body Language & Presentation"
      ]
    },
    internships: {
      description: "IAER provides exposure to real-world aviation environments through training and industry interaction.",
      areas: [
        "Airline & Airport Exposure Sessions",
        "Practical Training Simulations",
        "Customer Service Scenarios"
      ],
      note: "Prepares students for airline cabin crew careers in India and abroad."
    },
    fees: {
      total: "₹1,00,000",
      afterScholarship: "₹60,000",
      notes: [
        "Total Programme Fee: ₹1,00,000. ₹ 60,000",
        "Affordable Certification Programme with Flexible Payment Options",
        "Ideal for students looking for a low cost cabin crew training course in Kolkata."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Specialized grooming and personality development sessions",
      "Aviation industry exposure and mock interviews",
      "Practical training through simulations",
      "Mentorship by aviation industry professionals"
    ],
    faqs: [
      {
        question: "What is cabin crew training?",
        answer: "Cabin crew training prepares students for roles as air hostesses and flight stewards, focusing on safety, service, and passenger handling."
      },
      {
        question: "Which is the best cabin crew training institute in Kolkata?",
        answer: "IAER is among the best cabin crew training institutes in Kolkata, offering industry-oriented training and placement support."
      },
      {
        question: "Is air hostess a good career option?",
        answer: "Yes, it offers exciting career opportunities, travel exposure, and attractive salary packages."
      },
      {
        question: "What are the eligibility criteria for cabin crew?",
        answer: "Students must complete 10+2 and have good communication skills and personality."
      },
      {
        question: "How to become an air hostess after 12th?",
        answer: "You can enroll in a cabin crew training course like this certification programme at IAER Kolkata."
      }
    ]
  },
  {
    id: "diploma-aviation-hospitality-kolkata",
    code: "DAHM",
    title: "Diploma in Aviation & Hospitality Management",
    subtitle: "1–2 Years Diploma Programme I Industry-Oriented",
    image: "/images/programs/diploma-in-aviation-hospitality-management-banner.webp",
    ...buildProgramSectionImages("diploma-in-aviation-hospitality-management", {
      careersImage: "/images/programs/diploma-in-aviation-hospitality-management-overview.webp",
    }),
    description: "The Diploma in Aviation & Hospitality Management at IAER Kolkata is a career-oriented programme designed for students who want to build careers in the aviation, airlines, airports, hospitality, tourism, and service industries.",
    longDescription: "The Diploma in Aviation & Hospitality Management at IAER Kolkata is a career-oriented programme designed for students who want to build careers in the aviation, airlines, airports, hospitality, tourism, and service industries. IAER is emerging as one of the best aviation and hospitality colleges in Kolkata, offering a strong blend of aviation training, hospitality management, and customer service skills.",
    seo: {
      title: "Best Aviation & Hospitality Course in Kolkata | Cabin Crew Training IAER",
      description: "Apply for Diploma in Aviation & Hospitality at IAER Kolkata. Top course with cabin crew training, internship & 100% placement assistance.",
      url: "/programs/diploma-aviation-hospitality-kolkata"
    },
    overview: {
      duration: "1–2 Years Diploma Programme",
      eligibility: "Students who have completed 10+2 (any stream) from a recognized board are eligible to apply. Students appearing for Class 12 examinations can also apply.",
      mode: "On-Campus (Kolkata)",
      scholarship: "Affordable Diploma Programme with Easy Payment Options"
    },
    careerOutcomes: {
      description: "IAER offers dedicated placement assistance to all students, helping them secure roles in leading aviation and hospitality organizations. Graduates can explore some of the best aviation and hospitality jobs in Kolkata.",
      roles: [
        "Airport Ground Staff",
        "Airline Customer Service Executive",
        "Passenger Handling Executive",
        "Hotel Operations Executive",
        "Front Office Executive",
        "Guest Relations Executive",
        "Travel Consultant",
        "Event & Hospitality Coordinator"
      ],
      sectors: [
        "Airlines & Airports",
        "Hotels & Resorts",
        "Travel & Tourism Industry",
        "Event & Service Sector"
      ]
    },
    whyStudy: [
      "Industry-aligned aviation and hospitality curriculum",
      "Strong focus on customer service and operations",
      "Practical training through simulations and case studies",
      "Internship opportunities in airlines, airports, and hotels",
      "Personality development and grooming training",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    highlights: [
      "Industry-aligned aviation and hospitality curriculum",
      "Strong focus on customer service and operations",
      "Practical training through simulations and case studies",
      "Internship opportunities in airlines, airports, and hotels",
      "Personality development and grooming training",
      "Short duration with quick job opportunities",
      "Career-oriented training with placement support"
    ],
    curriculum: {
      structure: [
        "Airport Operations & Ground Handling",
        "Airline Customer Service",
        "Cabin Crew Training & In-Flight Service",
        "Hospitality & Hotel Operations",
        "Travel & Tourism Management",
        "Customer Experience & Service Excellence",
        "Grooming & Personality Development",
        "Communication & Soft Skills",
        "Airline Service Etiquette",
        "Passenger Handling & Customer Interaction"
      ]
    },
    internships: {
      description: "IAER provides structured internships to ensure students gain real-world experience.",
      areas: [
        "Airlines & Airport Service Providers",
        "Ground Handling Companies",
        "Hotels & Hospitality Chains",
        "Travel & Tourism Companies",
        "Event & Service Organizations"
      ],
      note: "Roles include Airport Operations Intern, Airline Ground Staff Intern, Cabin Crew Training Intern, Hotel Operations Intern, and Guest Relations Intern."
    },
    fees: {
      total: "₹1,20,000",
      afterScholarship: "₹99,000",
      notes: [
        "Total Programme Fee: ₹ 1,20,000 ₹ 99,000",
        "Affordable Diploma Programme with Easy Payment Options",
        "Ideal for students looking for a low cost aviation and hospitality course in Kolkata."
      ]
    },
    admission: [
      "Apply now",
      "Book your seat",
      "Get free counselling"
    ],
    studentExperience: [
      "Professional grooming and personality development sessions",
      "Aviation and hospitality industry exposure",
      "Hands-on learning through simulations and case studies",
      "Mentorship by industry experts"
    ],
    faqs: [
      {
        question: "What is Diploma in Aviation & Hospitality Management?",
        answer: "It is a professional diploma programme focused on aviation operations, hospitality services, and customer experience training."
      },
      {
        question: "Which is the best aviation institute in Kolkata?",
        answer: "IAER is among the best aviation and hospitality institutes in Kolkata, offering practical training and placement support."
      },
      {
        question: "Is aviation and hospitality a good career option?",
        answer: "Yes, it offers exciting career opportunities in airlines, airports, hotels, and global service industries."
      },
      {
        question: "What are the best jobs after aviation diploma?",
        answer: "Popular roles include airport ground staff, airline customer service, cabin crew, and hotel operations executive."
      },
      {
        question: "Can I join aviation after 12th?",
        answer: "Yes, students from any stream can apply for aviation and hospitality diploma programmes."
      }
    ]
  }
];
