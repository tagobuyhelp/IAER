"use client";

import { 
  Users, 
  Briefcase, 
  HeartHandshake, 
  Leaf, 
  Sparkles,
  BookOpen,
  UsersRound,
  Target,
  Lightbulb,
  HandHeart,
  Sprout,
  TrendingUp,
  Globe
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Compact Initiative Card Component
function InitiativeCard({ icon: Icon, title, description, items, delay = 0, index }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col p-4 sm:p-5 rounded-xl border border-gray-100 bg-white transition-all duration-300",
        "hover:shadow-md hover:border-accent/30 hover:-translate-y-1",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-accent/5 text-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <h3 className="text-[13px] sm:text-sm font-bold text-gray-900 mt-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      
      <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-3 sm:mb-4 flex-1">
        {description}
      </p>

      {items && items.length > 0 && (
        <div className="mt-auto pt-3 border-t border-gray-50">
          <div className="flex flex-wrap gap-1.5">
            {items.map((item, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-50 text-[10px] text-gray-500 border border-gray-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Sidebar Impact Item Component
function ImpactItem({ icon: Icon, label, detail, index }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:bg-gray-50 hover:border-gray-100 transition-all duration-300">
      <div className="mt-0.5 p-1.5 rounded-md bg-primary/5 text-primary">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h4 className="text-xs font-bold text-gray-900 mb-0.5">{label}</h4>
        <p className="text-[10px] text-gray-500 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

export default function ISRSection() {
  const sections = [
    {
      icon: Briefcase,
      title: "Skill & Employability",
      description:
        "Training programs enhancing employability aimed at bridging skill gaps for industry readiness.",
      items: ["Computer literacy", "Business comms", "Service ops", "Financial awareness"],
    },
    {
      icon: HeartHandshake,
      title: "Community Engagement",
      description:
        "Outreach sessions promoting awareness on social, financial, and health-related issues.",
      items: ["Financial literacy", "Health education", "Career guidance", "Women empowerment"],
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "Promoting eco-conscious behaviour through awareness drives and sustainable campus initiatives.",
      items: ["Tree plantation", "Waste management", "Eco-friendly practices", "Energy conservation"],
    },
    {
      icon: Sparkles,
      title: "Cleanliness Drives",
      description:
        "Conducting sanitation drives in localities and campus areas aligned with national missions.",
      items: ["Neighbourhood cleanup", "Sanitation awareness", "Community participation"],
    },
    {
      icon: BookOpen,
      title: "Educational Outreach",
      description:
        "Supporting underprivileged students through material distribution and guidance programs.",
      items: ["Stationery distribution", "Motivational talks", "Higher ed exposure"],
    },
    {
      icon: UsersRound,
      title: "Youth Development",
      description:
        "Encouraging student participation in ISR for holistic growth and social responsibility.",
      items: ["Volunteering", "Leadership roles", "Social empathy"],
    },
  ];

  const impactAreas = [
    {
      icon: TrendingUp,
      label: "Skill & Employability",
      detail: "Enhancing job readiness for local youth.",
    },
    {
      icon: Users,
      label: "Community Engagement",
      detail: "Partnering with NGOs & local bodies.",
    },
    {
      icon: HandHeart,
      label: "Health & Wellbeing",
      detail: "Spreading awareness on vital health issues.",
    },
    {
      icon: Sprout,
      label: "Eco-Sustainability",
      detail: "Promoting green practices & resource care.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/about/Community_interaction_in_a_neighbourhood_centre.png"
                alt="Community Interaction in a Neighbourhood Centre"
                fill
                className="object-cover opacity-30"
              />
            </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-white to-transparent rounded-br-full opacity-60" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-white to-transparent rounded-tl-full opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Header & Initiatives Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Section */}
            <RevealOnScroll>
              <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10" />
                
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="flex-shrink-0 p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10">
                    <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <HeartHandshake className="w-4 h-4 text-accent" />
                      <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase text-accent">
                        Social Responsibility
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Institutional Social Responsibility (ISR)
                    </h2>
                    <p className="text-[12px] sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                      IAER views social responsibility as an integral part of its academic mission. We
                      encourage students and faculty to engage with communities, contribute to
                      local development, and build a culture of empathy and nation-building.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Initiatives Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {sections.map((section, index) => (
                <InitiativeCard
                  key={index}
                  icon={section.icon}
                  title={section.title}
                  description={section.description}
                  items={section.items}
                  index={index}
                  delay={200}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Impact & Quote (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Impact Areas */}
            <RevealOnScroll delay={300}>
              <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-gray-900 text-sm">Key Impact Areas</h3>
                </div>
                <div className="space-y-1">
                  {impactAreas.map((area, idx) => (
                    <ImpactItem
                      key={idx}
                      icon={area.icon}
                      label={area.label}
                      detail={area.detail}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Quote Card */}
            <RevealOnScroll delay={400}>
              <div className="bg-primary rounded-xl p-4 sm:p-6 text-white shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110" />
                
                <div className="relative z-10">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 mb-3 text-accent" />
                  <p className="text-[11px] sm:text-xs leading-relaxed opacity-90 italic mb-3">
                    "Education is not just about learning; it's about transforming lives and
                    building communities."
                  </p>
                  <div className="pt-3 border-t border-white/10">
                     <p className="text-[10px] font-bold text-accent uppercase tracking-wider">
                       IAER Vision
                     </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
