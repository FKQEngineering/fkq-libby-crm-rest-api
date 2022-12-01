import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Emails, { schema } from './model'

const router = new Router()
const { emailAddress, note, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /emails Create emails
 * @apiName CreateEmails
 * @apiGroup Emails
 * @apiParam emailAddress Emails's emailAddress.
 * @apiParam note Emails's note.
 * @apiParam createdBy Emails's createdBy.
 * @apiParam modifiedBy Emails's modifiedBy.
 * @apiParam isDeleted Emails's isDeleted.
 * @apiSuccess {Object} emails Emails's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Emails not found.
 */
router.post('/',
  body({ emailAddress, note, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /emails Retrieve emails
 * @apiName RetrieveEmails
 * @apiGroup Emails
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of emails.
 * @apiSuccess {Object[]} rows List of emails.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /emails/:id Retrieve emails
 * @apiName RetrieveEmails
 * @apiGroup Emails
 * @apiSuccess {Object} emails Emails's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Emails not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /emails/:id Update emails
 * @apiName UpdateEmails
 * @apiGroup Emails
 * @apiParam emailAddress Emails's emailAddress.
 * @apiParam note Emails's note.
 * @apiParam createdBy Emails's createdBy.
 * @apiParam modifiedBy Emails's modifiedBy.
 * @apiParam isDeleted Emails's isDeleted.
 * @apiSuccess {Object} emails Emails's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Emails not found.
 */
router.put('/:id',
  body({ emailAddress, note, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /emails/:id Delete emails
 * @apiName DeleteEmails
 * @apiGroup Emails
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Emails not found.
 */
router.delete('/:id',
  destroy)

export default router
