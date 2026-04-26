"use client";

import { useInView } from "react-intersection-observer";
import { Users, Library, Utensils, Bus, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CampusLifeSection() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const campusGallery = [
    { src: "/images/admissions/Orientation-Program.webp", alt: "Orientation Program", className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-3" },
    { src: "/images/admissions/Holi-Celebration.webp", alt: "Holi Celebration", className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-2" },
    { src: "/images/admissions/Christmas-Celebration.webp", alt: "Christmas Celebration", className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2" },
    { src: "/images/admissions/Student-Collaboration.webp", alt: "Student Collaboration", className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2" },
    { src: "/images/admissions/Classroom-Discussion.webp", alt: "Classroom Discussion", className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2" },
    { src: "/images/admissions/Hands-on-Training.webp", alt: "Hands-on Training", className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2" },
    { src: "/images/admissions/Student-Life.webp", alt: "Student Life", className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2" },
    { src: "/images/admissions/Faculty-Mentorship.webp", alt: "Faculty Mentorship", className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2" },
  ];

  const features = [
    { 
      icon: Users, 
      title: "Student Clubs & Activities", 
      desc: "Engage in interest-based clubs, events, and leadership opportunities.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    { 
      icon: Library, 
      title: "Learning Resources", 
      desc: "Access digital libraries, labs, and smart classrooms for hands-on learning.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    { 
      icon: Utensils, 
      title: "Hostel & Dining", 
      desc: "Comfortable hostel options and dining facilities for a balanced campus experience.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    { 
      icon: Bus, 
      title: "Industry Visits", 
      desc: "Regular industry interactions, seminars, and field trips to enhance exposure.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    { 
      icon: Trophy, 
      title: "Sports & Culture", 
      desc: "Participate in sports, cultural fests, and community engagement programs.",
      color: "text-red-600",
      bg: "bg-red-50"
    },
  ];

  return (
    <section 
      id="admissions-campus" 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/admissions/Students_collaborating_in_bright_campus_space.png" 
          alt="Campus Life - Students Collaborating" 
          fill 
          className="object-cover opacity-10"
        />
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className={cn(
              "text-accent font-semibold tracking-wide uppercase text-sm mb-2 block transition-all duration-700 delay-100",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Life at IAER
            </span>
            <h2 className={cn(
              "text-3xl lg:text-4xl font-bold text-[#100902] mb-6 transition-all duration-700 delay-200",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Campus Life & Experience
            </h2>
            <p className={cn(
              "text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              An enriching environment that promotes collaboration, innovation, and holistic development beyond the classroom.
            </p>
          </div>

          <div
            className={cn(
              "mb-10 md:mb-14 transition-all duration-700 delay-400",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[120px] md:auto-rows-[140px] lg:auto-rows-[150px]">
              {campusGallery.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow",
                    item.className
                  )}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white text-xs md:text-sm font-semibold drop-shadow line-clamp-1">
                      {item.alt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "group bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                  sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${400 + (idx * 100)}ms` }}
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300", feature.bg)}>
                  <feature.icon className={cn("w-7 h-7", feature.color)} />
                </div>
                <h3 className="text-xl font-bold text-[#100902] mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
            
            {/* CTA Card */}
            <div 
              className={cn(
                "bg-[#100902] p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center transition-all duration-700 delay-900",
                sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="text-xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-gray-300 text-sm mb-6">Explore our vibrant campus culture and student activities.</p>
              <Link 
                href="/campus-life" 
                className="inline-flex items-center justify-center w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all hover:gap-2 group"
              >
                Explore Campus
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Bottom Links */}
          <div className={cn(
            "flex flex-wrap justify-center gap-4 transition-all duration-700 delay-1000",
            sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Link 
              href="/placements/highlights" 
              className="inline-flex items-center px-8 py-4 bg-white border border-gray-200 text-[#100902] font-semibold rounded-xl hover:bg-gray-50 hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Explore Placements
            </Link>
            <Link 
              href="/admissions/hostel-fee" 
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25"
            >
              <Utensils className="w-5 h-5 mr-2" />
              Check Hostel Fees
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
