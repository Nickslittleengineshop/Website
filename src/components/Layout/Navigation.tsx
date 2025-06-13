import React from 'react';
import { Menu } from 'lucide-react';

interface NavigationProps {
  isNavVisible: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isNavVisible,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleNavClick
}) => {
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      role="navigation"
      aria-label="Main navigation for Nick's Little Engine Shop serving Lake George, Glens Falls, Saratoga Springs, and Saratoga County"
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand with SEO-rich text */}
          <div className="metallic-text text-lg md:text-2xl">
            <h1 className="font-exo2 font-bold">
              NICK'S LITTLE ENGINE SHOP
            </h1>
            <span className="hidden sr-only">
              Small Engine Repair, Motorcycle Repair, ATV Service, Chainsaw Repair in Greenfield Center NY serving Saratoga County
            </span>
          </div>
          
          {/* Desktop Navigation with SEO-enhanced links */}
          <div className="hidden md:flex space-x-8 font-exo2 font-semibold">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')} 
              className="metallic-nav-link"
              title="Small Engine Repair, Motorcycle Repair, ATV Service, Chainsaw Repair serving Lake George, Glens Falls, Saratoga Springs"
              aria-label="View our repair services including motorcycle, ATV, dirt bike, and small engine repair"
            >
              SERVICES
            </a>
            <a 
              href="#inventory" 
              onClick={(e) => handleNavClick(e, 'inventory')} 
              className="metallic-nav-link"
              title="Lawn Mowers, Chainsaws, Generators, Outdoor Power Equipment for sale in Greenfield Center NY"
              aria-label="Browse our inventory of Toro, Husqvarna, Echo, and Simplicity equipment"
            >
              INVENTORY
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')} 
              className="metallic-nav-link"
              title="About Nick's Little Engine Shop - 10+ Years serving Saratoga County with expert small engine repair"
              aria-label="Learn about our experience and why customers choose us throughout Saratoga County"
            >
              ABOUT
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, 'reviews')} 
              className="metallic-nav-link"
              title="Customer Reviews from Lake George, Glens Falls, Saratoga Springs, and surrounding areas"
              aria-label="Read reviews from satisfied customers throughout our service area"
            >
              REVIEWS
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="metallic-nav-link"
              title="Contact Nick's Little Engine Shop in Greenfield Center NY - (518) 893-0649"
              aria-label="Contact us for motorcycle repair, small engine service, or equipment sales"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} className="text-white drop-shadow-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu with enhanced SEO */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-[52px] md:top-[60px] bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-700 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4 font-exo2 font-semibold">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="metallic-nav-link py-2 border-b border-gray-800"
              title="Motorcycle Repair, ATV Service, Dirt Bike Repair, Small Engine Repair, Chainsaw Service"
              role="menuitem"
            >
              REPAIR SERVICES
            </a>
            <a 
              href="#inventory" 
              onClick={(e) => handleNavClick(e, 'inventory')}
              className="metallic-nav-link py-2 border-b border-gray-800"
              title="Toro, Husqvarna, Echo, Simplicity Equipment for Sale in Saratoga County"
              role="menuitem"
            >
              EQUIPMENT INVENTORY
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="metallic-nav-link py-2 border-b border-gray-800"
              title="Local Small Engine Shop serving Lake George, Glens Falls, Saratoga Springs"
              role="menuitem"
            >
              WHY CHOOSE US
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, 'reviews')}
              className="metallic-nav-link py-2 border-b border-gray-800"
              title="Customer Reviews from Greenfield Center, Hudson Falls, Fort Edward, Schuylerville"
              role="menuitem"
            >
              CUSTOMER REVIEWS
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="metallic-nav-link py-2"
              title="Contact Nick's Little Engine Shop - 504 Sandhill Road, Greenfield Center NY 12833"
              role="menuitem"
            >
              CONTACT & LOCATION
            </a>
          </div>
          
          {/* Mobile-only service area info */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <p className="font-exo2 text-sm text-gray-300 text-center">
              Serving Lake George • Glens Falls • Saratoga Springs
            </p>
            <p className="font-exo2 text-xs text-gray-400 text-center mt-1">
              Motorcycle • ATV • Small Engine Repair
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;