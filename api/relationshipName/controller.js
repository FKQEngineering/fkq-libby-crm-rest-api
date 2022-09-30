import { success, notFound } from '../../services/response/'
import { RelationshipName } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  RelationshipName.create(body)
    .then((relationshipName) => relationshipName.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  RelationshipName.count(query)
    .then(count => RelationshipName.find(query, select, cursor)
      .then((relationshipNames) => ({
        count,
        rows: relationshipNames.map((relationshipName) => relationshipName.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  RelationshipName.findById(params.id)
    .then(notFound(res))
    .then((relationshipName) => relationshipName ? relationshipName.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  RelationshipName.findById(params.id)
    .then(notFound(res))
    .then((relationshipName) => relationshipName ? Object.assign(relationshipName, body).save() : null)
    .then((relationshipName) => relationshipName ? relationshipName.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  RelationshipName.findById(params.id)
    .then(notFound(res))
    .then((relationshipName) => relationshipName ? relationshipName.remove() : null)
    .then(success(res, 204))
    .catch(next)
