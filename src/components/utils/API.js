const URL_PREFIX = "http://localhost:5000";
// const URL_PREFIX = "https://combattracker-api.herokuapp.com"

const API = {
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
    return fetch(`${URL_PREFIX}/api/campaign`, {})
      .then((res) => res.json())
      .catch((err) => null);
  },

  getOneCampaign: function (campaignId) {
    return fetch(`${URL_PREFIX}/api/campaign/${campaignId}`, {})
      .then((res) => res.json())
      .catch((err) => null);
  },

  createCampaign: function (token, campaignData) {
    return fetch(`${URL_PREFIX}/api/campaign`, {
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

  deleteTank: function (token, campaignId) {
    return fetch(`${URL_PREFIX}/api/campaign/${campaignId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
};

module.exports = API;
