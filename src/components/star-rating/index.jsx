import { useState } from 'react';
import { FaStar } from 'react-icons/fa'; 
import './style.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleOnMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {
        [...Array(noOfStars)].map((_, index) => {
          const starIndex = index + 1;

          return (
            <FaStar
              key={starIndex}
              className={starIndex <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleOnClick(starIndex)}
              onMouseMove={() => handleOnMouseMove(starIndex)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          );
        })
      }
    </div>
  );
}
