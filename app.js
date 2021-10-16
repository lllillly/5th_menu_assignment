const express = require("express");
const morgan = require("morgan");
const path = require("path");

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));

app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(PORT, () => {
  console.log("🍀 4000 PORT SERVER START");
});
