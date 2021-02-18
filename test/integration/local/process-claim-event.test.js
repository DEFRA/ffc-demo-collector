const dbHelper = require('../../db-helper')
const processClaimEvent = require('../../../app/events/process-claim-event')
const { models } = require('../../../app/data')
let event

describe('processing claim message', () => {
  const eventContent = {
    body: {
      claimId: 'MINE1'
    },
    type: 'uk.gov.ffc.claim.validated'
  }

  beforeEach(async () => {
    event = {
      value: JSON.stringify(eventContent)
    }
    await dbHelper.truncate()
  })

  afterEach(async () => {
    await dbHelper.truncate()
  })

  afterAll(async () => {
    await dbHelper.close()
  })

  test('should save event', async () => {
    await processClaimEvent(event)
    const events = await models.event.findAll()
    expect(events.length).toBe(1)
  })

  test('should save event type', async () => {
    await processClaimEvent(event)
    const events = await models.event.findOne({ raw: true })
    expect(events.eventData.type).toBe('uk.gov.ffc.claim.validated')
  })

  test('should save event body', async () => {
    await processClaimEvent(event)
    const events = await models.event.findOne({ raw: true })
    expect(events.eventData.body.claimId).toBe('MINE1')
  })
})
