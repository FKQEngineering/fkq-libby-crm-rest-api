import { success, notFound } from '../../services/response/'
import { Addresses } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Addresses.create(body)
    .then((addresses) => addresses.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Addresses.count(query)
    .then(count => Addresses.find(query, select, cursor)
      .then((addresses) => ({
        count,
        rows: addresses.map((addresses) => addresses.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Addresses.findById(params.id)
    .then(notFound(res))
    .then((addresses) => addresses ? addresses.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Addresses.findById(params.id)
    .then(notFound(res))
    .then((addresses) => addresses ? Object.assign(addresses, body).save() : null)
    .then((addresses) => addresses ? addresses.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Addresses.findById(params.id)
    .then(notFound(res))
    .then((addresses) => addresses ? addresses.remove() : null)
    .then(success(res, 204))
    .catch(next)
