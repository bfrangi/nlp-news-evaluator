const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
var AylienNewsApi = require("aylien-news-api");
const mockAPIResponse = require("./mockAPI.js");

// Configure Alyien API
var defaultClient = AylienNewsApi.ApiClient.instance;
var app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env.API_ID;
var app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env.API_KEY;
var api = new AylienNewsApi.DefaultApi();

// Create express instance
const app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Set up static folder to serve
app.use(express.static("dist"));

// Configure routes
app.get("/", function (req, res) {
  console.log("GET /");
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  console.log("GET /test");
  console.log("    Query:", req.query);
  var opts = {
    body: req.query.text,
    language: [req.query.language],
    publishedAtStart: "NOW-7DAYS",
    publishedAtEnd: "NOW",
  };
  api.listStories(opts, (error, data, response) => {
    if (error) {
      console.error(error);
      res.send({ error: error })
    } else {
      const story = data.stories[0];
      let story_list = [];
      for (let story of data.stories) {
        const title = story.title;
        const sentiment = story.sentiment.body.polarity;
        const link = story.links.permalink;
        let summary = "";
        for (var i = 0; i < story.summary.sentences.length; i++) {
          summary += " " + story.summary.sentences[i];
        }
        story_list.push({ title: title, sentiment: sentiment, link: link, summary: summary })

      }
      res.send({stories: story_list})
    }
  });
});

// Start server
const port = 8081;
app.listen(port, function () {
  console.log("Example app listening on port", port);
});
