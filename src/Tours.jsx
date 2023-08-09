import React, { useState } from "react";
import "./App.css";

const Tours = ({tours}) => {
  return (
   <section>
    <h2>our Tours</h2>
    <div className="underline">
    </div>
    <div>
    {tours.map((tour) => (
        <ul key={tour.id}>
          <li>{tour.name}</li>
          <li>{tour.img}</li>
          <li>{tour.description}</li>
        </ul>
      ))}
    </div>
   </section>
};