"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const heroImages = [
    '/assets/hero/hero 1.jpg',
    '/assets/hero/hero 2.jpg',
    '/assets/hero/hero 3.jpg',
    '/assets/hero/hero 4.jpg',
    '/assets/hero/hero 5.jpg',
    '/assets/hero/hero 6.jpg',
    '/assets/hero/hero 7.jpg',
    '/assets/hero/hero 8.jpg',
    '/assets/hero/hero 9.jpg',
    '/assets/hero/hero 10.jpg',
    '/assets/hero/hero 11.jpg',
    '/assets/hero/hero 12.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
        {/* Images */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={src}
              alt={`School campus ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark background for letterboxing */}
            <div className="absolute inset-0 bg-stone-900 -z-10"></div>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-5xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wide uppercase border border-white/30">
              Welcome to Gurukula Vidya Mandira
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-lg">
              Where <span className="text-primary">Tradition</span> Meets <span className="text-green-400">Excellence</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Nurturing minds with ancient wisdom and modern knowledge. A sanctuary for holistic learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/admissions"
                className="bg-primary hover:bg-primary-dark text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Admissions Open 2025-26
              </Link>
              <Link 
                href="/gallery"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold shadow-sm hover:shadow-md transition-all"
              >
                Explore Campus
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary w-6 sm:w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-black/20">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-linear"
            style={{ 
              width: `${((currentSlide + 1) / heroImages.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
    </div>
  );
}
