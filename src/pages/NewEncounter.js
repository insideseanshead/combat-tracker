import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../components/utils/API";

const NewEncounter = () => {
  return (
    <div className='NewEncounterPage'>
      <Row className="NewEncounterHead">
          <Col className="m-4">
              <Form>
                  <Form.Group>
                      <Form.Control
                        type='text'
                        name='encounterName'
                        placehoder='Encounter Name'
                      />
                  </Form.Group>
                  <Button>
                      Save Encounter
                  </Button>
              </Form>
          </Col>
      </Row>
      <Row className='EncounterCreator'>
          <Col className='EncounterMonsterList col-8'>
              
          </Col>
          <Col className='SelectedMonsters col-4'>
              
          </Col>
      </Row>
    </div>
  );
};

export default NewEncounter;
