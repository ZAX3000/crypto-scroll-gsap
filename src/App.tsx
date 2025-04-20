import React from 'react';
import './App.css';
import useScrollAnimations from './hooks/useScrollAnimations';
import { HeroSection, Navbar, WhoWeAre } from './components/Homepage';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  useScrollAnimations();

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <div className="px-6 md:px-24 lg:px-36">
          <Navbar />
          <HeroSection />
          <WhoWeAre />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;