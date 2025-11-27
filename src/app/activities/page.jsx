import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, Music, Dumbbell, Globe, Mic, Tent } from 'lucide-react';

export default function Activities() {
  const clubs = [
    {
      icon: <Palette size={32} />,
      title: "Art & Craft Club",
      desc: "Exploring creativity through painting, sketching, pottery, and origami.",
      color: "bg-red-50 text-red-600 border-red-100"
    },
    {
      icon: <Music size={32} />,
      title: "Music & Dance",
      desc: "Training in classical and contemporary music and dance forms.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: <Globe size={32} />,
      title: "Eco Club",
      desc: "Promoting environmental awareness through tree plantation and recycling drives.",
      color: "bg-green-50 text-green-600 border-green-100"
    },
    {
      icon: <Mic size={32} />,
      title: "Debate & Literary Club",
      desc: "Honing public speaking, creative writing, and critical thinking skills.",
      color: "bg-yellow-50 text-yellow-600 border-yellow-100"
    },
    {
      icon: <Dumbbell size={32} />,
      title: "Sports Club",
      desc: "Coaching in cricket, football, volleyball, and athletics.",
      color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      icon: <Tent size={32} />,
      title: "Scouts & Guides",
      desc: "Instilling discipline, leadership, and service to society.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Co-Curricular Activities</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Beyond the classroom: Discovering passions and building character.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Clubs Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif text-center">Student Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className={`p-8 rounded-xl border ${club.color} hover:shadow-md transition-shadow`}>
                <div className="mb-4">{club.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{club.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {club.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Events */}
        <div>
          <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif text-center">Annual Events</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-48 h-32 bg-stone-200 rounded-lg flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 font-serif mb-2">Annual Day</h3>
                <p className="text-stone-600">A grand celebration of culture and talent where every student gets a stage to shine.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-48 h-32 bg-stone-200 rounded-lg flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 font-serif mb-2">Sports Meet</h3>
                <p className="text-stone-600">Three days of intense sporting action, team spirit, and healthy competition.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-48 h-32 bg-stone-200 rounded-lg flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 font-serif mb-2">Science & Arts Exhibition</h3>
                <p className="text-stone-600">Showcasing the innovative models and artistic creations of our young minds.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
