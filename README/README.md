
## Tabla de Contenido
1. [Información General](#general-info)

La aplicación web se desarrollo bajo el modelo vista controlador (MVC).

FRONTEND: 

La vista o template del FRONTEND se configuró en el fichero 'src/app/app.component.html'.
Para los estilos de la vista se empleó Bootstrap, pero también se utilizaron estilos propios de CSS, los
cuales se encuentran en el fichero 'src/assets/'  en esta ruta se encuentran los files de styles.css, img, fonts, fontawesome. 

En el fichero 'src/app/services/service.weather' se inyectó un servicio para solicitar los datos del
clima a la API REST del clima (OpenWeather) por medio de el método HttpClient. Para realizar peticiones
mediante el formulario dispuesto en la vista del FRONTEND, al ingresar los datos se debe serguir un modelo:

Pais: ingresar código país
Ciudad: ingresar nombre completo de ciudad.
Ejemplo: País: AR / Ciudad: Buenos Aires; País: UK / Ciudad: London.

Está petición retornará como resultado la llamada efectuada a la API REST del clima para el país y ciudad
indicados en el formulario, la cual se verá reflejada de forma ordenada en la parte superior derecha.

De igual forma, al dar click en iniciar sesión se desplegará un formulario, que al rellenar los campos llamará al método para logear a los usuarios utilizando la función signup, la cual efectuá una petición por post a la API creada en el BACKEND, especificamente a la Base de Datos 'user'. Los datos del usuario logeado persisten en el 
LocalStorage, al igual que el token asignado al usuario.

Para verificar la funcionalidad de logeo y persistencia de datos, se pueden usar los datos de prueba proporcionados a continuación:

usuario: americavirtual@gmail.com
password: americavirtual

De identificarse correctamente se mostrará un mensaje idicando que el logeo fue satisfactorio, caso contrario le indicará un error.

BACKEND:

En el fichero 'index.js' se realizó la conexión a la Base de Datos de MongoDB 'user' y la creación del servidor en el 'http://localhost:3800/api/'.

Se configuraron los ficheros de Controllers para las funciones de saveUSer, loginUSer; configuración del middelware para autenticación de usuarios; models donde se creó el modelo o entidad para la Base de datos user;
configuración del file routes para las rutas post de las funciones de saveUSer, loginUSer.Los datos del usuario logeado persisten en el LocalStorage, al igual que el token asignado al usuario.


2. [Tecnologías](#technologies)

Tecnologías empleadas para el FRONTEND:
-HTML
-CSS
-Bootstrap 4.6.0
-jQuery 3.5.1
-Font Awesome
-Websymbols
-Framework Angular 11.

Tecnologías para el BACKEND:
-NodeJS 14.15.4
-Express 4.17.1
-Body-Parser 1.19.0
-Mongoose 5.11.15
-MongoDB 4.4.3
-jwt-simple 0.5.6
-bcrypt-nodejs 0.0.3

3. [Instalación](#installation)

Para arrancar nuestra app web lo primero que debemos hacer es ejeuctar los siguientes pasos:

-Arracar mongod.exe
-En la consola ubicar el path del archivo backend que se encuentra dentro de la carpeta WeatherService, y
ejecutar el comando "NPM START", esto pondrá en marcha nuestra conexión a Base de Datos y la conexión al servidor.
-Posteriormente, en otra consola se debe ubicar la carpeta WeatherService y en ella ejuctar el comando de angular CLI "NG SERVE".
-Escribir en el navegador de su prefernecia el link: http://localhost:4200/ . 
-Nuestra app web se encuentra arrancada y funcionando.


