const axios = require("axios");

const boredApi = () => {
    console.log("Really Bored");
    return axios.get(`${process.env.url}`).then(result => result.data)
};

const boredApiByKey = (key) => {
    console.log("Really bored, but by Key");
    return axios.get(`${process.env.url}?key=${key}`).then(result => result.data)
}

module.exports = {
    boredApi,
    boredApiByKey
}