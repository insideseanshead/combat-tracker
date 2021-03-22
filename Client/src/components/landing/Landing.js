import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../utils/API";

const Landing = () => {
  // State for Login
  const [loginFormState, setloginFormState] = useState({
    email: "",
    password: "",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setloginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  const formSubmit = event=>{
    event.preventDefault();
    API.login(loginFormState).then(loginData=>{
      console.log(loginData)
    })
  }

  return (
    <div className="login">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={formSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={inputChange}
                value={loginFormState.email}
                type="text"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                onChange={inputChange}
                value={loginFormState.password}
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
