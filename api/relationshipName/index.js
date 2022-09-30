import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export RelationshipName, { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment  } = schema.tree

/**
 * @api {post} /relationshipNames Create relationship name
 * @apiName CreateRelationshipName
 * @apiGroup RelationshipName
 * @apiParam name Relationship name's name.
 * @apiSuccess {Object} relationshipName Relationship name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationship name not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment  }),
  create)

/**
 * @api {get} /relationshipNames Retrieve relationship names
 * @apiName RetrieveRelationshipNames
 * @apiGroup RelationshipName
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of relationship names.
 * @apiSuccess {Object[]} rows List of relationship names.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /relationshipNames/:id Retrieve relationship name
 * @apiName RetrieveRelationshipName
 * @apiGroup RelationshipName
 * @apiSuccess {Object} relationshipName Relationship name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationship name not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /relationshipNames/:id Update relationship name
 * @apiName UpdateRelationshipName
 * @apiGroup RelationshipName
 * @apiParam name Relationship name's name.
 * @apiSuccess {Object} relationshipName Relationship name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationship name not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment  }),
  update)

/**
 * @api {delete} /relationshipNames/:id Delete relationship name
 * @apiName DeleteRelationshipName
 * @apiGroup RelationshipName
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Relationship name not found.
 */
router.delete('/:id',
  destroy)

export default router
