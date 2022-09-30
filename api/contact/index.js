import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Contact, { schema } from './model'

const router = new Router()
const {firstName, middleName, lastName, hireDate, title, company, department, notes, gender, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment} = schema.tree

/**
 * @api {post} /contacts Create contact
 * @apiName CreateContact
 * @apiGroup Contact
 * @apiParam firstName Contact's firstName.
 * @apiParam middleName Contact's middleName.
 * @apiParam lastName Contact's lastName.
 * @apiParam date Contact's date.
 * @apiParam title Contact's title.
 * @apiParam company Contact's company.
 * @apiParam department Contact's department.
 * @apiParam notes Contact's notes.
 * @apiSuccess {Object} contact Contact's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact not found.
 */
router.post('/',
  body({firstName, middleName, lastName, hireDate, title, company, department, notes, gender, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment}),
  create)

/**
 * @api {get} /contacts Retrieve contacts
 * @apiName RetrieveContacts
 * @apiGroup Contact
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of contacts.
 * @apiSuccess {Object[]} rows List of contacts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /contacts/:id Retrieve contact
 * @apiName RetrieveContact
 * @apiGroup Contact
 * @apiSuccess {Object} contact Contact's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /contacts/:id Update contact
 * @apiName UpdateContact
 * @apiGroup Contact
 * @apiParam firstName Contact's firstName.
 * @apiParam middleName Contact's middleName.
 * @apiParam lastName Contact's lastName.
 * @apiParam date Contact's date.
 * @apiParam title Contact's title.
 * @apiParam company Contact's company.
 * @apiParam department Contact's department.
 * @apiParam notes Contact's notes.
 * @apiSuccess {Object} contact Contact's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact not found.
 */
router.put('/:id',
  body({firstName, middleName, lastName, hireDate, title, company, department, notes, gender, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment}),
  update)

/**
 * @api {delete} /contacts/:id Delete contact
 * @apiName DeleteContact
 * @apiGroup Contact
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Contact not found.
 */
router.delete('/:id',
  destroy)

export default router
