import { BookOpen, Shield, Users, Zap } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Academic Excellence",
      description: "Rigorous curriculum designed to challenge and inspire students to reach their full potential."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Safe & Secure Campus",
      description: "24/7 security and surveillance ensuring a safe environment for your child's growth."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Experienced Faculty",
      description: "Dedicated mentors with years of experience in shaping young minds with care."
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Modern Facilities",
      description: "State-of-the-art labs and smart classrooms blending technology with tradition."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-stone-50 p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-4 p-3 bg-white rounded-lg inline-block shadow-sm group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
