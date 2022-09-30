import { DateName } from '.'

let dateName

beforeEach(async () => {
  dateName = await DateName.create({ name: 'test', name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = dateName.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dateName.id)
    expect(view.name).toBe(dateName.name)
    expect(view.createddate).toBe(dateName.createddate)
    expect(view.createdBy).toBe(dateName.createdBy)
    expect(view.modifiedDate).toBe(dateName.modifiedDate)
    expect(view.modifiedBy).toBe(dateName.modifiedBy)
    expect(view.isDeleted).toBe(dateName.isDeleted)
    expect(view.deleteComment).toBe(dateName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = dateName.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(dateName.id)
    expect(view.name).toBe(dateName.name)
    expect(view.createddate).toBe(dateName.createddate)
    expect(view.createdBy).toBe(dateName.createdBy)
    expect(view.modifiedDate).toBe(dateName.modifiedDate)
    expect(view.modifiedBy).toBe(dateName.modifiedBy)
    expect(view.isDeleted).toBe(dateName.isDeleted)
    expect(view.deleteComment).toBe(dateName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
