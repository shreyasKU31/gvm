import { Award } from 'lucide-react';

export default function Achievements() {
  // Placeholder data - only render if there's real content
  const achievements = [
    {
      title: "Best School Award 2024",
      org: "District Education Board"
    },
    {
      title: "100% Pass Result",
      org: "SSLC Board Exams 2023-24"
    },
    {
      title: "State Level Sports Champions",
      org: "Inter-School Sports Meet"
    }
  ];

  if (achievements.length === 0) return null;

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-serif mb-2">Our Achievements</h2>
            <p className="text-primary-100">Celebrating excellence in every field.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg border border-white/20">
                <div className="bg-white text-primary p-2 rounded-full">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-sm text-primary-100">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
