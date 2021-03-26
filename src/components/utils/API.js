// const URL_PREFIX = "http://localhost:5000"
const URL_PREFIX = "https://combattracker-api.herokuapp.com"

const API = {
    login: function (userData) {
      console.log(userData);
      return fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": `${URL_PREFIX}application/json`,
        },
        body:JSON.stringify(userData),
      })
        .then(res=> res.json())
        .catch((err) => console.log(err));
    },

    getProfile: function(token){
      return fetch(`${URL_PREFIX}/api/users/secretProfile`, {
        headers:{
          "authorization": `Bearer ${token}`
        }
      }).then(res=>res.json()).catch(err=>null)
    }
  };
  
  module.exports = API;

// import axios from 'axios';

// export default{
//     // GET Monsters
//     getMonsters: function() {
//         return axios.get(`/api/monsters`)
//     },

//     // GET Animals
//     getAnmals: function() {
//         return axios.get('/api/animals')
//     },

//     // GET NPCs
//     getNpcs: function() {
//         return axios.get('/api/npcs')
//     }
// }