'use strict'

var jwt = require('jwt-simple');
var secret = 'clave_secreta_weatherservice';

exports.createToken = function(user){
	var payload = {
		sub: user._id,
		name: user.name,
		surname: user.surname,
		email: user.email
	};

	return jwt.encode(payload, secret);
};
