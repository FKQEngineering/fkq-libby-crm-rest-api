import { success, notFound } from '../../services/response/'
import { CardListType } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CardListType.create(body)
    .then((cardListType) => cardListType.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  CardListType.count(query)
    .then(count => CardListType.find(query, select, cursor)
      .then((cardListTypes) => ({
        count,
        rows: cardListTypes.map((cardListType) => cardListType.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CardListType.findById(params.id)
    .then(notFound(res))
    .then((cardListType) => cardListType ? cardListType.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CardListType.findById(params.id)
    .then(notFound(res))
    .then((cardListType) => cardListType ? Object.assign(cardListType, body).save() : null)
    .then((cardListType) => cardListType ? cardListType.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CardListType.findById(params.id)
    .then(notFound(res))
    .then((cardListType) => cardListType ? cardListType.remove() : null)
    .then(success(res, 204))
    .catch(next)
