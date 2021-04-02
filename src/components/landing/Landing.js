import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../utils/API";

const Landing = (props) => {
  return (
    <div className="login">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={props.formSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={props.inputChange}
                value={props.loginFormState.email}
                type="text"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                onChange={props.inputChange}
                value={props.loginFormState.password}
                type="password"
                name="password"
                placeholder="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" value="login">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
