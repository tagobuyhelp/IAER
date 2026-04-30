"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { Mic, Users, GraduationCap, Briefcase } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useEffect, useMemo, useState } from "react";

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

function RecruiterLogo({ name, logo }) {
    return (
        <div className="mx-3 sm:mx-4 w-[120px] h-[56px] sm:w-[140px] sm:h-[64px] flex items-center justify-center">
            <div className="relative w-full h-full   px-4 py-3">
                <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain"
                    sizes="160px"
                />
            </div>
        </div>
    );
}

export default function RecruitersSection() {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mq.matches);
    }, []);

    const [rowA, rowB] = useMemo(() => {
        const a = [];
        const b = [];
        recruiters.forEach((r, idx) => (idx % 2 === 0 ? a.push(r) : b.push(r)));
        return [a, b];
    }, []);

    return (
        <section id="recruiters" className="py-8 sm:py-10 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Activities */}
                <div className="mb-8 sm:mb-12 md:mb-14">
                    <div className="text-center mb-5 sm:mb-8 md:mb-10">
                        <RevealOnScroll>
                            <h2 className="text-[20px] sm:text-2xl md:text-3xl font-bold text-primary mb-2.5 sm:mb-3">Placement Activities at IAER</h2>
                            <p className="text-gray-600 text-[12px] sm:text-sm md:text-base">A comprehensive ecosystem designed for success.</p>
                        </RevealOnScroll>
                    </div>

                    <RevealOnScroll delay={150}>
                        <div className="grid grid-cols-12 gap-2 sm:gap-3 mb-5 sm:mb-7 md:mb-10">
                            <div className="col-span-12 md:col-span-5 relative h-44 sm:h-52 md:h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                <Image
                                    src="/images/placement/KX2A3092.webp"
                                    alt="Industry session and professional guidance"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 768px) 520px, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                            </div>
                            <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-2 sm:gap-3">
                                <div className="relative h-44 sm:h-52 md:h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                    <Image
                                        src="/images/placement/KX2A3099.webp"
                                        alt="Student interaction and career mentoring"
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 520px, 100vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                                </div>
                                <div className="relative h-44 sm:h-52 md:h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                    <Image
                                        src="/images/placement/KX2A3102.webp"
                                        alt="Placement readiness and teamwork"
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 520px, 100vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {activities.map((item, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="p-3 sm:p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group h-full flex flex-col">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-2.5 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 text-[12px] sm:text-sm md:text-base">{item.title}</h3>
                                    <p className="text-[11px] sm:text-sm text-gray-600 flex-1">{item.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>

                {/* Recruiters */}
                <div>
                    <div className="text-center mb-5 sm:mb-8 md:mb-10">
                        <RevealOnScroll>
                            <h2 className="text-[20px] sm:text-2xl md:text-3xl font-bold text-primary mb-2.5 sm:mb-3">Recruitment Ecosystem</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base">
                                IAER students have engaged with leading organizations across IT, Healthcare, Hospitality, Aviation, and Corporate sectors.
                            </p>
                        </RevealOnScroll>
                    </div>

                    <RevealOnScroll delay={200}>
                        <div className=" overflow-hidden">
                            <div className="py-3 sm:py-4 md:py-5">
                                <Marquee
                                    speed={reduceMotion ? 0 : 32}
                                    autoFill
                                    pauseOnHover
                                    gradient
                                    gradientColor={[249, 250, 251]}
                                    className="opacity-90"
                                >
                                    {rowA.map((r) => (
                                        <RecruiterLogo key={r.name} name={r.name} logo={r.logo} />
                                    ))}
                                </Marquee>
                            </div>
                            <div className="py-3 sm:py-4 md:py-5 border-t border-gray-100">
                                <Marquee
                                    speed={reduceMotion ? 0 : 32}
                                    autoFill
                                    pauseOnHover
                                    gradient
                                    gradientColor={[249, 250, 251]}
                                    direction="right"
                                    className="opacity-90"
                                >
                                    {rowB.map((r) => (
                                        <RecruiterLogo key={r.name} name={r.name} logo={r.logo} />
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </RevealOnScroll>
                    
                    <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-5 sm:mt-8 md:mt-10 italic">
                        * Representative list of organizations where students have placed or interned. Recruiter participation varies by program and hiring cycle.
                    </p>
                </div>
            </div>
        </section>
    );
}
