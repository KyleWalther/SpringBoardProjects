import React from 'react';

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  const handleRemove = () => removeBox(id);

  return (
    <div>
      <div 
        style={{ 
          width: `${width}px`, 
          height: `${height}px`, 
          backgroundColor: backgroundColor 
        }} 
      />
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;
