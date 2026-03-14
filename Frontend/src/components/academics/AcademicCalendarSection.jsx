"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  FileText,
  ChevronRight,
  Download,
  Clock,
  CalendarDays,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AcademicCalendarSection() {
  const [activeTab, setActiveTab] = useState("schedules");

  return (
    <div id="academics-calendar" className="flex flex-col gap-12 py-16 bg-white">
      {/* HEADER */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">
            Plan Your Year
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#100902] mb-6">
            Academic Calendar
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
            Stay updated with the academic timeline. Access detailed schedules for semesters, examinations, and holidays.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "schedules", label: "Semester Schedules", icon: CalendarDays },
              { id: "events", label: "Upcoming Events", icon: Clock },
              { id: "resources", label: "Quick Links", icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                  activeTab === tab.id
                    ? "bg-[#100902] text-white border-[#100902] shadow-lg scale-105"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-gray-300"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto min-h-[300px]">

          {/* SCHEDULES TAB */}
          {activeTab === "schedules" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Even Semester */}
                <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
                            <CalendarIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#100902] mb-2">Even Semester</h3>
                        <p className="text-sm text-gray-500 mb-6">Jan - June Session</p>
                        
                        <ul className="space-y-3 mb-8">
                            {["Classes Begin: Jan 15", "Internal Assessment: March - May", "End-Sem Exams: June"].map((item, i) =>(
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 rounded-xl border border-red-200 text-red-700 font-semibold hover:bg-red-50 transition-colors flex items-center justify-center gap-2 text-sm">
                            <Download className="w-4 h-4" />
                            Download Schedule
                        </button>
                    </div>
                </div>

                {/* Odd Semester */}
                <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                     <div className="relative z-10">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                            <CalendarIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#100902] mb-2">Odd Semester</h3>
                        <p className="text-sm text-gray-500 mb-6">July - Dec Session</p>

                         <ul className="space-y-3 mb-8">
                            {["Classes Begin: July 15", "Internal Assessment: Sept - Nov", "End-Sem Exams: Dec"].map((item, i) =>(
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 rounded-xl border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm">
                            <Download className="w-4 h-4" />
                            Download Schedule
                        </button>
                    </div>
                </div>
              </div>
            </div>
          )}

          {/* EVENTS TAB */}
          {activeTab === "events" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="w-5 h-5 text-accent" />
                        <h3 className="font-bold text-[#100902]">Upcoming Key Dates</h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { date: "15 AUG", event: "Independence Day Celebration", type: "Holiday" },
                            { date: "05 SEP", event: "Teachers' Day", type: "Event" },
                            { date: "02 OCT", event: "Gandhi Jayanti", type: "Holiday" },
                            { date: "10 OCT", event: "Freshers' Welcome", type: "Event" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                <div className="w-16 text-center border-r border-gray-100 pr-4">
                                    <div className="text-xs font-bold text-gray-400">{item.date.split(" ")[1]}</div>
                                    <div className="text-xl font-bold text-[#100902]">{item.date.split(" ")[0]}</div>
                                </div>
                                <div className="pl-4 flex-1">
                                    <h4 className="font-bold text-[#100902] text-sm">{item.event}</h4>
                                    <span className={cn(
                                        "text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full mt-1 inline-block",
                                        item.type === "Holiday" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
                                    )}>
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          )}

          {/* RESOURCES TAB */}
          {activeTab === "resources" && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="#academics-holidays"
                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 hover:border-accent hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="font-bold text-[#100902] block group-hover:text-accent transition-colors">List of Holidays</span>
                        <span className="text-xs text-gray-500">Official gazetted holidays</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-accent" />
                  </Link>

                  <Link
                    href="#academics-overview"
                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-bold text-[#100902] block group-hover:text-blue-600 transition-colors">Academic Overview</span>
                        <span className="text-xs text-gray-500">Guidelines & Policies</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600" />
                  </Link>
                </div>
             </div>
          )}

        </div>
      </section>
    </div>
  );
}

