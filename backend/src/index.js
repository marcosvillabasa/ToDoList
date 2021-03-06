const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, PATH, GET");
        return res.status(200).json({});
    }
    next();
})

//DB
mongoose.connect('mongodb://localhost:27017/taskDB', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('BD conected');
    });

//routes
app.use(config.endpoint, require('./routes/task.route'));



//server
app.listen(config.port, () => {
    console.log(`Listening port ${config.port}`);
});