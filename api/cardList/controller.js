import { success, notFound } from '../../services/response/'
import { CardList } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  CardList.create(body)
    .then((cardList) => cardList.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  CardList.count(query)
    .then(count => CardList.find(query, select, cursor)
      .then((cardLists) => ({
        count,
        rows: cardLists.map((cardList) => cardList.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CardList.findById(params.id)
    .then(notFound(res))
    .then((cardList) => cardList ? cardList.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CardList.findById(params.id)
    .then(notFound(res))
    .then((cardList) => cardList ? Object.assign(cardList, body).save() : null)
    .then((cardList) => cardList ? cardList.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CardList.findById(params.id)
    .then(notFound(res))
    .then((cardList) => cardList ? cardList.remove() : null)
    .then(success(res, 204))
    .catch(next)
