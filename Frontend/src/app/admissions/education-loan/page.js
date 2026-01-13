import { Coins, CreditCard, FileText, Phone } from "lucide-react";

export const metadata = {
  title: "Education Loan | IAER Admissions",
  description: "Information on EMI facility and education loans through third-party providers.",
};

export default function EducationLoanPage() {
  const steps = [
    "Check eligibility with preferred loan provider.",
    "Collect offer letter/admission confirmation and fee structure.",
    "Submit KYC, academic records, and income documents as required.",
    "Choose EMI tenure and repayment plan.",
    "Complete verification and disbursal as per provider policy.",
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Admissions
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Education Loan</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            EMI facility is available via third-party loan providers. Processing fees apply as per provider terms.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Coins className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-[#100902]">How It Works</h2>
            </div>

            <ul className="space-y-3 text-gray-700 text-sm">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-orange-50 border border-orange-100 rounded-xl text-sm text-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-5 h-5 text-accent" />
                  <span className="font-bold text-[#100902]">Payment Options</span>
                </div>
                <p>Multiple online payment options are supported via the IAER portal for application and fee transactions.</p>
              </div>
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl text-sm text-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-[#100902]">Documentation</span>
                </div>
                <p>Loan documentation requirements vary. Refer to the chosen provider’s checklist for accurate processing.</p>
              </div>
            </div>

            <div className="mt-10 p-4 border border-gray-200 rounded-lg bg-gray-50 text-sm text-gray-700">
              For assistance, contact the Admissions Office. We will guide you through preparing documents required by loan partners.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

