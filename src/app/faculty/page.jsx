import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap } from 'lucide-react';

export default function Faculty() {
  const faculty = [
    {
      name: "Mrs. Gayathri Devi",
      role: "Principal",
      qual: "M.A., B.Ed.",
      exp: "25+ Years",
      image: "bg-stone-200"
    },
    {
      name: "Mr. Suresh Kumar",
      role: "Vice Principal & Math HOD",
      qual: "M.Sc., B.Ed.",
      exp: "18 Years",
      image: "bg-stone-200"
    },
    {
      name: "Mrs. Lakshmi Rao",
      role: "Science HOD",
      qual: "M.Sc., M.Phil.",
      exp: "15 Years",
      image: "bg-stone-200"
    },
    {
      name: "Mr. Anand Sharma",
      role: "Social Studies Teacher",
      qual: "M.A., B.Ed.",
      exp: "12 Years",
      image: "bg-stone-200"
    },
    {
      name: "Mrs. Veena S",
      role: "Kannada Teacher",
      qual: "M.A., B.Ed.",
      exp: "20 Years",
      image: "bg-stone-200"
    },
    {
      name: "Mr. Robert D'Souza",
      role: "English Teacher",
      qual: "M.A., B.Ed.",
      exp: "10 Years",
      image: "bg-stone-200"
    },
    {
      name: "Mrs. Geetha K",
      role: "Hindi Teacher",
      qual: "B.A., B.Ed.",
      exp: "8 Years",
      image: "bg-stone-200"
    },
    {
      name: "Mr. Ramesh B",
      role: "Physical Education Director",
      qual: "M.P.Ed.",
      exp: "14 Years",
      image: "bg-stone-200"
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Faculty</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Experienced mentors dedicated to shaping the future of every child.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100 group">
              <div className={`h-64 ${member.image} flex items-center justify-center text-stone-400`}>
                {/* Placeholder for Faculty Image */}
                <span className="text-sm">Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 font-serif mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <div className="space-y-2 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-stone-400" />
                    <span>{member.qual}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold text-xs px-1 border border-stone-300 rounded">Exp</span>
                    <span>{member.exp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
