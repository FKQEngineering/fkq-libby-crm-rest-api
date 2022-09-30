import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CardListType, { schema } from './model'

const router = new Router()
const { name, createDate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /cardListTypes Create card list type
 * @apiName CreateCardListType
 * @apiGroup CardListType
 * @apiParam name Card list type's name.
 * @apiParam createDate Card list type's createDate.
 * @apiParam createdBy Card list type's createdBy.
 * @apiParam modifiedDate Card list type's modifiedDate.
 * @apiParam modifiedby Card list type's modifiedby.
 * @apiParam isDeleted Card list type's isDeleted.
 * @apiParam deleteComment Card list type's deleteComment.
 * @apiSuccess {Object} cardListType Card list type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list type not found.
 */
router.post('/',
  body({ name, createDate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /cardListTypes Retrieve card list types
 * @apiName RetrieveCardListTypes
 * @apiGroup CardListType
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of card list types.
 * @apiSuccess {Object[]} rows List of card list types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cardListTypes/:id Retrieve card list type
 * @apiName RetrieveCardListType
 * @apiGroup CardListType
 * @apiSuccess {Object} cardListType Card list type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list type not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /cardListTypes/:id Update card list type
 * @apiName UpdateCardListType
 * @apiGroup CardListType
 * @apiParam name Card list type's name.
 * @apiParam createDate Card list type's createDate.
 * @apiParam createdBy Card list type's createdBy.
 * @apiParam modifiedDate Card list type's modifiedDate.
 * @apiParam modifiedby Card list type's modifiedby.
 * @apiParam isDeleted Card list type's isDeleted.
 * @apiParam deleteComment Card list type's deleteComment.
 * @apiSuccess {Object} cardListType Card list type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list type not found.
 */
router.put('/:id',
  body({ name, createDate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /cardListTypes/:id Delete card list type
 * @apiName DeleteCardListType
 * @apiGroup CardListType
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Card list type not found.
 */
router.delete('/:id',
  destroy)

export default router
