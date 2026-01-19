import HeroSection from "@/components/about/HeroSection";
import AboutOverviewSection from "@/components/about/AboutOverviewSection";
import PracticalEducationSection from "@/components/about/PracticalEducationSection";
import IndustryEngagementSection from "@/components/about/IndustryEngagementSection";
import OurIdentitySection from "@/components/about/OurIdentitySection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import RecognitionApprovalsSection from "@/components/about/RecognitionApprovalsSection";
import AwardsSection from "@/components/about/AwardsSection";
import ISRSection from "@/components/about/ISRSection";

export const metadata = {
    title: "About IAER | Institute of Advance Education & Research",
    description:
        "Learn about IAER, Eastern India’s student-centric institution focused on skill-based, industry-aligned education with strong placements and global exposure.",
};

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <HeroSection />
            <AboutOverviewSection />
            <PracticalEducationSection />
            <IndustryEngagementSection />
            <OurIdentitySection />
            <VisionMissionSection />
            <RecognitionApprovalsSection />
            <AwardsSection />
            <ISRSection />
        </div>
    );
}

