import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import InventoryPage from './pages/InventoryPage';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import HeroSlider from './components/HeroSlider';
import Inventory from './pages/Inventory';
import Contact from './pages/Contact';

const ReviewCard: React.FC<{ name: string; review: string; rating: number; equipment: string }> = ({
  name,
  review,
  rating,
  equipment,
}) => {
  return (
    <div className="bg-gray-900 p-4 md:p-6 border border-gray-600 hover:border-yellow-400 transition-all duration-300">
      <div className="flex items-center mb-3 md:mb-4">
        <div className="flex space-x-1 mr-2 md:mr-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}
            />
          ))}
        </div>
        <span className="font-exo2 text-sm md:text-base text-gray-400">{equipment}</span>
      </div>
      <p className="font-exo2 text-base md:text-lg text-gray-300 mb-3 md:mb-4 italic">"{review}"</p>
      <p className="font-exo2 text-base md:text-lg text-white font-bold">- {name}</p>
    </div>
  );
};

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidePoint, setHidePoint] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy-policy' | 'terms-of-service' | 'inventory-page'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsNavVisible(true);
        setHidePoint(null);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (isNavVisible) {
          setIsNavVisible(false);
          setHidePoint(currentScrollY);
          setIsMobileMenuOpen(false);
        }
      } else if (currentScrollY < lastScrollY) {
        if (hidePoint !== null && currentScrollY <= hidePoint) {
          setIsNavVisible(true);
          setHidePoint(null);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNavVisible, hidePoint]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'privacy-policy') {
      setCurrentPage('privacy-policy');
      return;
    }

    if (sectionId === 'terms-of-service') {
      setCurrentPage('terms-of-service');
      return;
    }

    if (sectionId === 'inventory-page') {
      setCurrentPage('inventory-page');
      return;
    }

    setCurrentPage('home');
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleServiceQuoteClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleViewAllInventory = () => {
    setCurrentPage('inventory-page');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'privacy-policy') return <PrivacyPolicy />;
  if (currentPage === 'terms-of-service') return <TermsOfService />;
  if (currentPage === 'inventory-page') return <InventoryPage onBackToHome={handleBackToHome} />;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation
        isNavVisible={isNavVisible}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      <HeroSlider />

      {/* REPAIR SERVICES */}
      <section id="services" className="py-12 md:py-20 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="chrome-plate-service relative">
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>

              <div className="relative z-10 p-6 md:p-8">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">REPAIR SERVICES</h3>
                  <p className="font-exo2 text-lg md:text-xl lg:text-2xl">
                    We work on all types of small engines. If you can pour gas in it, we can get it running.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-3"></div>
                      <div>
                        <h4 className="font-exo2 text-2xl font-bold mb-1">Engine Diagnostics</h4>
                        <p className="font-exo2 text-lg">Identify and diagnose engine problems</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-3"></div>
                      <div>
                        <h4 className="font-exo2 text-2xl font-bold mb-1">Routine Maintenance</h4>
                        <p className="font-exo2 text-lg">Oil changes, filters, spark plugs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6 md:mt-8">
                  <button
                    onClick={handleServiceQuoteClick}
                    className="steel-button font-exo2 font-bold py-4 px-10 text-2xl text-red-600"
                  >
                    GET SERVICE QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Inventory onViewAllInventory={handleViewAllInventory} />

      {/* WHY CHOOSE US */}
      <section id="about" className="py-12 md:py-20 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="chrome-plate-service relative">
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>

              <div className="relative z-10 p-6 md:p-8">
                <h3 className="text-center text-4xl font-bold mb-6">WHY CHOOSE US</h3>
                <p className="text-center font-exo2 text-lg">Real mechanics who know how to get the job done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section id="reviews" className="py-12 md:py-20 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-4xl font-bold mb-8">CUSTOMER REVIEWS</h3>
            <div className="space-y-6">
              <ReviewCard
                name="Chris Clark"
                rating={5}
                equipment="Snowblower"
                review="Nick has serviced my snowblower and both mowers. He explains everything clearly and prices are fair."
              />
              <ReviewCard
                name="Tom Washburn"
                rating={5}
                equipment="Snowblower"
                review="Saved me right before a snowstorm. Fast and affordable."
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}

export default App;
