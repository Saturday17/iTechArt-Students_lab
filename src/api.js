const express = require('express');
const router = express.Router();
const User = require('./user');

router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => {
      res.send(user);
    });
}); 

module.exports = router;