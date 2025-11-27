import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award, ScrollText } from 'lucide-react';

export default function About() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Us</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            A legacy of excellence, rooted in tradition and looking towards the future.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full text-primary-dark">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-stone-900 font-serif">Our Mission</h2>
            </div>
            <p className="text-stone-600 leading-relaxed text-lg">
              To provide a nurturing environment that fosters academic excellence, character development, and social responsibility, empowering students to become global citizens while staying rooted in Indian values.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary-dark">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold text-stone-900 font-serif">Our Vision</h2>
            </div>
            <p className="text-stone-600 leading-relaxed text-lg">
              To be a beacon of holistic education where every child discovers their potential, embraces knowledge with humility, and leads with integrity and compassion.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">Leadership</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-stone-900 mb-2 font-serif">From the Principal's Desk</h3>
              <h4 className="text-primary font-medium mb-6">Mrs. Gayathri Devi, M.A., B.Ed.</h4>
              <p className="text-stone-600 leading-relaxed mb-4">
                "Education is not just about filling a bucket, but lighting a fire. At Gurukula Vidya Mandira, we strive to ignite the curiosity in every child. We believe that every student is unique and has the potential to achieve greatness."
              </p>
              <p className="text-stone-600 leading-relaxed">
                "Our dedicated faculty and state-of-the-art facilities ensure that learning is a joyful and meaningful experience. We invite you to be a part of our journey in shaping the leaders of tomorrow."
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 bg-stone-200 rounded-full flex items-center justify-center text-stone-400 shadow-inner">
                {/* Placeholder for Principal's Image */}
                <span className="text-sm">Principal's Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation & History */}
        <div className="bg-stone-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary" size={28} />
                <h3 className="text-2xl font-bold text-stone-900 font-serif">Accreditation</h3>
              </div>
              <p className="text-stone-600 leading-relaxed mb-6">
                Gurukula Vidya Mandira is recognized by the Government of Karnataka and affiliated to the Karnataka Secondary Education Examination Board (KSEEB). We follow the State Board syllabus with an integrated approach to learning.
              </p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> Recognized by Govt. of Karnataka</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> Affiliated to KSEEB</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> ISO 9001:2015 Certified Institution</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ScrollText className="text-primary" size={28} />
                <h3 className="text-2xl font-bold text-stone-900 font-serif">Our History</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Established in 1995 by the Gurukula Educational Trust, the school started with a humble beginning of 50 students. Over the last three decades, it has grown into a premier institution in the district, known for its academic excellence and value-based education. Today, we are proud to be the alma mater of over 5000 successful alumni.
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
