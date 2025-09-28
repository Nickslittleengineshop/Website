import React from 'react';
import { Facebook } from 'lucide-react';

interface FooterProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleNavClick }) => {
  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          
          {/* Logo - Left Side - Steel Plate Box */}
          <div className="flex justify-center lg:justify-start">
            <div className="chrome-plate-service relative">
              {/* Corner Screws */}
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <img 
                  src="https://raw.githubusercontent.com/Nickslittleengineshop/website-images/main/Nick's%20little%20engine%20shop%20logo.webp
" 
                  alt="Nick's Little Engine Shop Logo" 
                  className="h-20 md:h-28 w-auto transition-opacity duration-300 hover:opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Legal - Center - Steel Plate Box */}
          <div className="flex justify-center">
            <div className="chrome-plate-service relative">
              {/* Corner Screws */}
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col items-center space-y-4 md:space-y-5">
                  <h4 className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold">LEGAL</h4>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
                    <p className="font-exo2 text-sm md:text-base">
                      <a
                        href="/privacy-policy"
                        onClick={(e) => handleNavClick(e, 'privacy-policy')}
                        className="hover:opacity-80 transition-opacity duration-300"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <p className="font-exo2 text-sm md:text-base">
                      <a
                        href="/terms-of-service"
                        onClick={(e) => handleNavClick(e, 'terms-of-service')}
                        className="hover:opacity-80 transition-opacity duration-300"
                      >
                        Terms of Service
                      </a>
                    </p>
                    <p className="font-exo2 text-sm md:text-base">
                      <a
                        href="/cookie-policy"
                        onClick={(e) => handleNavClick(e, 'cookie-policy')}
                        className="hover:opacity-80 transition-opacity duration-300"
                      >
                        Cookie Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us - Right Side - Steel Plate Box */}
          <div className="flex justify-center lg:justify-end">
            <div className="chrome-plate-service relative">
              {/* Corner Screws */}
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col items-center space-y-4 md:space-y-5">
                  <h4 className="font-exo2 text-lg md:text-xl lg:text-2xl font-bold">FOLLOW US</h4>
                  <a
                    href="https://www.facebook.com/NicksLittleEngineShop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg group"
                  >
                    <Facebook className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Center Bottom - Steel Plate Box */}
        <div className="flex justify-center mt-6 md:mt-8">
          <div className="chrome-plate-service relative">
            {/* Corner Screws */}
            <div className="screw-top-left"></div>
            <div className="screw-top-right"></div>
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            
            <div className="relative z-10 p-5 md:p-6">
              <div className="text-center">
                <p className="font-exo2 text-sm md:text-base">
                  © 2025 Nick's Little Engine Shop. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;