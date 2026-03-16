import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hostel & Student Accommodations | IAER",
  description: "Hostel and student accommodation information at IAER.",
};

export default function HostelFeePage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/admissions/Students_collaborating_in_bright_campus_space.png"
            alt="Hostel & Student Accommodations"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide border border-gray-200 bg-white text-gray-800 shadow-sm">
              Admissions
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-black text-[#100902] leading-tight">
              Hostel & Student Accommodations
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl">
              Comfortable accommodation options with a safe, student-friendly environment designed to support learning, wellbeing, and campus life.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://admission.iaer.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/admissions#admissions-fee"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#100902] font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                View Course Fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Safety & Support",
                desc: "Student-friendly environment with clear guidelines and support from the admissions team.",
              },
              {
                title: "Convenience",
                desc: "Easy access to campus facilities, dining options, and transport connectivity.",
              },
              {
                title: "Comfort",
                desc: "Accommodation options designed for a balanced academic and personal life.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="text-lg font-black text-[#100902]">{c.title}</div>
                <div className="mt-2 text-sm text-gray-600 leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="text-xl md:text-2xl font-black text-[#100902]">
              Fees & Availability
            </div>
            <p className="mt-3 text-gray-600">
              For the latest hostel fee, room options, and seat availability, please contact the Admissions Office.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919007030123"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#100902] text-white font-bold hover:bg-[#100902]/90 transition-colors"
              >
                Call +91 90070 30123
              </a>
              <a
                href="mailto:admissions@iaer.in"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#100902] font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Email admissions@iaer.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
