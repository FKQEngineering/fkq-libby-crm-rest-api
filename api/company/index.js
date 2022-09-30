import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Company, { schema } from './model'

const router = new Router()
const { name, address, note, createddate, createdBy, modifiedDate, modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /companies Create company
 * @apiName CreateCompany
 * @apiGroup Company
 * @apiParam name Company's name.
 * @apiParam address Company's address.
 * @apiParam note Company's note.
 * @apiSuccess {Object} company Company's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company not found.
 */
router.post('/',
  body({ name, address, note, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /companies Retrieve companies
 * @apiName RetrieveCompanies
 * @apiGroup Company
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of companies.
 * @apiSuccess {Object[]} rows List of companies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /companies/:id Retrieve company
 * @apiName RetrieveCompany
 * @apiGroup Company
 * @apiSuccess {Object} company Company's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /companies/:id Update company
 * @apiName UpdateCompany
 * @apiGroup Company
 * @apiParam name Company's name.
 * @apiParam address Company's address.
 * @apiParam note Company's note.
 * @apiSuccess {Object} company Company's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Company not found.
 */
router.put('/:id',
  body({ name, address, note, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /companies/:id Delete company
 * @apiName DeleteCompany
 * @apiGroup Company
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Company not found.
 */
router.delete('/:id',
  destroy)

export default router
