const API = {
    login: function (userData) {
        console.log(userData);
        return fetch ("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(userData),
        })
            .then(res=> res.json())
            .catch((err) => console.log(err));
    }
}

module.exports = API

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