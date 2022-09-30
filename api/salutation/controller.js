import { success, notFound } from '../../services/response/'
import { Salutation } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Salutation.create(body)
    .then((salutation) => salutation.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Salutation.count(query)
    .then(count => Salutation.find(query, select, cursor)
      .then((salutations) => ({
        count,
        rows: salutations.map((salutation) => salutation.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Salutation.findById(params.id)
    .then(notFound(res))
    .then((salutation) => salutation ? salutation.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Salutation.findById(params.id)
    .then(notFound(res))
    .then((salutation) => salutation ? Object.assign(salutation, body).save() : null)
    .then((salutation) => salutation ? salutation.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Salutation.findById(params.id)
    .then(notFound(res))
    .then((salutation) => salutation ? salutation.remove() : null)
    .then(success(res, 204))
    .catch(next)
