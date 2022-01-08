const PORT = process.env.PORT || 5050

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/engineeringchemistry", (req, res) => {
  res.render("materials/engineeringchemistry");
});

app.get("/em2", (req, res) => {
  res.render("materials/em2");
});

app.get("/ee2", (req, res) => {
  res.render("materials/ee2");
});

app.get("/ed", (req, res) => {
  res.render("materials/ed");
});


app.get("/ec1", (req, res) => {
  res.render("materials/ec1");
});

app.get("/ico", (req, res) => {
  res.render("materials/ico");
});

app.get("/ee1", (req, res) => {
  res.render("materials/ee1");
});

app.get("/electricalworkshop", (req, res) => {
  res.render("materials/electricalworkshop");
});

app.get("/eaa-sports", (req, res) => {
  res.render("materials/eaa-sports");
});

app.get("/eaa-sbm", (req, res) => {
  res.render("materials/eaa-sbm");
});

app.get("/enggphy", (req, res) => {
  res.render("materials/enggphy");
});


app.get("/communicativeenglish", (req, res) => {
  res.render("materials/communicativeenglish");
});

app.get("/engineeringmechanics", (req, res) => {
  res.render("materials/engineeringmechanics");
});

app.get("/workshoppractice", (req, res) => {
  res.render("materials/workshoppractice");
});


app.get("/ssev", (req, res) => {
  res.render("materials/ssev");
});

app.get("/maths", (req, res) => {
  res.render("materials/maths");
});


app.get("/electronicsworkshop", (req, res) => {
  res.render("materials/electronicsworkshop");
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))