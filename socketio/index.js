const { message } = require('../models');
const to = require('../utils/to');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

module.exports = io => {
  io.sockets.on('connection', socket => {
    socket.on('send message', async data => {
      let [err, newMessage] = await to(
        message.create({ ...data, senderId: socket.request.session.key.id })
      );
      if (err) console.log(err);
      io.sockets.emit('new message', data);
    });
    socket.on('broadcast message', data => {
      socket.broadcast.emit('new message', data);
    });
  });
};
