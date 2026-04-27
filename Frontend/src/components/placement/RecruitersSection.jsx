"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { Mic, Users, GraduationCap, Briefcase } from "lucide-react";

const recruiters = [
    { name: "TCS", logo: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png" },
    { name: "Infosys", logo: "/images/company_logos/Infosys_logo.png" },
    { name: "Wipro", logo: "/images/company_logos/Tech_Mahindra.png" }, // Using Tech Mahindra as Wipro logo placeholder if not found, but I saw Tech Mahindra in list
    { name: "Cognizant", logo: "/images/company_logos/Cognizant_logo.png" },
    { name: "HCL", logo: "/images/company_logos/HCL_Technologies.svg" },
    { name: "Apollo Hospitals", logo: "/images/company_logos/apollo.png" },
    { name: "Fortis", logo: "/images/company_logos/FORTIS.NS_BIG-b3d2adc3.png" },
    { name: "Medica", logo: "/images/company_logos/medica_logo.png" },
    { name: "Marriott", logo: "/images/company_logos/Marriott_logo.png" },
    { name: "Hyatt", logo: "/images/company_logos/Hyatt_Logo.png" },
    { name: "Indigo", logo: "/images/company_logos/indigo.png" },
    { name: "SpiceJet", logo: "/images/company_logos/spicejet.png" },
    { name: "Deloitte", logo: "/images/company_logos/deloitte.svg" },
    { name: "EY", logo: "/images/company_logos/EY_logo.png" },
    { name: "Amazon", logo: "/images/company_logos/Amazon_logo.svg.png" },
    { name: "Adani", logo: "/images/company_logos/Adani_logo.png" },
];

const activities = [
    { icon: Briefcase, title: "Recruitment Drives", desc: "On-campus & pooled campus recruitment drives." },
    { icon: Mic, title: "Expert Talks", desc: "Industry expert talks & seminars." },
    { icon: GraduationCap, title: "Skill Bootcamps", desc: "Intensive skill bootcamps & assessment programs." },
    { icon: Users, title: "Alumni Mentoring", desc: "Alumni interaction & mentoring sessions." },
];

export default function RecruitersSection() {
    return (
        <section id="recruiters" className="py-10 sm:py-14 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Activities */}
                <div className="mb-10 sm:mb-16 md:mb-20">
                    <div className="text-center mb-6 sm:mb-10 md:mb-12">
                        <RevealOnScroll>
                            <h2 className="text-[22px] sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Placement Activities at IAER</h2>
                            <p className="text-gray-600 text-[12px] sm:text-sm md:text-base">A comprehensive ecosystem designed for success.</p>
                        </RevealOnScroll>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {activities.map((item, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 text-[12px] sm:text-sm md:text-base">{item.title}</h3>
                                    <p className="text-[11px] sm:text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>

                {/* Recruiters */}
                <div>
                    <div className="text-center mb-6 sm:mb-10 md:mb-12">
                        <RevealOnScroll>
                            <h2 className="text-[22px] sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Recruitment Ecosystem</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base">
                                IAER students have engaged with leading organizations across IT, Healthcare, Hospitality, Aviation, and Corporate sectors.
                            </p>
                        </RevealOnScroll>
                    </div>

                    <RevealOnScroll delay={200}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                            {recruiters.map((recruiter, index) => (
                                <div key={index} className="flex justify-center p-2 sm:p-4">
                                    <div className="relative w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16">
                                        <Image
                                            src={recruiter.logo}
                                            alt={recruiter.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                    
                    <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-6 sm:mt-10 md:mt-12 italic">
                        * Representative list of organizations where students have placed or interned. Recruiter participation varies by program and hiring cycle.
                    </p>
                </div>
            </div>
        </section>
    );
}
