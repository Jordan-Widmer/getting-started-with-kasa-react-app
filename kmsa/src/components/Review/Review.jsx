import React from "react";
import Star from "../UI-Elements/Star";

function Review({ stars }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        if (index + 1 <= stars) {
          return <Star filled="#FF6060" key={index} />;
        } else {
          return <Star key={index} />;
        }
      })}
    </div>
  );
}

export default Review;
