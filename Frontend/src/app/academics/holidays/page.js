import { Calendar, CalendarOff } from "lucide-react";

export const metadata = {
  title: "List of Holidays | IAER",
  description: "Official list of gazetted holidays at IAER for the academic year.",
};

export default function HolidaysPage() {
  const holidays = [
    { id: 1, event: "Republic Day", date: "January 26", day: "Sunday" },
    { id: 2, event: "Guru Ravidass Jayanti", date: "February 12", day: "Wednesday" },
    { id: 3, event: "Maha Shivratri", date: "February 26", day: "Wednesday" },
    { id: 4, event: "Holi", date: "March 14", day: "Friday" },
    { id: 5, event: "Eid-ul-Fitr", date: "March 31", day: "Monday" },
    { id: 6, event: "Dr. B.R. Ambedkar Jayanti", date: "April 14", day: "Monday" },
    { id: 7, event: "Independence Day", date: "August 15", day: "Friday" },
    { id: 8, event: "Gandhi Jayanti / Dussehra", date: "October 2", day: "Thursday" },
    { id: 9, event: "Maharishi Valmiki Jayanti", date: "October 07", day: "Tuesday" },
    { id: 10, event: "Diwali", date: "October 20", day: "Monday" },
    { id: 11, event: "Gurupurab, Birthday Shri Guru Nanak Dev Ji", date: "November 05", day: "Wednesday" },
    { id: 12, event: "Christmas Day", date: "December 25", day: "Thursday" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#100902] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-accent/10 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold mb-6">
            Academic Year 2026
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            List of Holidays
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Official gazetted holidays observed by the Institute of Advance Education & Research.
          </p>
        </div>
      </section>

      {/* Holidays List Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CalendarOff className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-[#100902]">Gazetted Holidays</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-[#100902] w-16 text-center">S.No.</th>
                      <th className="p-4 font-bold text-[#100902]">Event</th>
                      <th className="p-4 font-bold text-[#100902]">Date</th>
                      <th className="p-4 font-bold text-[#100902]">Day</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {holidays.map((holiday) => (
                      <tr key={holiday.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-center text-gray-500 font-medium">{holiday.id}.</td>
                        <td className="p-4 font-semibold text-[#100902]">{holiday.event}</td>
                        <td className="p-4 text-gray-600">
                          <span className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
                            <Calendar className="w-3 h-3 text-gray-500" />
                            {holiday.date}
                          </span>
                        </td>
                        <td className="p-4 text-gray-600">{holiday.day}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-lg text-sm text-gray-600">
              <p><strong>Note:</strong> The dates mentioned above are subject to change as per government notifications or institutional requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}