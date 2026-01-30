"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { GraduationCap, BookOpen, UserCheck } from "lucide-react";

export default function FacultyInfo() {
  const points = [
    { icon: UserCheck, text: "Qualified and experienced faculty members as per MAKAUT norms" },
    { icon: GraduationCap, text: "Faculty with academic, research, and industry exposure" },
    { icon: BookOpen, text: "Continuous faculty development and training initiatives" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
            <RevealOnScroll>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">Faculty Information</h2>
                    <p className="text-gray-600">The backbone of our academic excellence.</p>
                </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
                {points.map((point, index) => (
                    <RevealOnScroll key={index} delay={index * 100}>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 text-accent border border-gray-100">
                                <point.icon className="w-8 h-8" />
                            </div>
                            <p className="font-medium text-gray-800 leading-snug">
                                {point.text}
                            </p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
