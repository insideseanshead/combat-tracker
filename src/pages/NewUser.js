import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../components/utils/API";

const NewUser = (props) => {
  //SET NEWUSER STATE
  const [newUserState, setNewUserState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUserState({
      ...newUserState,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // IF PASSWORDS DONT MATCH

    // ELSE 
    API.createProfile(newUserState).then((userData) => {
      setNewUserState({
        name: "",
        email: "",
        password: "",
      });
      window.location.href='/'
    });
  };

  return (
    <div>
      <Row>
        <Col className="col-4 offset-4">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Control
                className="mb-3"
                onChange={handleInputChange}
                value={newUserState.name}
                type='text'
                name="name"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                onChange={handleInputChange}
                value={newUserState.email}
                type="text"
                name="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                onChange={handleInputChange}
                value={newUserState.password}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button type="submit" value="Add New User">
              Create New Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewUser;
