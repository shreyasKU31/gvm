import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Monitor, FlaskConical, Trophy, ShieldCheck, Bus, Library } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: <Monitor size={40} className="text-primary" />,
      title: "Smart Classrooms",
      desc: "Our classrooms are equipped with interactive smart boards and digital learning aids to make learning engaging and effective. Spacious and well-ventilated, they provide the perfect environment for focus.",
      image: "bg-stone-200"
    },
    {
      icon: <FlaskConical size={40} className="text-secondary" />,
      title: "Science Laboratories",
      desc: "Separate, fully-equipped laboratories for Physics, Chemistry, and Biology allow students to conduct experiments and gain practical knowledge. Safety is our top priority here.",
      image: "bg-stone-200"
    },
    {
      icon: <Library size={40} className="text-primary" />,
      title: "Library & Reading Room",
      desc: "A vast collection of over 5000 books, journals, and digital resources. Our library is a quiet sanctuary for book lovers and researchers alike.",
      image: "bg-stone-200"
    },
    {
      icon: <Monitor size={40} className="text-secondary" />,
      title: "Computer Lab",
      desc: "State-of-the-art computer lab with high-speed internet and the latest software. We ensure every student is digitally literate and future-ready.",
      image: "bg-stone-200"
    },
    {
      icon: <Trophy size={40} className="text-primary" />,
      title: "Sports Complex",
      desc: "Expansive playground for cricket, football, and athletics. Indoor facilities for badminton, table tennis, and chess. We believe in the spirit of sportsmanship.",
      image: "bg-stone-200"
    },
    {
      icon: <Bus size={40} className="text-secondary" />,
      title: "Transport",
      desc: "Safe and reliable bus transport facility covering all major routes in and around Kudur and Magadi. All buses are equipped with GPS tracking and CCTV.",
      image: "bg-stone-200"
    },
    {
      icon: <ShieldCheck size={40} className="text-primary" />,
      title: "Safety & Security",
      desc: "The entire campus is under 24/7 CCTV surveillance. We have trained security personnel and strict entry-exit protocols to ensure the safety of every child.",
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Campus Facilities</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Infrastructure that supports holistic learning and well-being.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {facilities.map((facility, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="w-full md:w-1/2">
                <div className={`h-64 ${facility.image} rounded-xl shadow-md flex items-center justify-center text-stone-400`}>
                  {/* Placeholder Image */}
                  <span className="text-lg font-medium">Image: {facility.title}</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="bg-white p-4 rounded-full inline-block shadow-sm mb-2">
                  {facility.icon}
                </div>
                <h2 className="text-3xl font-bold text-stone-900 font-serif">{facility.title}</h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
