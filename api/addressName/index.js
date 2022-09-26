import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export AddressName, { schema } from './model'

const router = new Router()
const { name, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /addressNames Create address name
 * @apiName CreateAddressName
 * @apiGroup AddressName
 * @apiParam name Address name's name.
 * @apiParam createddate Address name's createddate.
 * @apiParam createdBy Address name's createdBy.
 * @apiParam modifiedDate.modifiedby Address name's modifiedDate.
 * @apiParam modifiedby Address name modifiedBy.
 * @apiParam isDeleted Address name's isDeleted.
 * @apiParam deleteComment Address name's deleteComment.
 * @apiSuccess {Object} addressName Address name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address name not found.
 */
router.post('/',
  body({ name, createddate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /addressNames Retrieve address names
 * @apiName RetrieveAddressNames
 * @apiGroup AddressName
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of address names.
 * @apiSuccess {Object[]} rows List of address names.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /addressNames/:id Retrieve address name
 * @apiName RetrieveAddressName
 * @apiGroup AddressName
 * @apiSuccess {Object} addressName Address name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address name not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /addressNames/:id Update address name
 * @apiName UpdateAddressName
 * @apiGroup AddressName
 * @apiParam name Address name's name.
 * @apiParam createddate Address name's createddate.
 * @apiParam createdBy Address name's createdBy.
 * @apiParam modifiedDate.modifiedby Address name's modifiedDate.modifiedby.
 * @apiParam isDeleted Address name's isDeleted.
 * @apiParam deleteComment Address name's deleteComment.
 * @apiSuccess {Object} addressName Address name's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address name not found.
 */
router.put('/:id',
  body({ name, createddate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /addressNames/:id Delete address name
 * @apiName DeleteAddressName
 * @apiGroup AddressName
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Address name not found.
 */
router.delete('/:id',
  destroy)

export default router
