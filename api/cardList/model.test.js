import { CardList } from '.'

let cardList

beforeEach(async () => {
  cardList = await CardList.create({ name: 'test', quantity: 'test', cardListType: 'test', cardListTypeId: 'test', createDate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cardList.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardList.id)
    expect(view.name).toBe(cardList.name)
    expect(view.quantity).toBe(cardList.quantity)
    expect(view.cardListType).toBe(cardList.cardListType)
    expect(view.cardListTypeId).toBe(cardList.cardListTypeId)
    expect(view.createDate).toBe(cardList.createDate)
    expect(view.createdBy).toBe(cardList.createdBy)
    expect(view.modifiedDate).toBe(cardList.modifiedDate)
    expect(view.modifiedBy).toBe(cardList.modifiedBy)
    expect(view.isDeleted).toBe(cardList.isDeleted)
    expect(view.deleteComment).toBe(cardList.deleteComment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cardList.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardList.id)
    expect(view.name).toBe(cardList.name)
    expect(view.quantity).toBe(cardList.quantity)
    expect(view.cardListType).toBe(cardList.cardListType)
    expect(view.cardListTypeId).toBe(cardList.cardListTypeId)
    expect(view.createDate).toBe(cardList.createDate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
