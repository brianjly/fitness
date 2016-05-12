var express = require('express');
var router = express.Router();

var Data = require('../models/data');
var User = require('../models/users')

Data.methods(['get','put', 'post', 'delete']);
Data.register(router, '/data');

User.methods(['get','put', 'post', 'delete']);
User.register(router, '/users');


module.exports = router;
