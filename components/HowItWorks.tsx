import React from 'react';
import { ShoppingCart, Home, DollarSign, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block w-8 h-1 bg-slate-800 mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How its works ?</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Everything you need to know when you're looking to buy, rent, or sell - all in one place.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Buyer */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
               <ShoppingCart className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Buyer Guides</h3>
            <a href="#" className="text-blue-500 text-sm font-semibold flex items-center hover:text-blue-600 transition-colors">
              How to buy <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Renter */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
               <Home className="w-10 h-10 text-yellow-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Renter Guides</h3>
            <a href="#" className="text-blue-500 text-sm font-semibold flex items-center hover:text-blue-600 transition-colors">
              How to rent <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Seller */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
               <div className="relative">
                 <Home className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
                 <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-0.5">
                   <DollarSign className="w-3 h-3 text-white" />
                 </div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Seller Guides</h3>
            <a href="#" className="text-blue-500 text-sm font-semibold flex items-center hover:text-blue-600 transition-colors">
              How to sell <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

        </div>

        {/* Button */}
        <div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md font-semibold text-sm transition-all shadow-lg hover:shadow-xl">
            Sell Full Guidelines
          </button>
        </div>

      </div>
    </div>
  );
};