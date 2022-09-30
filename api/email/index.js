import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Email, { schema } from './model'

const router = new Router()
const { emailAddress, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /emails Create email
 * @apiName CreateEmail
 * @apiGroup Email
 * @apiParam address Email's address.
 * @apiSuccess {Object} email Email's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Email not found.
 */
router.post('/',
  body({ emailAddress, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /emails Retrieve emails
 * @apiName RetrieveEmails
 * @apiGroup Email
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of emails.
 * @apiSuccess {Object[]} rows List of emails.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /emails/:id Retrieve email
 * @apiName RetrieveEmail
 * @apiGroup Email
 * @apiSuccess {Object} email Email's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Email not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /emails/:id Update email
 * @apiName UpdateEmail
 * @apiGroup Email
 * @apiParam address Email's address.
 * @apiSuccess {Object} email Email's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Email not found.
 */
router.put('/:id',
  body({ emailAddress, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /emails/:id Delete email
 * @apiName DeleteEmail
 * @apiGroup Email
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Email not found.
 */
router.delete('/:id',
  destroy)

export default router
