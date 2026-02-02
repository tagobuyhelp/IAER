import React from 'react';
import Link from 'next/link';
import { 
    Users, 
    Target, 
    ShieldCheck, 
    Lightbulb, 
    ArrowRight, 
    CheckCircle2,
    BookOpen,
    Gavel
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Board of Governors | IAER',
    description: 'The Board of Governors at IAER provides strategic leadership, policy direction, and governance oversight to ensure academic excellence and institutional integrity.',
};

export default function BoardOfGovernorsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#050301] text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('/images/about/Regulatory_compliance_review_meeting.png')] bg-cover bg-center opacity-30" />
                
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-6">
                            <Users className="w-4 h-4" />
                            <span>Leadership & Governance</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Board of Governors
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            Institute of Advance Education & Research (IAER)
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            The Board of Governors at IAER provides strategic leadership, policy direction, and governance oversight to ensure academic excellence, institutional integrity, and long-term growth. Comprising accomplished leaders from industry, government, academia, and innovation ecosystems, the Board guides IAER’s vision of delivering industry-aligned, outcome-driven education.
                        </p>
                    </div>
                </div>
            </section>

            {/* Role & Responsibilities */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Role & Responsibilities</h2>
                            <p className="text-gray-600">The Board of Governors is responsible for guiding the strategic direction of the institute.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Target,
                                    text: "Defining institutional vision, mission, and strategic priorities"
                                },
                                {
                                    icon: ShieldCheck,
                                    text: "Ensuring academic quality and regulatory compliance"
                                },
                                {
                                    icon: Users,
                                    text: "Strengthening industry–academia collaboration"
                                },
                                {
                                    icon: Gavel,
                                    text: "Overseeing governance, ethics, and institutional development"
                                },
                                {
                                    icon: Lightbulb,
                                    text: "Supporting innovation, research, and entrepreneurship initiatives"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <p className="text-gray-800 font-medium pt-2">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Members of the Board */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Members of the Board of Governors</h2>
                        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden min-h-[300px] flex items-center justify-center">
                        <div className="text-center p-8">
                            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Members</h3>
                            <p className="text-gray-500">
                                The list of distinguished board members will be updated shortly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance Philosophy */}
            <section className="py-16 bg-[#050301] text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Governance Philosophy</h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                IAER’s governance framework emphasizes core values that drive our commitment to excellence and integrity.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Transparency & accountability",
                                    "Academic autonomy with regulatory compliance",
                                    "Industry relevance & student outcomes",
                                    "Ethical leadership & inclusive growth"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                             {/* Placeholder for a governance/meeting image - using a pattern/gradient for now if image not available */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-900/20 z-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                                <div>
                                    <BookOpen className="w-20 h-20 text-accent mx-auto mb-6 opacity-80" />
                                    <h3 className="text-2xl font-bold mb-2">Commitment to Excellence</h3>
                                    <p className="text-gray-400">Upholding the highest standards in education governance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-accent text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Admissions Open</h2>
                    <p className="text-xl mb-8 opacity-90">Full-Time Regular Programs</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-accent hover:bg-gray-100 px-10 py-6 text-lg rounded-full font-bold shadow-lg">
                            <Link href="https://admission.iaer.ac.in/" target="_blank">
                                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white/10 px-10 py-6 text-lg rounded-full font-bold">
                            <Link href="/contact">
                                Contact Admissions
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
