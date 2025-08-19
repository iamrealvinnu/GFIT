import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  Clock, 
  Star, 
  Heart, 
  Zap, 
  Target,
  Play,
  ArrowRight,
  MapPin
} from 'lucide-react';

const FitnessPage: React.FC = () => {
  const workoutCategories = [
    {
      name: 'Cardio',
      icon: Heart,
      description: 'High-energy workouts to boost your heart rate',
      classes: ['HIIT', 'Spinning', 'Running', 'Dance Cardio'],
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Strength',
      icon: Dumbbell,
      description: 'Build muscle and increase strength',
      classes: ['Weight Training', 'Bodyweight', 'Powerlifting', 'CrossFit'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Flexibility',
      icon: Target,
      description: 'Improve mobility and reduce injury risk',
      classes: ['Yoga', 'Pilates', 'Stretching', 'Mobility'],
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Mind-Body',
      icon: Zap,
      description: 'Connect mind and body through movement',
      classes: ['Tai Chi', 'Meditation', 'Breathwork', 'Flow'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const popularClasses = [
    {
      name: 'Power HIIT',
      trainer: 'Sarah Johnson',
      duration: '45 min',
      intensity: 'High',
      rating: 4.9,
      participants: 28,
      time: '7:00 AM',
      image: 'bg-gradient-to-br from-red-400 to-pink-500'
    },
    {
      name: 'Strength & Conditioning',
      trainer: 'Mike Chen',
      duration: '60 min',
      intensity: 'Medium',
      rating: 4.8,
      participants: 22,
      time: '6:30 PM',
      image: 'bg-gradient-to-br from-blue-400 to-indigo-500'
    },
    {
      name: 'Yoga Flow',
      trainer: 'Priya Sharma',
      duration: '75 min',
      intensity: 'Low',
      rating: 4.9,
      participants: 35,
      time: '6:00 AM',
      image: 'bg-gradient-to-br from-green-400 to-teal-500'
    },
    {
      name: 'Boxing Basics',
      trainer: 'Alex Rodriguez',
      duration: '50 min',
      intensity: 'High',
      rating: 4.7,
      participants: 18,
      time: '7:30 PM',
      image: 'bg-gradient-to-br from-orange-400 to-red-500'
    }
  ];

  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'HIIT & Cardio',
      experience: '8 years',
      rating: 4.9,
      students: 1200,
      image: 'bg-gradient-to-br from-red-400 to-pink-500',
      certifications: ['ACE', 'NASM', 'CrossFit L2']
    },
    {
      name: 'Mike Chen',
      specialty: 'Strength Training',
      experience: '12 years',
      rating: 4.8,
      students: 800,
      image: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      certifications: ['CSCS', 'NASM', 'Precision Nutrition']
    },
    {
      name: 'Priya Sharma',
      specialty: 'Yoga & Wellness',
      experience: '10 years',
      rating: 4.9,
      students: 1500,
      image: 'bg-gradient-to-br from-green-400 to-teal-500',
      certifications: ['RYT-500', 'Meditation Teacher', 'Ayurveda']
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fun, trainer led
              <span className="block text-yellow-300">group classes</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the energy of group workouts with expert trainers. 
              From high-intensity cardio to calming yoga, we have classes for every fitness level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book a Class</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <button className="border-2 border-white/30 text-white font-medium py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Workout Categories
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our wide range of workout categories designed to meet all your fitness goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workoutCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6 hover:shadow-medium transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.classes.map((classType, classIndex) => (
                    <li key={classIndex} className="text-sm text-neutral-600 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>{classType}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Classes */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Popular Classes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join our most loved classes with expert trainers and motivated community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularClasses.map((classItem, index) => (
              <motion.div
                key={classItem.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden hover:shadow-medium transition-shadow duration-300"
              >
                <div className={`h-32 ${classItem.image} flex items-center justify-center`}>
                  <Dumbbell className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-neutral-900">{classItem.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-neutral-700">{classItem.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-neutral-600 mb-3">{classItem.trainer}</p>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{classItem.participants}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-neutral-700">{classItem.time}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      classItem.intensity === 'High' ? 'bg-red-100 text-red-700' :
                      classItem.intensity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {classItem.intensity}
                    </span>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Trainers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Meet Our Expert Trainers
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Learn from certified professionals who are passionate about helping you achieve your fitness goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-32 h-32 ${trainer.image} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Users className="w-16 h-16 text-white/80" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{trainer.name}</h3>
                <p className="text-lg text-primary-600 mb-2">{trainer.specialty}</p>
                <p className="text-neutral-600 mb-4">{trainer.experience} experience</p>
                
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                  </div>
                  <div className="text-sm text-neutral-500">
                    {trainer.students}+ students
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {trainer.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="inline-block bg-neutral-100 text-neutral-700 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                      {cert}
                    </span>
                  ))}
                </div>

                <button className="btn-primary">
                  Book Session
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of fitness enthusiasts who have already transformed their lives with GFIT. 
              Book your first class today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Book Your First Class
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white font-medium py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-colors duration-200"
              >
                View All Classes
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FitnessPage;
