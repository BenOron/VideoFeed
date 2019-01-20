const express = require("express");
const app = express();
const port = 3000;
const VideoList = require("./src/db/videos.json");
const filterQuery = require("./src/db/filterQuery");

app.use(express.static(__dirname + "/build"));

app.get("/videos/:source", filterQuery (req, res, next) => {
  res.json("");
});

app.get("/videos", async (req, res, next) => {
  res.json(VideoList);
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
