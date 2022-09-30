import { MaritalStatus } from '.'

let maritalStatus

beforeEach(async () => {
  maritalStatus = await MaritalStatus.create({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = maritalStatus.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(maritalStatus.id)
    expect(view.name).toBe(maritalStatus.name)
    expect(view.createddate).toBe(maritalStatus.createddate)
    expect(view.createdBy).toBe(maritalStatus.createdBy)
    expect(view.modifiedDate).toBe(maritalStatus.modifiedDate)
    expect(view.modifiedBy).toBe(maritalStatus.modifiedBy)
    expect(view.isDeleted).toBe(maritalStatus.isDeleted)
    expect(view.deleteComment).toBe(maritalStatus.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = maritalStatus.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(maritalStatus.id)
    expect(view.name).toBe(maritalStatus.name)
    expect(view.createddate).toBe(maritalStatus.createddate)
    expect(view.createdBy).toBe(maritalStatus.createdBy)
    expect(view.modifiedDate).toBe(maritalStatus.modifiedDate)
    expect(view.modifiedBy).toBe(maritalStatus.modifiedBy)
    expect(view.isDeleted).toBe(maritalStatus.isDeleted)
    expect(view.deleteComment).toBe(maritalStatus.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
