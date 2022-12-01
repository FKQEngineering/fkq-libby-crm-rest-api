import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Contacts, { schema } from './model'

const router = new Router()
const { firstName, middleName, lastName, title, department, hireDate, note, imageUrl, defaultMailingAddress, createdBy, modifiedBy, isHidden, isDeleted, defaultEmailAddress, defaultPhoneNumber } = schema.tree

/**
 * @api {post} /contacts Create contacts
 * @apiName CreateContacts
 * @apiGroup Contacts
 * @apiParam firstName Contacts's firstName.
 * @apiParam middleName Contacts's middleName.
 * @apiParam lastName Contacts's lastName.
 * @apiParam title Contacts's title.
 * @apiParam department Contacts's department.
 * @apiParam hireDate Contacts's hireDate.
 * @apiParam note Contacts's note.
 * @apiParam imageUrl Contacts's imageUrl.
 * @apiParam defaultMailingAddress Contacts's defaultMailingAddress.
 * @apiParam createdBy Contacts's createdBy.
 * @apiParam modifiedBy Contacts's modifiedBy.
 * @apiParam isHidden Contacts's isHidden.
 * @apiParam isDeleted Contacts's isDeleted.
 * @apiParam defaultEmailAddress Contacts's defaultEmailAddress.
 * @apiParam defaultPhoneNumber Contacts's defaultPhoneNumber.
 * @apiSuccess {Object} contacts Contacts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contacts not found.
 */
router.post('/',
  body({ firstName, middleName, lastName, title, department, hireDate, note, imageUrl, defaultMailingAddress, createdBy, modifiedBy, isHidden, isDeleted, defaultEmailAddress, defaultPhoneNumber }),
  create)

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
 * @apiParam firstName Contacts's firstName.
 * @apiParam middleName Contacts's middleName.
 * @apiParam lastName Contacts's lastName.
 * @apiParam title Contacts's title.
 * @apiParam department Contacts's department.
 * @apiParam hireDate Contacts's hireDate.
 * @apiParam note Contacts's note.
 * @apiParam imageUrl Contacts's imageUrl.
 * @apiParam defaultMailingAddress Contacts's defaultMailingAddress.
 * @apiParam createdBy Contacts's createdBy.
 * @apiParam modifiedBy Contacts's modifiedBy.
 * @apiParam isHidden Contacts's isHidden.
 * @apiParam isDeleted Contacts's isDeleted.
 * @apiParam defaultEmailAddress Contacts's defaultEmailAddress.
 * @apiParam defaultPhoneNumber Contacts's defaultPhoneNumber.
 * @apiSuccess {Object} contacts Contacts's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contacts not found.
 */
router.put('/:id',
  body({ firstName, middleName, lastName, title, department, hireDate, note, imageUrl, defaultMailingAddress, createdBy, modifiedBy, isHidden, isDeleted, defaultEmailAddress, defaultPhoneNumber }),
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
