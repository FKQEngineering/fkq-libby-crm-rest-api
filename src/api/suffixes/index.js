import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Suffixes, { schema } from './model'

const router = new Router()
const { name, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /suffixes Create suffixes
 * @apiName CreateSuffixes
 * @apiGroup Suffixes
 * @apiParam name Suffixes's name.
 * @apiParam createdBy Suffixes's createdBy.
 * @apiParam modifiedBy Suffixes's modifiedBy.
 * @apiParam isDeleted Suffixes's isDeleted.
 * @apiSuccess {Object} suffixes Suffixes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suffixes not found.
 */
router.post('/',
  body({ name, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /suffixes Retrieve suffixes
 * @apiName RetrieveSuffixes
 * @apiGroup Suffixes
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of suffixes.
 * @apiSuccess {Object[]} rows List of suffixes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /suffixes/:id Retrieve suffixes
 * @apiName RetrieveSuffixes
 * @apiGroup Suffixes
 * @apiSuccess {Object} suffixes Suffixes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suffixes not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /suffixes/:id Update suffixes
 * @apiName UpdateSuffixes
 * @apiGroup Suffixes
 * @apiParam name Suffixes's name.
 * @apiParam createdBy Suffixes's createdBy.
 * @apiParam modifiedBy Suffixes's modifiedBy.
 * @apiParam isDeleted Suffixes's isDeleted.
 * @apiSuccess {Object} suffixes Suffixes's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suffixes not found.
 */
router.put('/:id',
  body({ name, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /suffixes/:id Delete suffixes
 * @apiName DeleteSuffixes
 * @apiGroup Suffixes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Suffixes not found.
 */
router.delete('/:id',
  destroy)

export default router
