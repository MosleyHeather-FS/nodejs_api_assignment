const express = require("express");
require("dotenv").config();

const {
    todoService
} = require("./services/todoService");

const app = express();

// for localhost:3000/
app.get("/", (req, res, next) => {
    res.status(200).send("Service is up!")
});

// get external service
//http://localhost:3000/todo
app.get("/todo", (req, res, next) => {
    todoService()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
            message: err.message, 
            status: err.status
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
            status: error.status
        }
    })
})

app.listen("process.env.port", () => {
    console.log(`Server starting on port ${process.env.port}`)
})