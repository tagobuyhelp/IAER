import { CheckCircle2, Building2, Users, GraduationCap, Trophy, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Overview | IAER",
    description: "Learn about IAER, the best student-centric institution in Eastern India.",
};

export default function AboutOverviewPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-[#0a0601] text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-accent/10 opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
                        About IAER
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                        Best Student-Centric Institution <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                            in Eastern India
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Recognised for Excellence & Skill-Based Education
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902]">
                                Welcome to IAER
                            </h2>
                            <div className="w-20 h-1.5 bg-accent rounded-full"></div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Institute of Advance Education & Research (IAER) is a distinguished higher-education institution committed to empowering ambitious learners through industry-aligned programs, practical training, and a global outlook.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Established over a decade ago, IAER is affiliated with <strong>MAKAUT</strong> and approved by <strong>AICTE</strong>, offering students nationally recognized degrees and career-ready skill development.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl transform rotate-3"></div>
                            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-video shadow-xl flex items-center justify-center border border-gray-200">
                                {/* Placeholder for Campus Image */}
                                <span className="text-gray-400 font-medium">Campus Image / Video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About IAER Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-4">About IAER</h2>
                            <p className="text-gray-600 text-lg">
                                IAER has grown into a respected multi-disciplinary institution known for its commitment to skill development, industry integration, and practical learning.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p>
                                Since its inception, IAER has focused on delivering education that aligns with real-world demands, ensuring that students graduate not only with academic knowledge but also with hands-on competence.
                            </p>
                            <p>
                                Our programs across <strong>Business Management, Global Business, Business Analytics, Computer Applications, Data Science, Cyber Security, Artificial Intelligence, Hospitality & Hotel Administration, Aviation, and Hospital Management</strong> are designed to groom students into professionals who can thrive in competitive sectors. IAER’s teaching methodology balances structured theory, immersive learning, and real-time industry exposure, making education engaging, relevant, and future-ready.
                            </p>
                            <p>
                                With technologically equipped labs, strong faculty expertise, modern infrastructure, and a student-first approach, IAER fosters a vibrant learning environment where creativity, innovation, and personal growth are encouraged.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {[
                                "IAER embodies the spirit of contemporary higher education while bridging academic excellence with industry expectations.",
                                "IAER promotes flexible learning through hands-on projects, field training, practical workshops, blended learning tools, and interdisciplinary exposure.",
                                "IAER continuously integrates modern research, updated curriculum frameworks, and real-world case studies.",
                                "Our faculty team consists of highly qualified academicians, industry veterans, and professional trainers.",
                                "Students gain access to international workshops, exchange opportunities and global academic collaborations.",
                                "IAER welcomes students from across states and cultural backgrounds, creating a friendly and inclusive environment.",
                                "Every program, training module, and support system at IAER revolves around student success and mentorship.",
                                "From smart classrooms and computer labs to hospitality studios, medical labs, and aviation training setups, IAER integrates technology into every step.",
                                "IAER ensures transparency, professional standards, and ethical practices across all academic and administrative processes."
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <div className="shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skill-Based Learning Section */}
            <section className="py-16 lg:py-24 bg-[#100902] text-white relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                Best Educational Institution for <span className="text-accent">Skill-Based Learning</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                IAER is celebrated for its practical, industry-ready approach to education. With government recognitions, modern infrastructure, and strong placement support, the institution has positioned itself as one of the most reliable choices for students seeking professional growth, technical expertise, and holistic development.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Our programs are shaped around real industry requirements, ensuring graduates are prepared to excel in workplaces across IT, healthcare, aviation, hospitality, business management, and entrepreneurship.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg text-accent">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-semibold">Unmatched Industry Engagement</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg text-accent">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-semibold">Inspiring, Modern Academic Framework</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg text-accent">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-semibold">Internationally Aligned Learning Opportunities</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg text-accent">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-semibold">A Diverse & Enriching Student Life</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors group">
                                <Trophy className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-4xl font-bold text-white mb-2">3000+</h3>
                                <p className="text-gray-400 font-medium">Placement Offers Generated</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors group">
                                <Building2 className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                                <p className="text-gray-400 font-medium">Companies Participated</p>
                            </div>
                            <div className="bg-accent/20 backdrop-blur-md border border-accent/30 p-8 rounded-2xl text-center sm:col-span-2 hover:bg-accent/30 transition-colors group">
                                <div className="text-5xl font-bold text-white mb-2">₹15.75 LPA</div>
                                <p className="text-accent font-bold uppercase tracking-wider">Highest Domestic Package</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruiters Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#100902] mb-12">
                        Some of Our Students are Working With
                    </h2>

                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using text for now as logos are not provided, but styled to look like a logo cloud */}
                        {[
                            "TCS", "Wipro", "Amazon", "Fortis", "Apollo Hospitals",
                            "Marriott Hotels", "Accenture", "Infosys", "Cognizant",
                            "IBM", "HCL", "Capgemini", "Deloitte", "EY", "Medica",
                            "Narayana Health", "Hyatt", "Tech Mahindra"
                        ].map((company) => (
                            <div key={company} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-[#100902] transition-colors cursor-default">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
