const express = require("express");
const app = express();
const port = 3000;
const VideoList = require("./src/db/videos.json");
const filterQuery = require("./src/db/filterQuery");

app.use(express.static(__dirname + "/build"));

app.get("/videos/:source", async (req, res, next) => {
  if (req.params.source) {
    res.send(filterQuery(VideoList.items, req.params.source));
  }
  res.json(VideoList);
});
