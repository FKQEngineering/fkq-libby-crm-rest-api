import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Emails } from '.'

const app = () => express(apiRoot, routes)

let emails

beforeEach(async () => {
  emails = await Emails.create({})
})

test('POST /emails 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ emailAddress: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.emailAddress).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('GET /emails 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /emails/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${emails.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(emails.id)
})

test('GET /emails/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /emails/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${emails.id}`)
    .send({ emailAddress: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(emails.id)
  expect(body.emailAddress).toEqual('test')
  expect(body.note).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedBy).toEqual('test')
  expect(body.isDeleted).toEqual('test')
})

test('PUT /emails/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ emailAddress: 'test', note: 'test', createdBy: 'test', modifiedBy: 'test', isDeleted: 'test' })
  expect(status).toBe(404)
})

test('DELETE /emails/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${emails.id}`)
  expect(status).toBe(204)
})

test('DELETE /emails/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
