import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import Contacts, { schema } from './model'
export Contacts, { schema } from './model'


const router = new Router()
const { alt_address_city, alt_address_country, alt_address_postalcode, alt_address_state, alt_address_street, alt_address_street_2, birthdate, child_1_birthdate, child_1_name, child_2_birthdate, child_2_name, child_3_birthdate, child_3_name, child_4_birthdate, child_4_name, child_5_birthdate, child_5_name, child_6_birthdate, child_6_name, company, date_entered, date_modified, deleted, department, description, email1, email2, first_name, fkq_holiday_card_lists, hire_date, id, last_name, mailing_label_home, mailing_label_office, marital_status, marriage_date, phone_fax, phone_home, phone_mobile, phone_other, phone_work, primary_address_city, primary_address_country, primary_address_postalcode, primary_address_state, primary_address_street, primary_address_street_2, salutation, spouse_birthdate, spouse_name, title, vip_card_lists } = schema.tree

/**
 * @api {post} /contacts Create contacts
 * @apiName CreateContacts
 * @apiGroup Contacts
 * @apiParam alt_address_city Contacts's alt_address_city.
 * @apiParam alt_address_country Contacts's alt_address_country.
 * @apiParam alt_address_postalcode Contacts's alt_address_postalcode.
 * @apiParam alt_address_state Contacts's alt_address_state.
 * @apiParam alt_address_street Contacts's alt_address_street.
 * @apiParam alt_address_street_2 Contacts's alt_address_street_2.
 * @apiParam birthdate Contacts's birthdate.
 * @apiParam child_1_birthdate Contacts's child_1_birthdate.
 * @apiParam child_1_name Contacts's child_1_name.
 * @apiParam child_2_birthdate Contacts's child_2_birthdate.
 * @apiParam child_2_name Contacts's child_2_name.
 * @apiParam child_3_birthdate Contacts's child_3_birthdate.
 * @apiParam child_3_name Contacts's child_3_name.
 * @apiParam child_4_birthdate Contacts's child_4_birthdate.
 * @apiParam child_4_name Contacts's child_4_name.
 * @apiParam child_5_birthdate Contacts's child_5_birthdate.
 * @apiParam child_5_name Contacts's child_5_name.
 * @apiParam child_6_birthdate Contacts's child_6_birthdate.
 * @apiParam child_6_name Contacts's child_6_name.
 * @apiParam company Contacts's company.
 * @apiParam date_entered Contacts's date_entered.
 * @apiParam date_modified Contacts's date_modified.
 * @apiParam deleted Contacts's deleted.
 * @apiParam department Contacts's department.
 * @apiParam description Contacts's description.
 * @apiParam email1 Contacts's email1.
 * @apiParam email2 Contacts's email2.
 * @apiParam first_name Contacts's first_name.
 * @apiParam fkq_holiday_card_lists Contacts's fkq_holiday_card_lists.
 * @apiParam hire_date Contacts's hire_date.
 * @apiParam id Contacts's id.
 * @apiParam last_name Contacts's last_name.
 * @apiParam mailing_label_home Contacts's mailing_label_home.
 * @apiParam mailing_label_office Contacts's mailing_label_office.
 * @apiParam marital_status Contacts's marital_status.
 * @apiParam marriage_date Contacts's marriage_date.
 * @apiParam phone_fax Contacts's phone_fax.
 * @apiParam phone_home Contacts's phone_home.
 * @apiParam phone_mobile Contacts's phone_mobile.
 * @apiParam phone_other Contacts's phone_other.
 * @apiParam phone_work Contacts's phone_work.
 * @apiParam primary_address_city Contacts's primary_address_city.
 * @apiParam primary_address_country Contacts's primary_address_country.
 * @apiParam primary_address_postalcode Contacts's primary_address_postalcode.
 * @apiParam primary_address_state Contacts's primary_address_state.
 * @apiParam primary_address_street Contacts's primary_address_street.
 * @apiParam primary_address_street_2 Contacts's primary_address_street_2.
 * @apiParam salutation Contacts's salutation.
 * @apiParam spouse_birthdate Contacts's spouse_birthdate.
 * @apiParam spouse_name Contacts's spouse_name.
 * @apiParam title Contacts's title.
 * @apiParam vip_card_lists Contacts's vip_card_lists.
 * @apiSuccess {Object} contacts Contacts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contacts not found.
 */
router.post('/', create);
// router.post('/',
//   body({ alt_address_city, alt_address_country, alt_address_postalcode, alt_address_state, alt_address_street, alt_address_street_2, birthdate, child_1_birthdate, child_1_name, child_2_birthdate, child_2_name, child_3_birthdate, child_3_name, child_4_birthdate, child_4_name, child_5_birthdate, child_5_name, child_6_birthdate, child_6_name, company, date_entered, date_modified, deleted, department, description, email1, email2, first_name, fkq_holiday_card_lists, hire_date, id, last_name, mailing_label_home, mailing_label_office, marital_status, marriage_date, phone_fax, phone_home, phone_mobile, phone_other, phone_work, primary_address_city, primary_address_country, primary_address_postalcode, primary_address_state, primary_address_street, primary_address_street_2, salutation, spouse_birthdate, spouse_name, title, vip_card_lists }),
//   create)

