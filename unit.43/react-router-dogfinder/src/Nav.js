import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ dogs }) => {
  return (
    <nav>
      <ul>
        {dogs.map(dog => (
          <li key={dog}>
            <Link to={`/dogs/${dog.toLowerCase()}`}>{dog}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
