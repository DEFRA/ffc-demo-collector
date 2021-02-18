const { start, stop } = require('../../../app/events')

describe('event service', () => {
  afterAll(async () => {
    await stop()
  })

  test('runs', async () => {
    await start()
  })
})
