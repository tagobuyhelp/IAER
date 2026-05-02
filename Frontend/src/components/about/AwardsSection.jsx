"use client";

import {
  Award,
  Trophy,
  Star,
  Rocket,
  Zap,
  GraduationCap,
  Crown,
  Medal,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

// Compact Award Item Component
function AwardItem({ award, index, delay = 0 }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Map award titles to appropriate icons
  const getIcon = (title) => {
    if (title.includes("Startup") || title.includes("VC")) return Rocket;
    if (title.includes("Virtual") || title.includes("Technology")) return Zap;
    if (title.includes("Knowledge") || title.includes("Review")) return GraduationCap;
    return Trophy;
  };

  const Icon = getIcon(award.title);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col p-3 sm:p-4 rounded-xl border border-gray-100 bg-white transition-all duration-300",
        "hover:shadow-md hover:border-accent/30 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="p-2 rounded-lg bg-accent/5 text-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
          {award.year}
        </span>
      </div>
      
      <h3 className="text-[13px] sm:text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
        {award.title}
      </h3>
      <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed flex-1">
        {award.description}
      </p>
    </div>
  );
}

export default function AwardsSection() {
  const awardBadges = [
    { src: "/images/awards/award-1.png", alt: "IAER award 1" },
    { src: "/images/awards/award-2.png", alt: "IAER award 2" },
    { src: "/images/awards/award-3.png", alt: "IAER award 3" },
  ];

  const awards = [
    {
      year: "2019",
      title: "Best Innovative IT College in Eastern India",
      description:
        "IT Startup Excellence Awards — Recognised for integrating technology, innovation, and startup culture into higher education.",
    },
    {
      year: "2020",
      title: "Best Emerging e-Business School of the Year",
      description:
        "Virtual Education & Technology Awards — Recognised for pioneering use of virtual platforms and blended learning methodologies.",
    },
    {
      year: "2021",
      title: "Best Startup Education College in Eastern India",
      description:
        "StartUp & VC Award for Excellence — Acknowledged for promoting entrepreneurial thinking, incubation support, and industry linkages.",
    },
    {
      year: "2024",
      title: "Top 10 Best College for Data Science in India",
      description:
        "Knowledge Review — Ranked among the Top 10 Best Colleges for Data Science in India.",
    },
    {
      year: "2025",
      title: "Top 10 Best College for Cyber Security in India",
      description:
        "Knowledge Review — Ranked among the Top 10 Best Colleges for Cyber Security in India.",
    },
    {
      year: "2024",
      title: "Best Emerging Information Technology Award",
      description:
        "Edulite Excellence Award — Recognised for strong academic delivery, innovation, and industry readiness in IT education.",
    },
    {
      year: "2025",
      title: "Best College for Innovation in Eastern India",
      description:
        "Edulite Excellence Award — Recognised for innovation-focused education and impactful institutional initiatives.",
    },
    {
      year: "2024",
      title: "Excellence in Information Technology Education",
      description:
        "Collegedunia — Recognised for excellence in IT education and employability outcomes.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-gray-50 to-transparent rounded-bl-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-gray-50 to-transparent rounded-tr-full opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Header & Awards Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Section */}
            <RevealOnScroll>
              <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10" />
                
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="flex-shrink-0 p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/10">
                    <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase text-accent">
                        Awards & Rankings
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Recognised for Excellence
                    </h2>
                    <p className="text-[12px] sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                      IAER has been acknowledged by various platforms for its efforts in skill-based
                      learning, technology-enabled education, and industry-focused outcomes. These
                      recognitions reflect our consistent work towards employability and student success.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {awards.map((award, index) => (
                <AwardItem
                  key={index}
                  award={award}
                  index={index}
                  delay={200}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Stats & Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Stats Card */}
            <RevealOnScroll delay={300}>
              <div className="bg-primary rounded-xl p-4 sm:p-6 text-white shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-6 -mt-6" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/20 rounded-tr-full -ml-6 -mb-6" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-base">Key Achievements</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-xl sm:text-2xl font-bold text-accent mb-1">4+</div>
                      <div className="text-[10px] text-white/80 uppercase tracking-wide">Major Awards</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-xl sm:text-2xl font-bold text-accent mb-1">5+</div>
                      <div className="text-[10px] text-white/80 uppercase tracking-wide">Years Excellence</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                     <Medal className="w-4 h-4 text-accent" />
                     <p className="text-[11px] sm:text-xs text-white/90 italic">
                       "Building Tomorrow's Leaders Today"
                     </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Badges/Images Grid */}
            <RevealOnScroll delay={400}>
              <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-gray-900 text-sm">Media Recognition</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {awardBadges.map((badge, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-square relative rounded-lg bg-gray-50 border border-gray-100 p-2 flex items-center justify-center hover:border-accent/30 transition-colors"
                    >
                      <Image
                        src={badge.src}
                        alt={badge.alt}
                        fill
                        className="object-contain p-1"
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
