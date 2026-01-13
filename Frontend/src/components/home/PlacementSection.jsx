import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building2, Globe } from "lucide-react";
import Image from "next/image";

const placementStats = [
  { value: "3000+", label: "Placement Offers Generated", icon: Users },
  { value: "500+", label: "Companies Participated", icon: Building2 },
  { value: "₹15.75 LPA", label: "Highest Domestic Package", icon: TrendingUp },
  { value: "₹55.65 LPA", label: "Highest International Package", icon: Globe },
];

const packageStats = [
  { amount: "₹15 LPA", count: "30+", label: "Companies" },
  { amount: "₹10 LPA", count: "58+", label: "Companies" },
  { amount: "₹7 LPA", count: "82+", label: "Companies" },
  { amount: "₹5 LPA", count: "100+", label: "Companies" },
];

export default function PlacementSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="flex-1">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Placements Overview</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              The Future’s Leading <br />
              <span className="text-accent">Companies Hire IAER Talent</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                APPLY NOW <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                VIEW PLACEMENTS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            {placementStats.map((stat, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <stat.icon className="h-8 w-8 text-primary mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {packageStats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border-t-4 border-primary">
              <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">{stat.amount}</div>
              <div className="text-sm text-muted-foreground mb-2">Package Offered by</div>
              <div className="text-3xl font-extrabold text-primary mb-1">{stat.count}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
