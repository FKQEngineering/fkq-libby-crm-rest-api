import { Suffix } from '.'

let suffix

beforeEach(async () => {
  suffix = await Suffix.create({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = suffix.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(suffix.id)
    expect(view.name).toBe(suffix.name)
    expect(view.createddate).toBe(suffix.createddate)
    expect(view.createdBy).toBe(suffix.createdBy)
    expect(view.modifiedDate).toBe(suffix.modifiedDate)
    expect(view.modifiedBy).toBe(suffix.modifiedBy)
    expect(view.isDeleted).toBe(suffix.isDeleted)
    expect(view.deleteComment).toBe(suffix.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = suffix.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(suffix.id)
    expect(view.name).toBe(suffix.name)
    expect(view.createddate).toBe(suffix.createddate)
    expect(view.createdBy).toBe(suffix.createdBy)
    expect(view.modifiedDate).toBe(suffix.modifiedDate)
    expect(view.modifiedBy).toBe(suffix.modifiedBy)
    expect(view.isDeleted).toBe(suffix.isDeleted)
    expect(view.deleteComment).toBe(suffix.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
