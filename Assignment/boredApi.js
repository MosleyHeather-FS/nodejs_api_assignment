const axios = require("axios");

const boredApi = () => {
    console.log("Really Bored");
    return axios.get(`${process.env.boredApiURL}`).then(result => {
        return result.data
    })
};

const boredApiByKey = (id) => {
    console.log("Really bored, but by Id");
    return axios.get(`${process.env.boredApiURL}${key}`).then(result => {
        return result.data
    })
}

module.exports = {
    boredApi,
    boredApiByKey
}