import { Contacts } from '.'

let contacts

beforeEach(async () => {
  contacts = await Contacts.create({ alt_address_city: 'test', alt_address_country: 'test', alt_address_postalcode: 'test', alt_address_state: 'test', alt_address_street: 'test', alt_address_street_2: 'test', birthdate: 'test', child_1_birthdate: 'test', child_1_name: 'test', child_2_birthdate: 'test', child_2_name: 'test', child_3_birthdate: 'test', child_3_name: 'test', child_4_birthdate: 'test', child_4_name: 'test', child_5_birthdate: 'test', child_5_name: 'test', child_6_birthdate: 'test', child_6_name: 'test', company: 'test', date_entered: 'test', date_modified: 'test', deleted: 'test', department: 'test', description: 'test', email1: 'test', email2: 'test', first_name: 'test', fkq_holiday_card_lists: 'test', hire_date: 'test', id: 'test', last_name: 'test', mailing_label_home: 'test', mailing_label_office: 'test', marital_status: 'test', marriage_date: 'test', phone_fax: 'test', phone_home: 'test', phone_mobile: 'test', phone_other: 'test', phone_work: 'test', primary_address_city: 'test', primary_address_country: 'test', primary_address_postalcode: 'test', primary_address_state: 'test', primary_address_street: 'test', primary_address_street_2: 'test', salutation: 'test', spouse_birthdate: 'test', spouse_name: 'test', title: 'test', vip_card_lists: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = contacts.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contacts.id)
    expect(view.alt_address_city).toBe(contacts.alt_address_city)
    expect(view.alt_address_country).toBe(contacts.alt_address_country)
    expect(view.alt_address_postalcode).toBe(contacts.alt_address_postalcode)
    expect(view.alt_address_state).toBe(contacts.alt_address_state)
    expect(view.alt_address_street).toBe(contacts.alt_address_street)
    expect(view.alt_address_street_2).toBe(contacts.alt_address_street_2)
    expect(view.birthdate).toBe(contacts.birthdate)
    expect(view.child_1_birthdate).toBe(contacts.child_1_birthdate)
    expect(view.child_1_name).toBe(contacts.child_1_name)
    expect(view.child_2_birthdate).toBe(contacts.child_2_birthdate)
    expect(view.child_2_name).toBe(contacts.child_2_name)
    expect(view.child_3_birthdate).toBe(contacts.child_3_birthdate)
    expect(view.child_3_name).toBe(contacts.child_3_name)
    expect(view.child_4_birthdate).toBe(contacts.child_4_birthdate)
    expect(view.child_4_name).toBe(contacts.child_4_name)
    expect(view.child_5_birthdate).toBe(contacts.child_5_birthdate)
    expect(view.child_5_name).toBe(contacts.child_5_name)
    expect(view.child_6_birthdate).toBe(contacts.child_6_birthdate)
    expect(view.child_6_name).toBe(contacts.child_6_name)
    expect(view.company).toBe(contacts.company)
    expect(view.date_entered).toBe(contacts.date_entered)
    expect(view.date_modified).toBe(contacts.date_modified)
    expect(view.deleted).toBe(contacts.deleted)
    expect(view.department).toBe(contacts.department)
    expect(view.description).toBe(contacts.description)
    expect(view.email1).toBe(contacts.email1)
    expect(view.email2).toBe(contacts.email2)
    expect(view.first_name).toBe(contacts.first_name)
    expect(view.fkq_holiday_card_lists).toBe(contacts.fkq_holiday_card_lists)
    expect(view.hire_date).toBe(contacts.hire_date)
    expect(view.id).toBe(contacts.id)
    expect(view.last_name).toBe(contacts.last_name)
    expect(view.mailing_label_home).toBe(contacts.mailing_label_home)
    expect(view.mailing_label_office).toBe(contacts.mailing_label_office)
    expect(view.marital_status).toBe(contacts.marital_status)
    expect(view.marriage_date).toBe(contacts.marriage_date)
    expect(view.phone_fax).toBe(contacts.phone_fax)
    expect(view.phone_home).toBe(contacts.phone_home)
    expect(view.phone_mobile).toBe(contacts.phone_mobile)
    expect(view.phone_other).toBe(contacts.phone_other)
    expect(view.phone_work).toBe(contacts.phone_work)
    expect(view.primary_address_city).toBe(contacts.primary_address_city)
    expect(view.primary_address_country).toBe(contacts.primary_address_country)
    expect(view.primary_address_postalcode).toBe(contacts.primary_address_postalcode)
    expect(view.primary_address_state).toBe(contacts.primary_address_state)
    expect(view.primary_address_street).toBe(contacts.primary_address_street)
    expect(view.primary_address_street_2).toBe(contacts.primary_address_street_2)
    expect(view.salutation).toBe(contacts.salutation)
    expect(view.spouse_birthdate).toBe(contacts.spouse_birthdate)
    expect(view.spouse_name).toBe(contacts.spouse_name)
    expect(view.title).toBe(contacts.title)
    expect(view.vip_card_lists).toBe(contacts.vip_card_lists)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = contacts.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contacts.id)
    expect(view.alt_address_city).toBe(contacts.alt_address_city)
    expect(view.alt_address_country).toBe(contacts.alt_address_country)
    expect(view.alt_address_postalcode).toBe(contacts.alt_address_postalcode)
    expect(view.alt_address_state).toBe(contacts.alt_address_state)
    expect(view.alt_address_street).toBe(contacts.alt_address_street)
    expect(view.alt_address_street_2).toBe(contacts.alt_address_street_2)
    expect(view.birthdate).toBe(contacts.birthdate)
    expect(view.child_1_birthdate).toBe(contacts.child_1_birthdate)
    expect(view.child_1_name).toBe(contacts.child_1_name)
    expect(view.child_2_birthdate).toBe(contacts.child_2_birthdate)
    expect(view.child_2_name).toBe(contacts.child_2_name)
    expect(view.child_3_birthdate).toBe(contacts.child_3_birthdate)
    expect(view.child_3_name).toBe(contacts.child_3_name)
    expect(view.child_4_birthdate).toBe(contacts.child_4_birthdate)
    expect(view.child_4_name).toBe(contacts.child_4_name)
    expect(view.child_5_birthdate).toBe(contacts.child_5_birthdate)
    expect(view.child_5_name).toBe(contacts.child_5_name)
    expect(view.child_6_birthdate).toBe(contacts.child_6_birthdate)
    expect(view.child_6_name).toBe(contacts.child_6_name)
    expect(view.company).toBe(contacts.company)
    expect(view.date_entered).toBe(contacts.date_entered)
    expect(view.date_modified).toBe(contacts.date_modified)
    expect(view.deleted).toBe(contacts.deleted)
    expect(view.department).toBe(contacts.department)
    expect(view.description).toBe(contacts.description)
    expect(view.email1).toBe(contacts.email1)
    expect(view.email2).toBe(contacts.email2)
    expect(view.first_name).toBe(contacts.first_name)
    expect(view.fkq_holiday_card_lists).toBe(contacts.fkq_holiday_card_lists)
    expect(view.hire_date).toBe(contacts.hire_date)
    expect(view.id).toBe(contacts.id)
    expect(view.last_name).toBe(contacts.last_name)
    expect(view.mailing_label_home).toBe(contacts.mailing_label_home)
    expect(view.mailing_label_office).toBe(contacts.mailing_label_office)
    expect(view.marital_status).toBe(contacts.marital_status)
    expect(view.marriage_date).toBe(contacts.marriage_date)
    expect(view.phone_fax).toBe(contacts.phone_fax)
    expect(view.phone_home).toBe(contacts.phone_home)
    expect(view.phone_mobile).toBe(contacts.phone_mobile)
    expect(view.phone_other).toBe(contacts.phone_other)
    expect(view.phone_work).toBe(contacts.phone_work)
    expect(view.primary_address_city).toBe(contacts.primary_address_city)
    expect(view.primary_address_country).toBe(contacts.primary_address_country)
    expect(view.primary_address_postalcode).toBe(contacts.primary_address_postalcode)
    expect(view.primary_address_state).toBe(contacts.primary_address_state)
    expect(view.primary_address_street).toBe(contacts.primary_address_street)
    expect(view.primary_address_street_2).toBe(contacts.primary_address_street_2)
    expect(view.salutation).toBe(contacts.salutation)
    expect(view.spouse_birthdate).toBe(contacts.spouse_birthdate)
    expect(view.spouse_name).toBe(contacts.spouse_name)
    expect(view.title).toBe(contacts.title)
    expect(view.vip_card_lists).toBe(contacts.vip_card_lists)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})