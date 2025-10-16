import React from 'react';

interface InventoryItemProps {
  brand: string;
  model: string;
  price?: string;
  image: string;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
  brand,
  model,
  price,
  image,
}) => {
  return (
    <div className="chrome-plate-service relative">
      {/* Corner Screws */}
      <div className="screw-top-left"></div>
      <div className="screw-top-right"></div>
      <div className="screw-bottom-left"></div>
      <div className="screw-bottom-right"></div>
      
      <div className="relative z-10 m-4">
        <img 
          src={image} 
          alt={`${brand} ${model}`} 
          className="w-full h-28 md:h-36 object-contain"
          loading="lazy"
        />
        <div className="p-4 md:p-5">
          <h4 className="font-exo2 text-sm md:text-base lg:text-lg font-bold mb-1">{brand}</h4>
          <p className="font-exo2 text-xs md:text-sm lg:text-base mb-2">{model}</p>
          {price && <p className="font-exo2 text-base md:text-lg lg:text-xl font-bold">{price}</p>}
        </div>
      </div>
    </div>
  );
};

interface InventoryProps {
  onViewAllInventory?: () => void;
}

const Inventory: React.FC<InventoryProps> = ({ onViewAllInventory }) => {
  const handleViewAllInventory = () => {
    if (onViewAllInventory) {
      onViewAllInventory();
    }
  };

  return (
<section id="inventory" className="py-12 md:py-20 bg-black relative">
  <div className="absolute inset-0 opacity-5">
    <div
      className="w-full h-full bg-repeat"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect x='6' y='6' width='20' height='20' rx='4' ry='4' fill='rgba(255,255,255,0.02)'/%3E%3Crect x='6' y='6' width='20' height='20' rx='4' ry='4' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '32px 32px',
      }}
    />
  </div>
  <div className="container mx-auto px-4 md:px-6 relative z-10">

        
        {/* STEEL PLATE HEADER */}
        <div className="relative mb-10 md:mb-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="chrome-plate-service relative">
              {/* Corner Screws */}
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              {/* Content with embossed text effect */}
              <div className="text-center py-6 md:py-10 px-10 md:px-16">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-5">
                  LOCAL DEALER FOR THESE MANUFACTURERS
                </h3>
                <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                  Quality lawn equipment from trusted brands. All machines serviced and ready to go.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos with Chrome Plate Effect */}
        <div className="flex flex-wrap justify-center items-center mb-8 md:mb-12 gap-4 md:gap-6">
          <a 
            href="https://dealers.echo-usa.com/ny/greenfield-center/14390/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chrome-plate-logo"
          >
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            <div className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center m-2">
              <img 
                src="https://www.macallisteroutdoors.com/files/echo-logo-384x77.png" 
                alt="Echo" 
                className="max-w-full max-h-full object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
              />
            </div>
          </a>
          <a 
            href="https://www.husqvarna.com/us/locations/nicks-little-engine-shop/?id=USF60465-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chrome-plate-logo"
          >
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            <div className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center m-2">
              <img 
                src="https://logodownload.org/wp-content/uploads/2019/09/husqvarna-logo-0.png" 
                alt="Husqvarna" 
                className="max-w-full max-h-full object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
              />
            </div>
          </a>
          <a 
            href="https://www.simplicitymfg.com/na/en_us/support/dealer-locator/dealers.123727.html/12833/NY/GREENFIELD-CENTER/NICK%27S-LITTLE-ENGINE-SHOP.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chrome-plate-logo"
          >
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            <div className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center m-2">
              <img 
                src="https://www.simplicitymfg.com/content/dam/Common/Logos/Simplicity/SimplicityRebrand_Logo.png" 
                alt="Simplicity" 
                className="max-w-full max-h-full object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
              />
            </div>
          </a>
          <a 
            href="https://408438.go.toro.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chrome-plate-logo"
          >
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            <div className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center m-2">
              <img 
                src="https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/toro-logo-with-small-tagline-RGB-for-digital-black-text_result.webp" 
                alt="Toro" 
                className="max-w-full max-h-full object-contain toro-logo transition-all duration-300"
              />
            </div>
          </a>
        </div>

        {/* Inventory Grid - Steel Plate Items */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          <InventoryItem
            brand="Toro"
            model="Power MAX 26 inch Snowblower"
            image="https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/snowblower%20no%20background.webp"
          />
          <InventoryItem
            brand="HUSQVARNA"
            model="Z254FX Zero Turn Mower"
            image="https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/zeroturn%20no%20background.webp"
          />
          <InventoryItem
            brand="SIMPLICITY"
            model="Regent Lawn Tractor"
            image="https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/regent-lawn-tractor-riding-mower%20no%20background.webp"
          />
          <InventoryItem
            brand="ECHO"
            model="CS-620P Professional Chainsaw"
            image="https://raw.githubusercontent.com/Nickslittleengineshop/website-images/refs/heads/main/ECHO_Chainsaws_CS-620P_StaticShot2%20no%20background.webp"
          />
        </div>

        {/* Button */}
        <div className="text-center mt-8 md:mt-12">
          <button 
            onClick={handleViewAllInventory}
            className="steel-button font-exo2 font-bold py-4 px-8 md:py-5 md:px-10 text-xl md:text-2xl text-red-600"
          >
            VIEW COMPLETE INVENTORY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inventory;