import { Emails } from '.'

let emails

beforeEach(async () => {
  emails = await Emails.create({ emailAddress: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = emails.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(emails.id)
    expect(view.emailAddress).toBe(emails.emailAddress)
    expect(view.note).toBe(emails.note)
    expect(view.createdBy).toBe(emails.createdBy)
    expect(view.modifiedBy).toBe(emails.modifiedBy)
    expect(view.isDeleted).toBe(emails.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = emails.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(emails.id)
    expect(view.emailAddress).toBe(emails.emailAddress)
    expect(view.note).toBe(emails.note)
    expect(view.createdBy).toBe(emails.createdBy)
    expect(view.modifiedBy).toBe(emails.modifiedBy)
    expect(view.isDeleted).toBe(emails.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
