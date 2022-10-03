const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');
const { default: mongoose } = require('mongoose');

const app = express();

// these are the requests that express can do
app.use(bodyParser.json());

app.post('/favorites', mongoPractice.addFavorites);

app.get('/favorites', mongoPractice.getMedia);


// mongoose
//   .connect('mongodb+srv://Omar123:123Omar@choiced.znpd5bd.mongodb.net/streaming_sites?retryWrites=true&w=majority')
//   .then(() => {
//     // the server that localhost will run on
//     app.listen(5000);
//   })
//   .catch(err => {
//     console.log(err)
//   });

// the server that localhost will run on
app.listen(3000);