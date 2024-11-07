// src/components/Home.js
import React from "react";
import "./Home.css";

const Home = ({ firstName }) => {
  return (
    <div className="Home">
      <div className="Home-content">
        <h1>Welcome {firstName}!</h1>
        <p>Your one-stop platform for job searching and career growth.</p>
      </div>
    </div>
  );
};

export default Home;

