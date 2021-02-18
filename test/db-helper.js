const { models, sequelize } = require('../app/data')

async function truncate () {
  await models.event.destroy({ truncate: true })
}

async function close () {
  await sequelize.close()
}

module.exports = {
  close,
  truncate
}
