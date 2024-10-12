import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

const JokeList = ({ numJokesToGet = 5 }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch jokes when the component is mounted
  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = async () => {
    try {
      let jokes = [];
      let seenJokes = new Set();

      while (jokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokes.push({ ...joke, votes: 0 });
        } else {
          console.log("duplicate found!");
        }
      }

      setJokes(jokes);
      setIsLoading(false); // stop loading
    } catch (err) {
      console.error(err);
    }
  };

  // Vote on a joke
  const vote = (id, delta) => {
    setJokes((oldJokes) =>
      oldJokes.map((joke) =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
      )
    );
  };

  // Generate new jokes
  const generateNewJokes = () => {
    setIsLoading(true);
    getJokes();
  };

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map((j) => (
        <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />
      ))}
    </div>
  );
};

export default JokeList;

