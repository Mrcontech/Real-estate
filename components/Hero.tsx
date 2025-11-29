import React from 'react';
import { Navbar } from './Navbar';
import { PropertyCard } from './PropertyCard';
import { StarRating } from './StarRating';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[800px] overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/mansion/1920/1080" 
          alt="Luxury House" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay to match the dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
      </div>

      <Navbar />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Discover Your <br />
              <span className="text-blue-200 drop-shadow-[0_0_15px_rgba(191,219,254,0.5)]">Dream Home</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed font-light">
              Find exclusive properties and expert advice to guide your real estate journey.
            </p>

            <div className="pt-2">
              <button className="bg-blue-200 hover:bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(191,219,254,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5">
                More About Us
              </button>
            </div>

            {/* Bottom Info Area */}
            <div className="pt-12 md:pt-20 flex flex-col md:flex-row items-start md:items-end justify-between w-full max-w-2xl gap-8">
              
              {/* Ratings */}
              <div className="flex flex-col space-y-2">
                 <div className="flex items-center space-x-2">
                    <span className="font-bold text-xl text-white tracking-wide">WOO COMMERCE</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <StarRating rating={5} />
                 </div>
                 <p className="text-xs text-gray-400 font-medium">
                   5 Star Ratings (2k+ Review)
                 </p>
              </div>

              {/* Trust Text */}
              <div className="flex flex-col space-y-4 max-w-xs">
                 <p className="text-gray-400 text-xs leading-relaxed">
                   More than 45,000+ companies trust VisioCreate
                 </p>
                 <a href="#" className="flex items-center text-white text-sm font-semibold hover:text-blue-300 transition-colors group">
                   Read More 
                   <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>

            </div>
          </div>

          {/* Right Column: Floating Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
             <div className="relative">
                {/* Decorative background cards to create stack effect */}
                <div className="absolute top-[-20px] left-8 right-8 h-full bg-white/10 rounded-3xl transform -rotate-3 backdrop-blur-sm border border-white/5 z-0"></div>
                <div className="absolute top-[-10px] left-4 right-4 h-full bg-white/20 rounded-3xl transform -rotate-1 backdrop-blur-md border border-white/10 z-10"></div>
                
                {/* Main Card */}
                <div className="relative z-20">
                  <PropertyCard />
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};