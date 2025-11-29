import React from 'react';

export const PropertyCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] max-w-sm w-full transition-all duration-500 hover:scale-105 cursor-pointer">
      <div className="flex items-center space-x-4">
        
        {/* Text Info */}
        <div className="flex-1 pl-2">
          <h3 className="text-slate-900 font-bold text-lg leading-tight">
            Diamond <br /> Residency
          </h3>
          <p className="text-slate-500 text-xs mt-2 font-medium">
            21502 Preston Rd. Inglewood
          </p>
          
          <div className="mt-4 flex items-center space-x-2">
             <div className="flex -space-x-2">
                <img className="w-6 h-6 rounded-full border-2 border-white" src="https://picsum.photos/seed/user1/50/50" alt="Avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white" src="https://picsum.photos/seed/user2/50/50" alt="Avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white" src="https://picsum.photos/seed/user3/50/50" alt="Avatar" />
             </div>
             <span className="text-xs text-slate-400 font-bold">+5</span>
          </div>
        </div>

        {/* Image Thumbnail */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/architecture/300/300" 
            alt="Property Thumbnail" 
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
             <span className="text-[10px] font-bold text-slate-900">$1.2m</span>
          </div>
        </div>
      </div>
    </div>
  );
};