import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  // Initial state: black background with default message
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  // Function to choose a random answer when clicked
  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMsg(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  // Styling for the ball
  const ballStyle = {
    backgroundColor: color,
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center',
    cursor: 'pointer'
  };

  return (
    <div style={ballStyle} onClick={handleClick}>
      <p>{msg}</p>
    </div>
  );
};

export default EightBall;

