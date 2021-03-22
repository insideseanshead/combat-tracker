import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const Landing = () => {
    // State for Login
  const [loginFormState, setloginFormState] = useState({
    email:'',
    password:''
  })

  const inputChange = event =>{
    const {name,value}=event.target;
    setloginFormState({
      ...loginFormState,
      [name]:value
    })
  }
  
  return (
    <div className="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange = {inputChange} type="text" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange = {inputChange} type="password" name="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Landing;
