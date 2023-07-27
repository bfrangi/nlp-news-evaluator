const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var AylienNewsApi = require("aylien-news-api");
const mockAPIResponse = require('./mockAPI.js')

// Configure Alyien API
var defaultClient = AylienNewsApi.ApiClient.instance;
var app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env.API_ID;
var app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env.API_KEY;
var api = new AylienNewsApi.DefaultApi();

// Configure API call parameters
var opts = {
  title: "startup",
  publishedAtStart: "NOW-7DAYS",
  publishedAtEnd: "NOW"
};

// Define callback function for API call
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: ");
    console.log("========================================");
    for (var i = 0; i < data.stories.length; i++) {
      console.log(data.stories[i].title + " / " + data.stories[i].source.name);
    }
  }
};

// Create express instance
const app = express()

// Set up static folder to serve
app.use(express.static('dist'))

// Configure routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    console.log(api.listStories(opts, callback));
    res.send(mockAPIResponse)
})
