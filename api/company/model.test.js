import { Company } from '.'

let company

beforeEach(async () => {
  company = await Company.create({ name: 'test', address: 'test', note: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = company.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(company.id)
    expect(view.name).toBe(company.name)
    expect(view.address).toBe(company.address)
    expect(view.note).toBe(company.note)
    expect(view.createddate).toBe(company.createddate)
    expect(view.createdBy).toBe(company.createdBy)
    expect(view.modifiedDate).toBe(company.modifiedDate)
    expect(view.modifiedBy).toBe(company.modifiedBy)
    expect(view.isDeleted).toBe(company.isDeleted)
    expect(view.deleteComment).toBe(company.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = company.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(company.id)
    expect(view.name).toBe(company.name)
    expect(view.address).toBe(company.address)
    expect(view.note).toBe(company.note)
    expect(view.createddate).toBe(company.createddate)
    expect(view.createdBy).toBe(company.createdBy)
    expect(view.modifiedDate).toBe(company.modifiedDate)
    expect(view.modifiedBy).toBe(company.modifiedBy)
    expect(view.isDeleted).toBe(company.isDeleted)
    expect(view.deleteComment).toBe(company.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
