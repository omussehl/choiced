const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DisneySchema = new Schema({
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

module.exports.Disney = mongoose.model("disney+", DisneySchema, "disney+");
