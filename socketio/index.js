module.exports = io => {
  io.sockets.on('connection', socket => {
    socket.on('send message', data => {
      console.log(socket.request.session.key);
      io.sockets.emit('new message', data);
    });
    socket.on('broadcast message', data => {
      socket.broadcast.emit('new message', data);
    });
  });
};
