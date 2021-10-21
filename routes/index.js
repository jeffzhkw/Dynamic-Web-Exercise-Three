const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Hello world!</h1>
  <p><a href='/about'>Go to about</a></p>`);
});

module.exports = router;
