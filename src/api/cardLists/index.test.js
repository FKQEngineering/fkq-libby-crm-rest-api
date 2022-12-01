import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CardLists } from '.'

const app = () => express(apiRoot, routes)

let cardLists

beforeEach(async () => {
  cardLists = await CardLists.create({})
})

test('POST /cardLists 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', quantity: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.quantity).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('GET /cardLists 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /cardLists/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${cardLists.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cardLists.id)
})

test('GET /cardLists/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /cardLists/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${cardLists.id}`)
    .send({ name: 'test', quantity: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cardLists.id)
  expect(body.name).toEqual('test')
  expect(body.quantity).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('PUT /cardLists/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', quantity: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(404)
})

test('DELETE /cardLists/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${cardLists.id}`)
  expect(status).toBe(204)
})

test('DELETE /cardLists/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
