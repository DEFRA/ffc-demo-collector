(async function () {
  const kafka = require('./events')
  await kafka.subscribe()
}())
