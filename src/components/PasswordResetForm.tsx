import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

const PasswordResetForm: React.FC = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return 'none';
    if (password.length < 8) return 'weak';
    
    let score = 0;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) return 'weak';
    if (score <= 3) return 'medium';
    return 'strong';
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center p-6 sm:p-8"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2 sm:mb-4">
          Password Reset Successful!
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8">
          Your password has been successfully reset. You can now log in with your new password.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/login'}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        >
          Continue to Login
        </motion.button>
      </motion.div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center p-6 sm:p-8"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2 sm:mb-4">
          Something Went Wrong
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8">
          We encountered an error while resetting your password. Please try again or contact support.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSubmitStatus('idle')}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        >
          Try Again
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto p-6 sm:p-8"
    >
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2 sm:mb-4">
          Reset Your Password
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-600">
          Enter your new password below. Make sure it's strong and secure.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* New Password Field */}
        <div>
          <label htmlFor="newPassword" className="block text-sm sm:text-base font-medium text-neutral-700 mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              id="newPassword"
              value={formData.newPassword}
              onChange={(e) => handleInputChange('newPassword', e.target.value)}
              className={`w-full px-4 py-3 sm:py-4 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                errors.newPassword 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : 'border-neutral-300 focus:border-primary-500'
              }`}
              placeholder="Enter your new password"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
            >
              {showNewPassword ? (
                <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
          {errors.newPassword && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.newPassword}
            </p>
          )}
        </div>

        {/* Password Strength Indicator */}
        {formData.newPassword && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <PasswordStrengthIndicator password={formData.newPassword} />
          </motion.div>
        )}

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm sm:text-base font-medium text-neutral-700 mb-2">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className={`w-full px-4 py-3 sm:py-4 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                errors.confirmPassword 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : 'border-neutral-300 focus:border-primary-500'
              }`}
              placeholder="Confirm your new password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 sm:py-4 px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
            isSubmitting
              ? 'bg-neutral-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Resetting Password...</span>
            </div>
          ) : (
            'Reset Password'
          )}
        </motion.button>
      </form>

      {/* Security Tips */}
      <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg">
        <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2 sm:mb-3">
          💡 Security Tips
        </h3>
        <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
          <li>• Use a mix of uppercase and lowercase letters</li>
          <li>• Include numbers and special characters</li>
          <li>• Avoid common words or personal information</li>
          <li>• Make it at least 8 characters long</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default PasswordResetForm;
