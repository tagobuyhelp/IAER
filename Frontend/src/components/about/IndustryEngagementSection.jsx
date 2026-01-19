"use client";

import {
  Building2,
  Handshake,
  Briefcase,
  Award,
  Users,
  Target,
  Zap,
  CheckCircle2,
  Star,
  Globe,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Stat card component
function StatCard({ icon: Icon, label, value, delay = 0, index }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300",
        "hover:shadow-lg hover:border-accent/30 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{
        transitionDelay: `${delay + index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 p-3 opacity-10 transition-transform group-hover:scale-110 group-hover:opacity-20">
        {Icon && <Icon className="w-12 h-12 text-primary" aria-hidden="true" />}
      </div>
      
      <div className="relative z-10 flex flex-col gap-1">
        <div className="text-2xl font-bold text-gray-900 leading-tight">
          {value}
        </div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function IndustryEngagementSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: Briefcase,
      label: "Placement Offers",
      value: "3000+",
    },
    {
      icon: Building2,
      label: "Companies",
      value: "500+",
    },
    {
      icon: Award,
      label: "Highest Package",
      value: "₹15.75 LPA",
    },
    {
      icon: Target,
      label: "Career Pathways",
      value: "10+ Sectors",
    },
  ];

  const companies = [
    {
      name: "TCS",
      logo: "/images/company_logos/Tata_Consultancy_Services_old_logo.svg.png",
    },
    {
      name: "Wipro",
      logo: null,
    },
    {
      name: "Amazon",
      logo: "/images/company_logos/Amazon_logo.svg.png",
    },
    {
      name: "Fortis",
      logo: "/images/company_logos/FORTIS.NS_BIG-b3d2adc3.png",
    },
    {
      name: "Apollo Hospitals",
      logo: "/images/company_logos/apollo.png",
    },
    {
      name: "Marriott Hotels",
      logo: "/images/company_logos/Marriott_logo.png",
    },
    {
      name: "Accenture",
      logo: "/images/company_logos/Accenture.png",
    },
    {
      name: "Infosys",
      logo: "/images/company_logos/Infosys_logo.png",
    },
    {
      name: "Cognizant",
      logo: "/images/company_logos/Cognizant_logo.png",
    },
    {
      name: "HCL",
      logo: "/images/company_logos/HCL_Technologies.svg",
    },
    {
      name: "Capgemini",
      logo: "/images/company_logos/Capgemini.png",
    },
    {
      name: "Deloitte",
      logo: "/images/company_logos/deloitte.svg",
    },
    {
      name: "EY",
      logo: "/images/company_logos/EY_logo.png",
    },
    {
      name: "Medica",
      logo: "/images/company_logos/medica_logo.png",
    },
    {
      name: "Narayana Health",
      logo: "/images/company_logos/narayana-logo.png",
    },
    {
      name: "Hyatt",
      logo: "/images/company_logos/Hyatt_Logo.png",
    },
    {
      name: "Tech Mahindra",
      logo: "/images/company_logos/Tech_Mahindra.png",
    },
    {
      name: "Radisson Hotels",
      logo: "/images/company_logos/1280px-Radisson_logo.png",
    },
    {
      name: "Indigo",
      logo: "/images/company_logos/indigo_flight-removebg-preview.png",
    },
    {
      name: "Spicejet",
      logo: "/images/company_logos/spicejet-removebg-preview.png",
    },
    {
      name: "GMR",
      logo: "/images/company_logos/gmr-removebg-preview.png",
    },
    {
      name: "Adani Group",
      logo: "/images/company_logos/Adani_logo.png",
    },
    {
      name: "Accord Hotels",
      logo: "/images/company_logos/Accord_Metropolitan_802dfddd.avif",
    },
  ];


  return (
    <section className="py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div
                ref={headerRef}
                className={cn(
                  "inline-flex items-center gap-2 mb-2 transition-all duration-500",
                  headerInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
              >
                <Handshake className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wider uppercase text-accent">
                  Industry Partnerships
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Unmatched Industry <span className="text-primary">Engagement</span>
              </h2>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-accent" />
              <span>Global Connections</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left Column: Stats & Activities (Compact) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
             {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  delay={100}
                  index={index}
                />
              ))}
            </div>

            {/* Engagement Activities Compact List */}
            <RevealOnScroll delay={200} className="flex-1">
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                   <div className="p-1.5 rounded-md bg-accent/10">
                     <Zap className="w-4 h-4 text-accent" />
                   </div>
                   <h3 className="font-bold text-gray-900 text-sm">Engagement Activities</h3>
                </div>
                <div className="grid grid-cols-1 gap-2 flex-1">
                  {[
                    { label: "Internships", icon: Briefcase },
                    { label: "Live Projects", icon: Target },
                    { label: "Guest Lectures", icon: Users },
                    { label: "Placement Drives", icon: Rocket },
                  ].map((activity) => (
                    <div key={activity.label} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-400">
                        <activity.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">{activity.label}</span>
                      <CheckCircle2 className="w-3 h-3 text-green-500 ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Marquee (Visual Impact) */}
          <div className="lg:col-span-8 h-full">
            <RevealOnScroll delay={300} className="h-full">
              <div className="h-full rounded-xl border border-gray-100 bg-white p-5 shadow-lg flex flex-col justify-center relative overflow-hidden group">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                
                <div className="mb-4 relative z-10 flex items-center justify-between">
                   <div>
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        Our Placement Partners
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">Leading organisations across sectors</p>
                   </div>
                   <div className="hidden sm:block text-right">
                      <span className="text-2xl font-bold text-primary block leading-none">3000+</span>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400">Placements</span>
                   </div>
                </div>

                <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-center">
                  <Marquee speed={35} autoFill gradient={true} gradientColor={[255, 255, 255]} className="overflow-y-hidden py-1">
                    {companies.slice(0, Math.ceil(companies.length / 2)).map((company, index) => (
                      <div 
                        key={`${company.name}-row1-${index}`} 
                        className="w-[120px] h-[60px] mx-2 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center p-3  hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                      >
                        {company.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain"
                              sizes="120px"
                            />
                          </div>
                        ) : (
                          <span className="text-xs font-semibold text-gray-600 text-center">{company.name}</span>
                        )}
                      </div>
                    ))}
                  </Marquee>

                  <Marquee speed={35} autoFill direction="right" gradient={true} gradientColor={[255, 255, 255]} className="overflow-y-hidden py-1">
                    {companies.slice(Math.ceil(companies.length / 2)).map((company, index) => (
                      <div 
                        key={`${company.name}-row2-${index}`} 
                        className="w-[120px] h-[60px] mx-2 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center p-3  hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                      >
                        {company.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain"
                              sizes="120px"
                            />
                          </div>
                        ) : (
                          <span className="text-xs font-semibold text-gray-600 text-center">{company.name}</span>
                        )}
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
