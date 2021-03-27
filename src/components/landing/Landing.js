import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import API from "../utils/API";

const Landing = () => {
  // State for Login
  // State for Login
  const [loginFormState, setloginFormState] = useState({
    email: "",
    password: "",
  });

  const [profileState,setProfileState]=useState({
    name:'',
    email:'',
    campaigns:[],
    isLoggedIn:false
  })

  useEffect(()=>{
    const token = localStorage.getItem('token');
    API.getProfile(token).then(profileData=>{
      if(profileData){
        setProfileState({
          name:profileData.name,
          email:profileData.email,
          campaigns:profileData.Campaigns,
          isLoggedIn:true
        })
      } else {
        localStorage.removeItem('token');
        setProfileState({
          name: "",
          email: "",
          tanks: [],
          isLoggedIn: false,
        })
      }
    })
  },[])

  const inputChange = (event) => {
    const { name, value } = event.target;
    setloginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  const formSubmit = event=>{
    event.preventDefault();
    API.login(loginFormState).then(newToken=>{
      localStorage.setItem('token',newToken.token)
      API.getProfile(newToken.token).then(profileData=>{
        setProfileState({
          name:profileData.name,
          email:profileData.email,
          campaigns:profileData.Campaigns,
          isLoggedIn:true
        })
        console.log(profileData)
      })
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
