import axios from 'axios';

export default{
    // GET Monsters
    getMonsters: function() {
        return axios.get('/api/monsters')
    },

    // GET Animals
    getAnmals: function() {
        return axios.get('/api/animals')
    },

    // GET NPCs
    getNpcs: function() {
        return axios.get('/api/npcs')
    }
}