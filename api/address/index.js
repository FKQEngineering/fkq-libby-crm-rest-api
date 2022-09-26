import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Address, { schema } from './model'

const router = new Router()
const { street1, street2, city, state, zip, country, note, createddate, createdBy, modificedDate, modifiedBy, isDeleted, deleteComment, isDefault } = schema.tree

/**
 * @api {post} /addresses Create address
 * @apiName CreateAddress
 * @apiGroup Address
 * @apiParam street1 Address's street1.
 * @apiParam street2 Address's street2.
 * @apiParam city Address's city.
 * @apiParam state Address's state.
 * @apiParam zip Address's zip.
 * @apiParam country Address's country.
 * @apiParam note Address's note.
 * @apiParam createddate Address's createddate.
 * @apiParam createdBy Address's createdBy.
 * @apiParam modificedDate Address's modificedDate.
 * @apiParam modifiedBy Address's modifiedBy.
 * @apiParam isDeleted Address's isDeleted.
 * @apiParam deleteComment Address's deleteComment.
 * @apiParam isDefault Address's isDefault.
 * @apiSuccess {Object} address Address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address not found.
 */
router.post('/',
  body({ street1, street2, city, state, zip, country, note, createddate, createdBy, modificedDate, modifiedBy, isDeleted, deleteComment, isDefault }),
  create)

/**
 * @api {get} /addresses Retrieve addresses
 * @apiName RetrieveAddresses
 * @apiGroup Address
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of addresses.
 * @apiSuccess {Object[]} rows List of addresses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /addresses/:id Retrieve address
 * @apiName RetrieveAddress
 * @apiGroup Address
 * @apiSuccess {Object} address Address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /addresses/:id Update address
 * @apiName UpdateAddress
 * @apiGroup Address
 * @apiParam street1 Address's street1.
 * @apiParam street2 Address's street2.
 * @apiParam city Address's city.
 * @apiParam state Address's state.
 * @apiParam zip Address's zip.
 * @apiParam country Address's country.
 * @apiParam note Address's note.
 * @apiParam createddate Address's createddate.
 * @apiParam createdBy Address's createdBy.
 * @apiParam modificedDate Address's modificedDate.
 * @apiParam modifiedBy Address's modifiedBy.
 * @apiParam isDeleted Address's isDeleted.
 * @apiParam deleteComment Address's deleteComment.
 * @apiParam isDefault Address's isDefault.
 * @apiSuccess {Object} address Address's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Address not found.
 */
router.put('/:id',
  body({ street1, street2, city, state, zip, country, note, createddate, createdBy, modificedDate, modifiedBy, isDeleted, deleteComment, isDefault }),
  update)

/**
 * @api {delete} /addresses/:id Delete address
 * @apiName DeleteAddress
 * @apiGroup Address
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Address not found.
 */
router.delete('/:id',
  destroy)

export default router
