const express = require("express");
require("dotenv").config();


const {
    boredApi,
    boredApiByKey
} = require("./services/todoService");

const app = express();

// for localhost:3000/
app.get("/", (req, res, next) => {
    res.status(200).send("Server is up!!")
});

// get external service
//http://localhost:3000/boredApi
app.get("/boredApi", (req, res, next) => {
    boredApi()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
            message: err.message, 
            status: err.status
        }
        }))
});

// get external service by ID
app.get("/boredApi/:key", (req, res, next) => {
    const key = req.params.key;
    boredApiByKey(key)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(err.status || 501).json({
        error:{
            message: err.message, 
            status: err.status, 
            method: req.method
        }
    }))
})

// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
    const error = new Error("Not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        }
    })
});

app.listen(process.env.port, () => {
    console.log(`Server starting on port ${process.env.port}`)
})