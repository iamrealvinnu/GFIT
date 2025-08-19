import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Smartphone } from 'lucide-react';
import PasswordResetForm from '../components/PasswordResetForm';

const PasswordResetPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const features = [
    {
      icon: Shield,
      title: 'Secure & Encrypted',
      description: 'Your password is encrypted using industry-standard security protocols'
    },
    {
      icon: Lock,
      title: 'Strong Validation',
      description: 'Real-time password strength checking with comprehensive criteria'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Seamless experience across all devices and screen sizes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.button
            onClick={handleBackToLogin}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Sign In</span>
          </motion.button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="max-w-md mx-auto lg:mx-0">
                <PasswordResetForm />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="max-w-lg mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  className="mb-8"
                >
                  <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                    Secure Your
                    <span className="text-gradient block">Fitness Journey</span>
                  </h1>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    Create a strong, secure password to protect your fitness data and personal information. 
                    Our advanced security ensures your account stays safe while you focus on achieving your goals.
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  className="space-y-6"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                  className="mt-8 pt-8 border-t border-neutral-200"
                >
                  <p className="text-sm text-neutral-500 mb-4">Trusted by fitness enthusiasts worldwide</p>
                  <div className="flex items-center justify-center lg:justify-start space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                      <span className="text-sm text-neutral-600">256-bit Encryption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                      <span className="text-sm text-neutral-600">GDPR Compliant</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;
