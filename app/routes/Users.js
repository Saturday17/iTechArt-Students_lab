const express = require("express");
const users = express.Router();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
   console.log(req.body);
    res.redirect('/');
});

users.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = users;