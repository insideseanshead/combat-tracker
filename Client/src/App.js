import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Landing from './components/landing/Landing'
import SearchBar from './components/ui/SearchBar';
import Footer from './components/ui/Footer';
import BestiaryGrid from './components/beastiary/BestiaryGrid';


function App() {

  // State for Beastiary Cards
  const [monsters, setMonsters] = useState([]);
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`/api/monsters`)
      // const res = await axios(`/api/monsters`)
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
        <Landing/>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <div className="body-bg">
          <BestiaryGrid monsters={monsters} query={query}/>
        </div>
      </Container>
      <br />
      <Footer />
      </div>
    </div>
  );
}

export default App;
