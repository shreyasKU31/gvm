import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Target, Eye, Award, ScrollText, Quote, Phone } from 'lucide-react';

// Page-specific SEO metadata
export const metadata = {
  title: "About Us - Our Mission, Vision & Leadership",
  description: "Learn about Gurukula Vidya Mandira's 30+ year legacy of excellence. Meet our dedicated leadership team including President Udayakumar and Secretary Keshavmurthy K R. Discover our mission to blend traditional values with modern education.",
  keywords: ["about Gurukula Vidya Mandira", "school history Magadi", "school leadership Karnataka", "Udayakumar president", "Keshavmurthy secretary", "school mission vision"],
  openGraph: {
    title: "About Gurukula Vidya Mandira - 30+ Years of Excellence",
    description: "Discover our mission, vision, and the dedicated leadership behind Karnataka's premier school in Kuduru, Magadi.",
  },
};

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

        {/* The Pillars of Our Institution */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">The Pillars of Our Institution</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-stone-600 mt-4">Visionaries who built a legacy of excellence</p>
          </div>
          
          {/* President - Image Left, Info Right */}
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden mb-8 h-auto md:h-[400px]">
            {/* Image Left */}
            <div className="relative w-full md:w-1/2 h-72 md:h-full bg-stone-700">
              <Image 
                src="/assets/faculty/president.jpg" 
                alt="Udayakumar - President" 
                fill 
                className="object-contain"
              />
              {/* Fade Gradient to Right */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-stone-800"></div>
            </div>
            {/* Info Right */}
            <div className="w-full md:w-1/2 bg-stone-800 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2">Udayakumar</h3>
              <p className="text-primary font-semibold text-lg mb-4">President</p>
              <p className="text-stone-300 leading-relaxed mb-4">
                M.Sc | Co-Owner of Gurukula Vidya Mandira
              </p>
              <p className="text-stone-400 leading-relaxed italic mb-4">
                "Education is the foundation of a strong nation. We are committed to nurturing young minds with knowledge, values, and the courage to dream big."
              </p>
              <a href="tel:+919986571057" className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors">
                <Phone size={18} />
                <span>+91 99865 71057</span>
              </a>
            </div>
          </div>

          {/* Secretary - Info Left, Image Right */}
          <div className="flex flex-col md:flex-row-reverse rounded-2xl overflow-hidden h-auto md:h-[400px]">
            {/* Image Right */}
            <div className="relative w-full md:w-1/2 h-72 md:h-full bg-stone-700">
              <Image 
                src="/assets/faculty/secratory.jpg" 
                alt="Keshavmurthy K R - Secretary" 
                fill 
                className="object-contain"
              />
              {/* Fade Gradient to Left */}
              <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-transparent to-stone-800"></div>
            </div>
            {/* Info Left */}
            <div className="w-full md:w-1/2 bg-stone-800 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2">Keshavmurthy K R</h3>
              <p className="text-secondary font-semibold text-lg mb-4">Secretary</p>
              <p className="text-stone-300 leading-relaxed mb-4">
                M.A | Co-Owner of Gurukula Vidya Mandira | Head Master (High school)
              </p>
              <p className="text-stone-400 leading-relaxed italic mb-4">
                "Every child deserves the best education. Our mission is to create an environment where students thrive academically and grow as responsible citizens."
              </p>
              <a href="tel:+919916830328" className="flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors">
                <Phone size={18} />
                <span>+91 99168 30328</span>
              </a>
            </div>
          </div>

          

        </div>

        {/* Accreditation & History */}
        <div className="bg-stone-100 rounded-2xl p-8 md:p-12 mb-20">
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

        {/* Our Faculty */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">Our Faculty</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-stone-600 mt-4">Dedicated educators shaping young minds</p>
          </div>

          {/* Head Mistress - Image Left, Info Right */}
          

          {/* Pre-KG to 4th Teachers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-stone-900 font-serif mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              Pre-KG to 4th Standard
            </h3>
            <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden mt-8 mb-8 h-auto md:h-[400px]">
            {/* Image Left */}
            <div className="relative w-full md:w-1/2 h-72 md:h-full bg-stone-700">
              <Image 
                src="/assets/faculty/headmistress.jpg" 
                alt="Vani B Holisagar - Head Mistress" 
                fill 
                className="object-contain"
              />
              {/* Fade Gradient to Right */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-stone-800"></div>
            </div>
            {/* Info Right */}
            <div className="w-full md:w-1/2 bg-stone-800 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2">Vani B Holisagar</h3>
              <p className="text-emerald-400 font-semibold text-lg mb-4">Head Mistress</p>
              <p className="text-stone-300 leading-relaxed mb-4">
                B.Ed | Leading the academic excellence at Gurukula Vidya Mandira
              </p>
              <p className="text-stone-400 leading-relaxed italic">
                "A school is a place where children learn not just academics, but values that shape their character. We nurture every student to become confident, compassionate, and capable individuals."
              </p>
            </div>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Mrs. Lakshmi Devi", qualification: "B.Ed", subject: "Class Teacher - Pre-KG" },
                { name: "Mrs. Suma R", qualification: "B.Ed", subject: "Class Teacher - LKG" },
                { name: "Mrs. Padmavathi", qualification: "B.Ed", subject: "Class Teacher - UKG" },
                { name: "Mrs. Kavitha M", qualification: "B.Ed", subject: "Class Teacher - 1st Std" },
                { name: "Mrs. Sunitha K", qualification: "B.Ed", subject: "Class Teacher - 2nd Std" },
                { name: "Mrs. Geetha R", qualification: "B.Ed", subject: "Class Teacher - 3rd Std" },
                { name: "Mrs. Manjula S", qualification: "B.Ed", subject: "Class Teacher - 4th Std" },
              ].map((teacher, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-stone-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-stone-900">{teacher.name}</h4>
                  <p className="text-sm text-stone-500">{teacher.qualification}</p>
                  <p className="text-sm text-primary font-medium">{teacher.subject}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5th to 10th Teachers */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900 font-serif mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              5th to 10th Standard
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Mr. Ramesh Kumar", qualification: "M.Sc, B.Ed", subject: "Mathematics" },
                { name: "Mrs. Savitha N", qualification: "M.Sc, B.Ed", subject: "Science" },
                { name: "Mr. Venkatesh R", qualification: "M.A, B.Ed", subject: "Social Science" },
                { name: "Mrs. Shobha K", qualification: "M.A, B.Ed", subject: "English" },
                { name: "Mr. Suresh M", qualification: "M.A, B.Ed", subject: "Kannada" },
                { name: "Mrs. Priya L", qualification: "M.A, B.Ed", subject: "Hindi" },
                { name: "Mr. Nagaraj S", qualification: "M.P.Ed", subject: "Physical Education" },
                { name: "Mrs. Deepa R", qualification: "M.Sc, B.Ed", subject: "Computer Science" },
              ].map((teacher, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-stone-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-stone-900">{teacher.name}</h4>
                  <p className="text-sm text-stone-500">{teacher.qualification}</p>
                  <p className="text-sm text-secondary font-medium">{teacher.subject}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
