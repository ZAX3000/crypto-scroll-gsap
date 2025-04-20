import React from 'react';
import './App.css';
import useScrollAnimations from './hooks/useScrollAnimations';
import { HeroSection, Navbar, WhoWeAre, StatsSection } from './components/Homepage';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  useScrollAnimations();

  return (
    <ErrorBoundary>
      {/* 1) Hero */}
      <div className="min-h-screen">
        <div className="px-6 md:px-24 lg:px-36">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* 2) Who are we? overlapping */}
      <div className="bg-white">
        <div className="px-6 md:px-24 lg:px-36">
          <WhoWeAre />
        </div>
      </div>

      {/* 3) StatsSection overlapping */}
      <div className="bg-white">
        <div className="px-6 md:px-24 lg:px-36">
          <StatsSection />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;