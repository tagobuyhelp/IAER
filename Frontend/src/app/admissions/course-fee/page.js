import { Banknote, Table, Info, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Course Fee | IAER Admissions",
  description: "Fee structure for Undergraduate and Postgraduate Diploma programs with Early Bird Scholarships.",
};

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

export default function CourseFeePage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Admissions
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Course Fee
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Early Bird Scholarships make quality education more accessible. Explore fee details below.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Banknote className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-[#100902]">Undergraduate & Postgraduate Programs – Fee Structure</h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-[#100902]">Name of Program</th>
                      <th className="p-4 font-bold text-[#100902]">Duration</th>
                      <th className="p-4 font-bold text-[#100902]">Total Course Fee (INR)</th>
                      <th className="p-4 font-bold text-[#100902]">Early Bird Scholarship (INR)</th>
                      <th className="p-4 font-bold text-[#100902]">Net Fee After Scholarship (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {ugPrograms.map((p, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-semibold text-[#100902]">{p.program}</td>
                        <td className="p-4 text-gray-600">{p.duration}</td>
                        <td className="p-4 text-gray-600">{p.fee}</td>
                        <td className="p-4 text-gray-600">{p.scholarship}</td>
                        <td className="p-4 font-semibold text-[#100902]">{p.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-12 mb-6">
              <Table className="w-6 h-6 text-[#100902]" />
              <h3 className="text-xl font-bold text-[#100902]">Post Graduate Diploma Programs – Fee Structure (After Scholarship)</h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-[#100902]">Name of Program</th>
                      <th className="p-4 font-bold text-[#100902]">Program Code</th>
                      <th className="p-4 font-bold text-[#100902]">Program Fee (INR)</th>
                      <th className="p-4 font-bold text-[#100902]">Total Payable (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pgDiploma.map((p, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-semibold text-[#100902]">{p.program}</td>
                        <td className="p-4 text-gray-600">{p.code}</td>
                        <td className="p-4 text-gray-600">{p.programFee}</td>
                        <td className="p-4 font-semibold text-[#100902]">{p.totalPayable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-orange-50 border border-orange-100 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Info className="w-5 h-5 text-accent" />
                  <h4 className="text-lg font-bold text-[#100902]">Important Notes</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Security Deposit is refundable after successful completion of the program.</li>
                  <li>Uniform Charges: ₹10,000 per year (applicable for BSCHHA & BSCASDT only).</li>
                  <li>EMI Facility: Available through third-party loan providers.</li>
                  <li>Processing Fees: Applicable as per loan provider terms.</li>
                  <li>University Registration Fee & Examination Fee are payable separately.</li>
                </ul>
              </div>
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-bold text-[#100902]">Disclaimers</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>An inaugural discount of 10% is applicable on the Program Fee.</li>
                  <li>The discount is calculated only on the Program Fee.</li>
                  <li>For EMI plans, the scholarship amount is adjusted against the loan value.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

