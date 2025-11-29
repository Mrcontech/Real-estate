import React from 'react';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedListings } from './components/FeaturedListings';
import { Neighborhood } from './components/Neighborhood';
import { Stats } from './components/Stats';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
      <Hero />
      <Logos />
      <HowItWorks />
      <FeaturedListings />
      <Neighborhood />
      <Stats />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;