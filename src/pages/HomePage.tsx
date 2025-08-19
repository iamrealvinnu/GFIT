import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  TrendingUp,
  Play,
  CheckCircle,
  Heart,
  Brain,
  Apple,
  Star,
  Sparkles,
  Target,
  Award
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const membershipTiers = [
    {
      name: 'BEN\'S STAMINA FACTORY Basic',
      price: '₹999',
      period: '/month',
      description: 'Perfect for fitness beginners',
      features: [
        'Access to home workouts',
        'Basic fitness tracking',
        'Community support',
        'Nutrition guidance'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
      icon: 'logo'
    },
    {
      name: 'BEN\'S STAMINA FACTORY Pro',
      price: '₹1,999',
      period: '/month',
      description: 'Most popular choice for fitness enthusiasts',
      features: [
        'All Basic features',
        'Unlimited gym access',
        'Personal trainer consultation',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600',
      icon: Award
    },
    {
      name: 'BEN\'S STAMINA FACTORY Elite',
      price: '₹2,999',
      period: '/month',
      description: 'Premium experience for serious athletes',
      features: [
        'All Pro features',
        'Exclusive classes',
        '1-on-1 coaching',
        'Custom meal plans',
        'Recovery sessions'
      ],
      popular: false,
      color: 'from-orange-500 to-orange-600',
      icon: Sparkles
    }
  ];

  const services = [
    {
      icon: 'logo',
      title: 'Fitness & Workouts',
      description: 'Group classes, personal training, and home workouts',
      color: 'bg-blue-100 text-blue-600',
      hoverColor: 'hover:bg-blue-200 hover:scale-105'
    },
    {
      icon: Heart,
      title: 'Wellness & Recovery',
      description: 'Yoga, meditation, and stress management',
      color: 'bg-green-100 text-green-600',
      hoverColor: 'hover:bg-green-200 hover:scale-105'
    },
    {
      icon: Apple,
      title: 'Nutrition & Diet',
      description: 'Personalized meal plans and nutrition coaching',
      color: 'bg-orange-100 text-orange-600',
      hoverColor: 'hover:bg-orange-200 hover:scale-105'
    },
    {
      icon: Brain,
      title: 'Mental Fitness',
      description: 'Mindfulness, stress relief, and mental wellness',
      color: 'bg-purple-100 text-purple-600',
      hoverColor: 'hover:bg-purple-200 hover:scale-105'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Members', icon: Users, color: 'text-blue-500' },
    { number: '500+', label: 'Expert Trainers', icon: 'logo', color: 'text-green-500' },
    { number: '100+', label: 'Locations', icon: Calendar, color: 'text-purple-500' },
    { number: '95%', label: 'Success Rate', icon: BarChart3, color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>#BeBetterEveryDay</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight"
              >
                A fitness movement{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  worth breaking a sweat for
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Join millions of people who have transformed their lives through fitness. 
                Get access to world-class trainers, personalized workouts, and a supportive community.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    TRY FOR FREE →
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 font-medium text-sm sm:text-base transition-colors duration-200"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 ml-1" />
                  </div>
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* Large Circle with Logo */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="w-80 h-80 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto relative"
              >
                <motion.img
                  src="/Ben's Stamina Factory_Logo.png"
                  alt="Ben's Stamina Factory Logo"
                  className="w-32 h-32 object-contain"
                  animate={{
                    scale: [1, 1.05, 0.98, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              
              {/* Small Circle with Chart */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 2,
                }}
                className="absolute top-20 right-20 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <TrendingUp className="w-12 h-12 text-blue-600" />
              </motion.div>
              
              {/* Floating Heart */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute bottom-20 left-20 w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {stat.icon === 'logo' ? (
                    <img
                      src="/Ben's Stamina Factory_Logo.png"
                      alt="Ben's Stamina Factory Logo"
                      className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain`}
                    />
                  ) : (
                    <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${stat.color}`} />
                  )}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Choose Your Plan
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Start your fitness journey with our flexible membership options designed for every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                                 <div className="text-center mb-6 sm:mb-8">
                   <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                     {tier.icon === 'logo' ? (
                       <img
                         src="/Ben's Stamina Factory_Logo.png"
                         alt="Ben's Stamina Factory Logo"
                         className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                       />
                     ) : (
                       <tier.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                     )}
                   </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
                      {tier.price}
                    </span>
                    <span className="text-base sm:text-lg text-neutral-600">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2">
                    {tier.description}
                  </p>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-neutral-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${tier.color} text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-200`}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Hub */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Wellness Hub
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive wellness services to support your mind, body, and soul
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 sm:p-8 rounded-2xl ${service.color} ${service.hoverColor} transition-all duration-300 cursor-pointer`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon === 'logo' ? (
                    <img
                      src="/Ben's Stamina Factory_Logo.png"
                      alt="Ben's Stamina Factory Logo"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  ) : (
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  )}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Join millions of people who have already started their fitness journey with BEN'S STAMINA FACTORY
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
              </Link>
              
              <Link to="/fitness">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
                >
                  Explore Classes
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
