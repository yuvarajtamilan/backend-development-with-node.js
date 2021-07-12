const express = require("express");
const app = express();
const port = 8080;

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", function (req, res) {
  res.send("<p>This is about me</p><h1>about me</h1>");
});
app.get("/contact", function (req, res) {
  res.send("<p>This is contact me</p><h1>contact me</h1>");
});
app.get("/home", function (req, res) {
  res.send("<p>This is a home</p><h1>home</h1>");
});

app.listen(port);
