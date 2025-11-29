import React from 'react';
import { Bed, Bath, Expand, ArrowRight } from 'lucide-react';

const listings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
    price: '$35000',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    beds: 5,
    baths: 2,
    sqft: 2000
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
    price: '$35000',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    beds: 5,
    baths: 2,
    sqft: 2000
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=600',
    price: '$35000',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    beds: 5,
    baths: 2,
    sqft: 2000
  }
];

export const FeaturedListings: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
            <p className="text-gray-500 text-sm">Everything you need to know when you're looking</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-500 font-semibold text-sm hover:underline mt-4 md:mt-0">
            View All Properties <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.address} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.price}</h3>
                <p className="text-gray-500 text-xs mb-4">{item.address}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-1.5 text-gray-600">
                    <Bed className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold">{item.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-gray-600">
                    <Bath className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold">{item.baths} bath</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-gray-600">
                    <Expand className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold">{item.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
           <a href="#" className="inline-flex items-center text-blue-500 font-semibold text-sm">
            View All Properties <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

      </div>
    </div>
  );
};