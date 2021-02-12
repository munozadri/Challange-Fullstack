'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middelware/authenticated');


api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;
