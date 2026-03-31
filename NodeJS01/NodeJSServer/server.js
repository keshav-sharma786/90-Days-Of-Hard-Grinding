const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  //these req and res are basically 2 objects which have multiple methods and properties,that we can use accordingly,
  //~All the users who are coming to our application server,I just want to send them a hello world.My server will always respond with a hello world.
  res.end("hello world!");
});

server.listen(7777);
//When i will run these piece of code,now my server has been created and now my server is ready to listen to the incoming requests.
