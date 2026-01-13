import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import RankingsSection from '@/components/home/RankingsSection';
import PlacementSection from '@/components/home/PlacementSection';
import PlacementPartners from '@/components/home/PlacementPartners';
import GlobalExperience from '@/components/home/GlobalExperience';
import EmpowermentBanner from '@/components/home/EmpowermentBanner';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ResearchInnovationSection from '@/components/home/ResearchInnovationSection';
import VirtualTourSection from '@/components/home/VirtualTourSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <RankingsSection />
      <EmpowermentBanner />
      <WhyChooseSection />
      <TestimonialsSection />
      <ResearchInnovationSection />
      <PlacementSection />
      <PlacementPartners />
      <GlobalExperience />
      <VirtualTourSection />
    </main>
  );
}
