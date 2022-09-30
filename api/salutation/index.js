import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Salutation, { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /salutations Create salutation
 * @apiName CreateSalutation
 * @apiGroup Salutation
 * @apiParam name Salutation's name.
 * @apiSuccess {Object} salutation Salutation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salutation not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /salutations Retrieve salutations
 * @apiName RetrieveSalutations
 * @apiGroup Salutation
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of salutations.
 * @apiSuccess {Object[]} rows List of salutations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /salutations/:id Retrieve salutation
 * @apiName RetrieveSalutation
 * @apiGroup Salutation
 * @apiSuccess {Object} salutation Salutation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salutation not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /salutations/:id Update salutation
 * @apiName UpdateSalutation
 * @apiGroup Salutation
 * @apiParam name Salutation's name.
 * @apiSuccess {Object} salutation Salutation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salutation not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /salutations/:id Delete salutation
 * @apiName DeleteSalutation
 * @apiGroup Salutation
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Salutation not found.
 */
router.delete('/:id',
  destroy)

export default router
