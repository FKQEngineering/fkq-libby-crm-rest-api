import { success, notFound } from '../../services/response/'
import { Suffixes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Suffixes.create(body)
    .then((suffixes) => suffixes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Suffixes.count(query)
    .then(count => Suffixes.find(query, select, cursor)
      .then((suffixes) => ({
        count,
        rows: suffixes.map((suffixes) => suffixes.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Suffixes.findById(params.id)
    .then(notFound(res))
    .then((suffixes) => suffixes ? suffixes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Suffixes.findById(params.id)
    .then(notFound(res))
    .then((suffixes) => suffixes ? Object.assign(suffixes, body).save() : null)
    .then((suffixes) => suffixes ? suffixes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Suffixes.findById(params.id)
    .then(notFound(res))
    .then((suffixes) => suffixes ? suffixes.remove() : null)
    .then(success(res, 204))
    .catch(next)
