import { AddressName } from '.'

let addressName

beforeEach(async () => {
  addressName = await AddressName.create({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate.modifiedby: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = addressName.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(addressName.id)
    expect(view.name).toBe(addressName.name)
    expect(view.createddate).toBe(addressName.createddate)
    expect(view.createdBy).toBe(addressName.createdBy)
    expect(view.modifiedDate.modifiedby).toBe(addressName.modifiedDate.modifiedby)
    expect(view.isDeleted).toBe(addressName.isDeleted)
    expect(view.deleteComment).toBe(addressName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = addressName.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(addressName.id)
    expect(view.name).toBe(addressName.name)
    expect(view.createddate).toBe(addressName.createddate)
    expect(view.createdBy).toBe(addressName.createdBy)
    expect(view.modifiedDate.modifiedby).toBe(addressName.modifiedDate.modifiedby)
    expect(view.isDeleted).toBe(addressName.isDeleted)
    expect(view.deleteComment).toBe(addressName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
