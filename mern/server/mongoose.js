const mongoose = require('mongoose');

const Favorite = require('./models/favorites');

mongoose.connect('mongodb+srv://Omar123:123Omar@choiced.znpd5bd.mongodb.net/streaming_sites?retryWrites=true&w=majority'
).then(() => {
  console.log('Connected to the database!')
}).catch(() =>{
  console.log('Connection failed!')
})

// this is code if I were to add content to mongo
const addFavorites = async(req, res, next) => {
  const newFavorite = new Favorite({
    type: req.body.type,
    title: req.body.title
  })
  // this is an asynchronous task
  const result = await newFavorite.save()
  console.log(typeof newFavorite._id);
  res.json(result);
}

const getMedia = async (req, res, next) => {
  // find() is a mongoose function that 
  const favorite = await Favorite.find()
  console.log(favorite)
  res.json(favorite)
}

exports.addFavorites = addFavorites;
exports.getMedia = getMedia;