import { Phones } from '.'

let phones

beforeEach(async () => {
  phones = await Phones.create({ phoneNumber: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = phones.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phones.id)
    expect(view.phoneNumber).toBe(phones.phoneNumber)
    expect(view.createdBy).toBe(phones.createdBy)
    expect(view.modifiedBy).toBe(phones.modifiedBy)
    expect(view.isDeleted).toBe(phones.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = phones.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phones.id)
    expect(view.phoneNumber).toBe(phones.phoneNumber)
    expect(view.createdBy).toBe(phones.createdBy)
    expect(view.modifiedBy).toBe(phones.modifiedBy)
    expect(view.isDeleted).toBe(phones.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
