import React from 'react';
import Link from 'next/link';
import { 
    ShieldAlert, 
    Eye, 
    Scale, 
    MessageSquare, 
    Users, 
    Gavel, 
    CheckCircle2,
    ArrowRight,
    FileText,
    HeartHandshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Statutory Committees | IAER',
    description: 'IAER has constituted mandatory statutory committees including Anti-Ragging, ICC, and Grievance Redressal to ensure a safe and transparent academic environment.',
};

export default function StatutoryCommitteesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#050301] text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('/images/Mandatory/iaer-mandatory-disclosure-overview-transparency.png')] bg-cover bg-center opacity-30" />
                
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-6">
                            <Gavel className="w-4 h-4" />
                            <span>Compliance & Governance</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Statutory Committees
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            Institute of Advance Education & Research (IAER)
                        </p>

                        <div className="mt-8">
                            <p className="text-sm text-gray-300/90 mb-3 font-medium">
                                Committee Documents
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: "Anti-Ragging", href: "/files/Anti_Ragging_Committee_and_Squad.pdf" },
                                    { label: "Grievance", href: "/files/Grievance_Redressal_Committee.pdf" },
                                    { label: "Internal Committee", href: "/files/Internal_Committee.pdf" },
                                    { label: "SC/ST", href: "/files/SC.ST_Committee.pdf" },
                                ].map((doc) => (
                                    <a
                                        key={doc.href}
                                        href={doc.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors"
                                    >
                                        <FileText className="w-4 h-4 text-white/90" />
                                        <span>{doc.label}</span>
                                        <ArrowRight className="w-4 h-4 text-white/80" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            IAER has constituted all mandatory statutory committees in accordance with UGC, MAKAUT, AICTE, and Government of India guidelines to ensure a safe, inclusive, transparent, and student-centric academic environment. These committees play a critical role in safeguarding student welfare, addressing grievances, and upholding institutional ethics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Committees Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
                        
                        {/* Anti-Ragging Committee */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <ShieldAlert className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Anti-Ragging Committee</h3>
                                    <p className="text-accent font-medium mb-4">Zero Tolerance Policy Towards Ragging</p>
                                    <p className="text-gray-600 mb-6">
                                        IAER strictly prohibits ragging in any form, both on and off campus. The Anti-Ragging Committee ensures a safe and welcoming environment for all students.
                                    </p>
                                    
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h4 className="font-semibold text-gray-900 mb-4">Key Functions</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {[
                                                "Prevent ragging through awareness and monitoring",
                                                "Address complaints promptly and confidentially",
                                                "Conduct sensitization programs and orientations",
                                                "Take strict disciplinary action as per UGC norms"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <p className="text-gray-900 font-medium">
                                            <span className="text-accent">Outcome:</span> IAER maintains a ragging-free campus with continuous vigilance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Anti-Ragging Proctorial Squad */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Anti-Ragging Proctorial Squad</h3>
                                    <p className="text-accent font-medium mb-4">On-Ground Monitoring & Rapid Response</p>
                                    <p className="text-gray-600 mb-6">
                                        The Anti-Ragging Proctorial Squad works as an operational arm of the Anti-Ragging Committee.
                                    </p>
                                    
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h4 className="font-semibold text-gray-900 mb-4">Key Functions</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {[
                                                "Regular patrols across campus premises",
                                                "Surprise inspections in hostels and common areas",
                                                "Immediate intervention and reporting of incidents",
                                                "Student interaction to identify early warning signs"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Internal Complaints Committee (ICC) */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Scale className="w-8 h-8 text-purple-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Internal Complaints Committee (ICC)</h3>
                                    <p className="text-accent font-medium mb-4">Prevention, Prohibition & Redressal of Sexual Harassment</p>
                                    <p className="text-gray-600 mb-6">
                                        Constituted under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, the ICC ensures a dignified and respectful campus environment.
                                    </p>
                                    
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h4 className="font-semibold text-gray-900 mb-4">Key Functions</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {[
                                                "Address complaints of sexual harassment",
                                                "Ensure confidentiality and fairness",
                                                "Conduct awareness programs on gender sensitization",
                                                "Recommend disciplinary action where required"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <p className="text-gray-900 font-medium">
                                            <span className="text-accent">Commitment:</span> IAER is committed to providing a safe, inclusive, and respectful workplace and learning environment for all.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Student Grievance Redressal Cell (SGRC) */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-8 h-8 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Student Grievance Redressal Cell (SGRC)</h3>
                                    <p className="text-accent font-medium mb-4">Ensuring Fairness & Transparency</p>
                                    <p className="text-gray-600 mb-6">
                                        The Student Grievance Redressal Cell provides a structured mechanism for students to voice academic, administrative, or personal concerns.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <h4 className="font-semibold text-gray-900 mb-4">Types of Grievances Covered</h4>
                                            <ul className="space-y-2">
                                                {[
                                                    "Academic issues (evaluation, attendance, curriculum)",
                                                    "Administrative concerns",
                                                    "Infrastructure and facilities",
                                                    "Student services and support"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <h4 className="font-semibold text-gray-900 mb-4">Process</h4>
                                            <ul className="space-y-2">
                                                {[
                                                    "Submission of grievance",
                                                    "Timely review and investigation",
                                                    "Resolution with documented communication"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Equal Opportunity & Regulatory Compliance */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Equal Opportunity */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <HeartHandshake className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Equal Opportunity & Inclusive Practices</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                IAER promotes equality, diversity, and inclusion across all academic and administrative practices. All statutory bodies function with impartiality and respect for individual dignity.
                            </p>
                        </div>

                        {/* Regulatory Compliance */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <FileText className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Regulatory Compliance</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                All statutory committees at IAER operate in alignment with:
                            </p>
                            <ul className="grid grid-cols-2 gap-3">
                                {[
                                    "UGC Regulations",
                                    "AICTE Guidelines",
                                    "MAKAUT Norms",
                                    "Government of India Acts & Policies"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-accent" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Committee Documents */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Committee Documents</h2>
                                <p className="text-gray-600">
                                    View official committee documents and orders published by IAER.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                            Anti-Ragging Committee &amp; Squad
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Committee constitution and squad details (PDF).
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="/files/Anti_Ragging_Committee_and_Squad.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors"
                                            >
                                                View PDF <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                            <a
                                                href="/files/Anti_Ragging_Committee_and_Squad.pdf"
                                                download
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                            Grievance Redressal Committee
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Committee constitution and grievance process (PDF).
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="/files/Grievance_Redressal_Committee.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors"
                                            >
                                                View PDF <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                            <a
                                                href="/files/Grievance_Redressal_Committee.pdf"
                                                download
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                            Internal Committee (ICC)
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Internal Committee constitution (PDF).
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="/files/Internal_Committee.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors"
                                            >
                                                View PDF <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                            <a
                                                href="/files/Internal_Committee.pdf"
                                                download
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                            SC/ST Committee
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Committee constitution and details (PDF).
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="/files/SC.ST_Committee.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors"
                                            >
                                                View PDF <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                            <a
                                                href="/files/SC.ST_Committee.pdf"
                                                download
                                                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-accent text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions Open – Full-Time Regular Programs</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Start Your Journey at IAER. Join a community committed to excellence, safety, and holistic growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://admission.iaer.ac.in/" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold">
                                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-accent font-semibold">
                                Contact Admissions
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
