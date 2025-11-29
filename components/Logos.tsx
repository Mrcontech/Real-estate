import React from 'react';

export const Logos: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white border-b border-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos using text/svg approximations */}
          
          {/* MeUndies */}
          <div className="flex items-center space-x-1">
            <span className="text-xl font-bold italic font-serif">MeUndies</span>
          </div>

          {/* Slack */}
          <div className="flex items-center space-x-2 font-bold text-xl">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M6 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm1 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                <path d="M2 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm15 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm1 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                <path d="M13 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                <path d="M11 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
             </svg>
             <span>slack</span>
          </div>

          {/* Amazon */}
          <div className="flex flex-col relative">
             <span className="text-2xl font-bold tracking-tight">amazon</span>
             <div className="absolute bottom-1 left-1 w-full h-2 border-b-2 border-orange-400 rounded-full transform -rotate-2"></div>
          </div>

          {/* WooCommerce */}
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold text-purple-800 uppercase tracking-tighter">WOO</span>
            <span className="text-lg font-bold text-gray-800 uppercase tracking-tighter">COMMERCE</span>
          </div>

          {/* Sitepoint */}
          <div className="flex items-center space-x-1">
            <span className="text-xl font-bold text-gray-600">&lt;sitepoint</span>
          </div>

        </div>
      </div>
    </div>
  );
};