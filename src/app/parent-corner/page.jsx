import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Clock, Shirt, FileText, Download } from 'lucide-react';

export default function ParentCorner() {
  const resources = [
    {
      icon: <Book size={24} />,
      title: "Book List 2025-26",
      desc: "List of prescribed textbooks and notebooks for all grades.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Shirt size={24} />,
      title: "Uniform Guidelines",
      desc: "Details about regular uniform, sports uniform, and grooming standards.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Clock size={24} />,
      title: "School Timings",
      desc: "Arrival, departure, assembly, and break timings for all sections.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <FileText size={24} />,
      title: "Leave Application",
      desc: "Format for leave application and medical certificate submission.",
      color: "bg-purple-50 text-purple-600"
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Parent Corner</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Information and resources to help you support your child's education.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow flex items-start gap-6">
              <div className={`p-4 rounded-lg ${item.color}`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-stone-900 font-serif mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <button className="text-primary font-medium text-sm flex items-center gap-2 hover:underline">
                  <Download size={16} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">Parent Portal Login</h2>
          <p className="text-stone-600 mb-6 max-w-2xl">
            Access your child's attendance, marks card, and fee payment history through our secure online portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Username / Mobile No." className="px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="password" placeholder="Password" className="px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="bg-primary text-white px-6 py-2 rounded-md font-bold hover:bg-primary-dark transition-colors">Login</button>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
