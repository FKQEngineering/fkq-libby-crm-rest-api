import { EventDate } from '.'

let eventDate

beforeEach(async () => {
  eventDate = await EventDate.create({ dateValue: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = eventDate.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(eventDate.id)
    expect(view.dateValue).toBe(eventDate.dateValue)
    expect(view.createddate).toBe(eventDate.createddate)
    expect(view.createdBy).toBe(eventDate.createdBy)
    expect(view.modifiedDate).toBe(eventDate.modifiedDate)
    expect(view.modifiedBy).toBe(eventDate.modifiedBy)
    expect(view.isDeleted).toBe(eventDate.isDeleted)
    expect(view.deleteComment).toBe(eventDate.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = eventDate.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(eventDate.id)
    expect(view.dateValue).toBe(eventDate.dateValue)
    expect(view.createddate).toBe(eventDate.createddate)
    expect(view.createdBy).toBe(eventDate.createdBy)
    expect(view.modifiedDate).toBe(eventDate.modifiedDate)
    expect(view.modifiedBy).toBe(eventDate.modifiedBy)
    expect(view.isDeleted).toBe(eventDate.isDeleted)
    expect(view.deleteComment).toBe(eventDate.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
