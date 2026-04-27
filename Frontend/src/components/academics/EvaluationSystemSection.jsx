"use client";

import React, { useState } from "react";
import {
  FileCheck,
  CheckCircle2,
  GraduationCap,
  Scale,
  ShieldCheck,
  BarChart3,
  ScrollText,
  Users,
  Search,
  Lock,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function EvaluationSystemSection() {
  const [activeTab, setActiveTab] = useState("methodology");

  return (
    <div id="academics-evaluation-system" className="relative py-10 sm:py-14 lg:py-16 bg-gray-50/50 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/academic/system-of-evaluation.webp"
                alt="System of Evaluation"
                fill
                className="object-cover opacity-10"
                sizes="100vw"
              />
            </div>
      {/* HEADER SECTION */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-semibold tracking-wide uppercase text-[11px] sm:text-sm mb-2 block">
            Examination & Grading
          </span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#100902] mb-4 sm:mb-6">
            System of Evaluation
          </h2>
          <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-light mb-6 sm:mb-8">
            IAER’s evaluation system emphasizes fairness, transparency, and continuous assessment. We follow a scientific approach to ensure consistency and academic integrity.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "methodology", label: "Methodology", icon: FileCheck },
              { id: "weightage", label: "Weightage & Grading", icon: Scale },
              { id: "qa", label: "Transparency & QA", icon: ShieldCheck },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-6 h-10 sm:h-11 rounded-full text-[12px] sm:text-sm font-semibold transition-all duration-300 border",
                  activeTab === tab.id
                    ? "bg-[#100902] text-white border-[#100902] shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto min-h-[340px] sm:min-h-[400px]">
          
          {/* METHODOLOGY TAB */}
          {activeTab === "methodology" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
                {/* Internal Assessment */}
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#100902]">Internal Assessment</h3>
                        <p className="text-xs text-gray-500">Continuous Semester Evaluation</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-[12px] sm:text-sm leading-relaxed">
                    Focuses on continuous evaluation throughout the semester to track student progress effectively.
                  </p>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {[
                      "Periodic tests & Surprise quizzes",
                      "Assignments & Case studies",
                      "Tutorials & Presentations",
                      "Practical/Laboratory assessments",
                      "Seminar participation & Projects",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-[12px] sm:text-sm text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* External Assessment */}
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-accent shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#100902]">External Assessment</h3>
                        <p className="text-xs text-gray-500">End Semester Examination</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-[12px] sm:text-sm leading-relaxed">
                    Comprehensive evaluation at the end of each semester to assess understanding of course objectives.
                  </p>
                  <div className="bg-orange-50/50 p-4 sm:p-6 rounded-2xl border border-orange-100">
                      <h4 className="font-bold text-[#100902] mb-2 text-sm">Key Focus Areas</h4>
                      <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-[12px] sm:text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                              Conceptual Clarity
                          </li>
                          <li className="flex items-start gap-2 text-[12px] sm:text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                              Application of Knowledge
                          </li>
                           <li className="flex items-start gap-2 text-[12px] sm:text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                              Analytical & Problem Solving Skills
                          </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* WEIGHTAGE TAB */}
          {activeTab === "weightage" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-12 shadow-xl shadow-gray-100 border border-gray-100">
                  <div className="flex flex-col lg:flex-row gap-12">
                      {/* Table Section */}
                      <div className="lg:w-1/2">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#100902] mb-4 sm:mb-6 flex items-center gap-2">
                              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                              Evaluation Weightage
                          </h3>
                          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full min-w-[560px] text-sm text-left">
                                <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4">Component</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center">Internal</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center">External</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center">Total</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-[#100902]">Theory</td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600 bg-blue-50/30">40%</td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600 bg-orange-50/30">60%</td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-[#100902]">100%</td>
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-[#100902]">Practical</td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600 bg-blue-50/30">60%</td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-600 bg-orange-50/30">40%</td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-[#100902]">100%</td>
                                </tr>
                                </tbody>
                            </table>
                          </div>
                          <div className="mt-3 sm:mt-4 flex gap-4 text-[11px] sm:text-xs text-gray-500">
                              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-50 border border-blue-100 rounded-sm"></div> Internal</div>
                              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-orange-50 border border-orange-100 rounded-sm"></div> External</div>
                          </div>
                      </div>

                      {/* Grading Logic Section */}
                      <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                          <div className="bg-[#100902] text-white p-4 sm:p-6 rounded-2xl relative overflow-hidden">
                              <div className="relative z-10">
                                  <h4 className="font-bold text-base sm:text-lg mb-2 flex items-center gap-2">
                                      <BarChart3 className="w-5 h-5 text-accent" />
                                      Scientific Grading
                                  </h4>
                                  <p className="text-gray-400 text-[12px] sm:text-sm leading-relaxed">
                                      We employ a <strong>Relative Grading System</strong> where grades are awarded using Normal Distribution. This eliminates subjectivity and ensures that student performance is benchmarked against the class average.
                                  </p>
                              </div>
                              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                              <div className="border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                  <h5 className="font-bold text-[#100902] text-sm mb-1">Fairness</h5>
                                  <p className="text-xs text-gray-500">Unbiased evaluation metrics</p>
                              </div>
                              <div className="border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                  <h5 className="font-bold text-[#100902] text-sm mb-1">Consistency</h5>
                                  <p className="text-xs text-gray-500">Uniform standards across batches</p>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
          )}

          {/* QA & TRANSPARENCY TAB */}
          {activeTab === "qa" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                        {
                            title: "Automated Question Banks",
                            desc: "Ensures standardized and unpredictable final exams.",
                            icon: ScrollText,
                            color: "text-blue-600",
                            bg: "bg-blue-50"
                        },
                        {
                            title: "Table Marking",
                            desc: "Centralized evaluation to maintain uniformity.",
                            icon: Users,
                            color: "text-purple-600",
                            bg: "bg-purple-50"
                        },
                        {
                            title: "External Audit",
                            desc: "10% of answer books evaluated by outside experts.",
                            icon: ShieldCheck,
                            color: "text-green-600",
                            bg: "bg-green-50"
                        },
                        {
                            title: "Full Transparency",
                            desc: "Students can view and sign answer books after checks.",
                            icon: Search,
                            color: "text-orange-600",
                            bg: "bg-orange-50"
                        },
                        {
                            title: "Grievance Redressal",
                            desc: "Evaluation Review Board for mark disputes.",
                            icon: Scale,
                            color: "text-red-600",
                            bg: "bg-red-50"
                        },
                        {
                            title: "Secure Process",
                            desc: "Marks displayed by departments before submission.",
                            icon: Lock,
                            color: "text-cyan-600",
                            bg: "bg-cyan-50"
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col gap-3 sm:gap-4">
                            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", item.bg)}>
                                <item.icon className={cn("w-5 h-5", item.color)} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#100902] mb-1 text-sm sm:text-base">{item.title}</h4>
                                <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
