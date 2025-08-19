import React from 'react';
import { motion } from 'framer-motion';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large Floating Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360, 0],
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl opacity-60"
        />
        
        <motion.div
          animate={{
            scale: [0.8, 1.3, 0.9, 0.8],
            rotate: [360, 180, 0, 360],
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 5,
          }}
          className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-secondary-200/30 to-primary-200/30 rounded-full blur-3xl opacity-60"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 0.7, 1.2, 1.1],
            rotate: [0, 270, 90, 0],
            x: [0, 30, -50, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 10,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl opacity-50"
        />
      </div>

      {/* Floating Fitness Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-16 left-8 sm:top-20 sm:left-12 md:top-24 md:left-16 lg:top-32 lg:left-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-300/40"
        >
          🏋️‍♂️
        </motion.div>

        {/* Top Right */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute top-20 right-8 sm:top-24 sm:right-12 md:top-28 md:right-16 lg:top-36 lg:right-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary-300/40"
        >
          🧘‍♀️
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 4,
          }}
          className="absolute bottom-20 left-8 sm:bottom-24 sm:left-12 md:bottom-28 md:left-16 lg:bottom-32 lg:left-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-300/40"
        >
          🏃‍♂️
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 15, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 9,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 6,
          }}
          className="absolute bottom-16 right-8 sm:bottom-20 sm:right-12 md:bottom-24 md:right-16 lg:bottom-28 lg:right-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-300/40"
        >
          🎯
        </motion.div>

        {/* Center Top */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-300/40"
        >
          💪
        </motion.div>

        {/* Center Bottom */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -5, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 7,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-300/40"
        >
          🔥
        </motion.div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20"></div>
    </div>
  );
};

export default BackgroundVideo;
