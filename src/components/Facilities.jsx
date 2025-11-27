import { FlaskConical, Monitor, Trophy, ShieldCheck } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      title: "Smart Classrooms",
      image: "bg-amber-100", // Placeholder for image
      color: "bg-primary"
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-white" />,
      title: "Science Labs",
      image: "bg-green-100",
      color: "bg-secondary"
    },
    {
      icon: <Trophy className="w-10 h-10 text-white" />,
      title: "Sports Complex",
      image: "bg-amber-100",
      color: "bg-primary"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      title: "Safe Campus",
      image: "bg-green-100",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">Our Facilities</h2>
            <div className="w-24 h-1 bg-secondary rounded-full mb-4"></div>
            <p className="text-lg text-stone-600">
              Creating an environment that fosters learning, creativity, and physical well-being.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border border-stone-300 rounded-md text-stone-700 font-medium hover:bg-stone-50 transition-colors">
            View All Facilities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl h-64 shadow-md cursor-pointer">
              {/* Background Placeholder */}
              <div className={`absolute inset-0 ${facility.image} transition-transform duration-500 group-hover:scale-110`}></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className={`${facility.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}>
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-serif">{facility.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <button className="px-6 py-3 border border-stone-300 rounded-md text-stone-700 font-medium hover:bg-stone-50 transition-colors w-full">
            View All Facilities
          </button>
        </div>
      </div>
    </section>
  );
}
