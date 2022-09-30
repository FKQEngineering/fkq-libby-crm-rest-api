import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DateName, { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment} = schema.tree

/**
 * @api {post} /dateNames Create date name
 * @apiName CreateDateName
 * @apiGroup DateName
 * @apiParam name Date name's name.
 * @apiSuccess {Object} dateName Date name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Date name not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /dateNames Retrieve date names
 * @apiName RetrieveDateNames
 * @apiGroup DateName
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of date names.
 * @apiSuccess {Object[]} rows List of date names.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dateNames/:id Retrieve date name
 * @apiName RetrieveDateName
 * @apiGroup DateName
 * @apiSuccess {Object} dateName Date name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Date name not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /dateNames/:id Update date name
 * @apiName UpdateDateName
 * @apiGroup DateName
 * @apiParam name Date name's name.
 * @apiSuccess {Object} dateName Date name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Date name not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment}),
  update)

/**
 * @api {delete} /dateNames/:id Delete date name
 * @apiName DeleteDateName
 * @apiGroup DateName
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Date name not found.
 */
router.delete('/:id',
  destroy)

export default router
