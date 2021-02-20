import './App.css';
import Header from './components/ui/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import SearchBar from './components/ui/SearchBar';
import Footer from './components/ui/Footer';
import BestiaryGrid from './components/beastiary/BestiaryGrid';

require('dotenv').config

function App() {
  return (
    <div className="App">
      <Header />
      <div class="background">
      <Container className="container">
        <SearchBar />
        <div className="body-bg">
          <BestiaryGrid />
        </div>
      </Container>
      <Footer />
      </div>
    </div>
  );
}

export default App;
