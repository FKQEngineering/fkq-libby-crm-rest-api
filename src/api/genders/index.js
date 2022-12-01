import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Genders, { schema } from './model'

const router = new Router()
const { name, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /genders Create genders
 * @apiName CreateGenders
 * @apiGroup Genders
 * @apiParam name Genders's name.
 * @apiParam createdBy Genders's createdBy.
 * @apiParam modifiedBy Genders's modifiedBy.
 * @apiParam isDeleted Genders's isDeleted.
 * @apiSuccess {Object} genders Genders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genders not found.
 */
router.post('/',
  body({ name, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /genders Retrieve genders
 * @apiName RetrieveGenders
 * @apiGroup Genders
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of genders.
 * @apiSuccess {Object[]} rows List of genders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /genders/:id Retrieve genders
 * @apiName RetrieveGenders
 * @apiGroup Genders
 * @apiSuccess {Object} genders Genders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genders not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /genders/:id Update genders
 * @apiName UpdateGenders
 * @apiGroup Genders
 * @apiParam name Genders's name.
 * @apiParam createdBy Genders's createdBy.
 * @apiParam modifiedBy Genders's modifiedBy.
 * @apiParam isDeleted Genders's isDeleted.
 * @apiSuccess {Object} genders Genders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genders not found.
 */
router.put('/:id',
  body({ name, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /genders/:id Delete genders
 * @apiName DeleteGenders
 * @apiGroup Genders
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Genders not found.
 */
router.delete('/:id',
  destroy)

export default router
