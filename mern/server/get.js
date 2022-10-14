// Get the count of all users
User.count().exec(function (err, count) {

  // Get a random entry
  var random = Math.floor(Math.random() * count)

  // Again query all users but only fetch one offset by our random #
  User.findOne().skip(random).exec(
    function (err, result) {
      // Tada! random user
      console.log(result) 
    })
})