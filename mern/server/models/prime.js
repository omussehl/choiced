const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const netflixSchema = new Schema({
  _id: String,
  show_id: String,
  type: String,
  director: String,
  cast: String,
  date_added: Date,
  release_year: Number,
  rating: String,
  duration: String,
  listed_in: String,
  description: String,
});

module.exports.Netflix = mongoose.model(
  "prime video",
  netflixSchema,
  "prime video"
);
