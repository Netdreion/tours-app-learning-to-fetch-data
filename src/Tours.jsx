import { useState } from "react";
import "./App.css";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id, name, image, description } = tour;
          return (
            <ul key={id}>
              <li>{name}</li>
              <li>{image}</li>
              <li>{description}</li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
