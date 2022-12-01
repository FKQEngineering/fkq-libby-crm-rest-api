import { success, notFound } from '../../services/response/'
import { CardLists } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CardLists.create(body)
    .then((cardLists) => cardLists.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  CardLists.count(query)
    .then(count => CardLists.find(query, select, cursor)
      .then((cardLists) => ({
        count,
        rows: cardLists.map((cardLists) => cardLists.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CardLists.findById(params.id)
    .then(notFound(res))
    .then((cardLists) => cardLists ? cardLists.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CardLists.findById(params.id)
    .then(notFound(res))
    .then((cardLists) => cardLists ? Object.assign(cardLists, body).save() : null)
    .then((cardLists) => cardLists ? cardLists.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CardLists.findById(params.id)
    .then(notFound(res))
    .then((cardLists) => cardLists ? cardLists.remove() : null)
    .then(success(res, 204))
    .catch(next)
