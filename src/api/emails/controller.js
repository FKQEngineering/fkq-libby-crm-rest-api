import { success, notFound } from '../../services/response/'
import { Emails } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Emails.create(body)
    .then((emails) => emails.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Emails.count(query)
    .then(count => Emails.find(query, select, cursor)
      .then((emails) => ({
        count,
        rows: emails.map((emails) => emails.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Emails.findById(params.id)
    .then(notFound(res))
    .then((emails) => emails ? emails.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Emails.findById(params.id)
    .then(notFound(res))
    .then((emails) => emails ? Object.assign(emails, body).save() : null)
    .then((emails) => emails ? emails.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Emails.findById(params.id)
    .then(notFound(res))
    .then((emails) => emails ? emails.remove() : null)
    .then(success(res, 204))
    .catch(next)
