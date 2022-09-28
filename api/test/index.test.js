import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Test } from '.'

const app = () => express(apiRoot, routes)

let test

beforeEach(async () => {
  test = await Test.create({})
})

test('POST /tests 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ id: 'test', name: 'test', title: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.title).toEqual('test')
})

test('GET /tests 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tests/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${test.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(test.id)
})

test('GET /tests/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tests/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${test.id}`)
    .send({ id: 'test', name: 'test', title: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(test.id)
  expect(body.id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.title).toEqual('test')
})

test('PUT /tests/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ id: 'test', name: 'test', title: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tests/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${test.id}`)
  expect(status).toBe(204)
})

test('DELETE /tests/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
