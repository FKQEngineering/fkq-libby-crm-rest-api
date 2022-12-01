import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CardLists, { schema } from './model'

const router = new Router()
const { name, quantity, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /cardLists Create card lists
 * @apiName CreateCardLists
 * @apiGroup CardLists
 * @apiParam name Card lists's name.
 * @apiParam quantity Card lists's quantity.
 * @apiParam createdBy Card lists's createdBy.
 * @apiParam modifiedBy Card lists's modifiedBy.
 * @apiParam isDeleted Card lists's isDeleted.
 * @apiSuccess {Object} cardLists Card lists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card lists not found.
 */
router.post('/',
  body({ name, quantity, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /cardLists Retrieve card lists
 * @apiName RetrieveCardLists
 * @apiGroup CardLists
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of card lists.
 * @apiSuccess {Object[]} rows List of card lists.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cardLists/:id Retrieve card lists
 * @apiName RetrieveCardLists
 * @apiGroup CardLists
 * @apiSuccess {Object} cardLists Card lists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card lists not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /cardLists/:id Update card lists
 * @apiName UpdateCardLists
 * @apiGroup CardLists
 * @apiParam name Card lists's name.
 * @apiParam quantity Card lists's quantity.
 * @apiParam createdBy Card lists's createdBy.
 * @apiParam modifiedBy Card lists's modifiedBy.
 * @apiParam isDeleted Card lists's isDeleted.
 * @apiSuccess {Object} cardLists Card lists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card lists not found.
 */
router.put('/:id',
  body({ name, quantity, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /cardLists/:id Delete card lists
 * @apiName DeleteCardLists
 * @apiGroup CardLists
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Card lists not found.
 */
router.delete('/:id',
  destroy)

export default router
