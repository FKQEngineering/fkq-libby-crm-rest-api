import { success, notFound } from '../../services/response/'
import { Relationship } from '.'

export const create = ({ body }, res, next) =>
  Relationship.create(body)
    .then((relationship) => relationship.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Relationship.count(query)
    .then(count => Relationship.find(query, select, cursor)
      .then((relationships) => ({
        count,
        rows: relationships.map((relationship) => relationship.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Relationship.findById(params.id)
    .then(notFound(res))
    .then((relationship) => relationship ? relationship.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ body, params }, res, next) =>
  Relationship.findById(params.id)
    .then(notFound(res))
    .then((relationship) => relationship ? Object.assign(relationship, body).save() : null)
    .then((relationship) => relationship ? relationship.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Relationship.findById(params.id)
    .then(notFound(res))
    .then((relationship) => relationship ? relationship.remove() : null)
    .then(success(res, 204))
    .catch(next)
