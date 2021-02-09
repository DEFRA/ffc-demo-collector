const config = require('../config').events
const processClaimEvent = require('./process-claim-event')
const { EventReceiver } = require('ffc-events')
let receiver

async function start () {
  const action = event => processClaimEvent(event)
  receiver = new EventReceiver(config, action)
  await receiver.connect()
  await receiver.subscribe()
  console.info('Ready to receive events')
}

async function stop () {
  await receiver.closeConnection()
}

module.exports = { start, stop }
