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

  // State for Beastiary Cards
  const [monsters, setMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://combattracker-api.herokuapp.com/api/monsters`)
      setMonsters(res.data)
      setIsLoading(false)
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
        <SearchBar getQuery={(q) => setQuery(q)} />
        <div className="body-bg">
          <BestiaryGrid isLoading={isLoading} monsters={monsters} query={query}/>
        </div>
      </Container>
      <br />
      <Footer />
      </div>
    </div>
  );
}

export default App;
