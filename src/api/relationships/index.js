import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Relationships, { schema } from './model'

const router = new Router()
const { name, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /relationships Create relationships
 * @apiName CreateRelationships
 * @apiGroup Relationships
 * @apiParam name Relationships's name.
 * @apiParam createdBy Relationships's createdBy.
 * @apiParam modifiedBy Relationships's modifiedBy.
 * @apiParam isDeleted Relationships's isDeleted.
 * @apiSuccess {Object} relationships Relationships's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationships not found.
 */
router.post('/',
  body({ name, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /relationships Retrieve relationships
 * @apiName RetrieveRelationships
 * @apiGroup Relationships
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of relationships.
 * @apiSuccess {Object[]} rows List of relationships.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /relationships/:id Retrieve relationships
 * @apiName RetrieveRelationships
 * @apiGroup Relationships
 * @apiSuccess {Object} relationships Relationships's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationships not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /relationships/:id Update relationships
 * @apiName UpdateRelationships
 * @apiGroup Relationships
 * @apiParam name Relationships's name.
 * @apiParam createdBy Relationships's createdBy.
 * @apiParam modifiedBy Relationships's modifiedBy.
 * @apiParam isDeleted Relationships's isDeleted.
 * @apiSuccess {Object} relationships Relationships's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationships not found.
 */
router.put('/:id',
  body({ name, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /relationships/:id Delete relationships
 * @apiName DeleteRelationships
 * @apiGroup Relationships
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Relationships not found.
 */
router.delete('/:id',
  destroy)

export default router
