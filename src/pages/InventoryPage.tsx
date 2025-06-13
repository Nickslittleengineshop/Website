import React, { useState, useEffect } from 'react';
import { Grid, List, ArrowLeft, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';

interface InventoryItem {
  id: string;
  brand: string;
  model: string;
  category: string;
  price?: string;
  status: 'available' | 'sold' | 'pending';
  image: string;
  description: string;
}

const inventoryData: InventoryItem[] = [
  {
    id: '1',
    brand: 'ECHO',
    model: 'SRM-225 Trimmer',
    category: 'Trimmers & Brushcutters',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/ECHO_Trimmers_SRM-225_StaticShot2%20no%20background.webp',
    description: 'Professional-grade string trimmer with quick-loading Speed-Feed® 400 trimmer head and 59-inch shaft for maximum convenience and productivity.'
  },
  {
    id: '2',
    brand: 'HUSQVARNA',
    model: 'TS142 Lawn Tractor',
    category: 'Riding Lawn Mowers',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Husqvarna%20TS142%20tractor_result_result.webp',
    description: 'Reliable riding lawn mower with reinforced steel deck and Air Induction™ technology for superior quality cut.'
  },
  {
    id: '3',
    brand: 'HUSQVARNA',
    model: '562 XP Professional Chainsaw',
    category: 'Chainsaws',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Husqvarna%20562xp%20chainsaw.webp',
    description: 'Professional chainsaw with X-Torq® engine technology featuring 20% less fuel consumption and 75% less exhaust emissions. Handles up to 28" bars for heavy-duty cutting.'
  },
  {
    id: '4',
    brand: 'DR',
    model: 'Rear Tine Rototiller',
    category: 'Walk Behind Rototillers',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/DR%20Rototiller%20no%20background.webp',
    description: 'Heavy-duty rototiller with powerful OHV engine and aggressive counter-rotating tines for sod-busting and soil preparation.'
  },
  {
    id: '5',
    brand: 'Generac',
    model: '10kVA Standby Generator',
    category: 'Standby Generators',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/GNC%20generator%20standby%20no%20background.webp',
    description: 'Essential backup power protection for your home. Most affordable automatic standby generator providing reliable power during outages.'
  },
  {
    id: '6',
    brand: 'Generac',
    model: 'GP6500 Portable Generator',
    category: 'Portable Generators',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/gp6500%20protable%20gen%20no%20background.webp',
    description: 'Portable generator with COsense® carbon monoxide protection. Advanced CO detection for safe operation anywhere.'
  },
  {
    id: '7',
    brand: 'ECHO',
    model: 'PB-9010T Professional Backpack Blower',
    category: 'Backpack Blowers',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/ECHO_Blowers_PB-9010T_StaticShot2_result_result.webp',
    description: 'High-performance backpack blower with tube-mounted throttle control and reliable 2-stroke engine power for heavy-duty cleanup.'
  },
  {
    id: '8',
    brand: 'HUSQVARNA',
    model: '590BTS Professional Backpack Blower',
    category: 'Backpack Blowers',
    price: 'Call for pricing',
    status: 'available',
    image: 'https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/Husqvarna%20590%20blower.webp',
    description: 'Maximum productivity backpack blower with 56N blowing force and 1,245 CFM air volume. Perfect for moving heavy debris and leaves.'
  }
];

interface InventoryPageProps {
  onBackToHome?: () => void;
}

const InventoryPage: React.FC<InventoryPageProps> = ({ onBackToHome }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidePoint, setHidePoint] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add scroll-to-hide navigation functionality
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
    
    // ALL NAVIGATION LINKS GO BACK TO HOME PAGE WITH PROPER SECTION SCROLLING
    if (onBackToHome) {
      onBackToHome();
      // Small delay to ensure page has switched before scrolling
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
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
        }
      }, 100);
    } else {
      // Fallback to direct navigation
      if (sectionId === 'home') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  const InventoryCard: React.FC<{ item: InventoryItem; isListView?: boolean }> = ({ item, isListView = false }) => {
    const statusColors = {
      available: 'bg-green-600',
      sold: 'bg-red-600',
      pending: 'bg-yellow-600'
    };

    if (isListView) {
      return (
        <div className="chrome-plate-service relative mb-6">
          {/* Corner Screws */}
          <div className="screw-top-left"></div>
          <div className="screw-top-right"></div>
          <div className="screw-bottom-left"></div>
          <div className="screw-bottom-right"></div>
          
          <div className="relative z-10 m-6 md:m-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-48 h-32 md:h-36 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={`${item.brand} ${item.model}`}
                  className="w-full h-full object-contain rounded"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="font-exo2 text-xl md:text-2xl lg:text-3xl font-bold mb-2">{item.brand}</h3>
                    <h4 className="font-exo2 text-lg md:text-xl lg:text-2xl mb-4">{item.model}</h4>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    {item.price && (
                      <span className="font-exo2 text-2xl md:text-3xl font-bold">{item.price}</span>
                    )}
                    <span className={`px-2 py-1 text-xs font-bold rounded ${statusColors[item.status]} text-white`}>
                      {item.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <p className="font-exo2 text-base md:text-lg lg:text-xl">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="chrome-plate-service relative">
        {/* Corner Screws */}
        <div className="screw-top-left"></div>
        <div className="screw-top-right"></div>
        <div className="screw-bottom-left"></div>
        <div className="screw-bottom-right"></div>
        
        <div className="relative z-10 m-6 md:m-8 p-2">
          <div className="relative mb-4">
            <img 
              src={item.image} 
              alt={`${item.brand} ${item.model}`}
              className="w-full h-36 md:h-44 object-contain rounded"
              loading="lazy"
            />
            <div className="absolute top-2 right-2">
              <span className={`px-2 py-1 text-xs font-bold rounded ${statusColors[item.status]} text-white`}>
                {item.status.toUpperCase()}
              </span>
            </div>
          </div>
          <h3 className="font-exo2 text-base md:text-lg lg:text-xl font-bold mb-2">{item.brand}</h3>
          <h4 className="font-exo2 text-sm md:text-base lg:text-lg mb-3">{item.model}</h4>
          <p className="font-exo2 text-xs md:text-sm lg:text-base mb-6 line-clamp-3">{item.description}</p>
          {item.price && (
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <span className="font-exo2 text-lg md:text-xl font-bold">{item.price}</span>
              <button className="steel-button font-exo2 font-bold px-3 py-2 text-xs md:text-sm text-red-600 self-start">
                INQUIRE
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation 
        isNavVisible={isNavVisible}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      {/* Header - Steel Plate */}
      <div className="pt-20 pb-8 md:pb-12 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {
                if (onBackToHome) {
                  onBackToHome();
                } else {
                  window.location.href = '/';
                }
              }}
              className="steel-button font-exo2 font-bold py-2 px-4 text-base text-red-600 flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-600 rounded overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
          
          <div className="chrome-plate-service relative">
            {/* Corner Screws */}
            <div className="screw-top-left"></div>
            <div className="screw-top-right"></div>
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            
            <div className="text-center py-6 md:py-10 px-8 md:px-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                INVENTORY
              </h3>
              <p className="font-exo2 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                Quality equipment from trusted brands. All machines serviced and ready to go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 md:px-6 py-4">
        <p className="font-exo2 text-gray-400 text-base md:text-lg">
          Showing {inventoryData.length} items
        </p>
      </div>

      {/* Inventory Grid/List */}
      <div className="container mx-auto px-4 md:px-6 pb-12">
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-6"
        }>
          {inventoryData.map(item => (
            <InventoryCard key={item.id} item={item} isListView={viewMode === 'list'} />
          ))}
        </div>
      </div>

      {/* Contact CTA - Steel Plate */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="chrome-plate-service relative">
            {/* Corner Screws */}
            <div className="screw-top-left"></div>
            <div className="screw-top-right"></div>
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            
            <div className="text-center py-6 md:py-10 px-8 md:px-12">
              <h3 className="font-exo2 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                INTERESTED IN PURCHASING?
              </h3>
              <p className="font-exo2 text-base md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
                Contact us for pricing and availability information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <p className="font-exo2 text-lg md:text-xl lg:text-2xl flex items-center justify-center space-x-2">
                  <Phone size={24} />
                  <span>(518) 893-0649</span>
                </p>
                <button
                  onClick={(e) => handleNavClick(e as any, 'contact')}
                  className="steel-button font-exo2 font-bold py-4 px-6 text-lg md:text-xl text-red-600 flex items-center justify-center space-x-2"
                >
                  <Mail size={24} />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer handleNavClick={handleNavClick} />
    </div>
  );
};

export default InventoryPage;