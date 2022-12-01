import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { EventDates } from '.'

const app = () => express(apiRoot, routes)

let eventDates

beforeEach(async () => {
  eventDates = await EventDates.create({})
})

test('POST /eventDates 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ datevalue: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.datevalue).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
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
    .get(`${apiRoot}/${eventDates.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(eventDates.id)
})

test('GET /eventDates/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /eventDates/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${eventDates.id}`)
    .send({ datevalue: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(eventDates.id)
  expect(body.datevalue).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('PUT /eventDates/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ datevalue: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(404)
})

test('DELETE /eventDates/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${eventDates.id}`)
  expect(status).toBe(204)
})

test('DELETE /eventDates/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
