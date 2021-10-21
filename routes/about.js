const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Under big about</h1>
  <p><a href='/'>Go to index</a></p>
  <p><a href='/about/me'>This is me</a></p>`);
});

router.get("/me", (req, res) => {
  res.send(`<h1>This is about me</h1>
  <p><a href='/about'>Go to big about</a></p>
  <img src="/1.jpg" alt="profile photo">`);
});

module.exports = router;
