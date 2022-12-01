import { CardListTypes } from '.'

let cardListTypes

beforeEach(async () => {
  cardListTypes = await CardListTypes.create({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cardListTypes.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardListTypes.id)
    expect(view.name).toBe(cardListTypes.name)
    expect(view.createdBy).toBe(cardListTypes.createdBy)
    expect(view.modifiedBy).toBe(cardListTypes.modifiedBy)
    expect(view.isDeleted).toBe(cardListTypes.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cardListTypes.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cardListTypes.id)
    expect(view.name).toBe(cardListTypes.name)
    expect(view.createdBy).toBe(cardListTypes.createdBy)
    expect(view.modifiedBy).toBe(cardListTypes.modifiedBy)
    expect(view.isDeleted).toBe(cardListTypes.isDeleted)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
