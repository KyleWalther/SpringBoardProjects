import React from 'react';

const ShuffleButton = ({ shuffleDeck, isShuffling }) => {
  return (
    <button onClick={shuffleDeck} disabled={isShuffling}>
      {isShuffling ? "Shuffling..." : "Shuffle Deck"}
    </button>
  );
};

export default ShuffleButton;
