async function processClaimEvent (event) {
  try {
    console.info('Event received')
    console.info(event)
  } catch (err) {
    console.error('Unable to process event:', err)
  }
}

module.exports = processClaimEvent
