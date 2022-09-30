import { PhoneName } from '.'

let phoneName

beforeEach(async () => {
  phoneName = await PhoneName.create({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = phoneName.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phoneName.id)
    expect(view.name).toBe(phoneName.name)
    expect(view.createddate).toBe(phoneName.createddate)
    expect(view.createdBy).toBe(phoneName.createdBy)
    expect(view.modifiedDate).toBe(phoneName.modifiedDate)
    expect(view.modifiedBy).toBe(phoneName.modifiedBy)
    expect(view.isDeleted).toBe(phoneName.isDeleted)
    expect(view.deleteComment).toBe(phoneName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = phoneName.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(phoneName.id)
    expect(view.name).toBe(phoneName.name)
    expect(view.createddate).toBe(phoneName.createddate)
    expect(view.createdBy).toBe(phoneName.createdBy)
    expect(view.modifiedDate).toBe(phoneName.modifiedDate)
    expect(view.modifiedBy).toBe(phoneName.modifiedBy)
    expect(view.isDeleted).toBe(phoneName.isDeleted)
    expect(view.deleteComment).toBe(phoneName.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
