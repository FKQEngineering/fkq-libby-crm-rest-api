import { success, notFound } from '../../services/response/'
import { PhoneName } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PhoneName.create(body)
    .then((phoneName) => phoneName.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  PhoneName.count(query)
    .then(count => PhoneName.find(query, select, cursor)
      .then((phoneNames) => ({
        count,
        rows: phoneNames.map((phoneName) => phoneName.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PhoneName.findById(params.id)
    .then(notFound(res))
    .then((phoneName) => phoneName ? phoneName.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PhoneName.findById(params.id)
    .then(notFound(res))
    .then((phoneName) => phoneName ? Object.assign(phoneName, body).save() : null)
    .then((phoneName) => phoneName ? phoneName.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PhoneName.findById(params.id)
    .then(notFound(res))
    .then((phoneName) => phoneName ? phoneName.remove() : null)
    .then(success(res, 204))
    .catch(next)
