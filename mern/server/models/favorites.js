const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
  // require forces this to happen
  type: {type: String, required: true},
  title: {type: String, required: true}
});

module.exports = mongoose.model('Favorite', favoritesSchema);

