import React, { useState } from "react";
import "./App.css";

const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>readmore</button>{" "}
        </p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};
export default Tour;
