const mongoose = require('mongoose');

const netflixSchema = new mongoose.Schema({
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
  description: String
})

module.exports = mongoose.model('Netflix', netflixSchema)