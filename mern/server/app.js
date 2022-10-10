const express = require('express');
const bodyParser = require('body-parser');
const mongoChoiced = require('./mongoose');

const app = express();

// these are the requests that express can do
app.use(bodyParser.json());

app.post('/netflix', mongoChoiced.addFavorites);

app.get('/netflix', mongoChoiced.getMedia);

// the server that localhost will run on
app.listen(3000);