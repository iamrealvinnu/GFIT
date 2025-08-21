import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Star } from 'lucide-react';

const MobileAppPrompt: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if user is on mobile
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      
      // Show prompt after 3 seconds on mobile, and only if not dismissed
      if (mobile && !hasDismissed) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 3000);
        
        return () => clearTimeout(timer);
      }
    };

    checkMobile();
    
    // Check on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [hasDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);
    // Store dismissal in localStorage
    localStorage.setItem('gfit-app-prompt-dismissed', 'true');
  };

  const handleDownload = (platform: 'android' | 'ios') => {
    const links = {
      android: 'https://play.google.com/store/apps/details?id=com.gdinexus.gfit',
      ios: 'https://apps.apple.com/app/gfit/id123456789'
    };
    
    window.open(links[platform], '_blank');
    setIsVisible(false);
  };

  // Don't show if dismissed or not mobile
  if (!isVisible || !isMobile || hasDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="text-white" size={24} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                Get the GFIT App
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Download our mobile app for the best experience
              </p>
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <span className="text-gray-500 text-xs">4.8/5</span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleDownload('android')}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                >
                  <Download size={16} />
                  <span>Android</span>
                </button>
                
                <button
                  onClick={() => handleDownload('ios')}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                >
                  <Download size={16} />
                  <span>iOS</span>
                </button>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 ml-2"
          >
            <X size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileAppPrompt;
