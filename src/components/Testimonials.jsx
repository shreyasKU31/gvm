import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Gurukula Vidya Mandira has been a second home for my child. The values they instill are as important as the academic excellence they provide.",
      author: "Mrs. Lakshmi Rao",
      role: "Parent of Grade 8 Student"
    },
    {
      quote: "I have seen a remarkable transformation in my son's confidence and discipline since he joined. The teachers are truly dedicated.",
      author: "Mr. Rajesh Kumar",
      role: "Parent of Grade 5 Student"
    },
    {
      quote: "The perfect blend of modern education and traditional values. I couldn't have asked for a better school for my daughter.",
      author: "Mrs. Ananya Gupta",
      role: "Parent of Grade 10 Student"
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">Parent Testimonials</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative">
              <div className="absolute -top-4 left-8 bg-primary text-white p-2 rounded-full">
                <Quote size={20} />
              </div>
              <p className="text-stone-600 italic mb-6 leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-bold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-stone-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
