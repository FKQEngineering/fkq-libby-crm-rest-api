import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PhoneName, { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment  } = schema.tree

/**
 * @api {post} /phoneNames Create phone name
 * @apiName CreatePhoneName
 * @apiGroup PhoneName
 * @apiParam name Phone name's name.
 * @apiSuccess {Object} phoneName Phone name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phone name not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment  }),
  create)

/**
 * @api {get} /phoneNames Retrieve phone names
 * @apiName RetrievePhoneNames
 * @apiGroup PhoneName
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of phone names.
 * @apiSuccess {Object[]} rows List of phone names.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /phoneNames/:id Retrieve phone name
 * @apiName RetrievePhoneName
 * @apiGroup PhoneName
 * @apiSuccess {Object} phoneName Phone name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phone name not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /phoneNames/:id Update phone name
 * @apiName UpdatePhoneName
 * @apiGroup PhoneName
 * @apiParam name Phone name's name.
 * @apiSuccess {Object} phoneName Phone name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Phone name not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment  }),
  update)

/**
 * @api {delete} /phoneNames/:id Delete phone name
 * @apiName DeletePhoneName
 * @apiGroup PhoneName
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Phone name not found.
 */
router.delete('/:id',
  destroy)

export default router
