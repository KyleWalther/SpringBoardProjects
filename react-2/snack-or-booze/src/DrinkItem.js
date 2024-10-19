import React from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function DrinkItem({ drinks, cantFind }) {
  const { id } = useParams();
  const history = useHistory();

  let drink = drinks.find(drink => drink.id === id);
  if (!drink) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
          <button onClick={() => history.goBack()}>Go Back</button>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkItem;
