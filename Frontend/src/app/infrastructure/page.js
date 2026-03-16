import InfrastructureSection from "@/components/mandatory-disclosure/InfrastructureSection";
import Image from "next/image";

export const metadata = {
  title: "Infrastructure | IAER",
  description: "Explore IAER campus infrastructure and facilities.",
};

export default function InfrastructurePage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative py-14 md:py-20 bg-[#0a0601] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/iaer-campus-exterior-newtown-kolkata.png"
            alt="IAER Infrastructure & Facilities"
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/18 via-transparent to-primary/18" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide border border-white/20 bg-black/35 backdrop-blur-md text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]">
              Campus
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight drop-shadow-[0_8px_22px_rgba(0,0,0,0.75)]">
              Infrastructure & Facilities
            </h1>
            <p className="mt-4 text-white/85 text-base md:text-lg max-w-3xl drop-shadow-[0_6px_16px_rgba(0,0,0,0.65)]">
              State-of-the-art learning spaces, labs, library, and student-friendly facilities designed for academic excellence and holistic growth.
            </p>
          </div>
        </div>
      </section>

      <InfrastructureSection />
    </main>
  );
}
