import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Users, BookOpen, Shield } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: <GraduationCap size={28} />, label: "Pre-KG to 10th", desc: "Complete Education" },
    { icon: <Users size={28} />, label: "30+ Years", desc: "Of Excellence" },
    { icon: <BookOpen size={28} />, label: "KSEEB", desc: "Affiliated" },
    { icon: <Shield size={28} />, label: "Safe Campus", desc: "24/7 Security" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif mb-4">
            About Our School
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/assets/logo/logo.avif" 
                alt="School Campus" 
                fill 
                className="object-contain p-8"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-xl -z-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              <strong className="text-stone-900">Gurukula Vidya Mandira</strong> is a distinguished institution committed to providing quality education that blends traditional Indian values with modern academic excellence.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Nestled in the serene surroundings of Kuduru, Magadi, we offer a nurturing environment where students develop intellectually, morally, and socially. Our experienced faculty and comprehensive curriculum prepare students for success in life.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4 bg-stone-50 rounded-xl">
                  <div className="text-primary mb-2 flex justify-center">{item.icon}</div>
                  <div className="font-bold text-stone-900 text-sm">{item.label}</div>
                  <div className="text-xs text-stone-500">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Learn more about us →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
