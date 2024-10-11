import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";



const App = ({ dogs }) => {
  return (
    <div>
      {/* Render the Nav component with dog names passed as props */}
      <Nav dogs={dogs.map(dog => dog.name)} />

      {/* Route configurations */}
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        {/* Catch-all route redirects to the main dog list */}
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  );
};

// Default props for the dog data
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "https://images.all-free-download.com/images/graphiclarge/golden_retriever_dog_animal_221045.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "https://images.all-free-download.com/images/graphiclarge/golden_retriever_dog_animal_221045.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "https://images.all-free-download.com/images/graphiclarge/golden_retriever_dog_animal_221045.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://images.all-free-download.com/images/graphiclarge/golden_retriever_dog_animal_221045.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;
