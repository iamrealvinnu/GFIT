import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const criteria = [
    {
      label: 'At least 8 characters',
      test: (pwd: string) => pwd.length >= 8,
      key: 'length'
    },
    {
      label: 'Uppercase letter',
      test: (pwd: string) => /[A-Z]/.test(pwd),
      key: 'uppercase'
    },
    {
      label: 'Lowercase letter',
      test: (pwd: string) => /[a-z]/.test(pwd),
      key: 'lowercase'
    },
    {
      label: 'Number',
      test: (pwd: string) => /\d/.test(pwd),
      key: 'number'
    },
    {
      label: 'Special character',
      test: (pwd: string) => /[^A-Za-z0-9]/.test(pwd),
      key: 'special'
    }
  ];

  const getStrength = (password: string) => {
    if (password.length === 0) return 'none';
    
    const passedCriteria = criteria.filter(c => c.test(password));
    const score = passedCriteria.length;
    
    if (score <= 2) return 'weak';
    if (score <= 3) return 'medium';
    return 'strong';
  };

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'weak': return 'from-red-500 to-red-600';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      case 'strong': return 'from-green-500 to-green-600';
      default: return 'from-neutral-300 to-neutral-400';
    }
  };

  const getStrengthText = (strength: string) => {
    switch (strength) {
      case 'weak': return 'Weak';
      case 'medium': return 'Medium';
      case 'strong': return 'Strong';
      default: return '';
    }
  };

  const strength = getStrength(password);

  if (password.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 sm:p-6 bg-neutral-50 rounded-lg border border-neutral-200"
    >
      {/* Strength Bar */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-sm sm:text-base font-medium text-neutral-700">
            Password Strength
          </span>
          {strength !== 'none' && (
            <span className={`text-sm sm:text-base font-semibold px-2 py-1 rounded-full text-white bg-gradient-to-r ${getStrengthColor(strength)}`}>
              {getStrengthText(strength)}
            </span>
          )}
        </div>
        
        <div className="w-full bg-neutral-200 rounded-full h-2 sm:h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: strength === 'weak' ? '33%' : strength === 'medium' ? '66%' : strength === 'strong' ? '100%' : '0%'
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${getStrengthColor(strength)} transition-all duration-300`}
          />
        </div>
      </div>

      {/* Criteria List */}
      <div className="space-y-2 sm:space-y-3">
        <h4 className="text-sm sm:text-base font-medium text-neutral-700 mb-2 sm:mb-3">
          Password Requirements:
        </h4>
        
        {criteria.map((criterion, index) => {
          const isPassed = criterion.test(password);
          
          return (
            <motion.div
              key={criterion.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg transition-all duration-200 ${
                isPassed 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-neutral-100 border border-neutral-200'
              }`}
            >
              <div className="flex-shrink-0">
                {isPassed ? (
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
                )}
              </div>
              
              <span className={`text-xs sm:text-sm font-medium ${
                isPassed ? 'text-green-700' : 'text-neutral-600'
              }`}>
                {criterion.label}
              </span>
              
              {isPassed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.1 }}
                  className="ml-auto"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Strength Tips */}
      {strength === 'weak' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
        >
          <p className="text-xs sm:text-sm text-yellow-800 font-medium">
            💡 Tip: Try adding uppercase letters, numbers, and special characters to make your password stronger.
          </p>
        </motion.div>
      )}

      {strength === 'medium' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <p className="text-xs sm:text-sm text-blue-800 font-medium">
            💡 Tip: You're almost there! Add a few more special characters or numbers to reach strong password status.
          </p>
        </motion.div>
      )}

      {strength === 'strong' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <p className="text-xs sm:text-sm text-green-800 font-medium">
            🎉 Excellent! Your password meets all security requirements and is considered strong.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PasswordStrengthIndicator;
