// Setup empty JS object to act as endpoint for all routes

let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// GET method route
app.get('/giveMeProjectData', function (req, res) {
    res.send(projectData);
})


// designates what port the app will listen to for incoming requests

app.listen(process.env.PORT || 8081, function () {
    console.log('Example app listening on port 8081!')
})

