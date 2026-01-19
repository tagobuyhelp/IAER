import HeroSection from "@/components/academics/HeroSection";
import AcademicsOverviewSection from "@/components/academics/AcademicsOverviewSection";
import TeachingPracticesSection from "@/components/academics/TeachingPracticesSection";
import EvaluationSystemSection from "@/components/academics/EvaluationSystemSection";
import AcademicCalendarSection from "@/components/academics/AcademicCalendarSection";
import HolidaysListSection from "@/components/academics/HolidaysListSection";

export const metadata = {
  title: "Academics | IAER",
  description:
    "Learn about our curriculum, faculty, and academic resources designed to foster excellence.",
};

export default function Academics() {
  return (
    <div className="bg-white min-h-screen">
      <div id="academics-hero">
        <HeroSection />
      </div>
      <div id="academics-overview">
        <AcademicsOverviewSection />
      </div>
      <div id="academics-teaching-practices">
        <TeachingPracticesSection />
      </div>
      <div id="academics-evaluation">
        <EvaluationSystemSection />
      </div>
      <div id="academics-calendar">
        <AcademicCalendarSection />
      </div>
      <div id="academics-holidays">
        <HolidaysListSection />
      </div>
    </div>
  );
}
