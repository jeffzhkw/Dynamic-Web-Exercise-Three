const express = require("express"); //Alt way for "import"

const app = express(); //Create an instance
const port = 3000;

const homePage = require("./routes/index.js");
const aboutPage = require("./routes/about.js");

//anyone who goes to the `/`, exec the arrow func where, we send `res` as respond.
//app.METHOD(PATH, HANDLER).

app.use(express.static("public"));
app.use("/", homePage);
app.use("/about", aboutPage);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}.`);
});
