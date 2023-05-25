


const http = require('http');
const routes = require('./routes.js');

const server = http.createServer(routes);

server.listen(4000);

or

// const http = require('http');
// const routes = require('./routes.js');
// console.log(routes.someText);
// const server = http.createServer(routes.handler);

// server.listen(4000);




//routes is a file name u have created routes.js

//this file name app.js while running (run node app.js) not a( routes.js file)