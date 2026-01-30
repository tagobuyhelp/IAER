"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { Wifi, Book, FlaskConical, Laptop, Coffee, Dumbbell } from "lucide-react";

export default function InfrastructureSection() {
  const facilities = [
    { icon: Wifi, name: "Wi-Fi Enabled Campus" },
    { icon: Book, name: "Modern Library" },
    { icon: FlaskConical, name: "Advanced Labs" },
    { icon: Laptop, name: "Computer Centre" },
    { icon: Coffee, name: "Cafeteria" },
    { icon: Dumbbell, name: "Sports Facilities" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Infrastructure & Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State-of-the-art infrastructure designed to provide a conducive learning environment for holistic development.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facilities.map((facility, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <facility.icon className="w-8 h-8 mx-auto text-accent mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm">{facility.name}</h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
