import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/ui/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import SearchBar from "./components/ui/SearchBar";
import BestiaryGrid from "./pages/beastiary/BestiaryGrid";
import Footer from "./components/ui/Footer";
import API from "./components/utils/API";
import Landing from "./components/landing/Landing";
import NavigationBar from "./components/ui/Navbar";
import Campaigns from "./pages/Campaigns";
import CampaignDetail from "./pages/CampaignDetail";
import NewUser from "./pages/NewUser";
import NewEncounter from "./pages/NewEncounter"

function App() {
  // login state
  const [loginFormState, setloginFormState] = useState({
    email: "",
    password: "",
  });

  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    campaigns: [],
    token: "",
    id: "",
    isLoggedIn: false,
  });

  useEffect(fetchUserData, []);

  function fetchUserData() {
    const token = localStorage.getItem("token");
    API.getProfile(token).then((profileData) => {
      if (profileData) {
        setProfileState({
          name: profileData.name,
          email: profileData.email,
          campaigns: profileData.Campaigns,
          encounters: profileData.Encounters,
          token: token,
          id: profileData.id,
          isLoggedIn: true,
        });
      } else {
        localStorage.removeItem("token");
        setProfileState({
          name: "",
          email: "",
          campaigns: [],
          token: "",
          id: "",
          isLoggedIn: false,
        });
      }
    });
  }

  const inputChange = (event) => {
    const { name, value } = event.target;
    setloginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    API.login(loginFormState).then((newToken) => {
      localStorage.setItem("token", newToken.token);
      API.getProfile(newToken.token).then((profileData) => {
        setProfileState({
          name: profileData.name,
          email: profileData.email,
          campaigns: profileData.Campaigns,
          id: profileData.id,
          isLoggedIn: true,
        });
      });
    });
  };

  const deleteCampaign = (id) => {
    API.deleteCampaign(profileState.token, id).then((data) => {
      fetchUserData();
    });
  };

  const logout = () => {
    console.log("fire logout");
    localStorage.removeItem('token')
    setProfileState({
      name: "",
          email: "",
          campaigns: [],
          token: "",
          id: "",
          isLoggedIn: false,
    })
  }

  // State for Beastiary Cards
  const [monsters, setMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(
        // `https://combattracker-api.herokuapp.com/api/monsters`
        `http://localhost:5000/api/monsters`
      );
      setMonsters(res.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavigationBar profile={profileState} logout={logout} />
        <Header />
        <div class="background">
          <Container className="container">
            <br />
            <Route exact path="/">
              {profileState.isLoggedIn ? (
                <Campaigns
                  profile={profileState}
                  fetchData={fetchUserData}
                  delCampaign={deleteCampaign}
                />
              ) : (
                <Landing
                  profile={profileState}
                  inputChange={inputChange}
                  loginFormState={loginFormState}
                  formSubmit={formSubmit}
                />
              )}
            </Route>
            <Route exact path="/beastiary">
              <SearchBar getQuery={(q) => setQuery(q)} />
              <div className="body-bg">
                <BestiaryGrid
                  isLoading={isLoading}
                  monsters={monsters}
                  query={query}
                />
              </div>
            </Route>
            <Route path="/campaigns/:id">
              <CampaignDetail profile={profileState} />
            </Route>
            <Route exact path="/newuser">
              <NewUser/>
            </Route>
            <Route exact path="/newencounter">
                <NewEncounter/>
            </Route>
          </Container>
          <br />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
