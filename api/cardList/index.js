import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export CardList, { schema } from './model'

const router = new Router()
const { name, quantity, cardListType, cardListTypeId, createDate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /cardLists Create card list
 * @apiName CreateCardList
 * @apiGroup CardList
 * @apiParam name Card list's name.
 * @apiParam quantity Card list's quantity.
 * @apiParam cardListType Card list's cardListType.
 * @apiParam cardListTypeId Card list's cardListTypeId.
 * @apiParam createDate Card list's createDate.
 * @apiSuccess {Object} cardList Card list's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list not found.
 */
router.post('/',
  body({ name, quantity, cardListType, cardListTypeId, createDate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /cardLists Retrieve card lists
 * @apiName RetrieveCardLists
 * @apiGroup CardList
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of card lists.
 * @apiSuccess {Object[]} rows List of card lists.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cardLists/:id Retrieve card list
 * @apiName RetrieveCardList
 * @apiGroup CardList
 * @apiSuccess {Object} cardList Card list's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /cardLists/:id Update card list
 * @apiName UpdateCardList
 * @apiGroup CardList
 * @apiParam name Card list's name.
 * @apiParam quantity Card list's quantity.
 * @apiParam cardListType Card list's cardListType.
 * @apiParam cardListTypeId Card list's cardListTypeId.
 * @apiParam createDate Card list's createDate.
 * @apiSuccess {Object} cardList Card list's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card list not found.
 */
router.put('/:id',
  body({ name, quantity, cardListType, cardListTypeId, createDate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /cardLists/:id Delete card list
 * @apiName DeleteCardList
 * @apiGroup CardList
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Card list not found.
 */
router.delete('/:id',
  destroy)

export default router
