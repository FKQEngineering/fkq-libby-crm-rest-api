import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export MaritalStatus, { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /maritalStatuses Create marital status
 * @apiName CreateMaritalStatus
 * @apiGroup MaritalStatus
 * @apiParam name Marital status's name.
 * @apiParam martialStatus Marital status's martialStatus.
 * @apiSuccess {Object} maritalStatus Marital status's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marital status not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /maritalStatuses Retrieve marital statuses
 * @apiName RetrieveMaritalStatuses
 * @apiGroup MaritalStatus
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of marital statuses.
 * @apiSuccess {Object[]} rows List of marital statuses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /maritalStatuses/:id Retrieve marital status
 * @apiName RetrieveMaritalStatus
 * @apiGroup MaritalStatus
 * @apiSuccess {Object} maritalStatus Marital status's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marital status not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /maritalStatuses/:id Update marital status
 * @apiName UpdateMaritalStatus
 * @apiGroup MaritalStatus
 * @apiParam name Marital status's name.
 * @apiParam martialStatus Marital status's martialStatus.
 * @apiSuccess {Object} maritalStatus Marital status's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marital status not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /maritalStatuses/:id Delete marital status
 * @apiName DeleteMaritalStatus
 * @apiGroup MaritalStatus
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Marital status not found.
 */
router.delete('/:id',
  destroy)

export default router
