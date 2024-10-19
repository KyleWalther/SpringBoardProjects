import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu"; // Generic component for menus
import ItemDetail from "./FoodItem"; // Generic component for item details
import AddItemForm from "./AddItemForm";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]); // Add state for drinks

  useEffect(() => {
    async function getData() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks(); // Fetch drinks
      setSnacks(snacks);
      setDrinks(drinks); // Set the fetched drinks
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>

          <Route exact path="/add-item">
              <AddItemForm />
          </Route>

            {/* Home route */}
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            {/* Snacks menu route */}
            <Route exact path="/snacks">
              <Menu items={snacks} menuTitle="Snacks" basePath="/snacks" />
            </Route>

            {/* Individual snack item route */}
            <Route path="/snacks/:id">
              <ItemDetail items={snacks} cantFind="/snacks" />
            </Route>

            {/* Drinks menu route */}
            <Route exact path="/drinks">
              <Menu items={drinks} menuTitle="Drinks" basePath="/drinks" />
            </Route>

            {/* Individual drink item route */}
            <Route path="/drinks/:id">
              <ItemDetail items={drinks} cantFind="/drinks" />
            </Route>

            {/* Default route */}
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
