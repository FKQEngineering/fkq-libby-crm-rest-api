import { Salutations } from '.'

let salutations

beforeEach(async () => {
  salutations = await Salutations.create({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = salutations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salutations.id)
    expect(view.name).toBe(salutations.name)
    expect(view.createdBy).toBe(salutations.createdBy)
    expect(view.modifiedBy).toBe(salutations.modifiedBy)
    expect(view.isDeleted).toBe(salutations.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = salutations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salutations.id)
    expect(view.name).toBe(salutations.name)
    expect(view.createdBy).toBe(salutations.createdBy)
    expect(view.modifiedBy).toBe(salutations.modifiedBy)
    expect(view.isDeleted).toBe(salutations.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
