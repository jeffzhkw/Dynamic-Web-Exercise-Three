const express = require("express"); //Alt way for "import"

const app = express(); //Create an instance
const port = 3000;

//anyone who goes to the `/`, exec the arrow func where, we send `res` as respond.
//app.METHOD(PATH, HANDLER).

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}.`);
});
