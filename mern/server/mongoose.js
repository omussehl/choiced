const mongoose = require('mongoose');

// struggling to get this db to connect to the correct db
// const { db } = require('./models/netflix');
 

// const Favorite = require('./models/favorites');

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
// this is a get request for the data
const getMedia = async (req, res, next) => {
  // find() is a mongoose function that 
  const favorite = await db.netflix.find({show_id: 's1', type: "Movie"})
  console.log(favorite)
  res.json(favorite)
}

// const getMedia = async (req, res, next) => {
//   // find() is a mongoose function that 
//   const favorite = await Favorite.find({show_id: 's1', type: "Movie"})
//   console.log(favorite)
//   res.json(favorite)
// }



exports.addFavorites = addFavorites;
exports.getMedia = getMedia;