import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Target, 
  TrendingUp, 
  Heart, 
  Flame, 
  Clock, 
  Award,
  Plus,
  MoreVertical
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const stats = [
    { icon: Activity, label: 'Today\'s Steps', value: '8,432', change: '+12%', color: 'text-primary-600' },
    { icon: Heart, label: 'Heart Rate', value: '72 BPM', change: 'Normal', color: 'text-success-600' },
    { icon: Flame, label: 'Calories Burned', value: '456', change: '+8%', color: 'text-warning-600' },
    { icon: Clock, label: 'Active Time', value: '2h 15m', change: '+5%', color: 'text-secondary-600' }
  ];

  const recentWorkouts = [
    { name: 'Morning Cardio', duration: '45 min', calories: '320', type: 'Cardio', time: '7:00 AM' },
    { name: 'Strength Training', duration: '60 min', calories: '450', type: 'Strength', time: '5:30 PM' },
    { name: 'Yoga Flow', duration: '30 min', calories: '180', type: 'Flexibility', time: '6:30 PM' }
  ];

  const upcomingClasses = [
    { name: 'HIIT Training', trainer: 'Sarah Johnson', time: '9:00 AM', participants: 12 },
    { name: 'Pilates', trainer: 'Mike Chen', time: '10:30 AM', participants: 8 },
    { name: 'Boxing', trainer: 'Alex Rodriguez', time: '6:00 PM', participants: 15 }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-neutral-600">
            Let's crush your fitness goals today
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-soft border border-neutral-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-neutral-500">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-neutral-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Workouts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Recent Workouts</h2>
                <button className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors duration-200">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentWorkouts.map((workout, index) => (
                  <motion.div
                    key={workout.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Activity className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{workout.name}</h3>
                        <p className="text-sm text-neutral-600">{workout.type} • {workout.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-neutral-900">{workout.calories} cal</div>
                      <div className="text-sm text-neutral-500">{workout.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Upcoming Classes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Upcoming Classes</h2>
                <button className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors duration-200">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <motion.div
                    key={classItem.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-neutral-50 rounded-xl"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-neutral-900">{classItem.name}</h3>
                      <span className="text-sm text-neutral-500">{classItem.time}</span>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">{classItem.trainer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">{classItem.participants} participants</span>
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        Join
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-neutral-900">Weekly Progress</h2>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                View Details
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">85%</div>
                <div className="text-sm text-neutral-600">Goal Completion</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-success-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">+12%</div>
                <div className="text-sm text-neutral-600">This Week</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-warning-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">7</div>
                <div className="text-sm text-neutral-600">Day Streak</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
