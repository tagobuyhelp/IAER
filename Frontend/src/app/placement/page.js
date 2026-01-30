import HeroSection from "@/components/placement/HeroSection";
import PlacementOverview from "@/components/placement/PlacementOverview";
import PlacementCells from "@/components/placement/PlacementCells";
import CareerModel from "@/components/placement/CareerModel";
import InternshipSection from "@/components/placement/InternshipSection";
import RecruitersSection from "@/components/placement/RecruitersSection";
import SectorSection from "@/components/placement/SectorSection";
import PlacementCTA from "@/components/placement/PlacementCTA";

export const metadata = {
  title: "Placements | IAER",
  description: "Explore career opportunities, placement assistance, and industry exposure at IAER. Join us for a career-first academic experience.",
};

export default function PlacementPage() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <PlacementOverview />
      <PlacementCells />
      <CareerModel />
      <InternshipSection />
      <RecruitersSection />
      <SectorSection />
      <PlacementCTA />
    </main>
  );
}
