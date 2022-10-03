// currently this should return "Dick Johnson is Dead" the movie
Media.find({show_id: 's1', type: "movie"}, (error, data) => {
  if(error){
    console.log(error)
  }else{
    console.log(data)
  }
});

const getMedia = function(idGeneration, done) {
  Media.find({show_id: 's1', type: "movie"}, (error, arrayOfResults) => {
    if(error) {
      console.log(error)
    }else{
      done(null, arrayOfResults)
    }
  })
}