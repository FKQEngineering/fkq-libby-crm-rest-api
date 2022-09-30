import { success, notFound } from '../../services/response/'
import { Phone } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Phone.create(body)
    .then((phone) => phone.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Phone.count(query)
    .then(count => Phone.find(query, select, cursor)
      .then((phones) => ({
        count,
        rows: phones.map((phone) => phone.view())
      }))
    )
    .then(success(res))
    .catch(next)
    
export const show = ({ params }, res, next) =>
  Phone.findById(params.id)
    .then(notFound(res))
    .then((phone) => phone ? phone.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Phone.findById(params.id)
    .then(notFound(res))
    .then((phone) => phone ? Object.assign(phone, body).save() : null)
    .then((phone) => phone ? phone.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Phone.findById(params.id)
    .then(notFound(res))
    .then((phone) => phone ? phone.remove() : null)
    .then(success(res, 204))
    .catch(next)
