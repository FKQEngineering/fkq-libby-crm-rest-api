import { Addresses } from '.'

let addresses

beforeEach(async () => {
  addresses = await Addresses.create({ name: 'test', street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', iDeleted: 'test', isDefault: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = addresses.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(addresses.id)
    expect(view.name).toBe(addresses.name)
    expect(view.street1).toBe(addresses.street1)
    expect(view.street2).toBe(addresses.street2)
    expect(view.city).toBe(addresses.city)
    expect(view.state).toBe(addresses.state)
    expect(view.zip).toBe(addresses.zip)
    expect(view.country).toBe(addresses.country)
    expect(view.note).toBe(addresses.note)
    expect(view.iDeleted).toBe(addresses.iDeleted)
    expect(view.isDefault).toBe(addresses.isDefault)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = addresses.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(addresses.id)
    expect(view.name).toBe(addresses.name)
    expect(view.street1).toBe(addresses.street1)
    expect(view.street2).toBe(addresses.street2)
    expect(view.city).toBe(addresses.city)
    expect(view.state).toBe(addresses.state)
    expect(view.zip).toBe(addresses.zip)
    expect(view.country).toBe(addresses.country)
    expect(view.note).toBe(addresses.note)
    expect(view.iDeleted).toBe(addresses.iDeleted)
    expect(view.isDefault).toBe(addresses.isDefault)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
