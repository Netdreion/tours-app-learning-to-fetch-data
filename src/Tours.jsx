import { useState } from "react";
import "./App.css";
import Tour from "./Tour";

const Tours = ({ tours, deleteTours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTours={deleteTours} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
