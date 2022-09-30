import { Gender } from '.'

let gender

beforeEach(async () => {
  gender = await Gender.create({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = gender.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gender.id)
    expect(view.name).toBe(gender.name)
    expect(view.createddate).toBe(gender.createddate)
    expect(view.createdBy).toBe(gender.createdBy)
    expect(view.modifiedDate).toBe(gender.modifiedDate)
    expect(view.modifiedBy).toBe(gender.modifiedBy)
    expect(view.isDeleted).toBe(gender.isDeleted)
    expect(view.deleteComment).toBe(gender.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = gender.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(gender.id)
    expect(view.name).toBe(gender.name)
    expect(view.createddate).toBe(gender.createddate)
    expect(view.createdBy).toBe(gender.createdBy)
    expect(view.modifiedDate).toBe(gender.modifiedDate)
    expect(view.modifiedBy).toBe(gender.modifiedBy)
    expect(view.isDeleted).toBe(gender.isDeleted)
    expect(view.deleteComment).toBe(gender.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
