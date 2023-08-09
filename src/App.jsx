import React, { useEffect, useState } from "react";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  const tourData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tourData();
  }, []);

  return (
    <div>
      {tours.map((tour) => (
        <ul key={tour.id}>
          <li>{tour.name}</li>
          <li>{tour.img}</li>
          <li>{tour.description}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
