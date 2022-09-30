import { CardListType } from '.'

let cardListType

beforeEach(async () => {
  cardListType = await CardListType.create({ name: 'test', createDate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedby: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cardListType.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardListType.id)
    expect(view.name).toBe(cardListType.name)
    expect(view.createDate).toBe(cardListType.createDate)
    expect(view.createdBy).toBe(cardListType.createdBy)
    expect(view.modifiedDate).toBe(cardListType.modifiedDate)
    expect(view.modifiedby).toBe(cardListType.modifiedby)
    expect(view.isDeleted).toBe(cardListType.isDeleted)
    expect(view.deleteComment).toBe(cardListType.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cardListType.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardListType.id)
    expect(view.name).toBe(cardListType.name)
    expect(view.createDate).toBe(cardListType.createDate)
    expect(view.createdBy).toBe(cardListType.createdBy)
    expect(view.modifiedDate).toBe(cardListType.modifiedDate)
    expect(view.modifiedby).toBe(cardListType.modifiedby)
    expect(view.isDeleted).toBe(cardListType.isDeleted)
    expect(view.deleteComment).toBe(cardListType.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
