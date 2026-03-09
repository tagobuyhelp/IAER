import HeroSection from "@/components/mandatory-disclosure/HeroSection";
import OverviewSection from "@/components/mandatory-disclosure/OverviewSection";
import InstitutionalDetails from "@/components/mandatory-disclosure/InstitutionalDetails";
import AcademicInfo from "@/components/mandatory-disclosure/AcademicInfo";
import GovernanceSection from "@/components/mandatory-disclosure/GovernanceSection";
import FacultyInfo from "@/components/mandatory-disclosure/FacultyInfo";
import InfrastructureSection from "@/components/mandatory-disclosure/InfrastructureSection";

export const metadata = {
  title: "Mandatory Disclosure | IAER",
  description: "Mandatory Disclosure of Institute of Advance Education & Research (IAER) as per UGC / MAKAUT / Regulatory Requirements.",
};

export default function MandatoryDisclosurePage() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <OverviewSection />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Downloads
            </h2>
            <p className="text-gray-600 mb-6">
              Official documents published under mandatory disclosure and institutional compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900">Mandatory Disclosure (PDF)</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="/files/IMAS_Mandatoy_DIsclosure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors"
                  >
                    View
                  </a>
                  <a
                    href="/files/IMAS_Mandatoy_DIsclosure.pdf"
                    download
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InstitutionalDetails />
      <AcademicInfo />
      <GovernanceSection />
      <FacultyInfo />
      <InfrastructureSection />
    </main>
  );
}
