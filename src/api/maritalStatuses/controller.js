import { success, notFound } from '../../services/response/'
import { MaritalStatuses } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  MaritalStatuses.create(body)
    .then((maritalStatuses) => maritalStatuses.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  MaritalStatuses.count(query)
    .then(count => MaritalStatuses.find(query, select, cursor)
      .then((maritalStatuses) => ({
        count,
        rows: maritalStatuses.map((maritalStatuses) => maritalStatuses.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  MaritalStatuses.findById(params.id)
    .then(notFound(res))
    .then((maritalStatuses) => maritalStatuses ? maritalStatuses.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  MaritalStatuses.findById(params.id)
    .then(notFound(res))
    .then((maritalStatuses) => maritalStatuses ? Object.assign(maritalStatuses, body).save() : null)
    .then((maritalStatuses) => maritalStatuses ? maritalStatuses.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  MaritalStatuses.findById(params.id)
    .then(notFound(res))
    .then((maritalStatuses) => maritalStatuses ? maritalStatuses.remove() : null)
    .then(success(res, 204))
    .catch(next)
