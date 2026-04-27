"use client";
import React, { useState } from "react";
import {
  CalendarDays,
  Calendar,
  Flag,
  Sparkles,
  Moon,
  Sun,
  Info,
  PartyPopper,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";


export default function HolidaysListSection() {
  const [activeTab, setActiveTab] = useState("even"); // 'even' (Jan-Jun) or 'odd' (Jul-Dec)

  // Split holidays into semesters for better organization
  const holidays = {
    even: [
      { id: 1, event: "New Year’s Day", date: "January 1", day: "Thursday", type: "Festival", icon: PartyPopper, color: "text-pink-600", bg: "bg-pink-50" },
      { id: 2, event: "Birthday of Swami Vivekananda", date: "January 12", day: "Monday", type: "Jayanti", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
      { id: 3, event: "Netaji Subhas Chandra Bose Birthday / Saraswati Puja", date: "January 23", day: "Friday", type: "Festival", icon: Sparkles, color: "text-yellow-600", bg: "bg-yellow-50" },
      { id: 4, event: "Republic Day", date: "January 26", day: "Monday", type: "National", icon: Flag, color: "text-orange-600", bg: "bg-orange-50" },
      { id: 5, event: "Shab-e-Barat", date: "February 25", day: "Wednesday", type: "Religious", icon: Moon, color: "text-emerald-600", bg: "bg-emerald-50" },
      { id: 6, event: "Doljatra (Holi)", date: "March 3", day: "Tuesday", type: "Festival", icon: PartyPopper, color: "text-pink-600", bg: "bg-pink-50" },
      { id: 7, event: "Id-ul-Fitr*", date: "March 21", day: "Saturday", type: "Religious", icon: Moon, color: "text-emerald-600", bg: "bg-emerald-50" },
      { id: 8, event: "Ram Navami", date: "March 26", day: "Thursday", type: "Religious", icon: Sparkles, color: "text-orange-600", bg: "bg-orange-50" },
      { id: 9, event: "Mahavir Jayanti", date: "March 31", day: "Tuesday", type: "Religious", icon: Sparkles, color: "text-yellow-600", bg: "bg-yellow-50" },
      { id: 10, event: "Good Friday", date: "April 3", day: "Friday", type: "Religious", icon: Sparkles, color: "text-purple-600", bg: "bg-purple-50" },
      { id: 11, event: "Dr. B.R. Ambedkar Jayanti", date: "April 14", day: "Tuesday", type: "Jayanti", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
      { id: 12, event: "Bengali New Year (Poila Baisakh)", date: "April 15", day: "Wednesday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 13, event: "May Day/ Buddha Purnima", date: "May 1", day: "Friday", type: "Mixed", icon: Sparkles, color: "text-indigo-600", bg: "bg-indigo-50" },
      { id: 14, event: "Rabindra Jayanti", date: "May 9", day: "Saturday", type: "Jayanti", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
      { id: 15, event: "Id-Uz-Zoha (Bakrid)*", date: "May 27", day: "Wednesday", type: "Religious", icon: Moon, color: "text-emerald-600", bg: "bg-emerald-50" },
      { id: 16, event: "Muharram*", date: "June 26", day: "Friday", type: "Religious", icon: Moon, color: "text-emerald-600", bg: "bg-emerald-50" },
    ],
    odd: [
      { id: 17, event: "Rath Yatra", date: "July 16", day: "Thursday", type: "Religious", icon: Sparkles, color: "text-orange-600", bg: "bg-orange-50" },
      { id: 18, event: "Independence Day", date: "August 15", day: "Saturday", type: "National", icon: Flag, color: "text-orange-600", bg: "bg-orange-50" },
      { id: 19, event: "Janmashtami", date: "September 4", day: "Friday", type: "Religious", icon: Sparkles, color: "text-cyan-600", bg: "bg-cyan-50" },
      { id: 20, event: "Gandhi Jayanti", date: "October 2", day: "Friday", type: "National", icon: Flag, color: "text-green-600", bg: "bg-green-50" },
      { id: 21, event: "Mahalaya", date: "October 10", day: "Saturday", type: "Religious", icon: Sparkles, color: "text-indigo-600", bg: "bg-indigo-50" },
      { id: 22, event: "Durga Puja – Maha Chaturthi", date: "October 15", day: "Thursday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 23, event: "Durga Puja – Maha Panchami", date: "October 16", day: "Friday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 24, event: "Durga Puja – Maha Sashthi", date: "October 17", day: "Saturday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 25, event: "Fateha Dwaz Daham", date: "October 18", day: "Sunday", type: "Religious", icon: Moon, color: "text-emerald-600", bg: "bg-emerald-50" },
      { id: 26, event: "Durga Puja – Maha Saptami", date: "October 18", day: "Sunday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 27, event: "Durga Puja – Maha Ashtami", date: "October 19", day: "Monday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 28, event: "Durga Puja – Maha Navami", date: "October 20", day: "Tuesday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 29, event: "Durga Puja – Vijaya Dasami", date: "October 21", day: "Wednesday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
      { id: 30, event: "Additional Day of Durga Puja", date: "October 22", day: "Thursday", type: "Holiday", icon: PartyPopper, color: "text-gray-600", bg: "bg-gray-50" },
      { id: 31, event: "Additional Day of Durga Puja", date: "October 23", day: "Friday", type: "Holiday", icon: PartyPopper, color: "text-gray-600", bg: "bg-gray-50" },
      { id: 32, event: "Additional Day of Durga Puja", date: "October 24", day: "Saturday", type: "Holiday", icon: PartyPopper, color: "text-gray-600", bg: "bg-gray-50" },
      { id: 33, event: "Laxmi Puja", date: "October 25", day: "Sunday", type: "Religious", icon: Sparkles, color: "text-yellow-600", bg: "bg-yellow-50" },
      { id: 34, event: "Additional day of Laxmi Puja", date: "October 26", day: "Monday", type: "Holiday", icon: Sparkles, color: "text-gray-600", bg: "bg-gray-50" },
      { id: 35, event: "Additional day of Laxmi Puja", date: "October 27", day: "Tuesday", type: "Holiday", icon: Sparkles, color: "text-gray-600", bg: "bg-gray-50" },
      { id: 36, event: "Kali Puja", date: "November 8", day: "Sunday", type: "Festival", icon: Sparkles, color: "text-purple-600", bg: "bg-purple-50" },
      { id: 37, event: "Additional day of Kali Puja", date: "November 9", day: "Monday", type: "Holiday", icon: Sparkles, color: "text-gray-600", bg: "bg-gray-50" },
      { id: 38, event: "Additional day of Kali Puja", date: "November 10", day: "Tuesday", type: "Holiday", icon: Sparkles, color: "text-gray-600", bg: "bg-gray-50" },
      { id: 39, event: "Vatridwitiya / Maulana Azad Birthday", date: "November 11", day: "Wednesday", type: "Mixed", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
      { id: 40, event: "Chhat Puja", date: "November 15", day: "Sunday", type: "Religious", icon: Sun, color: "text-orange-600", bg: "bg-orange-50" },
      { id: 41, event: "Christmas", date: "December 25", day: "Friday", type: "Festival", icon: PartyPopper, color: "text-red-600", bg: "bg-red-50" },
    ],
  };

  return (
    <section id="holidays-list" className="relative py-10 sm:py-14 lg:py-16 bg-gray-300/50 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/academic/gazetted-holidays-2026.webp"
                alt="Gazetted Holidays 2026"
                fill
                className="object-cover opacity-30 object-center-right"
              />
            </div>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-7 sm:mb-10">
            <span className="text-accent font-semibold tracking-wide uppercase text-[11px] sm:text-sm mb-2 block">
              Annual Calendar
            </span>
            <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#100902] mb-4 sm:mb-6">
              Gazetted Holidays 2026
            </h2>

            {/* Tab Navigation */}
            <div className="inline-flex bg-gray-100/80 p-1 rounded-full relative">
              {[
                { id: "even", label: "Jan - June (Even Sem)" },
                { id: "odd", label: "July - Dec (Odd Sem)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 sm:px-6 py-2 rounded-full text-[12px] sm:text-sm font-semibold transition-all duration-300 relative z-10",
                    activeTab === tab.id
                      ? "bg-white text-[#100902] shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="min-h-[340px] sm:min-h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {holidays[activeTab].map((holiday) => (
                <div
                  key={holiday.id}
                  className="group bg-white border border-gray-100 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Decorative Background Element */}
                  <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-transform group-hover:scale-110", holiday.bg.replace("bg-", "bg-current text-"))} />
                  
                  <div className="flex items-start justify-between mb-3 sm:mb-4 relative z-10">
                    <div className={cn("w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center", holiday.bg)}>
                      <holiday.icon className={cn("w-4.5 h-4.5 sm:w-5 sm:h-5", holiday.color)} />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium px-2 py-1 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                      {holiday.day}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-bold text-[#100902] text-[13px] sm:text-base md:text-lg mb-1 group-hover:text-accent transition-colors">
                      {holiday.event}
                    </h3>
                    <div className="flex items-center gap-2 text-[12px] sm:text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4" />
                      <span>{holiday.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-7 sm:mt-10 flex items-start gap-3 p-3 sm:p-4 bg-orange-50/50 border border-orange-100 rounded-lg text-[12px] sm:text-sm text-gray-600 max-w-2xl mx-auto">
            <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <p>
              <strong>Note:</strong> * Dates may change subject to the appearance of the moon. All other dates are subject to government notifications or institutional requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
