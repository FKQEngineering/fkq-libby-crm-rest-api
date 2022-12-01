import { success, notFound } from '../../services/response/'
import { Relationships } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Relationships.create(body)
    .then((relationships) => relationships.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Relationships.count(query)
    .then(count => Relationships.find(query, select, cursor)
      .then((relationships) => ({
        count,
        rows: relationships.map((relationships) => relationships.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Relationships.findById(params.id)
    .then(notFound(res))
    .then((relationships) => relationships ? relationships.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Relationships.findById(params.id)
    .then(notFound(res))
    .then((relationships) => relationships ? Object.assign(relationships, body).save() : null)
    .then((relationships) => relationships ? relationships.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Relationships.findById(params.id)
    .then(notFound(res))
    .then((relationships) => relationships ? relationships.remove() : null)
    .then(success(res, 204))
    .catch(next)
