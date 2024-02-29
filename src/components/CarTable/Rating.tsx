import React, { useState } from "react";

interface RatingProps {
  rating: number;
  onClick: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({ rating, onClick }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    onClick(value);
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`focus:outline-none ${
            star <= (hoverRating || rating)
              ? "text-yellow-500"
              : "text-gray-900"
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default Rating;
