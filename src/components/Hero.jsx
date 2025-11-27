export default function Hero() {
  return (
    <div className="relative bg-stone-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#D97706" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-semibold tracking-wide uppercase">
            Welcome to Gurukula Vidya Mandira
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
            Where <span className="text-primary">Tradition</span> Meets <span className="text-secondary">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nurturing minds with ancient wisdom and modern knowledge. A sanctuary for holistic learning and character building.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-md font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Admissions Open 2025-26
            </button>
            <button className="bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 text-lg px-8 py-4 rounded-md font-bold shadow-sm hover:shadow-md transition-all">
              Explore Campus
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-primary via-secondary to-primary opacity-80"></div>
    </div>
  );
}
