import React from 'react';
import { Home } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-800 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          
          {/* Left Content */}
          <div className="relative z-10 max-w-lg mb-12 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Properties</h2>
            <p className="text-slate-300 mb-8 font-light">
              Everything you need to know when you're looking
            </p>
            <button className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Get Started Now
            </button>
          </div>

          {/* Right Content: Phone Illustration */}
          <div className="relative z-10 mr-0 md:mr-12">
             <div className="bg-white p-4 rounded-[2rem] shadow-2xl w-64 border-[6px] border-white">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                    {/* Phone Screen Header */}
                    <div className="h-6 bg-gray-50 border-b border-gray-100 flex justify-center items-center space-x-1">
                        <div className="w-12 h-3 bg-gray-200 rounded-full"></div>
                    </div>
                    {/* Phone Screen Body */}
                    <div className="p-4 space-y-4">
                        <div className="flex items-center space-x-3">
                           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                               <Home className="w-5 h-5 text-blue-500" />
                           </div>
                           <div className="flex-1 space-y-2">
                               <div className="h-2 w-20 bg-gray-100 rounded"></div>
                               <div className="h-2 w-12 bg-gray-100 rounded"></div>
                           </div>
                        </div>

                        {/* Featured House Card on Phone */}
                        <div className="border border-gray-100 rounded-lg p-2 text-center">
                             <div className="bg-slate-800 h-16 rounded mb-2 flex items-center justify-center">
                                 <Home className="text-white w-6 h-6" />
                             </div>
                             <div className="h-2 w-16 bg-gray-100 rounded mx-auto mb-1"></div>
                        </div>

                        {/* List Items */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                                <div className="h-2 w-full bg-blue-100 rounded"></div>
                            </div>
                             <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                                <div className="h-2 w-3/4 bg-blue-50 rounded"></div>
                            </div>
                             <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                                <div className="h-2 w-full bg-blue-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        </div>
      </div>
    </div>
  );
};