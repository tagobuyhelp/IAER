"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    name: "Shardul J.",
    course: "BCA",
    highlight: "Top IT Recruiter",
    quote: "IAER gave me industry-ready IT skills. The faculty, labs, and placement support helped me land a dream tech role.",
    image: "/images/student-shardul.jpg",
    color: "bg-blue-50 border-blue-200"
  },
  {
    name: "Anand B.",
    course: "BBA-AHSM",
    highlight: "International Aviation & Hospitality",
    quote: "My hospitality journey transformed at IAER. The Airport visits, Cabin Crew exposure with global training set me up for success.",
    image: "/images/student-anand.jpg",
    color: "bg-orange-50 border-orange-200"
  },
  {
    name: "Arshdeep S.",
    course: "BMLT",
    highlight: "Healthcare Placement",
    quote: "From clinical labs to real hospital rotations, IAER shaped my confidence and competence in healthcare practice.",
    image: "/images/student-arshdeep.jpg",
    color: "bg-green-50 border-green-200"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Student Success Stories</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Students Speak
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border ${story.color} transition-transform hover:-translate-y-2 hover:shadow-lg`}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                   {/* Placeholder for student image */}
                   <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground font-medium bg-muted">
                     {story.name.charAt(0)}
                   </div>
                   {/* <Image src={story.image} alt={story.name} width={64} height={64} className="object-cover" /> */}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{story.name}</h3>
                  <p className="text-sm font-medium text-primary">{story.course}</p>
                </div>
              </div>

              <div className="mb-4">
                 <span className="inline-block px-3 py-1 rounded-full bg-white text-xs font-bold text-foreground border shadow-sm">
                   {story.highlight}
                 </span>
              </div>

              <p className="text-muted-foreground italic leading-relaxed">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
