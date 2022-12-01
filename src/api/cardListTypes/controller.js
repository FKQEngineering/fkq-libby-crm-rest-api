import { success, notFound } from '../../services/response/'
import { CardListTypes } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CardListTypes.create(body)
    .then((cardListTypes) => cardListTypes.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  CardListTypes.count(query)
    .then(count => CardListTypes.find(query, select, cursor)
      .then((cardListTypes) => ({
        count,
        rows: cardListTypes.map((cardListTypes) => cardListTypes.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CardListTypes.findById(params.id)
    .then(notFound(res))
    .then((cardListTypes) => cardListTypes ? cardListTypes.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CardListTypes.findById(params.id)
    .then(notFound(res))
    .then((cardListTypes) => cardListTypes ? Object.assign(cardListTypes, body).save() : null)
    .then((cardListTypes) => cardListTypes ? cardListTypes.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CardListTypes.findById(params.id)
    .then(notFound(res))
    .then((cardListTypes) => cardListTypes ? cardListTypes.remove() : null)
    .then(success(res, 204))
    .catch(next)
