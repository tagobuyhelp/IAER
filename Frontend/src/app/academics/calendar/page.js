import { Calendar as CalendarIcon, Download, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
   title: "Academic Calendar | IAER",
   description: "View the academic calendar for the current academic year at IAER.",
};

export default function AcademicCalendarPage() {
   return (
      <div className="bg-white min-h-screen">
         {/* Hero Section */}
         <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
               <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
                  Schedule & Events
               </span>
               <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Academic Calendar
               </h1>
               <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Stay updated with important dates, examination schedules, and academic events for the upcoming semester.
               </p>
            </div>
         </section>

         {/* Calendar Section */}
         <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     {/* Even Semester Card */}
                     <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                           <CalendarIcon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#100902] mb-3">Even Semester</h3>
                        <p className="text-gray-600 mb-6">View the detailed schedule for the Even Semester, including start dates, exam periods, and holidays.</p>

                        <button className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                           <FileText className="w-4 h-4" />
                           View Schedule
                        </button>
                     </div>

                     {/* Odd Semester Card */}
                     <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-[#100902]/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#100902] transition-colors">
                           <CalendarIcon className="w-6 h-6 text-[#100902] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#100902] mb-3">Odd Semester</h3>
                        <p className="text-gray-600 mb-6">View the detailed schedule for the Odd Semester, including orientation, mid-terms, and winter break.</p>

                        <button className="w-full bg-[#100902] text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                           <FileText className="w-4 h-4" />
                           View Schedule
                        </button>
                     </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                     <h3 className="text-xl font-bold text-[#100902] mb-6">Quick Links</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/academics/holidays" className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-sm transition-all group">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                 <CalendarIcon className="w-4 h-4 text-accent" />
                              </div>
                              <span className="font-semibold text-gray-700 group-hover:text-[#100902]">List of Holidays</span>
                           </div>
                           <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-accent" />
                        </Link>
                        <Link href="/academics/overview" className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-sm transition-all group">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                 <FileText className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="font-semibold text-gray-700 group-hover:text-[#100902]">Academic Overview</span>
                           </div>
                           <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}