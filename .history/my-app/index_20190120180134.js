const express = require("express");
const app = express();
const port = 3000;
const VideoList = require("./src/db/videos.json");

app.use(express.static(__dirname + "/build"));

app.get("/videos", async (req, res, next) => {
  if (req.query.source) {
    res.send(filterByString(VideoList.items, req.query.source));
  }
  res.json(VideoList);
});

const filterByString = app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
