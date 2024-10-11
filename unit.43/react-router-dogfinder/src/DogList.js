
import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Meet Our Dogs!</h1>
      <div>
        {dogs.map(dog => (
          <div key={dog.name}>
            <img src={dog.src} alt={dog.name} />
            <h2>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h2>
            <p>Age: {dog.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;

