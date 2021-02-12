'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

//conexión a la base
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/user', {useMongoCliente: true,  useNewUrlParser: true, useUnifiedTopology: true })
		.then(() =>{
			console.log("Conexión a la base de datos correctamente");

			//crear servidor
			app.listen(port, () => {
				console.log("Servidor corriendo en el localhost:3800");
			});
		})
		.catch(err => console.log(err));