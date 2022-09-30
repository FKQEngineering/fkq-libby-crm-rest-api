import { Email } from '.'

let email

beforeEach(async () => {
  email = await Email.create({ emailAddress: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = email.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(email.id)
    expect(view.emailAddress).toBe(email.emailAddress)
    expect(view.createddate).toBe(email.createddate)
    expect(view.createdBy).toBe(email.createdBy)
    expect(view.modifiedDate).toBe(email.modifiedDate)
    expect(view.modifiedBy).toBe(email.modifiedBy)
    expect(view.isDeleted).toBe(email.isDeleted)
    expect(view.deleteComment).toBe(email.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = email.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(email.id)
    expect(view.emailAddress).toBe(email.emailAddress)
    expect(view.createddate).toBe(email.createddate)
    expect(view.createdBy).toBe(email.createdBy)
    expect(view.modifiedDate).toBe(email.modifiedDate)
    expect(view.modifiedBy).toBe(email.modifiedBy)
    expect(view.isDeleted).toBe(email.isDeleted)
    expect(view.deleteComment).toBe(email.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
