import { success, notFound } from '../../services/response/'
import { Gender } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Gender.create(body)
    .then((gender) => gender.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Gender.count(query)
    .then(count => Gender.find(query, select, cursor)
      .then((genders) => ({
        count,
        rows: genders.map((gender) => gender.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Gender.findById(params.id)
    .then(notFound(res))
    .then((gender) => gender ? gender.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Gender.findById(params.id)
    .then(notFound(res))
    .then((gender) => gender ? Object.assign(gender, body).save() : null)
    .then((gender) => gender ? gender.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Gender.findById(params.id)
    .then(notFound(res))
    .then((gender) => gender ? gender.remove() : null)
    .then(success(res, 204))
    .catch(next)
