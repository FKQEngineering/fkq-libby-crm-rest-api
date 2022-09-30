import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export  { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /genders Create gender
 * @apiName CreateGender
 * @apiGroup Gender
 * @apiParam name Gender's name.
 * @apiParam gender Gender's gender.
 * @apiSuccess {Object} gender Gender's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gender not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /genders Retrieve genders
 * @apiName RetrieveGenders
 * @apiGroup Gender
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of genders.
 * @apiSuccess {Object[]} rows List of genders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /genders/:id Retrieve gender
 * @apiName RetrieveGender
 * @apiGroup Gender
 * @apiSuccess {Object} gender Gender's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gender not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /genders/:id Update gender
 * @apiName UpdateGender
 * @apiGroup Gender
 * @apiParam name Gender's name.
 * @apiParam gender Gender's gender.
 * @apiSuccess {Object} gender Gender's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gender not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /genders/:id Delete gender
 * @apiName DeleteGender
 * @apiGroup Gender
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Gender not found.
 */
router.delete('/:id',
  destroy)

export default router
