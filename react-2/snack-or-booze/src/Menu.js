import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import "./Menu.css";

function Menu({ menuTitle, items, basePath }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menuTitle}
          </CardTitle>
          <CardText>Explore our {menuTitle.toLowerCase()} options.</CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`${basePath}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
