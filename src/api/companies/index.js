import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Companies, { schema } from './model'

const router = new Router()
const { name, note, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /companies Create companies
 * @apiName CreateCompanies
 * @apiGroup Companies
 * @apiParam name Companies's name.
 * @apiParam note Companies's note.
 * @apiParam createdBy Companies's createdBy.
 * @apiParam modifiedBy Companies's modifiedBy.
 * @apiParam isDeleted Companies's isDeleted.
 * @apiSuccess {Object} companies Companies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Companies not found.
 */
router.post('/',
  body({ name, note, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /companies Retrieve companies
 * @apiName RetrieveCompanies
 * @apiGroup Companies
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of companies.
 * @apiSuccess {Object[]} rows List of companies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /companies/:id Retrieve companies
 * @apiName RetrieveCompanies
 * @apiGroup Companies
 * @apiSuccess {Object} companies Companies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Companies not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /companies/:id Update companies
 * @apiName UpdateCompanies
 * @apiGroup Companies
 * @apiParam name Companies's name.
 * @apiParam note Companies's note.
 * @apiParam createdBy Companies's createdBy.
 * @apiParam modifiedBy Companies's modifiedBy.
 * @apiParam isDeleted Companies's isDeleted.
 * @apiSuccess {Object} companies Companies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Companies not found.
 */
router.put('/:id',
  body({ name, note, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /companies/:id Delete companies
 * @apiName DeleteCompanies
 * @apiGroup Companies
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Companies not found.
 */
router.delete('/:id',
  destroy)

export default router
