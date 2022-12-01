import { success, notFound } from '../../services/response/'
import { Genders } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Genders.create(body)
    .then((genders) => genders.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Genders.count(query)
    .then(count => Genders.find(query, select, cursor)
      .then((genders) => ({
        count,
        rows: genders.map((genders) => genders.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Genders.findById(params.id)
    .then(notFound(res))
    .then((genders) => genders ? genders.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Genders.findById(params.id)
    .then(notFound(res))
    .then((genders) => genders ? Object.assign(genders, body).save() : null)
    .then((genders) => genders ? genders.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Genders.findById(params.id)
    .then(notFound(res))
    .then((genders) => genders ? genders.remove() : null)
    .then(success(res, 204))
    .catch(next)