/**
 * @api {get} /contacts Retrieve contacts
 * @apiName RetrieveContacts
 * @apiGroup Contacts
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of contacts.
 * @apiSuccess {Object[]} rows List of contacts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /contacts/:id Retrieve contacts
 * @apiName RetrieveContacts
 * @apiGroup Contacts
 * @apiSuccess {Object} contacts Contacts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contacts not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /contacts/:id Update contacts
 * @apiName UpdateContacts
 * @apiGroup Contacts
 * @apiParam alt_address_city Contacts's alt_address_city.
 * @apiParam alt_address_country Contacts's alt_address_country.
 * @apiParam alt_address_postalcode Contacts's alt_address_postalcode.
 * @apiParam alt_address_state Contacts's alt_address_state.
 * @apiParam alt_address_street Contacts's alt_address_street.
 * @apiParam alt_address_street_2 Contacts's alt_address_street_2.
 * @apiParam birthdate Contacts's birthdate.
 * @apiParam child_1_birthdate Contacts's child_1_birthdate.
 * @apiParam child_1_name Contacts's child_1_name.
 * @apiParam child_2_birthdate Contacts's child_2_birthdate.
 * @apiParam child_2_name Contacts's child_2_name.
 * @apiParam child_3_birthdate Contacts's child_3_birthdate.
 * @apiParam child_3_name Contacts's child_3_name.
 * @apiParam child_4_birthdate Contacts's child_4_birthdate.
 * @apiParam child_4_name Contacts's child_4_name.
 * @apiParam child_5_birthdate Contacts's child_5_birthdate.
 * @apiParam child_5_name Contacts's child_5_name.
 * @apiParam child_6_birthdate Contacts's child_6_birthdate.
 * @apiParam child_6_name Contacts's child_6_name.
 * @apiParam company Contacts's company.
 * @apiParam date_entered Contacts's date_entered.
 * @apiParam date_modified Contacts's date_modified.
 * @apiParam deleted Contacts's deleted.
 * @apiParam department Contacts's department.
 * @apiParam description Contacts's description.
 * @apiParam email1 Contacts's email1.
 * @apiParam email2 Contacts's email2.
 * @apiParam first_name Contacts's first_name.
 * @apiParam fkq_holiday_card_lists Contacts's fkq_holiday_card_lists.
 * @apiParam hire_date Contacts's hire_date.
 * @apiParam id Contacts's id.
 * @apiParam last_name Contacts's last_name.
 * @apiParam mailing_label_home Contacts's mailing_label_home.
 * @apiParam mailing_label_office Contacts's mailing_label_office.
 * @apiParam marital_status Contacts's marital_status.
 * @apiParam marriage_date Contacts's marriage_date.
 * @apiParam phone_fax Contacts's phone_fax.
 * @apiParam phone_home Contacts's phone_home.
 * @apiParam phone_mobile Contacts's phone_mobile.
 * @apiParam phone_other Contacts's phone_other.
 * @apiParam phone_work Contacts's phone_work.
 * @apiParam primary_address_city Contacts's primary_address_city.
 * @apiParam primary_address_country Contacts's primary_address_country.
 * @apiParam primary_address_postalcode Contacts's primary_address_postalcode.
 * @apiParam primary_address_state Contacts's primary_address_state.
 * @apiParam primary_address_street Contacts's primary_address_street.
 * @apiParam primary_address_street_2 Contacts's primary_address_street_2.
 * @apiParam salutation Contacts's salutation.
 * @apiParam spouse_birthdate Contacts's spouse_birthdate.
 * @apiParam spouse_name Contacts's spouse_name.
 * @apiParam title Contacts's title.
 * @apiParam vip_card_lists Contacts's vip_card_lists.
 * @apiSuccess {Object} contacts Contacts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contacts not found.
 */
router.put('/:id',
  body({ alt_address_city, alt_address_country, alt_address_postalcode, alt_address_state, alt_address_street, alt_address_street_2, birthdate, child_1_birthdate, child_1_name, child_2_birthdate, child_2_name, child_3_birthdate, child_3_name, child_4_birthdate, child_4_name, child_5_birthdate, child_5_name, child_6_birthdate, child_6_name, company, date_entered, date_modified, deleted, department, description, email1, email2, first_name, fkq_holiday_card_lists, hire_date, id, last_name, mailing_label_home, mailing_label_office, marital_status, marriage_date, phone_fax, phone_home, phone_mobile, phone_other, phone_work, primary_address_city, primary_address_country, primary_address_postalcode, primary_address_state, primary_address_street, primary_address_street_2, salutation, spouse_birthdate, spouse_name, title, vip_card_lists }),
  update)

/**
 * @api {delete} /contacts/:id Delete contacts
 * @apiName DeleteContacts
 * @apiGroup Contacts
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Contacts not found.
 */
router.delete('/:id',
  destroy)

export default router
