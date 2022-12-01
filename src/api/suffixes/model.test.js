import { Suffixes } from '.'

let suffixes

beforeEach(async () => {
  suffixes = await Suffixes.create({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = suffixes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(suffixes.id)
    expect(view.name).toBe(suffixes.name)
    expect(view.createdBy).toBe(suffixes.createdBy)
    expect(view.modifiedBy).toBe(suffixes.modifiedBy)
    expect(view.isDeleted).toBe(suffixes.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = suffixes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(suffixes.id)
    expect(view.name).toBe(suffixes.name)
    expect(view.createdBy).toBe(suffixes.createdBy)
    expect(view.modifiedBy).toBe(suffixes.modifiedBy)
    expect(view.isDeleted).toBe(suffixes.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
