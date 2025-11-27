import { Palette, Music, Dumbbell, Globe } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Arts & Crafts",
      desc: "Unleashing creativity through painting, pottery, and design."
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music & Dance",
      desc: "Traditional and contemporary performing arts training."
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Sports & Yoga",
      desc: "Physical fitness and mental well-being through daily practice."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Eco Club",
      desc: "Connecting with nature and learning sustainability."
    }
  ];

  return (
    <section className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Beyond Academics</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-stone-400 max-w-2xl mx-auto">
            We believe in holistic development. Our diverse range of co-curricular activities ensures every child finds their passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-stone-800/50 backdrop-blur-sm p-6 rounded-xl border border-stone-700 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-serif">{activity.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
