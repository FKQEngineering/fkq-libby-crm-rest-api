import { success, notFound } from '../../services/response/'
import { EventDates } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  EventDates.create(body)
    .then((eventDates) => eventDates.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  EventDates.count(query)
    .then(count => EventDates.find(query, select, cursor)
      .then((eventDates) => ({
        count,
        rows: eventDates.map((eventDates) => eventDates.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  EventDates.findById(params.id)
    .then(notFound(res))
    .then((eventDates) => eventDates ? eventDates.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  EventDates.findById(params.id)
    .then(notFound(res))
    .then((eventDates) => eventDates ? Object.assign(eventDates, body).save() : null)
    .then((eventDates) => eventDates ? eventDates.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  EventDates.findById(params.id)
    .then(notFound(res))
    .then((eventDates) => eventDates ? eventDates.remove() : null)
    .then(success(res, 204))
    .catch(next)
