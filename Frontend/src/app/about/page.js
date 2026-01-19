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
            <div id="about-hero">
                <HeroSection />
            </div>
            <div id="about-overview">
                <AboutOverviewSection />
            </div>
            <div id="about-practical">
                <PracticalEducationSection />
            </div>
            <div id="about-industry">
                <IndustryEngagementSection />
            </div>
            <div id="about-identity">
                <OurIdentitySection />
            </div>
            <div id="about-vision">
                <VisionMissionSection />
            </div>
            <div id="about-recognition">
                <RecognitionApprovalsSection />
            </div>
            <div id="about-awards">
                <AwardsSection />
            </div>
            <div id="about-isr">
                <ISRSection />
            </div>
        </div>
    );
}
