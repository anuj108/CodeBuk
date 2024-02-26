const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const router = express.Router();

router.get("/contest", (req, res) => {
  console.log("HELLO FROM CONTEST");

  const result = axios
    .get(
      `https://clist.by:443/api/v4/contest/?username=chan_0912&api_key=6ce47452759ef28b3e833a3f7c17d2a75d4cb952&upcoming=true&start_time__during=10%20days`
    )
    .then((result) => {
      // console.log(result.data);
      res.status(200).send(result.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
});

module.exports = router;
