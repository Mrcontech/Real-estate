import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          <div className="px-8 py-4 flex flex-col items-center">
            <span className="text-4xl font-bold text-slate-900 mb-2">2,500</span>
            <span className="text-gray-500 text-sm font-medium">Homes For Sale</span>
          </div>

          <div className="px-8 py-4 flex flex-col items-center">
            <span className="text-4xl font-bold text-slate-900 mb-2">5,000+</span>
            <span className="text-gray-500 text-sm font-medium">Homes Recently Sold</span>
          </div>

          <div className="px-8 py-4 flex flex-col items-center">
            <span className="text-4xl font-bold text-slate-900 mb-2">170+</span>
            <span className="text-gray-500 text-sm font-medium">Price Reduced</span>
          </div>

        </div>
      </div>
    </div>
  );
};