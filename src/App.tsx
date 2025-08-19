import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedLogo from './components/AnimatedLogo';
import BackgroundVideo from './components/BackgroundVideo';
import HomePage from './pages/HomePage';
import FitnessPage from './pages/FitnessPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PasswordResetPage from './pages/PasswordResetPage';

const App: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);

  const handleLogoComplete = () => {
    setShowLogo(false);
  };

  if (showLogo) {
    return <AnimatedLogo onAnimationComplete={handleLogoComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <BackgroundVideo />
        <Header />
        
        <main className="flex-1 pt-14 sm:pt-16 md:pt-18 lg:pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/fitness" element={<FitnessPage />} />
              <Route path="/wellness" element={<div>Wellness Page</div>} />
              <Route path="/store" element={<div>Store Page</div>} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/password-reset" element={<PasswordResetPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
