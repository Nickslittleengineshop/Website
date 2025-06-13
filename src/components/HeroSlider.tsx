import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(0); // Track which text to display

  const slides = [
    {
      // Desktop Image
      desktopImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Motorcycle%20correct%20display_result.webp',
      // Mobile Image - ADD YOUR MOBILE VERSION HERE
      mobileImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Motorcycle%20mobile_result.webp', // ADD YOUR MOBILE MOTORCYCLE IMAGE URL HERE
      title: "Is Your Bike all set for a long trip?",
      subtitle: ""
    },
    {
      // Desktop Image
      desktopImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/4%20wheeler%20in%20correct%20display_result.webp',
      // Mobile Image - ADD YOUR MOBILE VERSION HERE
      mobileImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/mobile%20size%204%20wheeler_result.webp', // ADD YOUR MOBILE ATV IMAGE URL HERE
      title: "How Is Your Four-Wheeler Running?", 
      subtitle: ""
    },
    {
      // Desktop Image
      desktopImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Man%20on%20rider%20correct%20display_result.webp',
      // Mobile Image - ADD YOUR MOBILE VERSION HERE
      mobileImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Rider%20for%20mobile_result.webp', // ADD YOUR MOBILE LAWN EQUIPMENT IMAGE URL HERE
      title: "Lawn Equipment Need Servicing?",
      subtitle: ""
    },
    {
      // Desktop Image
      desktopImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Chainsaw%20man%20correct%20display_result.webp',
      // Mobile Image - ADD YOUR MOBILE VERSION HERE
      mobileImage: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Chainsaw%20mobile_result.webp', // ADD YOUR MOBILE CHAINSAW IMAGE URL HERE
      title: "Ready to cut down some trees?",
      subtitle: ""
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Sync text changes with image transitions
  useEffect(() => {
    // Delay text change to sync with image fade transition
    const textTimer = setTimeout(() => {
      setDisplayedSlide(currentSlide);
    }, 500); // Half of the 1000ms transition to sync with the crossfade midpoint

    return () => clearTimeout(textTimer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop Image - Hidden on mobile */}
          <img
            src={slide.desktopImage}
            alt={slide.title}
            className="hidden md:block w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Mobile Image - Hidden on desktop, falls back to desktop if mobile not provided */}
          <img
            src={slide.mobileImage || slide.desktopImage}
            alt={slide.title}
            className="block md:hidden w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Navigation Arrows - Mobile Optimized */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 p-2 md:p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-yellow-400" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 p-2 md:p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-yellow-400" />
      </button>

      {/* Dynamic Content Overlay - Synced with Images */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 md:px-6 max-w-4xl">
          <h1 className="font-exo2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 md:mb-6 tracking-wider drop-shadow-2xl transition-all duration-1000 ease-in-out">
            {slides[displayedSlide].title}
          </h1>
          {slides[displayedSlide].subtitle && (
            <p className="font-exo2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 drop-shadow-xl transition-all duration-1000 ease-in-out">
              {slides[displayedSlide].subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Slide Indicators - Mobile Optimized */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 md:h-3 rounded-full transition-all duration-1000 ${
              index === currentSlide
                ? 'bg-yellow-400 w-6 md:w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-80 w-2 md:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;