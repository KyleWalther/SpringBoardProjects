import React, { useState, useEffect } from "react";
import axios from "axios";
import CardDisplay from './CardDisplay';
import DrawButton from './DrawButton';
import ShuffleButton from './ShuffleButton';

const App = () => {
  const [deckId, setDeckId] = useState(null); // Store deck ID
  const [cards, setCards] = useState([]); // Store drawn cards
  const [remaining, setRemaining] = useState(52); // Track number of remaining cards
  const [isShuffling, setIsShuffling] = useState(false); // Track if shuffling is in progress

  // Get a new deck when the app first loads
  useEffect(() => {
    async function getDeck() {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
      setDeckId(res.data.deck_id);
      setRemaining(res.data.remaining);
    }
    getDeck();
  }, []);

  // Draw a card from the deck
  const drawCard = async () => {
    if (remaining === 0) {
      alert("Error: no cards remaining!");
      return;
    }

    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const card = res.data.cards[0];
    setCards(cards => [...cards, card]); // Add the drawn card to the list of cards
    setRemaining(res.data.remaining); // Update the remaining card count
  };

  // Shuffle the deck
  const shuffleDeck = async () => {
    setIsShuffling(true); // Disable the button while shuffling
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    setCards([]); // Clear the displayed cards
    setRemaining(52); // Reset the remaining count
    setIsShuffling(false); // Re-enable the button after shuffling
  };

  return (
    <div className="App">
      <h1>Deck of Cards</h1>
      <DrawButton drawCard={drawCard} remaining={remaining} />
      <ShuffleButton shuffleDeck={shuffleDeck} isShuffling={isShuffling} />
      <p>{remaining} cards remaining.</p>
      <div className="card-container">
        {cards.map((card, idx) => (
          <CardDisplay key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
