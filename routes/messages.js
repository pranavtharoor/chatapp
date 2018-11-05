const { message } = require('../models');
const to = require('../utils/to');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

exports.fetchMessages = async (req, res) => {
  let [err, messages] = await to(
    message.findAll({
      where: { conversationId: req.query.conversationId },
      attributes: ['message', 'senderId', 'conversationId']
    })
  );
  if (err) return res.sendError(err);
  res.sendSuccess(messages);
};
