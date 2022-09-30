import { Address } from '.'

let address

beforeEach(async () => {
  address = await Address.create({ street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test', isDefault: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = address.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(address.id)
    expect(view.street1).toBe(address.street1)
    expect(view.street2).toBe(address.street2)
    expect(view.city).toBe(address.city)
    expect(view.state).toBe(address.state)
    expect(view.zip).toBe(address.zip)
    expect(view.country).toBe(address.country)
    expect(view.note).toBe(address.note)
    expect(view.createddate).toBe(address.createddate)
    expect(view.createdBy).toBe(address.createdBy)
    expect(view.modifiedDate).toBe(address.modifiedDate)
    expect(view.modifiedBy).toBe(address.modifiedBy)
    expect(view.isDeleted).toBe(address.isDeleted)
    expect(view.deleteComment).toBe(address.deleteComment)
    expect(view.isDefault).toBe(address.isDefault)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = address.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(address.id)
    expect(view.street1).toBe(address.street1)
    expect(view.street2).toBe(address.street2)
    expect(view.city).toBe(address.city)
    expect(view.state).toBe(address.state)
    expect(view.zip).toBe(address.zip)
    expect(view.country).toBe(address.country)
    expect(view.note).toBe(address.note)
    expect(view.createddate).toBe(address.createddate)
    expect(view.createdBy).toBe(address.createdBy)
    expect(view.modifiedDate).toBe(address.modifiedDate)
    expect(view.modifiedBy).toBe(address.modifiedBy)
    expect(view.isDeleted).toBe(address.isDeleted)
    expect(view.deleteComment).toBe(address.deleteComment)
    expect(view.isDefault).toBe(address.isDefault)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
