import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: '', height: '', backgroundColor: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuidv4() });
    setFormData(INITIAL_STATE); // Reset form data after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width: </label>
      <input
        id="width"
        type="text"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height: </label>
      <input
        id="height"
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color: </label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
