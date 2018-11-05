const { conversation, user } = require('../models');
const to = require('../utils/to');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

exports.fetchConversations = async (req, res) => {
  let [err, conversations] = await to(
    conversation.findAll({
      where: Sequelize.or(
        { userId: req.session.key.id },
        { participantId: req.session.key.id }
      ),
      include: { all: true }
    })
  );
  if (err) return res.sendError(err);
  conversations = conversations.map(conversation => ({
    id: conversation.id,
    ...(req.session.key.id === conversation.userId
      ? {
          participantId: conversation.participantId,
          participantName: conversation.participant.name,
          participantEmail: conversation.participant.email
        }
      : {
          participantId: conversation.userId,
          participantName: conversation.user.name,
          participantEmail: conversation.user.email
        })
  }));
  res.sendSuccess(conversations);
};

exports.startConversation = async (req, res) => {
  let [err, conversationData] = await to(
    conversation.findOne({
      where: Sequelize.or(
        { userId: req.session.key.id, participantId: req.body.userId },
        { userId: req.body.userId, participantId: req.session.key.id }
      )
    })
  );
  if (err) return res.sendError(err);
  console.log(conversationData, {
    userId: req.session.key.id,
    participantId: req.body.userId
  });
  if (conversationData) return res.sendError(null, 'Conversation exists', 409);
  [err, conversationData] = await to(
    conversation.create({
      userId: req.session.key.id,
      participantId: req.body.userId
    })
  );
  if (err) return res.sendError(err);
  res.sendSuccess(conversationData, 'Conversation created');
};
