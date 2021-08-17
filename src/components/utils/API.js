const URL_PREFIX = "http://localhost:5000";
// const URL_PREFIX = "https://combattracker-api.herokuapp.com"

const API = {
  // Need to make a create user function on landing page.
  createProfile: function (userData) {
    return fetch(`${URL_PREFIX}/api/users`, {
      method: 'POST',
      headers: {
        "Content-Type": `application/json`,
      },
      body:JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  },

  login: function (userData) {
    console.log(userData);
    return fetch(`${URL_PREFIX}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },

  getProfile: function (token) {
    return fetch(`${URL_PREFIX}/api/users/secretProfile`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => null);
  },

  getAllCampaigns: function () {
    return fetch(`${URL_PREFIX}/api/campaigns`, {})
      .then((res) => res.json())
      .catch((err) => null);
  },

  getOneCampaign: function (campaignId) {
    return fetch(`${URL_PREFIX}/api/campaigns/${campaignId}`, {})
      .then((res) => res.json())
      .catch((err) => null);
  },

  createCampaign: function (token, campaignData) {
    return fetch(`${URL_PREFIX}/api/campaigns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(campaignData),
    })
      .then((res) => res.json())
      .catch((err) => null);
  },

  deleteCampaign: function (token, campaignId) {
    return fetch(`${URL_PREFIX}/api/campaigns/${campaignId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => null);
  },

  // GET one Character
  getOneCharacter: function(characterId) {
    return fetch(`${URL_PREFIX}/api/character/${characterId}`, {})
      .then((res) => res.json())
      .catch((err) => null)
  },

  createCharacter: function(token, characterData) {
    return fetch(`${URL_PREFIX}/api/character`, {
      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(characterData),
    })
      .then((res) => res.json())
      .catch((err)=> console.log(err))
  },

  deleteCharacter: function(token, characterId) {
    return fetch(`${URL_PREFIX}/api/character/${characterId}`, {
      method:'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => null)
  },
  getOneEncounter: function(encounterId) {
    return fetch(`${URL_PREFIX}/api/encounters/${encounterId}`, {})
      .then((res) => res.json())
      .catch((err) => null)
  },

  createEncounter: function(token, encounterData) {
    return fetch(`${URL_PREFIX}/api/encounters`, {
      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encounterData),
    })
      .then((res) => res.json())
      .catch((err)=> console.log(err))
  },

  deleteEncounter: function(token, encounterId) {
    return fetch(`${URL_PREFIX}/api/encounters/${encounterId}`, {
      method:'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => null)
  }
};

module.exports = API;
