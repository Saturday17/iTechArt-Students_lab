const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/users-db', { useNewUrlParser: true });

app.use(bodyParser.json());
app.get('/api', require('./api'));

app.listen(4000, () => {
  console.log('server')
});