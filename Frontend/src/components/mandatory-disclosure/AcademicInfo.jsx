"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { Briefcase, Monitor, HeartPulse, Plane, CheckCircle2 } from "lucide-react";

export default function AcademicInfo() {
  const disciplines = [
    { icon: Briefcase, name: "Management & Business Studies" },
    { icon: Monitor, name: "Information Technology & Data Sciences" },
    { icon: HeartPulse, name: "Healthcare & Hospital Administration" },
    { icon: Plane, name: "Hospitality, Aviation & Allied Services" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold text-primary mb-6">Academic Information</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                IAER offers a range of Undergraduate, Postgraduate, and Diploma programs across multiple disciplines. All programs are conducted as per MAKAUT-approved curriculum structures, academic regulations, and examination guidelines.
              </p>
              
              <div className="grid sm:grid-cols-1 gap-4">
                {disciplines.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">{item.name}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <div className="w-full lg:w-1/2">
            <RevealOnScroll delay={200}>
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Mandatory/iaer-academic-information-programs.png"
                  alt="Academic Programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
                
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-6 m-6 rounded-xl border border-gray-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <p className="font-bold text-gray-900">MAKAUT Approved Curriculum</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <p className="font-bold text-gray-900">Regulatory Compliance</p>
                    </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
