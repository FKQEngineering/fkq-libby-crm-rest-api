import { Genders } from '.'

let genders

beforeEach(async () => {
  genders = await Genders.create({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = genders.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(genders.id)
    expect(view.name).toBe(genders.name)
    expect(view.createdBy).toBe(genders.createdBy)
    expect(view.modifiedBy).toBe(genders.modifiedBy)
    expect(view.isDeleted).toBe(genders.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = genders.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(genders.id)
    expect(view.name).toBe(genders.name)
    expect(view.createdBy).toBe(genders.createdBy)
    expect(view.modifiedBy).toBe(genders.modifiedBy)
    expect(view.isDeleted).toBe(genders.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
