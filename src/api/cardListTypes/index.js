import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CardListTypes, { schema } from './model'

const router = new Router()
const { name, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /cardListTypes Create card list types
 * @apiName CreateCardListTypes
 * @apiGroup CardListTypes
 * @apiParam name Card list types's name.
 * @apiParam createdBy Card list types's createdBy.
 * @apiParam modifiedBy Card list types's modifiedBy.
 * @apiParam isDeleted Card list types's isDeleted.
 * @apiSuccess {Object} cardListTypes Card list types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list types not found.
 */
router.post('/',
  body({ name, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /cardListTypes Retrieve card list types
 * @apiName RetrieveCardListTypes
 * @apiGroup CardListTypes
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of card list types.
 * @apiSuccess {Object[]} rows List of card list types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cardListTypes/:id Retrieve card list types
 * @apiName RetrieveCardListTypes
 * @apiGroup CardListTypes
 * @apiSuccess {Object} cardListTypes Card list types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list types not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /cardListTypes/:id Update card list types
 * @apiName UpdateCardListTypes
 * @apiGroup CardListTypes
 * @apiParam name Card list types's name.
 * @apiParam createdBy Card list types's createdBy.
 * @apiParam modifiedBy Card list types's modifiedBy.
 * @apiParam isDeleted Card list types's isDeleted.
 * @apiSuccess {Object} cardListTypes Card list types's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list types not found.
 */
router.put('/:id',
  body({ name, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /cardListTypes/:id Delete card list types
 * @apiName DeleteCardListTypes
 * @apiGroup CardListTypes
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Card list types not found.
 */
router.delete('/:id',
  destroy)

export default router
