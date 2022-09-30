import { Relationship } from '.'

let relationship

beforeEach(async () => {
  relationship = await Relationship.create({ createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
})

describe('view', () => {
  it('returns simple view', () => {
    const view = relationship.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(relationship.id)
    expect(view.createddate).toBe(relationship.createddate)
    expect(view.createdBy).toBe(relationship.createdBy)
    expect(view.modifiedDate).toBe(relationship.modifiedDate)
    expect(view.modifiedBy).toBe(relationship.modifiedBy)
    expect(view.isDeleted).toBe(relationship.isDeleted)
    expect(view.deleteComment).toBe(relationship.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = relationship.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(relationship.id)
    expect(view.createddate).toBe(relationship.createddate)
    expect(view.createdBy).toBe(relationship.createdBy)
    expect(view.modifiedDate).toBe(relationship.modifiedDate)
    expect(view.modifiedBy).toBe(relationship.modifiedBy)
    expect(view.isDeleted).toBe(relationship.isDeleted)
    expect(view.deleteComment).toBe(relationship.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
