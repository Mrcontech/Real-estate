import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Neighborhood: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image & Stats */}
          <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-12 mt-12 lg:mt-0 order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative rounded-t-full rounded-b-3xl overflow-hidden w-72 md:w-80 h-[480px] bg-gray-100 shadow-2xl z-10">
               <img 
                 src="https://images.unsplash.com/photo-1541123437860-d9ecd8391582?auto=format&fit=crop&q=80&w=800" 
                 alt="Building" 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Floating Card */}
            <div className="absolute top-8 left-1/2 lg:-left-6 transform -translate-x-1/2 lg:translate-x-0 bg-white p-6 rounded-3xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.12)] w-64 md:w-72 z-20 border border-gray-50/50">
               <div className="flex justify-between items-start mb-1">
                 <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight">40,000+</h4>
                 <TrendingUp className="w-6 h-6 text-green-500 mt-1" strokeWidth={2.5} />
               </div>
               <p className="text-[11px] text-gray-400 font-medium leading-relaxed mb-5 max-w-[200px]">
                 By average for 2 bedroom apartments in San Francisco, CA
               </p>
               
               {/* Divider */}
               <div className="w-12 h-0.5 bg-gray-100 mb-5"></div>

               {/* Avatars Grid */}
               <div className="space-y-3">
                 {/* Row 1 */}
                 <div className="flex -space-x-3 overflow-hidden">
                   {[10, 11, 12, 13, 14].map((i) => (
                     <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-[3px] border-white object-cover"
                     />
                   ))}
                   <div className="w-8 h-8 rounded-full border-[3px] border-white bg-blue-50 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-blue-500">R</span>
                   </div>
                 </div>

                 {/* Row 2 */}
                 <div className="flex -space-x-3 overflow-hidden pl-2">
                   {[20, 21, 22, 23, 24].map((i) => (
                     <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-[3px] border-white object-cover"
                     />
                   ))}
                    <div className="w-8 h-8 rounded-full border-[3px] border-white bg-yellow-50 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-yellow-600">JS</span>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -z-10 bottom-[-40px] right-[-40px] w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          </div>

          {/* Right: Content */}
          <div className="max-w-md order-1 lg:order-2">
            <div className="w-10 h-1 bg-slate-800 mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              You’ve found a neighborhood you love.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 font-light">
              When you own a home, you’re committing to living in one location for a while. In a recent Trulia survey, we found that five out of six respondents said finding the right neighborhood.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};