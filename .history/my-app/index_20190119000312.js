const express = require("express");
const app = express();
const port = 3000;
const VideoList = require("./src/db/videos.json");
const filterByString = app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  app.get("/videos", async (req, res, next) => {
    if (req.query.source) {
      res.send(filterByString(VideoList.items, req.query.source));
    }
    res.json(VideoList);
  });

  console.log(`server is listening on ${port}`);
});
