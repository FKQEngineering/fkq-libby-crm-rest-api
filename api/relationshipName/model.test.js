import { RelationshipName } from '.'

let relationshipName

beforeEach(async () => {
  relationshipName = await RelationshipName.create({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = relationshipName.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(relationshipName.id)
    expect(view.name).toBe(relationshipName.name)
    expect(view.createddate).toBe(relationshipName.createddate)
    expect(view.createdBy).toBe(relationshipName.createdBy)
    expect(view.modifiedDate).toBe(relationshipName.modifiedDate)
    expect(view.modifiedBy).toBe(relationshipName.modifiedBy)
    expect(view.isDeleted).toBe(relationshipName.isDeleted)
    expect(view.deleteComment).toBe(relationshipName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = relationshipName.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(relationshipName.id)
    expect(view.name).toBe(relationshipName.name)
    expect(view.createddate).toBe(relationshipName.createddate)
    expect(view.createdBy).toBe(relationshipName.createdBy)
    expect(view.modifiedDate).toBe(relationshipName.modifiedDate)
    expect(view.modifiedBy).toBe(relationshipName.modifiedBy)
    expect(view.isDeleted).toBe(relationshipName.isDeleted)
    expect(view.deleteComment).toBe(relationshipName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
