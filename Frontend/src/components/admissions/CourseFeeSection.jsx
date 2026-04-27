"use client";
import { Banknote, Table, Info, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CourseFeeSection() {
    const ugPrograms = [
        { program: "Bachelor Of Business Administration", code: "BBA", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BBA in Hospital Management", code: "BBA-HM", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BBA in Business Analytics", code: "BBA-BA", duration: "4 Years", fee: "5,04,000", scholarship: "50,000", net: "4,54,000" },
        { program: "BBA in Global Business", code: "BBA-GB", duration: "4 Years", fee: "5,04,000", scholarship: "50,000", net: "4,54,000" },
        { program: "BBA in Aviation, Hospitality Services and Management", code: "BBA-AHSM", duration: "4 Years", fee: "5,04,000", scholarship: "50,000", net: "4,54,000" },
        { program: "BBA in Sports Management", code: "BBA-SM", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "Bachelor of Computer Application", code: "BCA", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BCA in Data Science & Cyber Security", code: "BCA-DSCS", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BCA in Artificial Intelligence & Machine Learning", code: "BCA-AIML", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "B.Sc in Data Science", code: "BSCDS", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BSc in Cyber Security", code: "BSCCS", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "BMLT – Bachelor of Medical Laboratory Technology", code: "BMLT", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
        { program: "B.Sc. in Hospitality & Hotel Administration (Hotel Management)", code: "BHHA", duration: "4 Years", fee: "4,12,000", scholarship: "50,000", net: "3,62,000" },
    ];

    const diplomaAndCertificationPrograms = [
        { program: "Diploma In Medical Lab Technology", code: "DMLT", duration: "2 Years", fee: "1,20,000", scholarship: "21,000", net: "99,000" },
        { program: "Diploma in Aviation & Hospitality Management", code: "DAHM", duration: "1–2 Years", fee: "1,20,000", scholarship: "21,000", net: "99,000" },
        { program: "Advance Certification in Airline Cabin Crew", code: "ACAC", duration: "6 Months", fee: "1,00,000", scholarship: "40,000", net: "60,000" },
        { program: "Advance Certification in Agentic AI", code: "ACAI", duration: "6 Months", fee: "60,000", scholarship: "15,000", net: "45,000" },
        { program: "Advance Certification in Software Development", code: "ACSD", duration: "6 Months", fee: "60,000", scholarship: "25,000", net: "35,000" },
        { program: "Advance Certification in Full Stack Development", code: "ACFD", duration: "6 Months", fee: "60,000", scholarship: "25,000", net: "35,000" },
    ];

    const pgPrograms = [
        { program: "MBA (Master of Business Administration)", code: "MBA", duration: "2 Years", fee: "5,95,000", scholarship: "50,000", net: "5,45,000" },
        { program: "Post Graduate Diploma in Management (Marketing / HRM / Hospital Administration & Healthcare Management)", code: "PGDM", duration: "2 Years", fee: "5,95,000", scholarship: "50,000", net: "5,45,000" },
        { program: "PGDM – Business Analytics", code: "PGDM-BA", duration: "2 Years", fee: "5,95,000", scholarship: "50,000", net: "5,45,000" },
        { program: "PGDM – Artificial Intelligence & Data Science", code: "PGDM-AIADS", duration: "2 Years", fee: "5,95,000", scholarship: "50,000", net: "5,45,000" },
        { program: "PGDM – Fintech", code: "PGDM-FNT", duration: "2 Years", fee: "5,95,000", scholarship: "50,000", net: "5,45,000" },
        { program: "Master of Hospital Administration (MHA)", code: "MHA", duration: "2 Years", fee: "2,90,000", scholarship: "50,000", net: "2,40,000" },
    ];

    return (
        <section id="admissions-fee" className="py-10 sm:py-14 lg:py-24 bg-gray-50 relative overflow-hidden">
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
                    <div className="text-center mb-7 sm:mb-10 md:mb-12">
                        <span className="text-accent font-semibold tracking-wide uppercase text-[11px] sm:text-sm mb-2 block">
                            Financial Information
                        </span>
                        <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#100902] mb-4 sm:mb-6">
                            Course Fee Structure
                        </h2>
                        <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                            Transparent fee structure with Early Bird Scholarships to make quality education accessible.
                        </p>
                    </div>

                    {/* UG Table */}
                    <div className="mb-10 sm:mb-12">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <Banknote className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#100902]">Undergraduate Programs</h3>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[900px]">
                                    <thead>
                                        <tr className="bg-[#100902] text-white">
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Program</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Code</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Duration</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Total Fee (₹)</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide text-accent">Scholarship (₹)</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Net Fee (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {ugPrograms.map((p, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-3 sm:p-4 font-semibold text-gray-800 text-[11px] sm:text-sm">{p.program}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm font-mono bg-gray-50/50">{p.code}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm">{p.duration}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm font-medium">{p.fee}</td>
                                                <td className="p-3 sm:p-4 text-green-600 text-[11px] sm:text-sm font-medium">-{p.scholarship}</td>
                                                <td className="p-3 sm:p-4 font-bold text-[#100902] text-[11px] sm:text-sm">{p.net}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-2 sm:mt-3 text-[11px] sm:text-xs text-gray-500">
                            Early Bird Scholarship valid till 31st May 2026.
                        </div>
                    </div>

                    {/* Diploma & Certification Table */}
                    <div className="mb-10 sm:mb-12">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <Table className="w-5 h-5 sm:w-6 sm:h-6 text-[#100902]" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#100902]">Diploma & Certification Programs</h3>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[900px]">
                                    <thead>
                                        <tr className="bg-[#100902] text-white">
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Program</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Code</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Duration</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Total Fee (₹)</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide text-accent">Scholarship (₹)</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Net Fee (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {diplomaAndCertificationPrograms.map((p, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-3 sm:p-4 font-semibold text-gray-800 text-[11px] sm:text-sm">{p.program}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm font-mono bg-gray-50/50">{p.code}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm">{p.duration}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm font-medium">{p.fee}</td>
                                                <td className="p-3 sm:p-4 text-green-600 text-[11px] sm:text-sm font-medium">-{p.scholarship}</td>
                                                <td className="p-3 sm:p-4 font-bold text-[#100902] text-[11px] sm:text-sm">{p.net}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-2 sm:mt-3 text-[11px] sm:text-xs text-gray-500">
                            Early Bird Scholarship valid till 30th Apr 2026.
                        </div>
                    </div>

                    {/* PG Table */}
                    <div className="mb-10 sm:mb-12">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <Table className="w-5 h-5 sm:w-6 sm:h-6 text-[#100902]" />
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#100902]">Post Graduate Programs</h3>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[1000px]">
                                    <thead>
                                        <tr className="bg-[#100902] text-white">
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Program</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Code</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Duration</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Gross Fee (₹)</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide text-accent">Scholarship (₹)</th>
                                            <th className="p-3 sm:p-4 font-semibold text-[11px] sm:text-sm tracking-wide">Net Fee (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {pgPrograms.map((p, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-3 sm:p-4 font-semibold text-gray-800 text-[11px] sm:text-sm">{p.program}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm font-mono bg-gray-50/50">{p.code}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm">{p.duration}</td>
                                                <td className="p-3 sm:p-4 text-gray-600 text-[11px] sm:text-sm font-medium">{p.fee}</td>
                                                <td className="p-3 sm:p-4 text-green-600 text-[11px] sm:text-sm font-medium">-{p.scholarship}</td>
                                                <td className="p-3 sm:p-4 font-bold text-[#100902] text-[11px] sm:text-sm">{p.net}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-2 sm:mt-3 text-[11px] sm:text-xs text-gray-500">
                            Early Bird Scholarship valid till 30th Apr 2026.
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="p-4 sm:p-6 bg-orange-50/50 border border-orange-100 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <Info className="w-5 h-5 text-accent" />
                                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#100902]">Fee Details</h4>
                            </div>
                            <ul className="space-y-2 text-gray-700 text-[12px] sm:text-sm md:text-base list-disc list-inside marker:text-accent">
                                <li>Undergraduate programs include University Application, Development & Registration Fee (one time) and other University charges.</li>
                                <li>Undergraduate exam fee to be paid separately: ₹1,200 per semester.</li>
                                <li>Fees include two T-shirts and one formal uniform (except shoes) every year.</li>
                                <li>Post Graduate exam fee to be paid separately: ₹1,500 per semester.</li>
                                <li>Post Graduate one-time uniform charge: ₹19,600 at admission.</li>
                                <li>Post Graduate one-time sports & cultural fee: ₹2,000 at admission.</li>
                            </ul>
                        </div>
                        <div className="p-4 sm:p-6 bg-blue-50/50 border border-blue-100 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#100902]">Scholarship Policy</h4>
                            </div>
                            <ul className="space-y-2 text-gray-700 text-[12px] sm:text-sm md:text-base list-disc list-inside marker:text-blue-600">
                                <li>Early Bird Scholarship of ₹50,000 on every degree program.</li>
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
