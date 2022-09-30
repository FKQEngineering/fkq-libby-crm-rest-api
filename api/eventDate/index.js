import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export EventDate, { schema } from './model'

const router = new Router()
const { dateValue, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment } = schema.tree

/**
 * @api {post} /eventDates Create event date
 * @apiName CreateEventDate
 * @apiGroup EventDate
 * @apiParam dateName Event date's dateName.
 * @apiParam dateValue Event date's dateValue.
 * @apiSuccess {Object} eventDate Event date's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event date not found.
 */
router.post('/',
  body({ dateValue, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  create)

/**
 * @api {get} /eventDates Retrieve event dates
 * @apiName RetrieveEventDates
 * @apiGroup EventDate
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of event dates.
 * @apiSuccess {Object[]} rows List of event dates.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /eventDates/:id Retrieve event date
 * @apiName RetrieveEventDate
 * @apiGroup EventDate
 * @apiSuccess {Object} eventDate Event date's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event date not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /eventDates/:id Update event date
 * @apiName UpdateEventDate
 * @apiGroup EventDate
 * @apiParam dateName Event date's dateName.
 * @apiParam dateValue Event date's dateValue.
 * @apiSuccess {Object} eventDate Event date's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event date not found.
 */
router.put('/:id',
  body({ dateValue, createddate, createdBy, modifiedDate,modifiedby, isDeleted, deleteComment }),
  update)

/**
 * @api {delete} /eventDates/:id Delete event date
 * @apiName DeleteEventDate
 * @apiGroup EventDate
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Event date not found.
 */
router.delete('/:id',
  destroy)

export default router
