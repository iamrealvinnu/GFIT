import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Fitness', href: '/fitness' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Store', href: '/store' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm border-b border-neutral-200' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/Ben's Stamina Factory_Logo.png"
              alt="Ben's Stamina Factory Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-40 xl:w-48 2xl:w-56 pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 xl:space-x-4">
              <Link to="/login">
                <button className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors duration-200 text-sm xl:text-base">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 xl:px-6 rounded-lg transition-colors duration-200 text-sm xl:text-base">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-neutral-200"
            >
              <div className="py-3 sm:py-4 space-y-2 sm:space-y-3">
                {/* Mobile Search */}
                <div className="px-3 sm:px-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-3 sm:pt-4 border-t border-neutral-200 px-3 sm:px-4 space-y-2 sm:space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center py-2.5 sm:py-3 px-4 text-neutral-600 hover:text-neutral-900 font-medium transition-colors duration-200 text-base sm:text-lg"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center py-2.5 sm:py-3 px-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 text-base sm:text-lg"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
