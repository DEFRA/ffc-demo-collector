const saveEvent = require('./save-event')

async function processClaimEvent (event) {
  try {
    const claimEvent = deserializeEvent(event)
    await saveEvent(claimEvent)
  } catch (err) {
    console.error('Unable to process event:', err)
  }
}

function deserializeEvent (event) {
  return JSON.parse(event.value.toString())
}

module.exports = processClaimEvent
