import { Users, Building2, GraduationCap, School, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Users,
    count: "120+",
    label: "Faculty",
    description: "Blend of academic scholars, industry trainers, and domain specialists shaping future-ready professionals.",
  },
  {
    icon: Building2,
    count: "80+",
    label: "Industry Collaborations",
    description: "Including hospitals, IT firms, hotel groups, aviation sectors, and corporate organisations for internships & placements.",
  },
  {
    icon: GraduationCap,
    count: "6,000+",
    label: "Alumni",
    description: "Our graduates lead careers across industries",
  },
  {
    icon: School,
    count: "5+",
    label: "Centers",
    description: "Centres of Skill Development & Practical Learning",
  },
  {
    icon: Briefcase,
    count: "300+",
    label: "Recruitment Companies",
    description: "Offering internships, on-the-job training, and placement opportunities.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            An Illustrious Legacy we continue to Build
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{stat.count}</h3>
                  <h4 className="text-lg font-semibold text-muted-foreground mb-3">{stat.label}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
