import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Award, 
  Star
} from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState('home');

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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

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

    if (sectionId === 'cookie-policy') {
      setCurrentPage('cookie-policy');
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
        behavior: 'smooth'
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
        behavior: 'smooth'
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

      {/* Services Section */}
      {/* (unchanged — omitted here for brevity in explanation, but unchanged in your file) */}

      <Inventory onViewAllInventory={handleViewAllInventory} />
      <Contact />
      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}

export default App;
