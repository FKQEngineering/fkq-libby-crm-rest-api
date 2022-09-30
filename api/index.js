import { Router } from 'express'
import user from './user'
import auth from './auth'
import passwordReset from './password-reset'
import address from './address'
import addressName from './addressName'
import phone from './phone'
import contact from './contact'
import company from './company'
import dateName from './dateName'
import email from './email'
import eventDate from './eventDate'
import gender from './gender'
import maritalStatus from './maritalStatus'
import phoneName from './phoneName'
import relationshipName from './relationshipName'
import relationship from './relationship'
import salutation from './salutation'
import suffix from './suffix'
import cardList from './cardList'
import cardListType from './cardListType'

const router = new Router()

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
router.use('/users', user)
router.use('/auth', auth)
router.use('/password-resets', passwordReset)
router.use('/addresses', address)
router.use('/addressNames', addressName)
router.use('/phones', phone)
router.use('/contacts', contact)
router.use('/companies', company)
router.use('/dateNames', dateName)
router.use('/emails', email)
router.use('/eventDates', eventDate)
router.use('/genders', gender)
router.use('/maritalStatuses', maritalStatus)
router.use('/phoneNames', phoneName)
router.use('/relationshipNames', relationshipName)
router.use('/relationships', relationship)
router.use('/salutations', salutation)
router.use('/suffixes', suffix)
router.use('/cardLists', cardList)
router.use('/cardListTypes', cardListType)

export default router
