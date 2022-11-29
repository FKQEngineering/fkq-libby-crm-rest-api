import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Addresses } from '.'

const app = () => express(apiRoot, routes)

let addresses

beforeEach(async () => {
  addresses = await Addresses.create({})
})

test('POST /addresses 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', createdDate: 'test', CreatedBy: 'test', modifieddate: 'test', iDeleted: 'test', isDefault: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.street1).toEqual('test')
  expect(body.street2).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.zip).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createdDate).toEqual('test')
  expect(body.CreatedBy).toEqual('test')
  expect(body.modifieddate).toEqual('test')
  expect(body.iDeleted).toEqual('test')
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
    .get(`${apiRoot}/${addresses.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(addresses.id)
})

test('GET /addresses/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /addresses/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${addresses.id}`)
    .send({ name: 'test', street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', createdDate: 'test', CreatedBy: 'test', modifieddate: 'test', iDeleted: 'test', isDefault: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(addresses.id)
  expect(body.name).toEqual('test')
  expect(body.street1).toEqual('test')
  expect(body.street2).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.zip).toEqual('test')
  expect(body.country).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createdDate).toEqual('test')
  expect(body.CreatedBy).toEqual('test')
  expect(body.modifieddate).toEqual('test')
  expect(body.iDeleted).toEqual('test')
  expect(body.isDefault).toEqual('test')
})

test('PUT /addresses/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', street1: 'test', street2: 'test', city: 'test', state: 'test', zip: 'test', country: 'test', note: 'test', createdDate: 'test', CreatedBy: 'test', modifieddate: 'test', iDeleted: 'test', isDefault: 'test' })
  expect(status).toBe(404)
})

test('DELETE /addresses/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${addresses.id}`)
  expect(status).toBe(204)
})

test('DELETE /addresses/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
