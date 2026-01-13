import { ClipboardCheck, LineChart, Target, Users, BookOpen, MessageSquare, Brain, FileCheck, CheckCircle2, Briefcase, GraduationCap, Scale, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "System of Evaluation | IAER",
  description: "IAER's scientific and structured evaluation system ensuring fairness, transparency, and academic integrity.",
};

export default function EvaluationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Academics
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            System of Evaluation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fairness, Transparency, and Academic Integrity.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#100902] mb-6">System of Evaluation at IAER</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
              The system of evaluation at Institute of Advance Education & Research (IAER) is designed to ensure fairness, transparency, objectivity, and academic integrity, while aligning with national regulatory standards and industry expectations. The evaluation framework follows a scientific and structured approach, minimizing subjectivity and ensuring consistency across programs, disciplines, and batches.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              IAER’s evaluation system emphasizes continuous assessment, holistic learning outcomes, and merit-based grading, enabling students to clearly understand their academic progress and areas of improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Structure of Evaluation System */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">Framework</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mt-2">Structure of the Evaluation System</h2>
              <p className="text-gray-600 mt-4">The evaluation at IAER is divided into two key components.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Internal Assessment */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#100902]">1. Internal Assessment</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Internal assessment focuses on continuous evaluation throughout the semester and may include:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Periodic tests",
                    "Class quizzes and surprise tests",
                    "Assignments and case studies",
                    "Tutorials and presentations",
                    "Practical/laboratory assessments",
                    "Seminar participation and project work"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Assessment */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#100902]">2. External Assessment</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  At the end of each semester, End Semester Examinations are conducted to comprehensively evaluate students’ understanding of course objectives and learning outcomes.
                </p>
                
                <div className="mt-auto">
                    <h4 className="font-bold text-[#100902] mb-4 text-sm uppercase tracking-wide">Evaluation Weightage</h4>
                    <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 font-bold uppercase">
                        <tr>
                            <th className="px-4 py-3">Criteria</th>
                            <th className="px-4 py-3 text-center">Internal</th>
                            <th className="px-4 py-3 text-center">External</th>
                            <th className="px-4 py-3 text-center">Total</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3 font-medium text-gray-900">Theory</td>
                            <td className="px-4 py-3 text-center text-gray-600">40</td>
                            <td className="px-4 py-3 text-center text-gray-600">60</td>
                            <td className="px-4 py-3 text-center font-bold text-[#100902]">100</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 font-medium text-gray-900">Practical</td>
                            <td className="px-4 py-3 text-center text-gray-600">60</td>
                            <td className="px-4 py-3 text-center text-gray-600">40</td>
                            <td className="px-4 py-3 text-center font-bold text-[#100902]">100</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salient Features */}
      <section className="py-16 lg:py-24 bg-[#100902] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">Key Highlights</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2">Salient Features</h2>
              <p className="text-gray-400 mt-4">Ensuring a scientific, objective, and transparent examination system.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Question banks created via automated software processes ensure standardized final exams.",
                "Table Marking process used for final semester evaluation to maintain uniformity.",
                "10% of answer books randomly evaluated by outside experts to ensure fairness.",
                "Transparency: Students can view and sign their answer books after evaluation.",
                "Evaluation Review Board available for grievance redressal if a student disagrees with marks.",
                "Final Internal Evaluation marks displayed by departments before submission.",
                "Relative grading system used for conversion of marks into grades.",
                "Grades awarded using Normal Distribution to eliminate subjectivity."
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-accent shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}