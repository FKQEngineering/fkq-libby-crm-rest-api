import { success, notFound } from '../../services/response/'
import { DateName } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DateName.create(body)
    .then((dateName) => dateName.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  DateName.count(query)
    .then(count => DateName.find(query, select, cursor)
      .then((dateNames) => ({
        count,
        rows: dateNames.map((dateName) => dateName.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DateName.findById(params.id)
    .then(notFound(res))
    .then((dateName) => dateName ? dateName.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DateName.findById(params.id)
    .then(notFound(res))
    .then((dateName) => dateName ? Object.assign(dateName, body).save() : null)
    .then((dateName) => dateName ? dateName.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DateName.findById(params.id)
    .then(notFound(res))
    .then((dateName) => dateName ? dateName.remove() : null)
    .then(success(res, 204))
    .catch(next)
