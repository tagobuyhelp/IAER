"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Users, Gavel, FileCheck } from "lucide-react";

export default function GovernanceSection() {
  const bodies = [
    {
      icon: Users,
      title: "Board of Governors",
      desc: "The apex body responsible for strategic direction and policy making."
    },
    {
      icon: Gavel,
      title: "Academic & Administrative Committees",
      desc: "Ensuring smooth operations and academic excellence."
    },
    {
      icon: FileCheck,
      title: "Statutory Committees",
      desc: "Formed as per UGC norms to ensure compliance and standards."
    }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Governance & Administration</h2>
            <p className="text-gray-300 text-lg">
              IAER follows a structured governance framework ensuring effective policy implementation, academic quality assurance, and institutional development.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bodies.map((body, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors h-full">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <body.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{body.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {body.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
