import { Salutation } from '.'

let salutation

beforeEach(async () => {
  salutation = await Salutation.create({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = salutation.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salutation.id)
    expect(view.name).toBe(salutation.name)
    expect(view.createddate).toBe(salutation.createddate)
    expect(view.createdBy).toBe(salutation.createdBy)
    expect(view.modifiedDate).toBe(salutation.modifiedDate)
    expect(view.modifiedBy).toBe(salutation.modifiedBy)
    expect(view.isDeleted).toBe(salutation.isDeleted)
    expect(view.deleteComment).toBe(salutation.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = salutation.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salutation.id)
    expect(view.name).toBe(salutation.name)
    expect(view.createddate).toBe(salutation.createddate)
    expect(view.createdBy).toBe(salutation.createdBy)
    expect(view.modifiedDate).toBe(salutation.modifiedDate)
    expect(view.modifiedBy).toBe(salutation.modifiedBy)
    expect(view.isDeleted).toBe(salutation.isDeleted)
    expect(view.deleteComment).toBe(salutation.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
