import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { EventDate } from '.'

const app = () => express(apiRoot, routes)

let eventDate

beforeEach(async () => {
  eventDate = await EventDate.create({ dateValue: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
})

test('POST /eventDates 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ dateValue: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.dateValue).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('GET /eventDates 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /eventDates/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${eventDate.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(eventDate.id)
})

test('GET /eventDates/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /eventDates/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${eventDate.id}`)
    .send({ dateValue: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(eventDate.id)
  expect(body.dateValue).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('PUT /eventDates/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ dateValue: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(404)
})

test('DELETE /eventDates/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${eventDate.id}`)
  expect(status).toBe(204)
})

test('DELETE /eventDates/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
