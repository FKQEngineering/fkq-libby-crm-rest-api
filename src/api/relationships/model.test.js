import { Relationships } from '.'

let relationships

beforeEach(async () => {
  relationships = await Relationships.create({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = relationships.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(relationships.id)
    expect(view.name).toBe(relationships.name)
    expect(view.createdBy).toBe(relationships.createdBy)
    expect(view.modifiedBy).toBe(relationships.modifiedBy)
    expect(view.isDeleted).toBe(relationships.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = relationships.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(relationships.id)
    expect(view.name).toBe(relationships.name)
    expect(view.createdBy).toBe(relationships.createdBy)
    expect(view.modifiedBy).toBe(relationships.modifiedBy)
    expect(view.isDeleted).toBe(relationships.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
