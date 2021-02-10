const { models } = require('../data')

async function saveEvent (event) {
  await models.event.create({ eventData: event })
  console.info(`Saved event relating to claimId: ${event.body.claimId}, type: ${event.type}`)
}

module.exports = saveEvent
