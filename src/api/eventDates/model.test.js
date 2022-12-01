import { EventDates } from '.'

let eventDates

beforeEach(async () => {
  eventDates = await EventDates.create({ datevalue: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = eventDates.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(eventDates.id)
    expect(view.datevalue).toBe(eventDates.datevalue)
    expect(view.createdBy).toBe(eventDates.createdBy)
    expect(view.modifiedBy).toBe(eventDates.modifiedBy)
    expect(view.isDeleted).toBe(eventDates.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = eventDates.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(eventDates.id)
    expect(view.datevalue).toBe(eventDates.datevalue)
    expect(view.createdBy).toBe(eventDates.createdBy)
    expect(view.modifiedBy).toBe(eventDates.modifiedBy)
    expect(view.isDeleted).toBe(eventDates.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
