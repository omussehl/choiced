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
  getDisneyMovie,
  getDisneyTV,
  getPrimeMovie,
  getPrimeTV,
} = require("./mongoose");

// cors restricts requests from unknown locations - server accepts requests from this location (frontend)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// these are the requests that express can do
app.use(bodyParser.json());

// netflix
app.get("/netflix", getNetflixMedia);
// hulu
app.get("/hulu", getHuluMedia);
app.get("/hulu/movie", getHuluMovie);
app.get("/hulu/tv", getHuluTV);
// disney
app.get("/disney", getDisneyMedia);
app.get("/disney/movie", getDisneyMovie);
app.get("/disney/tv", getDisneyTV);
// prime
app.get("/prime", getPrimeMedia);
app.get("/prime/movie", getPrimeMovie);
app.get("/prime/tv", getPrimeTV);

// the server that localhost will run on
app.listen(8080);
