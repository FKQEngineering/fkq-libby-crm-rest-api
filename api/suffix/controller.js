import { success, notFound } from '../../services/response/'
import { Suffix } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Suffix.create(body)
    .then((suffix) => suffix.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Suffix.count(query)
    .then(count => Suffix.find(query, select, cursor)
      .then((suffixes) => ({
        count,
        rows: suffixes.map((suffix) => suffix.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Suffix.findById(params.id)
    .then(notFound(res))
    .then((suffix) => suffix ? suffix.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Suffix.findById(params.id)
    .then(notFound(res))
    .then((suffix) => suffix ? Object.assign(suffix, body).save() : null)
    .then((suffix) => suffix ? suffix.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Suffix.findById(params.id)
    .then(notFound(res))
    .then((suffix) => suffix ? suffix.remove() : null)
    .then(success(res, 204))
    .catch(next)
