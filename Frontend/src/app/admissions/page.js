import AdmissionsHeroSection from "@/components/admissions/AdmissionsHeroSection";
import AdmissionsOverviewSection from "@/components/admissions/AdmissionsOverviewSection";
import EligibilitySection from "@/components/admissions/EligibilitySection";
import HowToApplySection from "@/components/admissions/HowToApplySection";
import CourseFeeSection from "@/components/admissions/CourseFeeSection";
import ScholarshipsSection from "@/components/admissions/ScholarshipsSection";
import EducationLoanSection from "@/components/admissions/EducationLoanSection";
import CampusLifeSection from "@/components/admissions/CampusLifeSection";

export const metadata = {
  title: "Admissions | IAER",
  description: "Join IAER to embark on a journey of academic excellence. Explore our programs, admission process, fees, and scholarships.",
};

export default function AdmissionsPage() {
  return (
    <main className="bg-white min-h-screen">
      <AdmissionsHeroSection />
      <AdmissionsOverviewSection />
      <EligibilitySection />
      <HowToApplySection />
      <CourseFeeSection />
      <ScholarshipsSection />
      <EducationLoanSection />
      <CampusLifeSection />
    </main>
  );
}
