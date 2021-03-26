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

const API = {
    login: function (userData) {
      console.log(userData);
      return fetch("https://combattracker-api.herokuapp.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(userData),
      })
        .then(res=> res.json())
        .catch((err) => console.log(err));
    },

    getProfile: function(token){
      return fetch("https://combattracker-api.herokuapp.com/api/users/secretProfile", {
        headers:{
          "authorization": `Bearer ${token}`
        }
      }).then(res=>res.json()).catch(err=>null)
    }
  };
  
  module.exports = API;

