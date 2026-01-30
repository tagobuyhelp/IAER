import HeroSection from "@/components/campus-life/HeroSection";
import CampusOverview from "@/components/campus-life/CampusOverview";
import GallerySection from "@/components/campus-life/GallerySection";
import EventsSection from "@/components/campus-life/EventsSection";
import ClubsSection from "@/components/campus-life/ClubsSection";
import ClosingCTA from "@/components/campus-life/ClosingCTA";

export const metadata = {
  title: "Campus Life | IAER",
  description:
    "Experience the vibrant campus life at IAER. Discover our clubs, cultural events, sports activities, and student community.",
};

export default function CampusLife() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <CampusOverview />
      <GallerySection />
      <EventsSection />
      <ClubsSection />
      <ClosingCTA />
    </main>
  );
}
