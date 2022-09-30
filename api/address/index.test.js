import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Address } from '.'

const app = () => express(apiRoot, routes)

let address

beforeEach(async () => {
  address = await Address.create({})
})

test('POST /addresses 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test', isDefault: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.street1).toEqual('test')
  expect(body.street2).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.zip).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
  expect(body.isDefault).toEqual('test')
})

test('GET /addresses 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /addresses/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${address.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(address.id)
})

test('GET /addresses/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /addresses/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${address.id}`)
    .send({ street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test', isDefault: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(address.id)
  expect(body.street1).toEqual('test')
  expect(body.street2).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.zip).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
  expect(body.isDefault).toEqual('test')
})

test('PUT /addresses/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test', isDefault: 'test' })
  expect(status).toBe(404)
})

test('DELETE /addresses/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${address.id}`)
  expect(status).toBe(204)
})

test('DELETE /addresses/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
