import { BookOpen, Users, Lightbulb, Target, Briefcase, Globe, Award, Zap, Layers, CheckCircle2, Search, ArrowRight, Layout, PenTool, ClipboardCheck, Building2, UserPlus, List, Calendar, CalendarOff, LineChart, UserCheck, TrendingUp, BadgeCheck } from "lucide-react";

export const metadata = {
    title: "Academic Overview | IAER",
    description: "IAER's academic philosophy rooted in holistic development, industry relevance, and ethical learning.",
};

export default function AcademicOverviewPage() {
    return (
        <div className="bg-white min-h-screen">
            <section
                id="academics-overview"
                data-section-id="overview"
                className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
                        Academic Excellence
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                        Distinctive and Purpose-Driven
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Igniting curiosity, building competence, and shaping confident professionals through a blend of theory and real-world relevance.
                    </p>
                </div>
            </section>

            <section
                id="academics-introduction"
                data-section-id="introduction"
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-[#100902] mb-6">Building Foundations for Lifelong Success</h2>
                        <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
                            At Institute of Advance Education & Research (IAER), academics are designed to ignite curiosity, build competence, and shape confident professionals. We encourage students to explore their interests deeply, question ideas critically, and engage in a lifelong journey of learning.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our academic philosophy is rooted in holistic development, industry relevance, and ethical learning. Our approach empowers students through structured flexibility, skill-based education, and experiential exposure, preparing them not just for jobs, but for meaningful careers.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="academics-philosophy"
                data-section-id="philosophy"
                className="py-16 lg:py-24 bg-gray-50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Our Philosophy</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mt-2">Core Principles</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: Users,
                                    title: "Human Values & Ethics",
                                    desc: "Education that builds character, responsibility, and social awareness."
                                },
                                {
                                    icon: Layers,
                                    title: "Flexible Learning Framework",
                                    desc: "Learner-centric academic structure enabling academic exploration."
                                },
                                {
                                    icon: Briefcase,
                                    title: "Industry Exposure",
                                    desc: "Practical learning through internships, projects, and industry interaction."
                                },
                                {
                                    icon: Lightbulb,
                                    title: "Innovation & Entrepreneurship",
                                    desc: "Encouraging creative thinking, problem-solving, and enterprise."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#100902] mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="academics-focus"
                data-section-id="focus"
                className="py-16 lg:py-24 bg-[#100902] text-white"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-accent/20">
                                    <Target className="w-4 h-4" />
                                    Future Readiness
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Preparing You for a Dynamic Future</h2>
                                <p className="text-gray-400 text-lg mb-8">
                                    Academics at IAER go beyond classroom instruction. Our focus is on ensuring students graduate with knowledge, skills, and adaptability required in a competitive global environment.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        "Strong Domain Knowledge with Practical Skills",
                                        "Interdisciplinary & Multidisciplinary Learning",
                                        "Career-Focused Education",
                                        "Emerging Industry Trends",
                                        "Inclusive Learning Environment"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                            </div>
                                            <span className="text-lg font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-1/2 bg-white/5 rounded-2xl p-8 border border-white/10">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                        <Globe className="w-8 h-8 text-blue-400 mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
                                        <p className="text-gray-400 text-sm">Programs designed to integrate multiple domains for broader perspectives and global adaptability.</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                        <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Emerging Tech</h3>
                                        <p className="text-gray-400 text-sm">Curriculum aligned with evolving sectors such as technology, healthcare, management, and data-driven fields.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="academics-obe"
                data-section-id="obe"
                className="py-16 lg:py-24 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Outcome-Based Education</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mt-2">Learning with Purpose</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                IAER follows an Outcome-Based Education (OBE) approach, ensuring that every programme is aligned with clear learning outcomes, industry expectations, and continuous academic improvement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Defined Outcomes", desc: "Clear academic and professional goals for every programme.", icon: Target, color: "blue" },
                                { title: "Curriculum & Instruction", desc: "Structured teaching methods designed for real-world applicability.", icon: BookOpen, color: "green" },
                                { title: "Assessment & Evaluation", desc: "Measuring conceptual understanding, skills, and application.", icon: ClipboardCheck, color: "purple" },
                                { title: "Continuous Improvement", desc: "Updates based on feedback and industry inputs.", icon: Zap, color: "orange" }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                                    <div className={`w-14 h-14 mx-auto bg-${item.color}-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#100902] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="academics-curriculum"
                data-section-id="curriculum"
                className="py-16 lg:py-24 bg-orange-50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-4">Curriculum Structure</h2>
                            <p className="text-xl text-gray-600">Designing Your Learning Path</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                <div className="p-8 md:p-12">
                                    <h3 className="text-2xl font-bold text-[#100902] mb-6">Core Components</h3>
                                    <ul className="space-y-6">
                                        {[
                                            { title: "Core Subjects", desc: "Strong foundation in the chosen discipline" },
                                            { title: "Skill Enhancement", desc: "Industry-relevant skills to boost employability" },
                                            { title: "Open Electives", desc: "Opportunities to explore areas beyond the primary domain" },
                                            { title: "Value-Added Courses", desc: "Certifications and skills aligned with future industry needs" }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></div>
                                                <div>
                                                    <h4 className="font-bold text-[#100902]">{item.title}</h4>
                                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-8 md:p-12 bg-gray-50/50">
                                    <h3 className="text-2xl font-bold text-[#100902] mb-6">Experiential Learning</h3>
                                    <ul className="space-y-6">
                                        {[
                                            { title: "Ability Enhancement", desc: "Communication, leadership, and professional development" },
                                            { title: "Internship / Training", desc: "Real-world exposure through industry projects" },
                                            { title: "Research Project", desc: "Developing analytical thinking and research capabilities" },
                                            { title: "Value Education", desc: "Ethics, responsibility, and integrity integrated into academics" }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></div>
                                                <div>
                                                    <h4 className="font-bold text-[#100902]">{item.title}</h4>
                                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="academics-evaluation"
                data-section-id="evaluation"
                className="py-16 lg:py-24 bg-[#100902] text-white"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Assessment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">A Robust Evaluation System</h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                IAER’s evaluation system is designed to support student growth through continuous assessment, feedback, and improvement, ensuring fair, transparent, and learner-centric evaluation.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Continuous Assessment", desc: "Regular evaluations for consistent academic progress" },
                                    { title: "Comprehensive Evaluation", desc: "Assessing knowledge, skills, and application" },
                                    { title: "Learner-Centric Approach", desc: "Focus on individual academic development" },
                                    { title: "Remedial Support", desc: "Additional academic assistance for continuous improvement" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-accent shrink-0"></div>
                                        <div>
                                            <h4 className="font-bold text-white">{item.title}</h4>
                                            <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                                <div className="grid gap-6">
                                    <div className="bg-white/5 p-4 rounded-lg flex items-center gap-4">
                                        <LineChart className="w-8 h-8 text-green-400" />
                                        <div>
                                            <div className="font-bold">Transparent</div>
                                            <div className="text-xs text-gray-400">Clear marking criteria</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg flex items-center gap-4">
                                        <UserCheck className="w-8 h-8 text-blue-400" />
                                        <div>
                                            <div className="font-bold">Fair & Unbiased</div>
                                            <div className="text-xs text-gray-400">Objective assessment methods</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg flex items-center gap-4">
                                        <TrendingUp className="w-8 h-8 text-accent" />
                                        <div>
                                            <div className="font-bold">Growth Oriented</div>
                                            <div className="text-xs text-gray-400">Focus on improvement</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="academics-skills"
                data-section-id="skills"
                className="py-16 lg:py-24 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Beyond Degrees</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mt-2 mb-6">Skill Certifications & Academic Edge</h2>
                        <p className="text-gray-600 text-lg">
                            To enhance academic outcomes, IAER integrates skill certifications and training modules within its academic framework. These certifications complement degree programmes and strengthen students’ professional profiles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Award, title: "Industry-Aligned", desc: "Certification programs designed with industry inputs." },
                            { icon: PenTool, title: "Practical Training", desc: "Hands-on learning alongside academic theory." },
                            { icon: Layers, title: "Skill Development", desc: "From foundational to advanced technical skills." },
                            { icon: BadgeCheck, title: "Value Credentials", desc: "Add significant value to resumes and careers." }
                        ].map((item, index) => (
                            <div key={index} className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                                <item.icon className="w-10 h-10 text-blue-600 mb-6 relative z-10" />
                                <h3 className="text-xl font-bold text-[#100902] mb-3 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
