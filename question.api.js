const express = require("express");
const triviaRoutes = express.Router();
const pool = require("./connection");

function getQuestions(req, res) {
  pool
    .query("select * from questions order by random() limit 10")
    .then(result => {
      res.send(result.rows);
    });
}

triviaRoutes.get("/questions", getQuestions);

module.exports = triviaRoutes;


