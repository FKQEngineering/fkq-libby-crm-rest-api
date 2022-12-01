import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Phones, { schema } from './model'

const router = new Router()
const { phoneNumber, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /phones Create phones
 * @apiName CreatePhones
 * @apiGroup Phones
 * @apiParam phoneNumber Phones's phoneNumber.
 * @apiParam createdBy Phones's createdBy.
 * @apiParam modifiedBy Phones's modifiedBy.
 * @apiParam isDeleted Phones's isDeleted.
 * @apiSuccess {Object} phones Phones's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phones not found.
 */
router.post('/',
  body({ phoneNumber, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /phones Retrieve phones
 * @apiName RetrievePhones
 * @apiGroup Phones
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of phones.
 * @apiSuccess {Object[]} rows List of phones.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /phones/:id Retrieve phones
 * @apiName RetrievePhones
 * @apiGroup Phones
 * @apiSuccess {Object} phones Phones's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phones not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /phones/:id Update phones
 * @apiName UpdatePhones
 * @apiGroup Phones
 * @apiParam phoneNumber Phones's phoneNumber.
 * @apiParam createdBy Phones's createdBy.
 * @apiParam modifiedBy Phones's modifiedBy.
 * @apiParam isDeleted Phones's isDeleted.
 * @apiSuccess {Object} phones Phones's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phones not found.
 */
router.put('/:id',
  body({ phoneNumber, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /phones/:id Delete phones
 * @apiName DeletePhones
 * @apiGroup Phones
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Phones not found.
 */
router.delete('/:id',
  destroy)

export default router
