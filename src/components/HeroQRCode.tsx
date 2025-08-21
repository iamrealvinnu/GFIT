import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Smartphone, Download, X } from 'lucide-react';

const HeroQRCode: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios' | null>(null);

  const qrCodes = {
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.gdinexus.gfit',
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://play.google.com/store/apps/details?id=com.gdinexus.gfit')}`,
      color: 'from-green-500 to-green-600',
      text: 'Android App'
    },
    ios: {
      url: 'https://apps.apple.com/app/gfit/id123456789',
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://apps.apple.com/app/gfit/id123456789')}`,
      color: 'from-blue-500 to-blue-600',
      text: 'iOS App'
    }
  };

  const handleDownload = (platform: 'android' | 'ios') => {
    window.open(qrCodes[platform].url, '_blank');
  };

  return (
    <>
      {/* Floating QR Code Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute top-8 right-8 z-20"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(true)}
          className="group relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          
          {/* Main Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 backdrop-blur-sm">
            <QrCode className="text-white" size={28} />
          </div>
          
          {/* Hover Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute top-full mt-2 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Download App
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Expanded QR Code Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Download GFIT App
                </h3>
                <p className="text-gray-600">
                  Scan QR code or click to download
                </p>
              </div>

              {/* Platform Selection */}
              <div className="flex space-x-4 mb-6">
                {(['android', 'ios'] as const).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                      selectedPlatform === platform
                        ? `bg-gradient-to-r ${qrCodes[platform].color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Smartphone size={20} />
                      <span>{platform === 'android' ? 'Android' : 'iOS'}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* QR Code Display */}
              {selectedPlatform && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center space-y-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <img
                      src={qrCodes[selectedPlatform].qrCode}
                      alt={`${selectedPlatform} QR Code`}
                      className="w-48 h-48 mx-auto rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {qrCodes[selectedPlatform].text}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Scan with your phone camera or QR scanner
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(selectedPlatform)}
                      className={`bg-gradient-to-r ${qrCodes[selectedPlatform].color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 mx-auto`}
                    >
                      <Download size={20} />
                      <span>Download Now</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Instructions */}
              {!selectedPlatform && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-500 text-sm"
                >
                  Select a platform to see the QR code
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroQRCode;
