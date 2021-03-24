import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SearchBar from './components/ui/SearchBar';
import BestiaryGrid from './components/beastiary/BestiaryGrid';
import Footer from './components/ui/Footer';
import API from "./components/utils/API";


function App() {
  // State for Login
  const [loginFormState, setloginFormState] = useState({
    email: "",
    password: "",
  });

  const [profileState,setProfileState]=useState({
    name:'',
    email:'',
    campaign:[],
    isLoggedIn:false
  })

  useEffect(()=>{
    const token = localStorage.getItem('token');
    API.getProfile(token).then(profileData=>{
      if(profileData){
        setProfileState({
          name:profileData.name,
          email:profileData.email,
          campaign:profileData.Campaign,
          isLoggedIn:true
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
          campaign:profileData.Campaign,
          isLoggedIn:true
        })
      })
    })
  } 
  // State for Beastiary Cards
  const [monsters, setMonsters] = useState([]);
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`/api/monsters`)
      setMonsters(res.data)
    };
    fetchItems()
  }, [])
  
  // console.log(monsters)
  
  return (
    <div className="App">
      <Header />
      <div class="background">
      <Container className="container">
        <br />
        
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


        {/* <SearchBar getQuery={(q) => setQuery(q)} />
        <div className="body-bg">
          <BestiaryGrid monsters={monsters} query={query}/>
        </div> */}
      </Container>
      <br />
      <Footer />
      </div>
    </div>
  );
}

export default App;
