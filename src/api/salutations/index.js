import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Salutations, { schema } from './model'

const router = new Router()
const { name, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /salutations Create salutations
 * @apiName CreateSalutations
 * @apiGroup Salutations
 * @apiParam name Salutations's name.
 * @apiParam createdBy Salutations's createdBy.
 * @apiParam modifiedBy Salutations's modifiedBy.
 * @apiParam isDeleted Salutations's isDeleted.
 * @apiSuccess {Object} salutations Salutations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salutations not found.
 */
router.post('/',
  body({ name, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /salutations Retrieve salutations
 * @apiName RetrieveSalutations
 * @apiGroup Salutations
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of salutations.
 * @apiSuccess {Object[]} rows List of salutations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /salutations/:id Retrieve salutations
 * @apiName RetrieveSalutations
 * @apiGroup Salutations
 * @apiSuccess {Object} salutations Salutations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salutations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /salutations/:id Update salutations
 * @apiName UpdateSalutations
 * @apiGroup Salutations
 * @apiParam name Salutations's name.
 * @apiParam createdBy Salutations's createdBy.
 * @apiParam modifiedBy Salutations's modifiedBy.
 * @apiParam isDeleted Salutations's isDeleted.
 * @apiSuccess {Object} salutations Salutations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salutations not found.
 */
router.put('/:id',
  body({ name, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /salutations/:id Delete salutations
 * @apiName DeleteSalutations
 * @apiGroup Salutations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Salutations not found.
 */
router.delete('/:id',
  destroy)

export default router
