import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* if the info is true display all the content but if it is false display less than or equal to  200 */}
          <button onClick={() => setReadMore(!readMore)}>
            {/* !readMore is use as the toggle function first time you click the true will be false and next time you click it will be true */}
            {readMore ? "Show Less" : "Read More"}
            {/* the name of the button is show less and read more */}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
