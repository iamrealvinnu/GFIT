import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, ArrowRight, Play, Heart, BarChart3, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppPreviewModalRef {
  openModal: () => void;
}

const AppPreviewModal = forwardRef<AppPreviewModalRef>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const appScreens = [
    {
      id: 1,
      title: 'Dashboard Overview',
      description: 'Track your fitness journey with real-time analytics',
      features: ['Workout progress', 'Calories burned', 'Weekly goals'],
      color: 'from-blue-500 to-purple-600',
      icon: BarChart3
    },
    {
      id: 2,
      title: 'Workout Library',
      description: 'Access hundreds of guided workouts and exercises',
      features: ['Video tutorials', 'Difficulty levels', 'Equipment needed'],
      color: 'from-green-500 to-teal-600',
      icon: Play
    },
    {
      id: 3,
      title: 'Community & Challenges',
      description: 'Connect with fitness enthusiasts worldwide',
      features: ['Group challenges', 'Leaderboards', 'Social sharing'],
      color: 'from-orange-500 to-red-600',
      icon: Users
    },
    {
      id: 4,
      title: 'Personalized Plans',
      description: 'AI-powered recommendations based on your goals',
      features: ['Custom workouts', 'Nutrition plans', 'Progress tracking'],
      color: 'from-purple-500 to-pink-600',
      icon: Heart
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  // Expose the openModal function so it can be called from outside
  useImperativeHandle(ref, () => ({
    openModal
  }));

  const CurrentIcon = appScreens[currentSlide].icon;

  return (
    <>
      {/* App Preview Modal */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Experience GFIT App
                  </h2>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Get a sneak peek at the powerful features that await you in our mobile app
                  </p>
                </div>
                
                {/* Floating App Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Smartphone size={24} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 right-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Heart size={20} />
                </motion.div>
              </div>

              {/* App Screens Preview */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Side - App Screenshots */}
                  <div className="relative">
                    <div className="relative w-64 h-96 mx-auto">
                      {/* Phone Frame */}
                      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800">
                        {/* Screen Content */}
                        <div className="absolute inset-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2rem] overflow-hidden">
                          {/* Mock App Screen */}
                          <div className={`h-full bg-gradient-to-br ${appScreens[currentSlide].color} p-6 flex flex-col justify-between`}>
                            <div className="text-white text-center">
                              <CurrentIcon size={48} className="mx-auto mb-4" />
                              <h3 className="text-xl font-bold mb-2">{appScreens[currentSlide].title}</h3>
                              <p className="text-sm opacity-90">{appScreens[currentSlide].description}</p>
                            </div>
                            
                            {/* Mock UI Elements */}
                            <div className="space-y-3">
                              {appScreens[currentSlide].features.map((feature, index) => (
                                <div key={index} className="bg-white/20 rounded-lg p-3">
                                  <div className="h-2 bg-white/40 rounded w-3/4"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Dots */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {appScreens.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentSlide 
                                ? 'bg-blue-600 scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Feature Details */}
                  <div className="space-y-6">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${appScreens[currentSlide].color} text-white text-sm font-medium`}>
                        <CurrentIcon size={20} />
                        <span>Feature {currentSlide + 1} of {appScreens.length}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800">
                        {appScreens[currentSlide].title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {appScreens[currentSlide].description}
                      </p>
                      
                      <ul className="space-y-2">
                        {appScreens[currentSlide].features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4">
                      <button
                        onClick={prevSlide}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        <ArrowRight className="rotate-180" size={20} />
                        <span>Previous</span>
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        <span>Next</span>
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-8 text-center pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Ready to experience the full power of GFIT?
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => {
                        closeModal();
                        navigate('/signup');
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Continue to Sign Up
                    </button>
                    <button
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=com.gdinexus.gfit', '_blank')}
                      className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                      Download App
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

AppPreviewModal.displayName = 'AppPreviewModal';

export default AppPreviewModal;
