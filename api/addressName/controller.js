import { success, notFound } from '../../services/response/'
import { AddressName } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  AddressName.create(body)
    .then((addressName) => addressName.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  AddressName.count(query)
    .then(count => AddressName.find(query, select, cursor)
      .then((addressNames) => ({
        count,
        rows: addressNames.map((addressName) => addressName.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AddressName.findById(params.id)
    .then(notFound(res))
    .then((addressName) => addressName ? addressName.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AddressName.findById(params.id)
    .then(notFound(res))
    .then((addressName) => addressName ? Object.assign(addressName, body).save() : null)
    .then((addressName) => addressName ? addressName.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AddressName.findById(params.id)
    .then(notFound(res))
    .then((addressName) => addressName ? addressName.remove() : null)
    .then(success(res, 204))
    .catch(next)
