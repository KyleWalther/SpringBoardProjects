import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlip(true); // using the custom hook
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
