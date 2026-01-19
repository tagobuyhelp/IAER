"use client";
import React from "react";
import { Banknote, Table, Info, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CourseFeeSection() {
    const ugPrograms = [
        { program: "Bachelor of Business Administration (BBA)", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BBA (Hospital Management)", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BBA (Business Analytics)", duration: "4 Years", fee: "5,04,000", scholarship: "50,000", net: "4,54,000" },
        { program: "BBA (Global Business)", duration: "4 Years", fee: "5,04,000", scholarship: "50,000", net: "4,54,000" },
        { program: "BBA (Aviation, Hospitality & Service Management)", duration: "4 Years", fee: "5,04,000", scholarship: "50,000", net: "4,54,000" },
        { program: "Bachelor of Computer Application (BCA)", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "B.Sc in Data Science (BSCDS)", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "B.Sc in Cyber Security (BSCCS)", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "B.Sc in Medical Laboratory Technology (BMLT)", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "B.Sc in Hospitality & Hotel Administration (BSCHHA)", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
    ];

    const pgDiploma = [
        { program: "PG Diploma in Management", code: "PGDM", programFee: "5,45,000", totalPayable: "5,95,000" },
        { program: "PGDM in AI & Data Science", code: "PGDMAIDS", programFee: "5,45,000", totalPayable: "5,95,000" },
        { program: "PGDM in Fintech", code: "PGDMFINT", programFee: "5,45,000", totalPayable: "5,95,000" },
        { program: "PGDM in Business Analytics", code: "PGDMBA", programFee: "5,45,000", totalPayable: "5,95,000" },
        { program: "PGDM (For Working Executives)", code: "PGDMEX", programFee: "93,000", totalPayable: "1,08,000" },
    ];

    return (
        <section id="admissions-fee" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/admissions/Meeting_with_the_admissions_counselor.png"
                    alt="Admissions Counseling"
                    fill
                    className="object-cover opacity-10"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">
                            Financial Information
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">
                            Course Fee Structure
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Transparent fee structure with Early Bird Scholarships to make quality education accessible.
                        </p>
                    </div>

                    {/* UG Table */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Banknote className="w-6 h-6 text-accent" />
                            <h3 className="text-xl font-bold text-[#100902]">Undergraduate Programs</h3>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="bg-[#100902] text-white">
                                            <th className="p-4 font-semibold text-sm tracking-wide">Program</th>
                                            <th className="p-4 font-semibold text-sm tracking-wide">Duration</th>
                                            <th className="p-4 font-semibold text-sm tracking-wide">Total Fee (₹)</th>
                                            <th className="p-4 font-semibold text-sm tracking-wide text-accent">Scholarship (₹)</th>
                                            <th className="p-4 font-semibold text-sm tracking-wide">Net Fee (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {ugPrograms.map((p, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-semibold text-gray-800 text-sm">{p.program}</td>
                                                <td className="p-4 text-gray-600 text-sm">{p.duration}</td>
                                                <td className="p-4 text-gray-600 text-sm font-medium">{p.fee}</td>
                                                <td className="p-4 text-green-600 text-sm font-medium">-{p.scholarship}</td>
                                                <td className="p-4 font-bold text-[#100902] text-sm">{p.net}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* PG Table */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Table className="w-6 h-6 text-[#100902]" />
                            <h3 className="text-xl font-bold text-[#100902]">Postgraduate Diploma Programs</h3>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="bg-[#100902] text-white">
                                            <th className="p-4 font-semibold text-sm tracking-wide">Program</th>
                                            <th className="p-4 font-semibold text-sm tracking-wide">Code</th>
                                            <th className="p-4 font-semibold text-sm tracking-wide">Program Fee (₹)</th>
                                            <th className="p-4 font-semibold text-sm tracking-wide">Total Payable (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {pgDiploma.map((p, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-semibold text-gray-800 text-sm">{p.program}</td>
                                                <td className="p-4 text-gray-600 text-sm font-mono bg-gray-50/50">{p.code}</td>
                                                <td className="p-4 text-gray-600 text-sm">{p.programFee}</td>
                                                <td className="p-4 font-bold text-[#100902] text-sm">{p.totalPayable}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <Info className="w-5 h-5 text-accent" />
                                <h4 className="text-lg font-bold text-[#100902]">Fee Details</h4>
                            </div>
                            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside marker:text-accent">
                                <li>Security Deposit is refundable after program completion.</li>
                                <li>Uniform Charges: ₹10,000/year (for BSCHHA & BSCASDT).</li>
                                <li>University Registration & Exam Fees are extra.</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                <h4 className="text-lg font-bold text-[#100902]">Scholarship Policy</h4>
                            </div>
                            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside marker:text-blue-600">
                                <li>10% Inaugural Discount on Program Fee.</li>
                                <li>Scholarship adjusted against loan value for EMI plans.</li>
                                <li>Early Bird offers are subject to limited seats.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
