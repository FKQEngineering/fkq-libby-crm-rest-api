import { success, notFound } from '../../services/response/'
import { Phones } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Phones.create(body)
    .then((phones) => phones.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Phones.count(query)
    .then(count => Phones.find(query, select, cursor)
      .then((phones) => ({
        count,
        rows: phones.map((phones) => phones.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Phones.findById(params.id)
    .then(notFound(res))
    .then((phones) => phones ? phones.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Phones.findById(params.id)
    .then(notFound(res))
    .then((phones) => phones ? Object.assign(phones, body).save() : null)
    .then((phones) => phones ? phones.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Phones.findById(params.id)
    .then(notFound(res))
    .then((phones) => phones ? phones.remove() : null)
    .then(success(res, 204))
    .catch(next)
