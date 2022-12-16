import { success, notFound } from '../../services/response/';
import Contacts from './model';

export const create = async (req, res, next) => {
  try {
    await Contacts.create(req.body)
      .then((newcontact) => {
        return res.status(201).json({
          success: true,
          message: 'New contact created successfully',
          Contacts: newcontact,
        });
      }).catch((error) => {
        console.log(error, "err")
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: error.message,
        });
      })

  } catch (error) {
    console.log(error, "err")
  }
}

export const index = ({ querymen: { query, select } }, res, next) => {
  Contacts.count(query)
    .then(count => Contacts.find(query, select)
      .then((contacts) => ({
        count,
        rows: contacts.map((contacts) => contacts.view())
      }))
    )
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Contacts.findById(params.id)
    .then(notFound(res))
    .then((contacts) => contacts ? contacts.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Contacts.findById(params.id)
    .then(notFound(res))
    .then((contacts) => contacts ? Object.assign(contacts, body).save() : null)
    .then((contacts) => contacts ? contacts.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Contacts.findById(params.id)
    .then(notFound(res))
    .then((contacts) => contacts ? contacts.remove() : null)
    .then(success(res, 204))
    .catch(next)
