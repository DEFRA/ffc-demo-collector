require('./insights').setup()
const eventService = require('./events')

process.on('SIGTERM', async () => {
  await eventService.stop()
  process.exit(0)
})

process.on('SIGINT', async () => {
  await eventService.stop()
  process.exit(0)
})

module.exports = (async function startService () {
  await eventService.start()
}())
