import { Info, GraduationCap, Briefcase, Stethoscope, Globe, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Admissions Overview | IAER",
    description: "Programs designed to be industry-aligned, skill-focused, and financially accessible.",
};

export default function AdmissionsOverviewPage() {
    return (
        <div className="bg-white min-h-screen">
            <section
                id="admissions-overview"
                data-section-id="overview"
                className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
                        Admissions
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                        Overview
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        IAER’s programs are industry-aligned, skill-focused, and career-oriented while remaining financially accessible for students.
                    </p>
                </div>
            </section>

            <section
                id="admissions-disciplines"
                data-section-id="disciplines"
                className="py-16 lg:py-24 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                                <Info className="w-6 h-6 text-accent" />
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                IAER offers Undergraduate, Postgraduate, and Skill-Based Diploma Programs across disciplines. Our fee structure includes Early Bird Scholarships, making quality education more accessible for deserving students.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Briefcase, title: "Management" },
                                { icon: Stethoscope, title: "Healthcare" },
                                { icon: Globe, title: "Hospitality & Aviation" },
                                { icon: Cpu, title: "Information Technology" },
                                { icon: GraduationCap, title: "Data Science" },
                                { icon: ShieldCheck, title: "Cyber Security" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-sm transition-all">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="font-semibold text-[#100902]">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/admissions/course-fee"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                <GraduationCap className="w-5 h-5" />
                                View Course Fee
                            </Link>
                            <Link
                                href="/admissions/apply"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#100902] text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="admissions-startup-research"
                data-section-id="startup-research"
                className="py-16 lg:py-24 bg-gray-50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-[#100902] text-white rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-2">Startup & Entrepreneurship</h3>
                            <p className="text-gray-400 mb-6">
                                IAER encourages innovation, problem-solving, and industry-oriented entrepreneurship. Students are mentored to convert ideas into viable ventures.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Student-Led Startups & Ideas", value: "15+" },
                                    { label: "Research Papers & Case Studies", value: "30+" },
                                    { label: "Active Innovation & Skill Labs", value: "2+" },
                                    { label: "Industry & Academic Collaborations", value: "10+" },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white/10 rounded-lg p-4 border border-white/10">
                                        <div className="text-3xl font-bold text-accent">{s.value}</div>
                                        <div className="text-sm text-gray-300 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#100902] mb-2">Research & Innovation</h3>
                            <p className="text-gray-600 mb-6">
                                IAER promotes applied, interdisciplinary research integrated with teaching and industry engagement.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Proposed Research & Innovation Funding", value: "₹50+ Lakhs" },
                                    { label: "Student & Faculty Research Projects", value: "65+" },
                                    { label: "Centres of Applied Research", value: "2+" },
                                    { label: "Workshops, FDPs & Seminars", value: "25+" },
                                ].map((s, i) => (
                                    <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                        <div className="text-2xl font-bold text-[#100902]">{s.value}</div>
                                        <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

