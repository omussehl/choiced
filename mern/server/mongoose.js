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

// this is a get request for the data
const getNetflixMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Netflix.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Netflix.findOne().skip(random);

  res.json(document);
};

const getHuluMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Hulu.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Hulu.findOne({ type: "Movie" }).skip(random);

  res.json(document);
};

const getPrimeMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Prime.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Prime.findOne().skip(random);

  res.json(document);
};

const getDisneyMedia = async (req, res, next) => {
  // Get the count of all users
  const count = await Disney.countDocuments();
  const random = Math.floor(Math.random() * count);
  const document = await Disney.findOne().skip(random);

  res.json(document);
};

exports.getDisneyMedia = getDisneyMedia;
exports.getPrimeMedia = getPrimeMedia;
exports.getHuluMedia = getHuluMedia;
exports.getNetflixMedia = getNetflixMedia;
