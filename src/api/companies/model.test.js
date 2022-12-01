import { Companies } from '.'

let companies

beforeEach(async () => {
  companies = await Companies.create({ name: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = companies.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(companies.id)
    expect(view.name).toBe(companies.name)
    expect(view.note).toBe(companies.note)
    expect(view.createdBy).toBe(companies.createdBy)
    expect(view.modifiedBy).toBe(companies.modifiedBy)
    expect(view.isDeleted).toBe(companies.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = companies.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(companies.id)
    expect(view.name).toBe(companies.name)
    expect(view.note).toBe(companies.note)
    expect(view.createdBy).toBe(companies.createdBy)
    expect(view.modifiedBy).toBe(companies.modifiedBy)
    expect(view.isDeleted).toBe(companies.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
