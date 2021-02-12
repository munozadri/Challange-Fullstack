'use strict'

var jwt = require('jwt-simple');
var momment = require('momment');
var secret = 'clave_secreta_weatherservice';

exports.ensureAuth = function(req, res, netx){
	if(!req.headers.authorization){
		return res.status(403).send({message:"La petición no tiene cabecera de autenticación"});
	}

	var token = req.headers.authorization.replace(/['"]+/g, '');

	try{
		var payload = jwt.decode(token, secret);

		if(payload.exp <= momment().unix()){
			return res.status(401).send({
				message:"El token ha expirado"
			});
		}
	}catch(ex){
		return res.status(404).send({
			message:"El token no es válido"
		});
	}	

	req.user = payload;

	next();
}