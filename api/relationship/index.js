import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'
export Relationship, { schema } from './model'

const router = new Router()

/**
 * @api {post} /relationships Create relationship
 * @apiName CreateRelationship
 * @apiGroup Relationship
 * @apiSuccess {Object} relationship Relationship's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationship not found.
 */

router.get('/',
  query(),
  index)

/**
 * @api {get} /relationships/:id Retrieve relationship
 * @apiName RetrieveRelationship
 * @apiGroup Relationship
 * @apiSuccess {Object} relationship Relationship's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Relationship not found.
 */
router.get('/:id',
  show)

export default router
