const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/auth/register', (req, res) => {
  res.send({ express: "Hello it`s express"});
});

app.use('/api/auth', routes.auth);

app.listen(4000, () => {
  console.log('server listening on port 4000');
});


