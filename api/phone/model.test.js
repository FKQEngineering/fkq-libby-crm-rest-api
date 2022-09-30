import { Phone } from '.'

let phone

beforeEach(async () => {
  phone = await Phone.create({phoneNumber: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
})

describe('view', () => {
  it('returns simple view', () => {
    const view = phone.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phone.id)
    expect(view.phoneNumber).toBe(phone.phoneNumber)
    expect(view.createddate).toBe(addressName.createddate)
    expect(view.createdBy).toBe(addressName.createdBy)
    expect(view.modifiedDate).toBe(addressName.modifiedDate)
    expect(view.modifiedBy).toBe(addressName.modifiedBy)
    expect(view.isDeleted).toBe(addressName.isDeleted)
    expect(view.deleteComment).toBe(addressName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = phone.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phone.id)
    expect(view.phoneNumber).toBe(phone.phoneNumber)
    expect(view.createddate).toBe(addressName.createddate)
    expect(view.createdBy).toBe(addressName.createdBy)
    expect(view.modifiedDate).toBe(addressName.modifiedDate)
    expect(view.modifiedBy).toBe(addressName.modifiedBy)
    expect(view.isDeleted).toBe(addressName.isDeleted)
    expect(view.deleteComment).toBe(addressName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
