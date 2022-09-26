import { success, notFound } from '../../services/response/'
import { Address } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Address.create(body)
    .then((address) => address.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Address.count(query)
    .then(count => Address.find(query, select, cursor)
      .then((addresses) => ({
        count,
        rows: addresses.map((address) => address.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Address.findById(params.id)
    .then(notFound(res))
    .then((address) => address ? address.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Address.findById(params.id)
    .then(notFound(res))
    .then((address) => address ? Object.assign(address, body).save() : null)
    .then((address) => address ? address.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Address.findById(params.id)
    .then(notFound(res))
    .then((address) => address ? address.remove() : null)
    .then(success(res, 204))
    .catch(next)
