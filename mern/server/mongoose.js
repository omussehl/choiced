const mongoose = require("mongoose");

const { Netflix } = require("./models/netflix");
const { Hulu } = require("./models/hulu");
const { Prime } = require("./models/prime");
const { Disney } = require("./models/disney");

mongoose
  .connect(
    "mongodb+srv://Omar123:123Omar@choiced.znpd5bd.mongodb.net/streaming_sites?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// These are get request for the data
// Netflix functions:
const getNetflixMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Netflix.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Netflix.findOne().skip(random);

  res.json(document);
};

const getNetflixMovie = async (req, res, next) => {
  const document = await Netflix.find({ type: "Movie" });

  res.json(document);
};

const getNetflixTV = async (req, res, next) => {
  const document = await Netflix.find({ type: "TV Show" });

  res.json(document);
};

// Hulu Functions:
const getHuluMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Hulu.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Hulu.findOne().skip(random);

  res.json(document);
};

const getHuluMovie = async (req, res, next) => {
  const document = await Hulu.find({ type: "Movie" });

  res.json(document);
};

const getHuluTV = async (req, res, next) => {
  const document = await Hulu.find({ type: "TV Show" });

  res.json(document);
};

// Prime functions:
const getPrimeMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Prime.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Prime.findOne().skip(random);

  res.json(document);
};

const getPrimeMovie = async (req, res, next) => {
  const document = await Prime.find({ type: "Movie" });

  res.json(document);
};

const getPrimeTV = async (req, res, next) => {
  const document = await Prime.find({ type: "TV Show" });

  res.json(document);
};

// Disney Functions:
const getDisneyMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Disney.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Disney.findOne().skip(random);

  res.json(document);
};

const getDisneyMovie = async (req, res, next) => {
  const document = await Disney.find({ type: "Movie" });

  res.json(document);
};

const getDisneyTV = async (req, res, next) => {
  const document = await Disney.find({ type: "TV Show" });

  res.json(document);
};

// export the following
exports.getDisneyMedia = getDisneyMedia;
exports.getDisneyMovie = getDisneyMovie;
exports.getDisneyTV = getDisneyTV;

exports.getPrimeMedia = getPrimeMedia;
exports.getPrimeMovie = getPrimeMovie;
exports.getPrimeTV = getPrimeTV;

exports.getHuluMedia = getHuluMedia;
exports.getHuluMovie = getHuluMovie;
exports.getHuluTV = getHuluTV;

exports.getNetflixMedia = getNetflixMedia;
exports.getNetflixMovie = getNetflixMovie;
exports.getNetflixTV = getNetflixTV;
