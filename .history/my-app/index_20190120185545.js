const express = require("express");
const app = express();
const port = 3000;
const VideoList = require("./src/db/videos.json");
const filterQuery = require("./src/db/filterQuery");

app.use(express.static(__dirname + "/build"));

app.get("/videos/:source", async (req, res, next) => {
  if (req.params.source) {
    res.json(filterQuery(VideoList, req.params.source));
  }
  res.json(VideoList);
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
