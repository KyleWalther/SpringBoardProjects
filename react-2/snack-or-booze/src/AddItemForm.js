import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SnackOrBoozeApi from "./Api"; // Import your API utility
import "./AddItemForm.css"

function AddItemForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: "",
    type: "snack" // Default to snack, can be snack or drink
  });
  
  const history = useHistory();

  // Handle changes in the form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.type === "snack") {
      await SnackOrBoozeApi.addSnack(formData);
    } else {
      await SnackOrBoozeApi.addDrink(formData);
    }
    history.push("/");
  }

  return (
    <div className="AddItemForm">
      <h2>Add New Item</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input
            id="recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input
            id="serve"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input
            id="type"
            name="type"
            type="select"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default AddItemForm;
