module.exports = (sequelize, DataTypes) => {
  let Conversation = sequelize.define('conversation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });

  Conversation.associate = models => {
    models.conversation.belongsTo(models.user);
    models.conversation.belongsTo(models.user, { as: 'participant' });
  };

  return Conversation;
};
