import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import SearchBar from './components/ui/SearchBar';
import Footer from './components/ui/Footer';
import BestiaryGrid from './components/beastiary/BestiaryGrid';;


function App() {
  // State for Beastiary Cards
  const [monsters, setMonsters] = useState([]);
  const [query, setQuery] = useState('')

  // Set Initial State
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`/api/monsters?name=${query}`)
      setMonsters(res.data)
    };
    fetchItems()
  }, [query])
  
  // console.log(monsters)
  
  return (
    <div className="App">
      <Header />
      <div class="background">
      <Container className="container">
        <br />
        <SearchBar getQuery={(q) => setQuery(q)} />
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
