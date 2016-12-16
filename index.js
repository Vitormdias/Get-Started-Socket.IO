const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

require('./chatroom')(io);

app.use(express.static(__dirname + '/public'));

server.listen(port, function () {
  console.log(`Server listening at port: ${port}`);
});
