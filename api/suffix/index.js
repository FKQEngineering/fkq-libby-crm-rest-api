import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Suffix, { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /suffixes Create suffix
 * @apiName CreateSuffix
 * @apiGroup Suffix
 * @apiParam name Suffix's name.
 * @apiSuccess {Object} suffix Suffix's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suffix not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /suffixes Retrieve suffixes
 * @apiName RetrieveSuffixes
 * @apiGroup Suffix
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of suffixes.
 * @apiSuccess {Object[]} rows List of suffixes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /suffixes/:id Retrieve suffix
 * @apiName RetrieveSuffix
 * @apiGroup Suffix
 * @apiSuccess {Object} suffix Suffix's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suffix not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /suffixes/:id Update suffix
 * @apiName UpdateSuffix
 * @apiGroup Suffix
 * @apiParam name Suffix's name.
 * @apiSuccess {Object} suffix Suffix's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suffix not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /suffixes/:id Delete suffix
 * @apiName DeleteSuffix
 * @apiGroup Suffix
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Suffix not found.
 */
router.delete('/:id',
  destroy)

export default router
