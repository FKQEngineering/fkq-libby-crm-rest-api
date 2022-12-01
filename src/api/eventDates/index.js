import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export EventDates, { schema } from './model'

const router = new Router()
const { datevalue, createdBy, modifiedBy, isDeleted } = schema.tree

/**
 * @api {post} /eventDates Create event dates
 * @apiName CreateEventDates
 * @apiGroup EventDates
 * @apiParam datevalue Event dates's datevalue.
 * @apiParam createdBy Event dates's createdBy.
 * @apiParam modifiedBy Event dates's modifiedBy.
 * @apiParam isDeleted Event dates's isDeleted.
 * @apiSuccess {Object} eventDates Event dates's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event dates not found.
 */
router.post('/',
  body({ datevalue, createdBy, modifiedBy, isDeleted }),
  create)

/**
 * @api {get} /eventDates Retrieve event dates
 * @apiName RetrieveEventDates
 * @apiGroup EventDates
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of event dates.
 * @apiSuccess {Object[]} rows List of event dates.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /eventDates/:id Retrieve event dates
 * @apiName RetrieveEventDates
 * @apiGroup EventDates
 * @apiSuccess {Object} eventDates Event dates's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event dates not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /eventDates/:id Update event dates
 * @apiName UpdateEventDates
 * @apiGroup EventDates
 * @apiParam datevalue Event dates's datevalue.
 * @apiParam createdBy Event dates's createdBy.
 * @apiParam modifiedBy Event dates's modifiedBy.
 * @apiParam isDeleted Event dates's isDeleted.
 * @apiSuccess {Object} eventDates Event dates's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event dates not found.
 */
router.put('/:id',
  body({ datevalue, createdBy, modifiedBy, isDeleted }),
  update)

/**
 * @api {delete} /eventDates/:id Delete event dates
 * @apiName DeleteEventDates
 * @apiGroup EventDates
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Event dates not found.
 */
router.delete('/:id',
  destroy)

export default router
