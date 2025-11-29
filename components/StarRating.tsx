import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<({ rating: number })> = ({ rating }) => {
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
        />
      ))}
    </div>
  );
};