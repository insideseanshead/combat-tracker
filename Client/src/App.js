import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import SearchBar from './components/ui/SearchBar';
import Footer from './components/ui/Footer';
import BestiaryGrid from './components/beastiary/BestiaryGrid';

import API from './components/utils/API';

function App() {
  // State for Beastiary Cards
  const [monsters, setMonsters] = useState([]);

  // Set Initial State
  useEffect(() => {
    loadMonsters()
  }, [])
  function loadMonsters() {
    API.getMonsters()
      .then(res => 
          setMonsters(res.data)
        )
        .catch(err => console.log(err))
  }

  console.log(monsters)
  return (
    <div className="App">
      <Header />
      <div class="background">
      <Container className="container">
        <br />
        <SearchBar />
        <div className="body-bg">
          <BestiaryGrid monsters={monsters} />
        </div>
      </Container>
      <br />
      <Footer />
      </div>
    </div>
  );
}

export default App;
