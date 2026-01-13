import { Award, CheckCircle, Shield, FileText, Globe, Building2, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Recognition & Approvals | IAER",
  description: "IAER is a recognized institution approved by statutory bodies like AICTE and affiliated with MAKAUT.",
};

export default function RecognitionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a0601] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            About IAER
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Recognition & Approvals
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized & Approved by Statutory Bodies
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              IAER is a recognized institution of higher learning committed to delivering quality education aligned with national regulatory standards. The institute operates under approvals and affiliations granted by statutory authorities of the Government of India, ensuring academic credibility, regulatory compliance, and industry relevance across all programs offered.
            </p>
          </div>
        </div>
      </section>

      {/* MAKAUT Affiliation */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none"></div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#100902]">Affiliation with MAKAUT</h2>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  IAER is affiliated with MAKAUT, a state public university recognized under Section 2(f) of the UGC Act, 1956. All affiliated undergraduate programs follow the academic framework, curriculum guidelines, and evaluation standards prescribed by MAKAUT, ensuring degree validity and academic rigor.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 bg-[#100902] text-white px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                  View Affiliation Details
                </Link>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                 {/* Placeholder for MAKAUT Logo if available, using icon for now */}
                 <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Building2 className="w-24 h-24 text-gray-300" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AICTE Approval */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#100902]">Approval by AICTE</h2>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">All India Council for Technical Education (AICTE)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    IAER is approved by AICTE to conduct management and technical programs such as MBA, BBA, and BCA. AICTE approval confirms that IAER meets prescribed norms related to infrastructure, faculty qualifications, curriculum design, and student support systems.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                   <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <Shield className="w-24 h-24 text-blue-200" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Other Recognitions Grid */}
      <section className="py-16 lg:py-24 bg-[#100902] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Industry Bodies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Recognition by CII, NHRDI & NSDC</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  IAER, is recognized by the Confederation of Indian Industry (CII), National Human Resource Development of India (NHRDI), National Skill Development Corporation (NSDC). This recognition ensures that degrees awarded through IAER’s affiliated programs are valid for higher education, employment, and competitive examinations across India.
                </p>
              </div>

              {/* Regulatory Compliance */}
              <div>
                 <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h2 className="text-2xl font-bold">Government & Regulatory Compliance</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  IAER adheres strictly to policies and guidelines issued by relevant government authorities, academic councils, and regulatory bodies. The institute maintains transparency in admissions, assessments, academic delivery, and student welfare, aligned with national education standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary List */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#100902] mb-8 text-center">Other Recognitions & Academic Associations</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Affiliated to MAKAUT (WBUT), Government of West Bengal",
                  "Approved by AICTE, Ministry of Education, Government of India",
                  "Programs aligned with UGC regulations and academic frameworks",
                  "Industry-integrated certifications and skill programs developed in collaboration with professional bodies",
                  "Academic partnerships supporting employability, entrepreneurship, and applied learning"
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
