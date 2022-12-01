import { CardLists } from '.'

let cardLists

beforeEach(async () => {
  cardLists = await CardLists.create({ name: 'test', quantity: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cardLists.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardLists.id)
    expect(view.name).toBe(cardLists.name)
    expect(view.quantity).toBe(cardLists.quantity)
    expect(view.createdBy).toBe(cardLists.createdBy)
    expect(view.modifiedBy).toBe(cardLists.modifiedBy)
    expect(view.isDeleted).toBe(cardLists.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cardLists.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardLists.id)
    expect(view.name).toBe(cardLists.name)
    expect(view.quantity).toBe(cardLists.quantity)
    expect(view.createdBy).toBe(cardLists.createdBy)
    expect(view.modifiedBy).toBe(cardLists.modifiedBy)
    expect(view.isDeleted).toBe(cardLists.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
