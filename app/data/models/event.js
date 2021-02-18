module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
    eventId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    eventData: DataTypes.JSON
  }, {
    freezeTableName: true,
    tableName: 'events'
  })
  return Event
}
