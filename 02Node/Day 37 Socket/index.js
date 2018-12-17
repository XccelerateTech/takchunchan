var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var userId;



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  var currentRoom;
  var currentUser;
  currentUser = userId++;

  console.log('connection received');

  socket.on('chat message', function (msg) {

    console.log("Received ", msg);
    console.log(this.userId)
    if (currentRoom) {
      io.to(currentRoom).emit('chat message', "reply from server " + msg + ' server ' + currentRoom + ' from ' +   this.userId)
    }
    else {
      io.to(socket.id).emit('chat message', "reply from server " + msg + ' defaultserver ' + ' from ' +   this.userId)
    }
  }
  )

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });

  socket.on('subscribe', (room) => {
    if (currentRoom) {
      socket.leave(currentRoom)
      socket.join(room);
      console.log(room);
      currentRoom = room;
    } else {
      socket.join(room);
      console.log(room);
      currentRoom = room;
    }

  });

})

http.listen(port, function () {
  console.log('listening on *:' + port);
});
