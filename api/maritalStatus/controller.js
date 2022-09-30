import { success, notFound } from '../../services/response/'
import { MaritalStatus } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  MaritalStatus.create(body)
    .then((maritalStatus) => maritalStatus.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  MaritalStatus.count(query)
    .then(count => MaritalStatus.find(query, select, cursor)
      .then((maritalStatuses) => ({
        count,
        rows: maritalStatuses.map((maritalStatus) => maritalStatus.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  MaritalStatus.findById(params.id)
    .then(notFound(res))
    .then((maritalStatus) => maritalStatus ? maritalStatus.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  MaritalStatus.findById(params.id)
    .then(notFound(res))
    .then((maritalStatus) => maritalStatus ? Object.assign(maritalStatus, body).save() : null)
    .then((maritalStatus) => maritalStatus ? maritalStatus.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  MaritalStatus.findById(params.id)
    .then(notFound(res))
    .then((maritalStatus) => maritalStatus ? maritalStatus.remove() : null)
    .then(success(res, 204))
    .catch(next)
