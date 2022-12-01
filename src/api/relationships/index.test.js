import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Relationships } from '.'

const app = () => express(apiRoot, routes)

let relationships

beforeEach(async () => {
  relationships = await Relationships.create({})
})

test('POST /relationships 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('GET /relationships 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /relationships/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${relationships.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(relationships.id)
})

test('GET /relationships/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /relationships/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${relationships.id}`)
    .send({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(relationships.id)
  expect(body.name).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('PUT /relationships/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(404)
})

test('DELETE /relationships/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${relationships.id}`)
  expect(status).toBe(204)
})

test('DELETE /relationships/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
