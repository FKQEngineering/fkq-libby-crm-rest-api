import { Router } from 'express'
import addresses from './addresses'
import cardLists from './cardLists'
import cardListTypes from './cardListTypes'
import companies from './companies'
import contacts from './contacts'
import emails from './emails'
import eventDates from './eventDates'
import genders from './genders'
import maritalStatuses from './maritalStatuses'
import phones from './phones'
import relationships from './relationships'
import salutations from './salutations'
import suffixes from './suffixes'

const router = new Router()

router.use('/addresses', addresses)
router.use('/cardLists', cardLists)
router.use('/cardListTypes', cardListTypes)
router.use('/companies', companies)
router.use('/contacts', contacts)
router.use('/emails', emails)
router.use('/eventDates', eventDates)
router.use('/genders', genders)
router.use('/maritalStatuses', maritalStatuses)
router.use('/phones', phones)
router.use('/relationships', relationships)
router.use('/salutations', salutations)
router.use('/suffixes', suffixes)

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

export default router
