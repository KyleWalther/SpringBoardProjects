import React from 'react';

const DrawButton = ({ drawCard, remaining }) => {
  return (
    <button onClick={drawCard} disabled={remaining === 0}>
      Draw Card
    </button>
  );
};

export default DrawButton;
