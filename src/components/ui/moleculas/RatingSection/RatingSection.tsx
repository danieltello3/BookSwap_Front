// RatingsSection.tsx
import React from 'react';
import StarRating from '../../atomos/StarRating/StarRating';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface RatingsSectionProps {
  ratings: { starCount: number; percentage: number }[];
  totalRatings: number;
}

const RatingsSection: React.FC<RatingsSectionProps> = ({ ratings, totalRatings }) => {
  return (
    <div className='w-full mt-10'>
      <div className='flex items-center mb-2'>
        <FaStar className='w-4 h-4 text-yellow-300 me-1' />
        <FaStar className='w-4 h-4 text-yellow-300 me-1' />
        <FaStar className='w-4 h-4 text-yellow-300 me-1' />
        <FaStar className='w-4 h-4 text-yellow-300 me-1' />
        <FaRegStar className='w-4 h-4 text-gray-300 me-1 dark:text-gray-500' />
        <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>4.8 de 5 </p>
      </div>
      <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>{totalRatings} global ratings</p>
      {ratings.map((rating, index) => (
        <StarRating key={index} starCount={rating.starCount} percentage={rating.percentage} />
      ))}
    </div>
  );
};

export default RatingsSection;
