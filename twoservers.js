// Require/import the HTTP module
var http = require("http");
//I am adding a bit of comments to see if changes can be pushed... Trying to relearn this whole github shit... 

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("You're a genius in javascript");
}

function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You need alot of improvement");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequest1);
//handleRequest function is active once server is made
var serverTwo = http.createServer(handleRequest2);

// Starting our servers
serverOne.listen(PORTONE, function () {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function () {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTTWO);
});