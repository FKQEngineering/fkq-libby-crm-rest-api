import { success, notFound } from '../../services/response/'
import { Email } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Email.create(body)
    .then((email) => email.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Email.count(query)
    .then(count => Email.find(query, select, cursor)
      .then((emails) => ({
        count,
        rows: emails.map((email) => email.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Email.findById(params.id)
    .then(notFound(res))
    .then((email) => email ? email.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Email.findById(params.id)
    .then(notFound(res))
    .then((email) => email ? Object.assign(email, body).save() : null)
    .then((email) => email ? email.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Email.findById(params.id)
    .then(notFound(res))
    .then((email) => email ? email.remove() : null)
    .then(success(res, 204))
    .catch(next)
