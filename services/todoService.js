const axios = require("axios");

const boredApi = () => {
    console.log("Really Bored");
    return axios.get(`${process.env.url}`).then(result => {
        return result.data
    })
};

const boredApiByKey = (key) => {
    console.log("Really bored, but by Key");
    return axios.get(`${process.env.url}?key=${key}`).then(result => {
        return result.data
    })
}

module.exports = {
    boredApi,
    boredApiByKey
}