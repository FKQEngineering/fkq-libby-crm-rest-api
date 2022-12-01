import { MaritalStatuses } from '.'

let maritalStatuses

beforeEach(async () => {
  maritalStatuses = await MaritalStatuses.create({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = maritalStatuses.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(maritalStatuses.id)
    expect(view.name).toBe(maritalStatuses.name)
    expect(view.createdBy).toBe(maritalStatuses.createdBy)
    expect(view.modifiedBy).toBe(maritalStatuses.modifiedBy)
    expect(view.isDeleted).toBe(maritalStatuses.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = maritalStatuses.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(maritalStatuses.id)
    expect(view.name).toBe(maritalStatuses.name)
    expect(view.createdBy).toBe(maritalStatuses.createdBy)
    expect(view.modifiedBy).toBe(maritalStatuses.modifiedBy)
    expect(view.isDeleted).toBe(maritalStatuses.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
