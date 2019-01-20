const express = require("express");
const app = express();
const port = 3000;
const VideoList = require("./src/db/videos.json");
const filterByString = require("./src/components/FilterSuorce");

app.use(express.static(__dirname + "/build"));

app.get("/videos/:source", async (req, res, next) => {
  if (req.params.source) {
    res.send(FilterSuorce(VideoList.items, req.params.source));
  }
  res.json(VideoList);
});
