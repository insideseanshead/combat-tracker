import React, {useState} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../components/utils/API";

const NewUser = (props) => {
    //SET NEWUSER STATE
    const [newUserState, setNewUserState] = useState({
        name: '',
        email:'',
        password:''
    });

    const handleInputChange = event => {
        const { name, value } =event.target;
        setNewUserState({
            ...newUserState,
            [name]: value,
        })
    }

  return (
    <div>
      <Row>
        <Col className="col-4 offset-4">
          <Form>
            <Form.Control
              className="mb-3"
              onChange={handleInputChange}
              value={newUserState.name}
              type='text'
              name="name"
              placeholder="Username"
            />
            <Form.Control
              className="mb-3"
              onChange={handleInputChange}
              value={newUserState.email}
              type="text"
              name="email"
              placeholder="Email"
            />
            <Form.Control
              className="mb-3"
              onChange={handleInputChange}
              value={newUserState.password}
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button>Create Encounter</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewUser;
