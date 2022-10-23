const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoChoiced = require('./mongoose');
const app = express();
const { addFavorites, getMedia } = require("./mongoose");

// cors restricts requests from unknown locations - server accepts requests from this location (frontend)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// these are the requests that express can do
app.use(bodyParser.json());

app.post("/netflix", addFavorites);

app.get("/netflix", getMedia);

// the server that localhost will run on
app.listen(8080);
