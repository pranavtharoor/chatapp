module.exports = (sequelize, DataTypes) => {
  let Message = sequelize.define('message', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Message.associate = models => {
    models.message.belongsTo(models.user, { as: 'sender' });
    models.message.belongsTo(models.user, { as: 'receiver' });
  };
  return Message;
};
