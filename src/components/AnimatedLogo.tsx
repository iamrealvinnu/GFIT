import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedLogoProps {
  onAnimationComplete: () => void;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ onAnimationComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Add a small delay for the exit animation to complete
      setTimeout(() => {
        onAnimationComplete();
      }, 1000); // Increased exit delay for smoother transition
    }, 7000); // Increased total animation duration to ensure full completion

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  useEffect(() => {
    const phaseTimer = setTimeout(() => {
      if (currentPhase < 4) { // Added one more phase
        setCurrentPhase(currentPhase + 1);
      }
    }, 1500); // Increased phase timing for better pacing

    return () => clearTimeout(phaseTimer);
  }, [currentPhase]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.05,
          y: -20,
          transition: { duration: 1.2, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
      >
        {/* Enhanced Background Effects */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl"
        />

        {/* Additional Background Fill Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, 90, 180, 270, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute top-1/3 right-1/6 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 blur-2xl rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.2, 0.08],
            rotate: [0, -90, -180, -270, 0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 4,
          }}
          className="absolute bottom-1/3 left-1/6 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-pink-400/15 to-purple-400/15 blur-2xl rounded-full"
        />

        {/* Subtle Grid Pattern */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(168,85,247,0.1)_1px,transparent_0)] bg-[length:40px_40px]"
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0, rotate: -180, y: 50 }}
            animate={{ 
              scale: 1, 
              rotate: 0, 
              y: 0,
              transition: { 
                duration: 1.5, 
                type: "spring",
                bounce: 0.4
              }
            }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            {/* BEN'S STAMINA FACTORY Logo */}
            <div className="inline-block relative">
              <motion.img
                src="/Ben's Stamina Factory_Logo.png"
                alt="Ben's Stamina Factory Logo"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 object-contain drop-shadow-2xl relative z-10"
                animate={{
                  scale: [1, 1.08, 0.96, 1.04, 1],
                  rotate: [0, 1, -0.5, 0.8, 0],
                  y: [0, -8, 0, -4, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              
              {/* Enhanced Gym-Themed Animated Elements Around Logo */}
              {/* Floating Fitness Icons */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-80"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.8, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
              
              {/* Morphing Fitness Shapes */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {/* Large Morphing Circle */}
                <motion.div
                  className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-68 xl:h-68 border-2 border-pink-500/60 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    borderRadius: ['50%', '30%', '70%', '40%', '60%', '50%'],
                    scale: [1, 1.15, 0.9, 1.1, 0.95, 1],
                    opacity: [0.4, 0.7, 0.3, 0.8, 0.5, 0.4],
                    borderColor: ['rgba(236, 72, 153, 0.4)', 'rgba(168, 85, 247, 0.6)', 'rgba(236, 72, 153, 0.4)'],
                  }}
                  transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                
                {/* Small Morphing Shapes */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 border border-pink-500/70 rounded-lg"
                    style={{
                      left: `${15 + (i * 70)}%`,
                      top: `${20 + (i * 35)}%`,
                    }}
                    animate={{
                      borderRadius: ['20%', '50%', '80%', '30%', '60%', '20%'],
                      rotate: [0, 180, 360, 90, 270, 0],
                      scale: [1, 1.3, 0.8, 1.2, 0.9, 1],
                      borderColor: ['rgba(236, 72, 153, 0.5)', 'rgba(168, 85, 247, 0.7)', 'rgba(236, 72, 153, 0.5)'],
                    }}
                    transition={{
                      duration: 8 + i,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Enhanced Corner Elements with Gym Theme */}
              <motion.div
                                 className="absolute -top-6 -left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-95 shadow-lg"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.9, 1, 0.9],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              
              <motion.div
                                 className="absolute -top-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-95 shadow-lg"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.9, 1, 0.9],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              
              <motion.div
                                 className="absolute -bottom-6 -left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-95 shadow-lg"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.9, 1, 0.9],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 2,
                }}
              />
              
              <motion.div
                                 className="absolute -bottom-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-95 shadow-lg"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.9, 1, 0.9],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 3,
                }}
              />
            </div>
          </motion.div>

          {/* Enhanced Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: currentPhase >= 1 ? 1 : 0, y: currentPhase >= 1 ? 0 : 50 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <motion.div
                               animate={{
                   textShadow: [
                     "0 0 20px rgba(168, 85, 247, 0.4)",
                     "0 0 40px rgba(168, 85, 247, 0.7)",
                     "0 0 60px rgba(236, 72, 153, 0.5)",
                     "0 0 40px rgba(168, 85, 247, 0.7)",
                     "0 0 20px rgba(168, 85, 247, 0.4)",
                   ],
                   scale: [1, 1.1, 0.98, 1.05, 1],
                 }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="text-center mb-4 sm:mb-6 md:mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-900 mb-3 sm:mb-4 drop-shadow-lg">
              
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-purple-700 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto font-medium drop-shadow-md">
                Transform Your Fitness Journey
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Progress Bar */}
          {currentPhase >= 2 && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 2.5, duration: 1.5 }}
                               className="w-56 sm:w-72 md:w-80 lg:w-96 h-2 sm:h-2.5 md:h-3 bg-purple-200/40 rounded-full mx-auto mb-6 sm:mb-8 md:mb-10 overflow-hidden shadow-inner"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 3.2, duration: 2.2 }}
                                 className="h-full bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 rounded-full shadow-lg"
              />
            </motion.div>
          )}

          {/* Enhanced Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: currentPhase >= 3 ? 1 : 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="flex justify-center space-x-3 sm:space-x-4 md:space-x-5"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 1, 0.5],
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  backgroundColor: ['#ec4899', '#a855f7', '#ec4899'],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                                 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg"
              />
            ))}
          </motion.div>

          {/* Completion Message */}
          {currentPhase >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 sm:mt-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-purple-800 font-medium">
                Ready to crush your goals! 💪
              </p>
            </motion.div>
          )}
        </div>


      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLogo;
