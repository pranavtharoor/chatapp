const { message } = require('../models');
const to = require('../utils/to');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

global.activeSockets = {};

module.exports = io => {
  io.sockets.on('connection', socket => {
    socket.on('login', userData => {
      console.log('login: ', userData);
      socket.request.session.key = userData;
      if (socket.request.session.key)
        activeSockets[socket.request.session.key.email] = socket;
    });

    socket.on('send message', async data => {
      if (!socket.request.session.key) return;
      console.log(data);
      let [err, newMessage] = await to(
        message.create({ ...data, senderId: socket.request.session.key.id })
      );
      if (err) console.log(err);
      const receiverSocket = activeSockets[data.participantEmail];
      data.participantEmail = undefined;
      delete data.participantEmail;
      if (receiverSocket) receiverSocket.emit('new message', data);
      socket.emit('new message', data);
    });
  });
};
