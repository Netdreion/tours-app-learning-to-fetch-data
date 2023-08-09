import { useState } from "react";
import "./App.css";

const Tours = ({ tours }) => {
  return (
    <section>
      <h2>our tours </h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return (
            <ul key={tour.id}>
              <li>{tour.name}</li>
              <li>{tour.img}</li>
              <li>{tour.description}</li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
