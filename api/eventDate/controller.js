import { success, notFound } from '../../services/response/'
import { EventDate } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  EventDate.create(body)
    .then((eventDate) => eventDate.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  EventDate.count(query)
    .then(count => EventDate.find(query, select, cursor)
      .then((eventDates) => ({
        count,
        rows: eventDates.map((eventDate) => eventDate.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  EventDate.findById(params.id)
    .then(notFound(res))
    .then((eventDate) => eventDate ? eventDate.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  EventDate.findById(params.id)
    .then(notFound(res))
    .then((eventDate) => eventDate ? Object.assign(eventDate, body).save() : null)
    .then((eventDate) => eventDate ? eventDate.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  EventDate.findById(params.id)
    .then(notFound(res))
    .then((eventDate) => eventDate ? eventDate.remove() : null)
    .then(success(res, 204))
    .catch(next)
