import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export MaritalStatuses, { schema } from './model'

const router = new Router()
const { name, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /maritalStatuses Create marital statuses
 * @apiName CreateMaritalStatuses
 * @apiGroup MaritalStatuses
 * @apiParam name Marital statuses's name.
 * @apiParam createdBy Marital statuses's createdBy.
 * @apiParam modifiedBy Marital statuses's modifiedBy.
 * @apiParam isDeleted Marital statuses's isDeleted.
 * @apiSuccess {Object} maritalStatuses Marital statuses's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marital statuses not found.
 */
router.post('/',
  body({ name, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /maritalStatuses Retrieve marital statuses
 * @apiName RetrieveMaritalStatuses
 * @apiGroup MaritalStatuses
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of marital statuses.
 * @apiSuccess {Object[]} rows List of marital statuses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /maritalStatuses/:id Retrieve marital statuses
 * @apiName RetrieveMaritalStatuses
 * @apiGroup MaritalStatuses
 * @apiSuccess {Object} maritalStatuses Marital statuses's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marital statuses not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /maritalStatuses/:id Update marital statuses
 * @apiName UpdateMaritalStatuses
 * @apiGroup MaritalStatuses
 * @apiParam name Marital statuses's name.
 * @apiParam createdBy Marital statuses's createdBy.
 * @apiParam modifiedBy Marital statuses's modifiedBy.
 * @apiParam isDeleted Marital statuses's isDeleted.
 * @apiSuccess {Object} maritalStatuses Marital statuses's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marital statuses not found.
 */
router.put('/:id',
  body({ name, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /maritalStatuses/:id Delete marital statuses
 * @apiName DeleteMaritalStatuses
 * @apiGroup MaritalStatuses
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Marital statuses not found.
 */
router.delete('/:id',
  destroy)

export default router
