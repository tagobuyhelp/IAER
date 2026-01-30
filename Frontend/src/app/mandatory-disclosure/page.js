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
      <InstitutionalDetails />
      <AcademicInfo />
      <GovernanceSection />
      <FacultyInfo />
      <InfrastructureSection />
    </main>
  );
}
