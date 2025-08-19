import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Apple, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img
                src="/Ben's Stamina Factory_Logo.png"
                alt="Ben's Stamina Factory Logo"
                className="w-20 h-20 object-contain"
              />
              <span className="text-xl sm:text-2xl lg:text-xl font-bold">BEN'S STAMINA FACTORY</span>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-xs sm:max-w-sm">
              Transform your fitness journey with personalized workouts, expert trainers, and a supportive community.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Fitness', href: '/fitness' },
                { name: 'Wellness', href: '/wellness' },
                { name: 'Store', href: '/store' },
                { name: 'About Us', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base lg:text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Personal Training',
                'Group Classes',
                'Nutrition Plans',
                'Wellness Coaching',
                'Fitness Assessment'
              ].map((service) => (
                <li key={service}>
                  <span className="text-neutral-300 text-sm sm:text-base lg:text-lg">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Business</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Franchise Opportunities',
                'Corporate Wellness',
                'Trainer Certification',
                'Partnerships',
                'Investor Relations'
              ].map((item) => (
                <li key={item}>
                  <span className="text-neutral-300 text-sm sm:text-base lg:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-neutral-800">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">Get the GFIT App</h3>
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Download our mobile app for personalized workouts, progress tracking, and exclusive content.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-neutral-800 transition-colors duration-200"
            >
              <Apple className="w-6 h-6 sm:w-7 sm:h-7" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-neutral-300">Download on the</div>
                <div className="text-sm sm:text-base font-semibold">App Store</div>
              </div>
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-neutral-800 transition-colors duration-200"
            >
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-neutral-300">Get it on</div>
                <div className="text-sm sm:text-base font-semibold">Google Play</div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-neutral-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">Stay Updated</h3>
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
              Subscribe to our newsletter for fitness tips, workout routines, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 sm:py-4 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                <span className="text-neutral-300 text-sm sm:text-base">hello@gfit.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                <span className="text-neutral-300 text-sm sm:text-base">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                <span className="text-neutral-300 text-sm sm:text-base">Mumbai, Maharashtra, India</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-neutral-400 text-sm sm:text-base">
                © {currentYear} GFIT. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
