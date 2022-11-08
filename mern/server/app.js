const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const {
  getNetflixMedia,
  getHuluMedia,
  getPrimeMedia,
  getDisneyMedia,
  getHuluMovie,
  getHuluTV,
} = require("./mongoose");

// cors restricts requests from unknown locations - server accepts requests from this location (frontend)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// these are the requests that express can do
app.use(bodyParser.json());

// app.post("/netflix", addFavorites);

app.get("/netflix", getNetflixMedia);

app.get("/hulu", getHuluMedia);
app.get("/hulu/movie", getHuluMovie);
app.get("/hulu/tv", getHuluTV);

app.get("/disney", getDisneyMedia);
app.get("/prime", getPrimeMedia);

// the server that localhost will run on
app.listen(8080);
