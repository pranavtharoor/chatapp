module.exports = (sequelize, DataTypes) => {
  let Conversation = sequelize.define('conversation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    group: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Conversation.associate = models => {
    models.conversation.belongsTo(models.user);
  };
  return Conversation;
};
