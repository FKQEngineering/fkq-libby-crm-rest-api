import { Contacts } from '.'

let contacts

beforeEach(async () => {
  contacts = await Contacts.create({ firstName: 'test', middleName: 'test', lastName: 'test', title: 'test', department: 'test', hireDate: 'test', note: 'test', imageUrl: 'test', defaultMailingAddress: 'test', createdBy: 'test', modifiedBy: 'test', isHidden: 'test', isDeleted: 'test', defaultEmailAddress: 'test', defaultPhoneNumber: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = contacts.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contacts.id)
    expect(view.firstName).toBe(contacts.firstName)
    expect(view.middleName).toBe(contacts.middleName)
    expect(view.lastName).toBe(contacts.lastName)
    expect(view.title).toBe(contacts.title)
    expect(view.department).toBe(contacts.department)
    expect(view.hireDate).toBe(contacts.hireDate)
    expect(view.note).toBe(contacts.note)
    expect(view.imageUrl).toBe(contacts.imageUrl)
    expect(view.defaultMailingAddress).toBe(contacts.defaultMailingAddress)
    expect(view.createdBy).toBe(contacts.createdBy)
    expect(view.modifiedBy).toBe(contacts.modifiedBy)
    expect(view.isHidden).toBe(contacts.isHidden)
    expect(view.isDeleted).toBe(contacts.isDeleted)
    expect(view.defaultEmailAddress).toBe(contacts.defaultEmailAddress)
    expect(view.defaultPhoneNumber).toBe(contacts.defaultPhoneNumber)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = contacts.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contacts.id)
    expect(view.firstName).toBe(contacts.firstName)
    expect(view.middleName).toBe(contacts.middleName)
    expect(view.lastName).toBe(contacts.lastName)
    expect(view.title).toBe(contacts.title)
    expect(view.department).toBe(contacts.department)
    expect(view.hireDate).toBe(contacts.hireDate)
    expect(view.note).toBe(contacts.note)
    expect(view.imageUrl).toBe(contacts.imageUrl)
    expect(view.defaultMailingAddress).toBe(contacts.defaultMailingAddress)
    expect(view.createdBy).toBe(contacts.createdBy)
    expect(view.modifiedBy).toBe(contacts.modifiedBy)
    expect(view.isHidden).toBe(contacts.isHidden)
    expect(view.isDeleted).toBe(contacts.isDeleted)
    expect(view.defaultEmailAddress).toBe(contacts.defaultEmailAddress)
    expect(view.defaultPhoneNumber).toBe(contacts.defaultPhoneNumber)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
