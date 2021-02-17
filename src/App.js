import './App.css';
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="background">
      <Container className="container">
        <SearchBar />
      </Container>
      </div>
    </div>
  );
}

export default App;
