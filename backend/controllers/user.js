'use strict'
var bcrypt = require('bcrypt-nodejs');

var User = require('../models/user');
var jwt = require('../services/jwt');

function saveUser(req, res){
	var params = req.body;
	var user = new User();

	if(params.name && params.surname && params.email && params.password){
		user.name = params.name;
		user.surname = params.surname;
		user.email = params.email;

		bcrypt.hash(params.password, null, null, (err, hash) =>{
			user.password = hash;

			user.save((err, userStored) =>{
				if(err) return res.status(500).send({message:"Error al guardar usuario"});

				if(userStored){
					res.status(200).send({user: userStored});
				}else{
					res.status(404).send({message:"No se registro usuario"});
				}

			});
		});

	}else{
		res.status(200).send({message:"Completa bien los datos"});
	}
}

function loginUser(req, res){
	var params = req.body;

	var email = params.email;
	var password = params.password;

	User.findOne({email:email}, (err, user)=>{		
		if(err) return res.status(500).send({message:"Error en la petición"});

		if(user){
			bcrypt.compare(password, user.password, (err, check) =>{
				if(check){
					//Devolver datos de usuario
					if(params.gettoken){
						//generar y devolver tokken
						return res.status(200).send({
							token: jwt.createToken(user)
						});						
					}else{
						//devolver datos usuario
						user.password = undefined;
						return res.status(200).send({user});
					}
					
				}else{
					return res.status(404).send({message:"Usuario no identificado"});

				}
			});
		}else{
			return res.status(404).send({message:"Usuario no identificado!!"});
		}

	});
}

module.exports = {
	saveUser,
	loginUser
}