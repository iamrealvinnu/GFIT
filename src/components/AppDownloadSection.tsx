import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Smartphone, 
  QrCode, 
  ExternalLink,
  CheckCircle,
  Star,
  Users,
  Zap
} from 'lucide-react';

const AppDownloadSection: React.FC = () => {
  const appFeatures = [
    'Full gym management system',
    'Real-time workout tracking',
    'Personalized fitness plans',
    'Community challenges',
    'Progress analytics',
    'Nutrition tracking',
    'Offline workout access',
    'Push notifications'
  ];

  const downloadLinks = {
    android: {
      store: 'https://play.google.com/store/apps/details?id=com.gdinexus.gfit',
      qrCode: '/qr-android.png', // You'll need to add actual QR code images
      text: 'Get it on Google Play'
    },
    ios: {
      store: 'https://apps.apple.com/app/gfit/id123456789',
      qrCode: '/qr-ios.png', // You'll need to add actual QR code images
      text: 'Download on the App Store'
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Download GFIT Mobile App
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get the full GFIT experience on your mobile device. Track workouts, manage your fitness journey, 
            and stay connected with your fitness community anywhere, anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - App Features & Download */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Zap className="text-yellow-400" size={28} />
                App Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle className="text-green-400" size={20} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Download className="text-blue-400" size={28} />
                Download Now
              </h3>
              
              {/* Android Download */}
              <motion.a
                href={downloadLinks.android.store}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-xl shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="text-white" size={24} />
                  <div>
                    <p className="font-semibold">Android App</p>
                    <p className="text-sm text-green-100">{downloadLinks.android.text}</p>
                  </div>
                </div>
                <ExternalLink size={20} />
              </motion.a>

              {/* iOS Download */}
              <motion.a
                href={downloadLinks.ios.store}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 rounded-xl shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="text-white" size={24} />
                  <div>
                    <p className="font-semibold">iOS App</p>
                    <p className="text-sm text-blue-100">{downloadLinks.ios.text}</p>
                  </div>
                </div>
                <ExternalLink size={20} />
              </motion.a>
            </div>

            {/* App Store Ratings */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">App Store Ratings</h4>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-gray-300">Google Play</p>
                  <p className="text-2xl font-bold text-green-400">4.8</p>
                  <p className="text-gray-400">10K+ downloads</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-300">App Store</p>
                  <p className="text-2xl font-bold text-blue-400">4.9</p>
                  <p className="text-gray-400">5K+ downloads</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - QR Codes */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 justify-center lg:justify-start">
              <QrCode className="text-purple-400" size={28} />
              Scan to Download
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Android QR Code */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl mb-4">
                  <div className="w-48 h-48 mx-auto bg-gray-100 rounded-xl flex items-center justify-center">
                    <QrCode size={120} className="text-gray-400" />
                    {/* Replace with actual QR code image */}
                    {/* <img src={downloadLinks.android.qrCode} alt="Android QR Code" className="w-full h-full object-cover rounded-xl" /> */}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Android</h4>
                <p className="text-gray-300 text-sm">Scan with any QR code scanner</p>
              </motion.div>

              {/* iOS QR Code */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl mb-4">
                  <div className="w-48 h-48 mx-auto bg-gray-100 rounded-xl flex items-center justify-center">
                    <QrCode size={120} className="text-gray-400" />
                    {/* Replace with actual QR code image */}
                    {/* <img src={downloadLinks.ios.qrCode} alt="iOS QR Code" className="w-full h-full object-cover rounded-xl" /> */}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">iOS</h4>
                <p className="text-gray-300 text-sm">Scan with Camera app</p>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <Users className="text-purple-400 mx-auto mb-3" size={32} />
              <h4 className="text-lg font-semibold mb-2">Join 50,000+ Active Users</h4>
              <p className="text-gray-300 text-sm">
                Be part of the fastest-growing fitness community. Download now and start your fitness journey!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
