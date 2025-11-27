import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image as ImageIcon, PlayCircle } from 'lucide-react';

export default function Gallery() {
  // Placeholder data for gallery items
  const galleryItems = [
    { type: 'image', title: 'Annual Day Celebrations 2024', color: 'bg-red-100' },
    { type: 'image', title: 'Science Exhibition', color: 'bg-blue-100' },
    { type: 'image', title: 'Sports Meet Finals', color: 'bg-green-100' },
    { type: 'image', title: 'Independence Day', color: 'bg-orange-100' },
    { type: 'video', title: 'School Tour Video', color: 'bg-stone-200' },
    { type: 'image', title: 'Yoga Day', color: 'bg-yellow-100' },
    { type: 'image', title: 'Art Competition', color: 'bg-purple-100' },
    { type: 'image', title: 'Field Trip to Mysore', color: 'bg-teal-100' },
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Gallery</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Glimpses of life at Gurukula Vidya Mandira.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Filters (Placeholder) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-primary text-white rounded-full font-medium shadow-sm">All</button>
          <button className="px-6 py-2 bg-white text-stone-600 border border-stone-200 rounded-full font-medium hover:bg-stone-50">Events</button>
          <button className="px-6 py-2 bg-white text-stone-600 border border-stone-200 rounded-full font-medium hover:bg-stone-50">Campus</button>
          <button className="px-6 py-2 bg-white text-stone-600 border border-stone-200 rounded-full font-medium hover:bg-stone-50">Sports</button>
          <button className="px-6 py-2 bg-white text-stone-600 border border-stone-200 rounded-full font-medium hover:bg-stone-50">Academic</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all">
              <div className={`absolute inset-0 ${item.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                {item.type === 'video' ? (
                  <PlayCircle size={48} className="text-stone-400 opacity-50" />
                ) : (
                  <ImageIcon size={48} className="text-stone-400 opacity-50" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold font-serif text-lg">{item.title}</h3>
                <p className="text-stone-300 text-sm capitalize">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
