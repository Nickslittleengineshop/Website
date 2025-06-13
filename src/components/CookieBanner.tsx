import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, FileText } from 'lucide-react';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
  onCustomize: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline, onCustomize }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t-2 border-yellow-400 shadow-2xl">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Cookie Icon and Text */}
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="font-exo2 text-lg font-bold text-white mb-2">We Use Cookies</h3>
              <p className="font-exo2 text-sm text-gray-300 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or 
                learn more in our{' '}
                <a href="/privacy-policy" className="text-yellow-400 hover:text-yellow-300 underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/cookie-policy" className="text-yellow-400 hover:text-yellow-300 underline">
                  Cookie Policy
                </a>.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full md:w-auto">
            <button
              onClick={onCustomize}
              className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white font-exo2 font-semibold px-4 py-2 text-sm transition-all duration-300 border border-gray-600 hover:border-gray-500"
            >
              <Settings size={16} />
              <span>Customize</span>
            </button>
            <button
              onClick={onDecline}
              className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white font-exo2 font-semibold px-4 py-2 text-sm transition-all duration-300 border border-gray-500 hover:border-gray-400"
            >
              <X size={16} />
              <span>Decline</span>
            </button>
            <button
              onClick={onAccept}
              className="flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-black font-exo2 font-bold px-6 py-2 text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Shield size={16} />
              <span>Accept All</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ isOpen, onClose, onSave }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSave = () => {
    onSave(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    onSave(allAccepted);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 bg-gray-900 border-2 border-yellow-400 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-800 p-4 md:p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="font-exo2 text-xl md:text-2xl font-bold text-white">Cookie Preferences</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6">
          <p className="font-exo2 text-sm text-gray-300">
            Manage your cookie preferences below. You can enable or disable different types of cookies 
            and change your preferences at any time.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {/* Necessary Cookies */}
            <div className="bg-gray-800 p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-exo2 text-lg font-bold text-white">Necessary Cookies</h3>
                <div className="bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                  ALWAYS ON
                </div>
              </div>
              <p className="font-exo2 text-sm text-gray-300">
                These cookies are essential for the website to function properly. They enable basic 
                features like page navigation and access to secure areas.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-800 p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-exo2 text-lg font-bold text-white">Analytics Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                </label>
              </div>
              <p className="font-exo2 text-sm text-gray-300">
                Help us understand how visitors interact with our website by collecting and reporting 
                information anonymously.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gray-800 p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-exo2 text-lg font-bold text-white">Marketing Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                </label>
              </div>
              <p className="font-exo2 text-sm text-gray-300">
                Used to track visitors across websites to display relevant advertisements and measure 
                campaign effectiveness.
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="bg-gray-800 p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-exo2 text-lg font-bold text-white">Functional Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences(prev => ({ ...prev, functional: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                </label>
              </div>
              <p className="font-exo2 text-sm text-gray-300">
                Enable enhanced functionality and personalization, such as remembering your preferences 
                and settings.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 p-4 md:p-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleAcceptAll}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-exo2 font-bold px-6 py-2 transition-all duration-300 transform hover:scale-105"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="bg-gray-600 hover:bg-gray-500 text-white font-exo2 font-semibold px-6 py-2 transition-all duration-300"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CookieBanner, CookiePreferencesModal };
export type { CookiePreferences };