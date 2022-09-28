import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Test, { schema } from './model'

const router = new Router()
const { id, name, title } = schema.tree

/**
 * @api {post} /tests Create test
 * @apiName CreateTest
 * @apiGroup Test
 * @apiParam id Test's id.
 * @apiParam name Test's name.
 * @apiParam title Test's title.
 * @apiSuccess {Object} test Test's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 */
router.post('/',
  body({ id, name, title }),
  create)

/**
 * @api {get} /tests Retrieve tests
 * @apiName RetrieveTests
 * @apiGroup Test
 * @apiUse listParams
 * @apiSuccess {Object[]} tests List of tests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tests/:id Retrieve test
 * @apiName RetrieveTest
 * @apiGroup Test
 * @apiSuccess {Object} test Test's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tests/:id Update test
 * @apiName UpdateTest
 * @apiGroup Test
 * @apiParam id Test's id.
 * @apiParam name Test's name.
 * @apiParam title Test's title.
 * @apiSuccess {Object} test Test's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 */
router.put('/:id',
  body({ id, name, title }),
  update)

/**
 * @api {delete} /tests/:id Delete test
 * @apiName DeleteTest
 * @apiGroup Test
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Test not found.
 */
router.delete('/:id',
  destroy)

export default router
