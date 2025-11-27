import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, BookOpen, Monitor, FileText, Download } from 'lucide-react';

export default function StudentCorner() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Student Corner</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Everything you need to excel in your studies and organize your schedule.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-dark mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-4">Class Timetable</h3>
            <p className="text-stone-600 text-sm mb-4">Download the class-wise weekly timetable for the current academic year.</p>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 bg-stone-50 hover:bg-stone-100 rounded text-sm flex justify-between items-center text-stone-700">
                <span>Grade 1 - 5</span> <Download size={14} />
              </button>
              <button className="w-full text-left px-4 py-2 bg-stone-50 hover:bg-stone-100 rounded text-sm flex justify-between items-center text-stone-700">
                <span>Grade 6 - 8</span> <Download size={14} />
              </button>
              <button className="w-full text-left px-4 py-2 bg-stone-50 hover:bg-stone-100 rounded text-sm flex justify-between items-center text-stone-700">
                <span>Grade 9 - 10</span> <Download size={14} />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary-dark mb-4">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-4">Exam Schedule</h3>
            <p className="text-stone-600 text-sm mb-4">Dates and syllabus for upcoming Unit Tests and Semester Exams.</p>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 bg-stone-50 hover:bg-stone-100 rounded text-sm flex justify-between items-center text-stone-700">
                <span>Unit Test 2 Schedule</span> <Download size={14} />
              </button>
              <button className="w-full text-left px-4 py-2 bg-stone-50 hover:bg-stone-100 rounded text-sm flex justify-between items-center text-stone-700">
                <span>Mid-Term Syllabus</span> <Download size={14} />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Monitor size={24} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-4">Digital Resources</h3>
            <p className="text-stone-600 text-sm mb-4">Access e-books, previous year question papers, and learning videos.</p>
            <button className="w-full py-2 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-white transition-colors">
              Access Library Portal
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
