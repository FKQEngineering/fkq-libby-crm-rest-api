import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Addresses, { schema } from './model'

const router = new Router()
const { name, street1, street2, city, state, zip, country, note, createdDate, CreatedBy, modifieddate, iDeleted, isDefault } = schema.tree

/**
 * @api {post} /addresses Create addresses
 * @apiName CreateAddresses
 * @apiGroup Addresses
 * @apiParam name Addresses's name.
 * @apiParam street1 Addresses's street1.
 * @apiParam street2 Addresses's street2.
 * @apiParam city Addresses's city.
 * @apiParam state Addresses's state.
 * @apiParam zip Addresses's zip.
 * @apiParam country Addresses's country.
 * @apiParam note Addresses's note.
 * @apiParam createdDate Addresses's createdDate.
 * @apiParam CreatedBy Addresses's CreatedBy.
 * @apiParam modifieddate Addresses's modifieddate.
 * @apiParam iDeleted Addresses's iDeleted.
 * @apiParam isDefault Addresses's isDefault.
 * @apiSuccess {Object} addresses Addresses's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Addresses not found.
 */
router.post('/',
  body({ name, street1, street2, city, state, zip, country, note, CreatedBy, iDeleted, isDefault }),
  create)

/**
 * @api {get} /addresses Retrieve addresses
 * @apiName RetrieveAddresses
 * @apiGroup Addresses
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of addresses.
 * @apiSuccess {Object[]} rows List of addresses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /addresses/:id Retrieve addresses
 * @apiName RetrieveAddresses
 * @apiGroup Addresses
 * @apiSuccess {Object} addresses Addresses's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Addresses not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /addresses/:id Update addresses
 * @apiName UpdateAddresses
 * @apiGroup Addresses
 * @apiParam name Addresses's name.
 * @apiParam street1 Addresses's street1.
 * @apiParam street2 Addresses's street2.
 * @apiParam city Addresses's city.
 * @apiParam state Addresses's state.
 * @apiParam zip Addresses's zip.
 * @apiParam country Addresses's country.
 * @apiParam note Addresses's note.
 * @apiParam createdDate Addresses's createdDate.
 * @apiParam CreatedBy Addresses's CreatedBy.
 * @apiParam modifieddate Addresses's modifieddate.
 * @apiParam iDeleted Addresses's iDeleted.
 * @apiParam isDefault Addresses's isDefault.
 * @apiSuccess {Object} addresses Addresses's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Addresses not found.
 */
router.put('/:id',
  body({ name, street1, street2, city, state, zip, country, note, createdDate, CreatedBy, modifieddate, iDeleted, isDefault }),
  update)

/**
 * @api {delete} /addresses/:id Delete addresses
 * @apiName DeleteAddresses
 * @apiGroup Addresses
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Addresses not found.
 */
router.delete('/:id',
  destroy)

export default router
