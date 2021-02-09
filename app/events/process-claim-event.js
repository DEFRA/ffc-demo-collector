async function processClaimEvent (event) {
  try {
    console.info('Event received')
    console.info(event.value.toString())
  } catch (err) {
    console.error('Unable to process event:', err)
  }
}

module.exports = processClaimEvent
