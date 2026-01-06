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
      
      // Always show nav when at top of page
      if (currentScrollY < 10) {
        setIsNavVisible(true);
        setHidePoint(null);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (isNavVisible) {
          setIsNavVisible(false);
          setHidePoint(currentScrollY);
          setIsMobileMenuOpen(false); // Close mobile menu when scrolling
        }
      }
      // Scrolling up
      else if (currentScrollY < lastScrollY) {
        // Only show nav if we've scrolled back up to the point where it disappeared
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

  // Handle mobile menu toggle
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

  // Function to handle GET SERVICE QUOTE button click
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

  // Function to handle VIEW ALL INVENTORY button click
  const handleViewAllInventory = () => {
    setCurrentPage('inventory-page');
  };

  // Function to handle back to home from inventory page
  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  // Render different pages
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy />;
  }
  
  if (currentPage === 'terms-of-service') {
    return <TermsOfService />;
  }

  if (currentPage === 'inventory-page') {
    return <InventoryPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation 
        isNavVisible={isNavVisible}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section - Chrome Steel Plate Design */}
      <section id="services" className="py-12 md:py-20 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="chrome-plate-service relative">
              {/* Corner Screws */}
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                    REPAIR SERVICES
                  </h3>
                  <p className="font-exo2 text-lg md:text-xl lg:text-2xl">
                    We work on all types of small engines. If you can pour gas in it, we can get it running.
                  </p>
                </div>

                {/* Service List */}
                <div className="space-y-4 md:space-y-6">
                  {/* Top Row - 2 items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-exo2 text-xl md:text-2xl lg:text-3xl font-bold mb-1">Engine Diagnostics</h4>
                        <p className="font-exo2 text-base md:text-lg lg:text-xl">Identify and diagnose engine problems for all types of small engine equipment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-exo2 text-xl md:text-2xl lg:text-3xl font-bold mb-1">Routine Maintenance</h4>
                        <p className="font-exo2 text-base md:text-lg lg:text-xl">Oil changes, spark plug replacement, air filter cleaning, and general servicing to keep engines running smoothly</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Row - 2 items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-exo2 text-xl md:text-2xl lg:text-3xl font-bold mb-1">Electrical Troubleshooting</h4>
                        <p className="font-exo2 text-base md:text-lg lg:text-xl">Address issues with ignition systems, wiring, and other electrical components</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-exo2 text-xl md:text-2xl lg:text-3xl font-bold mb-1">Carburetor Service</h4>
                        <p className="font-exo2 text-base md:text-lg lg:text-xl">Rebuild, clean, or adjust carburetors for optimal fuel efficiency and performance</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row - 1 item centered */}
                  <div className="flex justify-center mb-4">
                    <div className="flex items-start space-x-3 max-w-md">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-exo2 text-xl md:text-2xl lg:text-3xl font-bold mb-1">Engine Repairs and Rebuilds</h4>
                        <p className="font-exo2 text-base md:text-lg lg:text-xl">Fix or replace damaged engine components, rebuild engines for improved performance or longevity</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6 md:mt-8">
                  <button 
                    onClick={handleServiceQuoteClick}
                    className="steel-button font-exo2 font-bold py-4 px-8 md:py-5 md:px-10 text-xl md:text-2xl text-red-600"
                  >
                    GET SERVICE QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <Inventory onViewAllInventory={handleViewAllInventory} />

      {/* Why Choose Us Section - Steel Plate Design */}
      <section id="about" className="py-12 md:py-20 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="chrome-plate-service relative">
              {/* Corner Screws */}
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                    WHY CHOOSE US
                  </h3>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl">
                    Real mechanics who know about getting the job done right.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold mb-1">Experience</h4>
                      <p className="font-exo2 text-sm md:text-base lg:text-lg">Over a decade of hands-on experience with all types of small engines and equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold mb-1">All Brands</h4>
                      <p className="font-exo2 text-sm md:text-base lg:text-lg">We work on everything - from vintage classics to the latest models from all manufacturers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold mb-1">Fair Pricing</h4>
                      <p className="font-exo2 text-sm md:text-base lg:text-lg">Honest pricing with no hidden fees. You pay for the work, not the corporate overhead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - Steel Plate Design */}
      <section id="reviews" className="py-12 md:py-20 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header Steel Plate */}
            <div className="chrome-plate-service relative mb-8 md:mb-12">
              {/* Corner Screws */}
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                    CUSTOMER REVIEWS
                  </h3>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                    Don't take our word for it. Here's what our customers say about our work.
                  </p>
                </div>
              </div>
            </div>

            {/* Individual Review Steel Plates */}
            <div className="space-y-6 md:space-y-8">
              {/* Review 1 */}
              <div className="chrome-plate-service relative">
                {/* Corner Screws */}
                <div className="screw-top-left"></div>
                <div className="screw-top-right"></div>
                <div className="screw-bottom-left"></div>
                <div className="screw-bottom-right"></div>
                
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl mb-4 italic">"Nick has serviced my snowblower and both mowers. He had a quite a challenge with my rider due to a previous serviceman but he quickly found the problem and corrected it. He is my go to guy for small engine repair in my area. He explains the issue in layman's terms and his charges are very reasonable, check him out!"</p>
                  <p className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold">- Chris Clark</p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="chrome-plate-service relative">
                {/* Corner Screws */}
                <div className="screw-top-left"></div>
                <div className="screw-top-right"></div>
                <div className="screw-bottom-left"></div>
                <div className="screw-bottom-right"></div>
                
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl mb-4 italic">"They saved me! Fixed a tire on my snowblower in 20 minutes right before a snow storm, for much less than I expected."</p>
                  <p className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold">- Tom Washburn</p>
                </div>
              </div>

              {/* Review 3 */}
              <div className="chrome-plate-service relative">
                {/* Corner Screws */}
                <div className="screw-top-left"></div>
                <div className="screw-top-right"></div>
                <div className="screw-bottom-left"></div>
                <div className="screw-bottom-right"></div>
                
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl mb-4 italic">"I had an electric scooter tire mounted on a 6 inch rim. Other places couldn't or wouldn't do it. They did it with no problem. Awesome job, the people are cool, laid back, and the shop is like a throwback in time from like 40 years ago. I will definitely recommend them. The best!"</p>
                  <p className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold">- Craig Olsen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}

export default App;