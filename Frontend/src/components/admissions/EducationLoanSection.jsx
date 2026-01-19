"use client";

import { useInView } from "react-intersection-observer";
import { Coins, CreditCard, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EducationLoanSection() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    "Check eligibility with preferred loan provider.",
    "Collect offer letter/admission confirmation and fee structure.",
    "Submit KYC, academic records, and income documents as required.",
    "Choose EMI tenure and repayment plan.",
    "Complete verification and disbursal as per provider policy.",
  ];

  return (
    <section 
      id="admissions-loan" 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className={cn(
              "text-accent font-semibold tracking-wide uppercase text-sm mb-2 block transition-all duration-700 delay-100",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Financial Support
            </span>
            <h2 className={cn(
              "text-3xl lg:text-4xl font-bold text-[#100902] mb-6 transition-all duration-700 delay-200",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Education Loan Assistance
            </h2>
            <p className={cn(
              "text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              We believe financial constraints should not hinder education. EMI facilities are available via third-party loan providers to support your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className={cn(
              "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-700 delay-400",
              sectionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-[#100902]">How It Works</h3>
              </div>

              <ul className="space-y-4">
                {steps.map((step, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100 text-sm text-gray-700">
                  <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <p>Processing fees apply as per provider terms. Loan approval is at the sole discretion of the lending partner.</p>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="space-y-6">
              <div className={cn(
                "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-700 delay-500",
                sectionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#100902]">Payment Options</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Multiple online payment options are supported via the IAER portal for application and fee transactions. We accept credit/debit cards, net banking, and UPI.
                </p>
              </div>

              <div className={cn(
                "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-700 delay-600",
                sectionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#100902]">Documentation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Loan documentation requirements vary. Common documents include admission proof, academic records, KYC, and income proof of co-borrower. Refer to the provider’s checklist.
                </p>
              </div>

              <div className={cn(
                "p-6 bg-[#100902] text-white rounded-2xl shadow-lg transition-all duration-700 delay-700",
                sectionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <p className="text-center font-medium">
                  Need assistance? Contact the Admissions Office for guidance on loan documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
