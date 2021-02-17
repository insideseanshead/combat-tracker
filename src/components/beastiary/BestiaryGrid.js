import React from "react";
import {
  Card,
  Accordion
} from "react-bootstrap";

const BestiaryGrid = () => {
  return (
    <div className="p-3">
      <h3 className="text-muted ">BEASTIARY</h3>
      <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Goblin
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
    </div>
  );
};

export default BestiaryGrid;
