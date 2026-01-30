"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { ShieldCheck, FileText, Lock } from "lucide-react";

export default function OverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Institute of Advance Education & Research (IAER) is committed to maintaining the highest standards of <span className="text-accent font-semibold">transparency, accountability, and good governance</span>. In compliance with statutory requirements prescribed by regulatory bodies, IAER publicly discloses institutional, academic, administrative, and infrastructural information.
              </p>
              <div className="bg-gray-50 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  This Mandatory Disclosure page is provided in accordance with applicable guidelines of UGC, MAKAUT, and other competent authorities, ensuring that students, parents, and stakeholders have access to authentic and updated information about the institution.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="w-full lg:w-1/2">
            <RevealOnScroll delay={200}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/Mandatory/iaer-mandatory-disclosure-overview-transparency.png"
                  alt="Overview and Transparency"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                    <div className="text-center text-white">
                        <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-accent" />
                        <span className="text-xs font-bold uppercase">Transparency</span>
                    </div>
                    <div className="text-center text-white">
                        <FileText className="w-8 h-8 mx-auto mb-2 text-accent" />
                        <span className="text-xs font-bold uppercase">Compliance</span>
                    </div>
                    <div className="text-center text-white">
                        <Lock className="w-8 h-8 mx-auto mb-2 text-accent" />
                        <span className="text-xs font-bold uppercase">Integrity</span>
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
