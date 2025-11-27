import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, Calendar, FileText } from 'lucide-react';

export default function News() {
  const news = [
    {
      type: "Announcement",
      date: "Nov 25, 2025",
      title: "Admissions Open for 2026-27",
      desc: "Applications are now invited for Pre-KG to Grade 9. Visit the school office or apply online."
    },
    {
      type: "Event",
      date: "Dec 15, 2025",
      title: "Annual Sports Meet",
      desc: "The much-awaited Annual Sports Meet will be held at the school grounds. Parents are invited."
    },
    {
      type: "Circular",
      date: "Nov 20, 2025",
      title: "Winter Vacation Schedule",
      desc: "School will remain closed for winter break from Dec 24th to Jan 2nd."
    },
    {
      type: "Achievement",
      date: "Nov 10, 2025",
      title: "District Level Science Quiz Winner",
      desc: "Congratulating Master Arjun of Grade 9 for securing 1st place in the District Science Quiz."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#EAB308" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">News & Events</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Gurukula.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* News Feed */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">Latest Updates</h2>
            {news.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex gap-4 hover:border-primary transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-stone-100 rounded-lg flex flex-col items-center justify-center text-stone-600 font-bold border border-stone-200">
                    <span className="text-xs uppercase">{item.date.split(' ')[0]}</span>
                    <span className="text-xl">{item.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      item.type === 'Announcement' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'Event' ? 'bg-green-100 text-green-700' :
                      item.type === 'Circular' ? 'bg-orange-100 text-orange-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar: Calendar */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 sticky top-24">
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-6 flex items-center gap-2">
                <Calendar className="text-primary" /> Academic Calendar
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 pb-4">
                  <h4 className="font-bold text-stone-900 text-sm">Unit Test 2</h4>
                  <p className="text-xs text-stone-500">Dec 5 - Dec 10</p>
                </div>
                <div className="border-l-2 border-secondary pl-4 pb-4">
                  <h4 className="font-bold text-stone-900 text-sm">Sports Meet</h4>
                  <p className="text-xs text-stone-500">Dec 15 - Dec 17</p>
                </div>
                <div className="border-l-2 border-primary pl-4 pb-4">
                  <h4 className="font-bold text-stone-900 text-sm">Christmas Celebration</h4>
                  <p className="text-xs text-stone-500">Dec 23</p>
                </div>
                <div className="border-l-2 border-stone-300 pl-4">
                  <h4 className="font-bold text-stone-900 text-sm">Republic Day</h4>
                  <p className="text-xs text-stone-500">Jan 26</p>
                </div>
              </div>
              <button className="w-full mt-6 py-2 border border-stone-300 rounded-md text-stone-600 text-sm font-medium hover:bg-stone-50">
                Download Full Calendar
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
