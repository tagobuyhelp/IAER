import HeroSection from "@/components/research-and-innovation/HeroSection";
import ResearchOverviewSection from "@/components/research-and-innovation/ResearchOverviewSection";
import StartupEntrepreneurshipSection from "@/components/research-and-innovation/StartupEntrepreneurshipSection";
import InnovationResearchSection from "@/components/research-and-innovation/InnovationResearchSection";

export const metadata = {
  title: "Research & Innovation | IAER",
  description:
    "Explore our cutting-edge research initiatives, innovation labs, and startup incubation support at IAER.",
};

export default function ResearchAndInnovation() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <ResearchOverviewSection />
      <InnovationResearchSection />
      <StartupEntrepreneurshipSection />
    </main>
  );
}
