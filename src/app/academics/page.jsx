import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Brain, Microscope, Globe } from 'lucide-react';

export default function Academics() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Academics</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            A curriculum designed to inspire curiosity, foster critical thinking, and build a strong foundation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Methodology */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-serif">Teaching Methodology</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
              We follow a student-centric approach that goes beyond textbooks. Our methodology integrates traditional wisdom with modern pedagogical techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-dark mb-4">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-3">Experiential Learning</h3>
              <p className="text-stone-600 leading-relaxed">
                Learning by doing. We emphasize practical experiments, field trips, and hands-on projects to understand concepts deeply.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary-dark mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-3">Holistic Development</h3>
              <p className="text-stone-600 leading-relaxed">
                Focus on physical, emotional, and social growth alongside academics through sports, arts, and value education.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-dark mb-4">
                <Microscope size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-3">Scientific Temper</h3>
              <p className="text-stone-600 leading-relaxed">
                Encouraging questioning, observation, and analysis to develop a scientific temper and rational thinking.
              </p>
            </div>
          </div>
        </div>

        {/* Curriculum Details */}
        <div className="space-y-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-8 text-white flex flex-col justify-center">
              <BookOpen size={48} className="mb-4 opacity-80" />
              <h3 className="text-3xl font-bold font-serif mb-2">Pre-Primary</h3>
              <p className="text-primary-100 font-medium">Pre-KG, LKG, UKG</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="text-xl font-bold text-stone-900 mb-4">Foundation Stage</h4>
              <p className="text-stone-600 leading-relaxed mb-6">
                A play-based curriculum focusing on:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Social & Emotional Skills</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Language & Communication</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Fine & Gross Motor Skills</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Basic Numeracy</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Creative Arts</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Storytelling & Rhymes</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-secondary p-8 text-white flex flex-col justify-center">
              <BookOpen size={48} className="mb-4 opacity-80" />
              <h3 className="text-3xl font-bold font-serif mb-2">Primary</h3>
              <p className="text-green-100 font-medium">Grade 1 to 5</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="text-xl font-bold text-stone-900 mb-4">Preparatory Stage</h4>
              <p className="text-stone-600 leading-relaxed mb-6">
                Building strong foundations in core subjects:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> English, Kannada, Hindi</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Mathematics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Environmental Science (EVS)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Computer Basics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> General Knowledge</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Physical Education</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-stone-800 p-8 text-white flex flex-col justify-center">
              <BookOpen size={48} className="mb-4 opacity-80" />
              <h3 className="text-3xl font-bold font-serif mb-2">High School</h3>
              <p className="text-stone-400 font-medium">Grade 6 to 10</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h4 className="text-xl font-bold text-stone-900 mb-4">Middle & Secondary Stage</h4>
              <p className="text-stone-600 leading-relaxed mb-6">
                Rigorous preparation for board exams and future studies:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> English, Kannada, Hindi</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Mathematics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Science (Physics, Chem, Bio)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Social Science (History, Civics, Geo)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Information Technology</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Life Skills & Value Education</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
