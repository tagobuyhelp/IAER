"use client";
import React from "react";
import { UserPlus, Smartphone, FileText, CreditCard, Upload, Download, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function HowToApplySection() {
    const steps = [
        {
            icon: UserPlus,
            title: "Register Online",
            desc: "Create your account at the IAER Application Centre using a valid Email ID.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: Smartphone,
            title: "Verify Contact",
            desc: "Verify your mobile number via OTP and email for secure communication.",
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            icon: FileText,
            title: "Fill Application",
            desc: "Enter personal details, academic qualifications, and program preference.",
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            icon: CreditCard,
            title: "Pay Fee",
            desc: "Pay the application fee securely via the integrated payment gateway.",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Upload,
            title: "Upload Docs",
            desc: "Upload scanned copies of mark sheets, ID proof, and photographs.",
            color: "text-pink-600",
            bg: "bg-pink-50"
        },
        {
            icon: Download,
            title: "Submit & Save",
            desc: "Review, submit, and download the final application PDF for records.",
            color: "text-cyan-600",
            bg: "bg-cyan-50"
        },
    ];

    return (
        <section id="admissions-apply" className="py-16 lg:py-24 bg-[#100902] relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/admissions/Assisting_with_online_applications_in_office.png"
                    alt="Application Process"
                    fill
                    className="object-cover opacity-1"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#100902]/95 via-[#100902]/80 to-[#100902]/95" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">
                            Application Process
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            How to Apply
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            IAER follows a simple, secure, and fully online application process. Follow these 6 steps to start your journey.
                        </p>
                    </div>

                    {/* Mobile: Horizontal Scroll, Desktop: Grid */}
                    <div className="flex items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth scrollbar-none relative">
                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 -z-10 dashed-line"></div>

                        {steps.map((step, idx) => (
                            <div 
                                key={idx} 
                                className="min-w-[85vw] md:min-w-0 snap-center md:snap-align-none relative bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full hover:bg-white/10"
                            >
                                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform group-hover:scale-110 shadow-sm shrink-0 bg-white/10", step.color)}>
                                    <step.icon className={cn("w-8 h-8", step.color)} />
                                </div>
                                <div className="text-center flex-grow flex flex-col">
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold mb-4 shadow-md mx-auto">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <Info className="w-6 h-6 text-accent shrink-0 mt-1" />
                            <div className="text-sm text-gray-300">
                                <p className="font-semibold text-white mb-1">Important Note:</p>
                                <p>Applications can be saved and completed later. Keep your login credentials confidential. All updates will be sent to your registered email.</p>
                            </div>
                        </div>
                        <Link
                            href="https://admission.iaer.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:shadow-lg whitespace-nowrap shadow-accent/20 flex items-center justify-center"
                        >
                            Apply Online Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
